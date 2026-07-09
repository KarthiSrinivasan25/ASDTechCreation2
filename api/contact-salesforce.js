// api/contact-salesforce.js
// Vercel Serverless Function — handles the Salesforce OAuth token request
// and Lead creation. Runs server-side, so credentials never reach the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email and message are required.'
      });
    }

    // Salesforce Lead needs separate First/Last name fields
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : firstName;

    // DEBUG: log the domain being used (not sensitive, safe to log)
    console.log('DEBUG - SF_MY_DOMAIN_URL:', process.env.SF_MY_DOMAIN_URL);
    console.log('DEBUG - Token URL:', `${process.env.SF_MY_DOMAIN_URL}/services/oauth2/token`);

    // Step 1: Get access token via OAuth 2.0 Client Credentials Flow
    const tokenRes = await fetch(
      `${process.env.SF_MY_DOMAIN_URL}/services/oauth2/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.SF_CLIENT_ID,
          client_secret: process.env.SF_CLIENT_SECRET
        })
      }
    );

    // DEBUG: check if response is actually JSON before parsing
    const rawText = await tokenRes.text();
    console.log('DEBUG - Token response status:', tokenRes.status);
    console.log('DEBUG - Token raw response (first 200 chars):', rawText.substring(0, 200));

    let tokenData;
    try {
      tokenData = JSON.parse(rawText);
    } catch (parseErr) {
      console.error('DEBUG - Response was not JSON, likely wrong domain URL');
      return res.status(500).json({
        success: false,
        error: 'Salesforce returned an unexpected response. Check SF_MY_DOMAIN_URL.'
      });
    }

    if (!tokenRes.ok) {
      console.error('Salesforce token error:', tokenData);
      return res.status(500).json({
        success: false,
        error: 'Salesforce authentication failed.'
      });
    }

    const { access_token, instance_url } = tokenData;

    // Step 2: Create the Lead
    const leadData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone || '',
      Company: 'Website Inquiry', // no company field in this form
      Description: `Service Interested In: ${service || 'Not specified'}\n\nMessage: ${message}`,
      LeadSource: 'Website'
    };

    const leadRes = await fetch(
      `${instance_url}/services/data/v60.0/sobjects/Lead`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      }
    );

    const leadResult = await leadRes.json();

    if (!leadRes.ok) {
      console.error('Salesforce lead creation error:', leadResult);
      return res.status(500).json({
        success: false,
        error: 'Failed to create lead in Salesforce.'
      });
    }

    return res.status(200).json({ success: true, id: leadResult.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error.' });
  }
}
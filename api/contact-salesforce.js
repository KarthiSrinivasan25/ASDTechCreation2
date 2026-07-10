// api/contact-salesforce.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, Email and Message are required.",
      });
    }

    console.log("SF Domain:", process.env.SF_MY_DOMAIN_URL);

    // ==========================
    // STEP 1 - GET ACCESS TOKEN
    // ==========================

    const tokenRes = await fetch(
      `${process.env.SF_MY_DOMAIN_URL}/services/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.SF_CLIENT_ID,
          client_secret: process.env.SF_CLIENT_SECRET,
        }),
      }
    );

    const tokenText = await tokenRes.text();

    let tokenData;

    try {
      tokenData = JSON.parse(tokenText);
    } catch (e) {
      console.error("Token Response:", tokenText);

      return res.status(500).json({
        success: false,
        error: "Salesforce Token Error",
      });
    }

    if (!tokenRes.ok) {
      console.error(tokenData);

      return res.status(500).json({
        success: false,
        error: tokenData.error_description,
      });
    }

    const { access_token, instance_url } = tokenData;

    console.log("Access Token Generated");

    // ==========================
    // STEP 2 - CREATE CUSTOM OBJECT
    // ==========================

    const enquiryData = {
      Name__c: name,
      Email__c: email,
      Phone__c: phone || "",
      Service__c: service || "",
      Message__c: message,
    };

    console.log(enquiryData);

    const enquiryRes = await fetch(
      `${instance_url}/services/data/v60.0/sobjects/ASD_TechCreation_Enquiry__c`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      }
    );

    const enquiryText = await enquiryRes.text();

    console.log("Create Record Status:", enquiryRes.status);
    console.log("Create Record Response:", enquiryText);

    let enquiryResult;

    try {
      enquiryResult = JSON.parse(enquiryText);
    } catch (e) {
      return res.status(500).json({
        success: false,
        error: enquiryText,
      });
    }

    if (!enquiryRes.ok) {
      console.error(enquiryResult);

      return res.status(500).json({
        success: false,
        error: enquiryResult,
      });
    }

    return res.status(200).json({
      success: true,
      id: enquiryResult.id,
      message: "Enquiry Created Successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
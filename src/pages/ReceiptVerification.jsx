import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./ReceiptVerification.css";
import BreadCrumb from "../component/BreadCrumb";

const API_URL =
  "https://karthikeyanportfolio.helioho.st/api/verify-pdf/verify-receipt.php";

export default function ReceiptVerification() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`${API_URL}?id=${encodeURIComponent(id)}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status && res.data) {
          setVerified(true);
          setCompanyName(res.company_name);
          setData(res.data);
        } else {
          setVerified(false);
          setCompanyName(res.company_name || "");
        }
      })
      .catch(() => {
        setVerified(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="page">
        <div className="card">
          <div className="loading">Verifying receipt...</div>
        </div>
      </div>
    );
  }

  return (
    <>

<BreadCrumb pageName="Verified Receipt" />


    <div className="page">
      <div className="card">
        {verified ? (
          <>
            <div className="card-header">
              <div className="badge-icon">✓</div>
              <h1>Payment Received</h1>
              <p>Verified by {companyName}</p>
            </div>

            <div className="card-body">
              <div className="row">
                <span className="label">Receipt No</span>
                <span className="value">{data.receipt_number}</span>
              </div>

              <div className="row">
                <span className="label">Receipt Date</span>
                <span className="value">{data.payment_date}</span>
              </div>

              <div className="row">
                <span className="label">Invoice No</span>
                <span className="value">{data.invoice_number}</span>
              </div>

              <div className="row">
                <span className="label">Received From</span>
                <span className="value">{data.client_name}</span>
              </div>

              <div className="row">
                <span className="label">Amount</span>
                <span className="value">
                  Rs. {Number(data.amount_paid).toFixed(2)}
                </span>
              </div>

              <div className="row">
                <span className="label">Method</span>
                <span className="value">{data.payment_method}</span>
              </div>
            </div>

            <div className="footer-note">
              This receipt was verified against {companyName}'s records.
            </div>
          </>
        ) : (
          <>
            <div className="card-header error-header">
              <div className="badge-icon">!</div>
              <h1>Verification Failed</h1>
            </div>

            <div className="card-body not-found">
              <div className="badge-icon-error">✕</div>
              <h2>No matching receipt found</h2>
              <p>
                This link may be invalid, expired, or the receipt ID does not
                exist in our records.
              </p>
            </div>

            <div className="footer-note">
              If you believe this is an error, please contact{" "}
              {companyName || "us"} directly.
            </div>
          </>
        )}
      </div>
    </div>
    </>
    
  );
}


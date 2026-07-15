import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./InvoiceVerification.css";
import BreadCrumb from "../component/BreadCrumb";
const API_URL =
  "https://karthikeyanportfolio.helioho.st/api/verify-pdf/verify-invoice.php";

const STATUS_COLORS = {
  PAID: "#4caf50",
  PARTIAL: "#ffc107",
  PENDING: "#f44336",
};

export default function InvoiceVerification() {
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
        <div className="verification-card">
          <div className="loading">Verifying invoice...</div>
        </div>
      </div>
    );
  }

  const status = data?.status?.toUpperCase() || "";
  const statusColor = STATUS_COLORS[status] || "#6b6b6b";

  return (

    <>
     <BreadCrumb pageName="Verified Invoice" />

     <div className="page">
      <div className="verification-card">
        {verified ? (
          <>
            <div className="verification-card-header">
              <div className="badge-icon">✓</div>
              <h1>Genuine Invoice</h1>
              <p>Issued by {companyName}</p>
            </div>

            <div className="verification-card-body">
              <div className="row">
                <span className="label">Invoice No</span>
                <span className="value">{data.invoice_number}</span>
              </div>

              <div className="row">
                <span className="label">Invoice Date</span>
                <span className="value">{data.invoice_date}</span>
              </div>

              <div className="row">
                <span className="label">Due Date</span>
                <span className="value">{data.due_date}</span>
              </div>

              <div className="row">
                <span className="label">Billed To</span>
                <span className="value">{data.client_name}</span>
              </div>

              <div className="row">
                <span className="label">Total Amount</span>
                <span className="value">
                  Rs. {Number(data.total_amount).toFixed(2)}
                </span>
              </div>

              <div className="row">
                <span className="label">Status</span>
                <span className="value">
                  <span
                    className="status-pill"
                    style={{ backgroundColor: statusColor }}
                  >
                    {status}
                  </span>
                </span>
              </div>
            </div>

            <div className="footer-note">
              This invoice was verified against {companyName}'s records.
            </div>
          </>
        ) : (
          <>
            <div className="verification-card-header error-header">
              <div className="badge-icon">!</div>
              <h1>Verification Failed</h1>
            </div>

            <div className="verification-card-body not-found">
              <div className="badge-icon-error">✕</div>
              <h2>No matching invoice found</h2>
              <p>
                This link may be invalid, expired, or the invoice ID does not
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
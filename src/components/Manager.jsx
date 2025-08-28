import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import pdfIcon from "../assets/pdf-icon.svg";
import downloadIcon from "../assets/download.svg";
import refreshSyncIcon from "../assets/refresh_sync_icon.svg";
import "../style/Manager.css";

const Manager = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [message, setMessage] = useState(""); // Added for approval/rejection feedback

  if (!data) {
    return <div className="manager-form-bg">No data submitted.</div>;
  }
  const {
    initiationType,
    project,
    reporteeName,
    reasonForLeave,
    passportNumber,
    dateOfIssue,
    dateOfExpiry,
    fullName,
    dob,
    address,
    state,
    personalEmail,
    officeEmail,
    mobile,
    officeNumber,
    placeToTravel,
    purposeOfTravel,
    travelFrom,
    travelTo,
    noOfEntry,
    holdingValidVisa,
    visaRows,
    comment,
    attachment,
  } = data;

  const handleTransferWorkflow = () => {
  navigate("/team-head", { state: { data } });
};

  const handleApprove = () => {
    setMessage("Request Approved Successfully!");
  };

  const handleReject = () => {
    setMessage("Request Rejected Successfully!");
  };

  const handleDownload = (file) => {
    if (file.url) {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      link.click();
    } else {
      const blob = new Blob([file.content || "Sample File Content"], {
        type: "application/pdf",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="manager-form-bg">
      <form className="manager-form-main">
        <div className="manager-top-row">
          <div className="manager-left-form">
            <div className="manager-form-label">Initiation Type</div>
            <div className="manager-radio-row">
              <label
                className={`radio-label ${
                  initiationType === "me" ? "active" : ""
                }`}
              >
                <input type="radio" checked={initiationType === "me"} disabled />{" "}
                For Me
              </label>
              <label
                className={`radio-label ${
                  initiationType === "reporte" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={initiationType === "reporte"}
                  disabled
                />{" "}
                For My Reportee
              </label>
            </div>
            <div className="manager-form-label mt-28">Project Details</div>
            <div className="manager-form-sub-label">
              Project <span className="required">*</span>
            </div>
            <select value={project} disabled className="manager-input">
              <option value={project}>{project}</option>
            </select>
          </div>
        </div>
        <div className="manager-section-label">Personal Information</div>
        <div className="manager-row">
          <div className="manager-col-3">
            <div className="manager-form-sub-label">
              Passport Number <span className="required">*</span>
            </div>
            <input
              type="text"
              value={passportNumber}
              disabled
              className="manager-input"
            />
          </div>
          <div className="manager-col-3">
            <div className="manager-form-sub-label">
              Full Name (As in Passport) <span className="required">*</span>
            </div>
            <input
              type="text"
              value={fullName}
              disabled
              className="manager-input"
            />
          </div>
          <div className="manager-col-3">
            <div className="manager-form-sub-label">
              Date of Birth <span className="required">*</span>
            </div>
            <input type="text" value={dob} disabled className="manager-input" />
          </div>
        </div>
        <div className="manager-row">
          <div className="manager-col-1">
            <div className="manager-form-sub-label">
              Current Address <span className="required">*</span>
            </div>
            <input
              type="text"
              value={address}
              disabled
              className="manager-input"
              placeholder="Enter your Address"
            />
          </div>
        </div>
        <div className="manager-row">
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              State / Province / Region <span className="required">*</span>
            </div>
            <select value={state} disabled className="manager-input">
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Email ID (Personal) <span className="required">*</span>
            </div>
            <input
              type="email"
              value={personalEmail}
              disabled
              className="manager-input"
            />
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Email ID (Official) <span className="required">*</span>
            </div>
            <input
              type="email"
              value={officeEmail}
              disabled
              className="manager-input"
            />
          </div>
        </div>
        <div className="manager-row">
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Mobile Number <span className="required">*</span>
            </div>
            <input
              type="text"
              value={mobile}
              disabled
              className="manager-input"
            />
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Office Number (EXT no) <span className="required">*</span>
            </div>
            <input
              type="text"
              value={officeNumber}
              disabled
              className="manager-input"
            />
          </div>
        </div>
        <div className="manager-section-label">Travel Information</div>
        <div className="manager-row">
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Place to Travel <span className="required">*</span>
            </div>
            <select value={placeToTravel} disabled className="manager-input">
              <option value="United State (Zone B)">
                United State (Zone B)
              </option>
            </select>
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Purpose of Travel <span className="required">*</span>
            </div>
            <input
              type="text"
              value={purposeOfTravel}
              disabled
              className="manager-input"
            />
          </div>
        </div>
        <div className="manager-row">
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              From <span className="required">*</span>
            </div>
            <input
              type="text"
              value={travelFrom}
              disabled
              className="manager-input"
            />
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              To <span className="required">*</span>
            </div>
            <input
              type="text"
              value={travelTo}
              disabled
              className="manager-input"
            />
          </div>
        </div>
        <div className="manager-section-label">
          Visa Information (Korea Requirements)
        </div>
        <div className="manager-row">
          <div className="manager-col-2">
            <div className="manager-form-sub-label">No of Entry</div>
            <div className="manager-radio-row">
              <label
                className={`radio-label ${
                  noOfEntry === "Single" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={noOfEntry === "Single"}
                  disabled
                />{" "}
                Single
              </label>
              <label
                className={`radio-label ${
                  noOfEntry === "Multiple" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={noOfEntry === "Multiple"}
                  disabled
                />{" "}
                Multiple (3 years Validity)
              </label>
            </div>
          </div>
          <div className="manager-col-2">
            <div className="manager-form-sub-label">
              Are you Holding any Valid Visa
            </div>
            <div className="manager-radio-row">
              <label
                className={`radio-label ${
                  holdingValidVisa === "Yes" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={holdingValidVisa === "Yes"}
                  disabled
                />{" "}
                Yes
              </label>
              <label
                className={`radio-label ${
                  holdingValidVisa === "No" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={holdingValidVisa === "No"}
                  disabled
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>
        <div className="manager-table-wrap">
          <table className="manager-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Visa Type</th>
                <th>Valid From</th>
                <th>Valid To</th>
                <th>Entries</th>
              </tr>
            </thead>
            <tbody>
              {visaRows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.country}</td>
                  <td>{row.visaType}</td>
                  <td>{row.validFrom}</td>
                  <td>{row.validTo}</td>
                  <td>{row.entries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="manager-form-sub-label mb-8">Attachment</div>
        <div className="manager-attachment-row">
          {attachment.map((file, idx) => (
            <div className="manager-attach-chip" key={idx}>
              <img
                src={pdfIcon}
                alt="PDF"
                className="manager-attach-pdf-icon"
              />
              <div className="manager-attach-chip-details">
                <div className="manager-attach-file">{file.name}</div>
                <div className="manager-attach-date">
                  {file.date} &nbsp; | &nbsp; {file.time} &nbsp; | &nbsp;{" "}
                  {file.size}
                </div>
              </div>
              <button
                type="button"
                className="manager-attach-chip-download"
                onClick={() => handleDownload(file)}
              >
                <img
                  src={downloadIcon}
                  alt="Download"
                  className="manager-download-icon"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="manager-form-sub-label mb-8">
          Comment (Max 500 Chars)
        </div>
        <textarea
          maxLength={500}
          value={comment}
          disabled
          className="manager-input manager-comment-textarea"
        />
        <div className="manager-submit-row">
          <button
            type="button"
            className="manager-reject-btn"
            onClick={handleReject}
          >
            Reject
          </button>
          <button
            type="button"
            className="manager-approve-btn"
            onClick={handleApprove}
          >
            Approve
          </button>
        </div>
        {message && <div className="manager-message">{message}</div>}
        <div
          className="manager-transfer-row"
          onClick={handleTransferWorkflow}
          style={{ cursor: "pointer" }}
        >
          <span className="manager-sync-icon">
            <img src={refreshSyncIcon} alt="Sync" width={28} height={28} />
          </span>
          <span className="manager-transfer-label">Transfer Workflow</span>
          <span className="manager-transfer-arrow">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <path
                d="M8 6l6 5-6 5"
                stroke="#000000ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Manager;

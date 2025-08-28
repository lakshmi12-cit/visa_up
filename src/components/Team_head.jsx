import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import refreshSyncIcon from "../assets/refresh_sync_icon.svg";
import pdfIcon from "../assets/pdf-icon.svg";
import downloadIcon from "../assets/download.svg";
import '../style/Team_head.css';

const TeamHead = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [actionMessage, setActionMessage] = useState("");

  if (!data) {
    return <div className="team-head-form-bg">No data submitted.</div>;
  }

  const {
    initiationType,
    employeeInfo = {},
    project,
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
    visaRows = [],
    attachment = [],
    comment = ""
  } = data;

  const handleApprove = () => setActionMessage("Request Approved!");
  const handleReject = () => setActionMessage("Request Rejected!");

  return (
    <div className="team-head-form-bg">
      <form className="team-head-form-main">

        {/* Initiation Type */}
       {/* Initiation Type */}
<div className="team-head-section-label" style={{marginBottom: 8}}>Initiation Type</div>

{/* Wrap these radios in a div with a unique class */}
<div className="initiation-type-group team-head-radio-row" style={{marginBottom: 24, gap: 28, display: 'flex', alignItems: 'center'}}>
  <label className="team-head-radio-label">
    <input
      type="radio"
      checked={initiationType === "me"}
      disabled
      className="team-head-radio-input"
    />
    <span className="team-head-radio-custom" />
    <span className="team-head-radio-text">For Me</span>
  </label>
  <label className="team-head-radio-label">
    <input
      type="radio"
      checked={initiationType === "reporte"}
      disabled
      className="team-head-radio-input"
    />
    <span className="team-head-radio-custom" />
    <span className="team-head-radio-text">For My Reportee</span>
  </label>
</div>


        {/* Employee Info */}
        <div className="team-head-section-label">Employee Information</div>
        <div className="team-head-table-wrap">
          <table className="team-head-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Division</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employeeInfo.name || "-"}</td>
                <td>{employeeInfo.id || "-"}</td>
                <td>{employeeInfo.division || "-"}</td>
                <td>{employeeInfo.designation || "-"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Project Details */}
        <div className="team-head-section-label">Project Details</div>
        <div className="team-head-row">
          <div className="team-head-col-1">
            <div className="team-head-form-sub-label">
              Project <span className="required">*</span>
            </div>
            <select value={project} disabled className="team-head-input">
              <option value={project}>{project}</option>
            </select>
          </div>
        </div>

        {/* Personal Information */}
        <div className="team-head-section-label">Personal Information</div>
        <div className="team-head-row">
          <div className="team-head-col-3">
            <div className="team-head-form-sub-label">Passport Number <span className="required">*</span></div>
            <input type="text" value={passportNumber} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-3">
            <div className="team-head-form-sub-label">Date of Issue <span className="required">*</span></div>
            <input type="text" value={dateOfIssue} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-3">
            <div className="team-head-form-sub-label">Date of Expiry <span className="required">*</span></div>
            <input type="text" value={dateOfExpiry} disabled className="team-head-input" />
          </div>
        </div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Full Name (As in Passport) <span className="required">*</span></div>
            <input type="text" value={fullName} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Date of Birth <span className="required">*</span></div>
            <input type="text" value={dob} disabled className="team-head-input" />
          </div>
        </div>
        <div className="team-head-row">
          <div className="team-head-col-1">
            <div className="team-head-form-sub-label">Current Address <span className="required">*</span></div>
            <input type="text" value={address} disabled className="team-head-input" placeholder="Enter your Address" />
          </div>
        </div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">State / Province / Region <span className="required">*</span></div>
            <select value={state} disabled className="team-head-input">
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Email ID (Personal) <span className="required">*</span></div>
            <input type="email" value={personalEmail} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Email ID (Official) <span className="required">*</span></div>
            <input type="email" value={officeEmail} disabled className="team-head-input" />
          </div>
        </div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Mobile Number <span className="required">*</span></div>
            <input type="text" value={mobile} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Office Number (EXT no) <span className="required">*</span></div>
            <input type="text" value={officeNumber} disabled className="team-head-input" />
          </div>
        </div>

        {/* Travel Information */}
        <div className="team-head-section-label">Travel Information</div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Place to Travel <span className="required">*</span></div>
            <select value={placeToTravel} disabled className="team-head-input">
              <option value="United State (Zone B)">United State (Zone B)</option>
            </select>
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Purpose of Travel <span className="required">*</span></div>
            <input type="text" value={purposeOfTravel} disabled className="team-head-input" />
          </div>
        </div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">From <span className="required">*</span></div>
            <input type="text" value={travelFrom} disabled className="team-head-input" />
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">To <span className="required">*</span></div>
            <input type="text" value={travelTo} disabled className="team-head-input" />
          </div>
        </div>

        {/* Visa Information */}
        <div className="team-head-section-label">Visa Information (Korea Requirements)</div>
        <div className="team-head-row">
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">No of Entry</div>
            <div className="team-head-radio-row">
              <label className={`radio-label ${noOfEntry === "Single" ? "active" : ""}`}>
                <input type="radio" checked={noOfEntry === "Single"} disabled /> Single
              </label>
              <label className={`radio-label ${noOfEntry === "Multiple" ? "active" : ""}`}>
                <input type="radio" checked={noOfEntry === "Multiple"} disabled /> Multiple (3 years Validity)
              </label>
            </div>
          </div>
          <div className="team-head-col-2">
            <div className="team-head-form-sub-label">Are you Holding any Valid Visa</div>
            <div className="team-head-radio-row">
              <label className={`radio-label ${holdingValidVisa === "Yes" ? "active" : ""}`}>
                <input type="radio" checked={holdingValidVisa === "Yes"} disabled /> Yes
              </label>
              <label className={`radio-label ${holdingValidVisa === "No" ? "active" : ""}`}>
                <input type="radio" checked={holdingValidVisa === "No"} disabled /> No
              </label>
            </div>
          </div>
        </div>
        <div className="team-head-table-wrap">
          <table className="team-head-table">
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

        {/* Attachment */}
        <div className="team-head-form-sub-label mb-8">Attachment</div>
        <div className="team-head-attachment-row">
          {attachment.map((file, idx) => (
            <div className="team-head-attach-chip" key={idx}>
              <img src={pdfIcon} alt="PDF" className="team-head-attach-pdf-icon" />
              <div className="team-head-attach-chip-details">
                <div className="team-head-attach-file">{file.name}</div>
                <div className="team-head-attach-date">{file.date} &nbsp; | &nbsp; {file.time} &nbsp; | &nbsp; {file.size}</div>
              </div>
              <a
                href={file.url || "#"}
                download={file.name}
                className="team-head-attach-chip-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={downloadIcon} alt="Download" className="team-head-download-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Comment Box */}
        <div className="team-head-form-sub-label mb-8">Comment (Max 500 Chars)</div>
        <textarea
          maxLength={500}
          value={comment}
          disabled
          className="team-head-input team-head-comment-textarea"
        />

        {/* Approve/Reject Actions */}
        <div className="team-head-submit-row" style={{marginTop: 30, display: "flex", gap: 16, justifyContent: "flex-end"}}>
          <button type="button" className="team-head-reject-btn" style={{minWidth: 120}} onClick={handleReject}>Reject</button>
          <button type="button" className="team-head-approve-btn" style={{minWidth: 120}} onClick={handleApprove}>Approve</button>
        </div>
        {actionMessage && <div className="team-head-action-message">{actionMessage}</div>}

        {/* Transfer Workflow */}
        <div
          className="team-head-transfer-row"
          onClick={() => navigate("/reportee", { state: { data } })}
          style={{ cursor: "pointer", marginTop: 20 }}
        >
          <span className="team-head-sync-icon">
            <img src={refreshSyncIcon} alt="Sync" width={28} height={28} />
          </span>
          <span className="team-head-transfer-label">Transfer Workflow</span>
          <span className="team-head-transfer-arrow">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <path d="M8 6l6 5-6 5" stroke="#616FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </form>
    </div>
  );
};

export default TeamHead;

import React from "react";
import { useLocation } from "react-router-dom";
import pdfIcon from "../assets/pdf-icon.svg";
import downloadIcon from "../assets/download.svg";
import deleteIcon from "../assets/delete.svg";
import calendarIcon from "../assets/calendar.svg";
import '../style/Reportee.css';

const Reportee = () => {
  // Get data passed from TeamHead (or previous page) via React Router state
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return <div className="reportee-form-bg">No data submitted.</div>;
  }

  // Use the data from navigation state for display
  const form = data;

  const handleTypeChange = () => {
    // This is a read-only view, so no type switch
    // You may add logic if you want to support toggling between "me" and "reporte"
  };

  return (
    <div className="reportee-form-bg">
      <form className="reportee-form-main">
        {/* Initiation Type */}
        <div className="reportee-section-label" style={{marginBottom: 8}}>Initiation Type</div>
<div className="reportee-radio-row" style={{marginBottom: 24, gap: 28, display: 'flex', alignItems: 'center'}}>
  <label className="reportee-radio-label">
    <input
      type="radio"
      checked={form.initiationType === "me"}
      disabled
      className="reportee-radio-input"
    />
    <span className="reportee-radio-custom" />
    <span className="reportee-radio-text">For Me</span>
  </label>
  <label className="reportee-radio-label">
    <input
      type="radio"
      checked={form.initiationType === "reporte"}
      disabled
      className="reportee-radio-input"
    />
    <span className="reportee-radio-custom" />
    <span className="reportee-radio-text">For My Reportee</span>
  </label>
</div>
        {/* Employee Info (only for Reportee) */}
        {form.employeeInfo && (
          <>
            <div className="reportee-section-label">Employee Information</div>
            <div className="reportee-table-wrap">
              <table className="reportee-table">
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
                    <td>{form.employeeInfo.name}</td>
                    <td>{form.employeeInfo.id}</td>
                    <td>{form.employeeInfo.division}</td>
                    <td>{form.employeeInfo.designation}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="reportee-section-label">Project Details</div>
        <div className="reportee-row">
          <div className="reportee-col-1">
            <div className="reportee-form-sub-label">
              Project <span className="required">*</span>
            </div>
            <select value={form.project} disabled className="reportee-input">
              <option value={form.project}>{form.project}</option>
            </select>
          </div>
        </div>
        <div className="reportee-section-label">Personal Information</div>
        <div className="reportee-row">
          <div className="reportee-col-3">
            <div className="reportee-form-sub-label">
              Passport Number <span className="required">*</span>
            </div>
            <input type="text" value={form.passportNumber} disabled className="reportee-input" />
          </div>
          <div className="reportee-col-3">
            <div className="reportee-form-sub-label">
              Date of Issue <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.dateOfIssue} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
          <div className="reportee-col-3">
            <div className="reportee-form-sub-label">
              Date of Expiry <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.dateOfExpiry} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Full Name (As in Passport) <span className="required">*</span>
            </div>
            <input type="text" value={form.fullName} disabled className="reportee-input" />
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Date of Birth <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.dob} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-1">
            <div className="reportee-form-sub-label">
              Current Address <span className="required">*</span>
            </div>
            <input
              type="text"
              value={form.address}
              disabled
              className="reportee-input"
              placeholder="Enter your Address"
            />
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              State / Province / Region <span className="required">*</span>
            </div>
            <select value={form.state} disabled className="reportee-input">
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Email ID (Personal) <span className="required">*</span>
            </div>
            <input type="email" value={form.personalEmail} disabled className="reportee-input" />
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Email ID (Official) <span className="required">*</span>
            </div>
            <input type="email" value={form.officeEmail} disabled className="reportee-input" />
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Mobile Number <span className="required">*</span>
            </div>
            <input type="text" value={form.mobile} disabled className="reportee-input" />
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Office Number (EXT no) <span className="required">*</span>
            </div>
            <input type="text" value={form.officeNumber} disabled className="reportee-input" />
          </div>
        </div>
        <div className="reportee-section-label">Travel Information</div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Place to Travel <span className="required">*</span>
            </div>
            <select value={form.placeToTravel} disabled className="reportee-input">
              <option value="United State (Zone B)">United State (Zone B)</option>
            </select>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Purpose of Travel <span className="required">*</span>
            </div>
            <input type="text" value={form.purposeOfTravel} disabled className="reportee-input" />
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              From <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.travelFrom} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              To <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.travelTo} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
        </div>
        <div className="reportee-section-label">
          Visa Information (Korea Requirements)
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">No of Entry</div>
            <div className="reportee-radio-row">
              <label className={`radio-label ${form.noOfEntry === "Single" ? "active" : ""}`}>
                <input type="radio" checked={form.noOfEntry === "Single"} readOnly /> Single
              </label>
              <label className={`radio-label ${form.noOfEntry === "Multiple" ? "active" : ""}`}>
                <input type="radio" checked={form.noOfEntry === "Multiple"} readOnly /> Multiple (3 years Validity)
              </label>
            </div>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">Are you Holding any Valid Visa</div>
            <div className="reportee-radio-row">
              <label className={`radio-label ${form.holdingValidVisa === "Yes" ? "active" : ""}`}>
                <input type="radio" checked={form.holdingValidVisa === "Yes"} readOnly /> Yes
              </label>
              <label className={`radio-label ${form.holdingValidVisa === "No" ? "active" : ""}`}>
                <input type="radio" checked={form.holdingValidVisa === "No"} readOnly /> No
              </label>
            </div>
          </div>
        </div>
        <div className="reportee-table-wrap">
          <table className="reportee-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Visa Type</th>
                <th>Valid From</th>
                <th>Valid To</th>
                <th>Entries</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {form.visaRows && form.visaRows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.country}</td>
                  <td>{row.visaType}</td>
                  <td>{row.validFrom}</td>
                  <td>{row.validTo}</td>
                  <td>{row.entries}</td>
                  <td>
                    <button className="reportee-delete-btn" disabled>
                      <img src={deleteIcon} alt="Delete" style={{ width: 22, height: 22 }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reportee-form-sub-label mb-8">Attachment</div>
        <div className="reportee-attachment-row">
          {form.attachment && form.attachment.map((file, idx) => (
            <div className="reportee-attach-chip" key={idx}>
              <img src={pdfIcon} alt="PDF" className="reportee-attach-pdf-icon" />
              <div className="reportee-attach-chip-details">
                <div className="reportee-attach-file">{file.name}</div>
                <div className="reportee-attach-date">
                  {file.date} &nbsp; | &nbsp; {file.time} &nbsp; | &nbsp; {file.size}
                </div>
              </div>
              <button className="reportee-attach-chip-download">
                <img src={downloadIcon} alt="Download" className="reportee-download-icon" />
              </button>
            </div>
          ))}
        </div>
        {/* New Visa Details */}
        <div className="reportee-section-label">New Visa Details</div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Document Submitted On <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input
                type="text"
                value={form.documentSubmittedOn || ""}
                disabled
                className="reportee-input"
              />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">Visa Obtained</div>
            <div className="reportee-radio-row">
              <label className={`radio-label ${form.visaObtained === "Yes" ? "active" : ""}`}>
                <input type="radio" checked={form.visaObtained === "Yes"} readOnly /> Yes
              </label>
              <label className={`radio-label ${form.visaObtained === "No" ? "active" : ""}`}>
                <input type="radio" checked={form.visaObtained === "No"} readOnly /> No
              </label>
            </div>
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Type of Visa <span className="required">*</span>
            </div>
            <input type="text" value={form.typeOfVisa || ""} disabled className="reportee-input" />
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Date of Issue <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input
                type="text"
                value={form.newDateOfIssue || ""}
                disabled
                className="reportee-input"
              />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
        </div>
        <div className="reportee-row">
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Validity From <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.validityFrom || ""} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
          <div className="reportee-col-2">
            <div className="reportee-form-sub-label">
              Validity To <span className="required">*</span>
            </div>
            <div className="reportee-date-input-wrap">
              <input type="text" value={form.validityTo || ""} disabled className="reportee-input" />
              <img src={calendarIcon} alt="calendar" className="reportee-calendar-icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reportee;

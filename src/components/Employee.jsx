import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import addCircleSvg from "../assets/add_circle.svg";
import deleteIcon from "../assets/delete.svg";
import noteIcon from "../assets/note.svg";
import uploadIcon from "../assets/upload-cloud.svg";
import pdfIcon from "../assets/pdf-icon.svg";
import "../style/Employee.css";

const initialAttachment = {
  name: "Flight Ticket.pdf",
  date: "11 Sep, 2023",
  time: "12:24pm",
  size: "13MB",
  url: "", // Default no URL
};

const Employee = ({ onSubmit }) => {
  const navigate = useNavigate();

  // State
  const [initiationType, setInitiationType] = useState("me");
  const [project, setProject] = useState("IoT_Advanced_Features_(SRI_B)_Y2025");
  const [reporteeName, setReporteeName] = useState("Manoj Kandan");
  const [reasonForLeave, setReasonForLeave] = useState("Due to Project Deliverable need to Travel");
  const [passportNumber, setPassportNumber] = useState("3532242424244");
  const [dateOfIssue, setDateOfIssue] = useState(dayjs("2025-05-24"));
  const [dateOfExpiry, setDateOfExpiry] = useState(dayjs("2040-05-24"));
  const [fullName, setFullName] = useState("Manoj Kandan M");
  const [dob, setDob] = useState(dayjs("2025-05-24"));
  const [address, setAddress] = useState("");
  const [state, setState] = useState("Karnataka");
  const [personalEmail, setPersonalEmail] = useState("Manojkandan20@gmail.com");
  const [officeEmail, setOfficeEmail] = useState("Manoj.kandan@partner.samsung.com");
  const [mobile, setMobile] = useState("+91 7550142047");
  const [officeNumber, setOfficeNumber] = useState("20-006");
  const [placeToTravel, setPlaceToTravel] = useState("United State (Zone B)");
  const [purposeOfTravel, setPurposeOfTravel] = useState("xxx-xxx-xx-x");
  const [travelFrom, setTravelFrom] = useState(dayjs("2025-05-24"));
  const [travelTo, setTravelTo] = useState(dayjs("2025-06-30"));
  const [noOfEntry, setNoOfEntry] = useState("Single");
  const [holdingValidVisa, setHoldingValidVisa] = useState("No");
  const [visaCountry, setVisaCountry] = useState("United State (Zone B)");
  const [visaType, setVisaType] = useState("Business");
  const [visaEntries, setVisaEntries] = useState("Single");
  const [visaValidFrom, setVisaValidFrom] = useState(dayjs("2025-05-24"));
  const [visaValidTo, setVisaValidTo] = useState(dayjs("2025-06-30"));
  const [visaRows, setVisaRows] = useState([]);
  const [comment, setComment] = useState("xxx-xxx-xx-xxx-x");
  const [attachment, setAttachment] = useState([initialAttachment]);
  const [fileToAttach, setFileToAttach] = useState(null);

  // Updated logic: when noOfEntry changes, update visaEntries to match (Single/Multiple)
  const handleNoOfEntryChange = (value) => {
    setNoOfEntry(value);
    setVisaEntries(value);
  };

  // Visa Table
  const handleAddVisaRow = () => {
    setVisaRows([
      ...visaRows,
      {
        country: visaCountry,
        visaType,
        validFrom: visaValidFrom.format("DD-MMM-YYYY"),
        validTo: visaValidTo.format("DD-MMM-YYYY"),
        entries: visaEntries,
      },
    ]);
  };

  const handleDeleteVisaRow = (idx) => {
    setVisaRows(visaRows.filter((_, i) => i !== idx));
  };

  // Attachment
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileToAttach(e.target.files[0]);
    }
  };

  const handleAttach = () => {
    if (fileToAttach) {
      const fileUrl = URL.createObjectURL(fileToAttach);
      setAttachment([
        ...attachment,
        {
          name: fileToAttach.name,
          url: fileUrl,
          date: "11 Sep, 2023",
          time: "12:24pm",
          size: `${(fileToAttach.size / (1024 * 1024)).toFixed(0)}MB`,
        },
      ]);
      setFileToAttach(null);
    }
  };

  const handleDeleteAttachment = (idx) => {
    setAttachment(attachment.filter((_, i) => i !== idx));
  };

  // Submit handler: include employeeInfo for downstream pages
  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeInfo = {
      name: initiationType === "me" ? fullName : reporteeName,
      id: "", // You can set from user profile or input if available
      division: "",
      designation: "",
    };
    const data = {
      initiationType,
      project,
      reporteeName,
      reasonForLeave,
      passportNumber,
      dateOfIssue: dateOfIssue.format("DD-MMM-YYYY"),
      dateOfExpiry: dateOfExpiry.format("DD-MMM-YYYY"),
      fullName,
      dob: dob.format("DD-MMM-YYYY"),
      address,
      state,
      personalEmail,
      officeEmail,
      mobile,
      officeNumber,
      placeToTravel,
      purposeOfTravel,
      travelFrom: travelFrom.format("DD-MMM-YYYY"),
      travelTo: travelTo.format("DD-MMM-YYYY"),
      noOfEntry,
      holdingValidVisa,
      visaCountry,
      visaType,
      visaEntries,
      visaValidFrom: visaValidFrom.format("DD-MMM-YYYY"),
      visaValidTo: visaValidTo.format("DD-MMM-YYYY"),
      visaRows,
      comment,
      attachment,
      employeeInfo,
    };
    if (onSubmit) onSubmit(data);
    navigate("/manager", { state: { data } });
  };

 return (
    <div className="employee-form-bg">
      <form className="employee-form-main" onSubmit={handleSubmit}>
        <div className="employee-top-row">
          <div className="employee-left-form">
            <div className="employee-form-label">Initiation Type</div>
            <div className="employee-radio-row">
              <label className={`radio-label ${initiationType === "me" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="initiationType"
                  checked={initiationType === "me"}
                  onChange={() => setInitiationType("me")}
                />
                For Me
              </label>
              <label className={`radio-label ${initiationType === "reporte" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="initiationType"
                  checked={initiationType === "reporte"}
                  onChange={() => setInitiationType("reporte")}
                />
                For My Reportee
              </label>
            </div>
            <div className="employee-form-label mt-28">Project Details</div>
            <div className="employee-form-sub-label">
              Project <span className="required">*</span>
            </div>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="employee-input"
            >
              <option value="IoT_Advanced_Features_(SRI_B)_Y2025">IoT_Advanced_Features_(SRI_B)_Y2025</option>
            </select>
          </div>

          {initiationType === "me" && (
            <div className="employee-note-box-inline">
              <img src={noteIcon} alt="Note" className="note-icon-topright" />
              <b>Note:</b>
              <ol>
                <li>To enter Valid Visa details, please click on the respective column of grid and enter or select values.</li>
                <li>If having more than one visa, press keyboard TAB key on last column after value selection to have a new row.</li>
                <li>Select Country first and proceed for next entries in order to retain entry.</li>
                <li>
                  <b>Press Enter or TAB key on the last column on value selection to confirm or save entry in the grid.</b>
                </li>
              </ol>
            </div>
          )}
        </div>

        {initiationType === "reporte" ? (
          <>
            <div className="employee-form-sub-label mt-28">Initiate For</div>
            <div className="employee-initiate-for-row">
              <input
                type="text"
                className="employee-input"
                value={reporteeName}
                onChange={e => setReporteeName(e.target.value)}
                placeholder="Enter Reportee Name"
              />
              <span className="employee-search-icon">
                <SearchIcon style={{ fontSize: 22, color: "#9CA3AF" }} />
              </span>
            </div>
            <div className="employee-form-sub-label mt-28">Reason for Leave</div>
            <textarea
              className="employee-input employee-textarea"
              value={reasonForLeave}
              onChange={e => setReasonForLeave(e.target.value)}
              rows={2}
            />
            <div className="employee-form-sub-label mt-28">Comment (Max 500 Chars)</div>
            <textarea
              className="employee-input employee-textarea"
              value={comment}
              onChange={e => setComment(e.target.value)}
              maxLength={500}
            />
            <div className="employee-submit-row">
              <button className="employee-submit-btn" type="submit">Submit</button>
            </div>
          </>
        ) : (
          <>
            {/* For Me Form */}
            <div className="employee-section-label">Personal Information</div>
            <div className="employee-row">
              <div className="employee-col-3">
                <div className="employee-form-sub-label">Passport Number <span className="required">*</span></div>
                <input type="text" value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)} className="employee-input" />
              </div>
              <div className="employee-col-3">
                <div className="employee-form-sub-label">Date of Issue <span className="required">*</span></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dateOfIssue}
                    onChange={setDateOfIssue}
                    format="DD-MMM-YYYY"
                    slotProps={{
                      textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="employee-col-3">
                <div className="employee-form-sub-label">Date of Expiry <span className="required">*</span></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dateOfExpiry}
                    onChange={setDateOfExpiry}
                    format="DD-MMM-YYYY"
                    slotProps={{
                      textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Full Name (As in Passport) <span className="required">*</span></div>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="employee-input" />
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Date of Birth <span className="required">*</span></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dob}
                    onChange={setDob}
                    format="DD-MMM-YYYY"
                    slotProps={{
                      textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="employee-row">
              <div className="employee-col-1">
                <div className="employee-form-sub-label">Current Address <span className="required">*</span></div>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="employee-input" placeholder="Enter your Address" />
              </div>
            </div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">State / Province / Region <span className="required">*</span></div>
                <select value={state} onChange={(e) => setState(e.target.value)} className="employee-input">
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Email ID (Personal) <span className="required">*</span></div>
                <input type="email" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} className="employee-input" />
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Email ID (Official) <span className="required">*</span></div>
                <input type="email" value={officeEmail} onChange={(e) => setOfficeEmail(e.target.value)} className="employee-input" />
              </div>
            </div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Mobile Number <span className="required">*</span></div>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="employee-input" />
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Office Number (EXT no) <span className="required">*</span></div>
                <input type="text" value={officeNumber} onChange={(e) => setOfficeNumber(e.target.value)} className="employee-input" />
              </div>
            </div>
            <div className="employee-section-label">Travel Information</div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Place to Travel <span className="required">*</span></div>
                <select value={placeToTravel} onChange={(e) => setPlaceToTravel(e.target.value)} className="employee-input">
                  <option value="United State (Zone B)">United State (Zone B)</option>
                </select>
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Purpose of Travel <span className="required">*</span></div>
                <input type="text" value={purposeOfTravel} onChange={(e) => setPurposeOfTravel(e.target.value)} className="employee-input" />
              </div>
            </div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">From <span className="required">*</span></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={travelFrom}
                    onChange={setTravelFrom}
                    format="DD-MMM-YYYY"
                    slotProps={{
                      textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">To <span className="required">*</span></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={travelTo}
                    onChange={setTravelTo}
                    format="DD-MMM-YYYY"
                    slotProps={{
                      textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="employee-section-label">Visa Information (Korea Requirements)</div>
            <div className="employee-row">
              <div className="employee-col-2">
                <div className="employee-form-sub-label">No of Entry</div>
                <div className="employee-radio-row">
                  <label className={`radio-label ${noOfEntry === "Single" ? "active" : ""}`}>
                    <input type="radio" name="noOfEntry" checked={noOfEntry === "Single"} onChange={() => handleNoOfEntryChange("Single")} />
                    Single
                  </label>
                  <label className={`radio-label ${noOfEntry === "Multiple" ? "active" : ""}`}>
                    <input type="radio" name="noOfEntry" checked={noOfEntry === "Multiple"} onChange={() => handleNoOfEntryChange("Multiple")} />
                    Multiple (3 years Validity)
                  </label>
                </div>
              </div>
              <div className="employee-col-2">
                <div className="employee-form-sub-label">Are you Holding any Valid Visa</div>
                <div className="employee-radio-row">
                  <label className={`radio-label ${holdingValidVisa === "Yes" ? "active" : ""}`}>
                    <input type="radio" name="holdingValidVisa" checked={holdingValidVisa === "Yes"} onChange={() => setHoldingValidVisa("Yes")} />
                    Yes
                  </label>
                  <label className={`radio-label ${holdingValidVisa === "No" ? "active" : ""}`}>
                    <input type="radio" name="holdingValidVisa" checked={holdingValidVisa === "No"} onChange={() => setHoldingValidVisa("No")} />
                    No
                  </label>
                </div>
              </div>
            </div>
            {holdingValidVisa === "No" ? (
              <>
                <div className="employee-form-sub-label mb-8">Attachment</div>
                <div className="employee-attachment-row">
                  <div className="employee-attach-form">
                    <label className="employee-attach-label">
                      <img src={uploadIcon} alt="Choose a File" className="employee-attach-upload-icon" />
                      <span className="employee-attach-label-text">Choose a File</span>
                      <span className="employee-attach-desc">PDF format &bull; Max. 3MB</span>
                      <input type="file" accept="application/pdf" onChange={handleFileChange} style={{ display: "none" }} />
                    </label>
                    <button type="button" className="employee-attach-btn" onClick={handleAttach}>Attach</button>
                  </div>
                  <div className="employee-attach-list">
                    {attachment.map((file, idx) => (
                      <div className="employee-attach-chip" key={idx}>
                        <img src={pdfIcon} alt="PDF" className="employee-attach-pdf-icon" />
                        <div className="employee-attach-chip-details">
                          <div className="employee-attach-file">{file.name}</div>
                          <div className="employee-attach-date">{file.date} &nbsp; | &nbsp; {file.time} &nbsp; | &nbsp; {file.size}</div>
                        </div>
                        <button className="employee-attach-chip-delete" onClick={() => handleDeleteAttachment(idx)}>
                          <img src={deleteIcon} alt="Delete" className="employee-delete-icon" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="employee-form-sub-label mb-8">Comment (Max 500 Chars)</div>
                <textarea
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="employee-input employee-textarea"
                />
                <div className="employee-submit-row">
                  <button className="employee-submit-btn" type="submit">Submit</button>
                </div>
              </>
            ) : (
              <>
                <div className="employee-row">
                  <div className="employee-col-3">
                    <div className="employee-form-sub-label">Country <span className="required">*</span></div>
                    <select value={visaCountry} onChange={(e) => setVisaCountry(e.target.value)} className="employee-input">
                      <option value="United State (Zone B)">United State (Zone B)</option>
                    </select>
                  </div>
                  <div className="employee-col-3">
                    <div className="employee-form-sub-label">Visa Type <span className="required">*</span></div>
                    <input type="text" value={visaType} onChange={(e) => setVisaType(e.target.value)} className="employee-input" />
                  </div>
                  <div className="employee-col-3">
                    <div className="employee-form-sub-label">Entries <span className="required">*</span></div>
                    <select value={visaEntries} onChange={(e) => setVisaEntries(e.target.value)} className="employee-input">
                      <option value="Single">Single</option>
                      <option value="Multiple">Multiple</option>
                    </select>
                  </div>
                </div>
                <div className="employee-row">
                  <div className="employee-col-3">
                    <div className="employee-form-sub-label">Valid From <span className="required">*</span></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={visaValidFrom}
                        onChange={setVisaValidFrom}
                        format="DD-MMM-YYYY"
                        slotProps={{
                          textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="employee-col-3">
                    <div className="employee-form-sub-label">Valid To <span className="required">*</span></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={visaValidTo}
                        onChange={setVisaValidTo}
                        format="DD-MMM-YYYY"
                        slotProps={{
                          textField: { variant: "outlined", fullWidth: true, className: "employee-input" }
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="employee-col-3 employee-add-btn-wrap">
                    <button className="employee-add-btn" type="button" onClick={handleAddVisaRow}>
                      <span className="employee-add-btn-icon">
                        <img src={addCircleSvg} alt="Add" />
                      </span>
                      <span className="employee-add-btn-text">Add</span>
                    </button>
                  </div>
                </div>
                <div className="employee-table-wrap">
                  <table className="employee-table">
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
                      {visaRows.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.country}</td>
                          <td>{row.visaType}</td>
                          <td>{row.validFrom}</td>
                          <td>{row.validTo}</td>
                          <td>{row.entries}</td>
                          <td>
                            <button className="employee-delete-btn" type="button" onClick={() => handleDeleteVisaRow(idx)}>
                              <img src={deleteIcon} alt="Delete" className="employee-delete-icon" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="employee-form-sub-label mb-8">Attachment</div>
                <div className="employee-attachment-row">
                  <div className="employee-attach-form">
                    <label className="employee-attach-label">
                      <img src={uploadIcon} alt="Choose a File" className="employee-attach-upload-icon" />
                      <span className="employee-attach-label-text">Choose a File</span>
                      <span className="employee-attach-desc">PDF format &bull; Max. 3MB</span>
                      <input type="file" accept="application/pdf" onChange={handleFileChange} style={{ display: "none" }} />
                    </label>
                    <button type="button" className="employee-attach-btn" onClick={handleAttach}>Attach</button>
                  </div>
                  <div className="employee-attach-list">
                    {attachment.map((file, idx) => (
                      <div className="employee-attach-chip" key={idx}>
                        <img src={pdfIcon} alt="PDF" className="employee-attach-pdf-icon" />
                        <div className="employee-attach-chip-details">
                          <div className="employee-attach-file">{file.name}</div>
                          <div className="employee-attach-date">{file.date} &nbsp; | &nbsp; {file.time} &nbsp; | &nbsp; {file.size}</div>
                        </div>
                        <button className="employee-attach-chip-delete" type="button" onClick={() => handleDeleteAttachment(idx)}>
                          <img src={deleteIcon} alt="Delete" className="employee-delete-icon" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="employee-form-sub-label mb-8">Comment (Max 500 Chars)</div>
                <textarea
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="employee-input employee-textarea"
                />
                <div className="employee-submit-row">
                  <button className="employee-submit-btn" type="submit">Submit</button>
                </div>
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default Employee;
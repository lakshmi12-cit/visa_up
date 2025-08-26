import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// Import icons from assets
import addCircleSvg from "../assets/add_circle.svg";
import deleteIcon from "../assets/delete.svg";
import noteIcon from "../assets/note.svg";
import "../style/VisaEmployeeInfoUpdate.css";

const initialVisaRow = {
  country: "Somashree Nandy",
  visaType: "23517968",
  validFrom: "24-May-2025",
  validTo: "30-Jun-2025",
  entries: "Single",
};

const VisaEmployeeInfoUpdate = () => {
  const [initiationType, setInitiationType] = useState("reporte");
  const [project, setProject] = useState("IoT_Advanced_Features_(SRI_B)_Y2025");
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
  const [holdingValidVisa, setHoldingValidVisa] = useState("Yes");
  const [visaCountry, setVisaCountry] = useState("United State (Zone B)");
  const [visaType, setVisaType] = useState("Business");
  const [visaEntries, setVisaEntries] = useState("Single");
  const [visaValidFrom, setVisaValidFrom] = useState(dayjs("2025-05-24"));
  const [visaValidTo, setVisaValidTo] = useState(dayjs("2025-06-30"));
  const [visaRows, setVisaRows] = useState([initialVisaRow]);
  const [comment, setComment] = useState("xxx-xxx-xx-xxx-x");

  const handleAddVisaRow = () => {
    setVisaRows([
      ...visaRows,
      {
        country: visaCountry,
        visaType,
        validFrom: visaValidFrom.format("MM/DD/YYYY"),
        validTo: visaValidTo.format("MM/DD/YYYY"),
        entries: visaEntries,
      },
    ]);
  };

  const handleDeleteVisaRow = (idx) => {
    setVisaRows(visaRows.filter((_, i) => i !== idx));
  };

  return (
    <div className="visa-employee-update-container">
      <div className="form-section">
        <div className="form-header">
          <div>
            <div className="form-group">
              <label className="section-label">Initiation Type</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="initiationType"
                    checked={initiationType === "me"}
                    onChange={() => setInitiationType("me")}
                  />
                  For Me
                </label>
                <label>
                  <input
                    type="radio"
                    name="initiationType"
                    checked={initiationType === "reporte"}
                    onChange={() => setInitiationType("reporte")}
                  />
                  For My Reportee
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="section-label">Project Details</label>
              <label className="required-label">Project </label>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className="note-box">
            <img src={noteIcon} alt="Note" className="note-icon-topright" />
            <div className="note-header">Note:</div>
            <ol>
              <li>
                To enter Valid Visa details, please click on the respective column of grid and enter or select values.
              </li>
              <li>
                If having more than one visa, press keyboard TAB key on last column after value selection to have a new row.
              </li>
              <li>
                Select Country first and proceed for next entries in order to retain entry.
              </li>
              <li>
                Press Enter or TAB key on the last column on value selection to confirm or save entry in the grid.
              </li>
            </ol>
          </div>
        </div>
        {/* Personal Information Fields - NO Section Card/Label */}
        <div className="grid-row">
          <div className="form-group flex-2">
            <label className="required-label">Passport Number </label>
            <input
              type="text"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Date of Issue </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateOfIssue}
                onChange={setDateOfIssue}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Date of Expiry </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateOfExpiry}
                onChange={setDateOfExpiry}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="grid-row">
          <div className="form-group flex-2">
            <label className="required-label">Full Name (As in Passport) </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Date of Birth </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dob}
                onChange={setDob}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="form-group">
          <label className="required-label">Current Address </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
            placeholder="Enter your Address"
          />
        </div>
        <div className="grid-row">
          <div className="form-group flex-1">
            <label className="required-label">State / Province / Region </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="input"
            >
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
              {/* Add more */}
            </select>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Email ID (Personal) </label>
            <input
              type="email"
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Email ID (Official) </label>
            <input
              type="email"
              value={officeEmail}
              onChange={(e) => setOfficeEmail(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="grid-row">
          <div className="form-group flex-1">
            <label className="required-label">Mobile Number </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Office Number (EXT no) </label>
            <input
              type="text"
              value={officeNumber}
              onChange={(e) => setOfficeNumber(e.target.value)}
              className="input"
            />
          </div>
        </div>

        {/* Travel Information Fields - NO Section Card/Label */}
        <div className="grid-row">
          <div className="form-group flex-2">
            <label className="required-label">Place to Travel </label>
            <select
              value={placeToTravel}
              onChange={(e) => setPlaceToTravel(e.target.value)}
              className="input"
            >
              <option value="United State (Zone B)">United State (Zone B)</option>
              {/* Add more */}
            </select>
          </div>
          <div className="form-group flex-3">
            <label className="required-label">Purpose of Travel </label>
            <input
              type="text"
              value={purposeOfTravel}
              onChange={(e) => setPurposeOfTravel(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="grid-row align-end">
          <div className="form-group flex-1">
            <label className="required-label">From </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={travelFrom}
                onChange={setTravelFrom}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">To </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={travelTo}
                onChange={setTravelTo}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="form-group flex-1 visa-add-btn-wrap">
            <button type="button" className="add-button" onClick={handleAddVisaRow}>
              <span className="add-icon">
                <img src={addCircleSvg} alt="Add" className="add-circle-icon" />
              </span>
              <span className="add-text">Add</span>
            </button>
          </div>
        </div>

        {/* Visa Information Fields - NO Section Card/Label */}
        <div className="grid-row">
          <div className="form-group flex-1">
            <label className="required-label">No of Entry</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="noOfEntry"
                  checked={noOfEntry === "Single"}
                  onChange={() => setNoOfEntry("Single")}
                />
                Single
              </label>
              <label>
                <input
                  type="radio"
                  name="noOfEntry"
                  checked={noOfEntry === "Multiple"}
                  onChange={() => setNoOfEntry("Multiple")}
                />
                Multiple (3 years Validity)
              </label>
            </div>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Are you Holding any Valid Visa</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="holdingValidVisa"
                  checked={holdingValidVisa === "Yes"}
                  onChange={() => setHoldingValidVisa("Yes")}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="holdingValidVisa"
                  checked={holdingValidVisa === "No"}
                  onChange={() => setHoldingValidVisa("No")}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="form-group flex-2">
            <label className="required-label">Country </label>
            <select
              value={visaCountry}
              onChange={(e) => setVisaCountry(e.target.value)}
              className="input"
            >
              <option value="United State (Zone B)">United State (Zone B)</option>
              {/* Add more */}
            </select>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Visa Type </label>
            <input
              type="text"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Entries </label>
            <select
              value={visaEntries}
              onChange={(e) => setVisaEntries(e.target.value)}
              className="input"
            >
              <option value="Single">Single</option>
              <option value="Multiple">Multiple</option>
            </select>
          </div>
        </div>
        <div className="grid-row">
          <div className="form-group flex-1">
            <label className="required-label">Valid From </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={visaValidFrom}
                onChange={setVisaValidFrom}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="form-group flex-1">
            <label className="required-label">Valid To </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={visaValidTo}
                onChange={setVisaValidTo}
                format="MM/DD/YYYY"
                slotProps={{
                  textField: { variant: 'outlined', fullWidth: true, className: "input" }
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="visa-table-container">
          <table className="visa-table">
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
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteVisaRow(idx)}
                    >
                      <img src={deleteIcon} alt="Delete" className="delete-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <label>Comment (Max 500 Chars)</label>
          <textarea
            maxLength={500}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="input textarea"
          />
        </div>
        <div className="submit-btn-wrap">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default VisaEmployeeInfoUpdate;
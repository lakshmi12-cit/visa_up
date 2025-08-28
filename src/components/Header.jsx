import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import nestIcon from "../assets/nesticon.svg";
import editIcon from "../assets/edit.svg";
import keyIcon from "../assets/key.svg";
import saveIcon from "../assets/save.svg";
import squareIcon from "../assets/square.svg";
import userPhoto from "../assets/man-438081_960_720.svg";

import "../style/Header.css";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState("workspace");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  return (
    <Box className="header-container">
      {/* Left Section */}
      <Box className="header-left">
        <Box className="header-logo-container">
          <Box component="img" src={nestIcon} alt="Nest" className="header-logo" />
          <Typography className="header-title">Nest</Typography>
        </Box>

        <Box className="header-toggle-container">
          <Box 
            className={`header-toggle-btn ${tab === 'workspace' ? 'active' : ''}`}
            onClick={() => setTab('workspace')}
          >
            My Workspace
          </Box>
          <Box 
            className={`header-toggle-btn ${tab === 'manager' ? 'active' : ''}`}
            onClick={() => setTab('manager')}
          >
            Manager Hub
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box className="header-right">
        {/* Search Box */}
        <Box className="header-search-container">
          <SearchIcon className="header-search-icon" />
          <InputBase
            placeholder="search…"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="header-search-input"
          />
        </Box>

        {/* Calendar */}
        <Box className="header-calendar">
          <IconButton
            className="header-calendar-btn"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <CalendarMonthOutlinedIcon className="header-calendar-icon" />
            <Box className="header-calendar-tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </Box>
          </IconButton>

          {selectedDate && (
            <Typography className="header-date-text">
              {dayjs(selectedDate).format("DD-MMM-YYYY")}
            </Typography>
          )}

          {showDatePicker && (
            <Box className="header-datepicker">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: { size: "small", className: "hidden-input" },
                  }}
                  open
                  onClose={() => setShowDatePicker(false)}
                />
              </LocalizationProvider>
            </Box>
          )}
        </Box>

        {/* Asset Icons */}
        {[editIcon, keyIcon, saveIcon, squareIcon].map((icon, i) => (
          <IconButton key={i} className="header-icon-btn">
            <Box component="img" src={icon} alt={`icon-${i}`} className="header-icon-img" />
          </IconButton>
        ))}

        {/* Notifications */}
        <IconButton className="header-notification-btn">
          <Badge
            badgeContent={6}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            className="header-notification-badge"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Profile */}
        <Box className="header-profile">
          <Avatar src={userPhoto} className="header-avatar" />
          <Box className="header-profile-info">
            <Typography className="header-profile-name">Isha Kumar</Typography>
            <Typography className="header-profile-role">Sr. Developer</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

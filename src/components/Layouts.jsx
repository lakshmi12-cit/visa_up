import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Header from './Header';
import { ReactComponent as ViewPoliciesIcon } from '../assets/Viewpolicies.svg';
import { ReactComponent as ArrowForwardIcon } from '../assets/arrow_forward.svg';
import { ReactComponent as AccessAlarmsIcon } from '../assets/access_alarms.svg';
import AvtharImage from '../assets/avthar.svg';
import { ReactComponent as RequiredInfoIcon } from '../assets/Required_info.svg';
import "../style/Layouts.css";

const Layout = ({
  children,
  title,
  subtitle,
  showBackButton = false,
  onBackClick
}) => {
  const employeeData = {
    name: 'Manoj Kandan M',
    genId: '25504878',
    email: 'Manoj.kandan@partner.samsung.com',
    designation: 'Outsourcing',
    division: 'Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools',
    manager: 'Ravindra S R (06786669)'
  };

  return (
    <Box className="layout-container">
      <Header />
      <Box className="layout-content">
        <Typography className="layout-breadcrumb">
          My Workspace {'>'} Invitation & Visa Processing
        </Typography>
        <Box className="layout-card">
          {/* Title row */}
          <Box className="layout-title-row">
            {showBackButton && (
              <Box
                className="layout-back-button"
                onClick={onBackClick}
              >
                <ArrowForwardIcon className="layout-back-icon" />
              </Box>
            )}
            <Typography className="layout-title">
              {title}
              {subtitle && (
                <span className="layout-subtitle">
                  - ({subtitle})
                </span>
              )}
            </Typography>
            <Box className="layout-clock-container">
              <AccessAlarmsIcon className="layout-clock-icon" />
            </Box>
          </Box>

          {/* Employee Details */}
          <Box className="layout-employee-section">
            <Box className="layout-employee-profile">
              <Box className="layout-avatar-container">
                <Box className="layout-avatar-bg">
                  <Box
                    component="img"
                    src={AvtharImage}
                    alt={employeeData.name}
                    className="layout-avatar-img"
                  />
                </Box>
                <Box className="layout-avatar-status" />
              </Box>
              <Box>
                <Typography className="layout-employee-name">
                  {employeeData.name} - Gen ID: {employeeData.genId}
                </Typography>
                <Typography className="layout-employee-email">
                  {employeeData.email}
                </Typography>
              </Box>
            </Box>

            <Box className="layout-divider" />

            <Box className="layout-employee-info">
              <Typography className="layout-label">Designation</Typography>
              <Typography className="layout-value">
                {employeeData.designation}
              </Typography>
            </Box>

            <Box className="layout-divider" />

            <Box className="layout-employee-info layout-division">
              <Typography className="layout-label">Division</Typography>
              <Typography className="layout-value">
                {employeeData.division}
              </Typography>
            </Box>

            <Box className="layout-divider" />

            <Box className="layout-employee-info">
              <Typography className="layout-label">Manager</Typography>
              <Typography className="layout-value">
                {employeeData.manager}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Required Information */}
        <Box className="layout-required-section">
          <RequiredInfoIcon className="layout-required-icon" />
          <Typography className="layout-required-title">
            Required Information
          </Typography>
        </Box>

        {children}

        <Box className="layout-view-policies">
          <Link href="#" underline="hover" className="layout-policies-link">
            <ViewPoliciesIcon className="layout-policies-icon" />
            View Policies
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

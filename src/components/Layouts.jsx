import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Header from './Header';
import { ReactComponent as ViewPoliciesIcon } from '../assets/Viewpolicies.svg';
import { ReactComponent as ArrowForwardIcon } from '../assets/arrow_forward.svg';
import { ReactComponent as AccessAlarmsIcon } from '../assets/access_alarms.svg';
import AvtharImage from '../assets/avthar.svg';
import { ReactComponent as RequiredInfoIcon } from '../assets/Required_info.svg';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#ffffff' }}>
      <Header />
      <Box sx={{ flex: 1, bgcolor: '#ffffff', p: { xs: 1, md: 3 } }}>
        <Typography sx={{ color: '#6B7280', fontSize: 13, mb: 1 }}>
          My Workspace {'>'} Invitation & Visa Processing
        </Typography>
        <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 3, mb: 3, boxShadow: '0 1px 2px rgba(16,30,115,0.04)' }}>
          {/* Title row with arrow and subtitle (all inline) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            {showBackButton && (
              <Box
                sx={{ mr: 1, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={onBackClick}
                className="layout-back-button"
              >
                <ArrowForwardIcon style={{ width: 24, height: 24 }} />
              </Box>
            )}
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 22,
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
              }}
              className="layout-title"
            >
              {title}
              {subtitle && (
                <span
                  className="layout-subtitle"
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: '#6B7280',
                    marginLeft: 8,
                  }}
                >
                  - ({subtitle})
                </span>
              )}
            </Typography>
            <Box
              sx={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
              }}
              className="layout-clock-container"
            >
              <AccessAlarmsIcon style={{ width: 26, height: 26, color: '#00b0ff' }} />
            </Box>
          </Box>
          {/* Employee Details Section */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            pb: 0
          }}>
            {/* Employee Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 280 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  bgcolor: '#4CAF50'
                }}>
                  <Box
                    component="img"
                    src={AvtharImage}
                    alt={employeeData.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 2,
                    right: 2,
                    width: 12,
                    height: 12,
                    backgroundColor: '#eaf5ebff',
                    borderRadius: '50%',
                    border: '2px solid white',
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>
                  {employeeData.name} - Gen ID: {employeeData.genId}
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#6B7280' }}>{employeeData.email}</Typography>
              </Box>
            </Box>
            {/* Vertical Divider */}
            <Box sx={{
              mx: 2,
              alignSelf: 'stretch',
              minHeight: 44,
              height: '44px',
              display: { xs: 'none', sm: 'block' }
            }}>
              <Box sx={{
                width: '1px',
                height: '100%',
                bgcolor: '#e3e8ee',
                marginTop: '4px'
              }} />
            </Box>
            {/* Designation */}
            <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: 14, color: '#6B7280', mb: 0.5 }}>Designation</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{employeeData.designation}</Typography>
            </Box>
            {/* Vertical Divider */}
            <Box sx={{
              mx: 2,
              alignSelf: 'stretch',
              minHeight: 44,
              height: '44px',
              display: { xs: 'none', sm: 'block' }
            }}>
              <Box sx={{
                width: '1px',
                height: '100%',
                bgcolor: '#e3e8ee',
                marginTop: '4px'
              }} />
            </Box>
            {/* Division */}
            <Box sx={{ minWidth: 300, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: 14, color: '#6B7280', mb: 0.5 }}>Division</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{employeeData.division}</Typography>
            </Box>
            {/* Vertical Divider */}
            <Box sx={{
              mx: 2,
              alignSelf: 'stretch',
              minHeight: 44,
              height: '44px',
              display: { xs: 'none', sm: 'block' }
            }}>
              <Box sx={{
                width: '1px',
                height: '100%',
                bgcolor: '#e3e8ee',
                marginTop: '4px'
              }} />
            </Box>
            {/* Manager */}
            <Box sx={{ minWidth: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: 14, color: '#6B7280', mb: 0.5 }}>Manager</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{employeeData.manager}</Typography>
            </Box>
          </Box>
        </Box>
        {/* Required Information Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <RequiredInfoIcon style={{ width: 24, height: 24 }} />
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#110f0fff' }}>
            Required Information
          </Typography>
        </Box>
        {children}
        <Box sx={{ mt: 1 }}>
          <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#6B7280' }}>
            <ViewPoliciesIcon style={{ width: 20, height: 20 }} />
            View Policies
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
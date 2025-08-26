import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Layout from './components/Layouts';
import Employee from './components/Employee';
import Manager from './components/Manager';
import TeamHead from './components/Team_head';
import Reportee from './components/Reportee';

function getSubtitle(pathname) {
  if (pathname === "/") return "Initiate";
  if (pathname === "/manager") return "Manager Approval";
  if (pathname === "/team-head") return "Team Head Approval";
  if (pathname === "/reportee") return "Report";
  return "";
}

function getBackNav(pathname, navigate) {
  if (pathname === "/reportee") return () => navigate("/team-head");
  if (pathname === "/team-head") return () => navigate("/manager");
  if (pathname === "/manager") return () => navigate("/");
  return null;
}

function LayoutWithSubtitle({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const subtitle = getSubtitle(location.pathname);
  const showBackButton = ["/manager", "/team-head", "/reportee"].includes(location.pathname);
  const onBackClick = getBackNav(location.pathname, navigate);

  return (
    <Layout
      title="Invitation & Visa Processing"
      subtitle={subtitle}
      showBackButton={showBackButton}
      onBackClick={onBackClick}
    >
      {children}
    </Layout>
  );
}

export default function App() {
  const [employeeData, setEmployeeData] = useState(null);

  return (
    <Router>
      <LayoutWithSubtitle>
        <Routes>
          <Route path="/" element={<Employee onSubmit={setEmployeeData} />} />
          <Route path="/manager" element={<Manager data={employeeData} />} />
          <Route path="/team-head" element={<TeamHead />} />
          <Route path="/reportee" element={<Reportee />} />
        </Routes>
      </LayoutWithSubtitle>
    </Router>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layouts"; // ✅ fixed import
import VisaEmployeeInfoUpdate from "../components/VisaEmployeeInfoUpdate";

const VisaEmployeeInfoPage = () => {
  const navigate = useNavigate();

  return (
    <Layout
      title="Invitation & Visa Processing"
      subtitle="Employee Visa Info Update"
      showBackButton
      onBackClick={() => navigate(-1)}
    >
      <VisaEmployeeInfoUpdate />
    </Layout>
  );
};

export default VisaEmployeeInfoPage;

import React from "react";
import DBLeftSection from "../component/Dashboard/DBLeftSection";
import DBRightSection from "../component/Dashboard/DBRightSection";

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen ">
      <DBLeftSection />
      <DBRightSection />
    </div>
  );
};

export default Dashboard;

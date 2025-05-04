import React, { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import FeedsAgg from "./FeedsAgg";
import Saved from "./Saved";
import Recent from "./Recent";
import Credits from "./Credits";
import AdminCredits from "./AdminCredits";
import AdminUsers from "./AdminUsers";

const DBRightSection = () => {
  const [credit, setCredit] = useState();
  const [userId, setUserId] = useState(null);

  const getCurrentHanlder = (currentCredit, userId) => {
    setCredit(currentCredit);
    setUserId(userId);
  };

  return (
    <div className=" w-4/5 flex flex-col flex-1">
      <Routes>
        <Route path={"feeds"} element={<FeedsAgg />} />
        <Route path={"saved"} element={<Saved />} />
        <Route path={"recent"} element={<Recent />} />
        <Route path={"credits"} element={<Credits />} />
        <Route
          path={"credits-admin"}
          element={<AdminCredits currentCredit={credit} userId={userId} />}
        />
        <Route
          path={"credits-admin-users"}
          element={<AdminUsers getCurrentCredit={getCurrentHanlder} />}
        />
      </Routes>
    </div>
  );
};

export default DBRightSection;

import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedsAgg from "./FeedsAgg";
import Saved from "./Saved";
import Recent from "./Recent";
import Credits from "./Credits";

const DBRightSection = () => {
  return (
    <div className=" w-4/5 flex flex-col flex-1">
      <Routes>
        <Route path={"feeds"} element={<FeedsAgg />} />
        <Route path={"saved"} element={<Saved />} />
        <Route path={"recent"} element={<Recent />} />
        <Route path={"credits"} element={<Credits />} />
      </Routes>
    </div>
  );
};

export default DBRightSection;

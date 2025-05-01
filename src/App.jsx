import React from "react";
import Login from "./component/Forms/Login";
import Dashboard from "./containers/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <FeedsAgg /> */}
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/dashboard/*"} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;

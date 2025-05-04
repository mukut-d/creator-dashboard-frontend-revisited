import React, { memo } from "react";
import Login from "./component/Forms/Login";
import Dashboard from "./containers/Dashboard";
import { Route, Routes } from "react-router-dom";
import PostProvider from "./store/postsStore";
import { app } from "./firebase";

const App = () => {
  return (
    <PostProvider>
      <div>
        {/* <FeedsAgg /> */}
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/dashboard/*"} element={<Dashboard />} />
        </Routes>
      </div>
    </PostProvider>
  );
};

export default memo(App);

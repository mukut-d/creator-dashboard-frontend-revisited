import React from "react";
import { NavLink } from "react-router-dom";

const dashboardLeftItems = [
  { title: "Home", path: "/" },
  { title: "Feeds", path: "/dashboard/feeds" },
  { title: "Credits", path: "/dashboard/credits" },
  { title: "Admin Credits", path: "/dashboard/credits-admin" },
  { title: "Saved Feeds", path: "/dashboard/saved" },
  { title: "Recent Activity", path: "/dashboard/recent" },
  { title: "Logout", path: "/" },
  // {title: "Feeds", path: "/feeds"},
];

const DBLeftSection = () => {
  return (
    <div className="bg-yellow-300 w-1/5 ">
      <ul className="flex flex-col  gap-3 ">
        <NavLink
          key={dashboardLeftItems[0].title}
          to={dashboardLeftItems[0].path}
          className={`hover:text-white m-3 active:scale-95 active:shadow-inner transition duration-150 cursor-pointer`}
        >
          {dashboardLeftItems[0].title}
        </NavLink>
        <hr />
        {dashboardLeftItems.slice(1).map((item) => {
          return (
            <NavLink
              className={`mx-3 active:scale-95 active:shadow-inner transition duration-150 cursor-pointer hover:text-white`}
              key={item.title}
              to={item.path}
            >
              {item.title}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default DBLeftSection;

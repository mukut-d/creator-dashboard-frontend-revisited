import {
  Bookmark,
  Home,
  Rss,
  Star,
  Clock,
  LogOut,
  ArrowUpRight,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const dashboardLeftItems = [
  { title: "Home", path: "/", icon: <Home /> },
  { title: "Feeds", path: "/dashboard/feeds", icon: <Rss size={20} /> },
  { title: "Credits", path: "/dashboard/credits", icon: <Star size={20} /> },
  {
    title: "Saved Feeds",
    path: "/dashboard/saved",
    icon: <Bookmark size={20} />,
  },
  {
    title: "Recent Activity",
    path: "/dashboard/recent",
    icon: <Clock size={20} />,
  },
  { title: "Logout", path: "/", icon: <LogOut size={20} /> },
  {
    title: "Update Credits",
    path: "/dashboard/credits-admin",
    icon: <ArrowUpRight size={20} />,
  },
  {
    title: "All User Credits",
    path: "/dashboard/credits-admin-users",
    icon: <Users size={20} />,
  },
  // {title: "Feeds", path: "/feeds"},
];

const DBLeftSection = () => {
  return (
    <div className="bg-yellow-300 w-1/5 ">
      <ul className="flex flex-col  gap-3 ">
        <NavLink
          key={dashboardLeftItems[0].title}
          to={dashboardLeftItems[0].path}
          className={` hover:text-white m-3 active:scale-95 active:shadow-inner transition duration-150 cursor-pointer`}
        >
          <div className="flex items-center ">
            {dashboardLeftItems[0]?.icon}
            <span className="m-1">{dashboardLeftItems[0].title}</span>
          </div>
        </NavLink>
        <hr />
        {dashboardLeftItems.slice(1).map((item) => {
          return (
            <NavLink
              className={`mx-3 active:scale-95 active:shadow-inner transition duration-150 cursor-pointer hover:text-white`}
              key={item.title}
              to={item.path}
            >
              <div className="flex items-center">
                {item?.icon}
                <span className="m-1">{item.title}</span>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default DBLeftSection;

import React from "react";
import { usePosts } from "../../hooks/usePosts";
import NoActivity from "../NoActivity";
import { formatDistanceToNow } from "date-fns";

const activityTypeStyle = {
  saved: "bg-green-50 border-green-200",
  reported: "bg-red-50 border-red-200",
  shared: "bg-blue-50 border-blue-200",
};

const Recent = () => {
  const { recent } = usePosts(); // Assumes recent is an array of activity objects

  const getActivityStyle = (action) => {
    return activityTypeStyle[action] || "bg-gray-50 border-gray-200";
  };

  if (!recent || recent.length === 0) {
    return <NoActivity />;
  }

  return (
    <div className="flex justify-center p-10">
      <div className="w-full max-w-4xl h-[600px] overflow-y-auto pr-2 space-y-4">
        {recent
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((item, index) => (
            <div
              key={index}
              className={`border-l-4 ${getActivityStyle(
                item.action
              )} shadow-sm rounded-md p-4 transition hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-lg font-semibold capitalize text-gray-700">
                  {item.action}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-base">
                {item.details} — {item.platform}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recent;

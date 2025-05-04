import React from "react";
import { Clock } from "lucide-react"; // or any icon library

const NoActivity = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center text-gray-600">
      <Clock size={48} className="mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold mb-1">No Recent Activity</h2>
      <p className="text-sm">
        Your recent activity will appear here once you start interacting with
        the feed.
      </p>
    </div>
  );
};

export default NoActivity;

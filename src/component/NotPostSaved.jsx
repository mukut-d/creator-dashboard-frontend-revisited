import React from "react";
import { Bookmark } from "lucide-react";

const NoSavedPosts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center text-gray-600">
      <Bookmark size={48} className="mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold mb-1">No Saved Posts</h2>
      <p className="text-sm">
        Posts you save will appear here for quick access later.
      </p>
    </div>
  );
};

export default NoSavedPosts;

import React from "react";

const FeedCard = ({
  id,
  title,
  platform,
  url,
  savePosts,
  sharePosts,
  reportPosts,
}) => {
  return (
    <div className="bg-white shadow rounded p-4 space-y-2" key={id}>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-500 text-sm">{platform}</div>
      <div className="flex gap-3">
        <button
          onClick={() => savePosts(id)}
          className="text-blue-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Save
        </button>
        <button
          onClick={() => sharePosts(url)}
          className="text-green-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Share
        </button>
        <button
          onClick={() => reportPosts(id)}
          className="text-red-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Report
        </button>
      </div>
    </div>
  );
};

export default FeedCard;

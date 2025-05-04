import React from "react";
import { usePosts } from "../../hooks/usePosts";

const FeedCard = ({
  id,
  title,
  platform,
  url,
  savePosts,
  sharePosts,
  reportPosts,
}) => {
  const { saveActivity } = usePosts();

  const activityHandler = (type) => {
    let activityObj = {
      type: type,
    };
    if (type === "saved") {
      activityObj["others"] = title;
      savePosts(id);
    }

    if (type === "reported") {
      activityObj["others"] = id;
      reportPosts(id);
    }

    if (type === "shared") {
      activityObj["others"] = url;
      sharePosts(url);
    }

    console.log("url " + url);

    saveActivity(activityObj);
  };

  return (
    <div className="bg-white shadow rounded p-4 space-y-2 m-5" key={id}>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-500 text-sm">{platform}</div>
      <div className="flex gap-3">
        <button
          onClick={() => activityHandler("saved")}
          className="text-blue-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Save
        </button>
        <button
          onClick={() => activityHandler("shared")}
          className="text-green-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Share
        </button>
        <button
          onClick={() => activityHandler("reported")}
          className="text-red-500 cursor-pointer active:scale-95 active:shadow-inner transition duration-150"
        >
          Report
        </button>
      </div>
    </div>
  );
};

export default FeedCard;

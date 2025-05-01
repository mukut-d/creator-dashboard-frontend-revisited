import React from "react";

const Recent = () => {
  return (
    <div className="flex-col  flex justify-center items-center " key={1}>
      <div className="flex w-4/5 bg-white shadow rounded-xl p-4 space-y-2 m-7">
        <div className="flex-1 font-normal text-lg">This id reported</div>
        <div className="text-gray-500 text-sm">2 mins ago...</div>
      </div>

      <div className="flex w-4/5 bg-white shadow rounded-xl p-4 space-y-2 m-7">
        <div className="flex-1 font-normal text-lg">This posts saved</div>
        <div className="text-gray-500 text-sm">5 mins ago...</div>
      </div>
      <div className="flex w-4/5 bg-white shadow rounded-xl p-4 space-y-2 m-7">
        <div className="flex-1 font-normal text-lg">This link shared</div>
        <div className="text-gray-500 text-sm">10 mins ago...</div>
      </div>
    </div>
  );
};

export default Recent;

import React from "react";

export const creditDummy = {
  balance: 78,
  history: [
    { type: "daily_login", points: 5, date: "2025-04-30T10:00:00Z" },
    { type: "profile_complete", points: 20, date: "2025-04-29T14:30:00Z" },
    { type: "feed_saved", points: 1, date: "2025-04-29T13:10:00Z" },
    { type: "feed_shared", points: 2, date: "2025-04-29T13:20:00Z" },
    { type: "feed_reported", points: 3, date: "2025-04-29T13:20:00Z" },
  ],
};

const Credits = () => {
  const { balance, history } = creditDummy;
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Credit Balance</h1>
      <p className="text-3xl">
        Total Credits: <span className="font-bold text-6xl">{balance}</span>
      </p>

      <h2 className="text-xl mt-6">Credit History</h2>
      <ul className="space-y-2">
        {history.map((entry, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
            <span className="font-medium">
              {entry.type.replaceAll("_", " ")}
            </span>
            :
            <span className="text-green-600 font-bold ml-2">
              +{entry.points}
            </span>
            <span className="text-sm text-gray-500 ml-3">
              {new Date(entry.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;

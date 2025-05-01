// AdminCredits.jsx
import React, { useState } from "react";
import { creditDummy } from "./Credits";
import toast, { Toaster } from "react-hot-toast";

const updateCredits = () => toast.success(`Credits Updated Successfully`);
const notupdateCredits = (text) => toast.error(text);

const AdminCredits = () => {
  const [credits, setCredits] = useState(creditDummy.balance);
  const [newCredits, setNewCredits] = useState("");

  const handleUpdate = () => {
    setCredits((prev) => {
      if (prev === Number(newCredits)) {
        notupdateCredits("Credits are same as before");
        return prev;
      }

      updateCredits();
      return Number(newCredits);
    });
  };

  return (
    <div className="p-6 h-full ">
      <h2 className="text-xl font-semibold mb-4">Admin Credit Control</h2>
      <p className="text-xl font-normal m-4">
        Current Balance:{" "}
        <strong className="text-4xl font-semibold">{credits}</strong>
      </p>
      <input
        type="number"
        placeholder="Set new balance"
        value={newCredits}
        onChange={(e) => setNewCredits(e.target.value)}
        className="border p-2 mr-2 rounded m-4"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Balance
      </button>
      <Toaster />
    </div>
  );
};

export default AdminCredits;

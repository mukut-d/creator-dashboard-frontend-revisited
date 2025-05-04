import React, { memo, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePosts } from "../../hooks/usePosts";

const updateCreditsAlert = () => toast.success(`Credits Updated Successfully`);
const notupdateCredits = (text) => toast.error(text);

const AdminCredits = ({ userId = -1, currentCredit = 0 }) => {
  const [credits, setCredits] = useState(currentCredit);
  const [newCredits, setNewCredits] = useState("");
  const { updateCredits, credits: allCredits } = usePosts();

  useEffect(() => {
    const user = allCredits?.find((u) => u._id === Number(userId));
    if (user) {
      setCredits(user.credits);
    }
  }, [userId, allCredits]);

  const handleUpdate = useCallback(() => {
    const newVal = Number(newCredits);
    if (credits === newVal) {
      notupdateCredits("Credits are same as before");
      return;
    }

    updateCredits({ userId, credits: newVal });
    updateCreditsAlert();
    setCredits(newVal);
    setNewCredits("");
  }, [credits, newCredits, userId, updateCredits]);

  return (
    <div className="p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">Edit User Credits</h2>
      <p className="text-lg font-medium">User ID: {userId}</p>
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

export default memo(AdminCredits);

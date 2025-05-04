import React from "react";
import { usePosts } from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";

const AdminUsers = ({ getCurrentCredit }) => {
  const { credits } = usePosts();
  const navigate = useNavigate();

  const updateNavigationHandler = (currentCredit, userId) => {
    getCurrentCredit(currentCredit, userId);
    navigate("/dashboard/credits-admin");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Credits Overview</h2>
      <div className="overflow-x-auto shadow border rounded-lg max-h-[500px] overflow-y-auto">
        <table className="min-w-full text-left bg-white">
          <thead className="bg-gray-100 border-b sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Credits</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {credits?.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user._id}</td>
                <td className="px-4 py-2 font-semibold">{user.credits}</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2">
                  <div
                    onClick={() => {
                      updateNavigationHandler(user?.credits, user._id);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

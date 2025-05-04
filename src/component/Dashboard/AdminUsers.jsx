import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy user data
  const dummyUsers = [
    {
      _id: "u1",
      username: "johndoe",
      email: "johndoe@example.com",
      credits: 120,
    },
    {
      _id: "u2",
      username: "janedoe",
      email: "janedoe@example.com",
      credits: 95,
    },
    {
      _id: "u3",
      username: "adminuser",
      email: "admin@example.com",
      credits: 200,
    },
  ];

  const fetchCredits = async () => {
    try {
      const token = localStorage.getItem("token"); // or from context
      const res = await axios.get("/api/admin/credits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data.users);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Credits Overview</h2>
      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="min-w-full text-left bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Credits</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 font-semibold">{user.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

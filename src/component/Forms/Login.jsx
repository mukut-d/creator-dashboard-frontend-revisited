import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../store/userStore";
import { usePosts } from "../../hooks/usePosts";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const setUserId = userStore((state) => state.setUserId);
  const setRole = userStore((state) => state.setRole);
  const userId = userStore((state) => state.userId);
  const navigate = useNavigate();
  const { getActivity, getAllUserCredits, getSavedPosts, getCredits } =
    usePosts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
      password: "Pass123",
      role: "user",
    },
  });
  const toggleLogin = () => setIsLogin(!isLogin);

  const onSubmit = async (data) => {
    console.log(import.meta.env.VITE_API_URL);
    // console.log(data); // or send to API

    const type = isLogin ? "login" : "register";

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/${type}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(JSON.stringify(result, null, 2));

      if (result.ok) {
        localStorage.setItem("token", result?.token);
        setUserId(result?._id);
        setRole(result?.role);
        if (result?.role === "admin") {
          getAllUserCredits();
        } else {
          getActivity(userId);
          getCredits();
          getSavedPosts(userId);
        }

        toast.success("Login successfull");
        setTimeout(() => {
          navigate("/dashboard/feeds");
        }, 1500);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("Error: " + error.message);
      toast.error("Login Failed, something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-sm border p-6 rounded-lg shadow-md">
        {/* Toggle Login/Register */}
        <div className="flex w-full mb-4 border-2 border-blue-300 rounded-lg text-xl text-stone-500">
          <div
            onClick={toggleLogin}
            className={`w-1/2 p-2 text-center cursor-pointer transition duration-150 active:scale-95 ${
              isLogin ? "bg-blue-500 text-white" : ""
            }`}
          >
            Login
          </div>
          <div
            onClick={toggleLogin}
            className={`w-1/2 p-2 text-center cursor-pointer transition duration-150 active:scale-95 ${
              !isLogin ? "bg-blue-500 text-white" : ""
            }`}
          >
            Register
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="p-2 border rounded outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="p-2 border rounded outline-none"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {!isLogin && (
            <div className="flex flex-col">
              <label className="text-gray-500 mb-1">Role</label>
              <select
                {...register("role", { required: "Role is required" })}
                className="p-2 border rounded outline-none"
              >
                <option value="">Select a Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              {errors.role && (
                <span className="text-red-500 text-sm">
                  {errors.role.message}
                </span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95 active:shadow-inner transition duration-150"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

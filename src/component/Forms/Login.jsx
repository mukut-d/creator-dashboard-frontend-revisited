import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const toggleLogin = () => {
    setLogin(!login);
  };

  const rolehandler = (role) => {
    setRole(role);
  };

  const sumbitFormHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen   flex items-center justify-center">
      <div className=" flex flex-col justify-center items-center    border-w-2">
        <div className="cursor-pointer border-blue-300 border-2 rounded-lg text-xl text-stone-500  w-full flex items-center justify-center p-2">
          <div
            onClick={toggleLogin}
            className={` active:scale-95 active:shadow-inner transition duration-150 p-2 w-1/2 ${
              login ? `bg-blue-500 text-white` : ``
            }`}
          >
            Login
          </div>
          <div
            onClick={toggleLogin}
            className={` active:scale-95 active:shadow-inner transition duration-150 p-2 w-1/2 ${
              !login ? `bg-blue-500 text-white` : ``
            }`}
          >
            Register
          </div>
        </div>
        <div className="m-2 rounded-lg flex justify-between w-full p-2 border-2 border-solid border-gray-300">
          <div className="text-gray-400  ">Name</div>
          <input type="text" className="outline-none " />
        </div>
        <div className="m-2 rounded-lg flex justify-between w-full p-2 border-2 border-solid border-gray-300">
          <div className="text-gray-400  ">Password</div>
          <input type="text" className="outline-none " />
        </div>
        <div className="m-2 rounded-lg flex justify-between w-full p-2 border-2 border-solid border-gray-300">
          <div htmlFor="roles" className="text-gray-500 font-medium">
            Role
          </div>

          <select
            name="roles"
            id="roles"
            className=""
            value={role}
            onChange={(e) => rolehandler(e.target.value)}
          >
            <option value="role">Select a Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button
          onClick={sumbitFormHandler}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95 active:shadow-inner transition duration-150"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;

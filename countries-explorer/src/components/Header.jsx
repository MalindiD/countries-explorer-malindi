import React from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logout } from "../utils/auth";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-sm">
      <button
        onClick={() => navigate("/")}
        className="text-3xl font-serif italic tracking-wide text-left"
      >
         Countries Explorer
      </button>

      {user ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/favorites")}
            className="flex items-center bg-pink-500 text-white px-3 py-1 rounded"
          >
            <AiFillHeart className="mr-1" /> 
          </button>
          <span className="text-sm text-gray-700">Hello, {user}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

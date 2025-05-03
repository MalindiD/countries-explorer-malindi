// src/components/Header.jsx
import React from "react";
import { getLoggedInUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-sm">
      <h1 className="text-2xl font-bold">🌍 Countries Explorer</h1>
      {user ? (
        <div className="flex items-center gap-4">
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

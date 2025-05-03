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
    <div style={{ backgroundColor: "#4F0341" }} className="flex justify-between items-center p-4 shadow-sm text-white">
      <button
        onClick={() => navigate("/")}
        className="text-3xl font-serif italic tracking-wide text-left"
      >
         Countries Explorer
      </button>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-white">Hello, {user}</span>
          <button
            onClick={() => navigate("/favorites")}
            className="border border-white text-white px-4 py-2 rounded hover:bg-[#6C648B] hover:text-black transition"
          >
            <AiFillHeart className="mr-1" /> 
          </button>
          
          <button
            onClick={handleLogout}
            className="border border-white text-white px-4 py-2 rounded hover:bg-[#6C648B] hover:text-black transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="border border-white text-white px-4 py-2 rounded hover:bg-[#6C648B] hover:text-black transition"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

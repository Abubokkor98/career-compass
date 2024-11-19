import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("User logged out");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="flex justify-between items-center text-white bg-[#25434D] p-5">
      {/* Website Name */}
      <div className="text-lg font-bold">NAME</div>

      {/* Navigation Links */}
      <div className="space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#CB8461] underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/auth/profile"
          className={({ isActive }) =>
            isActive ? "text-[#CB8461] underline" : ""
          }
        >
          My Profile
        </NavLink>
      </div>

      {/* User Controls */}
      {user ? (
        <div className="flex items-center space-x-4">
          {/* User Image or Placeholder */}
          <div className="relative">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              />
            ) : (
              <FaUserCircle
                className="w-10 h-10 text-white bg-gray-400 rounded-full border-2 border-white cursor-pointer"
                title="User"
              />
            )}
            {/* Hover Tooltip with User Name */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100">
              {user.displayName || "User"}
            </div>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="btn bg-[#A7E8E0] text-[#25434D] w-[100px] px-3 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        /* Login Button */
        <Link
          to="/auth/login"
          className="btn bg-[#A7E8E0] text-[#25434D] w-[100px] px-3 py-2 rounded-md"
        >
          Login
        </Link>
      )}
    </div>
  );
}

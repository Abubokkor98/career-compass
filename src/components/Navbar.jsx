import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.success("User logged out");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="bg-[#25434D] text-white">
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-lg font-bold">Career Compass</div>

        {/* Hamburger Menu and User Image */}
        <div className="flex items-center lg:hidden">
          {user ? (
            <div className="mr-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ) : (
                <FaUserCircle
                  className="w-10 h-10 text-white bg-gray-400 rounded-full border-2 border-white"
                  title={user.displayName}
                />
              )}
            </div>
          ) : null}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#CB8461] underline" : "hover:text-[#CB8461]"
            }
          >
            Home
          </NavLink>
          <Link to="/" className="hover:text-[#CB8461]">
            Services
          </Link>
          <Link to="/" className="hover:text-[#CB8461]">
            Team
          </Link>
          {user && (
            <NavLink
              to="/auth/profile"
              className={({ isActive }) =>
                isActive ? "text-[#CB8461] underline" : "hover:text-[#CB8461]"
              }
            >
              My Profile
            </NavLink>
          )}
        </div>

        {/* User Section for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  />
                ) : (
                  <FaUserCircle
                    className="w-10 h-10 text-white bg-gray-400 rounded-full border-2 border-white cursor-pointer"
                    title={user.displayName}
                  />
                )}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100">
                  {user.displayName || "Anonymous"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-[#A7E8E0] text-[#25434D] w-[100px] px-3 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-[#A7E8E0] text-[#25434D] w-[100px] px-3 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-start bg-[#25434D] p-5 space-y-4">
          {/* Menu Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#CB8461] underline" : "hover:text-[#CB8461]"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <Link
            to="/"
            className="hover:text-[#CB8461]"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/"
            className="hover:text-[#CB8461]"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          {user && (
            <NavLink
              to="/auth/profile"
              className={({ isActive }) =>
                isActive ? "text-[#CB8461] underline" : "hover:text-[#CB8461]"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </NavLink>
          )}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="btn bg-[#A7E8E0] text-[#25434D] w-full px-3 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-[#A7E8E0] text-[#25434D] w-full px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

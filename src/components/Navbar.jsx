import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between text-white bg-[#245D51] p-5">
      <div>NAME</div>
      <div className="space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>My Profile</Link>
      </div>

      <Link to={'/auth/login'} className="btn bg-[#CB8461] w-[140px]">Login</Link>
    </div>
  );
}

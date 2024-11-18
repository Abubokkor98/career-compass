import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const {name} = useContext(AuthContext);
  console.log(name);
  return (
    <div className="flex justify-between text-white bg-[#245D51] p-5">
      <div>NAME</div>
      <div className="space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/auth/profile"}>My Profile</Link>
        {/* <Link to={"/auth/profile"}>{name}</Link> */}
      </div>

      <Link to={'/auth/login'} className="btn bg-[#CB8461] w-[140px]">Login</Link>
    </div>
  );
}

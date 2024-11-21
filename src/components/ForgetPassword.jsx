import React, { useRef, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { forgetPassword } = useContext(AuthContext);

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.alert("Please enter your email address!");
      return;
    }

    forgetPassword(email)
      .then(() => {
        toast.alert("Password reset email sent!");
      })
      .catch((err) => {
        toast.alert(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>ForgetPassword | Career Compass</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg p-10">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <button type="submit" className="btn btn-neutral w-full">
            Reset Password
          </button>
        </form>
        <button
          className="btn btn-link mt-4"
          onClick={() => navigate("/auth/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

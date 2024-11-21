import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


export default function Login() {
  const { loginUser,setUser,forgetPassword } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('')
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // login user
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : '/');
        toast.success('Successfully login.')
      })
      .catch((err) => {
        setError({...error, login:err.code});
      });
  };

  //forget pass
  const handleForgetPass = () => {
    const email = emailRef.current.value;
    navigate("/auth/forget-password", { state: { email } });
  };




  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Login | Career Compass</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={"password"}
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {
              error.login && (
                <p className="text-red-600 text-xs">{error.login}</p>
              )
            }
            <label className="label">
              <button onClick={handleForgetPass} className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don’t Have An Account?{" "}
          <Link to={"/auth/register"} className="text-red-600">
            Register
          </Link>
        </p>
        {/* social login */}
        <p className="mt-2">
          <GoogleLogin></GoogleLogin>
        </p>
      </div>
    </div>
  );
}

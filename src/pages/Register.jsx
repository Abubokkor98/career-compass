import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const handleRegister = (e)=>{
    e.preventDefault();
    

    const form = new FormData(e.target);
    console.log(form);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log({name,email,photo,password});
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center">
        Register your account
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        {/* name input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />

        </div>
        {/* photo input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Enter your photo url"
            className="input input-bordered"
            required
          />
        </div>
        {/* email input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        {/* password input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">
                Accept{" "}
                <span className="font-semibold">Term & Conditions</span>
              </span>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have An Account ?{" "}
        <Link to={"/auth/login"} className="text-red-600">
          Login
        </Link>{" "}
      </p>
    </div>
  </div>
  )
}

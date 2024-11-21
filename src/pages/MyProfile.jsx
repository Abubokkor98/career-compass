import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function MyProfile() {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setMessage("");

    // Update Firebase Profile
    updateUserProfile({ displayName: newName, photoURL: newPhotoURL })
      .then(() => {
        // Update local user state
        setUser({ ...user, displayName: newName || user.displayName, photoURL: newPhotoURL || user.photoURL });
        setMessage("Profile updated successfully!");
      })
      .catch((err) => {
        setMessage(`Error: ${err.message}`);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>My Profile | Career Compass</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>

        {/* User Info */}
        <div className="text-center my-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">{user?.displayName || "Your Name"}</h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Update Profile Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter a new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter a new photo URL"
              value={newPhotoURL}
              onChange={(e) => setNewPhotoURL(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Save Changes</button>
          </div>
        </form>

        {/* Message */}
        {message && (
          <p className={`text-center mt-4 ${message.startsWith("Error") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

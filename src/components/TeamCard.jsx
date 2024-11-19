import React from "react";

export default function TeamCard({ team }) {
  const { name, role, image } = team;

  return (
    <div className="bg-base-100 shadow-md rounded-lg overflow-hidden mx-auto">
      <figure className="h-96 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-2 text-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

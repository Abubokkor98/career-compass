import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

export default function ServiceCard({ service }) {
  const {
    image,
    serviceName,
    category,
    pricing,
    duration,
    counselor,
    rating,
    id
  } = service;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg overflow-hidden p-1">
      <img className="w-full h-48 rounded-lg object-cover" src={image} alt={serviceName} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{serviceName}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Category:</strong> {category}
        </p>
        
        <p className="text-sm text-gray-600 mb-1">
          <strong>Counselor:</strong> {counselor}
        </p>
        
        <NavLink to={`/details/${id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
        </NavLink>
      </div>
    </div>
  );
}

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

export default function ServiceCard({ service }) {
  const {
    image,
    serviceName,
    category,
    pricing,
    duration,
    counselor,
    rating,
  } = service;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden p-1">
      <img className="w-full h-48 rounded-lg object-cover" src={image} alt={serviceName} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{serviceName}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Price:</strong> ${pricing}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Counselor:</strong> {counselor}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Duration:</strong> {duration}
        </p>
        <div className="flex items-center mt-2">
          <strong className="text-sm text-gray-600 mr-2">Rating:</strong>
          <Rating
            initialRating={rating}
            emptySymbol={<AiOutlineStar className="text-yellow-400" />}
            fullSymbol={<AiFillStar className="text-yellow-400" />}
            readonly
          />
          <span className="text-sm text-gray-600 ml-2">({rating})</span>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

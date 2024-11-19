import React from "react";
import { useLoaderData } from "react-router-dom";

import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Details() {
  const {
    image,
    serviceName,
    description,
    category,
    pricing,
    duration,
    counselor,
    rating,
    id,
  } = useLoaderData();
  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
    <img
      className="w-full h-64 rounded-lg object-cover"
      src={image}
      alt={serviceName}
    />
    <div className="p-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{serviceName}</h3>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Price:</strong> ${pricing}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Counselor:</strong> {counselor}
      </p>
      <p className="text-sm text-gray-600 mb-2">
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
      <div className="mt-4">
        <strong className="text-sm text-gray-800 block mb-1">Description:</strong>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
  );
}

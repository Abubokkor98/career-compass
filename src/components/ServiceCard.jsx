import React from "react";

export default function ServiceCard({ service }) {
  const {
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
  } = service;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={serviceName} />
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
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Client({ client, position }) {
  const { clientName, photo, feedback, date } = client;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={`relative flex items-center ${
        position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

      {/* Content */}
      <div
        className={`flex items-center space-x-6 max-w-xl p-4 rounded-lg shadow-lg bg-white ${
          position === "left" ? "flex-row-reverse" : ""
        }`}
      >
        {/* Client Photo */}
        <img
          src={photo}
          alt={clientName}
          className={`w-16 h-16 rounded-full border-4 border-purple-500 ${
            position === "left" ? "ml-4" : "mr-4"
          }`}
        />

        {/* Text Content */}
        <div className={`${position === "left" ? "text-right" : "text-left"}`}>
          <p className="text-sm text-gray-500">
            <strong>Date:</strong> {date}
          </p>
          <h3 className="text-lg font-bold text-gray-800">{clientName}</h3>
          <p className="text-gray-700 text-sm mt-2">{feedback}</p>
        </div>
      </div>

      {/* Timeline Marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-purple-500 rounded-full shadow-md flex justify-center items-center z-10">
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}

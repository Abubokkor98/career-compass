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
      className={`relative flex flex-col items-center mb-10 lg:mb-4 space-y-6 lg:space-y-2 ${
        position === "left" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block"></div>
      <div
        className={`flex flex-col items-center space-y-4 lg:space-y-2 p-6 rounded-lg shadow-lg bg-white md:max-w-xl ${
          position === "left" ? "md:ml-auto" : "md:mr-auto"
        }`}
      >
        <img
          src={photo}
          alt={clientName}
          className="w-16 h-16 rounded-full border-4 border-purple-500"
        />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            <strong>Date:</strong> {date}
          </p>
          <h3 className="text-lg font-bold text-gray-800">{clientName}</h3>
          <p className="text-gray-700 text-sm mt-2">{feedback}</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-purple-500 rounded-full shadow-md flex justify-center items-center z-10">
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}

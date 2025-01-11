import React from "react";

const RestaurantActiveProcess = () => {
  return (
    <div
      className="relative w-full h-screen bg-[url('/bg4.svg')] bg-cover bg-center text-white"
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-lg md:text-xl lg:text-2xl italic text-yellow-500 mb-2">
          Restaurant Active Process
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span className="text-yellow-500">We</span> Document Every Food Bean
          Process until it is saved
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition">
            Read More
          </button>
          <button className="px-6 py-3 flex items-center bg-gray-800 border border-white rounded-md hover:bg-gray-700 transition">
            <span className="mr-2">Play Video</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.056A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.056a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantActiveProcess;

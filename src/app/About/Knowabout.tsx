import React from 'react';
import { RiVideoFill } from "react-icons/ri";

const Knowabout = () => {
  return (
    <section className="flex flex-wrap items-center justify-between px-4 py-8 sm:px-8 sm:py-16 bg-white text-black">
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-2/3">
        {/* Left Image */}
        <div className="flex flex-col gap-0 w-full sm:w-1/3">
          <img
            src="/About1.svg"
            alt="Main Dish"
            className="rounded-lg w-full"
          />
        </div>

        {/* Right Section: Two Images */}
        <div className="flex flex-col gap-3 w-full sm:w-1/3"> 
          <img
            src="/About2.svg"
            alt="Side Dish"
            className="rounded-lg w-full mt-4 sm:mt-16"
          />
          <img
            src="/About3.svg"
            alt="Salad"
            className="rounded-lg w-full mt-2"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/3 mt-8 sm:mt-0">
        <h2 className="text-yellow-400 font-semibold text-lg text-center sm:text-left">About us</h2>
        <h1 className="text-2xl sm:text-4xl font-bold mt-2 leading-tight text-center sm:text-left">
          Food is an important part
          <br /> Of a balanced Diet
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisl, et ac dapibus sit eu velit in consequat.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center sm:justify-start">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
            Show more
          </button>
          <button className="flex items-center gap-2 text-yellow-400 hover:underline">
            <span className="material-icons"><RiVideoFill /></span>
            Watch video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Knowabout;

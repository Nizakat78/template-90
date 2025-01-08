import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-between px-8 py-16 bg-black text-white">
      {/* Left Section: Images */}
      <div className="relative md:w-1/2 flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            src="/About1.svg"
            alt="Main Dish"
            className="rounded-lg w-1/2"
          />
          <img
            src="/About2.svg"
            alt="Side Dish"
            className="rounded-lg w-1/2"
          />
        </div>
        <img
          src="/About3.svg"
          alt="Salad"
          className="rounded-lg w-1/2 ml-auto mt-4"
        />
      </div>

      {/* Right Section: Content */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-yellow-400 font-semibold text-lg">About us</h2>
        <h1 className="text-4xl font-bold mt-2 leading-tight">
          Food is an important part
          <br /> Of a balanced Diet
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisl, et ac dapibus sit eu velit in consequat.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
            Show more
          </button>
          <button className="flex items-center gap-2 text-yellow-400 hover:underline">
            <span className="material-icons">play_circle</span>
            Watch video
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

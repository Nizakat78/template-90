// Herosection.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="relative w-full h-auto bg-black text-white">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      ></div>

      {/* Hero Section Content */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full min-h-screen px-6 lg:px-16 py-10">
        
        {/* Floating Icons */}
        <div className="relative z-10 w-full lg:w-1/4 flex justify-center items-center flex-col lg:gap-2 mb-6 lg:mb-0">
          <div className="flex flex-wrap justify-center lg:flex-col space-x-6 space-y-6 lg:space-x-0 lg:space-y-6 mb-6">
            <div className="w-10 h-10">
              <Image src="/x.svg" alt="Twitter Icon" width={30} height={30} />
            </div>
            <div className="w-10 h-10">
              <Image
                src="/Pinter.svg"
                alt="Pinterest Icon"
                width={30}
                height={30}
              />
            </div>
            <div className="w-10 h-10">
              <Image src="/Fb.svg" alt="Facebook Icon" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full lg:w-1/2 max-w-lg text-left mb-10 lg:mb-0">
          <h3 className="italic text-orange-500 text-lg mb-2">
            It’s Quick & Amusing!
          </h3>
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug mb-2">
            <span className="text-orange-500">The</span> Art of Speed Food
            Quality
          </h1>
          <p className="text-gray-300 text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <Link href="/Menu">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
              See Menu
            </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/Image.png" 
            alt="Delicious food"
            width={800}  // Increased image size
            height={750} // Increased image size
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="w-full h-auto bg-black text-white relative">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full h-[950px]">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 w-auto h-auto gap-[0px]"

          style={{
            backgroundImage: "url('/bg.png')", // Replace with your actual image path
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-md text-left px-8 md:px-16 py-10 w-[472px] h-[356px] top-[-190px] left-[90px] ">
          <h3 className="italic text-orange-500 text-lg">

            It’s Quick & Amusing!
          </h3>
          <h1 className="text-4xl font-bold mt-4 leading-snug">
            <span className="text-orange-500">The</span> Art of Speed Food Quality
          </h1>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <Link href="/Menu" className="text-orange-500 hover:text-orange-600">
          <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
            See Menu
          </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative z-10 mt-10 md:mt-0 w-[878px] h-[670px] top-[-100px]  left-3">
          <Image
            src="/Image.png" // Replace with the actual image path
            alt="Delicious food"
            width={878}
            height={670}
            className="rounded-full shadow-lg"
          />
          {/* Floating Icons */}
          <div className="absolute top-[130px] left-[-400px] w-[25.28px] h-[107px] flex flex-col gap-6">
            <Image src="/x.svg" alt="Icon 1" width={30} height={30} />
            <Image src="/Pinter.svg" alt="Icon 2" width={30} height={30} />
            <Image src="/Fb.svg" alt="Icon 3" width={30} height={30} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

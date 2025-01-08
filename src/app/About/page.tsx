import React from 'react';
import { RxCaretRight } from "react-icons/rx";
import Knowabout from './Knowabout';

const Page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="w-full h-60 sm:h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-bold">About Us</h1>
        <p className="text-xs sm:text-sm font-semibold flex items-center gap-1 mt-2">
          Home
          <span className="flex items-center">
            <RxCaretRight />
          </span>
          <span className="text-yellow-500">About</span>
        </p>
      </div>
     <Knowabout />
    </div>
  );
};

export default Page;

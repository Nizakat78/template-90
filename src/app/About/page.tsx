import React from 'react';
import { RxCaretRight } from "react-icons/rx";
import Knowabout from './Knowabout';
import Bestchef from './BestChef';
import TeamMember from './Teamview';
import Testmonialsman from './Testmonialsman';
import Menubar from './Menubar';

const Page = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center relative">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="text-xs md:text-sm font-semibold flex items-center gap-1 mt-2">
            Home
            <span className="flex items-center">
              <RxCaretRight />
            </span>
            <span className="text-yellow-500">About</span>
          </p>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <Knowabout />
     <Bestchef />
     <TeamMember />
     <Testmonialsman />
     <Menubar />
      </div>
    </div>
  );
};

export default Page;

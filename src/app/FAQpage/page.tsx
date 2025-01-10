import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import FAQpage from './FAQpage';
const page = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center"></div>
      
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-4xl font-bold">FAQ Page</h1>
              <p className="text-sm font-semibold flex items-center gap-1">
                Home 
                <span className=" flex items-center">
                  <RxCaretRight />
                </span>
                <span className='text-yellow-500'>faq</span>
              </p>
            </div>
            <FAQpage />
    </div>
  )
}

export default page

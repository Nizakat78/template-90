import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import Product from './Product';
const page = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center"></div>
      
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-4xl font-bold">Our Shop</h1>
              <p className="text-sm font-semibold flex items-center gap-1">
                Home 
                <span className=" flex items-center">
                  <RxCaretRight />
                </span>
                <span className='text-yellow-500'>Shop</span>
              </p>
            </div>
            <Product />
    </div>
  )
}

export default page

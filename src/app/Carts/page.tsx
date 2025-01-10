import React from 'react'
import { RxCaretRight } from "react-icons/rx"
import ProductCart from './ProductCart'


const page = () => {
  return (
    <div>
    <div className="w-full h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center relative">
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
        <p className="text-xs md:text-sm font-semibold flex items-center gap-1 mt-2">
          Home
          <span className="flex items-center">
            <RxCaretRight />
          </span>
          <span className="text-yellow-500">Shopping Cart</span>
        </p>
      </div>
    </div>
    
    {/* Blog Section */}
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <ProductCart />
    </div>
  </div>
  )
}

export default page

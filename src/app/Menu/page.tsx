import React from 'react';
import { RxCaretRight } from "react-icons/rx";
import Image from 'next/image';
import { SiCoffeescript } from "react-icons/si";
import StatsSection from '../../components/Menu/StatsSection';
import Partners from '../../components/Menu/Partners';


const Page = () => {
  return (
    <div className=" bg-white text-white">
    <div>
      {/* Background Image */}
      <div className="w-full h-96 bg-[url('/Menubg1.svg')] bg-cover bg-center relative">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Menu</h1>
          <p className="text-xs md:text-sm font-semibold flex items-center gap-1 mt-2">
            Home
            <span className="flex items-center">
              <RxCaretRight />
            </span>
            <span className="text-yellow-500">Menu</span>
          </p>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      </div>
    </div>
    <div className="min-h-screen bg-white text-gray-900 font-sans p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left - Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/Menupic1.svg" 
            alt="Starter Menu"
            width={320}
            height={340}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Section */}
        <div className="space-y-2 mr-20">
          {/* Title Section */}
          <div className="flex items-center space-x-3 text-yellow-600">
            <SiCoffeescript size={22} />
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800">Starter Menu</h1>

          {/* Menu Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Alder Grilled Cook Salmon
                <span className="text-yellow-600 float-right">32$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>

            {/* Item 2 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Berries and Creme Tart
                <span className="text-yellow-600 float-right">43$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400 mt-1">700 CAL</p>
            </div>

            {/* Item 3 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Tormentoso Bush Pizza Pintoage
                <span className="text-yellow-600 float-right">14$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Spicy Vegan Potato Curry
                <span className="text-yellow-600 float-right">35$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="min-h-screen bg-white text-gray-900 font-sans p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
          {/* Right - Text Section */}
        <div className="space-y-2 ml-40">
          {/* Title Section */}
          <div className="flex items-center space-x-4 text-yellow-600">
            <SiCoffeescript size={22} />
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800">Main Course</h1>

          {/* Menu Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Optic Big Breakfast Combo Menu
                <span className="text-yellow-600 float-right">32$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>

            {/* Item 2 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Cashew Chicken With Stir-Fry
                <span className="text-yellow-600 float-right">43$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400 mt-1">700 CAL</p>
            </div>

            {/* Item 3 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Vegetables & Green Salad
                <span className="text-yellow-600 float-right">14$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
              Spicy Vegan Potato Curry
                <span className="text-yellow-600 float-right">35$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>
          </div>
          
        </div>
        <div className="flex items-end justify-start md:justify-end mr-24">
          <Image
            src="/Menupic2.svg" // Place image in public directory
            alt="Starter Menu"
            width={320}
            height={340}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      </div>
      <StatsSection />


      <div className="min-h-screen bg-white text-gray-900 font-sans p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left - Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/Menupic3.svg" 
            alt="Starter Menu"
            width={320}
            height={340}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Section */}
        <div className="space-y-2 mr-20">
          {/* Title Section */}
          <div className="flex items-center space-x-3 text-yellow-600">
            <SiCoffeescript size={22} />
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800">Dessert</h1>

          {/* Menu Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Fig and lemon cake
                <span className="text-yellow-600 float-right">32$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>

            {/* Item 2 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Creamy mascarpone cake
                <span className="text-yellow-600 float-right">43$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400 mt-1">700 CAL</p>
            </div>

            {/* Item 3 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Pastry, blueberries, lemon juice
                <span className="text-yellow-600 float-right">14$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
              Pain au chocolat
                <span className="text-yellow-600 float-right">35$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="min-h-screen bg-white text-gray-900 font-sans p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
          {/* Right - Text Section */}
        <div className="space-y-2 ml-40">
          {/* Title Section */}
          <div className="flex items-center space-x-4 text-yellow-600">
            <SiCoffeescript size={22} />
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800">Drinks</h1>

          {/* Menu Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Caffè macchiato
                <span className="text-yellow-600 float-right">32$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>

            {/* Item 2 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Aperol Spritz Capacianno
                <span className="text-yellow-600 float-right">43$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-xs text-gray-400 mt-1">700 CAL</p>
            </div>

            {/* Item 3 */}
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-700">
              Caffe Latte Campuri
                <span className="text-yellow-600 float-right">14$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
              Tormentoso BushTea Pintoage
                <span className="text-yellow-600 float-right">35$</span>
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-xs text-gray-400 mt-1">580 CAL</p>
            </div>
          </div>
          
        </div>
        <div className="flex items-end justify-start md:justify-end mr-24">
          <Image
            src="/Menupic4.svg" // Place image in public directory
            alt="Starter Menu"
            width={320}
            height={340}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      </div>
      <Partners />
    </div>
    
    
  );
};

export default Page;

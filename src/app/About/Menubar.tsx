import React from "react";

const Menubar = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"];

  return (
    <>
      <div className="bg-white text-black font-sans p-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <div className="bg-cover bg-center w-[81px] h-[151px] bg-[url('/Menubar1.svg')]">
          <h1 className="text-2xl font-bold  justify-center whitespace-nowrap">
            Our Food Menu
          </h1>
          <p className="text-xl justify-center whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className=" whitespace-nowrap justify-center">Varius sed pharetra dictum neque massa congue </p>
          </div>
        </div>

        {/* Small Decorative Image Positioned Between Text */}
        <div className="flex justify-center mb-2">
          <div className="w-1 h-1 sm:w-24 sm:h-2 bg-[url('/path-to-your-image.jpg')] bg-cover bg-no-repeat"></div>
        </div>

        {/* Categories Navigation */}
        <div className="flex justify-center gap-4 overflow-x-auto mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm md:text-base border-b-2 ${
                index === 0 ? "border-orange-500 text-orange-500" : "border-transparent"
              } hover:border-orange-500 hover:text-orange-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-300 pb-4">
              <div>
                <h2 className="text-orange-500 text-lg md:text-xl font-semibold">
                  Alder Grilled Chinook Salmon
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  Toasted French bread topped with romano, cheddar
                </p>
                <span className="text-gray-500 text-xs md:text-sm">560 CAL</span>
              </div>
              <span className="text-orange-500 text-lg md:text-xl font-bold">$32</span>
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="text-center mt-8">
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-2 text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition duration-300">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Menubar;

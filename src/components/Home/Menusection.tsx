import React from "react";
import Image from "next/image";

const MenuSection = () => {
  return (
    <div className="bg-black text-white py-12 px-6 lg:px-16">
      {/* Section Heading */}
      <h2 className="text-yellow-500 text-xl md:text-2xl text-center mb-4">
        Choose & Pick
      </h2>
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-yellow-500">Fr</span>om Our Menu
      </h1>

      {/* Navigation */}
      <header className="text-gray-600 body-font">
        <div className="flex flex-wrap justify-center mx-auto p-5">
          <nav className="text-lg md:text-xl space-x-2 md:space-x-5 text-white font-bold text-center">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Soups"].map(
              (category, index) => (
                <a
                  key={index}
                  className={`${
                    index === 0 ? "text-yellow-500" : ""
                  } hover:text-yellow-500 cursor-pointer`}
                >
                  {category}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Menu Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6 mt-10">
        {/* Left Column: Images */}
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <div
            className="w-full h-[200px] sm:w-[380px] sm:h-[280px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/Menu2.svg')" }}
          >
            <div
              className="mt-5 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-cover bg-center rounded-lg mx-auto sm:ml-6"
              style={{ backgroundImage: "url('/Menu1.svg')" }}
            />
          </div>
        </div>

        {/* Right Column: Menu Data */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {(
                  colIndex === 0
                    ? [
                        { name: "Lettuce Leaf", price: "12.55", desc: "Fresh and crispy.", image: "/lettue.svg" },
                        { name: "Fresh Breakfast", price: "12.55", desc: "Start your day right.", image: "/Fresh.svg" },
                        { name: "Mild Butter", price: "12.55", desc: "Smooth and creamy.", image: "/Mild.svg" },
                        { name: "Fresh Bread", price: "12.55", desc: "Soft and warm.", image: "/Freshbrad.svg" },
                      ]
                    : [
                        { name: "Glow Cheese", price: "12.55", desc: "Rich and creamy.", image: "/Glow.svg" },
                        { name: "Italian Pizza", price: "14.55", desc: "Authentic flavors.", image: "/Itallian.svg" },
                        { name: "Slice Beef", price: "12.55", desc: "Perfectly cooked.", image: "/Sillice.svg" },
                        { name: "Mushroom Pizza", price: "12.55", desc: "Earthy and cheesy.", image: "/Mashroam.svg" },
                      ]
                ).map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-800 rounded-md">
                    {/* Image */}
                    <div className="flex-shrink-0 mr-4">
                      <Image src={item.image} alt={item.name} width={60} height={60} />
                    </div>
                    {/* Details */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                      <p className="text-yellow-500 font-bold">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

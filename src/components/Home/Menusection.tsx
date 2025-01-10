import React from "react";
import Image from "next/image";

const MenuSection = () => {
  return (
    <div className="bg-black text-white py-12 px-8">
      <h2 className="text-yellow-500 text-2xl text-center mb-4">Choose & Pick</h2>
      <h1 className="text-white text-4xl font-bold text-center mb-8"><span className="text-yellow-500">Fr</span>om Our Menu</h1>
      <header className="text-gray-600 body-font">
  <div className="items-center mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center">
    <nav className="text-xl space-x-14 text-white font-bold text-center">
      <a className="text-yellow-500">Breakfast</a>
      <a>Lunch</a>
      <a>Dinner</a>
      <a>Dessert</a>
      <a>Drink</a>
      <a>Soups</a>
    </nav>
  </div>
</header>


      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-0">

        {/* Left Column: Images */}
        <div className="flex flex-col gap-5 mt-10 m-16">
          <div 
            className="m-0 w-full sm:w-[380px] h-[280px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/Menu2.svg')" }}
          >
            <div
              className="m-16 my-5 w-full sm:w-[240px] h-[240px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: "url('/Menu1.svg')" }}
            >
            </div>
          </div>
        </div>

        {/* Right Column: Menu Data */}
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Row: 3 Items in first column */}
            <div className="flex flex-col gap-4">
              {[
                { name: "Lettuce Leaf", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/lettue.svg" },
                { name: "Fresh Breakfast", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Fresh.svg" },
                { name: "Mild Butter", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Mild.svg" },
                { name: "Fresh Bread", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Freshbrad.svg" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between p-2">
                  <div className="flex justify-center pr-2">
                    <Image src={item.image} alt={item.name} width={70} height={70} />
                  </div>
                  <div className="flex flex-col w-3/4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                    <p className="text-yellow-500 font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 3 Items in second column */}
            <div className="flex flex-col gap-4">
              {[
                { name: "Glow Cheese", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Glow.svg" },
                { name: "Italian Pizza", price: "14.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Itallian.svg" },
                { name: "Sllice Beef", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Sillice.svg" },
                { name: "Mushroom Pizza", price: "12.55", desc: "Lacus nisi, et de dapibus velit in consequat.", image: "/Mashroam.svg" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2">
                  <div className="flex justify-center pr-3">
                    <Image src={item.image} alt={item.name} width={70} height={70} />
                  </div>
                  <div className="flex flex-col w-3/4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                    <p className="text-yellow-500 font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuSection;

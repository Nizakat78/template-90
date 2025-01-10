import React from "react";
import Head from "next/head";
import { MdArrowCircleRight } from "react-icons/md";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";

const products = [
  { name: "Fresh Lime", price: 45, discountPrice: 38, image: "/Shop1.svg" },
  { name: "Chocolate Muffin", price: 45, discountPrice: 21, image: "/Shop2.svg", isNew: true },
  { name: "Burger", price: 43, image: "/Shop3.svg" },
  { name: "Country Burger", price: 45, discountPrice: 23, image: "/Shop4.svg" },
  { name: "Drink", price: 25, image: "/Shop5.svg" },
  { name: "Pizza", price: 12, image: "/Shop6.svg", isNew: true },
  { name: "Cheese Butter", price: 45, discountPrice: 38, image: "/Shop7.svg" },
  { name: "Sandwiches", price: 45, discountPrice: 21, image: "/Shop8.svg", isNew: true },
  { name: "Chicken Chup", price: 43, image: "/Shop9.svg" },
  { name: "Country Burger", price: 45, discountPrice: 23, image: "/Shop10.svg" },
  { name: "Drink", price: 25, image: "/Shop11.svg" },
  { name: "Pizza", price: 12, image: "/Shop12.svg", isNew: true },
  { name: "Cheese Butter", price: 45, discountPrice: 23, image: "/Shop13.svg" },
  { name: "Sandwiches", price: 25, image: "/Shop14.svg" },
  { name: "Chicken Chup", price: 12, image: "/Shop15.svg", isNew: true },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <div className="flex items-center justify-between mt-2">
                    {product.discountPrice && (
                      <span className="text-gray-500 line-through">
                        ${product.price}
                      </span>
                    )}
                    <span className="text-xl font-bold">
                      ${product.discountPrice || product.price}
                    </span>
                  </div>
                  {product.isNew && (
                    <span className="text-sm text-orange-500">New</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 bg-gray-100 p-4 rounded-md">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              />
              <LiaSearchSolid className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>

            <h3 className="text-lg font-bold mt-6 mb-4">Categories</h3>
            <ul>
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Thi",
                "Non Veg",
                "Uncategorized",
              ].map((category) => (
                <li key={category} className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {category}
                  </label>
                </li>
              ))}
            </ul>

            {/* Background with Text */}
            <div
              className="relative bg-cover bg-center rounded-md mb-4"
              style={{ backgroundImage: "url('/Sidebar1.svg')", height: "300px" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">Perfect Taste</h4>
                  <p className="text-sm mt-2">Classic Restaurant</p>
                  <p className="text-sm mt-2 text-yellow-600">45.00$</p>
                  <p className="text-sm mt-28">
                    Shop Now <span>
                      <MdArrowCircleRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
              <input type="range" min="0" max="100" className="w-full" />
              <p>From $0 to $8000</p>
            </div>

            <div className="mt-6 gap-10">
              <h1 className="text-xl font-bold">Latest Products</h1>
            </div>

            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-start mb-4 bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={`/Sidebar2.svg`}
                  alt={`Product ${i + 1}`}
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4">
                  <h5 className="font-semibold">{`Product ${i + 1}`}</h5>
                  <p className="text-sm text-gray-600">
                    {`Description for Product ${i + 1}`}
                  </p>
                  <span className="text-lg font-bold">${10 + i * 5}</span>
                </div>
              </div>
            ))}

            <div>
              <div className="text-lg font-bold p-4">Product Tags</div>
              <div className="m-2 gap-6">
                <p>Service Our Menu Pizza</p>
                <p>
                  Cupcake <span className="text-yellow-600">Burger</span> Cookies
                </p>
                <p>Our Shop Tandoori Chicken</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Buttons at the End */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            <FaAnglesLeft />
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            1
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            2
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            3
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            <FaAngleDoubleRight />
          </button>
        </div>
      </main>
    </div>
  );
}

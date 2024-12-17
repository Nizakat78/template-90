import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black w-full h-[87px] top-0 text-white border-b border-yellow-400">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-xl">
          <a href="#" className="flex items-center">
            <span className="font-extrabold text-2xl">Food</span>
            <span className="text-gray-200 text-2xl">tuck</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="./" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="./Menu" className="hover:text-yellow-400">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-black text-sm text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                />
              </svg>
            </button>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A10.97 10.97 0 0112 15c1.393 0 2.717.255 3.879.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm4.879 7.804A10.97 10.97 0 0021 15a11.001 11.001 0 10-9 5.3"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-2 14H5L3 3zm5 18a2 2 0 104 0H8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

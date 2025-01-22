"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useCart } from "./hooks/useCart"; // Importing the custom hook

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart(); // Using the hook to get the total items in the cart

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-black w-full h-[87px] text-white relative z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-xl">
          <Link href="/" className="flex items-center">
            <span className="font-extrabold text-2xl">Food</span>
            <span className="text-gray-200 text-2xl">tuck</span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute top-[87px] left-0 w-full bg-black text-center transition-all duration-300 ease-in-out md:relative md:top-0 md:left-0 md:flex md:space-x-6 md:items-center md:w-auto md:bg-transparent z-10 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link href="/" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/Menu" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Menu
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/Blog" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Blog
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/FAQpage" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Pages
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/About" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/Shop" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Shop
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/Contact" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Contact
            </Link>
          </li>

          {/* Mobile-specific: Cart, Login, Sign Up */}
          <li className="flex justify-center py-2 md:hidden">
            <button
              onClick={() => {
                window.location.href = "/Carts";
                handleMenuItemClick();
              }}
              className="flex items-center justify-center text-yellow-400"
            >
              <MdOutlineShoppingCart className="w-6 h-6" />
              {/* Cart item count for mobile */}
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </li>
          <li className="py-2 md:hidden">
            <Link href="/Login" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Login
            </Link>
          </li>
          <li className="py-2 md:hidden">
            <Link href="/Signup" onClick={handleMenuItemClick} className="hover:text-yellow-400">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Search and Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-black text-sm text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
              <FaSearch />
            </button>
          </div>
          <button
            onClick={() => (window.location.href = "/Carts")}
            className="relative flex items-center justify-center text-yellow-400"
          >
            <MdOutlineShoppingCart className="w-6 h-6" />
            {/* Cart item count for desktop */}
            {getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          <Link href="/Login" className="text-sm hover:text-yellow-400">
            Login
          </Link>
          <Link href="/Signup" className="text-sm hover:text-yellow-400">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Overlay for Menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-0"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

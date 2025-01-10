"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black w-full h-[87px] top-0 text-white border-b border-yellow-400">
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
          className={`space-x-6 items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Menu" className="hover:text-yellow-400">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-yellow-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-yellow-400">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-yellow-400">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-black text-sm text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
              <FaSearch />
            </button>
          </div>
          <button onClick={() => (window.location.href = "/Carts")}>
            <MdOutlineShoppingCart className="w-6 h-6 text-yellow-400" />
          </button>
          <Link href="/Login" className="text-sm hover:text-yellow-400">
            Login
          </Link>
          <Link href="/Signup" className="text-sm hover:text-yellow-400">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

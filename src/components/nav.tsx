"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-yellow-500 text-xl font-bold">
              Foodtuck
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link href="/Menu" className="hover:text-yellow-500">
              Menu
            </Link>
            <Link href="/Blog" className="hover:text-yellow-500">
              Blog
            </Link>
            <Link href="/FAQpage" className="hover:text-yellow-500">
              Pages
            </Link>
            <Link href="/About" className="hover:text-yellow-500">
              About
            </Link>
            <Link href="/Shop" className="hover:text-yellow-500">
              Shop
            </Link>
            <Link href="/Contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
                <FaSearch />
              </button>
            </div>

            {/* Cart Button */}
            <button onClick={() => (window.location.href = "/Carts")}>
              <MdOutlineShoppingCart className="w-6 h-6 text-yellow-400" />
            </button>

            {/* Login & Sign Up Links */}
            <Link href="/Login" className="text-sm hover:text-yellow-400">
              Login
            </Link>
            <Link href="/Signup" className="text-sm hover:text-yellow-400">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-yellow-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-yellow-500">
            Home
          </Link>
          <Link href="/Menu" className="block py-2 hover:text-yellow-500">
            Menu
          </Link>
          <Link href="/Blog" className="block py-2 hover:text-yellow-500">
            Blog
          </Link>
          <Link href="/FAQpage" className="block py-2 hover:text-yellow-500">
            Pages
          </Link>
          <Link href="/About" className="block py-2 hover:text-yellow-500">
            About
          </Link>
          <Link href="/Shop" className="block py-2 hover:text-yellow-500">
            Shop
          </Link>
          <Link href="/Contact" className="block py-2 hover:text-yellow-500">
            Contact
          </Link>
          <div className="mt-4">
            <Link href="/Login" className="block py-2 hover:text-yellow-500">
              Login
            </Link>
            <Link href="/Signup" className="block py-2 hover:text-yellow-500">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

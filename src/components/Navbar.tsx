"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../app/Context/Cartcontext";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"; // Clerk Authentication

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu after clicking a link
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

        {/* Mobile Menu Button */}
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
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
            (item) => (
              <li key={item} className="py-2 md:py-0">
                <Link
                  href={item === "Home" ? "/" : `/${item}`}
                  onClick={handleMenuItemClick}
                  className="hover:text-yellow-400"
                >
                  {item}
                </Link>
              </li>
            )
          )}

          {/* Search, Cart, and Profile Icons */}
          <div className="flex flex-col items-center space-y-4 py-4 md:hidden">
            {/* Search Icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 border border-black text-sm text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => (window.location.href = "/Carts")}
              className="relative flex items-center justify-center text-yellow-400 hover:text-yellow-500 transition duration-200"
            >
              <MdOutlineShoppingCart className="w-7 h-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile Icon */}
            <div className="relative">
              <SignedIn>
                <UserButton />
                {/* Add User History Link for signed-in users */}
                <Link
                  href="/order-history"
                  className="text-yellow-400 hover:text-yellow-500 mt-2"
                >
                  User History
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-yellow-400 hover:text-yellow-500 transition duration-200 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    <CgProfile className="w-6 h-6" />
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </ul>

        {/* Desktop Version of the Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-black text-sm text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Icon */}
          <button
            onClick={() => (window.location.href = "/Carts")}
            className="relative flex items-center justify-center text-yellow-400 hover:text-yellow-500 transition duration-200"
          >
            <MdOutlineShoppingCart className="w-7 h-7" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Icon */}
          <div className="relative">
            <SignedIn>
              <UserButton />
              {/* Add User History Link for signed-in users */}
              <Link
                href="/order-history"
                className="text-yellow-400 hover:text-yellow-500 ml-4"
              >
                User History
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-yellow-400 hover:text-yellow-500 transition duration-200 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                  <CgProfile className="w-6 h-6" />
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

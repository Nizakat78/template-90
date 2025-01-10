"use client";
import React, { useState } from "react";
import Link from "next/link";

const CheckoutPage: React.FC = () => {
  const [, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const cartItems = [
    {
      id: 1,
      name: "Chicken Tikka Kabab",
      quantity: 3,
      price: 50,
      weight: "150 gm net",
    },
  ];

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subTotal * 0.25;
  const tax = subTotal * 0.1; // Assuming 10% tax
  const total = subTotal - discount + tax;

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Address */}
        <div className="p-4 border border-gray-600 rounded">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={handleInputChange}
              className="p-2 w-full border border-gray-700 rounded bg-black text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <select
              name="country"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            >
              <option value="">Choose country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              {/* Add more countries */}
            </select>
            <select
              name="city"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            >
              <option value="">Choose city</option>
              <option value="New York">New York</option>
              <option value="Delhi">Delhi</option>
              {/* Add more cities */}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
            <input
              type="text"
              name="address1"
              placeholder="Address 1"
              onChange={handleInputChange}
              className="p-2 border border-gray-700 rounded bg-black text-white"
            />
          </div>
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            onChange={handleInputChange}
            className="p-2 w-full border border-gray-700 rounded bg-black text-white"
          />
        </div>

        {/* Order Summary */}
        <div className="p-4 border border-gray-600 rounded">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.weight}</p>
                </div>
                <p>{item.quantity} x ${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-2">
            <span>Sub-total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>25%</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Link href="/Carts">
        <button className="px-4 py-2 bg-gray-700 text-white rounded">Back to cart</button>
        </Link>
        <button className="px-4 py-2 bg-orange-500 text-white rounded">Place an order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;

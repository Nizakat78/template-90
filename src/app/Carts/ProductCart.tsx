"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  quantity: number;
}

const ProductCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Burger",
      image: "/Carts1.svg",
      price: 35,
      rating: 4,
      quantity: 1,
    },
    {
      id: 2,
      name: "Fresh Lime",
      image: "/Carts2.svg",
      price: 25,
      rating: 3,
      quantity: 1,
    },
    {
      id: 3,
      name: "Pizza",
      image: "/Carts3.svg",
      price: 15,
      rating: 4,
      quantity: 1,
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      image: "/Carts4.svg",
      price: 45,
      rating: 3,
      quantity: 1,
    },
    {
      id: 5,
      name: "Cheese Butter",
      image: "/Carts6.svg",
      price: 15,
      rating: 3,
      quantity: 1,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [shippingCharge] = useState(0);

  const handleQuantityChange = (id: number, change: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  const handleRemoveProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const cartSubtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-3">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-700">
                <td className="py-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p>{product.name}</p>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {Array.from({ length: 5 - product.rating }).map((_, i) => (
                        <span key={i} className="text-gray-500">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="px-2 py-1 border border-gray-700 rounded"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="px-2 py-1 border border-gray-700 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Code and Total Bill Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded">
                Apply
              </button>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Total Bill</h2>
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>${(cartSubtotal + shippingCharge).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <Link href="/Checkout">
          <button className="w-full mt-4 py-3 bg-orange-500 text-white text-center text-lg font-semibold rounded">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;

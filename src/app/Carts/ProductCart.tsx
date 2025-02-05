"use client"
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const ProductCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useUser(); // Fetch the logged-in user details

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("cart", JSON.stringify(products));
    }
  }, [products]);

  const handleRemoveProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product._id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const cartSubtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {products.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg">Your cart is empty!</p>
            <Link href="/">
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-4 mb-4"
              >
                {/* Product Image */}
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <p className="font-medium text-lg">{product.name}</p>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-2/3 flex justify-between items-center gap-6">
                  <p className="text-gray-700 text-sm">
                    Price:{" "}
                    <span className="font-semibold text-lg">
                      ${product.price}
                    </span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Quantity:{" "}
                    <span className="font-semibold text-lg">
                      {product.quantity}
                    </span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Total:{" "}
                    <span className="font-semibold text-lg">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </p>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveProduct(product._id)}
                    className="text-red-500 hover:text-red-700 font-bold text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            {/* Subtotal and Checkout */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">
                  Subtotal:{" "}
                  <span className="text-yellow-500 font-bold">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </p>

                {/* Clerk Authentication Check for Checkout */}
                <SignedIn>
                  <Link href="/Checkout">
                    <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
                      Proceed to Checkout
                    </button>
                  </Link>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500">
                      Sign In to Checkout
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>

              <Link href="/Shop">
                <button className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">
                  Continue Buying Food
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;

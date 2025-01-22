"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quantity: number;
}

const ProductCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [coupon, setCoupon] = useState("");
  const [shippingCharge] = useState(0);

  // Fetch the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  // Handle the removal of a product
  const handleRemoveProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // Calculate the cart subtotal
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
                  </div>
                </td>
                <td>₹{product.price}</td>
                <td>₹{(product.price * product.quantity).toFixed(2)}</td>
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

        {/* Coupon Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Total Section */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Total Bill</h2>
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>₹{cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹{(cartSubtotal + shippingCharge).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Proceed to Checkout */}
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

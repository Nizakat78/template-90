"use client"
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook
import { useRouter } from "next/navigation"; // For routing after placing order

interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const { user } = useUser(); // Get the logged-in user details
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([]); // State to hold cart items
  const [shippingDetails, setShippingDetails] = useState({
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
  const [errors, setErrors] = useState<string[]>([]); // Track validation errors
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Load cart from localStorage
    } else {
      router.push("/cart"); // If no items in the cart, redirect to cart page
    }
  }, [router]);

  // Handle input changes for shipping details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields before placing order
  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "phone", "country", "city", "zipCode", "address1"];
    const missingFields = requiredFields.filter((field) => !shippingDetails[field]);

    if (missingFields.length > 0) {
      setErrors(missingFields);
      return false;
    }
    setErrors([]);
    return true;
  };

  // Calculate subtotal, discount, tax, and total
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subTotal * 0.25; // Assuming 25% discount
  const tax = subTotal * 0.1; // Assuming 10% tax
  const total = subTotal - discount + tax;

  // Place the order by sending data to the backend API
  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    if (!user) {
      console.log("User not logged in");
      return;
    }

    const orderData = {
      userId: user.id, // Pass Clerk userId
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
      total,
      shippingDetails: {
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        email: shippingDetails.email,
        phone: shippingDetails.phone,
        company: shippingDetails.company, // If applicable
        country: shippingDetails.country,
        city: shippingDetails.city,
        zipCode: shippingDetails.zipCode,
        address1: shippingDetails.address1,
        address2: shippingDetails.address2, // Optional
      },
    };

    console.log("Sending order data:", orderData);  // Log the data being sent

    setIsLoading(true);

    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      setIsLoading(false);

      if (response.ok) {
        const responseData = await response.json();
        const orderId = responseData.orderId;

        localStorage.removeItem("cart");
        router.push(`/payment/[id]?total=${total.toFixed(2)}&orderId=${orderId}`); // Include orderId in the URL
      } else {
        const errorData = await response.json();
        console.error("Failed to place order", errorData.message || "Unknown error");
        setErrors([errorData.message || "Failed to place order"]);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error placing order", error);
      setErrors(["Error placing order. Please try again."]);
    }
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Address Form */}
        <div className="p-4 border border-gray-600 rounded">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          {errors.length > 0 && (
            <div className="text-red-500 mb-4">
              <p>{errors.join(", ")}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={shippingDetails.firstName}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("firstName") ? "border-red-500" : "border-gray-700"}`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={shippingDetails.lastName}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("lastName") ? "border-red-500" : "border-gray-700"}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={shippingDetails.email}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("email") ? "border-red-500" : "border-gray-700"}`}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={shippingDetails.phone}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("phone") ? "border-red-500" : "border-gray-700"}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <select
              name="country"
              value={shippingDetails.country}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("country") ? "border-red-500" : "border-gray-700"}`}
            >
              <option value="">Choose country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
            </select>
            <select
              name="city"
              value={shippingDetails.city}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("city") ? "border-red-500" : "border-gray-700"}`}
            >
              <option value="">Choose city</option>
              <option value="New York">New York</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={shippingDetails.zipCode}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("zipCode") ? "border-red-500" : "border-gray-700"}`}
            />
            <input
              type="text"
              name="address1"
              placeholder="Address 1"
              value={shippingDetails.address1}  // Bind value to state
              onChange={handleInputChange}
              className={`p-2 border rounded bg-black text-white ${errors.includes("address1") ? "border-red-500" : "border-gray-700"}`}
            />
          </div>
          <input
            type="text"
            name="address2"
            placeholder="Address 2 (optional)"
            value={shippingDetails.address2}  // Bind value to state
            onChange={handleInputChange}
            className="p-2 w-full border border-gray-700 rounded bg-black text-white"
          />
        </div>

        {/* Order Summary */}
        <div className="p-4 border border-gray-600 rounded">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </div>
                <p>{item.quantity} x ${item.price}</p>
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
            <span>Discount (25%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            {isLoading ? "Placing order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

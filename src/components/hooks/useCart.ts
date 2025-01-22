import { useState, useEffect } from "react";

// Define the type for a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Use CartItem[] instead of any[]

  // Fetch items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Add or update cart item
  const addToCart = (item: CartItem) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      // If item exists, increase the quantity
      updatedCart[existingItemIndex].quantity += item.quantity;
    } else {
      // Otherwise, add new item
      updatedCart.push(item);
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    getTotalItems,
  };
};

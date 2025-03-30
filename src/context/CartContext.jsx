import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        // If item already exists, update quantity based on the passed quantity
        updatedCart = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity } // Add the passed quantity
            : item
        );
      } else {
        // If item doesn't exist, add it to the cart with the given quantity
        updatedCart = [...prevItems, { ...product }];
      }

      return updatedCart;
    });
  };

  // Update product quantity
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity goes to 0

      return updatedCart;
    });
  };

  // Remove product from the cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

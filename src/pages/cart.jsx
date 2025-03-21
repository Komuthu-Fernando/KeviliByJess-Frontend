import React, { useState, useEffect } from "react";
import CartItem from "../components/cartitem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cart, updateQuantity, removeItem } = useCart(); // Use cart context
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } }); // Pass cart data to checkout
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="grid grid-cols-5 border-b pb-5 font-semibold text-gray-600 place-items-center">
        <span className="col-span-2">PRODUCT</span>
        <span>UNIT PRICE</span>
        <span>QTY</span>
        <span>PRICE</span>
      </div>

      {/* Render Cart Items */}
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}

      {/* Summary Section */}
      <div className="mt-10 text-right space-y-2">
        <div className="flex justify-between font-bold text-lg">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button onClick={handleCheckout} className="w-full bg-[#85B415] text-white py-3 mt-10 rounded-md hover:bg-[#76A10E] transition cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;

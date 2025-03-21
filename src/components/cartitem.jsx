import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center py-5 border-b text-center pt-10 pb-10">
      <div className="col-span-2 flex items-center space-x-3 text-left">
        <button onClick={() => removeItem(item.id)} className="text-red-500 cursor-pointer">
          <FaTrash />
        </button>
        <span>{item.name}</span>
      </div>

      <span>${item.price.toFixed(2)}</span>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer"
        >
          -
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer"
        >
          +
        </button>
      </div>
      <span>${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;

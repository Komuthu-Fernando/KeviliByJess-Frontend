import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 gap-2 md:gap-4 items-start md:items-center py-4 md:py-5 border-b text-center md:text-left pt-6 md:pt-10 pb-6 md:pb-10">
      {/* Product Name and Delete - Full width on mobile */}
      <div className="flex items-center justify-between w-full md:col-span-2 md:space-x-3">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => removeItem(item.id)} 
            className="text-red-500 cursor-pointer"
          >
            <FaTrash />
          </button>
          <span className="text-sm sm:text-base">{item.name}</span>
        </div>
      </div>

      {/* Unit Price - Hidden label on mobile */}
      <div className="flex justify-between w-full md:block">
        <span className="md:hidden text-gray-600">Unit Price:</span>
        <span className="text-sm sm:text-base">${item.price.toFixed(2)}</span>
      </div>

      {/* Quantity - Hidden label on mobile */}
      <div className="flex justify-between items-center w-full md:block">
        <span className="md:hidden text-gray-600">Quantity:</span>
        <div className="flex items-center justify-end md:justify-center space-x-2">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer text-sm sm:text-base"
          >
            -
          </button>
          <span className="px-2 sm:px-3 text-sm sm:text-base">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer text-sm sm:text-base"
          >
            +
          </button>
        </div>
      </div>

      {/* Price - Hidden label on mobile */}
      <div className="flex justify-between w-full md:block">
        <span className="md:hidden text-gray-600">Subtotal:</span>
        <span className="text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
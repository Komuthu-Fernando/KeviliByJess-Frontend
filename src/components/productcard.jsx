import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import styles

const ProductCard = ({ id, name, price, image, weight, items, largeImage, addToCart }) => {
  const [quantity, setQuantity] = useState(1); // To manage the quantity

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change)); // Ensure quantity doesn't go below 1
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity }); // Pass quantity to addToCart
    toast.success(`${name} added to the cart!`, {
      position: "top-right",
      autoClose: 3000, // Duration for toast to remain visible
      hideProgressBar: false,
    });
  };

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-lg text-center ${largeImage ? "w-72" : "w-60"}`}>
      {/* Image Section */}
      {image ? (
        <div className={`${largeImage ? "w-40 h-40" : "w-20 h-20"} mx-auto flex items-center justify-center bg-[#BFD783] rounded-full`}>
          <img src={image} alt={name} className={`${largeImage ? "w-36 h-36" : "w-16 h-16"} object-contain`} />
        </div>
      ) : (
        <div className="h-4"></div>
      )}

      {/* Product Name */}
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>

      {/* Weight or Items List */}
      {weight ? (
        <p className="text-gray-500 text-sm">{weight}</p>
      ) : items ? (
        <ul className="text-sm text-gray-700 text-left mt-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span> <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Price */}
      <p className="mt-2 text-xl font-bold text-[#555555]">${price.toFixed(2)}</p>

      {/* Quantity Controls */}
      <div className="flex items-center justify-center mt-4 gap-8">
        <button className="bg-[#85B415] text-white w-8 h-8 rounded-xl text-lg cursor-pointer hover:bg-[#749D11] transition" onClick={() => handleQuantityChange(-1)}>-</button>
        <span className="text-lg font-medium">{quantity}</span>
        <button className="bg-[#85B415] text-white w-8 h-8 rounded-xl text-lg cursor-pointer hover:bg-[#749D11] transition" onClick={() => handleQuantityChange(1)}>+</button>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 px-4 py-2 bg-[#BFD783] rounded-lg hover:bg-[#749D11] transition cursor-pointer" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

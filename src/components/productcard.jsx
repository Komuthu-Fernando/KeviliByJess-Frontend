import React from "react";

const ProductCard = ({ name, price, image, weight, items }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-60">
      {/* Image or Placeholder */}
      {image ? (
        <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-100 rounded-full">
          <img src={image} alt={name} className="w-16 h-16 object-contain" />
        </div>
      ) : (
        <div className="h-10"></div> // Keeps spacing when no image (for family packs)
      )}

      {/* Product Name */}
      <h3 className="mt-2 text-lg font-semibold text-green-600">{name}</h3>

      {/* Conditionally render weight OR item list */}
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
      <p className="mt-2 text-xl font-bold text-gray-800">${price.toFixed(2)}</p>

      {/* Quantity Controls */}
      <div className="flex items-center justify-center mt-4 gap-3">
        <button className="bg-green-500 text-white w-8 h-8 rounded-full text-lg font-bold">
          -
        </button>
        <span className="text-lg font-medium">1</span>
        <button className="bg-green-500 text-white w-8 h-8 rounded-full text-lg font-bold">
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg font-medium">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

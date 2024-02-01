import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-md mb-4 shadow-md transition duration-300 transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-700">Rs. {product.price.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4  focus:outline-none">
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;

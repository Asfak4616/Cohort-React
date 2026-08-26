import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
   let navigate =  useNavigate()
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Product Image */}
      <div onClick={()=>{navigate(`/detail/${product.id}`)}} className="h-72 bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="h-14 overflow-hidden text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 h-12 overflow-hidden text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg">⭐</span>

          <span className="font-semibold text-gray-700">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
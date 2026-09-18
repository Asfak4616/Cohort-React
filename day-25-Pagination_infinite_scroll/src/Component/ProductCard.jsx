import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Product Image */}
      <div className="h-50 w-full overflow-hidden bg-gray-100 p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-1 text-sm font-medium text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="h-13 overflow-hidden text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 h-10 overflow-hidden text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            ({product.stock} in stock)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            ${product.price}
          </h3>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
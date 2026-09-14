import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    id,
    title,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
    availabilityStatus,
  } = product;

  // Calculate discounted price
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-45 items-center justify-center bg-gray-100 p-4">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="flex min- h- [320px] flex-col p-5">
        {/* Category & Stock */}
        <div className="mb-1 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
            {category}
          </span>

          <span
            className={`text-sm font-medium ${
              availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>

        {/* Brand */}
        <p className="mb-1 text-sm font-medium text-gray-500">{brand}</p>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-xl font-bold text-gray-800">
          {title}
        </h2>

        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-700">{rating}</span>

          <span className="text-sm text-gray-400">/ 5</span>
        </div>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ${price.toFixed(2)}
            </span>

            <span className="rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
              -{discountPercentage}%
            </span>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

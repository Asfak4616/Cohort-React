import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-950 p-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Title */}
        <h2 className="mb-3 truncate text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Price */}
        <p className="mb-5 text-2xl font-bold text-purple-400">
          ${product.price}
        </p>

        {/* Quantity */}
        <div className="mb-5 flex items-center justify-between rounded-xl border border-gray-700 bg-gray-800 p-2">

          <button
            onClick={decreaseQuantity}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-700 text-xl text-white transition hover:bg-gray-600"
          >
            −
          </button>

          <span className="text-lg font-semibold text-white">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-700 text-xl text-white transition hover:bg-gray-600"
          >
            +
          </button>

        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-95"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
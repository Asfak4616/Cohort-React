import React from "react";

const CartProductCard = ({ product, onRemove }) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-md md:flex-row md:items-center">

      {/* Product Image */}
      <div className="flex h-36 w-full items-center justify-center rounded-xl bg-gray-100 md:w-36">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-3"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <p className="mb-1 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <p className="mt-2 text-xl font-bold text-gray-900">
          ${product.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300">
          -
        </button>

        <span className="min-w-5 text-center font-semibold">
          {product.quantity}
        </span>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300">
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(product.id)}
        className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
      >
        Remove
      </button>

    </div>
  );
};

export default CartProductCard;
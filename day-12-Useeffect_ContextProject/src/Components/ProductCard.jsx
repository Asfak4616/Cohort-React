import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  const addToCart = () => {
    setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product added into cart");
  };

  let { setCartItem, incrementQuantity ,decrementQuantity} = useContext(MyStore);
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-sm font-semibold uppercase text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-700">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          {isInCart ? (
            <button className="w-full bg-gray-600 flex item-center justify-center gap-4">
              <span onClick={()=>{decrementQuantity(product.id)}} className="text-4xl">-</span>{" "}
              <span className="text-3xl">{isInCart.quantity}</span>{" "}
              <span
                onClick={() => {
                  incrementQuantity(product.id);
                }}
                className="text-4xl"
              >
                +
              </span>
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

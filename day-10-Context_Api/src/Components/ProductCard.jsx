import React, { useContext } from "react";
import { MyShop } from "../context/My_Ecomm";

const ProductCard = ({ product  }) => {

  let {setCartItems} =useContext(MyShop)
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center rounded-md bg-green-600 px-2 py-1 text-sm font-semibold text-white">
            {product.rating.rate}
            <span className="ml-1">★</span>
          </div>

          <span className="text-sm text-gray-500">
            {product.rating.count} ratings
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button onClick={()=>{setCartItems(prev =>[...prev,product])}} className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React, { useContext } from "react";
import { MyShop } from "../context/My_Ecomm";

const Cart = () => {

 let {cartItems}  = useContext(MyShop)

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          🛒 My Cart
        </h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex  items-center justify-center rounded-2xl bg-white shadow">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">
                Your Cart is Empty
              </h2>

              <p className="mt-2 text-gray-500">
                Please add some products to your cart.
              </p>
            </div>
          </div>
        ) : (

          /* Cart Products */
          <div className="space-y-5">

            {cartItems.map((product) => (

              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-md md:flex-row md:items-center"
              >

                {/* Image */}
                <div className="flex h-40 w-full items-center justify-center rounded-xl bg-gray-100 p-4 md:w-40">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Information */}
                <div className="flex-1">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
                    {product.category}
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-gray-800">
                    {product.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-md bg-green-600 px-2 py-1 text-sm font-semibold text-white">
                      {product.rating.rate} ★
                    </span>

                    <span className="text-sm text-gray-500">
                      {product.rating.count} ratings
                    </span>
                  </div>

                </div>

                {/* Price + Remove */}
                <div className="flex items-center justify-between gap-5 md:flex-col">

                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </p>

                  <button
                    onClick={() => removeItem(product.id)}
                    className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
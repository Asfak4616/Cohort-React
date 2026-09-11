import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl">

      {/* Image Skeleton */}
      <div className="h-64 animate-pulse bg-gray-800">
        <div className="h-full w-full bg-gray-800" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title Skeleton */}
        <div className="mb-4 h-5 w-3/4 animate-pulse rounded bg-gray-700" />

        {/* Price Skeleton */}
        <div className="mb-5 h-8 w-24 animate-pulse rounded bg-gray-700" />

        {/* Quantity Skeleton */}
        <div className="mb-5 flex items-center justify-between rounded-xl border border-gray-700 bg-gray-800 p-2">

          <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-700" />

          <div className="h-5 w-6 animate-pulse rounded bg-gray-700" />

          <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-700" />

        </div>

        {/* Add To Cart Skeleton */}
        <div className="h-12 w-full animate-pulse rounded-xl bg-gray-700" />

      </div>
    </div>
  );
};

export default ProductCardSkeleton;
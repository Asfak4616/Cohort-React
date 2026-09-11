import React from "react";

import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProduct } from "../hooks/ProductHooks";
import Filters  from "../components/Filters";
import { getProductDataApi } from "../Api/ProductApi";

const ShopPage = () => {

let {filteredProducts,filterProducts,isLoading} = useProduct();

 return (
      <div className="min-h-screen bg-black p-8">
        <Filters filteredProducts ={filteredProducts } />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : filterProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
              }
        </div>
      </div>
  );
};

export default ShopPage;

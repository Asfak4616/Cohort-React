import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/ProductApi";
import ProductCard from "./Component/ProductCard";

const Infinity = () => {
  let limit = 20;
  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "Loading....";
  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="grid w-full grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    {
        hasNextPage && (  <button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading" : "load More"}
      </button>)
    }
    </div>
  );
};

export default Infinity;

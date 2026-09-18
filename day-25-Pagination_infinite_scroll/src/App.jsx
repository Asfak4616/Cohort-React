import React, { useEffect, useState } from "react";
import ProductCard from "./Component/ProductCard";
import axios from "axios";
const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  console.log(page);
  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.log("the api error is", error);
    }
  };
let totalPages = Math.ceil(products?.total/limit)
console.log(totalPages)

  useEffect(() => {
    getAllProducts();
  }, [page]);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="grid w-full grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage(page - 1);
          }}
          className="p-3 bg-amber-600 rounded"
        >
          Prev
        </button>
        <p>page {page+1} of {totalPages}</p>
        <button
        disabled ={page >= totalPages-1}
          onClick={() => {
            setPage(page + 1);
          }}
          className="p-3 bg-amber-600 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

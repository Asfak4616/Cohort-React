import React from "react";
import {
  UseAllProduct,
  useProductByCategory,
} from "../../hooks/UseProductHooks";
import ProductCard from "../component/ProductCard";
import Filter from "../component/Filter";

const ProductPage = () => {
  let { data, isPending, errors, search, setSearch } = UseAllProduct();

  let {
    data: ProductsByCategory,
    category,
    setCategory,
  } = useProductByCategory();
  console.log(ProductsByCategory);

  if (isPending) return <h1>Loading Product..</h1>;

  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {ProductsByCategory?.products.length
          ? ProductsByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;

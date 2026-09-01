import React, { useEffect, useState } from "react";
import { data } from "react-router";
import ProductCard from "../Components/ProductCard";
import { axiosInstance } from "../Config/axiosInstance";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      console.log(res);
      setProductData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Product in error ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  if (isLoading) return <h1 className="text-2xl ">Loading Products</h1>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {productData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;

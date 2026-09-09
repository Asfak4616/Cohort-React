import React, { useEffect, useState } from "react";
import  axios from "axios";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
 const [productData,setProductData] =  useState([])
  let getProductData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products)
      setProductData(res.data.products)
    } catch (error) {
      console.log("The error is", error);
    }
  };
 useEffect(()=>{
getProductData()
 },[])
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {
        productData.map((product)=>{
          <ProductCard key={product.id} product={product}/>
        })
       }
      </div>
      
    </div>
  );
};

export default ShopPage;

import React, { useContext, useEffect } from "react";
import { MyStore } from "../Context/My_Context";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  let { productData, setProductData } = useContext(MyStore);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("Error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-2 grid grid-cols-4 gap-4">
      {productData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Home;

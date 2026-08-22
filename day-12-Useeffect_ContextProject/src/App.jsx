import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartScreen from "./Pages/CartScreen";
import { MyStore } from "./Context/MyContext";

const App = () => {
  const [productData, setProductData] = useState([]);
  let { toggle, cartItem } = useContext(MyStore);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4 ">
      <Navbar />
      {toggle ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productData.map((elem) => {
            let isInCart = cartItem.find((val) =>  val.id === elem.id);

            return <ProductCard key={elem.id} product={elem} isInCart={isInCart} />;
          })}
        </div>
      )}
    </div>
  );
};
export default App;

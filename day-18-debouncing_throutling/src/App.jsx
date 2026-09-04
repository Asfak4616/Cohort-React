import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [products, setProducts] = useState([]);
  const [scrollY, setScrollY] = useState(null);
  let throttle = false;

  let getProductData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  let filterData = () => {
    console.log("Filter Running...");
    let result = products.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProducts(result);
  };

  //Debouncing...
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filterData();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchData]);

  // throttling...
  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll trigger");
      setScrollY(window.scrollY);
      setTimeout(() => {
        throttle = false;
      }, 2000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div>
      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchData(e.target.value)}
      />
      {products.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;

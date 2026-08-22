import React, { useContext ,useState} from "react";
import { MyStore } from "../Context/My_Context";

const Home = () => {

 
  console.log("Home Render...");
  return (
    <div>
      <h1>Home Rendering</h1>
    </div>
  );
};

export default Home;

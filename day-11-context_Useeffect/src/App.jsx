import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { ContextProvider, MyStore } from "./Context/My_Context";
import axios from "axios"

const App = () => {

  const [count,setCount] = useState(0)
  const [toggle,setToggle] = useState(false)
  const [apiData,setApiData] = useState(null)
  console.log(apiData)
 


let getData = async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products")
  console.log(res.data)
  setApiData(res.data)
}
  
useEffect(()=>{
getData()

},[])

  return (
    <div>
      <h1>Count is -{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <br />
      <button onClick={()=>{setToggle((prev)=>!prev)}}>Toggle pa change hoga</button>
      {/* <Home/> */}
{/*   
      <ContextProvider>
        <Home />
        <About />
      </ContextProvider> */}
      
      {
        toggle?<Contact />:<About/>
      }
    </div>
  );
};

export default App;

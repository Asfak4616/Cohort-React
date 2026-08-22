import { createContext,useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

  const [toggle, setToggle] = useState(false);
  const [cartItem, setCartItem] = useState([]);


const incrementQuantity = (id)=>{
  setCartItem((prev)=>{
return prev.map((val)=>{
return val.id === id ? {...val, quantity : val.quantity+1} :val;
})
  })
}

const decrementQuantity = (id)=>{
  setCartItem((prev)=>{
return prev.map((val)=>{
return val.id === id ? {...val, quantity : val.quantity-1} :val;
})
  })
}

  return <MyStore.Provider value={{toggle,setToggle,cartItem,setCartItem,incrementQuantity,decrementQuantity}}>{children}</MyStore.Provider>;
};

import { createContext, useState } from "react";

export let MyShop = createContext();

export const MyShopContextProvider = ({children}) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <MyShop.Provider value={{ toggle, setToggle, cartItems, setCartItems }}>
      {children}
    </MyShop.Provider>
  );
};

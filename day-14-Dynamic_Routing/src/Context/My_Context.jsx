import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const [productData,setProductData] = useState([])
    console.log(productData)

  return <MyStore.Provider value={{productData,setProductData}}>{children}</MyStore.Provider>;
};

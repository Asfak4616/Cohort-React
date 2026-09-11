import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../Api/ProductApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  const [filterProduct, setFilterProduct] = useState([]);

  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataApi,
    staleTime: 5000,
  });
  let filterData;
  
  useEffect(() => {
    setFilterProduct(data);
  }, [data, filterData]);

  return {
    isPending,
    data,
    error,
    filterProduct,
  };
};


export const useProduct = ()=>{
  const [filterProducts,setFilterProducts] = useState([])
const [productsData,setProductsData] = useState([]);
const [isLoading,setIsLoading] = useState(true)

let getProducts =async ()=>{
  let data = await getProductDataApi()
  setProductsData(data)
  setFilterProducts(data)
  setIsLoading(false)
}

let filteredProducts = (searchParams) => {
   let filterData = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase()),
    );
    if (filterData) {
      setFilterProducts(filterData);
    }
    console.log(filterData);
  };


useEffect(()=>{
  getProducts()
},[])
return{
  productsData,
  setProductsData,
  filterProducts,
  setFilterProducts,
  isLoading,
  setIsLoading,
  filteredProducts
}
}
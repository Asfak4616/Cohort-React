import { useQuery } from "@tanstack/react-query"
import { getAllProductApi, getProductByCategories, getProductCategories } from "../api/ProductApi"
import { useEffect, useState } from "react";

export const UseAllProduct = ()=>{
      const [search, setSearch] = useState(null);

const [debounceSearch,setDebounceSearch] = useState(null)


useEffect(()=>{
   let timeout =  setTimeout(()=>{
        setDebounceSearch(search)
    },1000);
    return ()=> clearTimeout(timeout)
},[search])

    let {data,isPending,errors}=useQuery({
        queryKey:["products",debounceSearch],
        queryFn:()=>getAllProductApi(debounceSearch),
    });
    console.log("Products data",data)
    return{
        data,
        isPending,
        errors,
        search,
        setSearch

    }
};
    

export const  useAllCategories =()=>{
    return  useQuery({
        queryKey:["AllCategories"],
        queryFn:getProductCategories,
    })
}


export const useProductByCategory = ()=>{

const [category,setCategory] = useState(null)

console.log("ye category hai",category)
let {data} = useQuery({
    queryKey:["ProductsByCategory",category],
    queryFn:()=>getProductByCategories(category),
})
return{
    category,
    data,
    setCategory
}
}
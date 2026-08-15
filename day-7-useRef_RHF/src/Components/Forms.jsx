import React, { useRef, useState } from "react";

const Forms = () => {
  console.log("form rendering...")
//  let inpRef =  useRef();
//  console.log(inpRef)
const [products,setProducts] =useState({});

console.log(products)

const formRef = useRef({});
console.log(formRef)

  const handleSubmit = (e) => {
    e.preventDefault();
   

    let obj ={
      pName:formRef.current.productName.value,
      price:formRef.current.price.value,
      category:formRef.current.category.value,
      image:formRef.current.image.value
    };
    setProducts(obj)
  };
  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          ref={(e)=>{ formRef.current.productName = e}}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
           ref={(e)=>{ formRef.current.price = e}}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="price"
        />
        <span>Select Category :</span>
        <select
           ref={(e)=>{ formRef.current.category = e}}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e)=>{ formRef.current.image = e}}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Create</button>
      </form>
      <h1>{products.pName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>
    </div>
  );
};

export default Forms;

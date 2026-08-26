import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
const [singleProductData,setSingleProductData]  = useState({})
console.log(singleProductData)
   let {id} =  useParams();
  
let getSingleProductData =async ()=>{
  try{
   let res = await axios.get(`https://fakestoreapi.com/products/${id}`)

   setSingleProductData(res.data)
  }
  catch(error)
    {
console.log("Error is ",error)
    }
  
}
useEffect(()=>{
  getSingleProductData()
},[])

  return (
       <div className="min-h-[80%] bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="flex items-center justify-center bg-white p-10">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="w-full h-[450px] object-contain"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="p-8 md:p-10">

            {/* Category */}
            <p className="text-sm uppercase font-semibold text-blue-600 tracking-wide">
              {singleProductData.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mt-3 leading-tight">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">
              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <span className="text-gray-500">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-400">
                ({singleProductData.rating?.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-4xl font-bold text-green-600">
                ${singleProductData.price}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Description */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              singleProductData Description
            </h2>

            <p className="text-gray-600 leading-7">
              {singleProductData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

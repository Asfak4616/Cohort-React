import React from "react";
import { useProductApi } from "../hooks/ProductHooks";

const Filters = ({filteredProducts}) => {

  return (
    <div className="p-3 w-full flex gap-4 border border-gray-500 rounded">
      <div className="flex gap-4 w-full">
        <input
        onChange={(e)=>filteredProducts(e.target.value)}
          className="p-2 outline-0 w-full border rounded"
          type="text"
          placeholder="Search Products..."
        />
        <button 
          className="p-2 bg-white text-black rounded border-0
      "
        >
          Search
        </button>
      </div>
      <div className="">
        <span>Select Categories</span>
        <select className="p-1 bg-white text-black rounded outline-0 border-0">
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

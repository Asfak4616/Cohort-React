import React from "react";
import { useAllCategories } from "../../hooks/UseProductHooks";

const Filter = ({ setSearch, search, category, setCategory }) => {
  let { data, isPending, error } = useAllCategories();

  if (isPending) return <h1>Loading Categories...</h1>;
  return (
    <div className=" flex flex-col gap-2 rounded-xl bg-white p-5 shadow-md md:flex-row md:items-center md:justify-between">
      {/* Search Bar */}
      <div className="w-full md:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Category Select */}
      <div className="w-full md:w-1/3">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="all">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;

// import React, { useState } from "react";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { getAllProducts } from "./api/ProductApi";
// import ProductCard from "./Component/ProductCard";

// const TanStack = () => {
//   const [page, setPage] = useState(0);
//   let limit = 10;

//   let { data, isPending, isError ,isPlaceholderData} = useQuery({
//     queryKey: ["products", page],
//     queryFn: () => getAllProducts(limit,page),
//     placeholderData:keepPreviousData,
//   });

//   if (isPending) return "Loading...";
//   if (isError) return "Something went wrong...";

//   console.log(data);

//   let totalPages = Math.ceil(data.total / limit);

//   return (
//     <div 
//     style={{opacity:isPlaceholderData? "0.3" : 1}}
//     className="flex flex-col gap-6 items-center">
//       <div className="grid w-full grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {data?.products.map((val) => (
//           <ProductCard key={val.id} product={val} />
//         ))}
//       </div>
//       <div className="flex gap-5 items-center">
//         <button
//           disabled={page === 0}
//           onClick={() => {
//             setPage(page - 1);
//           }}
//           className="p-3 bg-amber-600 rounded"
//         >
//           Prev
//         </button>
//         <p>
//           page {page + 1} of {totalPages}
//         </p>
//         <button
//           disabled={page >= totalPages - 1}
//           onClick={() => {
//             setPage(page + 1);
//           }}
//           className="p-3 bg-amber-600 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TanStack;

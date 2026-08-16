import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("RHF rendering...");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80 h-screen">
      REACT HOOK FORM
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="price"
        />
        <input
          {...register("Category")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Category"
        />
        <input
          {...register("image")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default RHF;

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ users, setUsers, setToggle, UpdatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: UpdatedData,
  });

  let formSubmit = (data) => {
    if (UpdatedData) {
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === UpdatedData.id ? { ...data } : val;
        });
      });
    } else {
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-xl font-semibold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-80 flex flex-col gap-3 p-4 rounded border-2 border-white bg-black "
      >
        <input
          {...register("name", { required: "name is required" })}
          className="border p-2 rounded outline-0"
          type="name"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter valid email",
            },
          })}
          className="border p-2 rounded outline-0"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 ">{errors.email.message}</p>
        )}
        <input
          {...register("mobile", {
            required: "Number is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="border p-2 rounded outline-0"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", { required: "URL is required" })}
          className="border p-2 rounded outline-0"
          type="url"
          placeholder="Image URL"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className=" bg-blue-600 text-white p-2 rounded cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};
export default Form;

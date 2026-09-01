import React from "react";
import { useAuth  } from "../Hooks/UseAuth";

const Register = () => {
  const { handleSubmit,register ,errors,RegisterFormSubmit,navigate} = useAuth()
 
  return (
    <div className="h-screen overflow-hidden bg- gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-1">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(RegisterFormSubmit)} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 Character is required ",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-sm text-gray-400">OR</span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Login */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => {
                navigate("/");
              }}
              type="button"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

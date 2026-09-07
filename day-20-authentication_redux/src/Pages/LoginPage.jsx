
import React from "react";
import { useAuth } from "../hooks/AuthHooks";


const Login = () => {
  let {navigate,register,handleSubmit,errors,loginForm} = useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>

            <input
            {...register("email",{
              required:"Email is required"
            })}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
            />
             {errors.email &&  <p className="text-red">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              {...register("password",{
              required:"Password is required",
              minLength:{
                value:8,
                message:"Minimum 8 Character is required"
              }
            })}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
            />
            {errors.password &&  <p className="text-red">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg
            font-semibold hover:bg-blue-700 active:scale-[0.98]
            transition duration-200"
          >
            Login
          </button>

        </form>

        {/* Register Section */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <button
            onClick={()=>navigate("/register")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;


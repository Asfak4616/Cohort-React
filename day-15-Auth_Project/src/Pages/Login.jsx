
import React, { useContext } from "react";
import {useNavigate} from "react-router"
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";
const Login = () => {
  const {registerUser,loggedInUser,setLoggedInUser} = useContext(Auth)
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let formSubmit = (data)=>{
let user = registerUser.find((val)=>{
  return val.email === data.email && val.password ===  data.password
})
if(!user){
toast.error("Invalid Creds or user in not found")
reset()
  return;
}
setLoggedInUser(user)
localStorage.setItem('loggedInUser',JSON.stringify(user))
toast.success("User LoggedIn")
navigate("/main")
 reset()
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

           {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>

            <input
             {...register("email",{
                required:"Email is required"
            })
            }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
             {...register("password",{
                required:"password is required",
                minLength:{
                    value:6,
                    message:"Minimum 6 Character is required "
                }
            })
            }
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>

        </form>

        {/* Register Section */}
        <div className="flex items-center gap-3 my-7">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <button 
            onClick={()=>{navigate('/register')}}
              type="button"
              className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
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


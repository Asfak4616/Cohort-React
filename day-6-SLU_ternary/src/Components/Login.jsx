import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="bg-white w-80 p-6 rounded-xl flex flex-col gap-4">
      <h1>Login</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
          Login
        </button>
      </form>
      <p>
        Didn't have a account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;

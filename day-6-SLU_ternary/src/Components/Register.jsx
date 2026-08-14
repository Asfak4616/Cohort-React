import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "asfak",
    email: "asfak@gmail.com",
    password: 123456,
    image: "",
  });

  const handelChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };
  return (
    <div className="bg-white w-75 h-180px p-5 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input
          required
          value={formData.name}
          name="name"
          onChange={handelChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={formData.email}
          name="email"
          onChange={handelChange}
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          required
          value={formData.password}
          name="password"
          onChange={handelChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <input
          required
          value={formData.image}
          name="image"
          onChange={handelChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have a account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;

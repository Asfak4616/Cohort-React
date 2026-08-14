import React, { useState } from "react";
const Web = () => {
  const [formData, setFormData] = useState({});


  const handelChange = (e) => {
    let {name,value}=e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col w-70 gap-4 p-5">
      <input
        name="name"
        onChange={handelChange}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handelChange}
        className="border-2"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handelChange}
        className="border-2"
        type="password"
        placeholder="Password"
      />
      <button onClick={() => {}} className="border-2">
        submit
      </button>
      <h1>THis is name -{formData.name}</h1>
      <h1>This is Email- {formData.email}</h1>
      <h1>This is password - {formData.password}</h1>
    </div>
  );
};
export default Web;

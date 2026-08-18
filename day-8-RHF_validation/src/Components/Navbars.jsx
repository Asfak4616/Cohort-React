import React from "react";

const Navbars = ({setToggle}) => {
  return <div className="p-4 flex items-center justify-between bg-black rounded">
<div >
  <img className="rounded-full" width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXze31Ftkykf-vSbA9d2ajVmcIq96jNK2RW3OQRk8L-Q&s=10" alt="" />
</div>
<div className="flex justify-between items-center gap-7 font-semibold">
  <p>Home</p>
  <p>About</p>
  <p>Contact</p>
</div>
<button onClick={()=>{
  setToggle((prev)=>!prev)
}} className="p-2 bg-blue-600 text-white rounded cursor-pointer">Create User</button>
  </div>;
};

export default Navbars;

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  let disPatch = useDispatch();
  let navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registerUser, data];
    setRegisterUser(arr);

    localStorage.setItem("registerUser", JSON.stringify(arr));
    toast.success("User Register..");
  };
  const loginForm = (data) => {
    let user = registerUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Invalid Something..");
      return;
    }
    disPatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user Logged In");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};

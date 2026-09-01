import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {
  const { registerUser, loggedInUser, setLoggedInUser, setRegisterUser } =
    useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginFormSubmit = (data) => {
    let user = registerUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Invalid Creds or user in not found");
      reset();
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User LoggedIn");
      reset();
    navigate("/main");
  
  };


  let RegisterFormSubmit = (data) => {
   let arr = [...registerUser,data];
   setRegisterUser(arr)
   alert("User Register Successful")
   setLoggedInUser(data)
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    localStorage.setItem("registerUser",JSON.stringify(arr))
    navigate("/main");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    RegisterFormSubmit,
  };
};

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import {useDispatch} from "react-redux"
import { toast } from "react-toastify";
import { addUser } from "../state/authSlice";


export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("Register", data);
  };
  const loginForm = async (data) => {
  try{
  let response = await loginUserApi(data)
  dispatch(addUser(response))
  toast.success("User logged In")
  }catch(error){
console.log("form api error",error)
  }
    // api call

  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    registerForm,
    loginForm,
  };
};

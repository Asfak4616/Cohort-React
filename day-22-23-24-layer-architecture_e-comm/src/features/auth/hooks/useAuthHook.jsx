import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import {useDispatch} from "react-redux"

import { loginUserAction } from "../state/authAction";


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
    console.log("Thunk action triggered")
dispatch(loginUserAction(data))
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


import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";


export const useAuth =()=>{
      const { registerUser, loggedInUser, setLoggedInUser,setRegisterUser } = useContext(Auth);
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
    navigate("/main");
    reset();
  };
   let RegisterFormSubmit = (data) => {
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
    RegisterFormSubmit
  }

}
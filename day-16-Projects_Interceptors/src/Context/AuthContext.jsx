import { createContext, useState } from "react";

export const Auth = createContext();

export const CreateProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );
  console.log(registerUser);
  console.log(loggedInUser);

  return (
    <Auth.Provider
      value={{ registerUser, setRegisterUser, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};

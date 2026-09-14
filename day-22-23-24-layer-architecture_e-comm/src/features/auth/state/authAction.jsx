import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      toast.success("user logged In");
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue("Login Failed!!");
    }
  },
);

export const hydrateUserAction = createAsyncThunk("/auth/hydrate",async (_,thunkApi) => {
    let token = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me",{
       headers: {
    'Authorization':` Bearer ${token}`,
  }, 
    });
    console.log("response from hydrateUser api ", res);
    return res.data;
  } catch (error) {
    toast.error("hydration failed")
    return thunkApi.rejectWithValue("unAuthorized User")
  }
});

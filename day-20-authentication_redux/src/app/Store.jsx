import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "../features/CounterSlice"
import AuthReducer from "../features/AuthSlice"
export const Store = configureStore({
    reducer:{
   counter:CounterReducer,
   auth:AuthReducer
    }
})
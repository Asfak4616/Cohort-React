import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "../features/CounterSlice"
export const Store = configureStore({
    reducer:{
   counter:CounterReducer,
    }
})
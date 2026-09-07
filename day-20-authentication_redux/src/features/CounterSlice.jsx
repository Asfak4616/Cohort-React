import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increment:(state,action)=>{
            state.count++;
        },
        decrement:(state,action)=>{
            state.count--
        },
        incrementByValue:(state,action)=>{
         state.count += Number(action.payload);
        }
    }
})
export  const {increment,decrement,incrementByValue} = CounterSlice.actions;
export default  CounterSlice.reducer;
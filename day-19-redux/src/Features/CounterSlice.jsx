import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    //This is my State
    name:"counter",
    initialState:{
        count:0
    },
    //This is my Actions:
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
    }

});
console.log(counterSlice)
export const{increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;

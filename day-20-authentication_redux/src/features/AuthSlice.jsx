
import {createSlice} from "@reduxjs/toolkit"
const AuthSlice = createSlice({


    name:"auth",
    initialState:{
        user:null,
        isAuthentication:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthentication= true;
        },
        removeUser:(state)=>{
            state.user = null;
            state.isAuthentication= false
        }
    }
})
export const {addUser,removeUser} = AuthSlice.actions
export default AuthSlice.reducer;

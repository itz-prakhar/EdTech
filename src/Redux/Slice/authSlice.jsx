import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token : localStorage.getItem("token") ?localStorage.getItem("token"): null,
    loading:false,
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        }
    }
})
export const {setToken,setLoading} = AuthSlice.actions;
export default AuthSlice.reducer;
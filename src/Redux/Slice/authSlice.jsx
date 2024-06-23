import { createSlice } from "@reduxjs/toolkit";

const initialState={
    signUpData:null,
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
        },
        setSignUpData:(state,action)=>{
            state.signUpData=action.payload;
        }
    }
})
export const {setToken,setLoading,setSignUpData} = AuthSlice.actions;
export default AuthSlice.reducer;
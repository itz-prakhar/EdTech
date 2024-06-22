import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):0,
    loading:false,
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        }
    }
})

export const {setUser,setLoading} = UserSlice.actions;
export default UserSlice.reducer;
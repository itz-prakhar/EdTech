import { createSlice } from "@reduxjs/toolkit";

const initialState={
    step:1,
    course:null,
}
const CourseSlice= createSlice({
    name:"course",
    initialState,
    reducers:{
        setStep:(state,action)=>{
            state.step=action.payload;
        },
        setCourse:(state,action)=>{
            state.course=action.payload;
        }
    }
})
export const {setStep,setCourse}=CourseSlice.actions;
export default CourseSlice.reducer
import React, { useEffect, useState } from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {SendOTP} from "../../services/operation/authApi"
import {Signup} from "../../services/operation/authApi"
import {setSignUpData} from "../../Redux/Slice/authSlice"
import Spinner from "../Common/Spinner"
import toast from 'react-hot-toast';

const SignupForm = () => {
    const [formData,setFormData]=useState({
        accountType:"Student",
        firstName:"",lastName:"",email:"",password:"",confirmPassword:""
    })
    const {accountType,firstName,lastName,email,password,confirmPassword}=formData;
    const [show1,setShown1]=useState(false)
    const [show2,setShown2]=useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {loading} = useSelector((state)=>state.auth)

    const changeHandler=(e)=>{
        setFormData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
    const {signUpData}=useSelector((state)=>state.auth)
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("formData",formData)
        if(password==confirmPassword){
        dispatch(setSignUpData(formData));
        console.log("signUpDatasignUpData",signUpData)
        dispatch(SendOTP(email,navigate))
        }
        else{
            toast.error("Password Not matched")
        }
    }
  return (
    <>
{
    !loading ? ( <div className="flex w-full text-richblack-5">
      <form className="flex w-[95%] gap-4 flex-col " onSubmit={submitHandler}>
      <div className='flex w-fit text-lg p-2 bg-richblack-800 gap-5 rounded-full'>
        <span className={` p-2 px-4 rounded-full ${formData.accountType=="Student" && "bg-richblack-900"} `} onClick={()=>setFormData({...formData,accountType:'Student'})} >Student</span>
        <span className={` p-2 px-4 rounded-full ${formData.accountType=="Instructor" && "bg-richblack-900"} `} onClick={()=>setFormData({...formData,accountType:'Instructor'})}>Instructor</span>
      </div>
        <div className="flex justify-between gap-5 flex-col lg:flex-row  ">
            <div className="flex flex-col">
                <label>First Name <span className="text-pink-200 text-sm">*</span></label>
                <input className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200" type='text' name="firstName" value={formData.firstName} placeholder='Enter first name' onChange={changeHandler} required ></input>
            </div>
            <div className="flex flex-col">
                <label>Last Name <span className="text-pink-200 text-sm">*</span></label>
                <input className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200" type='text' name="lastName" value={formData.lastName} placeholder='Enter last name' onChange={changeHandler} required ></input>
            </div>
        </div>
        <div className="flex flex-col">
            <label>
                Email Address <span className="text-pink-200 text-sm">*</span>
            </label>
            <input className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200" type='email' name='email' value={formData.email} placeholder='Enter email address' onChange={changeHandler} required ></input>
        </div>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
            <div className="relative flex flex-col">
                <label>Create Password <span className="text-pink-200 text-sm">*</span></label>
                <input className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200" type={show1?"text":"password"} name="password" value={formData.password} placeholder='Enter Password' onChange={changeHandler} required></input>
                <div className='absolute top-10 text-xl right-3'>{!show1?<FaRegEye onClick={()=>setShown1(!show1)}/>:<FaRegEyeSlash onClick={()=>setShown1(!show1)}/>}
</div>
                
            </div>
            <div className="relative flex flex-col">
                <label>Confirm Password <span className="text-pink-200 text-sm">*</span></label>
                <input className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200" type={show2?"text":"password"} name="confirmPassword" value={formData.confirmPassword} placeholder='Enter Password' onChange={changeHandler} required ></input>
                <div className='absolute top-10 text-xl right-3'>{!show2?<FaRegEye onClick={()=>setShown2(!show2)}/>:<FaRegEyeSlash onClick={()=>setShown2(!show2)}/>}
</div>
                
            </div>
        </div>
        <button className="bg-yellow-50 hover:bg-yellow-100 mt-2 font-medium  text-richblack-900 py-3 rounded-lg">Create Account</button>
      </form>
    </div>):(
        <Spinner/>
    )
}
    </>

  )
}

export default SignupForm

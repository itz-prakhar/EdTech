import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setLoading} from "../../Redux/Slice/authSlice"
import Spinner from "../Common/Spinner"
import {Login} from "../../services/operation/authApi" 

const LoginForm = () => {
    const [formData,setFormData]=useState({
        email:"rishiadmin@gmail.com",
        password:"12345"
    })
    const [isShown,setShown]=useState(false)
    const {email,password}=formData;
    const {loading}=useSelector((state)=>state.auth)
    
    const dispatch=useDispatch();
    const navigate =useNavigate()

    const changeHandler=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(Login(email,password,navigate))
    }
  return (
    <>
      {
        !loading ?(    <div className="flex w-full text-richblack-5">
      <form className="flex gap-5 w-full flex-col" onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label >
            Email Address <span className="text-pink-200 text-sm">*</span>
          </label>
          <input
          className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          name="email"
          onChange={changeHandler}
          ></input>
        </div>
        <div className="flex relative flex-col">
          <label >
            Password <span className="text-pink-200 text-sm">*</span>
          </label>
          <input
          className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-yellow-200"
          type={!isShown?"text":"password"}
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          ></input>
          <div className="absolute text-lg right-4 top-10" >          {isShown?<FaRegEye onClick={()=>setShown(!isShown)}/>:<FaRegEyeSlash onClick={()=>setShown(!isShown)}/>}
</div>
        </div>
        <button className="bg-yellow-50 hover:bg-yellow-100 mt-4 font-medium  text-richblack-900 p-2 rounded-lg">Sign in</button>
      </form>
    </div>):(
        <Spinner/>
    )
      }  
    </>

  );
};

export default LoginForm;

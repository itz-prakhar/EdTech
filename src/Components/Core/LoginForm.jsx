import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [formData,setFormData]=useState({
        email:"hii",
        password:""
    })
    const [isShown,setShown]=useState(false)
    const {email,password}=formData;
    const changeHandler=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("fromData",formData)
    }
  return (
    <div className="flex w-full text-richblack-5">
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
    </div>
  );
};

export default LoginForm;

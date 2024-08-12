import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import CTAButton from '../../Home/CTAButton';
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePasswordDetails } from '../../../services/operation/settingApiCall';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
    const {user}=useSelector((state)=>state.user)
    const {token}=useSelector((state)=>state.auth)
    const [showPassword1,setShowPassword1]=useState(false)
    const [showPassword2,setShowPassword2]=useState(false)
    const dispatch = useDispatch()
    const {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful}}=useForm();
    const submitHandler=async(data)=>{
        const {oldPassword,newPassword}=data;
         dispatch(UpdatePasswordDetails(oldPassword,newPassword,user.email,token))
    }
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                oldPassword:"",newPassword:""
            })
        }
    },[isSubmitSuccessful])

  return (
    <div>
      <form className='relative grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-5' onSubmit={handleSubmit(submitHandler)}>
        <div className='relative flex flex-col gap-1'>
            <label htmlFor='oldPassword' >Current Password</label>
            <input 
           className="bg-richblack-700 w-full  rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none"
            type={showPassword1?'text':'password'}
            name='oldPassword'
            {...register("oldPassword",{required:true})}
             ></input>
             <span onClick={()=>setShowPassword1(!showPassword1)} className='absolute bottom-4 right-2 ' > {!showPassword1 ? <FaRegEye />:<FaRegEyeSlash />} </span>
             {errors.oldPassword && <span className="text-yellow-50 text-[0.7rem] mt-1">
              Please Enter Current Password
            </span>}
        </div>
        <div className='relative flex flex-col gap-1'>
            <label htmlFor='newPassword' >New Password</label>
            <input 
           className="bg-richblack-700 w-full  rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none"
           type={showPassword2?'text':'password'}
            name='newPassword'
            {...register("newPassword",{required:true})}
             ></input>
             <span onClick={()=>setShowPassword2(!showPassword2)} className='absolute bottom-4 right-2 '> {!showPassword2 ? <FaRegEye />:<FaRegEyeSlash />}</span>
             {errors.newPassword && <span className="text-yellow-50 text-[0.7rem] mt-1">
              Please Enter New Password
            </span>}
        </div>
        <div  className="absolute bottom-[-5.5rem] right-0">
        <div className="flex gap-5">
        <CTAButton isActive={false} path="/dashboard/my-profile" >Cancle</CTAButton>
        <button
          type="submit"
          className="flex justify-center items-center px-4 py-2 shadow-md font-semibold transition-transform duration-300 hover:scale-95 rounded-md text-richblack-900 bg-yellow-50 hover:bg-yellow-100"
        >
          Submit
        </button>
        </div>

        </div>
      </form>
    </div>
  )
}

export default UpdatePassword

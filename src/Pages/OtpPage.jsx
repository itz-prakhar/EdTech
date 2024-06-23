import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { NavLink } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineMoreTime } from "react-icons/md";
import {Signup,SendOTP } from "../services/operation/authApi"
import { useDispatch,useSelector } from 'react-redux';
import { setSignUpData } from '../Redux/Slice/authSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from "../Components/Common/Spinner"

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    const {loading} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {signUpData} = useSelector((state)=>state.auth)
    const submitHandler = () => {
        dispatch(setSignUpData({...signUpData,otp}));
        const {accountType,firstName,lastName,email,password,confirmPassword}=signUpData;
        dispatch(Signup(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate))
        setOtp('')
    }
    
    const sentOtpHandler=()=>{
        setOtp('')
        dispatch(SendOTP(signUpData.email,navigate))
    }
    return (
        <>
            {
                !loading ?(        <div className='bg-richblack-900 flex justify-center items-center w-[100vw] h-[90vh] flex-col'>
            <div className='w-[30%] flex flex-col gap-5'>
                <p className='text-4xl font-bold text-richblack-5'>Verify Email</p>
                <p className='text-lg text-richblack-100'>A verification code has been sent to you. Enter the code below</p>
                <div  className='flex flex-wrap  justify-around ' >
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span className='lg:text-richblack-5 lg:mx-2'>-</span> } // Adjust the width as needed
                        renderInput={(props) => (
                            <input
                                {...props}
                                style={{ width: '3rem', height: '3rem' , }}
                                
                                className='text-center  outline-none text-richblack-5 bg-richblack-800 border-2 rounded-md  focus:ring-2 focus:ring-yellow-100 focus:border-transparent'
                            />
                        )}
                        
                    />
                </div>
                <button className='bg-yellow-50 px-4 py-2 mt-4 rounded-md font-medium' onClick={submitHandler}>Submit</button>
                <div className='flex w-full justify-between text-lg'>
                    <NavLink to="/login"><p className='flex items-center gap-1 text-richblack-5 hover:text-yellow-300'> <GoArrowLeft className='font-bold text-lg '/> Back to login</p></NavLink>
                    <p onClick={sentOtpHandler} className='flex items-center gap-1 text-blue-100 cursor-pointer hover:text-blue-200'><MdOutlineMoreTime/>Resend It</p>
                </div>
            </div>
        </div>):(<Spinner/>)
            }
        </>

    );
}

export default OtpPage;

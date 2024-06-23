import React, { Fragment } from 'react'
import LoginForm from './LoginForm'
import Frame from "../../assets/Images/frame.png"
import SignupForm from './SignupForm'
import BlueText from "../Common/BlueText"

const FormTemplate = ({title , description1 ,description2,img,type}) => {
  return (
    <div className='flex pt-4 flex-col gap-10 md:flex-row justify-around items-center min-h-[90vh] bg-richblack-900 w-full'>
        <div className='flex w-[80%] md:w-[38%] p-5 flex-col gap-4 '>
            <p className='text-richblack-5 text-4xl font-semibold'>{title}</p>
            <div ><p className='text-richblack-100 italic flex text-xl'>{description1}  </p> <p className='flex italic'><BlueText text={description2}/></p> 
            </div>
            <div className='flex'>
            {
                type=="login"?<LoginForm/>:<SignupForm/>
            }  
            </div>

        </div>
        <div className=' relative'>
            <img className=' w-[20rem] lg:w-[30rem] absolute -top-4 right-4 ' src={img}></img>
            <img className=' w-[20rem] lg:w-[30rem]  ' src={Frame}></img>
        </div>
    </div>
  )
}

export default FormTemplate

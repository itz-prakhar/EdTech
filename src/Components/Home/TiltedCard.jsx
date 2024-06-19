import React from 'react'
import BlueText from '../Common/BlueText'
import img1 from "../../assets/Images/Know_your_progress.png"
import img2 from "../../assets/Images/Compare_with_others.png"
import img3 from "../../assets/Images/Plan_your_lessons.png"
import "../../index.css"
import CTAButton from './CTAButton'

const TiltedCard = () => {
  return (
    <div className='flex w-10/12  flex-col justify-center items-center text-center'>
    <div className='flex w-[75%]  items-center justify-center flex-col font-semibold gap-5'>
        <p className='flex flex-col lg:flex-row text-richblack-900 text-4xl gap-2 '>Your swiss knife for <BlueText text={"learning any language"}/> </p>
        <p className=' text-richblack-700'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
    </div>
    <div className='flex flex-col justify-start items-center mt-5 lg:flex-row animate-float'>
        <img className='w-[28rem] ' src={img1}></img>
        <img className='w-[28rem] lg:mx-[-6rem]' src={img2}></img>
        <img className='w-[28rem] mt-[-3rem] ml-[-1rem]' src={img3}></img>
    </div>
    <CTAButton isActive={"true"}  path={"/"}>{"Learn More"}</CTAButton>
    </div>
  )
}

export default TiltedCard

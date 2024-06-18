import React from 'react'
import CTAButton from './CTAButton'
import { TypeAnimation } from 'react-type-animation'
import "../../index.css"
import { IoIosArrowRoundForward } from "react-icons/io";

const CodeBlock = ({position , heading,subHeading , ctaBtn1 , ctaBtn2,codeblock,bgClr,color,gap}) => {
    console.log(codeblock)
  return (
    <div className={` mt-20 px-5 flex flex-col ${position} gap-10 lg:gap-0 justify-evenly items-center w-full   `}>
        <div className="w-[80%] lg:w-[40%] flex flex-col gap-6 text-richblack-300">
            <p className=''>{heading}</p>
            <p className='w-[80%] lg:w-[90%] font-semibold '>{subHeading}</p>
            <div className='flex gap-5'>
            <CTAButton isActive={ctaBtn1.isActive} path={ctaBtn1.path}><div className='flex items-center gap-1'>{ctaBtn1.title} <IoIosArrowRoundForward className='text-xl'/></div> </CTAButton>
            <CTAButton isActive={ctaBtn2.isActive} path={ctaBtn2.path}>{ctaBtn2.title}</CTAButton>
            </div>
        </div>
        {/* {TYPE WRITER} */}
        <div className='h-fit relative border-[1px] border-richblack-700  flex flex-row w-[85%] lg:w-[30%]'>
        {bgClr}
            <div className='flex opacity-0 lg:opacity-100 flex-col justify-center items-center p-1  font-semibold text-richblack-400'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className={`${color} font-mono w-[70%] lg:w-[90%] p-1 pl-2 `}>
                <TypeAnimation
                sequence={[codeblock,2000,""]}
                repeat={Infinity}
                omitDeletionAnimation={true}
                style={{display:"block" , whiteSpace:"pre-line"}}
                ></TypeAnimation>
            </div>
        </div>
    </div>
  )
}

export default CodeBlock

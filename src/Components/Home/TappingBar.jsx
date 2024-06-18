import React, { useEffect, useState } from 'react'
import BlueText from '../Common/BlueText'
import {HomePageExplore} from "../../Data/homepage-explore"
const TappingBar = ({selected,setSelected}) => {
  return (
    <div className='flex  w-[90%] justify-center gap-3 flex-col items-center mt-24 mb-44'>
      <p className='text-4xl flex flex-col sm:flex-row gap-2 font-bold text-richblack-5'>Unlock the <BlueText text={"Power of Code"}/> </p>
      <p className='text-richblack-300 font-semibold'>Learn to Build Anything You Can Imagine</p>
        <div className='flex opacity-0 sm:opacity-100 bg-richblack-800 py-2 px-4 mt-3 gap-5 rounded-full'>
        {
            HomePageExplore.map((data,index)=>(
                <button key={index} className={`text-richblack-300 p-2 px-5 rounded-full hover:text-richblack-25 ${data.tag===selected.tag &&"bg-richblack-900 text-richblack-5"}` } onClick={()=>setSelected(data)} >{data.tag}</button>
            ))
        }

        </div>
    </div>
  )
}

export default TappingBar

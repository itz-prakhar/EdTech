import React, { useEffect, useState } from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

const TappingCard = ({selected}) => {
    const [tapped,setTapped] = useState(0);
    useEffect(()=>{
      console.log("tappedtapped",tapped)
    },[tapped])
  return (
    <div className='flex flex-col w-[80%] md:flex-row justify-center mt-[-7rem]  gap-10  mb-10 '>
      {
        selected.courses.map((item,index)=>(
            
            <div key={index}
        
            className={`bg-richblack-800 text-richblack-300 flex flex-col justify-between gap-3 p-5 pt-8 h-[15rem] md:h-[20rem] ${tapped==index && "bg-white shadow-[10px_10px] shadow-yellow-50"}`}
            onClick={()=>setTapped(index)}
            >
                <div className='flex flex-col gap-2'>
                <p className={`text-richblack-5 font-bold text-lg ${tapped==index && "text-richblack-800 "}`}>{item.heading}</p>
                <p className=''>{item.description}</p>
                </div>
                
                <div className={`flex pt-3 justify-between border-t-[2px] border-dashed border-richblack-300 ${tapped==index && "text-blue-500 "}`}>
                    <div className='flex items-center gap-2'>
                        <FaUserGroup/>
                        <p>{item.level}</p>
                    </div>
                    <div className='flex items-center justify-center gap-2 '>
                        <ImTree/>
                        <p className='font-semibold pt-[0.1rem]'>{item.lessionNumber}</p>
                        <p>Lesson</p>
                    </div>
                    
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default TappingCard

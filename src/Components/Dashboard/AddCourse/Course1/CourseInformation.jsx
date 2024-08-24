import React from 'react'
import { useDispatch } from 'react-redux'
import { setStep } from '../../../../Redux/Slice/courseSlice'
const CourseInformation = () => {
  const dispatch = useDispatch()
  const clikHandler=()=>{
    dispatch(setStep(2));
  }
  return (
    <div className='text-ricblack-900 bg-yellow-50 ' onClick={clikHandler}>
      set2
    </div>
  )
}

export default CourseInformation

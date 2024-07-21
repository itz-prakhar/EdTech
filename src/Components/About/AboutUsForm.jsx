import React from 'react'
import AboutForm from './AboutForm'

const AboutUsForm = () => {
  return (
    <div className='bg-richblack-900 flex justify-center items-center py-10 '>
      <div className='w-10/12 flex justify-center gap-3 items-center flex-col'>
        <p className='text-richblack-5 text-4xl font-bold'>Get in Touch</p>
        <p className='text-richblack-300 mb-2'>We’d love to here for you, Please fill out this form.</p>
        <div className='border-2 px-5 border-richblack-200 rounded-xl py-10'><AboutForm/></div>
      </div>
    </div>
  )
}

export default AboutUsForm

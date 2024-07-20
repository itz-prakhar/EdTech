import React from 'react'
import AboutForm from './AboutForm'

const AboutUsForm = () => {
  return (
    <div className='bg-richblack-900 flex justify-center items-center py-10'>
      <div className='w-10/12 flex justify-center gap-3 items-center flex-col'>
        <p className='text-richblack-5 text-4xl font-bold'>Get in Touch</p>
        <p className='text-richblack-300 mb-2'>We’d love to here for you, Please fill out this form.</p>
        <AboutForm/>
      </div>
    </div>
  )
}

export default AboutUsForm

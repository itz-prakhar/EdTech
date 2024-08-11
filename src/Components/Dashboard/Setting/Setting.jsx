import React from 'react'
import ImageUpload from './ImageUpload'
import EditProfile from './EditProfile'

const Setting = () => {
  return (
    <div className='text-richblack-5 flex h-full my-10 overflow-y-scroll'>
      <div className='w-9/12 mx-auto flex flex-col gap-10' >
      <p className='text-3xl font-semibold'>Edit Profile</p>
      {/* CImage Imput */}
      <div className='bg-richblack-800 px-10 py-7 rounded-lg border-[1px] border-richblack-600'>
        <ImageUpload/>
      </div>
      <div className='bg-richblack-800 px-10 py-7 rounded-lg border-[1px] border-richblack-600' >
        <EditProfile/>
      </div>
      
       </div>
    </div>
  )
}

export default Setting

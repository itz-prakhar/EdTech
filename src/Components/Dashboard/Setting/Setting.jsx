import React from 'react'
import ImageUpload from './ImageUpload'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Setting = () => {
  return (
    <div className='text-richblack-5 flex h-full my-10 '>
      <div className='w-9/12 mx-auto flex flex-col gap-10 pb-14 mb-14' >
      <p className='text-3xl font-semibold'>Edit Profile</p>
      {/* CImage Imput */}
      <div className='bg-richblack-800 px-10 py-7 rounded-lg border-[1px] border-richblack-700'>
        <ImageUpload/>
      </div>
      <div className='bg-richblack-800 px-10 py-7 rounded-lg border-[1px] border-richblack-700' >
        <EditProfile/>
      </div>
      <div className='bg-richblack-800 px-10 py-7 rounded-lg border-[1px] border-richblack-700 mt-10' >
        <UpdatePassword/>
      </div>
      <div className='bg-pink-900 px-10 py-7 rounded-lg border-[1px] border-pink-700 my-10 mb-20' >
        <DeleteAccount/>
      </div>
       </div>
    </div>
  )
}

export default Setting

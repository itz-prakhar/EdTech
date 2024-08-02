import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Logout } from '../../services/operation/authApi'
import { useDispatch } from 'react-redux'

const ConfirmationWindow = ({setConfirmationModal}) => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
  return (
    <div className='fixed inset-0 z-[1000] grid place-items-center  bg-white bg-opacity-10 backdrop-blur-sm'>
      <div className='bg-richblack-900 rounded-xl border-[1px] border-richblack-200 text-richblack-5 p-10 flex flex-col gap-5'>
        <p className='text-4xl font-bold'>Are you sure ?</p>
        <p className='text-richblack-400 font-medium'>You will be logged out of your account</p>
        <div className='flex gap-5 '>
            <button onClick={()=>dispatch(Logout(navigate))} className='bg-yellow-50 hover:bg-yellow-200 text-black font-semibold px-3 py-2 rounded-lg'>Logout</button>
            <button onClick={()=>setConfirmationModal(false)} className='bg-gray-400 hover:bg-gray-500 text-black font-semibold px-3 py-2 rounded-lg'>Cancle</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationWindow

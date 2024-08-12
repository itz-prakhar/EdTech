import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteUserProfile } from '../../../services/operation/settingApiCall';
import toast from 'react-hot-toast';
const DeleteAccount = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.auth)
    const handleDelete=(e)=>{
        // dispatch(DeleteUserProfile(token,navigate)) {commented Because no one can delete test id}
        toast.error("Currently Deactivated Delete feature by Admin")
    }
  return (
    <div className='flex gap-5'>
    <div > <div className='bg-pink-700 rounded-full p-4 ' ><RiDeleteBin6Line className='text-3xl text-pink-200'/></div> </div>
      <div className='flex flex-col gap-2 items-start w-8/12 ' >
      
      <p className='text-xl font-semibold text-richblack-5' >Delete Account</p>
      <div><p className='text-pink-25'>Would you like to delete account?</p>
      <p className='text-pink-25'>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
      </div>
      <button onClick={handleDelete} className='text-pink-300 font-medium italic'>I want to delete my account.</button>
      </div>
    </div>
  )
}

export default DeleteAccount

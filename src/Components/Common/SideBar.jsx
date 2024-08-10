import React, {useState, useEffect } from 'react'
import { sidebarLinks } from '../../Data/dashboard-links'
import { NavLink } from 'react-router-dom'
import * as Icon from "react-icons/vsc"
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useSelector } from 'react-redux';
import ConfirmationWindow from '../Dashboard/ConfirmationWindow';

const SideBar = () => {
  const {user} = useSelector((state)=>state.user)

  const [confirmationModal, setConfirmationModal] = useState(false)
  return (
    <div className='flex md:flex-col gap-5 p-5 pr-10 text-richblack-200 bg-richblack-800 md:min-h-[90vh] '>
    <div className=' grid grid-cols-2  sm:grid-cols-4 md:flex flex-col gap-5'>    {
        sidebarLinks.map((data) => {
          if (user.accountType !=="Admin" && (data.type && user.accountType !== data.type)) return null
          const IconComponent = Icon[data.icon];
          return (
            <NavLink className="flex gap-2 items-center" key={data.id} to={data.path}>
            <IconComponent className="text-[1.2rem]" />
              <p className="text-[0.9rem]">{data.name}</p>
            </NavLink>
          )
        })
      }</div>
<div className='bg-richblack-500 h-[1px]'></div>
<div className='flex flex-col gap-5'> <NavLink to="dashboard/setting" className="flex gap-2 items-center">  <IoSettingsOutline/> <span>Setting</span></NavLink>
  <p className='flex gap-2 items-center' onClick={()=>setConfirmationModal(!confirmationModal)}> <MdLogout/> <span >Logout</span></p></div>
 {confirmationModal && <ConfirmationWindow setConfirmationModal={setConfirmationModal} />}

      
    </div>
  )
}

export default SideBar

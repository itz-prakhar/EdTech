import React from 'react'
import { NavLink } from 'react-router-dom'
import { LiaEditSolid } from "react-icons/lia";

const EditBtn = ({path}) => {
  return (
    <div>
      <NavLink to={path} ><p className="flex bg-yellow-50 hover:bg-yellow-100 py-1 px-2 font-semibold text-lg rounded-lg text-richblack-900 items-center gap-2" >Edit <LiaEditSolid className="text-xl"/> </p></NavLink>
          
    </div>
  )
}

export default EditBtn

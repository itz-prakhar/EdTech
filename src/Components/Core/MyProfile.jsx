import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import EditBtn from "../Dashboard/EditCourse/EditBtn";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    console.log("User in m profile", user);
    console.log("additionalDetails in m profile", user.additionalDetails.about);
  }, []);
  return (
    <div className=" flex  w-full h-full text-white  ">
      <div className="w-9/12 mx-auto my-10  ">
        <p className="text-3xl font-semibold">My Profile</p>
        <div className=" flex flex-col flex-1 mt-10 justify-center gap-10">
          {/* Div1 */}
          <div className="flex flex-col sm:flex-row bg-richblack-800 justify-between items-start sm:items-center px-10 py-7 gap-10 sm:gap-0 rounded-lg border-[1px] border-richblack-600 ">
            <div className="flex flex-col gap-5 sm:items-center">
            <img src={user.image} className="w-[6rem] aspect-square rounded-full" ></img>
              <div className="">
                <p className="flex font-bold text-lg">{user.firstName} {user.lastName}</p>
                <p className="text-richblack-400 font-medium  text-sm">{user.email}</p>
              </div>
            </div>
            <EditBtn path={"/dashboard/setting"} />
            </div>
                      {/* Div2 */}
          <div className="flex flex-col sm:flex-row bg-richblack-800 justify-between items-start px-10 py-7 gap-10 sm:gap-0 rounded-lg border-[1px] border-richblack-600 ">
            <div className="flex flex-col gap-5 items-start">
                <p className="flex font-bold text-lg">About</p>
                <p className="text-richblack-400 font-medium text-sm">{user.additionalDetails.about || "Write Something About Yourself"}</p>
                
            </div>
            <EditBtn path={"/dashboard/setting"} />
            </div>
                                  {/* Div3 */}
          <div className="flex flex-col sm:flex-row bg-richblack-800 justify-between gap-10 sm:gap-0 items-start px-10 py-7 mb-14 rounded-lg border-[1px] border-richblack-600 ">
            <div className="flex flex-col gap-8 items-start">
                <p className="flex font-bold text-lg">Personal Details</p>
                <div className="grid  sm:grid-cols-2 gap-y-4 gap-x-32 " >
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">First Name</p> <p className="font-medium">{user.firstName}</p> </div>
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">Last Name</p> <p className="font-medium">{user.lastName}</p> </div>
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">Email</p> <p className="font-medium">{user.email}</p> </div>
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">Phone Number</p> <p className="font-medium">{user.additionalDetails.contactNumber || "Add contactNumber"}</p> </div>
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">Gender</p> <p className="font-medium">{user.additionalDetails.gender || "Add gender"}</p> </div>
                  <div className="flex flex-col gap-1 text-richblack-5 "><p className="text-richblack-400 text-sm">Date Of Birth</p> <p className="font-medium">{user.additionalDetails.dateOfBirth || "Add Date Of Birth"}</p> </div>
                </div>
            </div>
            <EditBtn path={"/dashboard/setting"} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

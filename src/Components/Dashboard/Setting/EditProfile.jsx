import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import CTAButton from "../../Home/CTAButton";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileDetails } from "../../../services/operation/settingApiCall";


const EditProfile = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const {token}=useSelector((state)=>state.auth)
  const {user}=useSelector((state)=>state.user)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const gender = [
    {
      name: "Male",
    },
    {
      name: "Female",
    },
    {
      name: "Other",
    },
  ];
  const submitHandler = async(data) => {
    // console.log("update Profile", data);
    dispatch(updateProfileDetails(data,token,navigate))
  };
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({contactNumber:"",about:"",dateOfBirth:""})
    }
  },[reset,isSubmitSuccessful])
  return (
    <div className="">
      <form
        className=" relative grid xl:grid-cols-2 gap-x-10 gap-y-5 "
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="DOB">Date of Birth</label>
          <input
            className="bg-richblack-700 w-full  rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none"
            type="date"
            name="DOB"
            {...register("dateOfBirth", { required: true })}
          ></input>
          {errors.dateOfBirth && (
            <span className="text-yellow-50 text-[0.7rem] mt-1">
              Please Select DOB
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            className="bg-richblack-700 w-full flex rounded-lg p-[0.845rem] outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none"
            {...register("gender", { required: true })}
          >
            {gender.map((data, index) => (
              <option key={index} value={data.name} className="">
                {data.name}
              </option>
            ))}
          </select>
          {errors.gender && (
            <span className="text-yellow-50 text-[0.7rem] mt-1">
              Please Select Gender
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            className="bg-richblack-700 w-full flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none "
            type="tel"
            name="contactNumber"
            {...register("contactNumber", {
              required: true,
              maxLength: { value: 12 },
              minLength: { value: 8 },
            })}
            placeholder="Contact Number"
          ></input>
          {errors.contactNumber && (
            <span className="text-yellow-50 text-[0.7rem] mt-1">
              Enter valid Contact Number
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about">About <span className="text-[0.7rem] text-yellow-50 font-semibold"> (bio)</span></label>
          <input
            className="bg-richblack-700 w-full flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-700 focus:border-yellow-200 focus:shadow-none "
            type="text"
            name="about"
            
            {...register("about", {
              required: false,
            })}
            placeholder="Write about yourself"
          ></input>
          
        </div>
        <div  className="absolute bottom-[-5.5rem] right-0">
        <div className="flex gap-5">
        <CTAButton isActive={false} path="/dashboard/my-profile" >Cancle</CTAButton>
        <button
          type="submit"
          className="flex justify-center items-center px-4 py-2 shadow-md font-semibold transition-transform duration-300 hover:scale-95 rounded-md text-richblack-900 bg-yellow-50 hover:bg-yellow-100"
        >
          Submit
        </button>
        </div>

        </div>
 </form>
    </div>
  );
};

export default EditProfile;

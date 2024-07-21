import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../Data/countrycode.json";
import {contactUsForm} from "../../services/APIs/"
import fetchData from "../../services/apiConnector"

const AboutForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        contactNumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  const submitFrom = async (data) => {
    console.log("Form Data", data);
    try{
      const response = await fetchData("POST",contactUsForm.SendMail_API,data)
      console.log("response",response)
    }
    catch(err){
      console.log("error in sending message email")
    }
  };
  return (
    <div className="flex flex-col mt-5 text-richblack-25">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitFrom)}>
        {/* NAME */}
        <div className="flex flex-col md:flex-row md:justify-between gap-5 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName">First Name</label>
            <input
              className="bg-richblack-800 w-full flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
              type="text"
              name="firstName"
              placeholder="Enter first name"
              {...register("firstName", { required: true })}
            ></input>
            {errors.firstName && (
              <span className="text-yellow-50 text-[0.7rem]">
                Enter valid name
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="bg-richblack-800 w-full flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
              type="text"
              name="lastName"
              placeholder="Enter last name"
              {...register("lastName", { required: true })}
            ></input>
            {errors.firstName && (
              <span className="text-yellow-50 text-[0.7rem]">
                Enter valid name
              </span>
            )}
          </div>
        </div>
        {/* EMAIL ADDRESS */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Enter Email</label>
          <input
            className="bg-richblack-800 flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
            type="email"
            name="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}
          ></input>
          {errors.email && (
            <span className="text-yellow-50 text-[0.7rem]">
              Enter valid email
            </span>
          )}
        </div>
        {/* Mobile Number */}
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <div className="flex gap-5">
            <select
              className="max-w-20 bg-richblack-800 flex rounded-lg p-3 px-2 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
              name="countryCode"
              {...register("countryCode", { required: true })}
            >
              {CountryCode.map((data, index) => (
                <option value={data.code}>
                  {data.code} &#160; - {data.country}
                </option>
              ))}
            </select>
            <input
              className="bg-richblack-800 w-full flex rounded-lg p-3 outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
              type="number"
              name="contactNumber"
              placeholder="969530xxxx"
              {...register("contactNumber", { required: true })}
            ></input>
          </div>
          {errors.phoneNo && (
            <span className="text-yellow-50 text-[0.7rem]">
              Enter valid number
            </span>
          )}
        </div>
        {/* Message  */}
        <div>
            <label htmlFor="message">Message</label>
            <textarea
            className="bg-richblack-800 flex rounded-lg p-3 w-full outline-none mt-1 shadow-sm shadow-richblack-5 border-2 border-richblack-800 focus:border-richblack-400"
            
            type="text"
            name="message"
            cols={60}
            rows={5}
            placeholder="Enter your message..."
            {...register("message",{required:true})}
            ></textarea>
            {
                errors.message && <span className="text-yellow-50 text-[0.7rem]">
              Enter valid email
            </span> 
            }
        </div>
        <button className="bg-yellow-50 mx-5 hover:bg-yellow-100 mt-4 font-semibold  text-richblack-900 p-2 rounded-lg" type="submit">
          Submit From
        </button>
      </form>
    </div>
  );
};

export default AboutForm;

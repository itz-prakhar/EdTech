import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CourseInformation from "./Course1/CourseInformation";
import CourseBuilderForm from "./Course2/CourseBuilderForm";
import PublishCourse from "./Course3/PublishCourse";
import { useSelector } from "react-redux";

const RenderSteps = () => {
  const {step}= useSelector((state)=>state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div className=" flex flex-col flex-1 my-20 ">
      <div className="flex flex-col max-w-[33.8rem]">
        <div className="flex px-8  md:px-10">
          {steps.map((item) => (
            <div className="flex items-center ">
              <button
                className={` flex justify-center  items-center h-10 rounded-full aspect-square border-[2px]
             ${
               step == item.id
                 ? "text-yellow-50 bg-yellow-800 border-yellow-50 "
                 : "bg-richblack-800 border-richblack-700"
             } 
            ${
              step > item.id
                ? "bg-yellow-50 text-richblack-900"
                : "bg-richblack-800"
            }`}
              >
                {step > item.id ? <FaCheck /> : item.id}{" "}
              </button>

              {item.id != steps.length && (
                <div
                  className={`h-2 w-28 md:w-44 border-t-2 border-dashed ${
                    step > item.id ? "border-yellow-50  " : "border-richblack-100"
                  } `}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="  flex justify-between pr-5">
          {steps.map((item) => (
            <p className={`text-richblack-5 ${item.id==2 && "mr-12"}  `}>{item.title}</p>
          ))}
        </div>
      </div>
      {step==1 && <CourseInformation/>}
      {step==2 && <CourseBuilderForm/>}
      {step==3 && <PublishCourse/>}
    </div>
  );
};

export default RenderSteps;

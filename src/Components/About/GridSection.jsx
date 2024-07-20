import React from "react";
import BlueText from "../Common/BlueText";
import CTAButton from "../Home/CTAButton";
import { useNavigate } from "react-router-dom";

const GridSection = () => {
    const navigate = useNavigate()
  const GridData = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];

  return (
    <div className="bg-richblack-900 py-20 ">
      <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 justify-items-center">
        {GridData.map((data, index) => (
          <div
            key={index}
            className={` ${data.order % 2 === 1 ?"bg-richblack-700 w-[70%] lg:w-full" : "bg-richblack-800 w-[70%] lg:w-full"}
            ${index === 0 && "lg:col-span-2 bg-richblack-900 pl-2"}
            ${data.order == 3 && "lg:col-start-2  "}
            `}
          >
            {data.order < 0 ? (
              <div className="flex flex-col gap-5 w-11/12">
                <p className="text-richblack-5 font-bold text-4xl">
                  {data.heading} <br/> <BlueText text={data.highlightText} />{" "}
                </p>
                <p className="text-richblack-300">{data.description}</p>
                <div className="my-5" onClick={()=>{navigate("/") ;window.scrollTo(0, 0);}}>
                <CTAButton isActive={true} >
                  {data.BtnText}
                </CTAButton></div>
              </div>
            ) : (
              <div className=" p-8 lg:h-72 flex flex-col gap-3 ">
                <p className="text-richblack-5 font-semibold">{data.heading}</p>
                <p className="text-richblack-300 ">{data.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;

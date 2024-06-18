import React from "react";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";

const TimeLineQuality = () => {
  const TimeLine = [
    {
      img: Logo1,
      title: "Leadership",
      description: "Fully committed to the success company",
    },
    {
      img: Logo2,
      title: "Responsibility",
      description: "Students will always be our top priority",
    },
    {
      img: Logo3,
      title: "Flexibility",
      description: "The ability to switch is an important skills",
    },
    {
      img: Logo4,
      title: "Solve the problem",
      description: "Code your way to a solution",
    },
  ];
  return (
    <div className="flex flex-col">
      {TimeLine.map((data, index) => (
        <div className="flex gap-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="p-2 h-10 w-10 object-contain scale-125 bg-white rounded-full"
              src={data.img}
            ></img>
            {
                index<3&&
            <div className="my-2">
              <div className="h-[0.5rem] w-[1px] border-l-[2px] border-dashed  border-richblack-50"></div>
              <div className="h-[2.5rem]   w-[1px] border-l-[2px] border-dashed  border-richblack-200 my-1"></div>
              <div className="h-[0.5rem] w-[1px] border-l-[2px] border-dashed  border-richblack-25"></div>
            </div>
            }

          </div>
          <div>
            <p className="text-richblack-800 text-lg font-semibold">
              {data.title}
            </p>
            <p className="text-richblack-500 text-sm ">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLineQuality;

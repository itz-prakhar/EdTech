import React from "react";

const StatsData = () => {
  const data = [
    {
      count: "5K",
      name: "Active Student",
    },
    {
      count: "10+",
      name: "Mentors",
    },
    {
      count: "200+",
      name: "Courses",
    },
    {
      count: "50+",
      name: "Awards",
    },
  ];
  return (
    <div className="bg-richblack-800 flex justify-center py-10">
      <div className="w-10/12 grid md:grid-cols-4 grid-cols-2 gap-y-5 ">
        {data.map((data, index) => (
          <div className="flex flex-col justify-center items-center " key={index}>
            <p className="text-richblack-5 font-bold text-3xl ">{data.count}</p>
            <p className="text-richblack-400 font-semibold text-lg ">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsData;

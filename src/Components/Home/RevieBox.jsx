import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const RevieBox = () => {
  return (
    <div className="bg-richblack-800 flex flex-col max-w-[15%]">
      <div className="flex gap-2 items-center">
        <img src={"k"}></img>
        <div>
          <p className="text-richblack-25 font-bold">Ayush</p>
          <p className="text-richblack-400">ayushcheck12@gmail.com</p>
        </div>
      </div>

      <p className="text-richblack-100 font-semibold">
        It is very affordable and good course must buy it..
      </p>
      <div className="flex my-3">
      <p className="text-yellow-100 mr-2">3.0</p>
        <FaStar className="text-yellow-100" />
        <FaStarHalfAlt className="text-yellow-100" />
        <FaStar className="text-richblack-500" />
      </div>
    </div>
  );
};

export default RevieBox;

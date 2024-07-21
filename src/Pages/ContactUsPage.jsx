import React from "react";
import { TiMessages } from "react-icons/ti";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import AboutForm from "../Components/About/AboutForm";
import RevieBox from "../Components/Home/RevieBox";
import Footer from "../Components/Common/Footer";

const ContactUsPage = () => {
  return (
    <>    <div className="bg-richblack-900 flex flex-col justify-center items-center overflow-hidden">
    <div className="w-11/12 flex flex-col lg:flex-row gap-20 justify-center  items-center lg:items-start my-20 ">
      <div className=" md:w-[30rem] bg-richblack-800 flex flex-col gap-10 text-richblack-200 font-medium p-5 sm:p-10 rounded-xl">
        <div className="flex gap-3">
          <BiSolidMessageDetail className="text-2xl font-semibold mt-[0.4rem]" />
          <div>
            <p className="text-richblack-5 text-2xl font-semibold mb-1">
              Chat on us
            </p>
            <p>Our friendly team is here to help.</p>
            <p>officialrishiteam@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaEarthAmericas className="text-2xl font-semibold mt-[0.4rem]" />
          <div>
            <p className="text-richblack-5 text-2xl font-semibold mb-1">
              Visit us
            </p>
            <p>Come and say hello at our office HQ.</p>
            <p>Here is the location/ address</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IoCall className="text-2xl font-semibold mt-[0.4rem]" />
          <div>
            <p className="text-richblack-5 text-2xl font-semibold mb-1">
              Call us
            </p>
            <p>Mon - Fri From 8am to 5pm</p>
            <p>+91 969530xxxx</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3  flex-col border-2 py-10 px-5 border-richblack-200 rounded-xl">
        <p className="text-richblack-5 text-4xl font-bold"> Let’s team up</p>
        <p className="text-richblack-300 mb-2">
        Tell us more about yourself and what you’re got in mind.
        </p>
        <AboutForm />
      </div>
    </div>
    {/* REVIEW */}
    <div className=" w-10/12 flex flex-col my-10">
      <p className="text-richblack-5 text-4xl font-semibold mx-auto">
        Reviews from other learners
      </p>
      <div className="my-10">
        <RevieBox />
      </div>
    </div>
  </div>
  <Footer/>
  </>

  );
};

export default ContactUsPage;

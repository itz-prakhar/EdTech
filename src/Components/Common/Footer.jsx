import React, { useEffect } from "react";
import { FooterLink2 } from "../../Data/footer-links";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import StudyNotion from "../../assets/Logo/Logo-Full-Light.png"

const Footer = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 bg-richblack-800 p-10  ">
      {/* LEFT */}
      <div className="flex flex-wrap lg:justify-around lg:max-h-[22rem] gap-16 ">
        <div className="flex flex-col justify-between gap-10 items-start">
            <div>
                <p className="text-richblack-50 font-semibold text-lg  ">Company</p>
                <div className="text-richblack-400 flex flex-col gap-1 mt-2  ">
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">About</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Careers</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Affiliates</p>
                    <div className="flex gap-2 mt-2 ">
                        <FaSquareXTwitter className=" hover:cursor-pointer text-2xl text-black shadow-xl shadow-richblack-50 hover:scale-110 hover:shadow-richblack-300 hover:shadow-lg transition-all duration-300 "/>
                        <CiFacebook className=" hover:cursor-pointer text-2xl text-blue-200 shadow-xl shadow-richblack-50 hover:scale-110 hover:shadow-richblack-300 hover:shadow-lg transition-all duration-300 rounded-xl"/>
                        <SiYoutubeshorts className=" hover:cursor-pointer text-2xl text-red-500 shadow-xl shadow-richblack-50 hover:scale-110 hover:shadow-richblack-300 hover:shadow-lg transition-all duration-300 rounded-xl"/>
                        <FcGoogle className=" hover:cursor-pointer text-2xl  shadow-xl shadow-richblack-50 hover:scale-110 hover:shadow-richblack-300 hover:shadow-lg transition-all duration-300 rounded-xl"/>
                    </div>
                </div>
            </div>
            <img className="w-[9rem] opacity-70 " src={StudyNotion}></img>
        </div>
        <div className="flex flex-col justify-between items-start">
            <div>
                <p className="text-richblack-50 font-semibold text-lg  ">Resources</p>
                <div className="text-richblack-400 flex flex-col gap-1 mt-2">
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Articles</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Blog</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Chart Sheet</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Code challenges</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Docs</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Projects</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Videos</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Workspaces</p>
                </div>
            </div>
            <div>
                <p className="text-richblack-50 font-semibold text-lg ">Support</p>
                <div className="text-richblack-400">
                    <p className="hover:text-richblack-5 mt-2 hover:cursor-pointer">Help Center</p>
                </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start">
            <div>
                <p className="text-richblack-50 font-semibold text-lg  ">Plans</p>
                <div className="text-richblack-400 flex flex-col gap-1 mt-2">
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Paid memberships</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">For students</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Chart Sheet</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Bussiness solutions</p>
                </div>
            </div>
            <div>
                <p className="text-richblack-50 font-semibold text-lg  ">Community</p>
                <div className="text-richblack-400 flex flex-col gap-1 mt-2">
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Forums</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Chapters</p>
                    <p className="hover:text-richblack-5 hover:cursor-pointer ">Events</p>
                    
                </div>
            </div>
          </div>
      </div>
      {/* CENTER */}
      <div className="flex w-[2px] border-l-[2px] border-richblack-700 mx-3 "></div>
      {/* RIGHT  */}
      <div className="flex flex-wrap gap-14 ">
        {FooterLink2.map((data, index) => (
          <div key={index} className="flex flex-col gap-1 ">
            <p className="text-richblack-50 font-semibold text-lg mb-2   ">{data.title}</p>
            {data.links.map((data, index) => (
              <p key={index} className="text-richblack-400 hover:text-richblack-5 hover:cursor-pointer ">{data.title}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

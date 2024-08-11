import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BlueText from "../Components/Common/BlueText";
import { IoIosArrowRoundForward } from "react-icons/io";
import CTAButton from "../Components/Home/CTAButton";
import BannerVideo from "../assets/banner copy.mp4";
import CodeBlock from "../Components/Home/CodeBlock";
import "../index.css";
import TappingBar from "../Components/Home/TappingBar";
import TappingCard from "../Components/Home/TappingCard";
import { HomePageExplore } from "../Data/homepage-explore";
import TimeLineQuality from "../Components/Home/TimeLineQuality";
import TimeLineImage from "../assets/Images/TimelineImage.png";
import TiltedCard from "../Components/Home/TiltedCard";
import Instructor from "../assets/Images/Instructor.png"
import RevieBox from "../Components/Home/RevieBox";
import Footer from "../Components/Common/Footer";

const HomePage = () => {
  const [selected, setSelected] = useState(HomePageExplore[0]);

  return (
    <>
      <div className="bg-richblack-900">
        <div className="flex justify-center items-center flex-col gap-5 pt-14 pb-10">
          <NavLink to="/signup">
            <button className="flex items-center text-richblack-200 bg-richblack-800 rounded-full px-5 py-2 shadow-sm shadow-richblack-100 hover:bg-richblack-700 hover:text-white hover:scale-95 transition-all duration-300">
              <p>Become an Instructor</p>{" "}
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </NavLink>
          <div className="flex flex-col items-center  w-[60%] mx-auto">
            <p className="text-4xl font-semibold text-richblack-5 ">
              Empower Your Future with <BlueText text={"Coding Skills"} />{" "}
            </p>
            <p className="text-richblack-200 mt-3 lg:text-center">
              {" "}
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and personalized
              feedback from instructors.
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <CTAButton isActive={true} path={"/signup"}>
              Learn More
            </CTAButton>
            <CTAButton isActive={false} path={"/login"}>
              Book a Demo
            </CTAButton>
          </div>
          <div className="w-[65%] mt-10 shadow-[10px_-5px_50px_-10px] shadow-blue-200 ">
            <video
              className="shadow-[13px_13px_rgba(255,255,255)]"
              autoPlay
              loop
              muted
            >
              <source src={BannerVideo}></source>
            </video>
          </div>
        </div>
        <div>
          {/* {CodeBLOCK TYPEwriter 1} */}
          <CodeBlock
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl text-richblack-25 font-bold">
                Unlock your <BlueText text={`Coding potential`}></BlueText> with
                our online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaBtn1={{
              isActive: true,
              path: "/signup",
              title: "Try it Yourself",
            }}
            ctaBtn2={{
              isActive: false,
              path: "/login",
              title: "Learn More",
            }}
            bgClr={<div className="codeblock1 absolute"></div>}
            color={"text-yellow-25"}         // color={"text-gradient"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          ></CodeBlock>

          {/* {CodeBLOCK TYPEwriter 2} */}
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl text-richblack-25 font-bold">
                Start <BlueText text={`coding in second`}></BlueText>
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaBtn1={{
              isActive: true,
              path: "/signup",
              title: "Try it Yourself",
            }}
            ctaBtn2={{
              isActive: false,
              path: "/login",
              title: "Learn More",
            }}
            color={"text-richblue-50"}
            gap={"14"}
            bgClr={<div className="codeblock2 absolute"></div>}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          ></CodeBlock>
        </div>
        {/* {Tapping Bar Card section} */}
        <div className="flex justify-center items-center">
          <TappingBar selected={selected} setSelected={setSelected} />
        </div>
        {/* white background start */}
        {/* {TappingCard} */}
        <div className="bg-pure-greys-5">
          <div className="flex flex-col mt-[-6rem] sm:mt-5  justify-center items-center bgHome">
            <TappingCard selected={selected} />
            <div className="flex gap-5 mt-10 mb-20">
              <CTAButton isActive={true} path={"/signup"}>
                {"Explore Full Catalog"}
                <IoIosArrowRoundForward className="text-xl font-extrabold" />
              </CTAButton>
              <CTAButton isActive={false} path={"/login"}>
                {"Learn More"}
              </CTAButton>
            </div>
          </div>
          <div className=" h-[7rem] md:h-[10rem] w-[100%] bg-richblack-900 "></div>
          {/* QUALITY SECTION */}
          <div className="flex justify-center items-center">
            <div className="w-10/12">
              <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 md:mt-20 mb-16 ">
                <p className="text-richblack-900 text-4xl font-semibold gap-2 pt-2">
                  Get the skills you need for a{" "}
                  <BlueText text={" job that is in demand. "} />{" "}
                </p>
                <div className=" flex flex-col gap-5 w-[80%] md:w-[45%]">
                  <p className="text-richblack-700 font-medium">
                    The modern StudyNotion is the dictates its own terms. Today,
                    to be a competitive specialist requires more than
                    professional skills.
                  </p>
                  <CTAButton isActive={true} path={"/login"}>
                    {"Learn More"}
                  </CTAButton>
                </div>
              </div>
              {/* QUALITY TimeLine */}
              <div className="flex flex-col gap-14 mb-10  lg:flex-row lg:justify-around">
                <div className="">
                  <TimeLineQuality />
                </div>
                <div className=" relative shadow-[5px_8px_50px_2px] shadow-blue-200">
                  <img
                    className="lg:w-[38rem] object-contain  shadow-[15px_15px] shadow-white"
                    src={TimeLineImage}
                  ></img>
                  <div className="absolute -bottom-12 left-14 text-white gap-5 flex justify-between p-3 md:p-5 w-[80%] bg-caribbeangreen-700">
                    <div className="flex flex-col sm:flex-row justify-center items-start  sm:gap-3 md:w-[40%]">
                      <p className=" text-4xl md:text-5xl font-bold">10</p>
                      <p className="text-caribbeangreen-300 ">
                        YEARS EXPERIENCES
                      </p>
                    </div>
                    <div className=" my-2 w-[2px] border-l-[2px] border-caribbeangreen-500"></div>
                    <div className="flex flex-col sm:flex-row justify-center items-  sm:gap-3 md:w-[45%]">
                      <p className=" text-4xl md:text-5xl font-bold">250</p>
                      <p className="text-caribbeangreen-300 ">
                        TYPES OF COURSES
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TiltedCardSection */}
          <div className="flex justify-center items-center py-16">
            <TiltedCard />
          </div>
        </div>
        {/* Become Instructor Section */}
        <div className="flex flex-col lg:flex-row py-24 justify-around items-center gap-10">
        <img className="w-9/12 sm:w-[35rem] shadow-[-15px_-15px_rgb(255,255,255)] transition-all duration-500 hover:shadow-[15px_15px_rgb(255,255,255)]" src={Instructor}></img>
        <div className="flex w-10/12 lg:w-[45%] pl-10 gap-4  flex-col">
          <p className=" flex flex-col  text-richblack-5 text-4xl font-bold ">Become an <BlueText text={"instructor"}/> </p>
          <p className="text-richblack-300 pb-2 font-semibold w-[75%]">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
          <CTAButton isActive={"true"} path={"/signup"}>{"Start Teaching Today"} <IoIosArrowRoundForward className="text-2xl font-semibold"/> </CTAButton>
        </div>
        </div>
        <div className="flex justify-center item-center flex-col">
          <p className="text-richblack-5 text-4xl font-semibold mx-auto">Reviews from other learners</p>
          <div className="my-10">
            <RevieBox/>
          </div>
        </div>
        {/* FOOTER SECTION */}
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;

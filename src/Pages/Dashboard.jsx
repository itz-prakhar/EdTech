import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Common/SideBar";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  // console.log("token tooken",token)
  return (
    <div className="flex w-full h-[90vh] flex-col md:flex-row bg-richblack-900">
    {/* Left NavBar */}
    <div><SideBar/></div>
    <div className="flex-1 overflow-y-scroll"><Outlet/></div>
    </div>
  );
};

export default Dashboard;

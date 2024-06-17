import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../Data/navbar-links";
import { NavLink } from "react-router-dom";
import "../../index.css";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-richblack-900 border-b-[1px] border-richblack-600 w-full py-2">
      <img className="w-[10rem]" src={Logo}></img>
      <div className="flex gap-5 text-richblack-25">
        {NavbarLinks.map((data, index) =>
          data.title == "Catalog" ? (
            <div></div> //DropDown ADd krna hai
          ) : (
            <NavLink activeclassName="active" to={data.path}>
              <p className="">{data.title}</p>
            </NavLink>
          )
        )}
      </div>
      <div className="flex gap-3">
        <NavLink to="/login">
          <button className="bg-richblack-800 px-3 py-2 border-[1px] border-richblack-600 rounded-md text-richblack-100 hover:bg-richblack-700 hover:text-white hover:scale-95 transition-all duration-300">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-richblack-800 px-3 py-2 border-[1px] border-richblack-600 rounded-md text-richblack-100 hover:bg-richblack-700 hover:text-white hover:scale-95 transition-all duration-300">
            Sign up
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

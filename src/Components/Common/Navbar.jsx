import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../Data/navbar-links";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import fetchData from "../../services/apiConnector";
import { categories } from "../../services/APIs";

const Navbar = () => {
  const [subLinks, setSubLinks] = useState([]);
  const fetchCategories = async () => {
    try {
      const data = await fetchData("GET", categories.CATEGORIES_API);
      setSubLinks(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  console.log("subLinks", subLinks);

  return (
    <div className="flex h-[10vh] justify-around items-center bg-richblack-900 border-b-[1px] border-richblack-600 w-full py-2">
      <img className="w-[10rem]" src={Logo}></img>
      <div className="flex gap-5 text-richblack-25">
        {NavbarLinks.map((data, index) =>
          data.title == "Catalog" ? (
            <>
              <div className="group relative" key={index}>
              {
                subLinks.length>0?(<p className="flex items-center gap-1 pr-3">
                  {data.title} 
                  <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 group-hover:scale-0" />
                  <IoIosArrowUp className="absolute right-[-0.6rem] text-lg font-bold scale-0 group-hover:scale-100 " />
                </p>):(<p className="flex items-center gap-1 pr-3">
                  {data.title} 
                  <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 " />
                </p>)
              }
                

                {/* Dropdown Menu */}
               {
                subLinks.length>0 && <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-800 text-xlx  opacity-0 transition-all duration-300 group-hover:visible  group-hover:translate-y-[1.65em] lg:text-lg group-hover:opacity-100 lg:w-[280px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                       
                  {subLinks.map((link, index) => (
                    <NavLink key={index}to={`/catalog/${link.name.split(" ").join("-").toLowerCase()}`} >
                      <p className="text-richblack-900 hover:bg-richblack-50 p-2 rounded-md">
                        {link.name}
                      </p>
                    </NavLink>
                  ))}
                </div>
               }
                
              </div>
            </>
          ) : (
            <NavLink key={index} activeClassName="active" to={data.path}>
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

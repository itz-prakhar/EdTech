import React from "react";
import { NavLink } from "react-router-dom";

const CTAButton = ({ children, isActive, path }) => {
  return (
    <div>
      <NavLink to={path}>
        <button
          className={` px-3 py-2 font-semibold transition-all duration-300 hover:scale-95 rounded-md ${
            isActive
              ? "text-richblack-900 bg-yellow-50 hover:bg-yellow-100 "
              : "text-richblack-50 bg-richblack-800 shadow-right-bottom shadow-richblack-100 hover:text-white"
          }`}
        >
          {children}
        </button>
      </NavLink>
    </div>
  );
};

export default CTAButton;

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-[50%] min-w-min flex flex-row justify-around content-center items-center text-[1.25rem] text-[#bcb8b1]">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black transition duration-300"
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black transition duration-300"
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black transition duration-300"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;

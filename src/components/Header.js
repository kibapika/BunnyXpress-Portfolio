import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[15%] min-h-[15%] flex flex-row justify-around content-center items-center">
      <h1 className="text-[2.35rem] min-w-min">
        <NavLink to="/home">BunnyXpress</NavLink>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
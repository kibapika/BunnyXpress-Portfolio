import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen flex flex-row justify-around content-center">
      <h1 className="text-[3.25rem] min-w-min">
        <NavLink to="/home">BunnyXpress</NavLink>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
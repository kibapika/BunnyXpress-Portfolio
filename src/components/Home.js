import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mochiBunny from "./img/mochiBunny.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="w-[100dvw] flex flex-col-reverse items-center sm:justify-evenly sm:flex-row-reverse">
      <section className="w-[75%] flex flex-col items-center sm:items-start sm:w-[40%]">
        <h1 className="text-[1.7rem]">Welcome to</h1>
        <h1 className="text-[2.3rem] font-bold sm:text-[3.2rem] sm:py-2">BunnyXpress</h1>
        <p className="text-[1.05rem] py-2 pb-4 text-center sm:text-left">
          You will find various artwork and merchandise that I have created.
        </p>
        <div className="homeBtn">
          <NavLink to="/about">Read More</NavLink>
          <FaArrowRight />
        </div>
      </section>
      <button
        className="pb-8 w-[85%] sm:pb-0 sm:w-[35%]"
        onClick={() => setToggler(!toggler)}
      >
        <img className="rounded-xl" alt="mochiBunny" src={mochiBunny} />{" "}
      </button>
      <FsLightbox toggler={toggler} sources={[mochiBunny]} />
    </div>
  );
};
export default Home;

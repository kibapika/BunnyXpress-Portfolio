import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mochiBunny from "./img/mochiBunny.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex flex-row-reverse justify-evenly items-center">
      <section className="w-[40%]">
        <h1 className="text-[1.7rem]">Welcome to</h1>
        <h1 className="text-[3.2rem] font-bold py-3">BunnyXpress</h1>
        <p className="text-[1.05rem] pb-4">
          You will find various artwork and merchandise that I have created.
        </p>
        <div className="aboutBtn">
          <NavLink to="/about">Read More</NavLink>
          <FaArrowRight />
        </div>
      </section>
      <button
        className="w-[40%] max-w-2xl m-4"
        onClick={() => setToggler(!toggler)}
      >
        <img className="rounded-xl" alt="mochiBunny" src={mochiBunny} />{" "}
      </button>
      <FsLightbox toggler={toggler} sources={[mochiBunny]} />
    </div>
  );
};
export default Home;

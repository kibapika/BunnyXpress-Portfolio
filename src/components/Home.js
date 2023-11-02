import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mochiBunny from "./img/mochiBunny.png";

const Home = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex flex-row-reverse justify-evenly items-center">
      <section className="w-[40%]">
        <h1 className="text-[2rem]">Welcome to</h1>
        <h1 className="text-[3.3rem] font-bold py-3">BunnyXpress</h1>
        <p className="text-[1.2rem]">
          You will find various artwork and merchandise that I have created.
        </p>
      </section>
      <button className="w-[40%] max-w-2xl m-4" onClick={() => setToggler(!toggler)}>
        <img className="rounded-xl" alt="mochiBunny" src={mochiBunny} />{" "}
      </button>
      <FsLightbox toggler={toggler} sources={[mochiBunny]} />
    </div>
  );
};
export default Home;

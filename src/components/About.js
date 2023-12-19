import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import lemonTea from "./img/lemonTea.png";
import { NavLink } from "react-router-dom";

const About = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex flex-row justify-evenly items-center">
      <section className="w-[40%]">
        <h1 className="pb-6 text-center text-[1.8rem] font-extrabold">
          Meet The Artist - Eva
        </h1>
        <p>
          Hello! My name is Eva (BunnyXpress) and I am a new artist based in New
          York! I have always had a passion for drawing, and decided to showcase
          my art with inspiration from my childhood~
          <br />
          <br />
          I grew up watching anime, drinking vita lemon tea, and playing Pokémon
          Sapphire on my Gameboy Advance. These are just some of the few things
          that inspired my art.
          <br />
          <br />
          In the summer of 2023 I decided to take a leap of faith and open my
          very first Etsy shop! I hope the little joys from my life can also
          brighten a little bit of your day~
        </p>
        <div className="w-[14.5rem] pt-6 flex flex-row justify-between">
          <button to="/contact" className="aboutBtn">
            <NavLink to="/contact">Contact</NavLink>
          </button>
          <button className="aboutBtn">
            <a 
            href="https://www.etsy.com/shop/BunnyXpress?ref=profile_header"
            rel="noreferrer"
            target="_blank"
            >
              Etsy
            </a>
          </button>
        </div>
      </section>
      <button
        className="w-[30%] flex justify-center items-center"
        onClick={() => setToggler(!toggler)}
      >
        <img className="max-h-full" alt="lemonTea" src={lemonTea} />{" "}
      </button>
      <FsLightbox toggler={toggler} sources={[lemonTea]} />
    </div>
  );
};

export default About;

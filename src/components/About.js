import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mochiBunny from "./img/mochiBunny.png";

const About = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex flex-row">
      <section>
        <h1>Meet The Artist - Eva</h1>
        <p>
          Hello! My name is Eva (BunnyXpress) and I am a new artist based in New
          York! I have always had a passion for drawing, and decided to showcase
          my art with inspiration from my childhood~
          <br />
          I grew up watching anime, drinking vita lemon tea, and playing Pokémon
          Sapphire on my Gameboy Advance. These are just some of the few things
          that inspired my art.
          <br />
          In the summer of 2023 I decided to take a leap of faith and open my
          very first Etsy shop! I hope the little joys from my life can also
          brighten a little bit of your day~
        </p>
        <div>
          <button>Contact</button>
          <button>Etsy</button>
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

export default About;

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { printsDB, bookmarksDB, stickersDB } from "./DB";

const Portfolio = () => {
  const [toggler, setToggler] = useState(false);
  const [pic, setPic] = useState();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[1.8rem] py-2">Portfolio</h1>
      <section className="w-[78%] pb-3">
        <h1 className="text-[1.4rem] pb-3">Prints</h1>
        <div className="grid grid-cols-3 gap-4 place-items-center backdrop-grayscale hover:backdrop-grayscale-0">
          {printsDB.map((img) => (
            <button
              className="w-[65%] relative"
              onClick={() => setToggler(!toggler) & setPic([img.img])}
              key={img.id}
            >
              <img alt="printsDB" src={img.img} key={img.id} />
              <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 backdrop-invert-[50%] backdrop-opacity-60 flex justify-center items-center text-[1.1rem] text-white font-black">
                {img.name}
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="w-[78%] pb-3">
        <h1 className="text-[1.4rem] pb-3">Bookmarks</h1>
        <div className="grid grid-cols-3 gap-4 place-items-center backdrop-grayscale hover:backdrop-grayscale-0">
          {bookmarksDB.map((img) => (
            <button
              className="w-[65%] relative"
              onClick={() => setToggler(!toggler) & setPic([img.img])}
              key={img.id}
            >
              <img alt="bookmarksDB" src={img.img} key={img.id} />
              <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 backdrop-invert-[50%] backdrop-opacity-60 flex justify-center items-center text-[1.1rem] text-white font-black">
                {img.name}
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="w-[78%] pb-3">
        <h1 className="text-[1.4rem] pb-3">Stickers</h1>
        <div className="grid grid-cols-3 gap-4 place-items-center backdrop-grayscale hover:backdrop-grayscale-0">
          {stickersDB.map((img) => (
            <button
              className="w-[65%] relative"
              onClick={() => setToggler(!toggler) & setPic([img.img])}
              key={img.id}
            >
              <img alt="stickersDB" src={img.img} key={img.id} />
              <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 backdrop-invert-[50%] backdrop-opacity-60 flex justify-center items-center text-[1.1rem] text-white font-black">
                {img.name}
              </span>
            </button>
          ))}
        </div>
      </section>
      <FsLightbox toggler={toggler} sources={pic} />
    </div>
  );
};

export default Portfolio;

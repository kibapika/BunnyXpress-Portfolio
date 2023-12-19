import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { printsDB, bookmarksDB, stickersDB } from "./DB";

const Portfolio = () => {
  const [toggler, setToggler] = useState(false);
  const [pic, setPic] = useState();


  return (
    <div className="flex flex-col items-center">
      <h1>Portfolio</h1>
      <section className="w-[90%]">
        <h1>Prints</h1>
        <div className="grid grid-cols-3 gap-2 place-items-center">
          {printsDB.map((img) => (
              <button
                className="w-[55%]"
                onClick={() => setToggler(!toggler) & setPic([img.img])}
                key={img.id}
              >
                <img
                  alt="printImg"
                  src={img.img}
                  key={img.id}
                />
                <span>{img.name}</span>
              </button>
          ))}
        </div>
      </section>
      <section className="w-[90%]">
        <h1>Bookmarks</h1>
        <div className="grid grid-cols-3 gap-2 place-items-center">
          {bookmarksDB.map((img) => (
              <button
                className="w-[55%]"
                onClick={() => setToggler(!toggler) & setPic([img.img])}
                key={img.id}
              >
                <img
                  alt="printImg"
                  src={img.img}
                  key={img.id}
                />
                <span>{img.name}</span>
              </button>
          ))}
        </div>
      </section>
      <section className="w-[90%]">
        <h1>Stickers</h1>
        <div className="grid grid-cols-3 gap-2 place-items-center">
          {stickersDB.map((img) => (
              <button
                className="w-[55%]"
                onClick={() => setToggler(!toggler) & setPic([img.img])}
                key={img.id}
              >
                <img
                  alt="printImg"
                  src={img.img}
                  key={img.id}
                />
                <span>{img.name}</span>
              </button>
          ))}
        </div>
      </section>
      <FsLightbox toggler={toggler} sources={pic} />
    </div>
  );
};

export default Portfolio;

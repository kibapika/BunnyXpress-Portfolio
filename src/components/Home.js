import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mochiBunny from "./img/mochiBunny.png";

const Home = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <h1>Welcome to BunnyXpress</h1>
      <button onClick={() => setToggler(!toggler)}>
        <img
          className="w-[40%] rounded-xl m-4"
          alt="mochiBunny"
          src={mochiBunny}
        />{" "}
      </button>
      <FsLightbox toggler={toggler} sources={[mochiBunny]} />
    </div>
  );
};
export default Home;

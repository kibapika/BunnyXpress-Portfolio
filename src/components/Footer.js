import React from "react";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { FaEtsy } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[9%] min-h-[9%] flex flex-row justify-around sm:justify-between content-center items-center text-[#b1a7a6] sm:mx-24 ">
      <a
        href="https://github.com/kibapika/BunnyXpress-Portfolio"
        rel="noreferrer"
        target="_blank"
        className="hover:text-black transition duration-300"
      >
        Designed & Built by Eva Li - Github
      </a>
      <section className="sm:w-[11%] flex flex-row justify-between text-[1.2rem]">
        <a
          href="https://www.instagram.com/bunny_xpress/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-black transition duration-300"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@bunnyxpressstickers"
          rel="noreferrer"
          target="_blank"
          className="pl-4 pr-3 sm:p-0 hover:text-black transition duration-300"
        >
          <BsTiktok />
        </a>
        <a
          href="https://www.etsy.com/shop/BunnyXpress?ref=profile_header"
          rel="noreferrer"
          target="_blank"
          className="hover:text-black transition duration-300"
        >
          <FaEtsy />
        </a>
      </section>
    </div>
  );
};

export default Footer;

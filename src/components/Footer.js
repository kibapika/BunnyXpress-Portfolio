import React from "react";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { FaEtsy } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[5rem] flex flex-row justify-between content-center items-center mx-24 text-[1.15rem]">
      <a href="https://github.com/kibapika/BunnyXpress-Portfolio">
        Designed & Built by Eva Li - Github
      </a>
      <section 
      className="w-1/12 flex flex-row justify-between">
        <a href="https://www.instagram.com/bunny_xpress/">
          <BsInstagram />
        </a>
        <a href="https://www.tiktok.com/@bunnyxpressstickers">
          <BsTiktok />
        </a>
        <a href="https://www.etsy.com/shop/BunnyXpress?ref=profile_header">
          <FaEtsy />
        </a>
      </section>
    </div>
  );
};

export default Footer;

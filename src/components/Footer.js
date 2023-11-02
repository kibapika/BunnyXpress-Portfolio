import React from "react";
import {BsInstagram, BsTiktok} from "react-icons/bs";
import {FaEtsy} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/kibapika/BunnyXpress-Portfolio">
        Designed & Built by Eva Li - Github
      </a>
      <div>
        <a href="https://www.instagram.com/bunny_xpress/">
            <BsInstagram />
        </a>
        <a href="https://www.tiktok.com/@bunnyxpressstickers">
            <BsTiktok />
        </a>
        <a href="https://www.etsy.com/shop/BunnyXpress?ref=profile_header">
            <FaEtsy />
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Contact = () => {
  return (
    <div className="h-[35vh] sm:h-[100%] w-[100dvw] flex flex-col justify-around items-center">
      <h1 className="text-[2.3rem] sm:pb-4">Contact</h1>
      <p className="text-[1.4rem] w-[75%] text-center sm:text-[1.2rem]">
        If you have any question regarding business inquires and any other
        questions, feel free to contact me!
      </p>
      <address className="text-[1.35rem] sm:pt-4 sm:text-[1.1rem] hover:text-[#eb5e28] transition duration-75">
        <a href="mailto:bunnyxpressstickers@gmail.com">
          bunnyxpressstickers@gmail.com
        </a>
      </address>
    </div>
  );
};

export default Contact;

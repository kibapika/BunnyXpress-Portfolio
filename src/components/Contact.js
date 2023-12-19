import React from "react";

const Contact = () => {
  return (
    <div className="h-full w-[50%] flex flex-col justify-center items-center">
      <h1 className="text-[2.3rem] pb-4">Contact</h1>
      <p className="text-center text-[1.2rem]">
        If you have any question regarding business inquires and any other
        questions, feel free to contact me!
      </p>
      <address className="pt-4 text-[1.1rem] hover:text-[#eb5e28] transition duration-75">
        <a href="mailto:bunnyxpressstickers@gmail.com">
          bunnyxpressstickers@gmail.com
        </a>
      </address>
    </div>
  );
};

export default Contact;

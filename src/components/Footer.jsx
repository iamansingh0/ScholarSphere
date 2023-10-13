import React from "react";
import { love } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#171717] w-[100vw] absolute bottom-0 h-[25vh] flex flex-col items-center pt-6 text-white">
      <h1 className="text-lg font-semibold">ScholarSphere</h1>
      <div className="links flex border-4 gap-4">
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
      <button>About Us</button>
      <div className="mb-4">
      Made with &nbsp;
      <img
        src={love}
        alt="Love"
        className="inline h-4 w-4 object-contain mt-[-4px]"
      />
      &nbsp; by TechMinds
    </div>
    </div>
  );
};

export { Footer };

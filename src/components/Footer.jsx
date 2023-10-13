import React, { useState } from "react";
import { love } from "../assets";
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {BiLogoInstagramAlt} from "react-icons/bi"

const Footer = () => {
  return (
    <div className="bg-[#171717] w-[100vw] absolute bottom-0 h-[25vh] flex flex-col items-center pt-3.5 text-white">
      <h1 className="text-lg font-semibold">ScholarSphere</h1>
      <div className="links flex gap-4 p-2.5">
        <a href="https://github.com/iamansingh0" target="_blank"><BsGithub size={25}/></a>
        <a href="https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/" target="_blank"><BsLinkedin size={25}/></a>
        <a href="https://www.instagram.com/iaman._1/" target="_blank"><BiLogoInstagramAlt size={25}/></a>
      </div>
      <div className="mb-4">
      Made with &nbsp;
      <img
        src={love}
        alt="Love"
        className="inline h-4 w-4 object-contain mt-[-4px]"
      />
      &nbsp; by Aman&Japmann
    </div>
    </div>
  );
};

export { Footer };

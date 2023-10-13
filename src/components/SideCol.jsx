import React from "react";
import {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
} from "../assets";

const SideCol = ({ side }) => {
  const images = {
    left: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s11, s10, s12],
    right: [s11, s12, s13, s14, s15, s16, s17, s18, s19, s2, s1],
  };

  return (
    <div className="hidden sm:flex flex-col h-full justify-between min-w-fit gap-4 sm:mt-[-30px] mt-[-40px]">
      {images[side].map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt="SideCol Image"
            className={`h-[36px] sm:h-[56px] lg:h-[80px] w-[36px] sm:w-[46px] lg:w-[68px] object-contain ${
              index % 2 == 0 ? "tilt-image" : "tilt-opposite-image"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export { SideCol };

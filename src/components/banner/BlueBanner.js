import React from "react";
import Button from "../button/Button";

const BlueBanner = () => {
  return (
    <div className="">
      <div className="relative">
        <img src="img/banner-blue.png" alt="" />
        <div className="absolute text-white top-5 left-5 lg:top-1/3 lg:left-[150px] w-[150px] lg:w-[562px]">
          <h1 className="uppercase text-[10px] lg:text-[50px] mb-3 font-extrabold">
            What Happened!
          </h1>
          <p className="text-[5px] lg:text-xl lg:w-[667px] font-thin">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create
          </p>
          <p className="text-[5px] lg:text-xl lg:w-[667px] font-thin">
            mobile-optimized videos in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueBanner;

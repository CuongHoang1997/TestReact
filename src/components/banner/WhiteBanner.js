import React from "react";
import Button from "../button/Button";

const WhiteBanner = () => {
  return (
    <div className="relative h-[400px] lg:h-[1600px]">
      <div className="flex flex-col items-center text-center gap-y-2 ">
        <h1 className="uppercase font-bold mt-6 lg:text-[50px] lg:mt-[120px] lg:mb-[30px]">
          what happened
        </h1>
        <p className="text-[5px] w-[170px] lg:text-[20px] lg:w-[670px]">
          How to create mobile-optimized videos in minutes. Not a designer,
        </p>
        <p className="text-[5px] w-[170px] mb-2 lg:text-[20px] lg:w-[665px]">
          every team makes a lot of videos Can be trimmed. Take the first
        </p>

        <Button className="text-[6px] w-14 lg:w-[200px] lg:h-[60px] lg:mt-[53px] lg:mb-[72px]"></Button>
        <img
          src="img/video.png"
          alt=""
          className="px-14 mt-2 z-20 lg:w-[1251px] lg:h-[823px] "
        />
      </div>
      <img
        src="img/video-object-01.png"
        alt=""
        className="w-20 h-10 absolute bottom-5 left-[60px] z-10 lg:w-[411px] lg:h-[204px] lg:bottom-0 lg:left-[400px]"
      />
      <img
        src="img/video-object-02.png"
        alt=""
        className="w-5 h-5 absolute bottom-10 right-[100px] lg:w-[90px] lg:h-[83px] lg:bottom-[120px] lg:right-[695px]"
      />
      <img
        src="img/video-object-03.png"
        alt=""
        className="w-10 h-10 absolute bottom-[50px] left-6 lg:w-[146px] lg:h-[146px] lg:bottom-[150px] lg:left-[280px]"
      />
      <img
        src="img/video-object-04.png"
        alt=""
        className="w-[110px] h-[100px] absolute top-20 -left-16 lg:w-[300px] lg:h-[471px] lg:top-[300px] lg:-left-[150px]"
      />
      <img
        src="img/video-object-05.png"
        alt=""
        className="w-10 h-8 absolute top-0 left-10 lg:w-[146px] lg:h-[114px]  lg:left-[226px]"
      />
      <img
        src="img/video-object-06.png"
        alt=""
        className="w-10 h-10 absolute top-16 right-10 z-10 lg:w-[130px] lg:h-[130px] lg:top-[300px] lg:right-[250px]"
      />
      <img
        src="img/video-object-07.png"
        alt=""
        className="w-10 h-10 absolute top-8 right-5 lg:w-[146px] lg:h-[146px] lg:top-[200px] lg:right-[150px] "
      />
      <img
        src="img/video-object-08.png"
        alt=""
        className="w-[90px] h-20 absolute bottom-20 -right-8 z-10 lg:w-[600px] lg:h-[474px] lg:bottom-[120px] lg:-right-[140px] "
      />
      <img
        src="img/video-object-09.png"
        alt=""
        className="w-[90px] h-20 absolute bottom-[140px] -right-12 lg:w-[315px] lg:h-[315px] lg:top-[770px] lg:-right-[150px] "
      />
    </div>
  );
};

export default WhiteBanner;

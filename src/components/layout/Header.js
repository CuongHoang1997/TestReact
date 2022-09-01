import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState("");

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);
  console.log(windowSize);

  const handleMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <div
      className={`header w-full h-10 lg:h-20 bg-black flex justify-between items-center font-Montserrat lg:px-20 }`}
    >
      <img
        src="img/logo.png"
        alt=""
        className="w-[100px] h-3 my-auto ml-5 lg:w-[226px] lg:h-[26px]"
      />
      <div className=" relative">
        {!showMenu && isMobile ? (
          <AiOutlineMenu
            onClick={handleMenu}
            className="text-white text-2xl mr-5"
          ></AiOutlineMenu>
        ) : showMenu && isMobile ? (
          <div className="">
            <AiOutlineClose
              onClick={handleMenu}
              className="text-white text-2xl mr-5 "
            ></AiOutlineClose>
            <div className="absolute z-10 right-0 top-8 w-[200px] bg-white shadow">
              <p className="p-3 bg-gray-50 text-[14px]">INTRODUCTION</p>
              <p className="p-3 bg-gray-50 text-[14px]">SOLUTION</p>
              <p className="p-3 bg-gray-50 text-[14px]">RATEPALN</p>
              <p className="p-3 bg-gray-50 text-[14px]">LOGIN</p>
              <p className="p-3 bg-gray-50 text-[14px]">APPLY FOR FREE USE</p>
            </div>
          </div>
        ) : (
          <div className="flex text-white gap-x-20 cursor-pointer">
            <p>INTRODUCTION</p>
            <p>SOLUTION</p>
            <p>RATEPALN</p>
            <p className="w-[1px] h-[23px] bg-white"></p>
            <p>LOGIN</p>
            <p>APPLY FOR FREE USE</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

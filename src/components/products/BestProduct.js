import React from "react";

const BestProduct = ({ img, number }) => {
  return (
    <div className="relative w-[110px] h-[100px] lg:w-[523px] lg:h-[514px] ">
      <img src={img} alt="" className="" />
      <div className="absolute -top-[10px] lg:-top-10 ">
        <img
          src="img/stick.png"
          alt=""
          className="object-contain w-5 h-5 lg:w-[92px] lg:h-[92px]"
        />

        <p className="absolute top-[5px] left-[6px] text-[6px] font-extrabold underline lg:top-5 lg:left-7 lg:text-[30px] ">
          {number}
        </p>
        <div
          className="sticker absolute -bottom-[108px] left-[14px] w-20 h-5 lg:w-[369px] lg:h-[79px]
         bg-white border border-black flex items-center px-1 lg:-bottom-[500px] lg:left-20 lg:justify-around"
        >
          <p className="text-[5px] font-extrabold lg:w-[188px] lg:text-xl">
            How to create mobile-optimized
          </p>
          <img
            src="img/go-icon.png"
            alt=""
            className="w-4 h-4 lg:w-[65px] lg:h-[66px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BestProduct;

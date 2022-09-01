import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Product = ({ img }) => {
  return (
    <div className="flex flex-col ">
      <img src={img} alt="" className="h-[70px] lg:h-[300px]" />
      <p className="text-[4px] mt-1 font-semibold lg:text-[18px]">
        [What happen] How to create
      </p>
      <div className="flex items-center justify-between mt-1 ">
        <p className="text-[4px] lg:text-[16px]">2500 won</p>
        <div className="flex items-center">
          <AiFillHeart className="w-1 h-1 text-primary lg:w-[19px] lg:h-[16px]"></AiFillHeart>
          <p className="text-[4px] lg:text-[16px]">236</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

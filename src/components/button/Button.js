import React from "react";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`${className} text-[10px] border border-black font-extrabold px-2 py-1 shadow shadow-black lg:text-[23px]`}
    >
      SEE MORE
    </button>
  );
};

export default Button;

import React from "react";

const Tag = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-6 text-white text-[10px] font-extrabold flex items-center justify-center lg:text-[30px] lg:h-[75px] lg:py-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Tag;

import React from "react";
import Button from "../button/Button";
import Tag from "../tag/Tag";

const YellowBanner = () => {
  return (
    <div className="bg-yellow h-[260px] relative lg:h-[1143px]">
      <div className="flex flex-col items-center text-center gap-y-2 lg:gap-y-8 ">
        <h1 className="uppercase font-bold mt-8 lg:text-[45px] lg:mt-[158px] ">
          Happened’s issue
        </h1>
        <p className="text-[4px] w-[170px] font-Notosans mb-2 lg:text-[16px] lg:w-[682px]">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <Button className="text-[6px] w-14 lg:w-[200px] lg:h-[60px]"></Button>
        <div className="grid grid-cols-5 mt-3 lg:mt-[100px] border border-solid">
          <div className="bg-primary w-full h-[110px] flex flex-col items-center border border-black justify-center lg:gap-y-10 lg:h-[480px]">
            <h1 className="uppercase font-extrabold lg:text-[55px] lg:w-[189px]">
              whpn issue
            </h1>
            <img
              src="img/news-img-01.png"
              alt=""
              className="w-10 h-10 lg:w-[148px] lg:h-[148px] "
            />
          </div>
          <div className=" w-full h-[110px] flex flex-col items-center border border-black ">
            <Tag className="bg-black ">B BRAND</Tag>
            <img src="img/news-img-05.png" alt="" className="flex-1" />
          </div>
          <div className=" w-full h-[110px] flex flex-col items-center border border-black">
            <Tag className="bg-black">C BRAND</Tag>
            <img src="img/news-img-03.png" alt="" className="flex-1" />
          </div>
          <div className="w-full h-[110px] flex flex-col items-center border border-black">
            <Tag className="bg-primary">D BRAND</Tag>
            <img src="img/news-img-04.png" alt="" className="flex-1" />
          </div>
          <div className=" w-full h-[110px] flex flex-col items-center border border-black">
            <Tag className="bg-black">E BRAND</Tag>
            <img src="img/news-img-05.png" alt="" className="flex-1" />
          </div>
        </div>
      </div>
      <img
        src="img/news-object-02.png"
        alt=""
        className="absolute top-10 right-5 w-8 h-8 lg:w-[119px] lg:h-[111px] lg:top-[163px] lg:right-[68px] "
      />
      <img
        src="img/news-object-03.png"
        alt=""
        className="absolute top-2 right-5 w-7 h-7 lg:w-[95px] lg:h-[95px] lg:top-[43px] lg:right-[70px]"
      />
      <img
        src="img/news-object-00.png"
        alt=""
        className="absolute bottom-2 left-[50px] w-7 h-7 lg:w-[167px] lg:h-[169px] lg:bottom-[57px] lg:left-[230px]"
      />
      <img
        src="img/news-object-05.png"
        alt=""
        className="absolute bottom-2 right-16 w-8 h-7 lg:w-[133px] lg:h-[100px] lg:bottom-[85px] lg:right-[353px]"
      />
      <img
        src="img/news-object-04.png"
        alt=""
        className="absolute top-[125px] left-20 w-6 h-4 lg:w-[111px] lg:h-[59px] lg:top-[498px] lg:left-[411px]"
      />
    </div>
  );
};

export default YellowBanner;

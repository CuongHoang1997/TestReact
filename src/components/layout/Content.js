import React from "react";
import BlueBanner from "../banner/BlueBanner";
import WhiteBanner from "../banner/WhiteBanner";
import YellowBanner from "../banner/YellowBanner";
import Button from "../button/Button";
import BestProduct from "../products/BestProduct";
import Product from "../products/Product";
import Footer from "./Footer";

const Content = () => {
  const i = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
  ];
  return (
    <div className=" font-Montserrat">
      <img src="img/banner.png" alt="" className="w-full" />
      <BlueBanner></BlueBanner>
      <div className="relative">
        <img src="img/banner-yellow.png" alt="" />
        <div className="flex flex-col items-center">
          <div className="absolute top-3 left-0 right-0 flex flex-col items-center text-center text-[10px]">
            <h1 className="uppercase  text-primary font-extrabold lg:text-[50px] lg:mt-[120px]">
              Best Product
            </h1>
            <p className=" text-primary text-[7px] lg:text-xl w-[250px] lg:w-[670px]">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first{" "}
            </p>
          </div>
          <div className="flex absolute top-[72px] best-product-lg">
            <BestProduct img="img/best1.png" number="01"></BestProduct>
            <BestProduct img="img/best2.png" number="02"></BestProduct>
            <BestProduct img="img/best3.png" number="03"></BestProduct>
          </div>
          <div className="grid grid-cols-5 px-5 mt-5 gap-x-1 gap-y-4 lg:gap-x-10  lg:gap-y-20 lg:mt-[100px]">
            {i &&
              i.map((item, index) => (
                <Product key={index} img={`img/img-${item}.png`}></Product>
              ))}
          </div>
          <Button className="mt-5 lg:w-[199px] lg:h-[60px] lg:my-20"></Button>
        </div>
        <div className="bg-blue h-[200px] lg:h-[956px] mt-5 relative flex flex-col items-center">
          <div className="flex flex-col items-center text-center ">
            <h1 className="uppercase  text-yellow mt-3 font-extrabold lg:text-[45px] lg:mt-[149px]">
              Brand Story
            </h1>
            <p className=" text-yellow text-[4px] lg:text-[16px] w-[170px] lg:w-[682px] font-Notosans lg:mt-5">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <img
              src="img/object-01.png"
              alt=""
              className="w-10 h-12 absolute top-8 left-6 lg:w-[183px] lg:h-[208px] lg:top-[183px] lg:left-[169px]"
            />
            <img
              src="img/object-02.png"
              alt=""
              className="w-6 h-6 absolute top-5 right-10 lg:w-[147px] lg:h-[134px] lg:top-[61px] lg:right-[256px]"
            />
            <img
              src="img/object-03.png"
              alt=""
              className="w-6 h-8 absolute top-10 right-8 lg:w-[147px] lg:h-[165px] lg:top-[114px] lg:right-[171px]"
            />

            <img
              src="img/object-06.png"
              alt=""
              className="w-10 h-16 absolute bottom-11 left-0 lg:w-[192px] lg:h-[338px] lg:bottom-[203px] lg:left-0"
            />
            <img
              src="img/object-07.png"
              alt=""
              className="w-6 h-12 absolute bottom-11 left-10 lg:w-[180px] lg:h-[255px] lg:bottom-[204px] lg:left-[190px]"
            />
            <img
              src="img/img.png"
              alt=""
              className="w-[140px] h-[90px] absolute bottom-10 left-[60px] border-black border-t-4 lg:w-[612px] lg:h-[418px] lg:bottom-[170px] lg:left-[333px] lg:border-solid lg:border-t-[16px]"
            />
            <img
              src="img/object-04.png"
              alt=""
              className="w-10 h-20 absolute bottom-16 -right-3 lg:w-[197px] lg:h-[457px] lg:top-[190px] lg:left-[1723px] "
            />
            <img
              src="img/object-05.png"
              alt=""
              className="w-16 h-10 absolute bottom-11 -right-1 lg:w-[350px] lg:h-[233px] lg:bottom-[186px] lg:left-[1570px]"
            />
            <div
              className="h-[90px] w-[140px] bg-white border border-t-4 border-black absolute bottom-10 
            right-[60px] flex flex-col justify-center lg:gap-y-10 lg:px-[68px] gap-y-1 text-start px-2 lg:w-[644px] lg:h-[418px] lg:bottom-[170px] lg:right-[334px] lg:border-4 lg:border-solid lg:border-t-[16px]"
            >
              <h1 className="uppercase font-extrabold text-[6px] lg:text-[25px]">
                What Happened’s Brand story
              </h1>
              <p className="font-Notosans text-[4px] w-[110px] lg:text-[16px] lg:w-[528px]">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </p>
              <Button className="text-[5px] w-12 lg:w-[200px] lg:h-[60px]"></Button>
            </div>
          </div>
        </div>
        <YellowBanner></YellowBanner>
        <WhiteBanner></WhiteBanner>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;

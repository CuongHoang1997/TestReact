import React from "react";
import Button from "../button/Button";
import BestProduct from "../products/BestProduct";
import Product from "../products/Product";
import Tag from "../tag/Tag";
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
      <img src="img/banner.png" alt="" />
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
            <h1 className="uppercase  text-yellow font-extrabold lg:text-[45px] lg:mt-[149px]">
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
        <div className="bg-yellow h-[260px] relative lg:h-[1143px]">
          <div className="flex flex-col items-center text-center gap-y-2 lg:gap-y-8 ">
            <h1 className="uppercase font-bold mt-8 lg:text-[45px] lg:mt-[158px] ">
              Happened’s issue
            </h1>
            <p className="text-[4px] w-[170px] font-Notosans mb-2 lg:text-[16px] lg:w-[682px]">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
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
            className="w-20 h-10 absolute bottom-10 left-[60px] z-10 lg:w-[411px] lg:h-[204px] lg:bottom-0 lg:left-[400px]"
          />
          <img
            src="img/video-object-02.png"
            alt=""
            className="w-5 h-5 absolute bottom-14 right-[100px] lg:w-[90px] lg:h-[83px] lg:bottom-[120px] lg:right-[695px]"
          />
          <img
            src="img/video-object-03.png"
            alt=""
            className="w-10 h-10 absolute bottom-[70px] left-6 lg:w-[146px] lg:h-[146px] lg:bottom-[150px] lg:left-[280px]"
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;

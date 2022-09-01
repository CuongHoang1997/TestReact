import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col px-10 font-Notosans mt-10 lg:mx-[101px] lg:mt-20">
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col gap-y-1 items-center lg:items-start lg:mx-1 mb-10">
          <h1 className="heading-footer">what happened</h1>
          <div className=" font-Notosans text-[10px] mt-5 lg:text-[14px] flex flex-col gap-y-3 ">
            <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
            <p>[공지] 29CM 강남 스토어 영업 종료</p>
            <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
            <p>[공지] iOS 10 이하 버전 지원 중단 안내 </p>
            <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
          </div>
        </div>
        <div className="lg:flex lg:gap-x-10">
          <div className="flex gap-y-1 mt-5 justify-center gap-x-20">
            <div className="flex flex-col  ">
              <h1 className="heading-footer">about us</h1>
              <div className="font-Notosans text-[10px] mt-5 lg:text-[14px] flex flex-col gap-y-3 ">
                <p>회사 소개 </p>
                <p> 인재 채용 </p>
                <p> 상시 할인 혜택</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="heading-footer">my order</h1>
              <div className="font-Notosans text-[10px] mt-5 lg:text-[14px] flex flex-col gap-y-3 ">
                <p>내 주문</p>
                <p>주문 배송</p> <p>취소 / 교환 / 반품 내역</p>{" "}
                <p>상품 리뷰 내역</p> <p>증빙 서류 발급</p>
              </div>
            </div>
          </div>
          <div className="flex gap-y-1 mt-5 justify-center gap-x-20">
            <div className="flex flex-col ">
              <h1 className="heading-footer">my account</h1>
              <div className="font-Notosans text-[10px] mt-5 lg:text-[14px] flex flex-col gap-y-3 ">
                <p>회원 정보 수정 </p>
                <p> 회원 등급 </p>
                <p> 마일리지 현황 </p>
                <p> 쿠폰</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="heading-footer">help</h1>
              <div className="font-Notosans text-[10px] mt-5 lg:text-[14px] flex flex-col gap-y-3 ">
                <p>1 : 1 상담 내역</p>
                <p>상품 Q & A 내역</p>
                <p>공지 사항</p>
                <p>자주하는 질문</p>
                <p>고객의 소리</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon flex mt-5 justify-center gap-10 lg:justify-end lg:mt-[83px]">
        <img src="img/snsicon-01.png" alt="" className="w-5 h-5" />
        <img src="img/snsicon-02.png" alt="" className="w-5 h-5" />
        <img src="img/snsicon-03.png" alt="" className="w-5 h-5" />
      </div>

      <div className="mt-5 text-greylish text-[10px] lg:mb-20 lg:text-[14px]">
        <p>
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
        </p>
        <p>
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </p>
      </div>
    </div>
  );
};

export default Footer;

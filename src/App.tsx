import React, { useEffect, useRef, useState } from "react";
import { NavermapsProvider } from "react-naver-maps";
import { useInView } from "react-intersection-observer";
import Map from "./layouts/location/Map";

import AOS from "aos";
import "aos/dist/aos.css";

import symbol from "./assets/images/symbol/icons8-flower-bouquet-96.png";
// component
import Main from "./layouts/main/Main";
import GreetingWrap from "./layouts/greeting/Greeting";
import InvittingWrap from "./layouts/invitting/Innvitting";
import MemberWrap from "./layouts/member/MemberWrap";

import styled from "styled-components";
import "./assets/css/App.css";
import GalleryWrap from "./layouts/gallery/GalleryWrap";

//캘린더
import CalendarWrap from "./layouts/calendar/Calendar";
import Title from "./layouts/layer/Title";

// data
import data from "./data.json";
import Vehicle from "./layouts/location/Vehicle";
import EventInFormation from "./layouts/eventInfo/EventInformation";
import Consideration from "./layouts/consideration/Consideration";

function App() {
  // const handleDeepLink = () => {
  //   const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null;
  //   const isAndroid = window.navigator.userAgent.match(/Android/i) !== null;

  //   const { mapInfo } = data;

  //   if (isIos) {
  //     // 기기가 ios 인 경우
  //     window.location.replace(
  //       `nmap://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
  //     );
  //   } else if (isAndroid) {
  //     // 기기가 android 인 경우
  //     window.location.replace("intent://navigation?&appname=com.example.myapp");
  //   } else {
  //     // 그 외(윈도우 데스크탑 등)
  //     window.location.replace(
  //       `nmap://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
  //     );
  //   }
  // };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Wrapper style={{ maxWidth: "390px", height: "280px", margin: "0 auto" }}>
      <Main />
      {/* <button type="button" onClick={() => handleDeepLink()}>
        링크
      </button> */}
      {/* <button
        type="button"
        onClick={() =>
          window.location.replace("https://map.kakao.com/link/to/413941493")
        }
      >
        길찾기(카카오지도)
      </button> */}

      <div
        id="test1"
        style={{
          padding: 24,
          margin: 4,
        }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <GreetingWrap />
      </div>

      <div
        id="test2"
        style={{ padding: 24, margin: 4 }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <InvittingWrap />
      </div>
      <div
        style={{ padding: 24, margin: 4 }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <br />
        <MemberWrap />
      </div>
      <div
        style={{ padding: "24px 48px", margin: 4, backgroundColor: "#f9f9f9" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <Title title="날짜" titleDecoration="day infomation" />
        <hr />
        <br />
        <CalendarWrap />
        <br />
        <hr />
        <br />
      </div>
      <div
        style={{ padding: 24, margin: 4 }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <Title title="갤러리" titleDecoration="Gallery" />
        <GalleryWrap />
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
        id="wrap"
        style={{
          position: "relative",
          maxWidth: "390px",
          margin: "0 auto",
        }}
      >
        <Title title="오시는 길" titleDecoration="location" />
        <NavermapsProvider
          ncpClientId={`${process.env.REACT_APP_NAVER_MAP_API_KEY}`}
        >
          <Map />
        </NavermapsProvider>
        <Vehicle />
      </div>

      <div
        style={{ padding: 24 }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <EventInFormation />
      </div>

      <div
        style={{ padding: 24, margin: 4 }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1400"
        data-aos-once={false}
      >
        <Title title="마음을 전하실 곳" titleDecoration="consideration" />
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <Consideration />
      </div>
      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}></div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  & > div {
    text-align: center;
    line-height: 2rem;
    font-family: "Serif_KR_light";
    font-size: 14px;
  }
`;

const JustifyItem = styled.p`
  margin: 0 auto;
  width: 170px;
  text-align: justify;
  line-height: 12px;
  vertical-align: middle;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
`;

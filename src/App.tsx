import React, { useEffect, useRef, useState } from "react";
import { NavermapsProvider } from "react-naver-maps";
import { useInView } from "react-intersection-observer";
import Map from "./layouts/location/Map";

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
  const [classAdd1, setClassAdd1] = useState(false);
  const [classAdd2, setClassAdd2] = useState(false);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

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
    const observer = new IntersectionObserver(
      (entries: any) => {
        if (entries[0].isIntersecting) {
          setClassAdd1(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref1.current) {
      observer.observe(ref1.current);
    }

    const observer2 = new IntersectionObserver(
      (entries: any) => {
        if (entries[0].isIntersecting) {
          setClassAdd2(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current);
      }
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
    };
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
        ref={ref2}
        className={classAdd2 ? "show" : ""}
        id="test1"
        style={{
          padding: 24,
          margin: 4,
        }}
      >
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <GreetingWrap />
      </div>

      <div id="test2" style={{ padding: 24, margin: 4 }}>
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <InvittingWrap />
      </div>
      <div style={{ padding: 24, margin: 4 }}>
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <br />
        <MemberWrap />
      </div>
      <div
        style={{ padding: "24px 48px", margin: 4, backgroundColor: "#f9f9f9" }}
      >
        <Title title="날짜" titleDecoration="day infomation" />
        <hr />
        <br />
        <CalendarWrap />
        <br />
        <hr />
        <br />
      </div>
      <div style={{ padding: 24, margin: 4 }}>
        <Title title="갤러리" titleDecoration="Gallery" />
        <GalleryWrap />
      </div>
      {/* <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div> */}

      <div
        ref={ref1}
        id="wrap"
        className={classAdd1 ? "show" : ""}
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

      <div style={{ padding: 24 }}>
        {/* asd */}
        <EventInFormation />
      </div>

      <div style={{ padding: 24, margin: 4 }}>
        <Title title="마음을 전하실 곳" titleDecoration="consideration" />
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <Consideration />
      </div>
      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}>
        카카오톡 공유하기
        <br />
        링크 주소 복사
      </div>
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

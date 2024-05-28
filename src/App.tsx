import React, { useEffect, useRef, useState } from "react";
import { NavermapsProvider } from "react-naver-maps";
import { useInView } from "react-intersection-observer";
import Map from "./layouts/location/Map";

import symbol from "./assets/images/symbol/icons8-flower-bouquet-96.png";
// component
import Main from "./layouts/main/Main";
import Layer from "./layouts/layer/Layer";

import styled from "styled-components";
import "./assets/css/App.css";
import GalleryWrap from "./layouts/gallery/GalleryWrap";

//캘린더
import CalendarWrap from "./layouts/calendar/Calendar";
function App() {
  const [classAdd1, setClassAdd1] = useState(false);
  const [classAdd2, setClassAdd2] = useState(false);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

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
        <br />
        두 사람이 꽃과 나무처럼 걸어와서
        <br />
        서로의 모든 것이 되기 위해
        <br />
        오랜 기다림 끝에 혼례식을 치르는 날
        <br />
        세상은 더욱 아름다워라
        <br />
        <br />
        이해인, &#60;사랑의 사람들이여&#62;
      </div>

      <div id="test2" style={{ padding: 24, margin: 4 }}>
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <br />
        소중한 분들을 초대합니다.
        <br />
        살랑이는 바람결에
        <br />
        <span style={{ color: "coral" }}>사랑</span>이 묻어나는 계절입니다.
        <br />
        여기 곱고 예쁜 두 사람이
        <span style={{ color: "coral" }}>사랑</span>
        을 맺어
        <br />
        인생의 반려자가 되려 합니다.
        <br />
        새 인생을 시작하는 이 자리에 오셔서
        <br />
        <span style={{ color: "coral" }}>축복</span>
        해 주시면 감사하겠습니다.
        <br />
      </div>
      <div id="test3">
        {/* <img src={subBg1} style={{ width: "100%" }} alt="" /> */}
      </div>
      <div style={{ padding: 24, margin: 4 }}>
        <img src={symbol} width={48} style={{ textAlign: "center" }} />
        <br />
        <JustifyItem>박종오 &#183; 유수자의 아들 경수</JustifyItem>
        <br />
        <JustifyItem>조병철 &#183; 김현자 의 딸 예나</JustifyItem>
      </div>
      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}>
        2024.11.16
        <br />
        토요일 오후 1시 20분
        <br />
        <CalendarWrap />
      </div>
      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}>
        <GalleryWrap />
      </div>
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>

      <div
        ref={ref1}
        id="wrap"
        className={classAdd1 ? "show" : ""}
        style={{
          position: "relative",
          maxWidth: "390px",
          // height: "280px",
          margin: "0 auto",
        }}
      >
        (오시는 길)
        <NavermapsProvider
          ncpClientId={`${process.env.REACT_APP_NAVER_MAP_API_KEY}`}
        >
          <Map />
        </NavermapsProvider>
        <br />
        지하철 : 인천1호선 갈산역2번출구 1분거리
        <br />
        자가용 : 고속도로 부평 I/C 주차시설 1500대
      </div>

      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}>
        (예식장 정보 안내)
        <br />
        주차 안내 : 주차는 웨딩홀 대각선 '우림라이온스 밸리' 지하 주차장 이용
        <br />
        주차 후 갈산역과 연결된 통로를 통해 이동 가능
        <br />
        <br />
        식사 안내 : 본관 4층에서 뷔페식 으로 진행 됩니다.
        <br />
        부족함 없이 즐기실 수 있도록
        <br />
        한식을 비롯한 다양한 음식이 준비 되어 있습니다.
      </div>

      <div style={{ padding: 24, margin: 4, border: "1px solid #777" }}>
        (축의금 전달 관련) 마음을 전하실 곳<br />
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
        <br />
        <br />
        <hr />
        <br />
        <div>
          신랑측 계좌번호
          <br />
          기업 | 111-123-456789 (복사)
          <br />
          박경수
        </div>
        <br />
        <hr />
        <br />
        <div>
          신부측 계좌번호
          <br />
          기업 | 111-123-456789 (복사)
          <br />
          조예나
        </div>
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
  width: 200px;
  text-align: justify;
  line-height: 12px;
  vertical-align: middle;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
`;

import React, { useEffect, useRef, useState } from "react";
import { NavermapsProvider } from "react-naver-maps";
import { useInView } from "react-intersection-observer";
import Map from "./layouts/location/Map";

import AOS from "aos";
import "aos/dist/aos.css";

import symbol from "./assets/images/symbol/icons8-flower-bouquet-96.png";
import sub1 from "./assets/images/sub1.jpg";
// component
import Intro from "./layouts/intro/Intro";
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
import Vehicle from "./layouts/location/Vehicle";
import EventInFormation from "./layouts/eventInfo/EventInformation";
import Consideration from "./layouts/consideration/Consideration";

import Toast from "./components/toast/Toast";

import KakaoShareButton from "./components/share/Kakao";
import { DefaultButton } from "./components/share/DefaultButton";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function SimpleGallery(props: any) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image: any, index: any) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}

function App() {
  const [toastData, setToastData] = useState<boolean>(false);
  const toasting = () => {
    setToastData((toastData) => !toastData);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });

    return () => {};
  }, []);
  return (
    <Wrapper>
      <Intro />

      <div className="content">
        <div data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
          <Main />
        </div>
        {/* <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <img src={symbol} width={48} style={{ textAlign: "center" }} />
          <GreetingWrap />
        </section> */}

        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <img src={symbol} width={48} style={{ textAlign: "center" }} />
          <InvittingWrap />
        </section>
        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <img src={symbol} width={48} style={{ textAlign: "center" }} />
          <MemberWrap />
          <div>
            {/* <div
              style={{
                border: "2px dashed #ccc",
                borderRadius: 8,
                backgroundColor: "rgb(249, 249, 249)", 
                marginTop: 24,
                cursor: "pointer",
              }}
              onClick={toasting}
            >
              연락하기
            </div> */}
            <br />
          </div>
        </section>
        <section
          style={{
            padding: "24px 48px",

            backgroundColor: "#f9f9f9",
          }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <Title title="날짜" titleDecoration="day information" />
          <hr />
          <br />
          <CalendarWrap />
          <br />
          <hr />
          <br />
        </section>
        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <Title title="갤러리" titleDecoration="Gallery" />
          <GalleryWrap />
        </section>

        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
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
            {/* <>@@@지도 영역@@@</> */}
            {/* 맵 때문에 null object 에러 발생 */}
            <Map />
          </NavermapsProvider>
          <Vehicle />
        </section>

        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <EventInFormation />
        </section>

        <section
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1400"
        >
          <Title title="마음을 전하실 곳" titleDecoration="consideration" />
          <img src={symbol} width={48} style={{ textAlign: "center" }} />
          {/* <Consideration /> */}
        </section>
        <section>
          <div
            style={{
              writingMode: "vertical-lr",
              margin: "36px auto 6px",
              letterSpacing: "0.6rem",
              fontSize: "1.2rem",
              color: "#444",
              minHeight: "300px",
            }}
          >
            예쁘게 잘 살겠습니다
          </div>
          <div style={{ color: "#ccc" }}>Thank you for all the attention</div>
        </section>

        <section
          style={{
            padding: "24px 24px 48px",
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <DefaultButton />
          <KakaoShareButton />
        </section>
      </div>
      {toastData && <Toast state={toastData} onBlur={toasting}></Toast>}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 390px;
  height: 280px;
  color: #888;
  margin: 0 auto;
  & > div {
    text-align: center;
    line-height: 2rem;
    font-family: "Serif_KR_light";
    font-size: 14px;
  }

  section {
    padding: 24px;
    line-height: 2rem;
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

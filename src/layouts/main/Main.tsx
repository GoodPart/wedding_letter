import React, { useEffect, useState } from "react";

import styled from "styled-components";
import mainBg from "../../assets/images/main2.jpg";

export const getIsMobile = () => {
  const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null;
  const isAndroid = window.navigator.userAgent.match(/Android/i) !== null;

  if (isIos || isAndroid) {
    return true;
  }

  return false;
};

const Main = () => {
  const [vhValue, setVhValue] = useState(0);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setVhValue(vh);
  }, []);

  return (
    <Wrapper vValue={vhValue}>
      <img src={mainBg} alt="" />
      <Title>
        <div className="inner__wrapper">
          <div className="title__head">
            <div>박경수</div> &#183; <div>조예나</div>
          </div>
          <div className="title__conrainer">
            2024.11.16 - 토요일 - 13:20 오후
            <br />
            웨스턴팰리스 웨딩홀 / 7층 웨스턴홀
          </div>
        </div>
      </Title>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div<{ vValue: number }>`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  font-family: "Serif_KR_light";

  img {
    width: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 30%;
  background-color: #fff;

  .inner__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 100%;
  }

  .title__head {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 12px;
    align-items: center;

    div:first-child,
    div:last-child {
      font-size: 32px;
      font-weight: 400;
    }
  }
  .title__conrainer {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
`;

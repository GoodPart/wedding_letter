import React, { useEffect, useState } from "react";

import styled from "styled-components";
import mainBg from "../../assets/images/main.jpeg";

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
      <Header>
        <div className="inner__wrapper">
          <div className="title__head">
            <div>박경수</div>
            <div className="d">
              <div className="month">11</div>
              <div className="day">16</div>
            </div>
            <div>조예나</div>
          </div>
        </div>
      </Header>
      <img src={mainBg} alt="" />
      <Title>
        <div className="inner__wrapper">
          <div className="title__conrainer">
            2024년 11월 16일 토요일 13시 20분
            <br />
            웨스턴팰리스 7층 웨스턴 홀
          </div>
        </div>
      </Title>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div<{ vValue: number }>`
  overflow: hidden;
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  font-family: "Serif_KR_light";

  img {
    /* margin-top: 26%; */
    width: 100%;
  }
`;

const Header = styled.div`
  position: relative;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 20%;
  background-color: #fff;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 30%;
    background-color: #fff;
    filter: blur(6px);
  }
  .inner__wrapper {
    margin: 0 auto;
    width: 76%;
    height: 100%;
  }

  .title__head {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    .d {
      position: relative;
      width: 22%;
      text-align: center;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 100%;
        height: 2px;
        background-color: #777;
      }

      div {
        font-size: 26px;
      }
      .month {
        text-align: left;
      }
      .day {
        text-align: right;
      }
    }
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 20%;
  background-color: #fff;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 30%;
    background-color: #fff;
    filter: blur(6px);
  }

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

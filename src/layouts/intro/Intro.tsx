import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { handleScrolls } from "../../hooks/ScrollMasic";

import scrollUp from "../../assets/images/symbol/icons8-double-up.gif";
import love from "../../assets/images/symbol/love.png";

const StickyWrap = styled.div`
  position: relative;
  height: 7700px;
  background-color: #ccc;

  .sticky {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
  .slide-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .slide {
    position: absolute;
    z-index: 0;
    transform: translateY(60px);
    &.enabled {
      display: block;
    }
    &.disabled {
      display: none;
    }
  }
  p {
    word-break: keep-all;
    padding: 0 2rem;
    font-size: 45px;
    font-weight: bold;
    line-height: 1.35;
    letter-spacing: -1.5px;
    word-spacing: 1.5px;
    text-align: center;
    background: linear-gradient(to bottom, #000, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const GuideArrow = styled.div`
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0;

  .title {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 700;
    /* color: #333; */
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 12px;
    padding: 2px 16px;
    color: #fff;
    background-color: #f7a3a7d4;
    box-shadow: 0px 10px 9px -2px rgba(148, 146, 146, 0.37);
    -webkit-box-shadow: 0px 10px 9px -2px rgba(148, 146, 146, 0.37);
    -moz-box-shadow: 0px 10px 9px -2px rgba(148, 146, 146, 0.37);
  }
  img {
    opacity: calc(0.6);
    animation-name: upDown;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
  }

  @keyframes upDown {
    0% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Intro = () => {
  const stickyContainer = useRef<HTMLDivElement>(null);
  const sld1 = useRef<HTMLDivElement | null>(null);
  const sld2 = useRef<HTMLDivElement>(null);
  const sld3 = useRef<HTMLDivElement>(null);
  const sld4 = useRef<HTMLDivElement>(null);
  const sld5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScrolls(
        [sld1, sld2, sld3, sld4, sld5],
        [
          {
            start: 300,
            end: 1300,
            tStart: 60,
            tEnd: -60,
          },
          {
            start: 1600,
            end: 2600,
            tStart: 60,
            tEnd: -60,
          },
          {
            start: 2900,
            end: 3900,
            tStart: 60,
            tEnd: -60,
          },
          {
            start: 4200,
            end: 5200,
            tStart: 60,
            tEnd: -60,
          },
          {
            start: 5500,
            end: 6500,
            tStart: 60,
            tEnd: -60,
          },
        ]
      )
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleScrolls(
          [sld1, sld2, sld3, sld4, sld5],
          [
            {
              start: 300,
              end: 1300,
              tStart: 60,
              tEnd: -60,
            },
            {
              start: 1600,
              end: 2600,
              tStart: 60,
              tEnd: -60,
            },
            {
              start: 2900,
              end: 3900,
              tStart: 60,
              tEnd: -60,
            },
            {
              start: 4200,
              end: 5200,
              tStart: 60,
              tEnd: -60,
            },
            {
              start: 5500,
              end: 6500,
              tStart: 60,
              tEnd: -60,
            },
          ]
        )
      );
    };
  }, [sld1, sld2, sld3, sld4, sld5]);
  return (
    <>
      <GuideArrow>
        <div className="title">
          <p>아래 내용이 있습니다</p>
        </div>
        <img src={love} width={128} />
      </GuideArrow>
      <StickyWrap ref={stickyContainer}>
        <div className="sticky">
          <div className="slide-container">
            <div className="slide disabled" ref={sld1}>
              <div className="big-text">
                <p>올것이 왔다</p>
              </div>
            </div>
            <div className="slide disabled" ref={sld2}>
              <div className="big-text">
                <p>되돌릴 수 없는 운명의 날</p>
              </div>
            </div>
            <div className="slide disabled" ref={sld3}>
              <div className="big-text">
                <p>
                  역사를 바꿀
                  <br />그 순간
                </p>
              </div>
            </div>
            <div className="slide disabled" ref={sld4}>
              <div className="big-text">
                <p>위대한 결혼식이 시작된다</p>
              </div>
            </div>

            <div className="slide disabled" ref={sld5}>
              <div className="big-text">
                <p>
                  2024.11.16
                  <br />
                  13:20
                </p>
              </div>
            </div>
          </div>
        </div>
      </StickyWrap>
    </>
  );
};

export default Intro;

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { handleScrolls } from "../../hooks/ScrollMasic";

import scrollUp from "../../assets/images/symbol/icons8-double-up.gif";

const StickyWrap = styled.div`
  position: relative;
  height: 7100px;
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
  transform: translateX(-50%);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0;

  img {
    opacity: calc(0.6);
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
            end: 6100,
            tStart: 60,
            tEnd: 0,
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
              end: 6100,
              tStart: 60,
              tEnd: 0,
            },
          ]
        )
      );
    };
  }, [sld1, sld2, sld3, sld4, sld5]);
  return (
    <>
      <GuideArrow>
        <span>위로 스크롤</span> <img src={scrollUp} />
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

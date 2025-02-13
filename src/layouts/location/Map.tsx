import React, { useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

import styled from "styled-components";

import { IMapInfo } from "../../types/data";
import data from "../../data.json";

//map logo
import mapKakao from "../../assets/images/logo/map_kakao.png";
import mapNaver from "../../assets/images/logo/map_naver.png";
import copyLogo from "../../assets/images/logo/copy.png";

const Map = () => {
  const [copyTxt, setCopyTxt] = useState(false);
  const navermaps = useNavermaps();

  const mapInitInfo: IMapInfo = data.mapInitInfo;
  const mapInfo: IMapInfo = data.mapInfo;
  const parkigInfo: IMapInfo = data.parkingInfo;

  const handleDeepLink = () => {
    const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null;
    const isAndroid = window.navigator.userAgent.match(/Android/i) !== null;

    // console.log("agent", window.navigator.userAgent);

    const { mapInfo } = data;

    // if (isIos) {
    //   // 기기가 ios 인 경우
    //   console.log("ios");
    //   window.location.replace(
    //     `nmap://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
    //   );
    // } else if (isAndroid) {
    //   // 기기가 android 인 경우
    //   console.log("android");
    //   window.location.replace(
    //     `intent://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
    //   );
    // } else {
    //   console.log("window");
    //   // 그 외(윈도우 데스크탑 등)
    //   window.location.replace(
    //     `https://map.naver.com/p/entry/place/1832003609?c=15.00,0,0,0,dh`
    //   );
    // }

    if (/Android|iPhone/i.test(navigator.userAgent)) {
      console.log("mobile");
    }

    if (navigator.userAgent.match(/iPhone/i)) {
      console.log("iPhone");
      window.location.href = `nmap://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`;
    }

    if (navigator.userAgent.match(/Android/i)) {
      console.log("Android");
      window.location.href = `intent://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`;
    }

    if (
      navigator.userAgent.match(/Mac OS/i) ||
      navigator.userAgent.match(/Windows/i)
    ) {
      console.log("mac os, window os");
    }

    // 모바일 장치인지 확인하기 -> 리다이렉트
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      navigator.userAgent.match(/Mac OS/i) ||
      navigator.userAgent.match(/Windows/i)
    ) {
      window.location.href = `https://map.naver.com/p/entry/place/1832003609?c=15.00,0,0,0,dh`;

      console.log("web mobile");
    }
  };

  function copyToClipBoard() {
    window.navigator.clipboard.writeText(
      "인천 부평구 부평대로278번길 16 부평웨스턴팰리스"
    );
    alert("주소를 복사했습니다.");
  }

  return (
    <MapWrapper style={{ width: "inherit", height: "400px" }}>
      <div className="t1">{mapInfo.location}</div>
      <div className="t2">{mapInfo.mapLocation}</div>
      <MapDiv
        style={{
          width: "100%",
          height: "260px",
          margin: "0 auto",
        }}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(mapInitInfo.lat, mapInitInfo.log)}
          defaultZoom={16}
          // draggable={false}
          keyboardShortcuts={false}
        >
          <Marker
            defaultPosition={new navermaps.LatLng(mapInfo.lat, mapInfo.log)}
          />
          <Marker
            defaultPosition={
              new navermaps.LatLng(parkigInfo.lat, parkigInfo.log)
            }
          />
        </NaverMap>
      </MapDiv>
      <MapButtonWrap>
        <MapButton type="button" onClick={() => handleDeepLink()}>
          <div>
            <img src={mapNaver} alt="" />
            <span>네이버 지도</span>
          </div>
        </MapButton>
        <MapButton
          type="button"
          onClick={() =>
            window.location.replace("https://map.kakao.com/link/to/413941493")
          }
        >
          <div>
            <img src={mapKakao} alt="" />
            <span>카카오 지도</span>
          </div>
        </MapButton>
        <MapButton type="button" onClick={() => copyToClipBoard()}>
          <div>
            {/* <img src={copyLogo} alt="" /> */}
            <span>주소 복사</span>
          </div>
        </MapButton>
      </MapButtonWrap>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  .t1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .t2 {
    margin-bottom: 36px;
  }
`;

const MapButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  min-height: 40px;
  background-color: #f4f4f4;
  /* padding: 12px 0; */

  > button {
    width: 33.333%;
    background-color: transparent;
  }
`;

const MapButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: #ccc;
  }
  &:last-child::after {
    display: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  img {
    border-radius: 4px;
    background-color: #fff;
    width: 24px;
  }
`;

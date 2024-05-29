import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

import { IMapInfo } from "../../types/data";
import data from "../../data.json";

const Map = () => {
  const navermaps = useNavermaps();

  const mapInitInfo: IMapInfo = data.mapInitInfo;
  const mapInfo: IMapInfo = data.mapInfo;
  const parkigInfo: IMapInfo = data.parkingInfo;

  const handleDeepLink = () => {
    const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null;
    const isAndroid = window.navigator.userAgent.match(/Android/i) !== null;

    // const { mapInfo } = data;

    if (isIos) {
      // 기기가 ios 인 경우
      window.location.replace(
        `nmap://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
      );
    } else if (isAndroid) {
      // 기기가 android 인 경우
      window.location.replace(
        `intent://navigation?dlat=${mapInfo.lat}&dlng=${mapInfo.log}&dname=%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%98%88%EC%8B%9D%EC%9E%A5&appname=com.example.myapp`
      );
    } else {
      // 그 외(윈도우 데스크탑 등)
      window.location.replace(
        `https://map.naver.com/p/entry/place/1832003609?c=15.00,0,0,0,dh`
      );
    }
  };

  return (
    <div style={{ width: "inherit", height: "400px" }}>
      <div>{mapInfo.location}</div>
      <div>{mapInfo.mapLocation}</div>
      <MapDiv
        style={{
          width: "94%",
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
      <div className="btn-locationn">
        <button type="button" onClick={() => handleDeepLink()}>
          길찾기(네이버지도)
        </button>
        {/* <span>네이버 지도</span> <span>카카오 지도</span> */}
      </div>
    </div>
  );
};

export default Map;

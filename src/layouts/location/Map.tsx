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

  return (
    <div style={{ width: "inherit", height: "280PX" }}>
      <MapDiv
        style={{
          width: "100%",
          height: "inherit",
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
        <span>네이버 지도</span> <span>카카오 지도</span>
      </div>
    </div>
  );
};

export default Map;

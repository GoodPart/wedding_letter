import { NavermapsProvider, Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";

function MyMap() {
  // instead of window.naver.maps
  const navermaps = useNavermaps()

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={15}
    >
      <Marker
        defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
      />
    </NaverMap>
  )
}

function App() {
  
  return (
    <NavermapsProvider ncpClientId={`${process.env.REACT_APP_NAVER_MAP_API_KEY}`}>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <MyMap />
      </MapDiv>
    </NavermapsProvider>
  );
}

export default App;

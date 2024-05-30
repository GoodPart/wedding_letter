import styled from "styled-components";

import Car from "../../assets/images/logo/car.png";
import Subway from "../../assets/images/logo/subway.png";

const Vehicle = () => {
  return (
    <VehicleWrap>
      <div>
        <SymbolIcon>
          <img src={Car} />
        </SymbolIcon>
        <div>자가용</div>
        <div>고속도로 부평 I/C 주차시설 1500대</div>
      </div>
      <br />
      <div>
        <SymbolIcon>
          <img src={Subway} />
        </SymbolIcon>
        <div>지하철</div>
        <div>인천1호선 갈산역2번출구 1분거리</div>
      </div>
    </VehicleWrap>
  );
};

export default Vehicle;

const VehicleWrap = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 48px;
    }
  }
`;

const SymbolIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #fff;
  filter: drop-shadow(4px 4px 4px #cfcfcf);
`;

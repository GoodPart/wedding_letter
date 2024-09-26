import styled from "styled-components";

import Car from "../../assets/images/logo/car.png";
import Subway from "../../assets/images/logo/subway.png";

const Vehicle = () => {
  function copyToClipBoard() {
    window.navigator.clipboard.writeText("인천광역시 부평구 부평대로 283");
    alert("주소를 복사했습니다.");
  }
  return (
    <VehicleWrap>
      <div>
        <div className="title">지하철 안내</div>
        <div>인천1호선 갈산역2번출구</div>
      </div>
      <div>
        <div className="title">자차 안내(우림 라이온스밸리)</div>
        <div>
          인천광역시 부평구 부평대로 283{" "}
          <strong>(부평 우림라이온스밸리 주차장 이용)</strong>{" "}
          <button type="button" id="copyLink" onClick={() => copyToClipBoard()}>
            주소 복사
          </button>
        </div>
        {/* <div>- </div> */}
      </div>
    </VehicleWrap>
  );
};

export default Vehicle;

const VehicleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px auto 0;
  background-color: hsla(215, 15%, 97%, 0.6);
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 6px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  min-width: 275px;

  #copyLink {
    padding: 4px;
    background-color: #ddd;
    border: 1px solid #ccc;
    font-weight: 700;
    border-radius: 4px;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    text-align: left;

    & + div:before {
      content: "";
      position: absolute;
      top: 0;
      width: 93%;
      border-top: 1px dashed #ddd;
    }
  }
  .title {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: #333;
  }
  .title ~ div {
    line-height: 1.4rem;

    & + div {
      margin-top: 8px;
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

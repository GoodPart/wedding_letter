import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ToastLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);

  .dimed {
  }
  .wrap {
    flex-direction: column;
    width: calc(100% - 24px);
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 48px;
    border-radius: 8px;
    box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    /* background-color: rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
  }
  select {
    margin: 12px;
    width: calc(100% - 24px);
    min-height: 48px;

    & + select {
      margin-top: 0;
    }
  }

  a {
    margin: 0 12px 12px;
    display: flex;
    width: calc(100% - 24px);
    min-height: 48px;
    background-color: #6b6b6b;
    border-radius: 8px;

    &.active {
      background-color: skyblue;
    }
  }
`;

const data = {
  men: [
    {
      name: "박종오",
      phone: "01033143525",
    },
    {
      name: "유수자",
      phone: "01034333525",
    },
    {
      name: "박경수",
      phone: "01076503525",
    },
  ],
  women: [
    {
      name: "조병철",
      phone: "01011112222",
    },
    {
      name: "김현자",
      phone: "01012344321",
    },
    {
      name: "조예나",
      phone: "01099118315",
    },
  ],
};

const Toast = () => {
  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);
  const [change, setChange] = useState(false);

  const onChange = (event: any) => {
    const getValue = event.target.value;
    setSelect1(getValue === "" ? null : getValue);
    setSelect2(null);
  };
  const onChange2 = (event: any) => {
    const getValue = event.target.value;
    setSelect2(getValue === "" ? null : getValue);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ToastLayout>
      <div className="dimed"></div>
      <div className="wrap">
        <select onChange={(event) => onChange(event)}>
          <option value="">선택</option>
          <option value="men">신랑측</option>
          <option value="women">신부측</option>
        </select>
        <select
          style={{ display: select1 === null ? "none" : "block" }}
          onChange={(event) => onChange2(event)}
        >
          <option value="" selected={select2 === null}>
            선택
          </option>
          ;
          {data && select1 !== null ? (
            Object.values(data[`${select1}`]).map((item: any) => {
              const name = item.name;
              return <option value={item.phone}>{item.name}</option>;
            })
          ) : (
            <></>
          )}
        </select>

        {/* <a href={`tel:${select2}`}>
          {select1 != null && select2 != null ? "ok" : "not"} - 확인
        </a> */}
        <a
          href={"#none"}
          onClick={() => alert(`${select1},${select2}`)}
          className={select1 != null && select2 != null ? "active" : ""}
        >
          {select1 != null && select2 != null ? "ok" : "not"} - 확인
        </a>
      </div>
    </ToastLayout>
  );
};

export default Toast;

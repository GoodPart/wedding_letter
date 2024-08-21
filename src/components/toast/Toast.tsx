import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import data from "../../data.json";

const ToastLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 10000;
  opacity: 1;

  .dimed {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  .wrap {
    flex-direction: column;
    position: absolute;
    width: calc(100% - 24px);

    animation-name: modalUp;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
    left: 50%;
    transform: translateX(-50%);
    min-height: 48px;
    border-radius: 8px;
    box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
  }
  select {
    margin: 12px;
    width: calc(100% - 24px);
    height: 48px;
    border-radius: 8px;
    padding: 5px 30px 5px 10px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: linear-gradient(45deg, transparent 50%, coral 50%),
      linear-gradient(135deg, coral 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 18px) calc(1em + 8px),
      calc(100% - 13px) calc(1em + 8px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 2.5em;
    background-repeat: no-repeat;

    & + select {
      margin-top: 0;
    }
  }

  a {
    pointer-events: none;
    cursor: not-allowed;
    margin: 0 12px 12px;
    display: flex;
    width: calc(100% - 24px);
    min-height: 48px;
    background-color: gray;
    border-radius: 4px;
    transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 700;
    color: #fff;

    &.active {
      pointer-events: all;
      cursor: default;
      background-color: coral;
    }
  }

  .type {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 24px);
    height: 48px;
    margin-bottom: 12px;
    border-radius: 8px;
    overflow: hidden;

    > div {
      width: 100%;
      height: 100%;
      background-color: gray;
    }
    input[type="radio"] {
      display: none;
    }
    input[type="radio"] + label {
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    input[type="radio"]:checked + label {
      color: #fff;
      background-color: coral;
    }
  }

  @keyframes modalUp {
    0% {
      bottom: -160px;
    }
    70% {
      bottom: 16px;
    }
    100% {
      bottom: 24px;
    }
  }
`;

const { memberInfo } = data;
// const data = {
//   men: [
//     {
//       name: "박종오",
//       phone: "01033143525",
//     },
//     {
//       name: "유수자",
//       phone: "01034333525",
//     },
//     {
//       name: "박경수",
//       phone: "01076503525",
//     },
//   ],
//   women: [
//     {
//       name: "조병철",
//       phone: "01089398315",
//     },
//     {
//       name: "김현자",
//       phone: "01024858315",
//     },
//     {
//       name: "조예나",
//       phone: "01099118315",
//     },
//   ],
// };

export interface IToast {
  state: boolean;
  onBlur: () => void;
}

const Toast = ({ state, onBlur }: IToast) => {
  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);
  const [select3, setSelect3] = useState<number>(0);

  const onChange = (event: any) => {
    const getValue = event.target.value;
    setSelect1(getValue === "" ? null : getValue);
    setSelect2(null);
    setSelect3(0);
  };
  const onChange2 = (event: any) => {
    const getValue = event.target.value;
    setSelect2(getValue === "" ? null : getValue);
  };
  const onChange3 = (event: any) => {
    const getValue = event.target.value;
    setSelect3(getValue);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.removeAttribute("style");
    };
  }, []);

  return (
    <ToastLayout>
      <div className="dimed" onClick={onBlur}></div>
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
          {memberInfo !== null && select1 !== null ? (
            Object.values(memberInfo[`${select1}`]).map((item: any, index) => {
              if (typeof item === "string") return;
              return (
                <option value={item.phone} key={index}>
                  {item.name} - {item.phone}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </select>
        <div
          className="type"
          style={{ display: select2 === null ? "none" : "flex" }}
        >
          <div>
            <input
              type="radio"
              name="radio1"
              value={1}
              id="radios1"
              onChange={(e) => onChange3(e)}
              checked={select3 == 1}
            />
            <label htmlFor="radios1">전화</label>
          </div>
          <div>
            <input
              type="radio"
              name="radio1"
              value={2}
              id="radios2"
              onChange={(e) => onChange3(e)}
              checked={select3 == 2}
            />
            <label htmlFor="radios2">메세지</label>
          </div>
        </div>

        <a
          href={`${select3 == 1 ? "tel" : "sms"}:${select2}`}
          onClick={onBlur}
          className={
            select1 != null && select2 != null && select3 != 0 ? "active" : ""
          }
        >
          {select1 != null && select2 != null && select3 != 0
            ? "연락하기"
            : "선택 해주세요"}
        </a>
      </div>
    </ToastLayout>
  );
};

export default Toast;

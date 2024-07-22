import React, { useState } from "react";
import styled from "styled-components";

//get data
import data from "../../data.json";
import Tap from "../../components/tap/Tap";

const EventInFormation = () => {
  const [tapIndex, setTapIndex] = useState(0);

  const { eventInfo } = data;

  const onChange = (e: any) => {
    setTapIndex(Number(e.target.name));
  };

  return (
    // <Tap dataSet={eventInfo} tapState={tapIndex} onChange={onChange} />
    <TapWrap>
      <TapArea>
        {eventInfo.map((item, index) => {
          return (
            <div key={index} className="tabItem">
              <input
                type="radio"
                id={`radio_${index}`}
                name={`${index}`}
                checked={tapIndex === index}
                onChange={onChange}
              />
              <label htmlFor={`radio_${index}`}>{item.title}</label>
            </div>
          );
        })}
      </TapArea>

      <TapContent className="tap__content">
        {eventInfo.map((item, index) => {
          return (
            <div
              key={index}
              className={tapIndex === index ? "content show" : "content"}
            >
              {item.desc}
            </div>
          );
        })}
      </TapContent>
    </TapWrap>
  );
};

export default EventInFormation;

const TapWrap = styled.div`
  border: 1px solid #333;

  .tap__content {
    padding: 12px;
  }
  .tap__content .content {
    display: none;

    &.show {
      display: block;
    }
  }
`;

const TapArea = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 12px);
  padding: 6px;
  .tabItem {
    flex: 1;
  }
  .tabItem input[type="radio"] {
    display: none;
  }

  .tabItem input[type="radio"] + label {
    position: relative;
    display: block;
  }
  .tabItem input[type="radio"] + label:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: coral;
    transition: width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .tabItem input[type="radio"]:checked + label {
    /* position: relative; */
    width: 100%;
    height: 100%;
  }
  .tabItem input[type="radio"]:checked + label::after {
    /* position: relative; */
    width: 100%;
  }
`;

const TapContent = styled.div``;

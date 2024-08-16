import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";
import data from "../../data.json";

const IndexTitle = styled.div<{ show: boolean }>`
  /* font-family: Arial, Helvetica, sans-serif; */
  font-weight: 700;
  font-size: 0.9rem;
  border: ${(props) =>
    props.show != true ? "2px dashed rgb(204, 204, 204)" : "none"};
  span {
    color: #000;
    margin-right: 4px;
  }

  input[type="checkbox"] {
    display: none;
  }
  input + label {
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12px;
    background-color: rgb(249, 249, 249);
    border-radius: 8px;
    span {
      display: block;
      transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: ${(props) =>
        props.show == true ? "rotate(90deg)" : "rotate(-90deg)"};
    }
  }
`;
const ListWrap = styled.div<{ show: boolean }>`
  height: ${(props) => (props.show == true ? "auto" : 0)};
  overflow: hidden;
  padding: 0 12px;
  background-color: rgb(249, 249, 249);

  & + ${IndexTitle} {
    margin-top: 12px;
  }
`;

const Consideration = () => {
  const { consideration } = data;
  const [show, setShow] = useState({
    man: false,
    woman: false,
  });

  const onChangeHandle = (event: any) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    setShow({
      ...show,
      [name]: checked,
    });
  };

  return (
    <div>
      참석이 어려우신 분들을 위해
      <br />
      계좌번호를 기재하였습니다.
      <br />
      너그러운 마음으로 양해 부탁드립니다.
      <br />
      <br />
      <IndexTitle show={show.man}>
        <input
          type="checkbox"
          name="man"
          id="man"
          checked={show.man}
          onChange={onChangeHandle}
        />
        <label htmlFor="man">
          <div>신랑측</div>
          <span>&#60;</span>
        </label>
      </IndexTitle>
      <ListWrap show={show.man}>
        {Object.values(consideration.men).map((item, index) => {
          return (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="2000"
              groupName
              name={item.name}
              relationship={item.relationship}
              desc={item.desc}
              bankInfo={{ name: item.bank.name, number: item.bank.number }}
            />
          );
        })}
      </ListWrap>
      <IndexTitle show={show.woman}>
        <input
          type="checkbox"
          name="woman"
          id="woman"
          checked={show.woman}
          onChange={onChangeHandle}
        />
        <label htmlFor="woman">
          <div>신부측</div>
          <span>&#60;</span>
        </label>
      </IndexTitle>
      <ListWrap show={show.woman}>
        {Object.values(consideration.woman).map((item, index) => {
          return (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="2000"
              groupName
              name={item.name}
              relationship={item.relationship}
              desc={item.desc}
              bankInfo={{ name: item.bank.name, number: item.bank.number }}
            />
          );
        })}
      </ListWrap>
    </div>
  );
};

export default Consideration;

import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import AOS from "aos";
import data from "../../data.json";

const Consideration = () => {
  const { consideration } = data;

  return (
    <div>
      참석이 어려우신 분들을 위해
      <br />
      계좌번호를 기재하였습니다.
      <br />
      너그러운 마음으로 양해 부탁드립니다.
      <br />
      <br />
      <span style={{ display: "flex", textAlign: "left" }}>
        <span style={{ fontWeight: 700 }}>#</span> 신랑측
      </span>
      {Object.values(consideration.men).map((item, index) => {
        return (
          <Card
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
      <br />
      <span style={{ display: "flex", textAlign: "left" }}>
        <span style={{ fontWeight: 700 }}>#</span> 신부측
      </span>
      {Object.values(consideration.women).map((item, index) => {
        return (
          <Card
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
    </div>
  );
};

export default Consideration;

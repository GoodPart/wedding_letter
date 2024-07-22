import React from "react";
import Card from "../../components/card/Card";

const Consideration = () => {
  return (
    <div>
      참석이 어려우신 분들을 위해
      <br />
      계좌번호를 기재하였습니다.
      <br />
      너그러운 마음으로 양해 부탁드립니다.
      <br />
      <Card
        groupName
        name="박종오"
        relationship="부"
        desc="축하해주셔서 정말 감사합니다."
        bankInfo={{ name: "기업은행", number: "01076503525" }}
      />
      <br />
      <Card
        groupName={false}
        name="조병철"
        relationship="부"
        desc="축하해주셔서 정말 감사합니다222."
        bankInfo={{ name: "기업", number: 12341234 }}
      />
    </div>
  );
};

export default Consideration;

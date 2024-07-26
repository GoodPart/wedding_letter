import styled from "styled-components";

import data from "../../data.json";

const GreetingWrap = () => {
  const { greeting } = data;
  return (
    <div>
      {greeting.map((item, index) => {
        const setItem = item === "" ? <br /> : item;
        return <div key={index}>{setItem}</div>;
      })}
    </div>
  );
};

export default GreetingWrap;

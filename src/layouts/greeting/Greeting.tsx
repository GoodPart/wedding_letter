import styled from "styled-components";

import data from "../../data.json";

const GreetingWrap = () => {
  const { greeting } = data;
  return (
    <div>
      {greeting.map((item) => {
        const setItem = item === "" ? <br /> : item;
        return <div>{setItem}</div>;
      })}
    </div>
  );
};

export default GreetingWrap;

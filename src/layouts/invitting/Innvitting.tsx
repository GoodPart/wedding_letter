import styled from "styled-components";

import data from "../../data.json";

const InvittingWrap = () => {
  const { invitting } = data;
  return (
    <div>
      {invitting.map((item, index) => {
        const setItem = item === "" ? <br /> : item;
        return <div key={index}>{setItem}</div>;
      })}
    </div>
  );
};

export default InvittingWrap;

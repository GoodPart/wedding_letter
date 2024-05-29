import styled from "styled-components";

import data from "../../data.json";

const InvittingWrap = () => {
  const { invitting } = data;
  return (
    <div>
      {invitting.map((item) => {
        const setItem = item === "" ? <br /> : item;
        return <div>{setItem}</div>;
      })}
    </div>
  );
};

export default InvittingWrap;

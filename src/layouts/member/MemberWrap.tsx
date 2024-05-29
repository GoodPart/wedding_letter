import styled from "styled-components";

import data from "../../data.json";

const MemberWrap = () => {
  const { memberInfo } = data;
  return (
    <div>
      {memberInfo.map((item, index) => {
        const gapType =
          item.gap === "딸" ? <>&nbsp;{item.gap}&nbsp;</> : <>{item.gap}</>;
        return (
          <>
            <JustifyItem>
              {/* &nbsp; */}
              {item.p1} &#183; {item.p2}의 <strong>{gapType}</strong> {item.p3}
            </JustifyItem>
          </>
        );
      })}
    </div>
  );
};

export default MemberWrap;

const JustifyItem = styled.p`
  margin: 0 auto;
  width: 190px;
  text-align: justify;
  line-height: 12px;
  vertical-align: middle;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
`;

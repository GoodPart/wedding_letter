import React from "react";
import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}
const Layer = ({ ref, children }: WrapperProps) => {
  return <Wrapper ref={ref}>{children}</Wrapper>;
};

export default Layer;

const Wrapper = styled.div`
  padding: 24;
  margin: 4;
  border: 1px solid #777;
`;

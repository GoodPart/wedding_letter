import React from "react";
import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode;
}
const Layer = ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layer;

const Wrapper = styled.div`
  padding: 24;
  margin: 4;
  border: 1px solid #777;
`;

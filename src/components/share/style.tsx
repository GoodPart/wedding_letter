import styled from "styled-components";

export const ButtonStyle = styled.button<{ bg: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 700;
  border: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 1rem;
`;

export default ButtonStyle;

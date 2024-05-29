import styled from "styled-components";

interface ITitle {
  title: string;
  titleDecoration: string;
}

const Title = ({ title, titleDecoration }: ITitle) => {
  return (
    <TitleWrap>
      <div className="title--deco">{titleDecoration}</div>
      <div className="title">{title}</div>
    </TitleWrap>
  );
};

export default Title;

const TitleWrap = styled.div`
  margin-bottom: 20px;
  .title--deco {
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .title {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }
`;

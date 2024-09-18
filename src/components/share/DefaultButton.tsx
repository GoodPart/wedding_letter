import React from "react";
import ButtonStyle from "./style";

export const DefaultButton = () => {
  function copyToClipBoard() {
    window.navigator.clipboard.writeText(
      "https://fascinating-sprite-94efd8.netlify.app/"
    );
    alert("모바일청첩장 주소를 복사되었습니다");
  }
  return (
    <ButtonStyle bg="gray" color="#fff"  onClick={()=>copyToClipBoard()}>
      공유하기
    </ButtonStyle>
  );
};

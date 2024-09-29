import React, { useEffect } from "react";
import ButtonStyle from "./style";
import thumb from "../../assets/images/og_thumb.jpeg";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoShareButton: React.FC = () => {
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_SHARE_API_KEY); // JavaScript 키로 초기화
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "경수❤️예나 결혼식에 초대합니다",
          description: "2024년 11월 16일 토요일 오후 1시 20분",
          imageUrl:
            "https://fascinating-sprite-94efd8.netlify.app/og_thumb2.jpg",
          link: {
            mobileWebUrl: "https://fascinating-sprite-94efd8.netlify.app/",
            webUrl: "https://fascinating-sprite-94efd8.netlify.app/",
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://fascinating-sprite-94efd8.netlify.app/",
              webUrl: "https://fascinating-sprite-94efd8.netlify.app/",
            },
          },
        ],
      });
    }
  };

  return (
    <ButtonStyle bg="#fae100" color="#371d1e" onClick={shareKakao}>
      카카오톡 공유하기
    </ButtonStyle>
  );
};

export default KakaoShareButton;

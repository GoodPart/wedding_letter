import React, { useEffect } from "react";
import ButtonStyle from "./style";

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
          description: "모바일 청첩장",
          imageUrl:
            "https://master--fascinating-sprite-94efd8.netlify.app/static/media/main.fcb25f69ac96d600ec33.jpeg",
          link: {
            mobileWebUrl:
              "https://master--fascinating-sprite-94efd8.netlify.app",
            webUrl: "https://master--fascinating-sprite-94efd8.netlify.app",
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl:
                "https://master--fascinating-sprite-94efd8.netlify.app",
              webUrl: "https://master--fascinating-sprite-94efd8.netlify.app",
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

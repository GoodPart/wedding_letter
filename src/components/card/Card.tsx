import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface Bankinfo {
  name: string;
  number: number | string;
}

export interface Card {
  groupName: boolean;
  relationship: string;
  name: string;
  desc: string;
  bankInfo: Bankinfo;
}
function copyToClipBoard2(number: string) {
  navigator.clipboard.writeText(number);

  alert("계좌를 복사했습니다.");
}

const copyToClipboard = async (text: string) => {
  try {
    if (window.navigator.clipboard) {
      alert("copy done");
      await window.navigator.clipboard.writeText(text);
    }
  } catch (error) {
    alert("Failed to copy to clipboard: ");
  }
};

const CardLayout = styled.div`
  /* background-color: hsla(215, 15%, 97%, 0.6); */
  /* border-radius: 8px; */
  border-top: 1px dashed #ddd;
  /* box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 6px 0px rgba(0, 0, 0, 0.12); */
  overflow: hidden;
  min-width: 275px;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  padding: 8px;
  /* margin-bottom: 6px; */

  .title2 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  .title3 {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.15;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0px;
  }

  .container {
    /* min-height: px; */
    /* margin-bottom: 4px; */
  }
  .bankInfo {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    text-decoration: none;
    span:first-child {
      font-weight: 700;
    }
    span:last-child {
      color: #777;
    }
    button {
      padding: 2px 12px;
      border: none;
      font-weight: 700;
    }
  }
`;

const Card = ({ groupName, name, desc, bankInfo, relationship }: Card) => {
  return (
    <CardLayout>
      {/* <div className="title1">{groupName ? "신랑측" : "신부측"}</div> */}
      <div className="title2">{name}</div>
      {/* <div className="title3">{relationship}</div> */}
      {/* <div className="container">{desc}</div> */}
      <div className="bankInfo">
        <div>
          <span>{bankInfo.name}</span> &#183; <span>{bankInfo.number}</span>
        </div>

        <CopyToClipboard
          text={`${bankInfo.name} ${bankInfo.number}`}
          onCopy={() => alert("계좌번호가 복사되었습니다.")}
        >
          <button style={{ borderRadius: 4 }}>복사</button>
        </CopyToClipboard>
      </div>
    </CardLayout>
  );
};

export default Card;

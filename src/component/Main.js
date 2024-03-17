import React from "react";
import "./Main.css";
export const Main = () => {
  return (
    <div className="section one">
      <div
        className="main_img"
        style={{ backgroundImage: "url(./img/mainIMG.webp)" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span>나이키 조던 트래비스 스캇</span>
        <h1>feel the unreal</h1>
        <p>3월 17일, 새로운 시대가 시작됩니다</p>
        <p>새롭게 출시될 모든 컬러웨이를 미리 만나보세요</p>
        <div>
          <input className="main_btn" type="button" value="알림 받기" />
          <input className="main_btn" type="button" value="자세히 보기" />
        </div>
      </div>
    </div>
  );
};

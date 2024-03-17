import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./Nav.css";
import { Men } from "./Men";
import { Women } from "./Women";
import { Kids } from "./Kids";
export const Nav = () => {
  const navi = useNavigate();
  return (
    <div className="nav_container">
      <div className="nav_top">
        <div className="logo_box">
          <img src="/img/logo1.png" className="top_logo" alt="jordan" />
          <img src="/img/logo2.png" className="top_logo" alt="converse" />
        </div>
        <div className="info ">
          <ul>
            <li>매장 찾기</li>
            <p className="side"></p>
            <li>고객센터</li>
            <p className="side"></p>
            <li>가입하기</li>
            <p className="side"></p>
            <li>로그인</li>
          </ul>
        </div>
      </div>
      <div className="nav_mid">
        <div className="logo">
          <img
            src="/img/logo3.png"
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navi("/");
            }}
          />
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/new">New & Featured</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/find">Find Your Max</Link>
            </li>
          </ul>
        </div>
        <div className="wish_list">
          <input type="text" placeholder="검색" />
          <p>🤍</p>
          <p>🧺</p>
        </div>
      </div>
      <div className="nav_bottom">
        <span>웰컴 쿠폰 : 앱 첫 구매 15% 할인 혜택</span>
        <span>
          나이키 멤버로 가입해서 더 나은 쇼핑을 경험해 보세요
          <a href="#">가입하기</a>
        </span>
      </div>
    </div>
  );
};

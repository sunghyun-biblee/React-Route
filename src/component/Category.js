import React from "react";
import styled from "styled-components";
import "./Category.css";
const Category = () => {
  return (
    <div className="Category">
      <Shoes>
        <p>라이프스타일</p>
        <p>조던</p>
        <p>러닝</p>
        <p>농구</p>
        <p>축구</p>
        <p>트레이닝 및 짐</p>
        <p>스케이트 보딩</p>
        <p>골프</p>
        <p>테니스</p>
        <p>샌들 & 슬리퍼</p>
      </Shoes>
      <Gender className="SimilarBox">
        <h4>성별</h4>
        <li>
          <input type="checkbox" />
          <span>남성</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>여성</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>유아</span>
        </li>
      </Gender>
      <Price className="SimilarBox">
        <h4>가격대</h4>
        <li>
          <input type="checkbox" name="" id="" />
          <span>0 - 50,000원</span>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <span>50,000 - 100,000원</span>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <span>100,000 - 150,000원</span>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <span>150,000 - 200,000원</span>
        </li>
      </Price>
      <Discount className="SimilarBox">
        <h4>할인율</h4>
        <li>
          <input type="checkbox" name="" id="" />
          <span>30% Off and Up</span>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <span>20% Off and Up</span>
        </li>
      </Discount>
      <Color>
        <h4>색상</h4>
        <div className="color_container">
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
              <p>블랙</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#1790C8" }}
              ></div>
              <p>블루</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#825D41" }}
              ></div>
              <p>브라운</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#7BBA3C" }}
              ></div>
              <p>그린</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#808080" }}
              ></div>
              <p>그레이</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#F36B26" }}
              ></div>
              <p>오렌지</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#F0728F" }}
              ></div>
              <p>핑크</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#8D429F" }}
              ></div>
              <p>퍼플</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#E7352B" }}
              ></div>
              <p>레드</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#FFFFFF" }}
              ></div>
              <p>화이트</p>
            </div>
          </li>
          <li>
            <div className="color_box">
              <div
                className="color"
                style={{ backgroundColor: "#FED533" }}
              ></div>
              <p>옐로우</p>
            </div>
          </li>
        </div>
      </Color>
    </div>
  );
};

export default Category;

const Shoes = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  p {
    text-align: left;
    padding: 5px 0px;
    font-weight: 700;
    color: gary;
  }
`;
const Gender = styled.div``;
const Price = styled.div``;
const Discount = styled.div``;
const Color = styled.div`
  .color_container {
    display: flex;
    flex-wrap: wrap;
  }

  .color {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: aliceblue;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .color_box {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      width: 45px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

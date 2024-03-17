import React from "react";
import { Nav } from "./Nav";
import Filter from "./Filter";
import Category from "./Category";
import styled from "styled-components";
import { Container } from "./Home";
import { ItemBox } from "./ItemBox";

export const Men = () => {
  const MenitemArray = [
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "에어 조던 1 미드 SE",
      type: "남성 신발",
      colorCount: 1,
      price: "169,000",
    },
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "에어 조던 1 로우 SE",
      type: "남성 신발",
      colorCount: 1,
      price: "139,000",
    },
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "나이키 에어 모어 업템포",
      type: "남성 슬라이드",
      colorCount: 2,
      price: "99,000",
    },
    {
      title: "SNKRS",
      img: "./img/mainIMG.webp",
      name: "나이키 SB 덩크 로우 프로",
      type: "스케이트 보드화",
      colorCount: 1,
      price: "149,000",
    },
    {
      title: "SNKRS",
      img: "./img/mainIMG.webp",
      name: "나이키 SB 덩크 로우 프리미엄",
      type: "스케이트 보드화",
      colorCount: 1,
      price: "149,000",
    },
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "에어 조던 뮬",
      type: "골프화",
      colorCount: 2,
      price: "129,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/mainIMG.webp",
      name: "나이키 에어 포스 1'07",
      type: "남성 신발",
      colorCount: 2,
      price: "139,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/mainIMG.webp",
      name: "나이키 P-6000",
      type: "신발",
      colorCount: 5,
      price: "129,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/mainIMG.webp",
      name: "나이키 줌 보메로 5",
      type: "남성 신발",
      colorCount: 2,
      price: "189,000",
    },
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "나이키 코르테즈",
      type: "남성 신발",
      colorCount: 1,
      price: "119,000",
    },
    {
      title: "신제품",
      img: "./img/mainIMG.webp",
      name: "나이키 에어 맥스 90 LV*",
      type: "남성 신발",
      colorCount: 1,
      price: "169,000",
    },
  ];
  return (
    <Container>
      <Nav></Nav>
      <Filter></Filter>
      <ItemSection>
        <Category></Category>
        <ItemBox itemArray={MenitemArray}></ItemBox>
      </ItemSection>
    </Container>
  );
};
export const ItemSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

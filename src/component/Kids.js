import React from "react";
import { Container } from "./Home";
import { Nav } from "./Nav";
import Filter from "./Filter";
import { ItemSection } from "./Men";
import Category from "./Category";
import { ItemBox } from "./ItemBox";

export const Kids = () => {
  const KiditemArray = [
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "에어 조던 1 미드 SE",
      type: "유아 신발",
      colorCount: 1,
      price: "79,000",
    },
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "에어 조던 1 로우 SE",
      type: "유아 신발",
      colorCount: 1,
      price: "69,000",
    },
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "나이키 에어 모어 업템포",
      type: "유아 슬라이드",
      colorCount: 2,
      price: "99,000",
    },
    {
      title: "SNKRS",
      img: "./img/kids.webp",
      name: "나이키 SB 덩크 로우 프로",
      type: "스케이트 보드화",
      colorCount: 1,
      price: "89,000",
    },
    {
      title: "SNKRS",
      img: "./img/kids.webp",
      name: "나이키 SB 덩크 로우 프리미엄",
      type: "스케이트 보드화",
      colorCount: 1,
      price: "89,000",
    },
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "에어 조던 뮬",
      type: "골프화",
      colorCount: 2,
      price: "59,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/kids.webp",
      name: "나이키 에어 포스 1'07",
      type: "유아 신발",
      colorCount: 2,
      price: "69,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/kids.webp",
      name: "나이키 P-6000",
      type: "신발",
      colorCount: 5,
      price: "59,000",
    },
    {
      title: "베스트 셀러",
      img: "./img/kids.webp",
      name: "나이키 줌 보메로 5",
      type: "유아 신발",
      colorCount: 2,
      price: "99,000",
    },
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "나이키 코르테즈",
      type: "유아 신발",
      colorCount: 1,
      price: "109,000",
    },
    {
      title: "신제품",
      img: "./img/kids.webp",
      name: "나이키 에어 맥스 90 LV*",
      type: "유아 신발",
      colorCount: 1,
      price: "79,000",
    },
  ];
  return (
    <Container>
      <Nav></Nav>
      <Filter></Filter>
      <ItemSection>
        <Category></Category>
        <ItemBox itemArray={KiditemArray}></ItemBox>
      </ItemSection>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import "./ItemBox.css";
export const ItemBox = ({ itemArray }) => {
  console.log(itemArray);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "0 30px" }}
    >
      <ShoesGrid>
        {itemArray &&
          itemArray.map((data) => (
            <div className="item">
              <ItemIMG src={data.img} alt="shoes" className="itemImg" />
              <p className="title">{data.title}</p>
              <p className="name">{data.name}</p>
              <p className="type">{data.type}</p>
              <p className="colorCount">{data.colorCount}개 색상</p>
              <p className="price">{data.price}원</p>
            </div>
          ))}
      </ShoesGrid>
    </div>
  );
};

const ShoesGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  .item {
    padding-bottom: 30px;
    .title {
      color: #9e3500;
      font-weight: 600;
    }
    .name {
      font-weight: 700;
    }
    .type,
    .colorCount {
      color: rgba(0, 0, 0, 0.7);
    }
    .price {
      padding-top: 15px;
      font-weight: 700;
    }
    p {
      text-align: left;
      padding: 3px 0;
    }
  }

  @media screen and (max-width: 915px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ItemIMG = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const Item = styled.div``;

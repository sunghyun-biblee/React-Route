import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <FilterHead>
      <h2>신발</h2>
      <Align>
        <p>필터 숨기기</p>
        <p>정렬 기준</p>
        <div className="roll"> {">"}</div>
      </Align>
    </FilterHead>
  );
};

export default Filter;

const FilterHead = styled.div`
  padding: 15px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Align = styled.div`
  display: flex;

  p {
    padding: 0 10px;
  }
  .roll {
    font-weight: 900;
    transform: rotate(90deg);
  }
`;

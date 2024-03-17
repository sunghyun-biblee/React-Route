import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { Main } from "./Main";
import styled from "styled-components";

export const Home = () => {
  return (
    <Container>
      <Nav></Nav>
      <Main></Main>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

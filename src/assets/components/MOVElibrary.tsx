import React from "react";
import styled from "styled-components";
function MOVElibrary() {
  return (
    <MainDiv>
      <p>hello</p>
      <MovieGrid></MovieGrid>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const MovieGrid = styled.div`
  max-width: 164px;
  display: grid;
  gap: 20px;
`;
export default MOVElibrary;

import React from "react";
import styled from "styled-components";
import Data from "/src/data.json";
function MOVElibrary() {
  return (
    <MainDiv>
      <p>hello</p>
      <MovieGrid>
        {Data.map((item, index) => (
          <MovieDiv
            key={index}
            backgroundImage={item.thumbnail.regular?.small}
          ></MovieDiv>
        ))}
      </MovieGrid>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  p {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.312px;
  }
`;

const MovieGrid = styled.div`
  max-width: 164px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;
const MovieDiv = styled.div`
  width: 144px;
  height: 110px;

  align-items: center;

  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: #fff;
`;
export default MOVElibrary;

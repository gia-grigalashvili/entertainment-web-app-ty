import React, { useState } from "react";
import styled from "styled-components";
import Data from "/src/data.json"; // Adjust the path to match your project structure
import Movies from "/public/assets/icon-nav-movies.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";

function MOVElibrary() {
  const [Moviedata, setMoviedata] = useState(Data.slice(5)); // Initialize state with Data excluding the first five items

  return (
    <MainDiv>
      <p>hello</p>
      <MovieGrid>
        {Moviedata.map((item, index) => (
          <div key={index}>
            <MovieDiv backgroundImage={item.thumbnail?.regular?.small}>
              <div className="bookmark">
                <img src={bookmarkempty} alt="" />
              </div>
            </MovieDiv>
            <Information>
              <p>{item.year}</p>
              <img src={Movies} alt="" />
              <p>{item.category}</p>
              <p>{item.rating}</p>
            </Information>
            <h1>{item.title}</h1>
          </div>
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
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MovieGrid = styled.div`
  max-width: 164px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  h1 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 4px;
  }
`;

const MovieDiv = styled.div`
  width: 144px;
  height: 110px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: #fff;
  .bookmark {
    margin-left: 120px;

    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 22px;
    height: 22px;
    border-radius: 50px;
    background-color: gray;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
  img {
    width: 10px;
    height: 10px;
  }
`;
export default MOVElibrary;

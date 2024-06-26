import React, { useState } from "react";
import styled from "styled-components";
import Data from "/src/data.json"; // Adjust the path to match your project structure
import Movies from "/public/assets/icon-nav-movies.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";
import Series from "/public/assets/icon-nav-tv-series.svg";
import bookmarkfull from "/public/assets/icon-bookmark-full.svg";
function MOVElibrary({ category }) {
  const [Moviedata, setMoviedata] = useState(Data.slice(5)); // Initialize state with Data excluding the first five items
  const [showBookmark, setShowBookmark] = useState(
    Array(Moviedata.length).fill(false)
  );

  const toggleBookmark = (index) => {
    const newShowBookmark = [...showBookmark];
    newShowBookmark[index] = !newShowBookmark[index];
    setShowBookmark(newShowBookmark);
  };

  return (
    <MainDiv>
      <p className="cate">{category}</p>
      <MovieGrid>
        {Moviedata.map((item, index) => (
          <div key={index}>
            <MovieDiv backgroundImage={item.thumbnail?.regular?.small}>
              <div onClick={() => toggleBookmark(index)} className="bookmark">
                <img
                  src={showBookmark[index] ? bookmarkfull : bookmarkempty}
                  alt=""
                />
              </div>
            </MovieDiv>
            <Information>
              <p>{item.year}</p>
              <img
                src={item.category === "Movie" ? Movies : Series}
                alt={item.category}
              />
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
  justify-content: center;
  padding: 20px;
  gap: 20px;
  .cate {
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
  gap: 30px;
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

    width: 22px;
    height: 22px;
    border-radius: 50px;
    background-color: gray;
    img {
      width: 10px;
      height: px;
    }
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  img {
    width: 10px;
    height: 10px;
  }
  p {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export default MOVElibrary;

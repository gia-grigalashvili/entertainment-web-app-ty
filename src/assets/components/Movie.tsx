import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Data from "/src/data.json";
import Movies from "/public/assets/icon-nav-movies.svg";
import Series from "/public/assets/icon-nav-tv-series.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";

function Movie({ category }) {
  const [Moviedata, setMoviedata] = useState(Data.slice(0, 5));
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoviedata((prevData) => {
        const [first, ...rest] = prevData;
        return [...rest, first];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainDiv>
      <p>{category}</p>
      <SliderWrapper ref={sliderRef}>
        <MovieGrid>
          {Moviedata.map((item, index) => (
            <MovieDiv
              key={index}
              backgroundImage={item.thumbnail.trending?.small}
            >
              <div className="bookmark">
                <img src={bookmarkempty} alt="" />
              </div>

              <Textmovie>
                <div className="maintext">
                  <p>{item.year}</p>
                  <img
                    src={item.category === "Movie" ? Movies : Series}
                    alt={item.category}
                  />
                  <p>{item.category}</p>

                  <p>{item.rating}</p>
                </div>

                <div>
                  <h2>{item.title}</h2>
                </div>
              </Textmovie>
            </MovieDiv>
          ))}
        </MovieGrid>
      </SliderWrapper>
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

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const MovieGrid = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 1s ease-in-out;
`;

const MovieDiv = styled.div`
  min-width: 280px;
  height: 140px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: #fff;
  .bookmark {
    margin-left: 200px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-color: gray;
  }
`;

const Textmovie = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  .maintext {
    display: flex;
    gap: 10px;
    margin-top: 40px;
    p {
      color: var(--Pure-White, #fff);
      font-family: Outfit;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  h2 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    width: 15px;
    height: 15px;
  }
`;

export default Movie;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MoviesIcon from "/public/assets/icon-nav-movies.svg";
import SeriesIcon from "/public/assets/icon-nav-tv-series.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";
import bookmarkfull from "/public/assets/icon-bookmark-full.svg";

interface MovieData {
  title: string;
  year: number;
  category: string;
  rating: number;
  thumbnail: {
    trending?: {
      small: string;
    };
  };
  isBookmarked: boolean;
}

interface Props {
  subCategory: string;
  toggleBookmark: (index: number) => void;
  showBookmark: boolean[];
  Data: MovieData[]; // Define Data prop
}

const Movie: React.FC<Props> = ({
  subCategory,
  toggleBookmark,

  Data,
}) => {
  const [Moviedata, setMoviedata] = useState<MovieData[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMoviedata(Data.slice(0, 5)); // Initialize Moviedata with Data prop

    const interval = setInterval(() => {
      setMoviedata((prevData) => {
        const [first, ...rest] = prevData;
        return [...rest, first];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [Data]);

  return (
    <MainDiv>
      <p>{subCategory}</p>
      <SliderWrapper ref={sliderRef}>
        <MovieGrid>
          {Moviedata.map((item, index) => (
            <MovieDiv
              key={index}
              backgroundImage={item.thumbnail.trending?.small}
            >
              <div onClick={() => toggleBookmark(index)} className="bookmark">
                <img
                  src={item.isBookmarked ? bookmarkfull : bookmarkempty}
                  alt=""
                />
              </div>
              <Textmovie>
                <div className="maintext">
                  <p>{item.year}</p>
                  <img
                    src={item.category === "Movie" ? MoviesIcon : SeriesIcon}
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
};

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

const MovieDiv = styled.div<{ backgroundImage: string | undefined }>`
  min-width: 280px;
  height: 140px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: #fff;
  position: relative;
  @media (min-width: 1440px) {
    width: 470px;
    height: 230px;
  }
  .bookmark {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1440px) {
      width: 42px;
      height: 42px;
    }
  }
`;

const Textmovie = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  @media (min-width: 1440px) {
    padding: 20px;
    margin-top: 100px;
  }
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
      @media (min-width: 1440px) {
        font-size: 15px;
      }
    }
  }
  h2 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 1440px) {
      font-size: 24px;
    }
  }
  img {
    width: 15px;
    height: 15px;
  }
`;

export default Movie;

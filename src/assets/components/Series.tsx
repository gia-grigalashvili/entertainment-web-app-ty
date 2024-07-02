import React from "react";
import styled from "styled-components";
import MoviesIcon from "/public/assets/icon-nav-movies.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";
import bookmarkfull from "/public/assets/icon-bookmark-full.svg";
import Play from "/public/assets/icon-play.svg";
interface SeriesProps {
  Moviedata: {
    title: string;
    year: number;
    category: string;
    rating: string;
    thumbnail?: {
      regular: {
        small: string;
      };
    };
    isBookmarked: boolean;
  }[];
  category: string;
  subCategory?: string; // Example of optional prop
  toggleBookmark: (title: string) => void;
}

const Series: React.FC<SeriesProps> = ({
  Moviedata,
  category,
  toggleBookmark,
}) => {
  return (
    <MainDiv>
      <p className="cate">{category}</p>
      <SeriesGrid>
        {Moviedata.map((item, index) => (
          <div key={index}>
            <SeriesDiv backgroundImage={item.thumbnail?.regular?.small}>
              <div
                onClick={() => toggleBookmark(item.title)}
                className="bookmark"
              >
                <img
                  src={item.isBookmarked ? bookmarkfull : bookmarkempty}
                  alt="bookmark"
                />
              </div>
              <div className="played">
                <img src={Play} alt="Play icon" />
                <span>Play</span>
              </div>
            </SeriesDiv>
            <Information>
              <p>{item.year}</p>
              <img src={MoviesIcon} alt={item.category} />
              <p>{item.category}</p>
              <p>{item.rating}</p>
            </Information>
            <h1>{item.title}</h1>
          </div>
        ))}
      </SeriesGrid>
    </MainDiv>
  );
};

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

const SeriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  h1 {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin-top: 4px;
    @media (min-width: 1440px) {
      font-size: 18px;
    }
  }
  @media (min-width: 750px) {
    gap: 20px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;

const SeriesDiv = styled.div<{ backgroundImage?: string }>`
  width: 144px;
  height: 110px;
  cursor: pointer;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  color: #fff;
  overflow: hidden;

  @media (min-width: 750px) {
    width: 240px;
    padding-top: 10px;
    height: 150px;
  }
  @media (min-width: 1440px) {
    width: 384px;
    padding-top: 10px;
    height: 190px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Dark overlay color */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
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
    cursor: pointer;
    img {
      width: 10px;
      height: 10px;
    }
    @media (min-width: 750px) {
      width: 32px;
      height: 32px;
    }
  }

  .played {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 10px 20px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      color: white;
      font-family: Outfit;
      font-size: 14px;
    }
  }

  &:hover .played {
    display: flex;
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
  @media (min-width: 1440px) {
    font-size: 13px;
  }
`;

export default Series;

import React from "react";
import styled from "styled-components";
import MoviesIcon from "/public/assets/icon-nav-movies.svg";
import bookmarkempty from "/public/assets/icon-bookmark-empty.svg";
import bookmarkfull from "/public/assets/icon-bookmark-full.svg";

interface SeriesProps {
  Moviedata: {
    title: string;
    year: number;
    category: string;
    rating: number;
    thumbnail?: {
      regular: {
        small: string;
      };
    };
  }[];
  category: string;
  subCategory?: string; // Example of optional prop
  toggleBookmark: (index: number) => void;
  showBookmark: boolean[];
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
  max-width: 164px;
  display: grid;
  grid-template-columns: 1fr 3fr;
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
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 50px;
  }
`;

const SeriesDiv = styled.div<{ backgroundImage?: string }>`
  width: 144px;
  height: 110px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: #fff;
  position: relative;
  @media (min-width: 750px) {
    width: 245px;
    padding-top: 10px;
    height: 150px;
  }
  @media (min-width: 1440px) {
    width: 300px;
    padding-top: 10px;
    height: 180px;
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

    img {
      width: 10px;
      height: 10px;
      @media (min-width: 1440px) {
        width: 12px;
      }
    }
    @media (min-width: 1440px) {
      width: 33px;
      height: 33px;
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
    @media (min-width: 1440px) {
      font-size: 13px;
    }
  }
`;

export default Series;

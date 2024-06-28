import React, { useState } from "react";
import styled from "styled-components";
import Logo from "/public/assets/logo.svg";
import Movies from "/public/assets/icon-nav-movies.svg";
import Bookmark from "/public/assets/icon-nav-bookmark.svg";
import Home from "/public/assets/icon-nav-home.svg";
import SeriesIcon from "/public/assets/icon-nav-tv-series.svg";
import Avatar from "/public/assets/image-avatar.png";
import { Link } from "react-router-dom";

interface NavigationProps {
  onCategoryChange: (label: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (category: string, label: string) => {
    onCategoryChange(label);
    setActiveCategory(category);
  };

  return (
    <MainDiv>
      <img src={Logo} alt="Logo" />
      <Categories>
        <Link to="/">
          <img
            src={Home}
            alt="Home"
            onClick={() =>
              handleCategoryClick("home", "Recommended for you, Trending")
            }
            className={activeCategory === "home" ? "active" : ""}
          />
        </Link>
        <Link to="/movie">
          <img
            src={Movies}
            alt="Movies"
            onClick={() => handleCategoryClick("movies", "Movies")}
            className={activeCategory === "movies" ? "active" : ""}
          />
        </Link>
        <Link to="/series">
          <img
            src={SeriesIcon}
            alt="Series"
            onClick={() => handleCategoryClick("series", "TV Series")}
            className={activeCategory === "series" ? "active" : ""}
          />
        </Link>
        <Link to="/bookmark">
          <img
            src={Bookmark}
            alt="Bookmark"
            onClick={() => handleCategoryClick("bookmark", "Bookmarked Movies")}
            className={activeCategory === "bookmark" ? "active" : ""}
          />
        </Link>
      </Categories>
      <img className="avatar" src={Avatar} alt="Avatar" />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin-top: -20px;
  align-items: center;
  background: #161d2f;
  justify-content: space-between;

  @media (min-width: 1440px) {
    flex-direction: column;
    height: 900px;
    border-radius: 20px;
    width: 96px; /* Ensure consistent width */
  }

  img {
    width: 24px; /* Adjust as needed */
    height: 24px; /* Adjust as needed */
    transition: filter 0.3s ease;
  }

  img.active {
    filter: brightness(0) invert(1);
  }

  .avatar {
    width: 34px;
    height: 34px;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 24px;

  @media (min-width: 1440px) {
    flex-direction: column;
    overflow: hidden;
    gap: 30px;
  }
`;

export default Navigation;

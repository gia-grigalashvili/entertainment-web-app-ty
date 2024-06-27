import React from "react";
import styled from "styled-components";
import Logo from "/public/assets/logo.svg";
import Movies from "/public/assets/icon-nav-movies.svg";
import Bookmark from "/public/assets/icon-nav-bookmark.svg";
import Home from "/public/assets/icon-nav-home.svg";
import Series from "/public/assets/icon-nav-tv-series.svg";
import Avatar from "/public/assets/image-avatar.png";
import { Link } from "react-router-dom";

function Navigation({ onCategoryChange }) {
  return (
    <MainDiv>
      <img src={Logo} alt="Logo" />
      <Categories>
        <Link to="/">
          <img
            src={Home}
            alt="Home"
            onClick={() => onCategoryChange("Recommended for you", "Trending")}
          />
        </Link>
        <Link to="/movie">
          <img
            src={Movies}
            alt="Movies"
            onClick={() => onCategoryChange("Movies")}
          />
        </Link>
        <Link to="/series">
          <img
            src={Series}
            alt="Series"
            onClick={() => onCategoryChange("TV Series")}
          />
        </Link>
        <Link to="/bookmark">
          <img
            src={Bookmark}
            alt="Bookmark"
            onClick={() => onCategoryChange("Bookmarked Movies")}
          />
        </Link>
      </Categories>
      <img className="avatar" src={Avatar} alt="Avatar" />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin-top: -20px;
  align-items: center;
  background: #161d2f;
  justify-content: space-between;
  .avatar {
    width: 34px;
    height: 34px;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 24px;
`;

export default Navigation;

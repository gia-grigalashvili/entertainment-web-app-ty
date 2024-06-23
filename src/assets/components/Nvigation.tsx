import React from "react";
import styled from "styled-components";
import Logo from "/public/assets/logo.svg";
import Movies from "/public/assets/icon-nav-movies.svg";
import Bookmark from "/public/assets/icon-nav-bookmark.svg";
import Home from "/public/assets/icon-nav-home.svg";
import Series from "/public/assets/icon-nav-tv-series.svg";
import Avatar from "/public/assets/image-avatar.png";

function Nvigation({ onCategoryChange }) {
  return (
    <Maindiv>
      <img src={Logo} alt="Logo" />
      <Categorys>
        <img src={Home} alt="Home" onClick={() => onCategoryChange("Home")} />
        <img
          src={Movies}
          alt="Movies"
          onClick={() => onCategoryChange("Movies")}
        />
        <img
          src={Series}
          alt="Series"
          onClick={() => onCategoryChange("TV Series")}
        />
        <img
          src={Bookmark}
          alt="Bookmark"
          onClick={() => onCategoryChange("Bookmarked Movies")}
        />
      </Categorys>
      <img className="avatar" src={Avatar} alt="Avatar" />
    </Maindiv>
  );
}
const Maindiv = styled.div`
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
const Categorys = styled.div`
  display: flex;
  gap: 24px;
`;
export default Nvigation;

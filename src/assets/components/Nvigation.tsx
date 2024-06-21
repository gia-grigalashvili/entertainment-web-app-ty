import React from "react";
import Logo from "/public/assets/logo.svg";
import Movies from "/public/assets/icon-nav-movies.svg";
import Bookmark from "/public/assets/icon-bookmark-full.svg";
import Category from "/public/assets/icon-category-movie.svg";
import Home from "/public/assets/icon-nav-home.svg";
import Avatar from "/public/assets/image-avatar.png";
import styled from "styled-components";

function Nvigation() {
  return (
    <Maindiv>
      <img src={Logo} alt="" />
      <Categorys>
        {" "}
        <img src={Movies} alt="" />
        <img src={Movies} alt="" />
        <img src={Movies} alt="" />
        <img src={Movies} alt="" />
        <img src={Movies} alt="" />
      </Categorys>

      <img className="avatar" src={Avatar} alt="" />
    </Maindiv>
  );
}
const Maindiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
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
  gap: 14px;
`;
export default Nvigation;

import React from "react";
import styled from "styled-components";

function Movie({ category }) {
  return (
    <Maindiv>
      <p>{category}</p>
      <div></div>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.312px;
  }
`;
export default Movie;

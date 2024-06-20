import React, { useState } from "react";
import Logo from "/public/assets/logo.svg";
import styled from "styled-components";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Loginmain>
      <img src={Logo} alt="Logo" />
      <Maindiv>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <input type="email" placeholder={"Email address"} />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="password" placeholder="Repeat Password" />}
        <button>
          {isLogin ? "Login to your account" : "Create your account"}
        </button>
        <div className="spanp">
          <p>
            {isLogin ? (
              <>
                Don’t have an account? <span onClick={toggleForm}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account? <span onClick={toggleForm}>Login</span>
              </>
            )}
          </p>
        </div>
      </Maindiv>
    </Loginmain>
  );
}
const Loginmain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 32px;
    height: 25.6px;
  }
`;
const Maindiv = styled.div`
  background-color: #161d2f;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;

  @media (min-width: 750px) {
    width: 400px;
  }
  h1 {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;

    font-family: Outfit;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
  }
  input {
    display: block;
    margin: 10px auto;
    padding: 10px;
    background-color: #161d2f;
    width: 279px;

    height: 37px;
    border: none;
    border-bottom: 1px solid #5a698f;
    @media (min-width: 750px) {
      width: 336px;
      padding: 30px;
      font-size: 15px;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #1c8adb;
    color: white;
    width: 279px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    @media (min-width: 750px) {
      width: 349px;
      height: 48px;
    }
  }

  span {
    color: #1c8adb;
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
  .spanp {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    @media (min-width: 750px) {
      margin-top: 30px;
    }
  }
`;

export default Auth;

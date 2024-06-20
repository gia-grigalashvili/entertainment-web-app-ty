import React, { useState } from "react";
import Logo from "/public/assets/logo.svg";
import styled from "styled-components";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <img src={Logo} alt="Logo" />
      <Maindiv>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <input type="email" placeholder={"Email address"} />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="email" placeholder="Repeat Password" />}
        <button>
          {isLogin ? "Login to your account" : "Create your account"}
        </button>
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
      </Maindiv>
    </div>
  );
}

const Maindiv = styled.div`
  background-color: #161d2f;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  input {
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: 80%;
    border: none;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #1c8adb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  span {
    color: #1c8adb;
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
`;

export default Auth;

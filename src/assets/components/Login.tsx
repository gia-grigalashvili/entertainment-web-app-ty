import { useState } from "react";
import Logo from "/public/assets/logo.svg";
import styled from "styled-components";

function Login({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      repeatPassword: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, repeatPassword } = formData;
    if (password.length <= 7) {
      setError("Password must be more than 7 characters");
      return;
    }

    if (isLogin) {
      // Handle login
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        onLoginSuccess();
      } else {
        setError("Invalid email or password");
      }
    } else {
      // Handle registration
      if (password !== repeatPassword) {
        setError("Passwords do not match");
        return;
      }
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Registration successful!");
      toggleForm();
    }
  };

  return (
    <Loginmain>
      <img src={Logo} alt="Logo" />
      <Maindiv>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={formData.repeatPassword}
              onChange={handleChange}
              required
            />
          )}
          {error && <p className="error">{error}</p>}
          <button type="submit">
            {isLogin ? "Login to your account" : "Create your account"}
          </button>
        </form>
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export default Login;

import React, { useState } from "react";
import Login from "./assets/components/Login";
import Navigation from "./assets/components/Nvigation";
import Searchinput from "./assets/components/Searchinput";
import Movie from "./assets/components/Movie";
import MOVElibrary from "./assets/components/MOVElibrary";
import Movieee from "./assets/components/Movieee"; // Ensure this component exists and is correctly implemented
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleCategoryChange = (category, subCategory = "") => {
    setSelectedCategory(category);
    setSubCategory(subCategory);
  };

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Navigation onCategoryChange={handleCategoryChange} />
          <Searchinput />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Movie
                    category={selectedCategory}
                    subCategory={subCategory}
                  />
                  <MOVElibrary
                    category={selectedCategory}
                    subCategory={subCategory}
                  />
                </>
              }
            />
            <Route
              path="/movie"
              element={
                <Movieee
                  category={selectedCategory}
                  subCategory={subCategory}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;

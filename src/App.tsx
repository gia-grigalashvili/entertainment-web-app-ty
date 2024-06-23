import React, { useState } from "react";
import Login from "./assets/components/Login";
import Nvigation from "./assets/components/Nvigation";
import Searchinput from "./assets/components/Searchinput";
import Movie from "./assets/components/Movie";
import MOVElibrary from "./assets/components/MOVElibrary";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Nvigation onCategoryChange={handleCategoryChange} />
          <Searchinput />
          <Movie category={selectedCategory} />
          <MOVElibrary></MOVElibrary>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;

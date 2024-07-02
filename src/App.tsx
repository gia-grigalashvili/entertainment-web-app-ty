import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/components/Login";
import Navigation from "./assets/components/Nvigation";
import Searchinput from "./assets/components/Searchinput";
import Movie from "./assets/components/Movie";
import MOVElibrary from "./assets/components/MOVElibrary";
import Movieee from "./assets/components/Movieee";
import Series from "./assets/components/Series";
import Data from "./data.json"; // Ensure the correct path
import styled from "styled-components";
import Save from "./assets/components/Save";

interface MovieData {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [data, setData] = useState<MovieData[]>(
    Data.map((item) => ({
      ...item,
      thumbnail: {
        trending: item.thumbnail.trending || { small: "", large: "" },
        regular: item.thumbnail.regular,
      },
    }))
  );
  const [selectedCategory, setSelectedCategory] = useState(
    "Recommended for you"
  );
  const [subCategory, setSubCategory] = useState("Trending");
  const [query, setQuery] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleCategoryChange = (category: string, subCategory: string = "") => {
    setSelectedCategory(category);
    setSubCategory(subCategory);
  };

  const toggleBookmark = (title: string) => {
    const updatedData = data.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
        };
      }
      return item;
    });

    setData(updatedData);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <MainStyle>
            <Navigation onCategoryChange={handleCategoryChange} />
            <div>
              <Searchinput onSearch={handleSearch} />

              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Movie
                        Data={filteredData} // Pass filteredData instead of Data
                        subCategory={subCategory}
                        toggleBookmark={toggleBookmark}
                      />
                      <MOVElibrary
                        toggleBookmark={toggleBookmark}
                        Moviedata={filteredData}
                        category={selectedCategory}
                      />
                    </>
                  }
                />
                <Route
                  path="/movie"
                  element={
                    <Movieee
                      toggleBookmark={toggleBookmark}
                      Moviedata={filteredData.filter(
                        (item) => item.category === "Movie"
                      )}
                      category={selectedCategory}
                    />
                  }
                />
                <Route
                  path="/series"
                  element={
                    <Series
                      Moviedata={filteredData.filter(
                        (item) => item.category === "TV Series"
                      )}
                      category={selectedCategory}
                      toggleBookmark={toggleBookmark}
                    />
                  }
                />
                <Route
                  path="/bookmark"
                  element={
                    <Save
                      Moviedata={filteredData.filter(
                        (item) => item.isBookmarked
                      )}
                      toggleBookmark={toggleBookmark}
                    />
                  }
                />
              </Routes>
            </div>
          </MainStyle>
        </BrowserRouter>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

const MainStyle = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    padding: 30px;
  }
`;

export default App;

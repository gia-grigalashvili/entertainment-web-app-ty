import { useState } from "react";
import Login from "./assets/components/Login";
import Nvigation from "./assets/components/Nvigation";
import Searchinput from "./assets/components/Searchinput";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Nvigation />
          <Searchinput />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Users, Test } from "./pages";
import { Navbar } from "./components";
import Stuff from "./pages/stuff/Stuff";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  const [id, setId] = useState();

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users setId={setId} id={id} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/stuff" element={<Stuff />} />
      </Routes>
    </div>
  );
}

export default App;

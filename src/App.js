import Register from "./Pages/Register.js";
import Genre from "./Pages/Genre.js";
import Browwse from "./Pages/Browwse.js";
import Movies from "./Pages/Movies.js";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/browwse" element={<Browwse />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;

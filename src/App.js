import Register from "./Pages/Register.js";
import Genre from "./Pages/Genre.js";
import Browwse from "./Pages/Browwse.js";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/browwse" element={<Browwse />} />
      </Routes>
    </>
  );
}

export default App;

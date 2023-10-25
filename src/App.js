import Register from "./Pages/Register.js";
import Genre from "./Pages/Genre.js";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>
    </>
  );
}

export default App;

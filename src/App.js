import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/home/:homeId" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

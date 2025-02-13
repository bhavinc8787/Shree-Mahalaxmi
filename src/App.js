import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Section3 from "./pages/Home/Section3";
import About from "./pages/Home/Aboutus.js";
// import ContactMe from "./components/Layouts/ContactUs.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Section3 />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactMe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

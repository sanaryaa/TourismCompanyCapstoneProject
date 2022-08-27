
import "./App.css";
import FooterSec from "./components/FooterSec";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Resort from "./pages/Resort";
import Hotel from "./pages/Hotel";

import About from "./pages/About";

import 'leaflet/dist/leaflet.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resort" element={<Resort />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/About" element={<About />} />
      </Routes>
        <FooterSec />
    </>
  );
}

export default App;

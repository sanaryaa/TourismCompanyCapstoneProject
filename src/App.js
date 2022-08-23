
import "./App.css";
import FooterSec from "./components/FooterSec";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Resort from "./pages/Resort";
import Hotel from "./pages/Hotel";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'leaflet/dist/leaflet.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resort" element={<Resort />} />
        {/* <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
        <FooterSec />
    </>
  );
}

export default App;

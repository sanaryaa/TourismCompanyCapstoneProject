import Navigation from "./components/Navigation";
import "./App.css";
import Welcome from "./components/Welcome";
import Myacount from "./components/Myacount";
import ResortCard from "./components/ResortCard";
import HotelCard from "./components/HotelCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import ResturantCard from "./components/ResturantCard";
import About from './components/About.js'
function App() {
  return (
    <>
      <div className="w-full h-screen bg-spring bg-no-repeat bg-center bg-100 flex items-center justify-end ">
        <Navigation />
        <Welcome />
        <Myacount />
      </div>
      <div className="w-full h-screen mt-[1%] ">
        <ResortCard/>
      </div>
      <div className="w-full h-screen flex items-center justify-start">
        <HotelCard/>
      </div>
      <div className="w-full h-[90vh] mt-[5%]">
        <ResturantCard/>
      </div>
      <div className="w-full h-[70vh] bg-tree">
        <App />
      </div>
    </>
  );
}

export default App;

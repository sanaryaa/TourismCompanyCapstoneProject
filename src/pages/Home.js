import Welcome from "../components/Welcome";
import Myacount from "../components/Myacount";
import ResortSec from "../components/ResortSec";
import HotelSec from "../components/HotelSec"
import ResturantSec from "../components/ResturantSec";
import About from '../components/About.js'
import Navigation from "../components/Navigation";
import HeroSec from "../components/HeroSec";

export default function () {
  return (
    <>
    <HeroSec/>
      <div className="w-full h-screen mt-[1%] ">
        <ResortSec />
      </div>
      <div className="w-full h-screen flex items-center justify-start">
        <HotelSec />
      </div>
      <div className="w-full h-[90vh] mt-[5%]">
        <ResturantSec/>
      </div>
      <div className="w-full h-[30vh] mt-[2%] ">
        <About />
      </div>
    </>
  );
}

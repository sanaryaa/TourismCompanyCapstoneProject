import bg1 from "../img/bg1.jpg";
import Myacount from "./Myacount";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
export default function () {
  return (
    <div className="w-full h-screen bg-sea bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full backdrop-blur-sm flex flex-col">
        <Navigation />
        <div className="w-full h-[90%] flex items-center justify-center">
        <Welcome/>
        <Myacount/>
        </div>
        
        
      </div>
    </div>
  );
}

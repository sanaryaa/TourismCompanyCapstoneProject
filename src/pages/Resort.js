import Filter from "../components/Filter";
import Navigation from "../components/Navigation";
import ResortCard from "../components/ResortCard";
// import ResortCard from "../components/ResortCard";

export default function Resort() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
       <div className="w-full h-[2%] flex items-center justify-center border-2 border-black">
        <Navigation />
        </div>
      <Filter />
    </div>
  );
}

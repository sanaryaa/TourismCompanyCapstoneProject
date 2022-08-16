import Filter from "../components/Filter";
import Navigation from "../components/Navigation";
import ResortCard from "../components/ResortCard";
// import ResortCard from "../components/ResortCard";

export default function Resort() {
  return (
    <div className="w-full h-[100%] flex flex-col items-center justify-center ">
      <div className="w-full h-[5%] ">
        <Navigation />
      </div>
      <Filter />
    </div>
  );
}

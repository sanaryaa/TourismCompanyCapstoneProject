import logo from "../img/logo.png";
import "../fonts/rudawregular2.ttf";
import Resort from "../pages/Resort.js";
import Hotel from "../pages/Hotel.js";
import Restaurant from "../pages/Restaurant.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import { Link } from "react-router-dom";

const pages = [
  { page: "ماڵەوە", path: "/" },
  { page: "هاوینەهەوار", path: "/Resort" },
  { page: "هۆتێل", path: "/Hotel" },
  { page: "ڕێستۆرانت", path: "/Restaurant" },
  { page: "دەربارە", path: "/About" },
  { page: "پەیوەندی", path: "/Contact" },
];
function Navigation() {
  return (
    <div className="w-full h-[5%] backdrop-blur  flex justify-center items-center">
      <div className="h-full w-[40%] flex flex-col items-center justify-center  mr-[7%]">
        <nav className=" h-full w-full flex   ">
          {pages.map((page) => {
            return (
              <Link
                to={page.path}
                className="no-underline  text-black rudaw-font text-[20px] w-[17%] h-full flex  justify-center items-center"
              >
                {page.page}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="w-[50%] ml-[7%] h-full flex items-center justify-end">
        <img src={logo} className="w-20 h-20 " />
      </div>
    </div>
  );
}

export default Navigation;

import logo from "../img/logo.png";
import "../fonts/rudawregular2.ttf";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

const pages = [
  {
    page: "https://img.icons8.com/ios-glyphs/27/000000/home.png",
    path: "/",
  },
  {
    page: "https://img.icons8.com/ios-glyphs/27/000000/beach.png",
    path: "/Resort",
  },
  {
    page: "https://img.icons8.com/ios-glyphs/27/000000/hotel-star.png",
    path: "/Hotel",
  },
  {
    page: "https://img.icons8.com/ios-glyphs/27/000000/restaurant.png",
    path: "/Restaurant",
  },
  {
    page: "https://img.icons8.com/ios-glyphs/27/000000/about.png",
    path: "/About",
  },
];
const Style={
  width:'10%',
  paddingTop:'5%',
  background:'rgba(0,0,0,0.001)',
  boxShadow:'none',
  marginRight:'4%'
}
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-[85%] h-full flex items-center justify-center border-2 border-black ">
      <div className="w-1/2 h-[10%] flex items-center justify-start  ">
        <button onClick={toggleDrawer}>
        <img src="https://img.icons8.com/material-rounded/30/000000/menu--v1.png"/>
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          style={Style}
        >
          <div className="w-full h-[50%] flex flex-col items-center justify-around mt-[70%]">
            {pages.map((page, index) => {
              return (
                <Link to={page.path} className=" bg-white rounded-[50%] lg:p-[7%] md:p-[5%] sm:p-[10%] sm:hover:p-[15%]">
                  <img src={page.page} />
                </Link>
              );
            })}
          </div>
        </Drawer>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end ">
        <img src={logo} className="w-[20%] h-full" />
      </div>
    </div>
  );
}

export default Navigation;

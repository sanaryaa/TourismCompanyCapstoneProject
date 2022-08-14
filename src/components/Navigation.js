import logo from "../img/logo.png";
import "../fonts/rudawregular2.ttf";
import Resort from "../pages/Resort.js";
import Hotel from "../pages/Hotel.js";
import Restaurant from "../pages/Restaurant.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";
import Modal from 'react-modal';
import {useState} from 'react'
import { borderRadius, color } from "@mui/system";

const pages = [
  {
    page: "https://img.icons8.com/ios/30/000000/home--v1.png",
    path: "/",
  },
  {
    page: "https://img.icons8.com/ios/30/000000/ski-resort.png",
    path: "/Resort",
  },
  {
    page: "https://img.icons8.com/ios/30/000000/hotel-star.png",
    path: "/Hotel",
  },
  {
    page: "https://img.icons8.com/ios/30/000000/restaurant-menu.png",
    path: "/Restaurant",
  },
  {
    page: "https://img.icons8.com/ios/30/000000/about.png",
    path: "/About",
  },
];
const customStyles = {
  content: {
   width:'5%',
   height:'full',
  },
  overlay:{
    background:'rgba(0,0,0,0.4)'
  }
};

function Navigation() {
  let subtitle;
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = 'rgba(0,0,0,0.4)';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-[85%] h-full mx-auto flex">
      <div className="w-[50%] h-full flex items-center justify-start">
        <button onClick={openModal}><img src="https://img.icons8.com/ios-glyphs/35/000000/menu--v1.png"/></button>
      </div>
      <div className="w-[50%] h-full flex items-center justify-end">
        <img src={logo} className="w-20 h-20 " />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}><img src="https://img.icons8.com/ios-glyphs/25/000000/delete-sign.png"/></button>
        <nav className="w-full flex items-center flex-col justify-center h-[60%] ">
          {pages.map((page) => {
            return (
              <Link
                to={page.path}
                className="no-underline  text-black rudaw-font text-[20px] w-full h-[20%] flex  justify-center items-center"
              >
                <img src={page.page}/>
              </Link>
            );
          })}
      </nav>
      </Modal>
    </div>
  );
}

export default Navigation;

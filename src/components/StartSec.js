import React from "react";
import rawanduz from "../img/rawanduz1.jpg";
import toranj from "../img/toranj1.jpg";
import rotana from "../img/rotana.jpg";
import ContactSec from "./ContactSec";
import { Link } from "react-router-dom";



const content = [
  {
    img: rawanduz,
    title: "زیاتر ببینە",
    path:'/Resort'
  },
  {
    img: toranj,
    title: "زیاتر ببینە",
    path:'/Retaurant'
  },
 
];
const icons=[
  {
    img:'https://img.icons8.com/ios/30/000000/service-bell.png',
  },
  {
    img:'https://img.icons8.com/ios/30/000000/trust--v1.png',
  },
  {
    img:'https://img.icons8.com/ios/30/000000/security-checked.png',
  },
 
]

export default function StartSec() {
  return (
    <div className="w-[85%] h-[60%] mx-auto ">
      <div className="w-full h-[20%] flex items-center justify-center">
      <input  className="w-[70%] text-black h-[15%] p-[2.5%]  focus:outline-none shadow-md rounded-3xl" icon="search" placeHolder="گەڕان.."/>
      </div>
      <div className="w-[80%] h-[25%] flex items-center justify-around mx-auto">
          <div className="w-[13%] h-[70%]  flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow ">
            <img src="https://img.icons8.com/ios/50/000000/service-bell.png"/>
          </div>
          <div className="w-[13%] h-[70%]  flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow ">
            <img src="https://img.icons8.com/ios/50/000000/trust--v1.png"/>
          </div>
          <div className="w-[13%] h-[70%] flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow">
            <img src="https://img.icons8.com/ios/50/000000/security-checked.png" className=""/>
          </div>
      </div>
      <div className="w-[80%] h-[78%] flex items-center justify-around mt-[2%] mx-auto">
        {
          content.map((content,index)=>{
            return(
              <div className="w-[45%] h-full rounded-lg ">
                <img src={content.img} className=" h-full w-full object-contain rounded-lg  "/>
                <button className="absolute top-[45%] bg-white w-[7%] h-[5%] rounded-tl-lg rounded-bl-lg"><Link to={content.path} className="no-underline text-black rudaw-font text-[18px]">زیاتر ببینە</Link></button>
              </div>
            )
          })
        }
      </div>
      <div className="w-full h-[20%]">
        <ContactSec/>
      </div>
    </div>
  );
}

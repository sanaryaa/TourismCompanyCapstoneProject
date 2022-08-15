import React from "react";
import rawanduz from "../img/rawanduz1.jpg";
import toranj from "../img/toranj1.jpg";
import rotana from "../img/rotana.jpg";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const content = [
  {
    img: rawanduz,
    title: "هاوینەهەوار",
    path:'/Resort'
  },
  {
    img: rotana,
    title: "هۆتێل",
    path:'/Hotel'
  },
  {
    img: toranj,
    title: "خواردنگە",
    path:'/Retaurant'
  },
 
];
const icons=[
  {
    img:'https://img.icons8.com/ios/30/000000/service-bell.png',
  },
]

export default function StartSec() {
  return (
    <div className="w-[85%] h-[60%] mx-auto ">
      <div className="w-full h-[20%] flex items-center justify-center ">
      <input  className="w-[70%] text-black h-[15%] p-[2.5%]  focus:outline-none border-b-[1px] border-black" placeHolder="گەڕان.."/>
      </div>
      <div className="w-full h-[20%] flex items-center justify-around">
        {icons.map((icon)=>{
          <div className="w-[25%] h-full">
            <img src={icon.img}/>
          </div>
        })}
      </div>
      <div className="w-full h-[60%] flex items-center justify-around">
        {content.map((content) => {
          return (
          <div className="card border-0 w-[30%] h-full mt-[0] hover:mt-[1%]">
            <img src={content.img} className="object-cover h-full rounded-md "/>
            <botton className="absolute top-[15%] text-base flex items-center justify-center b bg-white rudaw-font w-[50%] h-[10%] rounded-tl-sm rounded-bl-sm"><a href={content.path} className="no-underline text-black">زیاتر ببینە</a></botton>
          </div>
          )
        })}
      </div>
    </div>
  );
}

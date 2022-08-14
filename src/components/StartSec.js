import React from "react";
import rawanduz from "../img/rawanduz1.jpg";
import toranj from "../img/toranj1.jpg";
import rotana from "../img/rotana.jpg";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const content = [
  {
    img: rawanduz,
    title: "رەواندوز",
    path:'/Resort'
  },
  {
    img: rotana,
    title: "هۆتێلی ڕۆتانا",
    path:'/Hotel'
  },
  {
    img: toranj,
    title: "تۆرەنج ڕێستۆرانت",
    path:'/Retaurant'
  },
 
];
export default function StartSec() {
  return (
    <div className="w-[85%] h-[70%] mx-auto">
      <div className="w-full h-[20%] flex items-start justify-start border-2  border-black ">
        <h4 className="rudaw-font w-[40%] text-[30px]">
          با چێژ لە پشووەکانمان وەربگرین!
        </h4>
      </div>
      <div className="w-full h-[20%] ">

      </div>
      <div className="w-full h-[60%] flex items-center justify-around border-2  border-black">
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

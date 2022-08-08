import { Card, Button } from "react-bootstrap";
import gomifelaw from "../img/gomifelaw-choman2.jpg";
import rawanduz from "../img/rawanduz1.jpg";
import golle from "../img/golle1.jpg";
import tree from "../img/tree.png"
import { useState, useEffect } from "react";
const cardInfo = [
  {
    img: gomifelaw,
    title: "گۆمی فێڵاو",
  },
  {
    img: rawanduz,
    title: "ڕەواندز",
  },
];

export default function ResortSec() {
  const [firstCard, setFirstCard] = useState(cardInfo[0]);
  const [secondCard, setSecondCard] = useState(cardInfo[1]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCard(cardInfo[1]);
  //   }, 3000);
  // },[]);

  return (
    <div className="w-full h-[80vh] flex  justify-center items-center ">
      <div className="w-[40%] h-full flex justify-center items-center gap-3 content-center ">
        <div className="card w-[40%] absolute top-[30%] right-[75%]  z-20 flex items-center justify-center ">
          <img src={firstCard.img} className="rounded-md" />
          <h5 className="absolute top-[15%] text-white rudaw-font w-[80%] h-[10%] flex items-center justify-center text-base backdrop-blur rounded-md">
            {firstCard.title}
          </h5>
        </div>
        <div className="card w-[70%] flex items-center justify-center">
          <img src={secondCard.img} className="rounded-md" />
          <h5 className="absolute top-[15%] text-white rudaw-font w-[60%] h-[7%] flex items-center justify-center text-base backdrop-blur rounded-md">
            {secondCard.title}
          </h5>
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col items-start pr-[15%] bg-white justify-center ">
        <div className="w-[80%] h-[60%] border-r-[2px] border-r-black pr-[2%] ">
          <h4 className="rudaw-font text-black text-3xl">
            دڵخوازترین شوێنەگەشتیارەکان
          </h4>
          <p className="rudaw-font text-green leading-[2rem] w-[100%]  text-end mt-5 ">
            ڕێبەرەکان تێڕوانینێکی گشتی لە شوێنێکی مەبەست دەدەن، لەوانە مێژوو و
            کولتوور و شوێنە گەشتیارییەکانی. دەتوانن بەسوود بن بۆ وەرگرتنی
            بیرۆکەیەک لەوەی کە دەتەوێت لە شوێنێکدا چی ببینیت و چی بکەیت پێش
            ئەوەی بچیتە ئەوێ.
          </p>
          <button className="text-white rudaw-font rounded-lg text-xl w-[20%] h-[2.5rem] mt-2 bg-black">
            زیاتر ببینە
          </button>
        </div>
      </div>
      <div className="w-[22%] h-[67%] border-8 border-white absolute left-[65%] top-[115%] "></div>
    </div>
  );
}

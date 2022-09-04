import React from "react";
import Navigation from "../components/Navigation";
import akre from "../img/akre3.jpg";
import rawanduz from "../img/rawanduz6.jpg";
import biara from "../img/biara1.jpg";
import sakran from "../img/sakran1.jpg";
import golle from "../img/golle1.jpg";
import tunibaba from "../img/tunibaba1.jpg";
import amedi from "../img/amedi3.jpg";

const cardData = [
 
  {
    name: "وەرتێ،رەواندز",
    day: "یەک ڕۆژ",
    money: "١٧ هەزار",
    services: "سەردانی کردنی (وەرتێ،شنگلبانە،جوندیان،ڕەواندز..)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "3",
    img: rawanduz,
    time: "18-11-2022",
  },
  {
    name: "هەورامان",
    day: "یەک ڕۆژ",
    money: "١٠ هەزار",
    services: "سەردانی کردنی(مزگەوتی گەورە،تەوێڵە ،بیارە .ئەحمەدئاوا)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "3.5",
    img: biara,
    time: "5-10-2022",
  },
  {
    name: "وەرتێ،باڵەکایەتی",
    day: "یەک ڕۆژ",
    money: "١٧ هەزار",
    services:
      "سەردانی کردنی(چۆمان،سەیرانگای سەکران،،شاخی پرژە،سەیرانگای برایانی شێخان)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "4.5",
    img: sakran,
    time: "30-8-2022",
  },
  {
    name: "پێنجوێن،گۆڵێ",
    day: "یەک ڕۆژ",
    money: "١٥ هەزار",
    services: "سەردانی کردنی(سەیرانگای گۆڵێ،بلیکان،ناو پێنجوێن)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "5",
    img: golle,
    time: "1-10-2022",
  },
  {
    name: "دەربەندیخان،سەرتەکی بەمۆ",
    day: "یەک ڕۆژ",
    money: "١٣ هەزار",
    services: "سەردانی کردنی(شەمێران،بێلولە،سەرتەکی بەمۆ،دەربەندیخان..)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "4.5",
    img: tunibaba,
    time: "15-9-2022",
  },
  {
    name: "ئاکرێ،رووباری ڕێزان",
    day: "سێ رۆژ",
    money: "٥٠ هەزار",
    services: "سەردانی کردنی(ئاکری،گەلیزەنتە،سەیرانگای سپیکە،خۆشکان،وەرتێ)",
    tip: "چونەژوورەوەی گەشتیار لە شوینەگەشتیاریەکان لەسەرخۆیەتی",
    rait: "5",
    img: amedi,
    time: "3-9-2022",
  },
];
export default function Trips() {
  return (
    <div className="w-full lg:h-[100%] flex flex-col items-center justify-center">
      <div className="w-full h-[12vh] flex items-center justify-center ">
        <Navigation />
      </div>
      <div className="w-full h-[10%] flex items-center justify-center">
        <div className="w-[35%] border-b-2 border-black"> </div>
        <h4 className="m-[2%] rudaw-font text-center"> نوێترین گەشتەکان </h4>
        <div className="w-[35%] border-b-2 border-black"> </div>
      </div>
      <div className="w-[85%] h-[80%] mt-[2%] grid lg:grid-cols-2 md:grid-cols-1 gap-[1%] ">
        {cardData.map((data,index) => {
          return (
            <div key={index} className="lg:w-[100%] md:w-[80%] mx-auto  sm:w-full h-full flex shadow-md hover:shadow-lg rounded-lg">
              <div className="w-[40%] h-full bg-white">
                <div className="w-[95%] h-full rounded-bl-[20px] rounded-tl-[20px]">
                  <img
                    src={data.img}
                    className="img w-full h-full object-cover rounded-tr-lg rounded-tb-lg rounded-bl-[20px] rounded-tl-[20px]"
                  />
                </div>
              </div>
              <div className="gradiant w-[60%] h-full flex flex-col  justify-center ">
                <h6 className="w-full rudaw-font text-[20px] text-black bg-[#F1F1F1] leading-[2rem] pr-[5%]">
                  {data.name}
                </h6>
                <p className="w-full text-gray-600 rudaw-font pr-[5%]">
                  {data.services}
                </p>
                <h6 className="rudaw-font text-red-800 pr-[5%]">
                  تێبینی: <span> {data.tip} </span>
                </h6>
                <h6 className="rudaw-font text-black  pr-[5%]">
                  بەروار: <span className="text-blue-500"> {data.time} </span>
                </h6>
                <h6 className="bg-[#90B77D] text-white text-[20px] w-[30%] sm:w-[35%] lg:h-[20%] md:h-[25%] rounded-tl-2xl rounded-bl-2xl flex items-center justify-center shadow-insetShadow">
                  {data.money}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

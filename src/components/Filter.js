import React, { createContext, useState } from "react";
import ResortCard from "./ResortCard";
import golle1 from "../img/golle1.jpg";
import golle2 from "../img/golle2.jpg";
import rawanduz1 from "../img/rawanduz1.jpg";
import rawanduz2 from "../img/rawanduz2.jpg";
import rawanduz3 from "../img/rawanduz3.jpg";
import rawanduz4 from "../img/rawanduz4.jpg";
import rawanduz5 from "../img/rawanduz5.jpg";
import rawanduz6 from "../img/rawanduz6.jpg";
import akre1 from "../img/akre1.jpg";
import akre2 from "../img/akre2.jpg";
import akre3 from "../img/akre3.jpg";
import amedi1 from "../img/amedi1.jpg";
import amedi2 from "../img/amedi2.jpg";
import amedi3 from "../img/amedi3.jpg";
import amedi4 from "../img/amedi4.jpg";
import bexal1 from "../img/bexal1.jpg";
import bexal2 from "../img/bexal2.jpg";
import bexal3 from "../img/bexal3.jpg";
import bexal4 from "../img/bexal4.jpg";
import bexal5 from "../img/bexal5.jpg";
import darbandixan1 from "../img/darbandixan1.jpg";
import darbandixan2 from "../img/darbandixan2.jpg";
import dolibalisan1 from "../img/dolibalisan1.jpg";
import dolibalisan2 from "../img/dolibalisan2.jpg";
import dolibalisan3 from "../img/dolibalisan3.jpg";
import dolibalisan4 from "../img/dolibalisan4.jpg";
import dolialan1 from "../img/dollialan1.jpg";
import dolialan2 from "../img/dollialan2.jpg";
import dollialan3 from "../img/dollialan4.jpg";
import dollialan4 from "../img/dollialan5.jpg";
import dukan1 from "../img/dukan1.jpg";
import dukan2 from "../img/dukan2.jpg";
import tabin1 from "../img/dukan-tabin1.jpg";
import tabin2 from "../img/dukan-tabin2.jpg";
import tabin3 from "../img/dukan-tabin3.jpg";
import galialibag1 from "../img/galialibag1.jpg";
import galialibag2 from "../img/galialibag2.jpg";
import galialibag3 from "../img/galialibag3.jpg";
import gomibekodian1 from "../img/gomibekodian1.jpg";
import gomibekodian2 from "../img/gomibekodian2.jpg";
import gomifelaw1 from "../img/gomifelaw-choman1.jpg";
import gomifelaw2 from "../img/gomifelaw-choman2.jpg";
import kanirash1 from "../img/kaniarash1.jpg";
import kanirash2 from "../img/kaniarash2.jpg";
import qasre1 from "../img/kanibast-qasre1.jpg";
import qasre2 from "../img/kanibast-qasre2.jpg";
import prdidalal1 from "../img/prdidalal1.jpg";
import prdidalal2 from "../img/prdidalal2.jpg";
import qadawa1 from "../img/qadawa-sangasar1.jpg";
import qadawa2 from "../img/qadawa-sangasar2.jpg";
import darbandirania1 from "../img/darbandirania1.jpg";
import darbandirania2 from "../img/darbandirania2.jpg";
import darbandirania3 from "../img/darbandirania3.jpg";
import sartakibamo1 from "../img/sartakibamo1.jpg";
import sartakibamo2 from "../img/sartakibamo2.jpg";
import sharbazher1 from "../img/sharbazher1.jpg";
import sharbazher2 from "../img/sharbazher2.jpg";
import sheladze1 from "../img/sheladze1.jpg";
import sheladze2 from "../img/sheladze2.jpg";
import sheladze3 from "../img/sheladze3.jpg";
import sheladze4 from "../img/sheladze4.jpg";
import sheladze5 from "../img/sheladze5.jpg";
import solav1 from "../img/solav1.jpg";
import solav2 from "../img/solav2.jpg";
import solav3 from "../img/solav3.jpg";
import solav4 from "../img/solav4.jpg";
import solav5 from "../img/solav5.jpg";
import solav6 from "../img/solav6.jpg";
import kanimaran1 from "../img/soran-kanimaran1.jpg";
import kanimaran2 from "../img/soran-kanimaran2.jpg";
import tunibaba1 from "../img/tunibaba1.jpg";
import tunibaba2 from "../img/tunibaba2.jpg";
import sirwan1 from "../img/sirwan1.jpg";
import sirwan2 from "../img/sirwan2.jpg";
import taqtaq1 from "../img/taqtaq1.jpg";
import taqtaq2 from "../img/taqtaq2.jpg";
import chamirezan1 from "../img/chamirezan1.jpg";
import chamirezan2 from "../img/chamirezan2.jpg";

const resort = [
  {
    name: "گۆمی فێڵاو",
    description:
      "گۆمی فێڵاو نۆ کیلۆمەتر لە باشووری قەزای چۆمان دوورە. بەو پێیەی گۆمەکە دەکەوێتە بەرامبەر چیای حەساری سەکران، ئەو چیایەی لە چوار وەرزی ساڵ بەفری تێدا دەمێنێتەوە و جوانیێکی دڵڕفێنی بە ناوچەکە بەخشیوە.",
    img: [gomifelaw1, gomifelaw2],
    location: "hawler",
    rait: "3.5",
    id:'1'
  },
  {
    name: "ڕەواندز",
    description:
      "ڕەواندز شارێکە کە دەکەوێتە پارێزگای ھەولێر، عێراق،قەزایەکە چواردەورە کراوە بە چیاوە، چیای کۆڕەک لە باشوورییەوە، چیای ھەندرێن لە باکوورییەوە، چیای زۆزیک لە ڕۆژئاوایەوە و چیای برادۆست لە ژۆژھەڵاتییەوە.",
    img: [rawanduz1, rawanduz2, rawanduz3, rawanduz4, rawanduz5, rawanduz6],
    location: "hawler",
    rait: "4",
    id:'2'
  },
  {
    name: "ئاکرێ",
    description:
      "ئاکرێ شارۆچکەیەکی باشووری کوردستانە و سەر بە پارێزگای دھۆکە،ەنێوان سێ چیادایە، خانووەکانی لەسەر یەک بەداوێنی شاخەکاندا ھەڵچوون. ئەمە دیمەنێکی جوان و سەرنجڕاکێشی بە شارەکە بەخشیوە",
    img: [akre1, akre2, akre3],
    location: "dhok",
    rait: "5",
    id:'3'
  },
  {
    name: "گۆڵێ",
    description:
      "گۆڵێ گوندێکە، کەوتووەتە ناحیەی گەرمک لەقەزای پێنجوێن سەر بە پارێزگای سلێمانی",
    img: [golle1, golle2],
    location: "slemani",
    rait: "4",
    id:'4'
  },
  {
    name: "ئامێدی",
    description:
      "ئامێدی شارۆچکەیەکی سەر بە پارێزگای دهۆک. کە کەوتووەتە سەر تاشەبەردێکی زۆر گەورەی سەر شاخێک",
    img: [amedi1, amedi2, amedi3, amedi4],
    location: "dhok",
    rait: "3",
    id:'5'
  },
  {
    name: "چەمی ڕێزان",
    description: " سەر بە قەزای دۆكانی سنووری پارێزگای سلێمانییە",
    img: [chamirezan1],
    location: "slemani",
    rait: "4",
    id:'6'
  },
  {
    name: "بێخاڵ",
    description:
      "اڤگەی بێخاڵ‌ دەکەوێتە قەزای ڕەواندز لە پارێزگای ھەولێر، ١١٢ کم لە چەقی ھەولێرەوە دوورە، دەکەوێتە ڕۆژھەڵاتی تاڤگەی گەلی عەلی بەگ. دەتوانین بگەین بە بێخاڵ لە ڕێگای گەلی عەلی بەگ یان لە ڕێگای ڕەواندز.",
    img: [bexal1, bexal2, bexal3, bexal4, bexal5],
    location: "hawler",
    rait: "4.5",
    id:'7'
  },

  {
    name: "دەربەندیخان",
    description:
      "شارۆچکەیەکە کەوتووەتە باشوری ڕۆژهەڵاتی پارێزگای سلێمانی، لە ڕوی گەشتوگوزارەوە گرنگییەکی تایبەتی ھەیە بەھۆی بەنداوی دەربەندیخان، دواتر بەھۆی تونێلی دەربەندیخانەوە گەشتوگوزار زیاتر گەشەی کردووە.",
    img: [darbandixan1, darbandixan2],
    location: "slemani",
    rait: "4",
    id:'8'
  },
  {
    name: "دۆلی بالیسان",
    description:
      "ناحیەی بالیسان، دەکەوێتە رۆژئاوای شاری سلێمانی، و سەر بە پارێزگای ھەولێرە",
    img: [dolibalisan1, dolibalisan2, dolibalisan3],
    location: "hawler",
    rait: "4",
    id:'9'
  },
  {
    name: "دۆڵی ئالان",
    description:
      "ئەم شوێنە نزیكەی 15 کیلۆمەتر لە باشووری خۆرهەڵاتی شارۆچكەی خەلیفان دوورە و لەسەر رێگای نێوان خەلیفان - بالیسانە و رووباری ئالانەی پێدا دەڕوات",
    img: [dolialan1, dolialan2, dollialan3],
    location: "hawler",
    rait: "3",
    id:'10'
  },
  {
    name: "دووکان",
    description:
      "قەزای دوکان یەکێکە لە قەزای پارێزگای سلێمانی لە باشوری کوردستان لە ڕوی گەشت و گوزارەوە بەھۆی دەریاچە یاخود بەنداوی دوکان و ھەڵکەوتە جوگرافی و کەش و ھەوایەکەوە. ",
    img: [dukan1, dukan2],
    location: "slemani",
    rait: "4",
    id:'11'
  },
  {
    name: "تابین",
    description: "هاوینەهەواری تەنگی تابین سەر بە شارۆچکەی دوکان ",
    img: [tabin1, tabin2, tabin3],
    location: "slemani",
    rait: "3.5",
    id:'12'
  },
  {
    name: "گەلی عەلی بەگ",
    description:
      "یەکێکە لە تاڤگەکانی باشووری کوردستان. ناوچەیەکی گەشت و گوزاریییە و چەندین سەردانکەر لە شارەکانی ترەوە بەتایبەت باشووری عێراقەوەسەردانی دەکەن سەر بە یارێزگای هەولێرە",
    img: [galialibag1, galialibag2, galialibag3],
    location: "hawler",
    rait: "4",
    id:'13'
  },
  {
    name: "گۆمی بێکۆدیان",
    description:
      "گۆمی بێکۆدیان دەکەوێتە پارێزگای هەولێر سنوری باڵەکایەتی لە قەزای چۆمان لە زنجیرە چیاکانی زاگرۆس لە سەر چیای حەساری سەکران ",
    img: [gomibekodian1, gomibekodian2],
    location: "hawler",
    rait: "5",
    id:'14'
  },

  {
    name: "قەسرێ",
    description: "قەسرێ یەکێکە لە ناحیەکانی قەزای چۆمان، لە پارێزگای ھەولێر",
    img: [qasre1, qasre2],
    location: "hawler",
    rait: "3",
    id:'15'
  },
  {
    name: "پردی دەلال",
    description:
      "پردی دەلال پردێکی کۆن و مێژوویییە دەکەوێتە ڕۆژھەڵاتی شارۆچکەی زاخۆ.ئەوانەی سەردانی پردەکە دەکەن زۆرینەیان گەشتیارن و بەمەبەستی وێنەگرتن لەپاڵی سەردانی دەکەن.",
    img: [prdidalal1, prdidalal2],
    location: "dhok",
    rait: "4",
    id:'16'
  },
  {
    name: "قاداوا",
    description: "قاداوا سەر بە ناحیەی سەنگەسەر -قەڵادزێ -پارێزگای سلێمانی",
    img: [qadawa1, qadawa2],
    location: "slemani",
    rait: "5",
    id:'17'
  },
  {
    name: "سیروان",
    description:
      "ناحیەی سیروان یەکێکە لە شوێنە گەشتیارەکانی سەر بە پارێزگای هەڵەبجە ،کە بە هۆی بوونی بەنداوی سیروانەوە ساڵانە گەشتیار سەردانی دەکات",
    img: [sirwan1, sirwan2],
    location: "slemani",
    rait: "3.4",
    id:'18'
  },

  {
    name: "سەرتەکی بەمۆ",
    description:
      "سەیرانگای سەرتەکی بەمۆ، دەکەوێتە بناری شاخی بەمۆ، بەهۆی کەشوهەوا گونجاوەکەی و دڵگیریی سروشتی ناوچەکە، ساڵانە گەشتیارێکی زۆر ڕوو لەو سەیرانگایە دەکەن.,سەر بەقەزای خانەقینە",
    img: [sartakibamo1, sartakibamo2],
    location: "slemani",
    rait: "5",
    id:'19'
  },
  {
    name: "شارباژێر",
    description:
      "ناوچەیەکی پارێزگای سلێمانییە کەوتۆتە باکوری ڕۆژهەڵاتییەوە. لەڕووی ئیدارییەوە لە قەزای چوارتا",
    img: [sharbazher1, sharbazher2],
    location: "slemani",
    rait: "3",
    id:'20'
  },
  {
    name: "سۆلاڤ",
    description:
      "سۆلاڤ هاوینگەیەکە بەدووری 4کم دەکەوێتە باکووری ڕۆژئاوای شارۆچکەی ئامێدی، لەناو دۆڵێکدایە کە بەدار و درەخت دەورە دراوە، ئاوێکی سازگار لەبناری چیاوە هەڵدەقوڵێ بەناو سۆلاڤ شۆڕدەبێتەوە بۆناو باخچەکانی ئامێدی دەڕوات.",
    img: [solav1, solav2, solav3, solav4, solav5, solav6],
    location: "dhok",
    rait: "3.25",
    id:'21'
  },
  {
    name: "شیلادزێ",
    description:
      "ناحیا شێلادزێ دکەڤیتە ڕۆژهەلاتێ قەزا ئامێدی سەر ب پارێزگەها دهۆکێ",
    img: [sheladze1, sheladze2, sheladze3, sheladze4, sheladze5],
    location: "dhok",
    rait: "4.5",
    id:'22'
  },
  {
    name: "کانی ماران",
    description:
      "گوندێکە، کەوتووەتە ناحیەی حاجیاوا، قەزای ڕانیە، پارێزگای سلێمانی، باشووری کوردستان",
    img: [kanimaran1, kanimaran2],
    location: "slemani",
    rait: "2.5",
    id:'23'
  },
  {
    name: "تونی بابا",
    description:
      "ئەم دۆڵە جوانە سەرسوڕهێنەرێکی سروشتی ڕاستەقینەیە دەکەوێتە نێوان شاری دەربەندیخان و شاری کەلار و بە شێوەیەکی سروشتی بە ئاو و با دروستکراوە.",
    img: [tunibaba1, tunibaba2],
    location: "slemani",
    rait: "4",
    id:'24'
  },
  {
    name: "تەق تەق",
    description:
      "تەق تەق شارۆچکەیەکی خنجیلانەیە سەر بە قەزای کۆیە کەوتۆتە لای ڕاستی زێی بچووک",
    img: [taqtaq1, taqtaq2],
    location: "hawler",
    rait: "3.75",
    id:'25'
  },
  {
    name: "کانی ڕەش",
    description:
      "یەکێکە لە تاڤگە جوان و دڵگیرەکانی کوردستان لە بناری بێکۆدیانو پرژێ و دەڤەری باڵەکایەتی",
    img: [kanirash1, kanirash2],
    location: "hawler",
    rait: "4",
    id:'26'
  },
  {
    name: "دەربەندی رانیە",
    description:
      "دەربەندی ڕانیە کەوتووەتە ئیدارەی ڕاپەڕین. لە ڕووی ئیدارییەوە سەر بە ناحیەی سەنگەسەرە لە قەزای پشدەر، پارێزگای سلێمانی، باشووری کوردستان",
    img: [darbandirania1, darbandirania2, darbandirania3],
    location: "slemani",
    rait: "3.5",
    id:'27'
  },
];

export const Context = createContext([]);

export default function Filter() {
  const [data, setData] = useState(resort);
  
  const filter = (button) => {
    if (button == "all") {
      setData(resort);
      return;
    }
    
    const filteredData = resort.filter((dataList) => dataList.location == button);
      setData(filteredData);
  };

  return (
    <>
      <div className="h-[25%] w-[80%] ">
        <select className="w-[20%] h-full shadow-md text-black text-[20px] rudaw-font text-center rounded-md focus:outline-none focus:shadow-insetShadow">
          <option
            onClick={() => {
              filter("all");
            }}
            
          >
            هەمووی
          </option>
          <option
            onClick={() => {
              filter("slemani");
            }}
          >
            سلێمانی
          </option>
          <option
            onClick={() => {
              filter("hawler");
            }}
          >
            ‌هەولێر
          </option>
          <option
           value="dhok"
            onChange={() => {
              filter("dhok");
            }}
          >
            دهۆک
          </option>
        </select>
      </div>
      <Context.Provider value={data}>
        <ResortCard />
      </Context.Provider>
    </>
  );
}

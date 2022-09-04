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
import dolialan1 from "../img/dollialan1.jpg";
import dolialan2 from "../img/dollialan2.jpg";
import dollialan3 from "../img/dollialan4.jpg";
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


const resort = [
  {
    name: "گۆمی فێڵاو",
    description:
      "گۆمی فێڵاو نۆ کیلۆمەتر لە باشووری قەزای چۆمان دوورە. بەو پێیەی گۆمەکە دەکەوێتە بەرامبەر چیای حەساری سەکران، ئەو چیایەی لە چوار وەرزی ساڵ بەفری تێدا دەمێنێتەوە و جوانیێکی دڵڕفێنی بە ناوچەکە بەخشیوە.",
    img: [gomifelaw1, gomifelaw2],
    location: "hawler",
    rait: "3.5",
    id: "1",
    long:'36.62107296484547, 44.928616395678254'
  },
  {
    name: "ڕەواندز",
    description:
      "ڕەواندز شارێکە کە دەکەوێتە پارێزگای ھەولێر، عێراق،قەزایەکە چواردەورە کراوە بە چیاوە، چیای کۆڕەک لە باشوورییەوە، چیای ھەندرێن لە باکوورییەوە، چیای زۆزیک لە ڕۆژئاوایەوە و چیای برادۆست لە ژۆژھەڵاتییەوە.",
    img: [rawanduz1, rawanduz2, rawanduz3, rawanduz4, rawanduz5, rawanduz6],
    location: "hawler",
    rait: "4",
    id: "2",
    long:'36.60822372846324, 44.523768358384345'
  },
  {
    name: "ئاکرێ",
    description:
      "ئاکرێ شارۆچکەیەکی باشووری کوردستانە و سەر بە پارێزگای دھۆکە،ەنێوان سێ چیادایە، خانووەکانی لەسەر یەک بەداوێنی شاخەکاندا ھەڵچوون. ئەمە دیمەنێکی جوان و سەرنجڕاکێشی بە شارەکە بەخشیوە",
    img: [akre1, akre2, akre3],
    location: "dhok",
    rait: "5",
    id: "3",
    long:'36.74537859308823, 43.87514597412914'
  },
  {
    name: "گۆڵێ",
    description:
      "گۆڵێ گوندێکە، کەوتووەتە ناحیەی گەرمک لەقەزای پێنجوێن سەر بە پارێزگای سلێمانی",
    img: [golle1, golle2],
    location: "slemani",
    rait: "4",
    id: "4",
    long:'35.776950144699015, 45.82645634168087'
  },
  {
    name: "ئامێدی",
    description:
      "ئامێدی شارۆچکەیەکی سەر بە پارێزگای دهۆک. کە کەوتووەتە سەر تاشەبەردێکی زۆر گەورەی سەر شاخێک",
    img: [amedi1, amedi2, amedi3, amedi4],
    location: "dhok",
    rait: "3",
    id: "5",
    long:'37.09415755614353, 43.48786366123484'
  },
  {
    name: "چەمی ڕێزان",
    description: " سەر بە قەزای دۆكانی سنووری پارێزگای سلێمانییە",
    img: [chamirezan1],
    location: "slemani",
    rait: "4",
    id: "6",
    long:'35.79668713164455, 44.97500679935287'
  },
  {
    name: "بێخاڵ",
    description:
      "اڤگەی بێخاڵ‌ دەکەوێتە قەزای ڕەواندز لە پارێزگای ھەولێر، ١١٢ کم لە چەقی ھەولێرەوە دوورە، دەکەوێتە ڕۆژھەڵاتی تاڤگەی گەلی عەلی بەگ. دەتوانین بگەین بە بێخاڵ لە ڕێگای گەلی عەلی بەگ یان لە ڕێگای ڕەواندز.",
    img: [bexal1, bexal2, bexal3, bexal4, bexal5],
    location: "hawler",
    rait: "4.5",
    id: "7",
    long:'36.61971469936444, 44.5078206766173'
  },

  {
    name: "دەربەندیخان",
    description:
      "شارۆچکەیەکە کەوتووەتە باشوری ڕۆژهەڵاتی پارێزگای سلێمانی، لە ڕوی گەشتوگوزارەوە گرنگییەکی تایبەتی ھەیە بەھۆی بەنداوی دەربەندیخان، دواتر بەھۆی تونێلی دەربەندیخانەوە گەشتوگوزار زیاتر گەشەی کردووە.",
    img: [darbandixan1, darbandixan2],
    location: "slemani",
    rait: "4",
    id: "8",
    long:'35.129753692128766, 45.72960377213029'
  },
  {
    name: "دۆلی بالیسان",
    description:
      "ناحیەی بالیسان، دەکەوێتە رۆژئاوای شاری سلێمانی، و سەر بە پارێزگای ھەولێرە",
    img: [dolibalisan1, dolibalisan2, dolibalisan3],
    location: "hawler",
    rait: "4",
    id: "9",
    long:'36.19458978144785, 44.00918125235878'
  },
  {
    name: "دۆڵی ئالان",
    description:
      "ئەم شوێنە نزیكەی 15 کیلۆمەتر لە باشووری خۆرهەڵاتی شارۆچكەی خەلیفان دوورە و لەسەر رێگای نێوان خەلیفان - بالیسانە و رووباری ئالانەی پێدا دەڕوات",
    img: [dolialan1, dolialan2, dollialan3],
    location: "hawler",
    rait: "3",
    id: "10",
    long:'36.544521508943745, 44.44174889567584'
  },
  {
    name: "دووکان",
    description:
      "قەزای دوکان یەکێکە لە قەزای پارێزگای سلێمانی لە باشوری کوردستان لە ڕوی گەشت و گوزارەوە بەھۆی دەریاچە یاخود بەنداوی دوکان و ھەڵکەوتە جوگرافی و کەش و ھەوایەکەوە. ",
    img: [dukan1, dukan2],
    location: "slemani",
    rait: "4",
    id: "11",
    long:'35.94624743775997, 44.962434268671764'
  },
  {
    name: "تابین",
    description: "هاوینەهەواری تەنگی تابین سەر بە شارۆچکەی دوکان ",
    img: [tabin1, tabin2, tabin3],
    location: "slemani",
    rait: "3.5",
    id: "12",
    long:'35.94624743775997, 44.962434268671764'
  },
  {
    name: "گەلی عەلی بەگ",
    description:
      "یەکێکە لە تاڤگەکانی باشووری کوردستان. ناوچەیەکی گەشت و گوزاریییە و چەندین سەردانکەر لە شارەکانی ترەوە بەتایبەت باشووری عێراقەوەسەردانی دەکەن سەر بە یارێزگای هەولێرە",
    img: [galialibag1, galialibag2, galialibag3],
    location: "hawler",
    rait: "4",
    id: "13",
    long:''
  },
  {
    name: "گۆمی بێکۆدیان",
    description:
      "گۆمی بێکۆدیان دەکەوێتە پارێزگای هەولێر سنوری باڵەکایەتی لە قەزای چۆمان لە زنجیرە چیاکانی زاگرۆس لە سەر چیای حەساری سەکران ",
    img: [gomibekodian1, gomibekodian2],
    location: "hawler",
    rait: "5",
    id: "14",
    long:[36.546113285708834, 44.98070419567595]
  },

  {
    name: "قەسرێ",
    description: "قەسرێ یەکێکە لە ناحیەکانی قەزای چۆمان، لە پارێزگای ھەولێر",
    img: [qasre1, qasre2],
    location: "hawler",
    rait: "3",
    id: "15",
    long:[36.56226323390324, 44.83042176458933]
  },
  {
    name: "پردی دەلال",
    description:
      "پردی دەلال پردێکی کۆن و مێژوویییە دەکەوێتە ڕۆژھەڵاتی شارۆچکەی زاخۆ.ئەوانەی سەردانی پردەکە دەکەن زۆرینەیان گەشتیارن و بەمەبەستی وێنەگرتن لەپاڵی سەردانی دەکەن.",
    img: [prdidalal1, prdidalal2],
    location: "dhok",
    rait: "4",
    id: "16",
    long:[37.136401246856, 42.69468329754462]
  },
  {
    name: "قادراوا",
    description: "قادراوا سەر بە ناحیەی سەنگەسەر -قەڵادزێ -پارێزگای سلێمانی",
    img: [qadawa1, qadawa2],
    location: "slemani",
    rait: "5",
    id: "17",
    long:[35.73815302621196, 45.339354298124746]
  },
  {
    name: "سیروان",
    description:
      "ناحیەی سیروان یەکێکە لە شوێنە گەشتیارەکانی سەر بە پارێزگای هەڵەبجە ،کە بە هۆی بوونی بەنداوی سیروانەوە ساڵانە گەشتیار سەردانی دەکات",
    img: [sirwan1, sirwan2],
    location: "slemani",
    rait: "3.4",
    id: "18",
    long:[35.25122579596577, 45.939416827029135]
  },

  {
    name: "سەرتەکی بەمۆ",
    description:
      "سەیرانگای سەرتەکی بەمۆ، دەکەوێتە بناری شاخی بەمۆ، بەهۆی کەشوهەوا گونجاوەکەی و دڵگیریی سروشتی ناوچەکە، ساڵانە گەشتیارێکی زۆر ڕوو لەو سەیرانگایە دەکەن.,سەر بەقەزای خانەقینە",
    img: [sartakibamo1, sartakibamo2],
    location: "slemani",
    rait: "5",
    id: "19",
    long:[34.947362150928484, 45.7384870583546]
  },
  {
    name: "شارباژێر",
    description:
      "ناوچەیەکی پارێزگای سلێمانییە کەوتۆتە باکوری ڕۆژهەڵاتییەوە. لەڕووی ئیدارییەوە لە قەزای چوارتا",
    img: [sharbazher1, sharbazher2],
    location: "slemani",
    rait: "3",
    id: "20",
    long:[35.83820373340744, 45.502842252313755]
  },
  {
    name: "سۆلاڤ",
    description:
      "سۆلاڤ هاوینگەیەکە بەدووری 4کم دەکەوێتە باکووری ڕۆژئاوای شارۆچکەی ئامێدی، لەناو دۆڵێکدایە کە بەدار و درەخت دەورە دراوە، ئاوێکی سازگار لەبناری چیاوە هەڵدەقوڵێ بەناو سۆلاڤ شۆڕدەبێتەوە بۆناو باخچەکانی ئامێدی دەڕوات.",
    img: [solav1, solav2, solav3, solav4, solav5, solav6],
    location: "dhok",
    rait: "3.25",
    id: "21",
    long:[37.101918525876485, 43.482516137988696]
  },
  {
    name: "شیلادزێ",
    description:
      "ناحیا شێلادزێ دکەڤیتە ڕۆژهەلاتێ قەزا ئامێدی سەر ب پارێزگەها دهۆکێ",
    img: [sheladze1, sheladze2, sheladze3, sheladze4, sheladze5],
    location: "dhok",
    rait: "4.5",
    id: "22",
    long:[37.03407120696368, 43.7444397285047]
  },
  {
    name: "کانی ماران",
    description:
      "گوندێکە، کەوتووەتە ناحیەی حاجیاوا، قەزای ڕانیە، پارێزگای سلێمانی، باشووری کوردستان",
    img: [kanimaran1, kanimaran2],
    location: "slemani",
    rait: "2.5",
    id: "23",
    long:[36.19590473123776, 44.747471342291874]
  },
  {
    name: "تونی بابا",
    description:
      "ئەم دۆڵە جوانە سەرسوڕهێنەرێکی سروشتی ڕاستەقینەیە دەکەوێتە نێوان شاری دەربەندیخان و شاری کەلار و بە شێوەیەکی سروشتی بە ئاو و با دروستکراوە.",
    img: [tunibaba1, tunibaba2],
    location: "slemani",
    rait: "4",
    id: "24",
    long:[35.055472311548144, 45.64008088341681]
  },
  {
    name: "تەق تەق",
    description:
      "تەق تەق شارۆچکەیەکی خنجیلانەیە سەر بە قەزای کۆیە کەوتۆتە لای ڕاستی زێی بچووک",
    img: [taqtaq1, taqtaq2],
    location: "hawler",
    rait: "3.75",
    id: "25",
    long:[35.89419204792121, 44.59496485699934]
  },
  {
    name: "کانی ڕەش",
    description:
      "یەکێکە لە تاڤگە جوان و دڵگیرەکانی کوردستان لە بناری بێکۆدیانو پرژێ و دەڤەری باڵەکایەتی",
    img: [kanirash1, kanirash2],
    location: "hawler",
    rait: "4",
    id: "26",
    long:[35.89419204792121, 44.59496485699934]
  },
  {
    name: "دەربەندی رانیە",
    description:
      "دەربەندی ڕانیە کەوتووەتە ئیدارەی ڕاپەڕین. لە ڕووی ئیدارییەوە سەر بە ناحیەی سەنگەسەرە لە قەزای پشدەر، پارێزگای سلێمانی، باشووری کوردستان",
    img: [darbandirania1, darbandirania2, darbandirania3],
    location: "slemani",
    rait: "3.5",
    id: "27",
    long:[36.23959543379548, 44.88635766581768]
  },
];

export const Context = createContext([]);
export default function Filter() {
  const [data, setData] = useState(resort);

  const filter = (button) => {
    if (button === "all") {
      setData(resort);
      return;
    }

    const filteredData = resort.filter(
      (dataList) => dataList.location === button
    );
    setData(filteredData);
  };

  return (
    <div className="h-full w-[85%] ">
      <div className="h-[1%] w-full mt-[2%]">
        <select
          className="w-[20%] h-full shadow-md text-black text-[20px] rudaw-font text-center rounded-md focus:outline-none focus:shadow-insetShadow"
          onChange={(e) => {
            filter(e.target.value);
          }}
        >
          <option value="all">هەمووی</option>
          <option value="slemani">سلێمانی</option>
          <option value="hawler">‌هەولێر</option>
          <option value="dhok">دهۆک</option>
        </select>
      </div>
      <Context.Provider value={data} >
        <ResortCard />
      </Context.Provider>
    </div>
  );
}

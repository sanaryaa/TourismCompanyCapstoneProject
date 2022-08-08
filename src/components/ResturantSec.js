import hiror from "../img/hiror1.jpg";
import lesommet from "../img/lesommet1.jpg";
import toranj from "../img/toranj1.jpg";
import { Card, Button } from "react-bootstrap";

export default function ResturantSec() {
  return (
    <div className="w-full h-full flex items-center justify-center border-r-[25rem] border-bluetox">
      <div className="w-full h-[80%] bg-blue flex items-center justify-center pr-[15%]">
        <img src={lesommet} className="h-[72.5%] absolute right-[15%]" />
        <div className="w-[50%] h-[60%] pr-[2%] flex flex-col border-r-2 border-black rudaw-font">
          <h2 className="rudaw-font text-[25px] w-full h-[15%] mt-[5%]">
            چێژ لە خواردنە کوردەواریەکان وەرگرە.
          </h2>
          <p className="w-full h-[60%] flex items-center text-green">
            چێشتخانەکان گرنگی کاریگەری یەکەمی بەهێز دەزانن. هەر بۆیە وەبەرهێنان
            لە دیزاینی دەرەوە دەکەن، دەرگای چوونە ژوورەوەیان دەڕازێننەوە و
            خانەخوێکان ڕادەهێنن بۆ پێشوازیکردن لە میوانەکان بە زەردەخەنەیەکی
            گەرمەوە.
          </p>
          <button className="text-white rudaw-font rounded-lg text-xl w-[25%] h-[2.5rem] bg-black">
            زیاتر ببینە
          </button>
        </div>
      </div>
    </div>
  );
}

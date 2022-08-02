import hiror from "../img/hiror1.jpg";
import lesommet from "../img/lesommet1.jpg";
import toranj from "../img/toranj1.jpg";
import { Card, Button } from "react-bootstrap";

export default function ResturantCard() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[30%] h-full flex items-end justify-center  ">
        <div className="card w-[70%] flex items-center justify-center ">
          <img src={toranj} className="rounded-lg " />
          <h4 className="eng-font text-[15px] absolute top-[10%] backdrop-blur w-[80%] rounded-lg text-center text-white leading-[2rem]">Toranj cafe & restaurant</h4>
        </div>
      </div>

      <div className="w-[30%] h-full flex items-start justify-center  ">
        <div className="card w-[70%] flex items-center justify-center ">
          <img src={hiror} className="rounded-lg" />
          <h5 className="eng-font text-[15px] absolute top-[10%] backdrop-blur w-[80%] rounded-lg text-center text-white leading-[2rem]">
            Hiror restaurant & cafe
          </h5>
        </div>
      </div>

      <div className="w-[30%] h-full flex items-end justify-center">
        <div className="card w-[70%] flex items-center justify-center ">
          <img src={lesommet} className="rounded-lg" />
          <h5 className="eng-font text-[15px] absolute top-[10%] backdrop-blur w-[80%] rounded-lg text-center text-white leading-[2rem]">Le sommet restaurant</h5>
        </div>
      </div>
      <div className="w-[35%] h-[35%] absolute top-[360%] pr-[2%] flex flex-col items-center border-r-2 border-black rudaw-font">
        <h2 className="rudaw-font text-[20px] w-full h-[15%] mt-[5%]">چێژ لە خواردنە کوردەواریەکان وەرگرە.</h2>
        <p className="w-full h-[60%] flex items-center text-green">
          چێشتخانەکان گرنگی کاریگەری یەکەمی بەهێز دەزانن. هەر بۆیە وەبەرهێنان لە
          دیزاینی دەرەوە دەکەن، دەرگای چوونە ژوورەوەیان دەڕازێننەوە و خانەخوێکان
          ڕادەهێنن بۆ پێشوازیکردن لە میوانەکان بە زەردەخەنەیەکی گەرمەوە.
        </p>
      </div>
    </div>
  );
}

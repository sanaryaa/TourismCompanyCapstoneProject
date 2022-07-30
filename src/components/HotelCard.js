import grandmillennium from "../img/grandmillennium.jpg";
import divan from "../img/divan.jpg";
import rotana from "../img/rotana.jpg";
import vanroyal from "../img/vanroyal.jpg";
import { Card, Button } from "react-bootstrap";
export default function HotelCard() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[75%] h-[25%] pr-2 flex flex-col items-start border-r-2 border-black justify-center">
        <h3 className="rudaw-font w-[20%]">ئەوەی شایستەتە لێرە ‌هەڵیبژێرە !</h3>
        <p className="w-2/4 rudaw-font text-green mt-[2%]">
          ژوورەکان بۆ ئەوە دروستکراون کە تۆ بگوازنەوە بۆ ژینگەیەک کە بۆ کات
          بەسەربردن دروستکراوە. مێشکت لە ژیانی ڕۆژانەی ماڵەوە دەربهێنە
        </p>
      </div>
      <div className="w-[85%] h-[75%] flex items-center justify-center ">
        <div className="card w-[30%] hover:mt-[2%] rounded-lg">
          <img src={divan} className="rounded-lg"/>
        </div>
        <div className="card w-[30%] hover:mt-[2%] rounded-lg">
          <img src={rotana} className="rounded-lg" />
        </div>
        <div className="card w-[30%] hover:mt-[2%] rounded-lg ">
          <img src={vanroyal} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

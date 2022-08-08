import "../fonts/rudawregular2.ttf";
import bird from "../img/bird.png";
export default function Welcome() {
  return (
    <div className="w-[80%] h-full flex items-center justify-center ">
      <div className="w-[60%] h-full  flex items-center justify-center">
        <img src={bird} className="w-full h-[80%]" />
      </div>
      <div className="w-[40%] h-full flex flex-col items-start justify-center pr-8 ">
        <h3 className="rudaw-font text-[18px] text-black ">
          بەخێربێیت،ئێرە کوردستانە..
        </h3>
        <p className="rudaw-font text-[30px] text-black mt-[2%]">
          <span className=" text-[35px] ">هەوار</span> بکە بە هاوڕێی سەفەرت.
        </p>
        <p className=" w-full rudaw-font text-[20px] text-black mt-[25]">
          لێرە بگەڕێ بۆ شوێنی گەشتیاری و هۆتێل و رێستۆرانتی دڵخوازت،یادگاریەکانت
          لە شوێنەی ئارەزوتە تۆمار بکە.
        </p>
        <button className="w-[35%] h-[5%] mt-[2%] rounded-lg bg-black rudaw-font text-white text-xl hover:">
          گەڕان
        </button>
      </div>
    </div>
  );
}

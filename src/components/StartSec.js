import React from "react";
import rawanduz from "../img/rawanduz1.jpg";
import toranj from "../img/salmas3.jpg";

const content = [
  {
    img: rawanduz,
    title: "ڕەواندز",
    path: "/Resort",
  },
  {
    img: toranj,
    title: "سەلماس",
    path: "/Retaurant",
  },
];

export default function StartSec() {
  return (
    <div className="w-[85%] h-[81%] md:h-[80%] lg:h-[95%] mx-auto sm:w-full md:w-full ">
      <div className="w-full h-[10%] flex items-center justify-center ">
        <input
          className="w-[95%]  md:w-[75%] lg:w-[70%]  text-black  h-[25%] lg:h-[15%] md:h-[20%] p-[2.5%]  focus:outline-none hover:shadow-insetShadow shadow-md rounded-3xl placeholder:rudaw-font"
          icon="search"
          placeholder="گەڕان.."
        />
      </div>
      <div className="w-full lg:w-[80%] h-[20%] flex items-center justify-around  mx-auto ">
        <div className="w-[25%]  p-[2%]  flex items-center rounded-[70px] justify-around shadow-md hover:shadow-insetShadow ">
          <img
            src="https://img.icons8.com/ios/25/000000/trust--v1.png"
            alt="img"
          />
           <span className="rudaw-font text-black text-[20px] ">متمانە</span>
        </div>
        <div className="w-[25%] p-[2%] flex items-center rounded-[70px]  justify-around  shadow-md hover:shadow-insetShadow">
          <img
            src="https://img.icons8.com/ios/25/000000/security-checked.png"
            alt="img"
            className=""
          />
          <span  className="rudaw-font text-black text-[20px] ">ئاسایش</span>
        </div>
      </div>
      <div className="w-full h-[74%] md:h-[40%] lg:h-[75%] flex items-center justify-around  mt-[0]">
        {content.map((content, index) => {
          return (
            <div
              key={index}
              className="Card m-[5%] h-full rounded-md "
            >
              <img
                src={content.img}
                alt="img"
                className=" rounded-tl-md rounded-tr-md"
              />
              <h6 className="w-full rudaw-font pt-[1%] text-black bg-white text-[20px] text-center flex items-center justify-center  shadow-md hover:shadow-lg">
                {content.title}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import rawanduz from "../img/rawanduz1.jpg";
import toranj from "../img/salmas3.jpg";



const content = [
  {
    img: rawanduz,
    title: "ڕەواندز",
    path:'/Resort'
  },
  {
    img: toranj,
    title: "سەلماس",
    path:'/Retaurant'
  },
 
];

export default function StartSec() {
  return (
    <div className="w-[85%] h-[60%] mx-auto sm:w-full md:w-full">
      <div className="w-full h-[20%] flex items-center justify-center">
      <input  className="w-[70%] text-black h-[15%] p-[2.5%]  focus:outline-none hover:shadow-insetShadow shadow-md rounded-3xl placeholder:rudaw-font" icon="search" placeholder="گەڕان.."/>
      </div>
      <div className="w-[80%] h-[25%] flex items-center justify-around mx-auto">
          <div className="w-[13%] h-[70%]  flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow ">
            <img src="https://img.icons8.com/ios/50/000000/service-bell.png" alt="img"/>
          </div>
          <div className="w-[13%] h-[70%]  flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow ">
            <img src="https://img.icons8.com/ios/50/000000/trust--v1.png" alt="img"/>
          </div>
          <div className="w-[13%] h-[70%] flex items-center rounded-md justify-center shadow-md hover:shadow-insetShadow">
            <img src="https://img.icons8.com/ios/50/000000/security-checked.png" alt="img" className=""/>
          </div>
      </div>
      <div className="w-full h-[75%] flex items-center justify-around mt-[10%] " >
       {
        content.map((content,index)=>{
         return(
          <div key={index} className="Card w-[35%] h-full rounded-md shadow-md hover:shadow-lg">
          <img src={content.img} alt="img"  className=" rounded-tl-md rounded-tr-md"/>
          <h6 className="w-full rudaw-font pt-[1%] text-black bg-white text-[20px] text-center flex items-center justify-center">{content.title}</h6>
        </div>
         )
        })
       }
      </div>
    </div>
  );
}

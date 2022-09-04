import React from "react";

import Navigation from "../components/Navigation";
import StartSec from "../components/StartSec";
import { Link } from "react-router-dom";
export default function Home () {
  return (
    <div className="w-full h-[100vh] flex  ">
      <div className=" lg:w-[45%] h-full bg-white md:w-full sm:w-full  ">
        <div className="w-full h-[10vh] flex items-center justify-center">
          <Navigation />
        </div>
        <StartSec />
      </div>
      <div className=" w-[55%] h-full bg-white md:hidden sm:hidden lg:block">
        <div className=" w-full h-full bg-bg1 bg-no-repeat bg-cover bg-bottom rounded-tr-[10%] rounded-br-[10%] ">
          <div className="w-full h-full rounded-tr-[10%] rounded-br-[10%]  bg-black-rgba flex flex-col items-start">
            <h4 className=" mt-[35%] mr-[15%] rudaw-font w-[60%] text-[35px]  text-white leading-[2.5rem]">
              با چێژ لە پشووەکانمان وەربگرین!
            </h4>
            <button className="w-[25%] mr-[15%] mt-[5%] h-[6%]  backdrop-blur rudaw-font rounded-3xl border border-black ">
              <Link
                to="/Resort"
                className="no-underline text-white text-[20px]  "
              >
                دەست پێبکە
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

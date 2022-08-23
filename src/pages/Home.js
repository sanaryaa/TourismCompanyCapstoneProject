import React from "react";
import ContactSec from "../components/ContactSec";
import Navigation from "../components/Navigation";
import StartSec from "../components/StartSec";
import { Link } from "react-router-dom";
import Resort from "./Resort";
export default function () {
  return (
    <div className="w-full h-[100vh] flex ">
      <div className=" lg:w-[60%] h-full bg-white md:w-full sm:w-full  ">
        <div className="w-full h-[12%] flex items-center justify-center border-2 border-black">
          <Navigation />
        </div>
        <StartSec />
      </div>
      <div className=" md:hidden sm:hidden lg:block w-[40%] h-full bg-white">
        <div className=" w-full h-full bg-bg1 bg-no-repeat bg-cover overflow-hidden bg-bottom rounded-tr-[10%] rounded-br-[10%]">
          <div className="w-full h-full rounded-tr-[10%] rounded-br-[10%]  bg-black-rgba flex flex-col items-start">
            <h4 className=" mt-[35%] mr-[15%] rudaw-font w-[60%] text-[35px]  text-white leading-[2.5rem]">
              با چێژ لە پشووەکانمان وەربگرین!
            </h4>
            <button className="w-[25%] mr-[15%] mt-[5%] h-[5%] backdrop-blur bg-[#80558C] rudaw-font rounded-3xl hover:bg-[#9a7da1]">
              <Link
                to="/Resort"
                className="no-underline text-white text-[20px]"
              >
                زیاتر ببینە
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

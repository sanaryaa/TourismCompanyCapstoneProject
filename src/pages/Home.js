import React from 'react'
import ContactSec from '../components/ContactSec'
import Navigation from '../components/Navigation'
import StartSec from '../components/StartSec'
import { Link } from "react-router-dom";
import Resort from './Resort';
export default function () {
  return (
    <div className='w-full h-[100vh] flex '>
    <div className="w-[60%] h-full bg-white ">
       <div className="w-full h-[10%]">
       <Navigation/>
       </div>
       <StartSec/>
       <ContactSec/>
    </div>
    <div className='w-[40%] h-full bg-white'>
    <div className=" w-full h-full bg-bg1 bg-no-repeat bg-cover bg-bottom rounded-tr-[10%] rounded-br-[10%]">
      <div className='w-full h-full rounded-tr-[10%] rounded-br-[10%] bg-black-rgba flex flex-col items-start'>
      <h4 className=" mt-[35%] mr-[15%] rudaw-font w-[60%] text-[35px]  text-white leading-[2.5rem]">
          با چێژ لە پشووەکانمان وەربگرین!
        </h4>
        <button className='w-[25%] mr-[15%] mt-[5%] h-[5%] backdrop-blur bg-[#80558C] rudaw-font rounded-3xl hover:bg-[#8c6297] '><Link to="/Resort" className="no-underline text-white text-[20px]">زیاتر ببینە</Link></button>
      </div>
    </div>
    </div>
    
    </div>
  )
}

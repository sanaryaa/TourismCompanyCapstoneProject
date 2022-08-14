import React from 'react'
import Navigation from '../components/Navigation'
export default function () {
  return (
    <div className='w-full h-[100vh] flex '>
    <div className="w-[60%] h-full bg-[#2C3333] ">
    <div className="w-full h-full rounded-tl-[10%] rounded-bl-[10%] bg-white ">
       <div className="w-full h-[10%]">
       <Navigation/>
       </div>
    </div>
    </div>
    <div className="w-[40%] h-full bg-bg1 bg-no-repeat bg-[100%] bg-center bg-[#2C3333]">

    </div>
    </div>
  )
}

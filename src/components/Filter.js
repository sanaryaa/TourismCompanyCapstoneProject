import React from 'react'

export default function Filter() {
  return (
    <div className="h-[25%] w-[80%]">
    <select className="w-[20%] h-full bg-[#395B64] text-white text-[20px] rudaw-font text-center rounded-md">
      {/* <option value="slemani" onClick={result('all')}>هەمووی</option> */}
      <option value="slemani">سلێمانی</option>
      <option value="hawler" >‌هەولێر</option>
      <option value="dhok" >دهۆک</option>
    </select>
  </div>
  )
}

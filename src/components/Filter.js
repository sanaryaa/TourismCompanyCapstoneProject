import React from 'react'
import {filtering} from '../util/filtering'
export default function Filter() {
  return (
    <div className="h-[25%] w-[80%]">
    <select className="w-[20%] h-full bg-[#395B64] text-white text-[20px] rudaw-font text-center rounded-md">
      <option value="slemani" onClick={filtering('all')}>هەمووی</option>
      <option value="slemani" onClick={filtering('slemani')}>سلێمانی</option>
      <option value="hawler" onClick={filtering('hawler')}>‌هەولێر</option>
      <option value="dhok" onClick={filtering('dhok')}>دهۆک</option>
    </select>
  </div>
  )
}

import React from 'react'

export default function ContactSec() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[30%] border-b-2 border-black'></div>
        <div className="h-full w-[30%] flex items-center justify-center ">
        <img
          src="https://img.icons8.com/ios-filled/20/000000/facebook-f.png"
          className="mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]"
          alt='icon'
        />
        <img
        alt='icon'
          src="https://img.icons8.com/ios-glyphs/20/000000/twitter--v1.png"
          className="mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]"
        />
        <img
        alt='icon'
          src="https://img.icons8.com/sf-black-filled/20/000000/secured-letter.png"
          className="mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]"
        />
      </div>
        <div className='w-[30%] border-b-2 border-black'></div>
    </div>
  )
}

import tree from '../img/tree.png'
export default function FooterSec() {
  return (
    <div className="w-full h-full ">
      <div className="w-[70%] h-[65%] flex items-center justify-center mt-[5%]">
        <nav className="w-[30%] h-full flex flex-col justify-center items-center">
          <h5 className="rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            ماڵەوە
          </h5>
          <h5 className="rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            هاوینەهەوار
          </h5>
          <h5 className="rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            هۆتێل
          </h5>
          <h5 className="rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            ڕێستۆرانت
          </h5>
          <h5 className="rudaw-font text-lg  hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            دەربارە
          </h5>
          <h5 className="rudaw-font text-lg hover:text-xl w-full h-12 flex flex-col justify-center items-center">
            پەیوەندی
          </h5>
        </nav>
        <div className="h-full w-[30%] flex flex-col items-center justify-center ">
          <img src="https://img.icons8.com/ios-filled/25/000000/facebook-f.png" className='mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]' />
          <img src="https://img.icons8.com/ios-glyphs/25/000000/twitter--v1.png" className='mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]' />
          <img src="https://img.icons8.com/sf-black-filled/25/000000/secured-letter.png" className='mt-[3%] hover:border hover:rounded-[50%] hover:border-black p-[2px]' />
        </div>
      </div>

      <div className="w-full h-[20%] flex items-center justify-center mt-[5%]">
        <h5 className="eng-font text-[15px]">2022 ©</h5>
      </div>
      <img src={tree} className="absolute w-[45%] right-[55%] top-[435%]"/>
    </div>
  );
}

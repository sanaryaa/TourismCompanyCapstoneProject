export default function About() {
  return (
    <div className="w-full h-full bg-bluesky flex items-center justify-center">
      <div className="w-[40%] h-full  flex items-center justify-around">
        <div className="w-[40%] h-[90%] rounded-md  bg-white flex items-center justify-center flex-col">
        <img src="https://img.icons8.com/glyph-neue/80/000000/services.png"/>
        <h5 className="rudaw-font text-[20px] mt-[2%]">باشترین خزمەتگوزاری</h5>
        </div>
        <div className="w-[40%] h-[90%] rounded-md bg-white flex items-center justify-center flex-col ">
        <img src="https://img.icons8.com/glyph-neue/80/000000/trust.png"/>
        <h5 className="rudaw-font text-[20px] mt-[2%]">متمانەی ئێوە</h5>
        </div>
      </div>
    </div>
  );
}

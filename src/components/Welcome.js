import '../fonts/rudawregular2.ttf'
export default function Welcome() {
  return (
    <div className="w-4/12 h-full backdrop-blur flex flex-col items-start justify-center pr-8">
        <h3 className="rudaw-font text-sm text-white ">بەخێربێیت،ئێرە کوردستانە..</h3>
        <p className="rudaw-font text-3xl text-white mt-6"><span className="text-green">هەوار</span> بکە بە هاوڕێی سەفەرت.</p>
        <p className=" w-3/4 rudaw-font text-sm text-white mt-8">لێرە بگەڕێ بۆ شوێنی گەشتیاری و هۆتێل و رێستۆرانتی دڵخوازت،یادگاریەکانت لە شوێنەی ئارەزوتە تۆمار بکە.</p>
        <button className='w-20 h-12 mt-6 rounded-lg bg-black rudaw-font text-white text-xl hover:' >گەڕان</button>
    </div>
  )
}

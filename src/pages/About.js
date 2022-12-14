import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div className="w-full h-[130vh] flex flex-col gap-[7%]">
      <div className="w-full h-[12vh] flex items-center justify-center">
        <Navigation />
      </div>
      <div className="w-full h-[35%] flex items-center justify-center gap-[2%]">
        <div className="w-[30%] h-full  hover:w-[31%] rounded-3xl  bg-raniaBg bg-center bg-cover  bg-no-repeat shadow-md">
          <div className="w-full h-full rounded-3xl bg-black-rgba flex  justify-start items-end">
            <h6 className="rudaw-font text-white text-center text-[20px] lg:text-[30px] md:text-[27px]  mr-[5%] mb-[5%]">
              ڕانیە
            </h6>
          </div>
        </div>
        <div className="w-[30%] h-full  hover:w-[31%]   rounded-3xl  bg-taqtaqBg bg-center bg-cover  bg-no-repeat shadow-md">
          <div className="w-full h-full rounded-3xl bg-black-rgba  flex  justify-start items-end">
            <h6 className="rudaw-font text-white text-center text-[20px] lg:text-[30px] md:text-[27px]  mr-[5%] mb-[5%]">
              تەق تەق
            </h6>
          </div>
        </div>
        <div className="w-[30%] hover:w-[31%] h-full  rounded-3xl  bg-zaxoBg bg-center bg-cover  bg-no-repeat shadow-md">
          <div className="w-full h-full rounded-3xl bg-black-rgba flex  justify-start items-end">
            <h6 className="rudaw-font text-white text-center text-[20px] lg:text-[30px] md:text-[27px]  mr-[5%] mb-[5%]">
              زاخۆ
            </h6>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[50%] pr-[5%] flex flex-col justify-center ">
        <h5 className="rudaw-font text-black text-[27px]">ڕۆزبێ تراڤێڵ</h5>
        <p className="rudaw-font mt-[2%]">
          کوردستان پڕە لە سەرسوڕمان. سەفەر پەیوەندی بە ئەگەر و گەڕان و دۆزینەوە
          و زانینەوە هەیە. ئێمە پسپۆڕین لە پلاندانان بۆ جەژنە ناوازەکان لە
          شوێنەکانی سەرتاسەری کوردستان
        </p>
        <p className="rudaw-font mt-[2%]">
          شارەزایی ئێمە دروستکردنی گەشتی سەرنجڕاکێشە کە چەندین چالاکی تێدابێت.
          گەشتەکانمان پێکدێت لە سەردانی شوێنە گرینگەکان، ناسینی کولتوری ناوچەکە،
          گەڕان بەناو سروشت، خواردن لە دەرەوە، کاتە پشووەکان، و چەندین سوپرایزی
          تر. ئێمە تێدەگەین کە کڕیارەکانمان ئەزموونێکی تایبەتیان دەوێت و ئێمە
          ئامادەین بۆ ڕێکخستن و پلاندانان!
        </p>
        <div className="w-full flex gap-[2%]">
        <img src="https://img.icons8.com/ios-filled/20/000000/address--v1.png"/>
          <span className="rudaw-font mt-[1%]">
            
            ناونیشانی ڕۆزبێ تراڤڵ : شەقامی قەدەمخێر - پشت یانەی ئەندازیاران -
            نزیک تەلاری لالە
          </span>
        </div>
      </div>
    </div>
  );
}

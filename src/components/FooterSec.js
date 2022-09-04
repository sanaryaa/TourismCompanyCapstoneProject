import ContactSec from "./ContactSec";
export default function FooterSec() {
  return (
    <div className="w-full h-[15vh] flex flex-col items-center justify-center mt-[10%] bg-white">
      <div className="w-full h-[50%] ">
        <ContactSec/>
      </div>
      <div className="w-full h-[50%] flex items-center justify-center">
        <h5 className="eng-font text-[15px]">2022 ©</h5>
      </div>
      {/* <img src={sea} className="h-[30%] w-full"/> */}
    </div>
  );
}

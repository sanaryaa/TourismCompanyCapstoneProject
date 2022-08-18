import Carousel from "react-bootstrap/Carousel";
import { delimiter } from "../util/limit";
import Modal from "react-modal";
import React, { useState, useContext } from "react";
import { Context } from "./Filter";

export default function ResortCard() {
  const data = useContext(Context);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
function handleEvent(){
  openModal();
  // e.preventDefault();
  // alert(e.currentTarget.value)
}
  return (
    <div className="w-[85%] h-[100%] justify-items-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[2%]">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[70%] border-[0px] flex flex-col rounded-lg  shadow-md"
          >
            <div className="h-[60%] ">
              <Carousel className="w-full h-full ">
                {item.img.map((img, index) => {
                  return (
                    <Carousel.Item>
                      <img
                        key={index}
                        className=" w-100 rounded-tl-lg rounded-tr-lg"
                        src={img}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="w-full h-[40%]  p-[4%] mt-[15%]">
              <h2 className="rudaw-font text-[20px]">{item.name}</h2>
              <p className="rudaw-font text-[#69787d]">
                {delimiter(item.description, 55)}
              </p>
              <div className="w-full h-[40%] flex items-center justify-between">
                <button className="rudaw-font w-[30%] h-[60%] bg-green text-white flex items-center justify-center rounded-lg text-[20px]" onClick={handleEvent}>
                  زیاتر..
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>داخستن</button>
      </Modal>
    </div>
  );
}

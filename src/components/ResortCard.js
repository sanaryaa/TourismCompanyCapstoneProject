import Carousel from "react-bootstrap/Carousel";
import { delimiter } from "../util/limit";
import Modal from "react-modal";
import React, {useState } from "react";
import { filtering } from "../util/filtering";

export default function () {
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

  return (
    <div className="w-[80%] h-[100%] justify-items-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[4%]">
      {filtering.map((filtering) => {
        return (
          <div
            className="w-[70%]  flex flex-col rounded-lg border border-[#F0EBE3] shadow-md"
            onClick={openModal}
          >
            <div className="w-full h-[80%] ">
              <Carousel className="w-full h-full ">
                {filtering.img.map((img) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded-tl-lg rounded-tr-lg"
                        src={img}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="w-full h-[40%]  p-[4%] mt-[2%]">
              <h2 className="rudaw-font text-[20px]">{filtering.name}</h2>
              <p className="rudaw-font text-[#69787d]">
                {delimiter(filtering.description, 55)}
              </p>
              <div className="w-full h-[40%] flex items-center justify-between">
                <button className="rudaw-font w-[70%] h-[50%] bg-green text-white flex items-center justify-center rounded-lg">
                  لەسەرنەخشە
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

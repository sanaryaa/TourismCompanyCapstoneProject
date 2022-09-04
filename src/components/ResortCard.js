import Carousel from "react-bootstrap/Carousel";
import { delimiter } from "../util/limit";
import Modal from "react-modal";
import React, { useState, useContext} from "react";
import { Context } from "./Filter";
import Rating from "react-rating";


export default function ResortCard() {
  //all of the data
  const data = useContext(Context);
  //variable store that datas which is filtered
  const [selectItem, setItem] = useState([]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyle = {
    content: {
      width: "75vw",
      background: "white",
      margin: "0 auto",
      borderRadius: "20px",
    },
    overlay: {
      background: "rgba(255,255,255,0.3)",
    },
  };

  //first Modal:
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleEvent(itemId) {
    openModal();

    //datay aw itema waragre ka clicky lasar krawa
    const selectData = data.filter((items, index) => {
      return itemId === items.id;
    });
    //selectItem arrayaka ka value selectData waragre u la line y 105 bakary ahenm bo away  pishan bdre la modalakaya
    setItem(selectData[0]);
  }
  return (
    <div className="w-full h-[100%] justify-items-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[2%] ">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[70%] border-[0px] flex flex-col rounded-lg shadow-md hover:shadow-lg"
          >
            <div  className="h-[60%] ">
              <Carousel className="w-full h-full mb-[10%] " >
                {item.img.map((img, imgIndex) => {
                  return (
                    <Carousel.Item key={imgIndex} >
                      <img
                     
                        className=" w-100 rounded-tl-lg rounded-tr-lg"
                        src={img}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="w-full h-[40%]  p-[4%] mt-[15%] ">
              <h2 className="rudaw-font text-[20px]">{item.name}</h2>
              <p className="rudaw-font text-[#69787d]">
                {delimiter(item.description, 55)}
              </p>
              <div className="w-full h-[40%] flex items-center justify-between">
                <button
                  variant="outlined"
                  value={item.id}
                  className="rudaw-font w-[30%] h-[60%] hover:bg-[#C9BBCF] shadow-md hover:shadow-insetShadow bg-[#898AA6]  text-white flex items-center justify-center rounded-lg text-[20px]"
                  onClick={(e) => {
                    handleEvent(e.target.value);
                  }}
                >
                  زیاتر..
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyle}
      >
        <button onClick={closeModal}>
          <img src="https://img.icons8.com/ios/25/000000/delete-sign--v1.png" alt="img"/>
        </button>
        <div className="w-full lg:h-[110vh] md:h-[100vh] sm:h-[90%] flex flex-col items-center justify-center">
          <div className="w-[95%] h-[60%]  rounded-3xl bg-white flex items-center justify-center">
            {/* <Map IP={selectItem.long}/> */}
          </div>
          <div className="w-[95%] h-[35%] p-[5%]  flex flex-col items-center justify-center text-center">
            <h4 className="rudaw-font text-[25px]">{selectItem.name}</h4>
            <p className="rudaw-font text-[17px] w-[75%] mt-[5%] text-[#73777B]">
              {selectItem.description}
            </p>
            <Rating
              direction="rtl"
              initialRating={selectItem.rait}
              emptySymbol={
                <img src="https://img.icons8.com/color/25/000000/star--v1.png" alt="star" />
              }
              fullSymbol={
                <img src="https://img.icons8.com/fluency/25/000000/star.png" alt="star" />
              }
              readonly
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

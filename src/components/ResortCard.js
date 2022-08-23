import Carousel from "react-bootstrap/Carousel";
import { delimiter } from "../util/limit";
import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "./Filter";
import Rating from "react-rating";
import Map from "../components/Map";
import { createContext } from "react";

export default function ResortCard() {
  //all of the data
  const data = useContext(Context);
  //variable store that datas which is filtered
  const [selectItem, setSelect] = useState({});
  const [imgs, setImgs] = useState([]);



  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyle = {
    content: {
      width: "75vw",
      background: "white",
      marginRight: "9%",
      marginLeft: "5%",
      borderRadius: "20px",
    },
    overlay: {
      background: "rgba(0,0,0,0.4)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleEvent(itemId) {
    openModal();

    const filterData = data.filter((items, index) => {
      return itemId == items.id;
    });

    setSelect(filterData[0]);
    console.log("filterData :",filterData)
    console.log("selectItem:",JSON.stringify(selectItem))
    // setImgs(selectItem.img)
    
  }
// if(!imgs){
//   return <div>loading</div>
// }
 
 
  return (
    <div className="w-full h-[100%] justify-items-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[2%] ">
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
                <button
                  value={item.id}
                  className="rudaw-font w-[30%] h-[60%] bg-black text-white flex items-center justify-center rounded-lg text-[20px]"
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
          <img src="https://img.icons8.com/ios/25/000000/delete-sign--v1.png" />
        </button>
        <div className="w-full h-[120vh] flex flex-col items-center justify-center">
          <div className="w-[95%] h-[60%]  rounded-3xl bg-[#CFE8A9]">
            {/* <Carousel className="w-full h-full ">
              {imgs.map((img, index) => {
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
            </Carousel> */}
            {/* <Map IP={data.long}/> */}
          </div>
          <div className="w-[95%] h-[35%] p-[5%]">
            <h4 className="rudaw-font text-[25px]">{selectItem.name}</h4>
            <p className="rudaw-font text-[17px] w-[75%] mt-[5%] text-[#73777B]">
              {selectItem.description}
            </p>
            <Rating
              direction="rtl"
              initialRating={selectItem.rait}
              emptySymbol={
                <img src="https://img.icons8.com/color/25/000000/star--v1.png" />
              }
              fullSymbol={
                <img src="https://img.icons8.com/fluency/25/000000/star.png" />
              }
              readonly
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

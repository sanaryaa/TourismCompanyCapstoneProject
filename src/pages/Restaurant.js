import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Navigation from "../components/Navigation";

const airpot = [
  {
    name: "سلێمانی",
    location: "شەقامی شەست مەتری - بازنەی مەلیک مەحمود",
    ip: [35.55985067624406, 45.32568753169074],
  },
  {
    name: "هەولێر",
    location: "شەقامی سەد مەتری - نزیک گوندی ئیتاڵی",
    ip: [36.23367183876163, 43.95545261362674],
  },
];
export default function Restaurant() {
  return (
    <div className="w-full h-[150vh] flex flex-col  ">
      <div className="w-full h-[10vh] flex items-center justify-center">
        <Navigation />
      </div>
      <div className="w-[85%] h-[100%] ">
        {airpot.map((airpot, index) => {
          return (
            <div>
              <h5>{airpot.name}</h5>
              <span>{airpot.location}</span>
              <MapContainer
                center={airpot.ip}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={airpot.ip}>
                  <Popup>{airpot.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

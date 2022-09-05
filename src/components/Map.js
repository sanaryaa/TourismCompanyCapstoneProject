import React from "react";
import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'

export default function Map(props) {

  
  return (
      <MapContainer center={props.IP} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.IP}>
        <Popup>
      {props.name}
    </Popup>
        </Marker>
      </MapContainer>
    
  );
}

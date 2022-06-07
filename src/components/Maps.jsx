import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./css/maps.css"

//API GOOGLE MAPS
function Maps(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDlFCQibMP9WbCeOaQV_zOuU7imO2SGMNU"
  })
  const centerPos = {
    lat: -16.710726,
    lng: -49.226850
  }
  
  return (
    <div className="Maps">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: "100%" }}
          center={props.posicaoMarker ? { lat: Number(props.posicaoMarker.latitude), lng: Number(props.posicaoMarker.longitude) } : centerPos}
          zoom={10}
          onChange={''}
        >
          {props.posicaoMarker && (
            <Marker
              position={{ lat: Number(props.posicaoMarker.latitude), lng: Number(props.posicaoMarker.longitude) }}
              label={props.posicaoMarker.texto}
            />
          )}
        </GoogleMap>
      ) : <></>}
    </div>)
}

export default Maps;
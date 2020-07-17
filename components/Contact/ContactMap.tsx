import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
//@ts-ignore
const API_KEY: string = process.env.GOOGLE_MAP_API;

const ContactMap = (props: any) => {
  return (
    <div className="contact-map pt-100">
      <div id="map">
        <Map
          google={props.google}
          //@ts-ignore
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 26.050823, lng: 44.876634 }}
        >
          <Marker
            //@ts-ignore
            position={{ lat: 26.050823, lng: 44.876634 }}
          />
        </Map>
      </div>
    </div>
  );
};

const mapStyles = {
  width: "100%",
  height: "100%",
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(ContactMap);

//https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
    maxWidth: "1232px",
    height: "540px",
    overflowX: "hidden",
    overflowY: "hidden",
};

const containerStyle = {
    maxWidth: "1232px",
    height: "540px",
};

export const GoogleMap = (props) => (
    <Map
        google={props.google}
        zoom={7}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
            lat: -23.5489,
            lng: -46.6388,
        }}
    />
);

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY_GOOGLEMAPS,
})(GoogleMap);

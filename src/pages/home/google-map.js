import React from "react";
/** Components import, map to map, googleApiWrapper to able map and marker with custom location to get lat and lng */
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

/** Set Map size and hidden overflow */
const mapStyles = {
    maxWidth: "1232px",
    height: "540px",
    overflowX: "hidden",
    overflowY: "hidden",
};

/** Set container map size */
const containerStyle = {
    maxWidth: "1232px",
    height: "540px",
};

export const GoogleMap = (props) => {
    return (
        <Map
            google={props.google}
            zoom={10}
            style={mapStyles}
            containerStyle={containerStyle}
            initialCenter={{
                lat: -23.5489,
                lng: -46.6388,
            }}
            onClick={props.mapClicked}
        >
            <Marker
                position={{ lat: props.lat, lng: props.lng }}
                onClick={props.markerClicked}
            />
        </Map>
    );
};

/** Create a component getting a google api key and validate */
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY_GOOGLEMAPS,
})(GoogleMap);

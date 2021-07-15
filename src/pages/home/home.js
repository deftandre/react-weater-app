import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, LinearProgress } from "@material-ui/core";

import { Content, H4 } from "ui";
import GoogleMap from "./google-map";

import { CITY_INFO } from "routes";

const Home = () => {
    /** custom state to Marker position */
    const [useMarker, setMarker] = useState({});
    /** custom state to verify if fetching is in progress */
    const [fetchingCities, setFetchingCities] = useState(false);
    /** custom state to disabled button when marker is not in map */
    const [useButtonStatus, setButtonStatus] = useState(true);
    /** custom state to get cities info */
    const [useCities, setCities] = useState([]);
    /** custom state to handle errors */
    const [useError, setError] = useState(false);

    /** function to get map events and set marker position */
    function mapClicked(mapProps, map, e) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMarker({ lat, lng });
        setButtonStatus(false);
    }

    /** function to delete marker when his is clicked */
    function markerClicked() {
        setMarker({});
        setButtonStatus(true);
    }

    /** async function to get cities information */
    async function fetchCities() {
        const lat = useMarker.lat;
        const lng = useMarker.lng;

        /** set url with api key api */
        const url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&cnt=15&APPID=`;
        const apiKey = process.env.REACT_APP_API_OPEN_WEATHER;

        const fullUrl = url + apiKey;

        /** get data */
        setError(false);
        setFetchingCities(true);
        setButtonStatus(true);
        const data = await fetch(fullUrl);
        setFetchingCities(false);
        setButtonStatus(false);

        /** verify if data is valid and set error with is not valid */
        if (!data.ok) {
            setCities([]);
            setError(true);
            return;
        }

        /** get data in json object */
        const result = await data.json();

        /** the api was returned repeated cities, I need to filter this by name, because the id is different, but the name and city is the same */
        let uniq = {};
        const citiesFiltered = result?.list.filter(
            (city) => !uniq[city.name] && (uniq[city.name] = true)
        );

        /** set values in useCities */
        setCities(citiesFiltered);
    }

    return (
        <>
            {/** content to standard container */}
            <Content>
                <MapContainer>
                    <GoogleMap
                        mapClicked={mapClicked}
                        markerClicked={markerClicked}
                        lat={useMarker.lat}
                        lng={useMarker.lng}
                    />
                </MapContainer>
                <ButtonsContainer>
                    <ButtonSearch
                        disabled={useButtonStatus}
                        onClick={fetchCities}
                    >
                        Search
                    </ButtonSearch>
                </ButtonsContainer>
                {useError && (
                    <H4 color="secondary">
                        Unfortunately we cannot load cities in this region :(
                    </H4>
                )}
                <ContainerCities>
                    <Grid item>{fetchingCities && <LinearProgress />}</Grid>
                    <ContainerCities>
                        {useCities?.map((city, i) => {
                            return (
                                <Grid key={city.id} item md={4} xs={6}>
                                    <Link
                                        to={{
                                            pathname: CITY_INFO,
                                            state: { city },
                                        }}
                                    >
                                        {city.name}
                                    </Link>
                                </Grid>
                            );
                        })}
                    </ContainerCities>
                </ContainerCities>
            </Content>
        </>
    );
};

/** set map container in home */
const MapContainer = styled.div`
    max-width: "1232px";
    height: 540px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

/** set buttonContainer */
const ButtonsContainer = styled(Grid).attrs({ container: true, spacing: 2 })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(1)}px;
`;

/** create button by Button material-ui */
const ButtonSearch = styled(Button).attrs({
    color: "primary",
    variant: "contained",
})`
    text-align: center;
`;

const ContainerCities = styled(Grid).attrs({ container: true })``;

export default Home;

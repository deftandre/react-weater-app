import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, LinearProgress } from "@material-ui/core";
import { Content } from "ui";
import GoogleMap from "./google-map";
import { CITY_INFO } from "routes";

const Home = () => {
    const [useMarker, setMarker] = useState({});
    const [fetchingCities, setFetchingCities] = useState(false);
    const [useButtonStatus, setButtonStatus] = useState(true);
    const [useCities, setCities] = useState([]);

    function mapClicked(mapProps, map, e) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMarker({ lat, lng });
        setButtonStatus(false);
    }

    function markerClicked() {
        setMarker({});
        setButtonStatus(true);
    }

    async function fetchCities() {
        const lat = useMarker.lat;
        const lng = useMarker.lng;

        const url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=15&APPID=`;
        const apiKey = process.env.REACT_APP_API_OPEN_WEATHER;

        const fullUrl = url + apiKey;

        setFetchingCities(true);
        setButtonStatus(true);
        const data = await fetch(fullUrl);
        setFetchingCities(false);
        setButtonStatus(false);

        const result = await data.json();

        console.log(result.list);

        //the api was returned repeated cities, I need to filter this by name, because the id is different, but the name is the same
        let uniq = {};
        const citiesFiltered = result.list.filter(
            (city) => !uniq[city.name] && (uniq[city.name] = true)
        );

        setCities(citiesFiltered);
    }

    return (
        <>
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
                <Grid container>
                    <Grid item>{fetchingCities && <LinearProgress />}</Grid>
                    <Grid container>
                        {useCities
                            .filter(
                                (city, index) =>
                                    useCities.indexOf(city) === index
                            )
                            .map((city) => {
                                const urlDestination =
                                    CITY_INFO + `/${city.id}`;

                                return (
                                    <Grid item xs={4}>
                                        <Link key={city.id} to={urlDestination}>
                                            {city.name}
                                        </Link>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Grid>
            </Content>
        </>
    );
};

const MapContainer = styled.div`
    max-width: "1232px";
    height: 540px;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const ButtonsContainer = styled(Grid).attrs({ container: true, spacing: 2 })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(1)}px;
`;

const ButtonSearch = styled(Button).attrs({
    color: "primary",
    variant: "contained",
})`
    text-align: center;
`;

export default Home;

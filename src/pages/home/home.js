import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content } from "ui";
import GoogleMap from "./google-map";

const Home = () => {
    return (
        <>
            <Content>
                <MapContainer>
                    <GoogleMap />
                </MapContainer>
                <ButtonsContainer>
                    <ButtonSearch>Search</ButtonSearch>
                </ButtonsContainer>
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
`;

const ButtonSearch = styled(Button).attrs({
    color: "primary",
    component: Link,
    variant: "contained",
})`
    text-align: center;
`;

export default Home;

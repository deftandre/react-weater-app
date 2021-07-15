import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

import { Content, H3, H4 } from "ui";
import { HOME } from "routes";

/** function component to render cities weather info */
const CityInfo = () => {
    /** get last page state sent by Link with hook useLocation() */
    const { state } = useLocation();

    /** verify if state is valid, if not valid redirect to Home*/
    if (!state) {
        return <Redirect to={HOME} />;
    }

    /** get city in state */
    const { city } = state;

    /** get temperatures in city main infos */
    const { temp_min, temp_max } = city.main;

    /** get icon name in openweather api */
    const { icon } = city.weather[0];

    return (
        <>
            {/** content to standard container */}
            <Content>
                <CityContainer>
                    <WeatherItem>
                        <H3>{city.name}</H3>
                    </WeatherItem>
                    <WeatherContainer>
                        <LogoContainer>
                            <LogoWeather
                                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                            />
                        </LogoContainer>
                        <TemperatureContainer>
                            <WeatherItem>
                                <H4>
                                    <ArrowDownward color="secondary" />
                                    {Math.trunc(temp_min)}
                                    {"º"}
                                </H4>
                            </WeatherItem>
                            <WeatherItem>
                                <H4>
                                    <ArrowUpward color="primary" />
                                    {Math.trunc(temp_max)}
                                    {"º"}
                                </H4>
                            </WeatherItem>
                        </TemperatureContainer>
                    </WeatherContainer>
                    <ButtonContainer>
                        <Button
                            color="secondary"
                            size="large"
                            component={Link}
                            to={HOME}
                        >
                            {"<"} go back to the map
                        </Button>
                    </ButtonContainer>
                </CityContainer>
            </Content>
        </>
    );
};

/** Components styled by styled component to clean code */

/** create a city grid container */
const CityContainer = styled(Grid).attrs({
    container: true,
    direction: "column",
})``;

/** create a weather grid container */
const WeatherContainer = styled(Grid).attrs({ container: true, item: true })``;

/** create a temperature grid container */
const TemperatureContainer = styled(Grid).attrs({
    direction: "column",
    container: true,
    item: true,
    xs: 5,
    sm: 9,
    lg: 10,
})`
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

/** create a weather grid item */
const WeatherItem = styled(Grid).attrs({ item: true })``;

/** create a button container */
const ButtonContainer = styled(Grid).attrs({ item: true })`
    margin-top: ${({ theme }) => theme.spacing(2)}px;
    align-items: center;
    display: flex;
`;

/** create a container to weather logo */
const LogoContainer = styled(Grid).attrs({ item: true, xs: 6, sm: 2, lg: 1 })``;

/** create a img component to weather logo */
const LogoWeather = styled.img.attrs({
    alt: "weatherStatus",
})`
    background-color: #a0a0a0;
`;

export default CityInfo;

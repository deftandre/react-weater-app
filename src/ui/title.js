import React from "react";
import styled from "styled-components";
import { Typography, useMediaQuery } from "@material-ui/core";

const Title = styled(Typography).attrs({
    gutterBottom: true,
    align: "center",
})``;

const H4Config = styled(Title).attrs({})`
    font-size: ${({ theme }) =>
        useMediaQuery(theme.breakpoints.down("sm")) ? "25px" : null};
`;

export const H4 = (props) => <H4Config variant="h4" {...props} />;

export default Title;

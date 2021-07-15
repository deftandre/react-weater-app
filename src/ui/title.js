import React from "react";
import styled from "styled-components";
import { Typography, useMediaQuery } from "@material-ui/core";

/** config a Title with Typography */
const Title = styled(Typography).attrs({
    gutterBottom: true,
})``;

/** config a responsive h3 component using Typography */
const H3Config = styled(Title).attrs({})`
    font-size: ${({ theme }) =>
        useMediaQuery(theme.breakpoints.down("sm")) ? "35px" : null};
`;

/** config a responsive h4 component using Typography */
const H4Config = styled(Title).attrs({})`
    font-size: ${({ theme }) =>
        useMediaQuery(theme.breakpoints.down("sm")) ? "25px" : null};
`;

export const H3 = (props) => <H3Config variant="h3" {...props} />;
export const H4 = (props) => <H4Config variant="h4" {...props} />;

export default Title;

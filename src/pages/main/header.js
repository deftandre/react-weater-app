import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar as MaterialToolbar } from "@material-ui/core";
import HeaderCommon from "./header-common";

/** set header */
const Header = () => (
    <AppBar color="primary">
        <Toolbar>
            <HeaderCommon />
        </Toolbar>
    </AppBar>
);

/** styled header size the acording with material default breakingpoints */
const Toolbar = styled(MaterialToolbar)`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
`;

export default Header;

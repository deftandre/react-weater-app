import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar as MaterialToolbar } from "@material-ui/core";
import HeaderCommon from "./header-common";

const Header = () => (
    <AppBar color="primary">
        <Toolbar>
            <HeaderCommon />
        </Toolbar>
    </AppBar>
);

const Toolbar = styled(MaterialToolbar)`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
`;

export default Header;

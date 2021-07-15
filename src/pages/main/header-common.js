import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME } from "routes";
import Logo from "./logo";

/** a common header with a logo */
const HeaderCommon = () => {
    return (
        <>
            <LogoContainer>
                <LinkLogo to={HOME}>
                    <Logo />
                </LinkLogo>
            </LogoContainer>
        </>
    );
};

/** set div space */
const LogoContainer = styled.div`
    flex-grow: 1;
`;

/** set logo style */
const LinkLogo = styled(Link)`
    display: inline-block;
`;

export default HeaderCommon;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME } from "routes";
import Logo from "./logo";

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

const LogoContainer = styled.div`
    flex-grow: 1;
`;

const LinkLogo = styled(Link)`
    display: inline-block;
`;

export default HeaderCommon;

import styled from "styled-components";
import MainLogo from "images/Logo.png";

/** create a logo component and set size */
const Logo = styled.img.attrs({
    src: MainLogo,
    alt: "Weather App",
})`
    height: 38px;
    width: 180px;
`;

export default Logo;

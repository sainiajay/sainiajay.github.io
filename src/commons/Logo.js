import LogoSVG from "../assets/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.a`
    max-width: ${props => props.theme.logo.width};
    max-height: ${props => props.theme.logo.width};
    position: relative;
    padding: 10px;
    cursor: pointer;
    svg, img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const Logo = styled(LogoSVG)`
    background: #000;
    fill: #fff;
`;

export const LogoInverted = styled(LogoSVG)`
    background: #fff;
    fill: #000;
`;

export default Logo;
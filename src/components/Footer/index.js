import React from 'react';
import styled from 'styled-components';
import { LogoInverted } from '../../commons/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { media } from "../../commons/StyleUtils";

const FooterWrapper = styled.footer`
    background: #000;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1.5fr));
    grid-gap: 2em;
    ${media.tiny`
        padding: 1em 4em;
    `}

    ${media.phone`
        padding: 2em 5em;
    `}

    ${media.tablet`
        padding: 2em 15em;
    `}
`;

const StyledLogoContainer = styled.div`
    display: flex;
    max-width: 80px;
    height: fit-content;
    position: relative;
    margin-bottom: 2em;
    cursor: pointer;
    svg, img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
`;

const SocialIcon = styled.a`
    display: flex;
    position: relative;
    overflow-x: hidden;
    transition: all 100ms linear;
    color: #fff;
    font-size: 1.5em;
`;

const Copyright = styled.h5`
    display: flex;
    font-size: 1.25em;
    font-weight: lighter;
`;

const Resume = styled.a`
    padding: 1em;
    margin: 2em 0;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 2px;
    font-weight: 400;
    font-size: 1.25em;
    width: fit-content;
`;

const ViewSource = styled.a`
    color: #fff;
    font-size: 1.2em;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2em;
`;

const BrandingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2em;

    ${media.tiny`
        flex-direction: row;
    `}
    
    ${media.phone`
        flex-direction: row;
    `}

    ${media.tablet`
        flex-direction: column;
    `}
`;

const FlagContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1em;
    label {
        margin: 0 10px;
    }
`;

const MyCountryFlag = styled.img`
    width: 2em;
`;

const FlagCoyrightWrapper = styled.div`
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <BrandingContainer>
                <StyledLogoContainer>
                    <LogoInverted/>
                </StyledLogoContainer>
                <FlagCoyrightWrapper>
                    <Copyright>&copy; 2020 Ajay Saini</Copyright>
                    <FlagContainer>
                        <MyCountryFlag src="https://country-flags.scdn.co/flags/in.svg" />
                        <label>India</label>
                    </FlagContainer>
                </FlagCoyrightWrapper>
            </BrandingContainer>
            <LinksContainer>
                <SocialContainer>
                    <SocialIcon href="https://www.linkedin.com/in/sainiajay96" target="_blank">
                        <FontAwesomeIcon fixedWidth icon={faLinkedinIn} size="lg"/>
                    </SocialIcon>
                    <SocialIcon href="https://github.com/sainiajay" target="_blank">
                        <FontAwesomeIcon fixedWidth icon={faGithub} size="lg"/>
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com/sainiajay96" target="_blank">
                        <FontAwesomeIcon fixedWidth icon={faTwitter} size="lg"/>
                    </SocialIcon>
                    <SocialIcon href="https://medium.com/@sainiajay" target="_blank">
                        <FontAwesomeIcon fixedWidth icon={faMediumM} size="lg"/>
                    </SocialIcon>
                </SocialContainer>
                <Resume href="https://drive.google.com/uc?id=13B-dhMOoWjwiQgXKgwc5zeyoEVoaRO0o&export=download" download>
                    Download Resume
                </Resume>
                <ViewSource href="https://github.com/sainiajay/sainiajay.github.io" target="_blank" rel="noopner noreferer">
                    View source on Github &nbsp;
                    <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} />
                </ViewSource>
            </LinksContainer>
        </FooterWrapper>
    );
};

export default Footer;
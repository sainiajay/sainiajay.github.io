import React from 'react';
import styled from 'styled-components';
import { LogoInverted } from '../../commons/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.footer`
    background: #000;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    padding: 2em 15em;
`;

const StyledLogoContainer = styled.div`
    display: flex;
  max-width: 80px;
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  svg, img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 100px);
    margin: 6px;
`;


const SocialIcon = styled.a`
  font-size: 1.5em;
  color: ${props => props.theme.color.text.primary};
  line-height: 2em;
  background-color: rgba(0, 0, 0, .9);
  color: #fff;
  border-radius: 1em;
  position: relative;
  padding: 0 0.4em;
  transition: all 100ms linear;
  overflow-x: hidden;
  align-items: center;
`;

const IconWrapper = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    place-content: center;
    place-items: center;
`;


const Copyright = styled.h5`
    display: flex;
    font-size: 1.25em;
    font-weight: lighter;
`;

const Resume = styled.a`
    padding: 1em;
    margin: 1em 2em;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 2px;
    font-weight: 400;
    font-size: 1.25em;
    width: fit-content;
`;

const ViewSource = styled.a`
    color: #fff;
    margin: 1em 2.5em;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
`;

const FlagContainer = styled.div`
    display: flex;
    align-items: center;
    label {
        margin: 0 10px;
    }
`;

const MyCountryFlag = styled.img`
    width: 2em;
    margin: 1em 0;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <ColumnContainer>
                <StyledLogoContainer>
                    <LogoInverted/>
                </StyledLogoContainer>
                <Copyright>&copy; 2020 Ajay Saini</Copyright>
                <FlagContainer>
                    <MyCountryFlag src="https://country-flags.scdn.co/flags/in.svg" />
                    <label>India</label>
                </FlagContainer>
            </ColumnContainer>
            <ColumnContainer>
                <SocialContainer>
                    <SocialIcon href="https://www.linkedin.com/in/sainiajay96" target="_blank" >
                        <IconWrapper>
                            <FontAwesomeIcon fixedWidth icon={faLinkedinIn} size="lg"/>
                        </IconWrapper>
                    </SocialIcon>
                    <SocialIcon href="https://github.com/sainiajay" target="_blank" >
                        <IconWrapper>
                            <FontAwesomeIcon fixedWidth icon={faGithub} size="lg"/>
                        </IconWrapper>
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com/sainiajay96" target="_blank" >
                        <IconWrapper>
                            <FontAwesomeIcon fixedWidth icon={faTwitter} size="lg"/>
                        </IconWrapper>
                    </SocialIcon>
                    <SocialIcon href="https://medium.com/@sainiajay" target="_blank">
                        <IconWrapper>
                            <FontAwesomeIcon fixedWidth icon={faMediumM} size="lg"/>
                        </IconWrapper>
                    </SocialIcon>
                </SocialContainer>
                <Resume href="https://drive.google.com/uc?id=13B-dhMOoWjwiQgXKgwc5zeyoEVoaRO0o&export=download" download>
                    Download Resume
                </Resume>
                <ViewSource href="https://github.com/sainiajay/sainiajay.github.io" target="_blank" rel="noopner noreferer">
                    View source on Github &nbsp;
                    <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} />
                </ViewSource>
            </ColumnContainer>
        </FooterWrapper>
    );
};

export default Footer;
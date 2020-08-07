import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../commons/Logo';

const StyledContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0px 50px;
  background-color: ${props => props.theme.color.bg.secondary};
  transition: ${({theme}) => theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  box-shadow: ${({scrollDirection, theme}) => scrollDirection === 'up' ? `0 10px 30px -10px ${theme.color.shadowNavy}` : 'none'};
  transform: translateY(
    ${({scrollDirection, theme}) => (scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  display: flex;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;
  display: flex;
  justify-content: space-between;
`;

const StyledLogoContainer = styled.div`
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

const NameContainer = styled.div`
  display: flex;
  font-weight: bold;
  letter-spacing: 1em;
  margin: auto;
  font-size: 1.5em;
`;

const StyledHamburger = styled.div`
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  padding-right: 20px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: ${props => props.theme.color.text.primary};
  border: 0;
  background-color: transparent;
  display: flex;
  align-self: flex-end;
`;

const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.hamburgerWidth}px;
  height: 24px;
`;

const StyledHamburgerInner = styled.div`
  background-color: ${props => props.theme.color.text.primary};
  position: absolute;
  width: ${props => props.theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${props => props.theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.color.text.primary};
    position: absolute;
    left: auto;
    right: 0;
    width: ${({ theme }) => theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? props.theme.hamBeforeActive : props.theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? props.theme.hamAfterActive : props.theme.hamAfter)};
  }
`;


const Header = (props) => {
  const [menuOpen, updateMenu] = useState(false);
  return (
  <StyledContainer>
    <StyledNav>
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <NameContainer>
        AJAY SAINI
      </NameContainer>
      <StyledHamburger onClick={() => updateMenu(!menuOpen)}>
        <StyledHamburgerBox>
          <StyledHamburgerInner menuOpen={menuOpen} />
        </StyledHamburgerBox>
      </StyledHamburger>
    </StyledNav>
    {/* <Menu menuOpen={menuOpen}/> */}
  </StyledContainer>
  );
}


export default Header;
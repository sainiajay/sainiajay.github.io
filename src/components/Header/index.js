import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';

const StyledContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0px 50px;
  background-color: transparent;
  transition: ${({theme}) => theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  box-shadow: ${({scrollDirection, theme}) => scrollDirection === 'up' ? `0 10px 30px -10px ${theme.colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${({scrollDirection, theme}) => (scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  display: flex;
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled.div`
  a {
    display: block;
    color: ${props => props.theme.colors.green};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${props => props.theme.colors.transGreen};
      }
    }
    svg {
      fill: none;
      transition: ${props => props.theme.transition};
      user-select: none;
    }
  }
`;

const StyledHamburger = styled.div`
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
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
  background-color: ${props => props.theme.colors.green};
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
    background-color: ${({ theme }) => theme.colors.green};
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


const Header = () => {
  const [menuOpen, updateMenu] = useState(false);

  return (
  <StyledContainer>
    <StyledNav>
      <StyledHamburger onClick={() => updateMenu(!menuOpen)}>
        <StyledHamburgerBox>
          <StyledHamburgerInner menuOpen={menuOpen} />
        </StyledHamburgerBox>
      </StyledHamburger>
    </StyledNav>
    <Menu menuOpen={menuOpen}/>
  </StyledContainer>
  );
}


export default Header;
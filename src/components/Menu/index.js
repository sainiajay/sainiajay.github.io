import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  outline: 0;
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    height: 100%;
`;

const Sidebar = styled.aside`
  flex-direction: column;
  display: flex;
  background-color: ${props => props.theme.color.bg.primary};
  height: 100%;
  width: 100%;
  position: relative;
`;

const Divider = styled.div`
    display: flex;
    height: 100%;
    width: 5px;
    background-color: ${props => props.theme.color.fg.primary};
`;

const NavLinks = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
`;

const NavListItem = styled.div`
  position: relative;
`;

const NavLink = styled.a`
    font-size: 18px;
`;

const Menu = ( { menuOpen } ) => {
    return (
        <StyledContainer
            menuOpen={menuOpen}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}>
            <MenuWrapper>
                <Sidebar>
                    Some things...
                </Sidebar>
                <Divider />
                <Sidebar>
                    <NavLinks>
                        <NavListItem>
                            <NavLink>
                                About me
                            </NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink>
                                Work
                            </NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink>
                                Projects
                            </NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink>
                                Skills
                            </NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink>
                            Education
                            </NavLink>
                        </NavListItem>
                    </NavLinks>
                </Sidebar>
            </MenuWrapper>
        </StyledContainer>
    );
}

export default Menu;
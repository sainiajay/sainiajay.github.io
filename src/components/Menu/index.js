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
  display: flex;
`;

const Sidebar = styled.aside`
  flex-direction: column;
  background-color: #010101;
  padding: 50px;
  width: 50%;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: -10px 0px 30px -15px grey;
`;

const NavLinks = styled.nav`
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const NavListItem = styled.div`
  margin: 40px 0;
  position: relative;
  justify-content: center;
  display: block;
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
        </StyledContainer>
    );
}

export default Menu;
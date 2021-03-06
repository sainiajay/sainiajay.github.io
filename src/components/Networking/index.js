import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

const StyledContainer = styled.div`
    position: fixed;
    left: 0;
    margin-left: 10px;
    top: 50vh;
    transform: translateY(-50%);
`;

const Item = styled.a`
  margin: 1em 0.5em;
  display: block;
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
  width: 2em;
  label {
    display: none;
    font-size: 0.9em;
    font-family: 'Montserrat';
    margin-left: 0.5em;
  }
  svg {
    vertical-align: middle;
  }
  &:hover {
    width: 7em;
    label {
      display: inline-block;
    }
  }
`;

const Networking = () => 
    <StyledContainer>
        <Item href="https://www.linkedin.com/in/sainiajay96" target="_blank" >
          <FontAwesomeIcon fixedWidth icon={faLinkedinIn} />
          <label>LinkedIn</label>
        </Item>
        <Item href="https://github.com/sainiajay" target="_blank" >
          <FontAwesomeIcon fixedWidth icon={faGithub} />
          <label>Github</label>
        </Item>
        <Item href="https://twitter.com/sainiajay96" target="_blank" >
          <FontAwesomeIcon fixedWidth icon={faTwitter} />
          <label>Twitter</label>
        </Item>
        <Item href="https://medium.com/@sainiajay" target="_blank">
          <FontAwesomeIcon fixedWidth icon={faMediumM} />
          <label>Medium</label>
        </Item>
    </StyledContainer>

export default Networking;
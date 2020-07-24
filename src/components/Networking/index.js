import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: fixed;
    left: 0;
    margin-left: 10px;
    top: calc(50vh - 120px);
`;

const Item = styled.a`
  margin: 1em 0.5em;
  display: block;
  font-size: 16px;
  width: 2em;
  color: ${props => props.theme.color.text.primary};
  line-height: 2em;
  align-self: flex-end;
  background-color: rgba(15, 20, 30, .9);
  color: #fff;
  border-radius: 1em;
  position: relative;
  padding: 0 0.5em;
  transition: all 100ms linear;
  overflow-x: hidden;
  &:before {
    margin-right: 0.5em;
  }
  &:after {
    content: '${({ label }) => label}';
    display: inline-block;
    font-size: 0.9em;
    font-family: 'Montserrat';
  }
  &:hover {
    width: 7em;
  }
`;

const Networking = () => 
    <StyledContainer>
        <Item className="lni lni-linkedin-original" href="https://www.linkedin.com/in/sainiajay96" target="_blank" label="LinkedIn"/>
        <Item className="lni lni-github-original" href="https://github.com/sainiajay" target="_blank" label="Github"/>
        <Item className="lni lni-twitter-original" href="https://twitter.com/sainiajay96" target="_blank" label="Twitter"/>
        <Item className="lni lni-medium" href="https://medium.com/@sainiajay" target="_blank" label="Medium"/>
    </StyledContainer>

export default Networking;
import React from 'react';
import styled from 'styled-components';

const transitionTime = '0.1s';
const StyledContainer = styled.div`
    position: fixed;
    width: 40px;
    left: 0;
    margin-left: 10px;
    top: calc(50vh - 120px);
`;

const Item = styled.a`
  margin: 10px;
  font-size: 20px;
  color: ${props => props.theme.color.text.primary};
  line-height: 2em;
  align-self: flex-end;
  &:hover {
      transform: translateY(-5px);
  }
  transition: all ${transitionTime} ease-in-out;  
`;

const Networking = () => 
    <StyledContainer>
        <Item className="lni lni-linkedin-original" href="https://www.linkedin.com/in/sainiajay96" target="_blank"/>
        <Item className="lni lni-github-original" href="https://github.com/sainiajay" target="_blank"/>
        <Item className="lni lni-twitter-original" href="https://twitter.com/sainiajay96" target="_blank"/>
        <Item className="lni lni-medium" href="https://medium.com/@sainiajay" target="_blank"/>
    </StyledContainer>

export default Networking;
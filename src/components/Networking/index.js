import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: fixed;
    width: 40px;
    left: 0;
    margin-left: 10px;
    top: calc(50vh - 120px);
`;

const Item = styled.i`
  margin: 10px;
  font-size: 20px;
  line-height: 2em;
  align-self: flex-end;
  cursor: pointer;
`;

const Networking = () => 
    <StyledContainer>
        <Item className="lni lni-linkedin-original" />
        <Item className="lni lni-github-original" />
        <Item className="lni lni-twitter-original" />
        <Item className="lni lni-medium" />
    </StyledContainer>

export default Networking;
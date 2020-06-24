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
  font-size: 25px;
  line-height: 2em;
  align-self: flex-end;
  cursor: pointer;
`;

const Networking = () => 
    <StyledContainer>
        <Item className="lni lni-linkedin" />
        <Item className="lni lni-github" />
        <Item className="lni lni-twitter" />
        <Item className="lni lni-medium" />
    </StyledContainer>

export default Networking;
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    & > * {
        align-self: center;
    }
    border: 1px solid yellow;
`;

const withFrame = (Element, frameId, BackgroundLayer) => () => {
    return (
        <Div id={frameId} >
            <Element />
            {
                BackgroundLayer && (
                    <BackgroundLayer />
                )
            }
        </Div>
    );
}

export default withFrame;
import React from 'react';
import styled from 'styled-components';

const Div = styled.section`
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    & > * {
        align-self: center;
    }
    border: 1px solid yellow;
    padding: 50px;
`;

export const BackgroundTextLayer = styled.div`
    z-index: 0;
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: ${props => props.theme.color.bg.secondary};
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 400px;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    transform: skewY(-10deg);
    div {
        display: inline-flex;
        text-shadow: 1px 1px 1px rgba(240, 240, 240, 0.5);
    }
}
`;

const withFrame = (Element, sectionId, backgroundText) => () => {
    const BackgroundLayer = () => {
        const text = backgroundText || "";
        const textSplits = text.split('');
        return (
            <BackgroundTextLayer>
                {
                    textSplits.map(letter => (
                        <div>{letter}</div>
                    ))
                }
            </BackgroundTextLayer>
        )
    }
    return (
        <Div id={sectionId} >
            <Element />
            <BackgroundLayer />
        </Div>
    );
}

export default withFrame;
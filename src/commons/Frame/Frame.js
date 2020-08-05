import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    & > * {
        align-self: center;
    }
    padding: 50px 100px;
`;

export const BackgroundTextLayer = styled.div`
    z-index: 0;
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    top: calc(100vh * index);
    bottom: 0;
    right: 0;
    left: 0;
    color: ${props => props.theme.color.bg.secondary};
    place-items: center;
    font-family: monospace;
    font-size: 400px;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    /* transform: skewY(-10deg); */
    div {
        display: inline-flex;
        text-shadow: 1px 1px 1px rgba(240, 240, 240, 0.5);
    }
}
`;

const withFrame = (Element) => forwardRef((props, ref) => {
    return (
        <Section id={props.id} ref={ref}>
            <Element {...props}/>
        </Section>
    );

})

export default withFrame;
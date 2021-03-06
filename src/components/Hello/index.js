import React from 'react';
import withFrame from '../../commons/Frame/Frame';
import { media } from "../../commons/StyleUtils";
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    z-index: 1;
`;

const Line = styled.div`
    line-height: 2em;
    font-weight: 900;
    text-align: center;
    font-size: 2em;
    ${media.tiny`
        font-size: 2em;
    `}

    ${media.phone`
        font-size: 3em;
    `}

    ${media.tablet`
        font-size: 4em;
    `}    
`;

export const BackgroundTextLayer = styled.div`
    z-index: 0;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: ${props => props.theme.color.bg.secondary};
    align-items: center;
    font-family: monospace;
    font-size: 400px;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    transform: skewY(-10deg);
    div {
        display: flex;
        width: 100%;
        text-shadow: 1px 1px 1px rgba(240, 240, 240, 0.5);
    }
}
`;

const Background = () => (
    <BackgroundTextLayer>
        <div>Hello</div>
    </BackgroundTextLayer>
);

const Hello = () => {
    return (
        <Wrapper>
            <Line data-sal="slide-up" data-sal-delay="200">
                I am a Software Engineer
            </Line>
            <Line data-sal="slide-up" data-sal-delay="250">
                who loves to build softwares
            </Line>
            <Line data-sal="slide-up" data-sal-delay="300">
                &mdash; based in Delhi.
            </Line>
            <Line data-sal="slide-up" data-sal-delay="350">
                <span role="img" aria-label="Hello!">✌️</span>
            </Line>
        </Wrapper>
    );
}

export default withFrame(Hello, 'hello', 'Hello');
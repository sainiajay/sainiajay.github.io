import styled from "styled-components";
import withScrollbarReveal from './ScrollReveal';

export const SectionHeader = withScrollbarReveal(styled.header`
    font-size: 12px;
    margin: 10px 0;
    p {
        color: ${props => props.theme.color.silver};
        font-size: 1.5em;
    }
`);

export const Eyebrow = styled.h5`
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 0.8em;
    line-height: 1.5;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin-bottom: 0;
    color: ${props => props.theme.color.silver};
`;

export const Heading = styled.h2`
    font-size: 2.5em;
`;
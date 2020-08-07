import styled from "styled-components";

export const SectionHeader = styled.header.attrs({
    'data-sal': 'slide-up',
    'data-sal-delay': '100',
    'data-sal-duration': '500'
})`
    font-size: 12px;
    margin: 10px 0;
    p {
        color: ${props => props.theme.color.silver};
        font-size: 1.3em;
    }
`;

export const Eyebrow = styled.h5`
    font-size: 1em;
    font-weight: 400;
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
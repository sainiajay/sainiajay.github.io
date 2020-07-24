import React from 'react';
import withFrame from '../../commons/Frame/Frame';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    z-index: 1;
`;
const CenterHeader = styled(SectionHeader)`
    text-align: center;
`;

const SuperHeading = styled(Heading)`
    font-size: 4.5em;
`
const ContentWrapper = styled.div`
    display: grid;
    width: 60%;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: auto;
    margin-top: 40px;
`;

const Text = styled.div`
    p {
        font-size: 1.2em;
    }
`;

const ActionWrapper = styled.div`
    flex-flow: column nowrap;
    justify-content: center;
`;

const Action = styled.a`
    display: block;
    width: 100%;
    line-height: 2em;
    font-size: 1.5em;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    color: ${props => props.theme.color.text.primary};
    &:hover {
        text-decoration: underline;
    }
    span {
        margin-right: 10px;
    }
`;

const HireMe = () => {
    return (
        <Wrapper>
            <CenterHeader>
                <Eyebrow>
                    Wants to hire me?
                </Eyebrow>
                <SuperHeading>
                    Let&apos;s Work Together <span>&rarr;</span>
                </SuperHeading>
            </CenterHeader>
            <ContentWrapper>
                <Text>
                    <p>
                        I am currently looking for a job opportunity and wish to work with product-based company. I am highly interested to be a part of team which has core values 
                    </p>
                </Text>
                <ActionWrapper>
                    <Action>
                        <span class="lni lni-linkedin"></span>Connect on LinkedIn  
                    </Action>
                    <Action>
                        <span class="lni lni-envelope"></span>Drop an Email
                    </Action>
                    <Action>
                        <span class="lni lni-download"></span>Download my Resume 
                    </Action>
                </ActionWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default withFrame(HireMe);
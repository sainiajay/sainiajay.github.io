import React from "react";
import withFrame from "../../commons/Frame/Frame";
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import styled from "styled-components";
import myImage from './../../assets/img/me.png';

const StyledContainer = styled.div``;

const StyledContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
`;

const Body = styled.div`
    flex: 2 1 50%;
    p {
        font-size: 1.4em;
    }  
`;

const Image = styled.div`
    flex: 1 1;
    display: flex;
    place-content: center;
    img {
        border-radius: 2px;
        filter: grayscale(50);
        &:hover {
            filter: none;
        }
    }
`;

const AboutMe = ({data}) => {
    return (
        <StyledContainer>
            <SectionHeader>
                <Eyebrow>
                    About Me
                </Eyebrow>
                <Heading>
                    Who I am
                </Heading>
            </SectionHeader>
            <StyledContent>
                <Body>
                    <p>I am Ajay Saini, a software engineer based in Bangalore, India.</p>
                    <p>I love creating softwares, whether that be websites, shopping portals, business applications, or anything in between. My passion for building software products brings up quality and amazing human experiences.</p>
                    <p>I began my coding journey in school and joined college to pursue engineering in Computer Science. Today, I work for with one of the Big-4s consulting firm.</p>
                </Body>
                <Image>
                    <img src={myImage} alt={data.name} />
                </Image>
            </StyledContent>
        </StyledContainer>
    );
}

export default withFrame(AboutMe, 'about');
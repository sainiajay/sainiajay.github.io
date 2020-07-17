import React from "react";
import withFrame from "../../commons/Frame/Frame";
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import { Skills } from "../Skills";
import styled from "styled-components";
import myImage from './../../assets/img/me.png';

const StyledContainer = styled.div`
    z-index: 2;
`;

// const Header = styled.header`
//     font-size: 12px;
//     margin: 10px 0;
// `;

// const StyledHeader = styled.h2`
//     font-size: 2em;
// `;

const StyledContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const Body = styled.div`
    width: 60%;
    margin-right: 20px;
`;

const Image = styled.div`
    margin: 20px;
    img {
        border-radius: 2px;
        filter: grayscale(50);
        &:hover {
            filter: none;
        }
    }
`;

const AboutMe = () => {
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
                    <Skills />
                </Body>
                <Image>
                    <img src={myImage} alt="Ajay Saini" />
                </Image>
            </StyledContent>
        </StyledContainer>
    );
}

export default withFrame(AboutMe, 'about');
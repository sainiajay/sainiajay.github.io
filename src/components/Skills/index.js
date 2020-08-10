import React from 'react';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import withFrame from '../../commons/Frame/Frame';
import javaLogo from './../../assets/img/java.svg';
import graphQlLogo from './../../assets/img/graphql.svg';
import nodeJsLogo  from './../../assets/img/nodejs.svg';
import reactJsLogo from './../../assets/img/react.svg';
import mongoDbLogo from './../../assets/img/mongodb.svg';
import dockerLogo from './../../assets/img/docker.svg';
import javascriptLogo from './../../assets/img/javascript.png';
import goLogo from './../../assets/img/golang.png';
import springLogo from './../../assets/img/spring.svg';
import gradleLogo from './../../assets/img/gradle.png';
import gitLogo from './../../assets/img/git.png';
import gatsbyLogo from './../../assets/img/gatsby.svg';
import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
    z-index: 2;
    justify-content: center;
    max-width: 100%;
    position: relative;
`;

const spinRound = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const SkillReel = styled.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
`;

const SkillRowWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    
    /* &:nth-child(even) {
        transform: translateX(-25%);
    } */
`;

const SkillReelRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    animation: ${spinRound} ${props => props.time || 5}s linear infinite;
`;

const ReelItemGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;

const ReelItemWrapper = styled.div`
    display: flex;
    padding: 2em 4em;
`;

const WithStroke = styled.span`
    white-space: nowrap;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 5em;
    text-shadow: none;
`;

const WithoutStroke = styled.span`
    white-space: nowrap;
    color: #000;
    font-size: 5em;
`;

const ReelItem = (props) => 
<ReelItemWrapper>
    {
        props.stroke &&
            (<WithStroke>{props.children}</WithStroke>)
        ||
        (<WithoutStroke>{props.children}</WithoutStroke>)
    }
</ReelItemWrapper>

export const Skills = () => 
    <StyledContainer>
        <SectionHeader>
            <Eyebrow>
                Skillset
            </Eyebrow>
            <Heading>
                How I build things
            </Heading>
            <p>
                I’ve been lucky enough to work with amazing consulting companies for over 3 years and gain insight and knowledge and hone my skills.
            </p>
        </SectionHeader>
        <SkillReel>
            <SkillRowWrapper>
                <SkillReelRow time={45}>
                    <ReelItemGroup>
                        <ReelItem>Python</ReelItem>
                        <ReelItem stroke>Golang</ReelItem>
                    </ReelItemGroup>
                    <ReelItemGroup>
                        <ReelItem>Python</ReelItem>
                        <ReelItem stroke>Golang</ReelItem>
                    </ReelItemGroup>
                </SkillReelRow>    
            </SkillRowWrapper>
            <SkillRowWrapper>
                <SkillReelRow time={30}>
                    <ReelItemGroup>
                        <ReelItem stroke>MongoDB</ReelItem>
                        <ReelItem>Redis</ReelItem>
                    </ReelItemGroup>
                    <ReelItemGroup>
                        <ReelItem stroke>MongoDB</ReelItem>
                        <ReelItem>Redis</ReelItem>
                    </ReelItemGroup>
                </SkillReelRow>
            </SkillRowWrapper>
            <SkillRowWrapper>
                <SkillReelRow time={30}>
                    <ReelItemGroup>
                        <ReelItem stroke>MySQL</ReelItem>
                        <ReelItem>Kafka</ReelItem>
                    </ReelItemGroup>
                    <ReelItemGroup>
                        <ReelItem stroke>MySQL</ReelItem>
                        <ReelItem>Kafka</ReelItem>
                    </ReelItemGroup>
                </SkillReelRow>
            </SkillRowWrapper>
            <SkillRowWrapper>
                <SkillReelRow time={40}>
                    <ReelItemGroup>
                        <ReelItem stroke>Algorithms</ReelItem>
                        <ReelItem>Data Structure</ReelItem>
                    </ReelItemGroup>
                    <ReelItemGroup>
                        <ReelItem stroke>Algorithms</ReelItem>
                        <ReelItem>Data Structure</ReelItem>
                    </ReelItemGroup>
                </SkillReelRow>
            </SkillRowWrapper>
        </SkillReel>
    </StyledContainer>

export default withFrame(Skills, 'skills');
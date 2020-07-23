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

import styled from 'styled-components';

const StyledContainer = styled.div`
    z-index: 2;
    justify-content: center;
`;

const SkillWrapper = styled.div`
    overflow: hidden;
    border-radius: 6px;
    height: max-content;
    transition: transform 100ms ease-out;
    margin: 5px;
    background-color: ${props => props.theme.color.bg.secondary};
    padding: 5px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
`;

const SkillContainer = styled.div`
    position: relative;
    padding: 10px;
    img {
        display: block;
        width: 50px;
        height: 50px;
        margin: auto;
    }
`;

const SkillName = styled.div`
    display: block;
    line-height: 1.6;
    color: ${props => props.theme.color.text.primary};
    padding: 10px 5px 12px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    letter-spacing: 0.05em;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: color 100ms ease-out;
`;

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SkillCategoryGrid = styled.div`
    display: grid;
    margin: auto;
    width: fit-content;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
`;

const SkillCategory = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-orientation: sideways;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin: 20px 0;
`;

const SkillItem = (props) => 
    <SkillWrapper>
        <SkillContainer>
            <img src={props.src} alt={props.name}/>
        </SkillContainer>
        <SkillName>{props.name}</SkillName>
    </SkillWrapper>

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
        <SkillCategoryGrid>
            <SkillList>
                <SkillCategory>Tools</SkillCategory>
                <SkillItem name="Gradle" src={gradleLogo} />
                <SkillItem name="Git" src={gitLogo} />
                <SkillItem name="Gatsby" src={gatsbyLogo} />
            </SkillList>
            <SkillList>
                <SkillCategory>Frameworks</SkillCategory>
                <SkillItem name="Spring" src={springLogo} />
                <SkillItem name="GraphQL" src={graphQlLogo}/>
                <SkillItem name="ReactJS" src={reactJsLogo}/>
            </SkillList>
            <SkillList>
                <SkillCategory>Languages</SkillCategory>
                <SkillItem name="Java" src={javaLogo} />
                <SkillItem name="Javascript" src={javascriptLogo} />
                <SkillItem name="Go" src={goLogo} />
            </SkillList>
            <SkillList>
                <SkillCategory>Tech Stack</SkillCategory>
                <SkillItem name="NodeJS" src={nodeJsLogo}/>
                <SkillItem name="MongoDB" src={mongoDbLogo}/>
                <SkillItem name="Docker" src={dockerLogo}/>
            </SkillList>
        </SkillCategoryGrid>
    </StyledContainer>

export default withFrame(Skills, 'skills');
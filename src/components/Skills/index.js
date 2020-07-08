import React from 'react';
import withFrame from '../../commons/Frame/Frame';
import javaLogo from './../../assets/img/java.svg';
import graphQlLogo from './../../assets/img/graphql.svg';
import nodeJsLogo  from './../../assets/img/nodejs.svg';
import reactJsLogo from './../../assets/img/react.svg';
import mongoDbLogo from './../../assets/img/mongodb.svg';
import dockerLogo from './../../assets/img/docker.svg';

import styled from 'styled-components';

const SkillWrapper = styled.div`
    overflow: hidden;
    border-radius: 6px;
    transition: transform 100ms ease-out;
    margin: 5px;
    background-color: ${props => props.theme.color.bg.secondary};
    padding: 5px;

`;

const SkillContainer = styled.div`
    position: relative;
    padding: 10px;
    img {
        display: block;
        width: 50px;
        height: 50px;
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
    justify-content: center;
`;

const SkillItem = (props) => 
    <SkillWrapper>
        <SkillContainer>
            <img src={props.src} alt={props.name}/>
        </SkillContainer>
        <SkillName>{props.name}</SkillName>
    </SkillWrapper>

export const Skills = () => 
    <SkillList>
        <SkillItem name="Java" src={javaLogo} />
        <SkillItem name="GraphQL" src={graphQlLogo}/>
        <SkillItem name="NodeJS" src={nodeJsLogo}/>
        <SkillItem name="ReactJS" src={reactJsLogo}/>
        <SkillItem name="MongoDB" src={mongoDbLogo}/>
        <SkillItem name="Docker" src={dockerLogo}/>
    </SkillList>

export default withFrame(Skills, 'skills');
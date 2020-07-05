import React from 'react';
import withFrame from '../../commons/Frame/Frame';

import './Skills.css';

import { ReactComponent as JavaLogo } from './../../assets/img/java.svg';
import { ReactComponent as GraphQlLogo } from './../../assets/img/graphql.svg';
import { ReactComponent as NodeJsLogo } from './../../assets/img/nodejs.svg';
import { ReactComponent as ReactJsLogo } from './../../assets/img/react.svg';
import { ReactComponent as MongoDbLogo } from './../../assets/img/mongodb.svg';
import { ReactComponent as DockerLogo } from './../../assets/img/docker.svg';

const SkillItem = (props) => 
    <div className="Skill-Wrapper">
        <div className="Skill-Container">
            {props.children}
        </div>
        <div className="Skill-Name">{props.name}</div>
    </div>

export const Skills = () => 
    <div className="Skill-List">
        <SkillItem name="Java">
            <JavaLogo className="Skill-Logo"/>
        </SkillItem>
        <SkillItem name="GraphQL">
            <GraphQlLogo className="Skill-Logo" />
        </SkillItem>
        <SkillItem name="NodeJS">
            <NodeJsLogo className="Skill-Logo" />
        </SkillItem>
        <SkillItem name="ReactJS">
            <ReactJsLogo className="Skill-Logo" />
        </SkillItem>
        <SkillItem name="MongoDB">
            <MongoDbLogo className="Skill-Logo" />
        </SkillItem>
        <SkillItem name="Docker">
            <DockerLogo className="Skill-Logo" />
        </SkillItem>
    </div>

export default withFrame(Skills, 'skills');
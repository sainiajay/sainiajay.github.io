import React from 'react';
import withFrame from '../../commons/Frame/Frame';

import './Skills.css';

// import javaLogo from './../../assets/img/java.svg';
// import graphQlLogo from './../../assets/img/graphql.svg';
// import nodeJsLogo from './../../assets/img/nodejs.svg';
// import reactJsLogo from './../../assets/img/react.svg';
// import mongoDbLogo from './../../assets/img/mongodb.svg';
// import dockerLogo from './../../assets/img/docker.svg';

import { ReactComponent as JavaLogo } from './../../assets/img/java.svg';
import { ReactComponent as GraphQlLogo } from './../../assets/img/graphql.svg';
import { ReactComponent as NodeJsLogo } from './../../assets/img/nodejs.svg';
import { ReactComponent as ReactJsLogo } from './../../assets/img/react.svg';
import { ReactComponent as MongoDbLogo } from './../../assets/img/mongodb.svg';
import { ReactComponent as DockerLogo } from './../../assets/img/docker.svg';

const Skills = () => 
    <div>
        {/* <img className="Skill-Logo" src={javaLogo} alt="Java" />
        <img className="Skill-Logo" src={graphQlLogo} alt="GraphQL" />
        <img className="Skill-Logo" src={nodeJsLogo} alt="NodeJS" />
        <img className="Skill-Logo" src={reactJsLogo} alt="ReactJS" />
        <img className="Skill-Logo" src={mongoDbLogo} alt="MongoDB" />
        <img className="Skill-Logo" src={dockerLogo} alt="Docker" /> */}

        <JavaLogo width="200px" height="200px"/>
        <GraphQlLogo width="200px" height="200px"/>
        <NodeJsLogo width="200px" height="200px"/>
        <ReactJsLogo width="200px" height="200px"/>
        <MongoDbLogo width="200px" height="200px"/>
        <DockerLogo width="200px" height="200px"/>
    </div>

export default withFrame(Skills);
import React from 'react';
import withFrame from '../../commons/Frame/Frame';

import './Skills.css';

import { ReactComponent as JavaLogo } from './../../assets/img/java.svg';
import { ReactComponent as GraphQlLogo } from './../../assets/img/graphql.svg';
import { ReactComponent as NodeJsLogo } from './../../assets/img/nodejs.svg';
import { ReactComponent as ReactJsLogo } from './../../assets/img/react.svg';
import { ReactComponent as MongoDbLogo } from './../../assets/img/mongodb.svg';
import { ReactComponent as DockerLogo } from './../../assets/img/docker.svg';

const Skills = () => 
    <div>
        <JavaLogo width="200px" height="200px"/>
        <GraphQlLogo width="200px" height="200px"/>
        <NodeJsLogo width="200px" height="200px"/>
        <ReactJsLogo width="200px" height="200px"/>
        <MongoDbLogo width="200px" height="200px"/>
        <DockerLogo width="200px" height="200px"/>
    </div>

export default withFrame(Skills);
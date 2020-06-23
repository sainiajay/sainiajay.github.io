import React, { useState } from 'react';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import './App.css';

import Hello from './components/Hello';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';
import Header from './components/Header';

const Pointer = styled.div`
    position: fixed;
    top: ${props => props.Y}px;
    left: ${props => props.X}px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    transition-property: left, top;
    transition-duration: 100ms;
    transition-timing-function: linear;
`;

const App = () => {
  const theme = {
    colors: {
      green: '#fff',
      navy: '#00f'
    },
    hamburgerWidth: 20,
    navScrollHeight: 40,
    navHeight: 30
  };

  const [X, updateX] = useState(0); 
  const [Y, updateY] = useState(0);

  const onMouseMove = (event) => {
    updateX(event.clientX);
    updateY(event.clientY);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" onMouseMove={event => onMouseMove(event)}>
        {/* <Pointer X={X} Y={Y}/> */}
        {/* <div className="Nav-Links-Container">
          <a className="Nav-Link" href="/#">
            About Me
          </a>
          <a className="Nav-Link" href="/#">
            Projects
          </a>
          <a className="Nav-Link" href="/#">
            Work Experience
          </a>
          <a className="Nav-Link" href="/#">
            Education
          </a>
        </div> */}
        <Header />
        <Hello />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <div className="Social-Links">
          <i className="lni lni-linkedin" />
          <i className="lni lni-github" />
          <i className="lni lni-stackoverflow" />
          <i className="lni lni-twitter" />
          <i className="lni lni-medium" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

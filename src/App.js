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
import Networking from './components/Networking';

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
        <Header />
        <Hello />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <Networking />
      </div>
    </ThemeProvider>
  );
}

export default App;

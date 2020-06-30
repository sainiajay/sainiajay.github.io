import React, { useState } from 'react';
import styled from 'styled-components'
import { ThemeProvider, css } from 'styled-components'
import './App.css';

import Hello from './components/Hello';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';
import Header from './components/Header';
import Networking from './components/Networking';
import StoryLine from './components/Storyline';

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

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const App = () => {

  const theme = {
    colors: {
      green: '#fff',
      navy: '#00f',
      grey: '#121212'
    },
    hamburgerWidth: 20,
    navScrollHeight: 40,
    navHeight: 30,
    tabHeight: 30,
    tabWidth: 120,
    media
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
        <Projects />
        <Skills />
        <StoryLine />
        <Networking />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useRef } from 'react';
import styled from 'styled-components';
import { ThemeProvider, css } from 'styled-components';

import Hello from './components/Hello';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Jobs from './components/Jobs';
import Header from './components/Header';
import Networking from './components/Networking';
import AboutMe from './components/AboutMe';
import HireMe from './components/HireMe';
import Footer from './components/Footer';

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

const StyledContainer = styled.main`
  color: ${props => props.theme.color.text.primary};
  background-color: ${props => props.theme.color.bg.secondary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;



const App = ({ data }) => {

  const theme = {
    font: {
      primary: 'Montserrat',
      secondary: 'Arvo',
    },

    color: {
      silver: '#878a8f',
      bg: {
        primary: '#f5f5f5',
        secondary: '#ffffff',
      },
      fg: {
        primary: 'yellow',
        secondary: 'green',
      },
      text: {
        primary: '#000000',
        secondary: '#878a8f',
      }
    },
    logo: {
      height: '50px',
      width: '50px'
    },
    body: {
      margin: '50px'
    },
    hamburgerWidth: 20,
    navScrollHeight: 40,
    navHeight: 30,
    tabHeight: 30,
    tabWidth: 120,
    media
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Header />
        <Hello />
        <Projects data={data.featuredProjects.edges}/>
        <AboutMe data={data.me}/>
        {/* <Work data={data.jobs.edges}/> */}
        <Jobs data={data.jobs.edges}/>
        <Skills />
        <HireMe />
        <Footer />
        {/* <Networking /> */}
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

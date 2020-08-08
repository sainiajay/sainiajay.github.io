import { css } from 'styled-components';

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

export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] ;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
}, {});


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
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: #000;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    padding: 1em 0;
    justify-items: center;
    p {
        color: #fff;
        margin: 1em 0;
        display: flex;
    }
    a {
        color: #fff;
        margin: 1em 0;
        display: flex;
    }
`;

const Footer = () => {
    return (
    <FooterWrapper>
        <div></div>
        <p>
            Built By Ajay Saini
        </p>
        <a href="https://github.com/sainiajay/sainiajay.github.io" target="_blank" rel="noopner noreferer">
            View on Github
        </a>
    </FooterWrapper>
    );
};

export default Footer;
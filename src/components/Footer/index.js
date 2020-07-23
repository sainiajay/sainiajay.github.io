import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em 0;
    a {
        color: #000;
        margin: 1em 0;
    }
`;

const Footer = () => {
    return (
    <FooterWrapper>
        <a href="https://github.com/sainiajay/sainiajay.github.io" target="_blank" rel="noopner noreferer">
            Built By Ajay Saini
        </a>
    </FooterWrapper>
    );
};

export default Footer;
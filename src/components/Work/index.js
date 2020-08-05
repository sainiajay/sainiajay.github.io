import React, { useState, useRef, useEffect } from 'react';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import { transitionTime } from "../../commons/Constants";

import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';
import tcsLogo from '../../assets/img/tcs.png';
import deloitteLogo from '../../assets/img/deloitte.svg';
import nayiDishaLogo from '../../assets/img/nayi_disha.png';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${({ theme }) => theme.media.thone`
    display: block;
  `};
`;

const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;
  ${({ theme }) => theme.media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${({ theme }) => theme.media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};
  li {
    &:first-of-type {
      ${({ theme }) => theme.media.thone`
        margin-left: 50px;
      `};
      ${({ theme }) => theme.media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${({ theme }) => theme.media.thone`
        padding-right: 50px;
      `};
      ${({ theme }) => theme.media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${({ theme }) => theme.tabHeight}px;
  padding: 0 20px 2px;
  text-align: left;
  white-space: nowrap;
  font-size: 14px;
  line-height: 1.2;
  outline: none;
  color: ${props => (props.isActive ?  props.theme.color.text.primary : props.theme.color.text.secondary)};
  ${({ theme }) => theme.media.tablet`padding: 0 15px 2px;`};
  ${({ theme }) => theme.media.thone`
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid #fff;
    min-width: 120px;
  `};
  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.bg.primary};
  }
`;

const StyledHighlight = styled.span`
  display: block;
  background: ${({ theme }) => theme.color.bg.secondary};
  width: 2px;
  height: ${({ theme }) => theme.tabHeight}px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * props.theme.tabHeight : 0)}px
  );
  ${({ theme }) => theme.media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0)}px
    );
    margin-left: 50px;
  `};
  ${({ theme }) => theme.media.phablet`
    margin-left: 25px;
  `};
`;

const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  ${({ theme }) => theme.media.tablet`padding-left: 20px;`};
  ${({ theme }) => theme.media.thone`padding-left: 0;`};
`;

// ul {
// ${({ theme }) => theme.mixins.fancyList};
// }
// a {
// ${({ theme }) => theme.mixins.inlineLink};
// }

const StyledJobTitle = styled.h3` 
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 0.5em;
`;

const StyledCompany = styled.div`
  color: '#000';
`;

const StyledJobDetails = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
    padding-left: 15px;
    li {
      margin: 5px 0;
    }
  }
`;

const SubHeading = styled.h4`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.text.primary};
`;

const Content = styled.div`
  overflow-y: auto;
  padding: 0 30px 30px 30px;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  position: relative;
  margin-top: 50px;
`;

const JobTileBackground = styled.div`
  background-color: black;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all ${transitionTime};
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  &:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
  }
`;

const TileHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 5px 25px -20px #050505;
  background-color: #fff;
  margin: 0 30px;
  z-index: 2;
  transform: translateY(-50%);
`;

const TileFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  visibility: visible;
  transition: all ${transitionTime} ease-in;
  opacity: 0;
`;

const JobDuration = styled.div`
  font-family: monospace;
  font-size: 1em;
  opacity: 0.75;
  display: block;
`;

const Company = styled.a`
  font-size: 18px;
  display: block;
  &:before {
    content: '@ '
  }
`;

const JobTile = styled.div`
  color: ${props => props.theme.color.text.primary};
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 25px -20px #050505;
`;

const CompanyLogo = styled.a`
  display: flex;
  background: #000;
  height: 200px;
  img {
    width: 100%;
    margin: auto;
    transition: all ${transitionTime} ease-in;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const Work = ({ data }) => {
    return (
        <StyledContainer>
            <SectionHeader>
                <Eyebrow>
                  Work Experience
                </Eyebrow>
                <Heading>
                  Where I&apos;ve Worked
                </Heading>
                <p>
                  I’ve been lucky enough to work with amazing consulting companies for over 3 years and gain insight and knowledge and hone my skills.
                </p>
            </SectionHeader>
            <JobsGrid>
              {
                data?.map(({ node }, i) => {
                  const { html, frontmatter } = node;
                  const { title, url, company, range, logo } = frontmatter;
                  return (
                    <JobTile>
                      <CompanyLogo href={url} target="_blank">
                        <img src={logo} alt={company}/>
                      </CompanyLogo>
                      <TileHeader>
                          <StyledJobTitle>{title}</StyledJobTitle>
                          {/* <JobDuration>{range}</JobDuration> */}
                        </TileHeader>
                      <Content>
                        <StyledJobDetails dangerouslySetInnerHTML={{__html: html}} />
                      </Content>
                    </JobTile>
                  );
                })
              }
            </JobsGrid>
        </StyledContainer>
    );
}

export default withFrame(Work, 'work');
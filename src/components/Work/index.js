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


const StyledJobTitle = styled.h3` 
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 0.5em;
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
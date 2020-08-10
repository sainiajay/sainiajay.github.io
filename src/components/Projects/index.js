import React from 'react';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';
import blackbox from "../../assets/img/blackbox.png";
import pathfinder from "../../assets/img/pathfinder.png";
import leetcode from "../../assets/img/leetcode.png";
import { media } from "../../commons/StyleUtils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const StyledContent = styled.div`
  position: relative;
  grid-column: 2 / -2;
  grid-row: 2 / -1;
  z-index: 2;

  ${media.tablet`
    grid-column: 1 / 10;
    grid-row: 1 / -1;
    padding: 20px 20px 15px;
  `}

  ${media.desktop`
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    padding: 40px 40px 30px;
  `}
`;
 
const StyledLabel = styled.h4`
  font-size: 12px;
  font-weight: normal;
  font-family: monospace;
  margin-top: 1em;
  padding-top: 0;
  color: #fff;
  ${media.tablet`
    color: ${props => props.theme.color.text.secondary};
  `}
`;

const StyledProjectName = styled.h5`
  font-size: 2.2em;
  margin: 0 0 1em;
  color: #fff;
  ${media.tablet`
    color: #000;
  `}
`;

const StyledDescription = styled.div`
  position: relative;
  z-index: 2;
  padding: 1em 2em;
  line-height: 1.7em;
  background-color: ${props => props.theme.color.bg.secondary};
  color: ${props => props.theme.color.text.primary};
  font-size: 1.1em;
  font-family: ${props => props.theme.font.secondary};
  text-align: left;
  border-radius: 4px;
  box-shadow: 0 5px 25px -20px #050505;
`;

const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 2em 0 1em;
  list-style: none;
  li {
    font-size: 1.1em;
    color: ${props => props.theme.color.text.secondary};
    white-space: nowrap;
    margin-right: 1em;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: -1em;
  a {
    color: #000;
    font-size: 1.5em;
    padding: 1em;
    svg {
      width: 2em;
      height: 2em;
    }
  }
`;

const StyledImgContainer = styled.a`
  height: 75%;
  position: relative;
  filter: grayscale(100%) contrast(1) brightness(90%);
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  ${media.tablet`
    grid-column: 4 / -1;
    grid-row: 1 / -1;
  `}
  ${media.desktop`
    grid-column: 6 / -1;
  `}
  &:hover {
    filter: none;
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  margin-bottom: 100px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      justify-content: flex-end;
      text-align: right;
      ${media.tablet`
        grid-column: 4 / -1;
      `}
      ${media.desktop`
        grid-column: 7 / -1;
      `}
    }
    ${StyledTechList} {
      justify-content: flex-end;
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      ${media.tablet`
        margin-left: 0;
        margin-right: -1em;
      `}
    }
    ${StyledImgContainer} {
      ${media.tablet`
        grid-column: 1 / 10;
      `}
      ${media.desktop`
        grid-column: 1 / 8;
      `}
    }
  }
`;

const Featured = ({ data }) => {
  return (
    <StyledContainer>
      <SectionHeader>
        <Eyebrow>
            Featured Projects
        </Eyebrow>
        <Heading>
            What I've built
        </Heading>
        <p>I build my personal projects with completely with passion and aim precisely to learn something new.</p>
      </SectionHeader>
      <div>
        {
          data?.map(({ node }, i) => {
            const { html, frontmatter } = node;
            const { github, url, title, tagline, image, tech } = frontmatter;

            return (
              <StyledProject key={i}>
                <StyledContent>
                  <StyledLabel>{tagline}</StyledLabel>
                  <StyledProjectName>
                    {title}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                    {tech && (
                      <StyledTechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </StyledTechList>
                    )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <FontAwesomeIcon fixedWidth icon={faGithub} size="1x"/>
                      </a>
                    )}
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} size="1x"/>
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  image={image}
                  href={url || github || '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer" />
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

export default withFrame(Featured, 'projects', 'Projects');
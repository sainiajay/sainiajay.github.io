import React from 'react';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';
import blackbox from "../../assets/img/blackbox.png";
import pathfinder from "../../assets/img/pathfinder.png";
import leetcode from "../../assets/img/leetcode.png";

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  padding: 40px 40px 30px;
`;

const StyledLabel = styled.h4`
  font-size: 12px;
  font-weight: normal;
  color: ${props => props.theme.color.text.secondary};
  font-family: monospace;
  margin-top: 10px;
  padding-top: 0;
`;

const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${props => props.theme.color.text.primary};
`;

const StyledDescription = styled.div`
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${props => props.theme.color.bg.secondary};
  color: ${props => props.theme.color.text.primary};
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 5px 25px -20px #050505;
`;

const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;
  li {
    font-size: 12px;
    color: ${props => props.theme.color.text.secondary};
    margin-right: 5px;
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    color: ${props => props.theme.color.text.primary};
    font-size: 1.5em;
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const StyledFeaturedImg = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 4px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  box-shadow: 1px 1px 5px 1px #eee;
`;

const StyledImgContainer = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  border-radius: 5px;
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: screen;
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: 10px;
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
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
        {data &&
          data.map((p, i) => {
            const { github, url, title, img, tech, html  } = p;

            return (
              <StyledProject key={i}>
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
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
                        <i className="lni lni-github-original"/>
                      </a>
                    )}
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <i className="lni lni-link"/>
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={url ? URLSearchParams : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <StyledFeaturedImg src={img} alt={title} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

const projects = [
   {
      title: 'Leetcode Clone',
      github: '',
      url: '#',
      img: leetcode,
      tech: ['Java', 'SpringBoot', 'MongoDB', 'React'],
      html: `Inspired by leetcode.com. Here aspiring software engineers can explore and practice wide variety of algorithmic problems.`
   },
   {
      title: 'Blackbox',
      github: '',
      url: '#',
      img: blackbox,
      tech: ['Go', 'Docker SDK'],
      html: `Blackbox is sandbox in which runs linear programs written in Java in a secure environment, tests and evaluates them against given set of test cases. The tool is perfectly suitable for assessing code received from end user.`
   },
   {
      title: 'Algorithm Visualizer',
      github: 'https://github.com/sainiajay/AlgoVisualizer',
      url: '#',
      img: pathfinder,
      tech: ['ReactJS', 'Gatsby'],
      html: `This project helps understand students on how several popular data structures and algorithms functions. Being interactive and ability to accept custom inputs from user makes it really cool tool for students.`
   }
];

const Projects = () => <Featured data={projects} />

export default withFrame(Projects, 'projects', 'Projects');
import React from 'react';
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
`;

const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: 12px;
  ${(props) => props.theme.media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;

const StyledArchiveLink = styled.a`
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
  &:after {
    bottom: 0.1em;
  }
`;

const StyledGrid = styled.div`
   margin-top: 50px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 15px;
   position: relative;
   width: 85%;
`;

const StyledProjectInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.grey};
`;

const StyledProject = styled.div`
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;

const StyledProjectHeader = styled.header`
  margin-bottom: 30px;
  display: flex;
`;

const StyledFolder = styled.i`
   display: inline-block;
   font-size: 25px;
`;

const StyledProjectLinks = styled.div`
   margin-left: auto;
`;

const StyledIconLink = styled.a`
  position: relative;
  padding: 10px;
  font-weight: bold;
`;

const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: 15px;
  display: flex;
`;

const StyledProjectDescription = styled.div`
  font-size: 14px;
  display: flex;
`;

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    font-size: 12px;
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Footer = styled.footer`
   display: flex;
   margin-top: auto;
`;


const projects = [
   {
      title: 'Leetcode Clone',
      github: '',
      url: '#',
      tech: ['Java', 'SpringBoot', 'MongoDB', 'React'],
      html: `Inspired by leetcode.com. Here aspiring software engineers can explore and practice wide variety of algorithmic problems.`
   },
   {
      title: 'Blackbox',
      github: '',
      url: '#',
      tech: ['Go', 'Docker SDK'],
      html: `Blackbox is sandbox in which runs linear programs written in Java in a secure environment, tests and evaluates them against given set of test cases. The tool is perfectly suitable for assessing code received from end user.`
   },
   {
      title: 'Algorithm Visualizer',
      github: 'https://github.com/sainiajay/AlgoVisualizer',
      url: '#',
      tech: ['ReactJS', 'Gatsby'],
      html: `This project helps understand students on how several popular data structures and algorithms functions. Being interactive and ability to accept custom inputs from user makes it really cool tool for students.`
   }
];

const Projects = () =>  
<StyledContainer>
   <StyledTitle>Noteworthy Projects</StyledTitle>
   <StyledArchiveLink to="/archive">
      View the archive
   </StyledArchiveLink>
   <StyledGrid>
      {projects &&
         projects.map((project, i) => {
         const { github, url, title, tech, html } = project;
         return (
            <StyledProject key={i} tabIndex="0">
               <StyledProjectInner>
                  <StyledProjectHeader>
                     <StyledFolder className="lni lni-folder" />
                     <StyledProjectLinks>
                        {github && (
                           <StyledIconLink
                              href={github}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="GitHub Link">
                              <i className="lni lni-github-original" />
                           </StyledIconLink>
                        )}
                        {url && (
                           <StyledIconLink
                              href={url}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link">
                              <i className="lni lni-link" />
                           </StyledIconLink>
                        )}
                     </StyledProjectLinks>
                  </StyledProjectHeader>
                  <StyledProjectName>{title}</StyledProjectName>
                  <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                  <Footer>
                     {tech && (
                     <StyledTechList>
                        {tech.map((tech, i) => (
                           <li key={i}>{tech}</li>
                        ))}
                     </StyledTechList>
                     )}
                  </Footer>
               </StyledProjectInner>
            </StyledProject>
         );
         })
      }
   </StyledGrid>

   {/* <StyledMoreButton onClick={() => setShowMore(!showMore)}>
      Show {showMore ? 'Less' : 'More'}
   </StyledMoreButton> */}
</StyledContainer>

export default withFrame(Projects);
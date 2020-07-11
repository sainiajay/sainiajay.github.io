import React from 'react';
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';
import blackbox from "../../assets/img/blackbox.png";
import pathfinder from "../../assets/img/pathfinder.png";
import leetcode from "../../assets/img/leetcode.png";

const StyledContainerOLD = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   z-index: 1;
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
  background-color: ${props => props.theme.color.bg.secondary};
`;

const StyledProjectOLD = styled.div`
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
  color: ${props => props.theme.color.text.primary};
`;

const StyledProjectNameOLD = styled.h5`
  margin: 0 0 10px;
  font-size: 15px;
  display: flex;
`;

const StyledProjectDescription = styled.div`
  font-size: 14px;
  display: flex;
`;

const StyledTechListOLD = styled.ul`
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
    font-weight: 300;
    color: ${props => props.theme.color.text.secondary};
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
z-index: 5;

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
  background-color: ${props => props.theme.color.bg.primary};
  color: ${props => props.theme.color.text.primary};
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 10px 10px -15px #050505;
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
  color: ${props => props.theme.color.text.primary};
  a {
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
`;
const StyledImgContainer = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
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
    z-index: 3;
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

//   const revealTitle = useRef(null);
//   const revealProjects = useRef([]);
//   useEffect(() => {
//     sr.reveal(revealTitle.current, srConfig());
//     revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
//   }, []);

  return (
    <StyledContainer id="projects">
      <h2>Some Things I&apos;ve Built</h2>

      <div>
        {data &&
          data.map((p, i) => {
            const { github, url, title, img, tech, html  } = p;

            return (
              <StyledProject key={i}>
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
                  <StyledProjectName>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
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
                        {/* <FormattedIcon name="GitHub" /> */}
                      </a>
                    )}
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {/* <FormattedIcon name="External" /> */}
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

{/* <StyledContainer>
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
</StyledContainer> */}

export default withFrame(Projects, 'projects', 'Projects');
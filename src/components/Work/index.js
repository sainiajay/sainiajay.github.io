import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';
import tcsLogo from '../../assets/img/tcs_edit2.png';
import deloitteLogo from '../../assets/img/deloitte3.jpg';
import nayiDishaLogo from '../../assets/img/nd_edit1.png';

const transitionTime = '0.1s';

const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
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
  letter-spacing: 0.5rem;
`;

const StyledCompany = styled.div`
  color: '#000';
`;

const StyledJobDetails = styled.h5`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const SubHeading = styled.h4`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.text.primary};
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
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
    background-color: rgba(15,20,30,.9);
  }
`;

const TileHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  transform: translateY(5px);
  transition: all ${transitionTime} ease-in;
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
  font-size: 12px;
  opacity: 0.75;
  display: block;
`;

const Company = styled.a`
  font-size: 18px;
  display: block;
  &:before {
    content: '@ '
  }
  &:hover:after {
    content: '↗';
    font-size: 15px;
    margin: 0 5px;
    padding: 0 5px;
    border: 1px solid #fff;
  }
`;

const JobDetailLink = styled.div`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:before {
    content: '  ';
  }
`;

const JobTile = styled.div`
  color: ${props => props.theme.color.bg.secondary};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 400px;
  position: relative;
  overflow: hidden;
  padding: 30px;
  &:hover ${JobTileBackground} {
    transform: scale(1.1);
  }
  &:hover ${JobTileBackground}:before {
    display: block;
  }
  &:hover ${TileHeader} {
    transform: translateY(0);
  }
  &:hover ${TileFooter} {
    opacity: 0.9;
  }
`;

// &:hover ${TileFooter} {
//   visibility: visible;
//   transform: scale(1.1);
// }
export const Work = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);

    const revealContainer = useRef(null);
    // useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

    const focusTab = () => {
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
        } else {
            // If we're at the end, go to the start
            if (tabFocus >= tabs.current.length) {
                setTabFocus(0);
            }
            // If we're at the start, move to the end
            if (tabFocus < 0) {
                setTabFocus(tabs.current.length - 1);
            }
        }
    };

    // Only re-run the effect if tabFocus changes
    useEffect(focusTab, [tabFocus]);

    const onKeyPressed = e => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
            if (e.keyCode === 40) {
                // Move down
                setTabFocus(tabFocus + 1);
            } else if (e.keyCode === 38) {
                // Move up
                setTabFocus(tabFocus - 1);
            }
        }
    };

    const data = [
        {
            node: {
                company: 'Deloitte Consulting',
                title: 'Consultant',
                range: 'June, 2019 - Today',
                img: deloitteLogo,
                html: `
                  <ul>
                    <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                    <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                    <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                  </ul>
                `
            }
        },
        {
            node: {
                company: 'Tata Consultancy Services',
                title: 'Assistant Systems Engineer',
                range: 'August, 2017 - May, 2019',
                img: tcsLogo,
                html: `
                  <ul>
                    <li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>
                    <li>Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</li>
                    <li>Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browsers</li>
                  </ul>
                `
            }
        },
        {
          node: {
              company: 'Nayi Disha Studios',
              title: 'Image Processing Intern',
              range: 'December, 2016 - January, 2017',
              type: "PROFESSIONAL",
              img: nayiDishaLogo,
              html: `
                <ul>
                  <li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>
                  <li>Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</li>
                  <li>Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browsers</li>
                </ul>
              `
          }
      }
    ];

    return (
        <StyledContainer>
            <h2>Where I&apos;ve Worked</h2>
            <SubHeading>
              I’ve been lucky enough to work with amazing consulting companies for over 3 years and gain insight and knowledge and hone my skills.
            </SubHeading>
            <JobsGrid>
              {
                data && data.map(({ node }, i) => {
                  const { title, url, company, range, html, img } = node;
                  return (
                    <JobTile>
                      <JobTileBackground image={img} />
                      <TileHeader>
                        <JobDuration>{range}</JobDuration>
                        <StyledJobTitle>{title}</StyledJobTitle>
                      </TileHeader>
                      <TileFooter>
                        <Company>{company}</Company>
                        <JobDetailLink>
                          View Details
                        </JobDetailLink>
                      </TileFooter>
                      {/* <StyledJobDetails>{html}</StyledJobDetails> */}
                    </JobTile>
                  );
                })
              }
            </JobsGrid>
        </StyledContainer>
    );
}

export default withFrame(Work, 'work', '');

{/* <StyledTabs>
<StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyPressed(e)}>
    {
        data && data.map(({ node }, i) => {
            const { company } = node;
            return (
                <li key={i}>
                    <StyledTabButton
                        isActive={activeTabId === i}
                        onClick={() => setActiveTabId(i)}
                        ref={el => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                        tabIndex={activeTabId === i ? '0' : '-1'}>
                        <span>{company}</span>
                    </StyledTabButton>
                </li>
            );
        })
    }
    <StyledHighlight activeTabId={activeTabId} />
</StyledTabList>
{
    data && data.map(({ node }, i) => {
        const { title, url, company, range, html } = node;
        return (
        <StyledTabContent
            key={i}
            isActive={activeTabId === i}
            id={`panel-${i}`}
            role="tabpanel"
            aria-labelledby={`tab-${i}`}
            tabIndex={activeTabId === i ? '0' : '-1'}
            hidden={activeTabId !== i}>
            <StyledJobTitle>
                <span>{title}</span>
                <StyledCompany>
                    <span>&nbsp;@&nbsp;</span>
                    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                        {company}
                    </a>
                </StyledCompany>
            </StyledJobTitle>
            <StyledJobDetails>
                <span>{range}</span>
            </StyledJobDetails>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledTabContent>
        );
    })
}
</StyledTabs> */}
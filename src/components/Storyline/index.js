import React from 'react';
import styled from 'styled-components';
import withFrame from '../../commons/Frame/Frame';

const StyledContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.media.desktop`
    max-width: 400px;
  `}
`;

const Timeline = styled.ol`
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 2em 0;
    list-style-type: none;
    &:before {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        display: block;
        width: 6px;
        height: 100%;
        margin-left: -3px;
        background: rgb(80,80,80);
        background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
        background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
        background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
        background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
        background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
        z-index: 5;
    }
`;

const TimelineCardWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    z-index: 100;
    justify-content: center;
`;

const TimelineImage = styled.div`
    height: 35px;
    min-width: 35px;
    display: flex;
    background: #000;
    border-radius: 50%;
    border: 2px solid #fff;
    z-index: 100;
    color: #fff;
    font-size: 20px;
    padding: 5px;
    justify-content: center;
    margin: 10px auto;
`;

const TimeSpan = styled.div``;

const TimelineCard = styled.div`
    color: #fff;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    background: #121212;
    padding: 10px;
    border-radius: 5px;
    
    font-weight: 600;
    text-align: left;

    &:after {
        content: "";
        position: absolute;
        top: 50%;
        height: 0;
        width: 0;
        margin-top: -8px;
        border: 8px solid transparent;
        pointer-events: none;
    }
`;

const StyledJobTitle = styled.div`
    margin: 0 5px;
`;

const StyledCompany = styled.div``;

const Description = styled.div`
    text-align: justify;
    font-size: 12px;
    color: #e9e9e9;
    font-weight: lighter;
`;

const TimelineItem = styled.li`
    padding: 1em 0;
    &:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    /* &:nth-child(even) > ${TimelineCardWrapper} {
        margin-left: auto;
        flex-direction: row;
    }
    
    &:nth-child(odd) > ${TimelineCardWrapper} {
        margin-right: auto;
        flex-direction: row-reverse;
    }

    ${TimelineCardWrapper} {
        ${({ theme }) => theme.media.thone`
            margin: 0;
            flex-direction: row;
        `}
    }

    &:nth-child(even) ${TimelineImage} {
        margin-left: -17.5px;
    }
    &:nth-child(odd) ${TimelineImage} {
        margin-right: -17.5px;
        ${({ theme }) => theme.media.thone`
            margin-left: -17.5px;
            margin-right: 0;
        `}
    }

    &:nth-child(even) ${TimelineCard}:after {
        right: 100%;
        border-right-color: #121212;
    }

    &:nth-child(odd) ${TimelineCard}:after {
        left: 100%;
        border-left-color: #121212;
        ${({ theme }) => theme.media.thone`
            right: 100%;
            border-right-color: #121212;
            left: unset;
            border-left-color: transparent;
        `}
    } */

    /* &:nth-child(even) ${StyledJobTitle} {
        text-align: left;
    }

    &:nth-child(odd) ${StyledJobTitle} {
        text-align: right;
    }

    &:nth-child(even) ${TimeSpan} {
        text-align: left;
    }

    &:nth-child(odd) ${TimeSpan} {
        text-align: right;
    } */
`;

const data = [
    {
        node: {
            company: 'Deloitte Consulting',
            title: 'Consultant',
            timeSpan: 'June, 2019 - Today',
            type: "PROFESSIONAL",
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
            company: 'TCS',
            title: 'Assistant Engineer',
            timeSpan: 'August, 2017 - May, 2019',
            type: "PROFESSIONAL",
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
          company: 'IMS Engineering College',
          title: 'CS Grad (B.Tech.)',
          timeSpan: '2013 - 2017',
          type: "STUDENT",
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

const storyTypeToIcon = {
    "PROFESSIONAL": "lni lni-briefcase",
    "STUDENT": "lni lni-graduation"
};

const Storyline = () => 
    <StyledContainer>
        <Timeline>
            {
                data && data.map(({ node }, index) => {
                    const { title, url, company, timeSpan, type, html } = node;
                    return (
                        <TimelineItem key={index}>
                            <TimelineCardWrapper>
                                <TimelineImage>
                                    <i className={storyTypeToIcon[type]} />
                                </TimelineImage>
                                <TimelineCard>
                                    <StyledJobTitle>
                                        {title}
                                    </StyledJobTitle>
                                    <StyledCompany>
                                        <span>&nbsp;@&nbsp;</span>
                                        <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                                            {company}
                                        </a>
                                    </StyledCompany>
                                    <TimeSpan>{timeSpan}</TimeSpan>
                                    <Description dangerouslySetInnerHTML={ {__html: html}}/>
                                </TimelineCard>
                            </TimelineCardWrapper>
                        </TimelineItem>
                    );
                })
            }
        </Timeline>
    </StyledContainer>

export default withFrame(Storyline);
import React from 'react';
import { SectionHeader, Eyebrow, Heading } from "../../commons/Style";
import withFrame from '../../commons/Frame/Frame';
import styled from 'styled-components';
import { media } from "../../commons/StyleUtils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const borderRadius = 4;

const StyledContainer = styled.div`
    position: relative;
    width: 100%;
`;

const JobsContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    &:after {
        display: none;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: radial-gradient(#212121 20%, transparent 20%);
        background-size: 20px 20px;
        clip-path: polygon(10% 0%, 80% 50%, 10% 100%, 0% 100%, 50% 50%, 0% 0%);
    }
`;

const CompanyLogoContainer = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 2em;
    flex: 1 1 200px;
    background: #000;
    border-radius: ${borderRadius}px;
    place-items: center;
    img {
        display: flex;
        width: 100%;
    }
`;

const JobDetail = styled.div`
    flex: 3 1 400px;
    padding: 2em;
    min-width: 400px;
    background: #fff;
    border-radius: ${borderRadius}px;
`;

const CompanyName = styled.h1`
    font-weight: 400;
    font-size: 2.5em;
    margin: 1em 0;
`;

const JobDescription = styled.div`
    width: 100%;
`;

const StyledCard = styled.div`
    z-index: 2;
    display: flex;
    flex: 1 1 50%;
    flex-flow: row wrap;
    gap: 1em;
    place-content: center;
    place-items: center;
    margin: 1em;
    margin-bottom: 5em;
    padding: 1em;
    width: 100%;
    border-radius: ${borderRadius}px;
    /* background-color: rgba(237, 237, 237, 1); */
    ${
        media.tablet`
            gap: 10%;
            &:nth-of-type(odd) {
                flex-direction: row-reverse;
            }
        `
    }
`;

const TimeLine = styled.div`
    display: block;
    height: 2px;
    position: relative;
    background: rgba(200, 200, 200, 50%);
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: ${props => props.start}%;
        left: ${props => 100 - +props.end}%;
        background: #000;
        /* clip-path: circle(47.2% at 0 50%); */
    }
`;

const Title = styled.div`
    font-size: 1.8em;
`;

const Range = styled.div`
    text-transform: uppercase;
    font: 1.5em;
    margin: 1em 0;
`;

const JobLocation = styled.div`
    font: 1.5em;
    margin: 1.5em 0;
`;

const JobCard = ({ data }) => {
    const { html, frontmatter } = data;
    const { title, url, company, date, endDate, start, end, location, logo } = frontmatter;
    const startYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Date.parse(date));
    const startMonth = new Intl.DateTimeFormat('en', { month: 'short' }).format(Date.parse(date));
    const startDateDisplay = `${startMonth} - ${startYear}`;
    let endDateDisplay = 'today';
    if(endDate) {
        const endYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Date.parse(endDate));
        const endMonth = new Intl.DateTimeFormat('en', { month: 'short' }).format(Date.parse(endDate));
        endDateDisplay = `${endMonth}-${endYear}`;
    }
    return (
        <StyledCard>
            <CompanyLogoContainer>
                <img src={logo} alt={company}/>
            </CompanyLogoContainer>
            <JobDetail>
                <Range>{startDateDisplay} &mdash;&mdash;&mdash; {endDateDisplay}</Range>
                <TimeLine start={start} end={end}/>
                <CompanyName>
                    {company} &nbsp;
                    {/* <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} size="1x"/> */}
                </CompanyName>
                <Title>{title}</Title>
                {/* <JobDescription dangerouslySetInnerHTML={{__html: html}} /> */}
                <JobLocation>
                    <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} size="1x"/>
                    &nbsp;
                    {location}
                </JobLocation>
            </JobDetail>
        </StyledCard>
    );
};

const Jobs = ({ data }) => {
    const [latestJob] = data || [];
    const [firstJob] = data?.slice(-1);
    const totalLength = (Date.parse(latestJob.node.frontmatter.endDate) || Date.now()) - Date.parse(firstJob.node.frontmatter.date);
    const offset = Date.parse(firstJob.node.frontmatter.date);
    data.forEach(job => {
        job.node.frontmatter.end = ((Date.parse(job.node.frontmatter.endDate) || Date.now()) - offset) * 100 / totalLength;
        job.node.frontmatter.start = ((Date.parse(job.node.frontmatter.date) || Date.now()) - offset) * 100 / totalLength;
    });
    return(
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
            <JobsContainer>
            {
                data?.map(({ node }) => <JobCard data={node} />)
            }
            </JobsContainer>
        </StyledContainer>
    )
};

export default withFrame(Jobs, 'jobs');
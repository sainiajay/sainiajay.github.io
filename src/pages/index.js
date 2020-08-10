import React, { Fragment } from 'react';
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import App from '../App';

const Index = ({ data }) =>
    <Fragment>
        <Helmet title={data.site.siteMetadata.title}/>
        <App data={data}/>
    </Fragment>

export default Index;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }

    me: meJson {
      twitterHandle
      siteUrl
      siteTitle
      siteLanguage
      siteKeywords
      siteDescription
      name
      email
      github
      location {
        city
        country
      }
    }
    
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            date
            endDate
            location
            url
            logo
          }
          html
        }
      }
    }

    featuredProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tagline
            url
            github
            tech
            image
          }
          html
        }
      }
    }
  }
`;
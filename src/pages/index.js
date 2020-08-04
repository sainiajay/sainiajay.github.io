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
            range
            url
          }
          html
        }
      }
    }
  }
`;
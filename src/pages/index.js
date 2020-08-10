import React, { Fragment } from 'react';
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import App from '../App';

const Index = ({ data }) =>
    <Fragment>
        <Helmet>
          <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "${data.site.siteMetadata.siteUrl}",
                "name": "${data.me.name}",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+9891239146",
                  "contactType": "Customer Support"
                }
              }
          `}
          </script>
            {/* General tags */}
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            <meta name="image" content={data.me.logo} />

            {/* OpenGraph tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta property="og:image" content={data.me.image} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={data.me.twitterHandle} />
            <meta name="twitter:title" content={data.site.siteMetadata.title} />
            <meta name="twitter:description" content={data.site.siteMetadata.description} />
            <meta name="twitter:image" content={data.me.image}/>
        </Helmet>
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
      image
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
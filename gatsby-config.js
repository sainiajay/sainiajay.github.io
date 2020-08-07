const config = require('./content/me');

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'content',
              path: `${__dirname}/content/`,
            },
        },
        {
            resolve: 'gatsby-plugin-scroll-reveal',
            options: {
                once: false
            }
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
              rule: {
                include: /\.svg/,
              }
            }
        }
    ],
}

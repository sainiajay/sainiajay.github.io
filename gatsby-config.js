module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-scroll-reveal',
            options: {
                once: false
            }
        }
    ],
}
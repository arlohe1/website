module.exports = {
    siteMetadata: {
        title: `Amit Lohe`,
        description: `Personal website.`,
        author: `@arlohe1`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Amit Lohe`,
                short_name: `Amit Lohe`,
                start_url: `/`,
                background_color: `#ebebeb`,
                theme_color: `#57992e`,
                display: `standalone`,
                icon: `src/images/favicon.png`, // Favicon, This path is relative to the root of the site.
            },
        },
    ],
}

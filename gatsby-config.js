require('dotenv').config();

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;
if (!spaceId || !accessToken) {
    throw new Error(
        'Contentful spaceId and the access token need to be provided.'
    )
};

module.exports = {
    siteMetadata: {
        title: `Steven Sajja`,
        name: `Steven Sajja`,
        // TODO: Change siteURL
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `Tech entrepreneur based in Cape Town South Africa`,
        hero: {
            heading: `Perspectives on technology, design and business in Africa.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/sajeezy`,
            },
            {
                name: `github`,
                url: `https://github.com/sajeezy`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                // contentPosts: "content/posts",
                // contentAuthors: "content/authors",
                // basePath: "/",
                authorsPage: true,
                sources: {
                    // local: true,
                    contentful: true,
                },
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: contentfulConfig,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Steven Sajja`,
                short_name: `Sajja`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/heart.svg`,
            },
        },
    ],
};

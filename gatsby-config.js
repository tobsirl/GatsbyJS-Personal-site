// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Personal Website',
    author: 'Paul Tobin',
    description: 'GatsbyJS Portfolio Website Using CircleCI and deployed with AWS Amplify',
    siteUrl: 'https://example.com',
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/tobsirl',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/tobsirl',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-theme-blog',
      options: {
        // basePath defaults to `/`
        basePath: '/blog',
      },
    },
  ],
};

const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/graphql-tools-fork',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'GraphQL Tools - Forked',
        description: 'A guide to using the forked GraphQL Tools',
        githubRepo: 'yaacovCR/graphql-tools-fork',
        sidebarCategories: {
          null: [
            'index',
            'generate-schema',
            'resolvers',
            'scalars',
            'mocking',
            'connectors',
            'schema-directives',
            'schema-delegation',
            'remote-schemas',
            'schema-transforms',
            'schema-stitching'
          ],
          Related: [
          ]
        }
      }
    }
  ]
};

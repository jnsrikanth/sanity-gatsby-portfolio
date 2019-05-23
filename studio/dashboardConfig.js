export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce635481e8e645837aad783',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4qhvgayh',
                  apiId: 'af1fa829-aebf-4093-8598-6cc9befd7a7c'
                },
                {
                  buildHookId: '5ce63548020a014abf469417',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vhdra6sq',
                  apiId: '1ea87639-bc36-49d3-a886-555ab5d2a99c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jnsrikanth/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-vhdra6sq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

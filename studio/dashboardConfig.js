export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61e02289bb57fb616649d73c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3mbwgmes',
                  apiId: '291ff31c-4046-4a6d-be9f-5045be3ddafd'
                },
                {
                  buildHookId: '61e0228918048a3e4b48a11a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-86cdb3kf',
                  apiId: 'ed43febc-5df5-4b1a-aece-ad6459c872fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elovseth/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-86cdb3kf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

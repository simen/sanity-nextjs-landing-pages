export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cd4e6d159c4a7011c5ca8b3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k5tikee2',
                  apiId: '91254c92-19a2-4278-81f4-8880ad4c8bd6'
                },
                {
                  buildHookId: '5cd4e6d159c4a7011c5ca8b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b9uthgmn',
                  apiId: '18e783cf-d68f-40d6-b7b1-7f5e426ef84b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b9uthgmn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

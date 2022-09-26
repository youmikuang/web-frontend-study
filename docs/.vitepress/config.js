module.exports = {
  title: 'Frontend Study',
  description: '从零开始学前端编程',
  base: '/web-frontend-study/',
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  themeConfig : {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Laragh'
    },
    lastUpdatedText: '更新时间',
    nav: [
      { text: '首页', link: '/' },
      { text: '简介', link: '/guide/index.html' },
      { text: 'Vue 全家桶', link: '/vue/index.html' },
      { text: 'Vue 组件', link: '/vue-component/index.html' },
      { text: 'Vue Admin', link: '/vue-admin/index.html' },
    ],
    sidebar:{
      "/guide/": [
        {
          text: '项目简介',
          items: [
            // { text: '使用pnpm管理包', link: '/page/pnpm' },
          ]
        }
      ],
    },
    // outlineTitle: '目录'
  }
}
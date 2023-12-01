module.exports = {
  title: '喜鹊ui',
  base:'/xq-ui/',
  description: 'Just playing around',
  themeConfig: {
    //导航
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/componentDocs/'},
      {text:'更新日志',link:'/update/index'},
      { text: 'GitHub', link: 'https://github.com/LSFCXZ/linview' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/xiquess-element-ui' },
    ],
    sidebar: {
      '/componentDocs/': [
        {
          title: '简介',
          path:'/componentDocs/'
        },
        {
          title: '快速开始',
          path:'/componentDocs/start'
        },
        {
          title: '卡片',
          path:'/componentDocs/card'
        }
      ]
    }
  }
}
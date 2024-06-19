module.exports ={
    //这里面路径最开始的/是指向.vuepress/public/的
    base:'/',//部署站点的基础路径,默认/
    lang: 'zh-CN',//语言设置
    title: '刷题玩家 ！',//所有页面标题的后缀，并且在默认主题的导航栏中显示
    description: '这是我的第一个学习站点',//站点描述，它会被每个页面的 Frontmatter 中的 description 字段覆盖
    head: [['link', { rel: 'icon', href: '/images/a.png' }]],//站点头部的icon
    theme: 'vdoing',
    themeConfig: {
        logo: '/images/a.png',
        nav:[
            { text: "首页", link: "/" },
            {
                text: '学习',
                link: '/pages/1/'
            },
            {
                text: '待开发',
                link: '/pages/99b5b5/'
            },
            {
                text: "GPT链接",
                items: [
                    {
                    text: "GPT访问",
                    link: "https://www.linchuangwei.com/chat",
                    },
                ],
            },
        ],
        sidebar: { mode: 'structuring', collapsable: true} ,//  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        sidebarDepth: 3,//侧边栏自动提取文章的几层标题
        sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
        updateBar: {
            // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
        },
        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        archive: true,// 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    },
    head: [
        [
            "meta",
            {
                name:"referrer",
                content:"no-referrer"
            }
        ],
    ]
}
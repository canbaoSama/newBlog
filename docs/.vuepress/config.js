const { path } = require('@vuepress/utils')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'UI-LIB',
    description: '组件库',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // 主题和它的配置
    theme: defaultTheme({
        logo: '/img/logo.png',
        navbar,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
    }),
    plugins: [
        [
            '@vuepress/plugin-register-components',
            {
                componentsDir: path.resolve(__dirname, './components')
            }
        ],
        [
            'vuepress-plugin-demoblock-plus'
        ]
    ]
}
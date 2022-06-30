const { path } = require('@vuepress/utils')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const localTheme = require('./theme').localTheme;

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
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    // 主题和它的配置
    theme: localTheme({
        logo: '/img/logo.png',
        navbar,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
        lastUpdated: true
    })
}
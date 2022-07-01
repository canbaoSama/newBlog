import { defineClientConfig } from '@vuepress/client';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './public/scss/global.scss';
import './public/iconfont/iconfont.css';

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(Antd);
    },
    setup() {},
    rootComponents: []
});

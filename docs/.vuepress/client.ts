import { defineClientConfig } from '@vuepress/client';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './public/scss/global.scss';
import './public/iconfont/iconfont.css';
import './public/prism/prism.js';
import './public/prism/prism.css';

export default defineClientConfig({
    enhance({ app }) {
        app.use(Antd);
    },
    setup() { },
    rootComponents: []
});
---
data: 2022-06-14
lang: zh-CN
title: Docs 常用文档
description: 收集常用的文档
---

# Docs

收集精编常用的文档...

<div v-for="(item,k) in linkList">
    <h3>{{item.title}}</h3>
    <div>
        <card :defaultValue="item.children"/>
    </div>
    <inputNumber defaultValue="我是" /> 
</div>


<script setup>
import { ref } from 'vue';
const linkList = ref([]);
linkList.value = [
    {
        title: 'React UI 组件库',
        children: [
            {
                title: 'Ant Design',
                link: 'https://ant.design/docs/react/introduce-cn'
            },{
                title: 'Bootstrap',
                link: 'https://react-bootstrap.github.io/getting-started/introduction'
            },{
                title: 'Material UI',
                link: 'https://mui.com/material-ui/getting-started/overview/'
            }
        ]
    },{
        title: 'Vue UI 组件库',
        children: [
            {
                title: 'Element',
                link: 'https://element.eleme.io/#/zh-CN/component/installation'
            },{
                title: 'Element Plus',
                link: 'https://element-plus.org/zh-CN/component/button.html'
            },{
                title: 'Vant',
                link: 'https://youzan.github.io/vant/#/zh-CN'
            },{
                title: 'View Design',
                link: 'https://www.iviewui.com/view-ui-plus/guide/introduce'
            }
        ]
    },
    {
        title: '动画库',
        children: [
            {
                title: 'Animate.css',
                link: 'https://animate.style/'
            }
        ]
    }

]
</script>
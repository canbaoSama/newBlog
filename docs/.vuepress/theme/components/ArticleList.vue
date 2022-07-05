<template>
    <div class="article-content phone-scrollbar">
        <div v-for="article in articleList" :key="article.title" class="card-wrap">
            <p class="title">{{ article.title }}</p>
            <div class="tag-date">
                <div class="tag">
                    <a-tag class="public-tag public-tag-top" color="#000"><i class="iconfont icon-zhiding"></i>置顶
                    </a-tag>
                    <a-tag v-for="sigTag in article.tag" :key="tag" class="public-tag" :class="`public-tag-${tag[sigTag].type} ${tag[sigTag].icon}`">{{ sigTag }}</a-tag>
                </div>
                <span>{{ dayjs(article.date).format('YYYY-MM-DD') }}</span>
            </div>
        </div>

        <p class="no-more" v-if="initBlog.length === 0">我也是有底线的~</p>
    </div>
</template>
<script setup>
import blogJson from '../../blogJson.json';
import { ref, onUnmounted } from 'vue';
import dayjs from 'dayjs';
import { inject } from 'vue';

const pageFm = inject('pageFm');

const tag = ref(blogJson.tag);
const initBlog = ref(blogJson.blog.concat([]));
const articleList = ref(initBlog.value.splice(0, 10));

const pageChange = () => {
    articleList.value = articleList.value.concat(initBlog.value.splice(0, 10));
}

const scrollEvent = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //变量windowHeight是可视区的高度
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //变量scrollHeight是滚动条的总高度
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //滚动条到底部的条件
    const thresold = scrollHeight - scrollTop - windowHeight;

    globalScrollTop.value = scrollTop;

    if (pageFm.value.pageType === 'home') {
        if (scrollTop > 60) {
            document.querySelectorAll(".home-page .navbar")[0].setAttribute("class", "navbar home-navbar-scroll");
        } else {
            document.querySelectorAll(".home-page .navbar")[0].setAttribute("class", "navbar");
        }
    }

    if (thresold > -50 && thresold <= 100) {
        if (initBlog.value.length != 0) {
            pageChange();
        }
    }
}

const globalScrollTop = ref(0);
window.addEventListener("scroll", scrollEvent);

onUnmounted(() => {
    window.removeEventListener('scroll', scrollEvent);
})
</script>
<style lang="scss" scoped>
.article-content {
    width: calc(75% - 15px);

    .card-wrap {
        padding: 1rem 1.2rem;
        border-radius: 8px;
        background: #fff;
        transition: all 0.3s;

        &:not(:first-child) {
            margin-top: 20px;
        }

        .title {
            font-size: 18px;
            color: rgba(0, 0, 0, 0.87);
            line-height: 1.5;
            display: block;
            margin-bottom: 4px;
        }

        .tag-date {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #686868;

            .tag {
                flex: 1;
            }
        }
    }

    .no-more {
        text-align: center;
        font-size: 14px;
        color: #555;
        margin-top: 30px;
    }
}
</style>

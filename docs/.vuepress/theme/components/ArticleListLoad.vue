<template>
    <div class="article-content">
        <div v-for="article in articleList" :key="article.title" class="card-wrap">
            <router-link :to="article.url" class="title">{{ article.title }}</router-link>
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
import { ref, onUnmounted, watch } from 'vue';
import dayjs from 'dayjs';
import { inject } from 'vue';

const props = defineProps({
    tagName: String
});

const pageFm = inject('pageFm');

const tag = ref(blogJson.tag);
let initBlog = blogJson.blog.concat([]);
const articleList = ref(initBlog.splice(0, initBlog.length > 10 ? 10 : initBlog.length));

const pageChange = () => {
    articleList.value = articleList.value.concat(initBlog.splice(0, initBlog.length > 10 ? 10 : initBlog.length));
};

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
        if (initBlog.length != 0) {
            pageChange();
        }
    }
};

const globalScrollTop = ref(0);
window.addEventListener("scroll", scrollEvent);

onUnmounted(() => {
    window.removeEventListener('scroll', scrollEvent);
});

const articleSearch = (val) => {
    initBlog = [];
    articleList.value = [];
    if (val === '全部') {
        initBlog = blogJson.blog.concat([]);
        articleList.value = initBlog.splice(0, initBlog.length > 10 ? 10 : initBlog.length);
        // articleList.value = blogJson.blog.concat([]);
    } else {
        blogJson.blog.forEach(item => {
            if (item.tag.indexOf(val) > -1) {
                initBlog.push(item);
            }
        });
        articleList.value = initBlog.splice(0, initBlog.length > 10 ? 10 : initBlog.length);
    }
    window.removeEventListener('scroll', scrollEvent);
    window.addEventListener("scroll", scrollEvent);
};
watch(() => props.tagName, (val) => {
    articleSearch(val);
}, { immediate: true });
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

            &:hover,
            &:focus {
                color: #42b983;
            }
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

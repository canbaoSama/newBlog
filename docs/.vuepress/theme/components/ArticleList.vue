<template>
    <div class="article-content">
        <div v-for="article in articleList" :key="article.title" class="card-wrap">
            <p class="title">{{ article.title }}</p>
            <div class="tag-date">
                <div class="tag">
                    <a-tag class="public-tag public-tag-top" color="#000"><i class="iconfont icon-zhiding"></i>置顶</a-tag>
                    <a-tag v-for="sigTag in article.tag" :key="tag" class="public-tag" :class="`public-tag-${tag[sigTag].type} ${tag[sigTag].icon}`">{{ sigTag }}</a-tag>
                </div>
                <span>{{ dayjs(article.date).format('YYYY-MM-DD') }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import blogJson from '../../blogJson.json';
import { ref } from 'vue';
import dayjs from 'dayjs';

const tag = ref(blogJson.tag);
const articleList = ref(blogJson.blog.splice(0, 10));
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
        }
    }
}
</style>

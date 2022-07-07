<template>
    <Tag @updateTagName="updateTagName" />
    <ArticleListLoad :tagName="tagName" />
</template>
<script setup>
import blogJson from '../../blogJson.json';
import ArticleListLoad from '../components/ArticleListLoad.vue';
import Tag from '../components/Tag.vue';
import { getCookieFeild } from '../../public/js/utils.js'

const tagName = ref(getCookieFeild('tagName'));
const updateTagName = () => {
    tagName = ref(getCookieFeild('tagName'));
}
</script>
<style lang="scss" scoped>
.tagPage {
    .card-tag {
        width: var(--content-width);
        margin: 24px auto;
    }

    .article-content {
        width: var(--content-width);
        margin: 0 auto;
    }
}
</style>
<template>
    <div class="blog-container">
        <Tag :tagName="tagName" @updateTagName="updateTagName" />
        <ArticleListLoad :tagName="tagName" />
    </div>
</template>
<script setup>
import blogJson from '../../blogJson.json';
import { ref } from 'vue';
import ArticleListLoad from '../components/ArticleListLoad.vue';
import Tag from '../components/Tag.vue';
import { getCookieFeild } from '../../public/js/utils.js';

// 恶心人，参数传不过来
const tagName = ref(getCookieFeild('tagName') || 'all');
document.cookie = `tagName=;path=/`;
const updateTagName = (val) => {
    tagName.value = val;
};
</script>
<style lang="scss" scoped>
.tagPage {
    .card-tag {
        max-width: var(--content-width);
        margin: 24px auto;
        width: 100%;
    }

    .article-content {
        max-width: var(--content-width);
        margin: 0 auto;
        width: 100%;
    }
}

@media screen and (orientation: portrait) and (max-width: 740px) {
    .tagPage {
        .card-tag {
            width: 100%;
        }

        .article-content {
            width: 100%;
        }
    }
}
</style>

<template>
    <div class="card-tag">
        <a-tag
            v-for="sigTag in tag"
            :key="tag.type"
            class="public-tag"
            :class="`public-tag-${sigTag.type} ${sigTag.icon} ${pageFm.pageType === 'tagPage' ? 'for-choose' : ''} ${tagName === sigTag.type ? 'active' : ''}`"
            @click="tagClick(sigTag.type)"
        >
            {{ sigTag.name }}
        </a-tag>
    </div>
</template>
<script setup>
import blogJson from '../../blogJson.json';
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { getCookieFeild } from '../../public/js/utils.js';

const props = defineProps({
    tagName: String
});

const tagName = ref(props.tagName);
const emits = defineEmits(['updateTagName']);

const router = useRouter();
const pageFm = inject('pageFm');
const tag = ref(blogJson.tag);

// 点击跳转标签页,首页和标签页有引用
const tagClick = (type) => {
    tagName.value = type;
    if (pageFm.value.pageType === 'tagPage') {
        // 标签页本页
        emits('updateTagName', type);
    } else {
        document.cookie = `tagName=${type};path=/`;
        router.push({ path: '/blog/tagPage' });
    }
};
</script>
<style lang="scss" scoped>
.card-tag {
    padding: 1rem 1.2rem;
    border-radius: 8px;
    background: #fff;
    transition: all 0.3s;
}
.tagPage .public-tag {
    margin: 4px 16px 4px 0;
    &:hover,
    &:focus,
    &.active {
        background: #42b983;
        color: #fff;
    }
}
</style>

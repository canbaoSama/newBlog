<template>
    <div class="card-tag">
        <a-tag v-for="sigTag in tag" :key="tag" class="public-tag"
            :class="`public-tag-${sigTag.type} ${sigTag.icon} ${pageFm.pageType === 'tagPage' ? 'for-choose' : ''} ${tagName === sigTag.type ? 'active' : ''}`" @click="tagClick(sigTag.name)">
            {{ sigTag.name }}
        </a-tag>
    </div>
</template>
<script setup>
import blogJson from '../../blogJson.json';
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { getCookieFeild } from '../../public/js/utils.js'

const props = defineProps({
    tagName: String
});

const tagName = ref(props.tagName);
const emits = defineEmits(['updateTagName']);

const router = useRouter();
const pageFm = inject('pageFm');
const tag = ref(blogJson.tag);

// 点击跳转标签页
const tagClick = (name) => {
    tagName.value = name;
    if (pageFm.value.pageType === 'tagPage') { // 本页
        emits('updateTagName', name);
    } else {
        document.cookie = `tagName=${name};path=/`;
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

.tagPage .public-tag:hover,
.tagPage .public-tag:focus,
.tagPage .public-tag.active {
    background: #42b983;
    color: #fff;
}
</style>
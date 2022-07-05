<template>
    <!-- <Home /> -->
    <!-- <NavLinks class="can-hide" /> -->

    <ParentLayout>
        <!-- <template #navbar>
            <Navbar />
        </template> -->
        <template v-if="pageFm.pageType === 'home'" #page>
            <Home />
        </template>
    </ParentLayout>

    <div v-if="pageFm.pageType !== 'home'" class="footer-wrap">
        <a href="http://beian.miit.gov.cn/">备案号还在审核</a>
    </div>
</template>
<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Navbar from '../components/Navbar.vue';
import Home from '../pages/Home.vue';
import { usePageFrontmatter } from '@vuepress/client';
import { provide } from 'vue';

const pageFm = usePageFrontmatter();
provide('pageFm', pageFm)
</script>
<style lang="scss" scoped>
.home-page {
    background: #f4f4f4;
}

.footer-wrap {
    z-index: 9998;
    position: fixed;
    width: 100%;
    padding: 5px 0;
    background: #171d20;
    font-size: 12px;
    bottom: 0;
    left: 0;
    text-align: center;

    a {
        color: #fff;
        font-weight: 400;
    }
}
</style>

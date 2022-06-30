<template>
    <Home />
    <ParentLayout>
        <!-- <template #navbar>
            <Navbar />
        </template> -->
        <template #page-bottom>
            <div class="record-wrap">
                <a href="http://beian.miit.gov.cn/">备案号还在审核</a>
            </div>
        </template>
    </ParentLayout>
    <div class="record-wrap">
        <a href="http://beian.miit.gov.cn/">备案号还在审核</a>
    </div>
</template>
<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';
</script>

<style lang="css">
.my-footer {
    text-align: center;
}
</style>

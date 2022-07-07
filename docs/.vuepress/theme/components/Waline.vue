<template>
    <Waline :serverURL="serverURL" :path="path" :darkdowm="true" />
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Waline } from '@waline/client/dist/component';
import '@waline/client/dist/waline.css';

const serverURL = 'https://canbao-sama-github-io.vercel.app/';
const path = computed(() => useRoute().path);
</script>
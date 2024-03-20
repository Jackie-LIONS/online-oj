<template>
    <h1>首页</h1>
    <MdEditor :value="value" :handle-change="onChange"/>
    <CodingEditor :value="value" :handle-change="onChange"/>
</template>

<script setup>
import { ref } from 'vue'
import  MdEditor  from '@/component/MdEditor/index.vue'
import CodingEditor from '@/component/CodingEditor/index.vue'

const value = ref();
const onChange = function(v) {
    value.value = v;
    console.log(v);
};
</script>
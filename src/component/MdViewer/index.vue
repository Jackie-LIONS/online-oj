<template>
    <Viewer :value="value" :plugins="plugins"/>
</template>

<script setup>
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import {  Viewer } from '@bytemd/vue-next'
import ssr from '@bytemd/plugin-highlight-ssr'
import gemo from '@bytemd/plugin-gemoji'
import math from '@bytemd/plugin-math'
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { reactive, ref } from "vue"



// 定义组件属性类型
const props = defineProps({
    value: {
        value: '',
    },
})


const plugins = [
  highlight(),
  gfm(),
  gemo(),
  ssr(),
  math(),
  // Add more plugins here
];
</script>
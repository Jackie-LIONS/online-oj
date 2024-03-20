<template>
    <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script setup>
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor, Viewer } from "@bytemd/vue-next"
import ssr from '@bytemd/plugin-highlight-ssr'
import gemo from '@bytemd/plugin-gemoji'
import math from '@bytemd/plugin-math'
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { ref } from "vue"



// 定义组件属性类型
const props = defineProps({
    value: {
        value: '',
    },
    handleChange: {
        default: (v) => {
            console.log(v);
        }
    }
})


const plugins = [
  highlight(),
  gfm(),
  gemo(),
  ssr(),
  math(),
  // Add more plugins here
];
const value = ref('');
const handleChange = function(v) {
    value.value = v;
}
</script>
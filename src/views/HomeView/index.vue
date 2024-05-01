<template>
    <div class="container">
        <div class="content">
            <div class="carouselbox">
                <el-carousel effect="fade" autoplay>
                    <img :src="img.pic" alt="" v-for="img in state.imgs" @click="onView(img)">
                </el-carousel>
            </div>
        </div>
    </div>
    <MdEditor :value="value" :handle-change="onChange" />
    <CodingEditor :value="value" :handle-change="onChange" />
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import MdEditor from '@/component/MdEditor/index.vue'
import CodingEditor from '@/component/CodingEditor/index.vue'
import api from '@/api/index.js'

const value = ref();
const onChange = function (v) {
    value.value = v;
    console.log(v);
};
const state = reactive({
    imgs: []
})

onBeforeMount(() => {
    api.getNewsList().then(res => {
        if (res.data.code === 200) {
            state.imgs = res.data.data;
        }
    })
})

const onView = (img) => {

    window.location.href = img.url
}
</script>
<style scoped></style>
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <TopNavs />
            </el-header>
            <el-main><router-view></router-view></el-main>
            <el-footer>
                <Bottom />
            </el-footer>
        </el-container>
    </div>
    <!-- <TopNavs/>
    <router-view></router-view>
    <Bottom/> -->
</template>

<script setup>
import TopNavs from "@/component/TopNavs/index.vue"
import Bottom from "@/component/BottomNavs/index.vue"
</script>
<style scoped>
.common-layout, .el-container {
    height: 100%;
}
.el-header, .el-footer {
    padding: 0 !important;
}
</style>
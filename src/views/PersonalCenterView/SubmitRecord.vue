<template>
    <div class="submitDiv">
        <el-table :data="questionSubmit.questionSubmitInfo" :cell-style="{ 'text-align': 'center' }"
            :header-cell-style="{ 'text-align': 'center' }" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="createTime" label="提交时间" width="180">
                {{ moment(createTime).format("YYYY-MM-DD HH:mm") }}
            </el-table-column>
            <el-table-column prop="questionId" label="ID" width="180" />
            <el-table-column prop="title" label="题目" width="180"/>
            <el-table-column prop="status" label="通过" >
                <template v-slot="{ row }">
                    <span v-if="row.status === 3" style="color: green;">PASS</span>
                    <span v-else style="color: red;">FALSE</span>
                </template>
            </el-table-column>
            <el-table-column prop="difficulty" label="难度" >
                <template v-slot="{ row }">
                    <span v-if="row.difficulty === 1" style="color: green;">简单</span>
                    <span v-else-if="row.difficulty === 2" style="color: yellow;">中等</span>
                    <span v-else style="color: red;">困难</span>
                </template>
            </el-table-column>

            <!-- <el-table-column prop="" label="扩展字段" /> -->
        </el-table>
    </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { User, Lock, Star } from '@element-plus/icons-vue'
import api from '@/api/index.js'
import moment from "moment";

// 题目提交信息
const questionSubmit = reactive({
    questionSubmitInfo: [],
    total: 10,
    page: 1,
    size: 5,
})
const handleQuestionSubmit = async () => {
    api.getSingleQuestionSubmitPage({
        page: questionSubmit.page,
        size: questionSubmit.size,
    }).then(res => {
        if (res.data.code === 200) {
            console.log(res.data.data.records);
            questionSubmit.questionSubmitInfo = res.data.data.records;
            questionSubmit.total = res.data.data.total;
        } else {
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}
onMounted(() => {
    handleQuestionSubmit();
})
</script>

<style scoped></style>
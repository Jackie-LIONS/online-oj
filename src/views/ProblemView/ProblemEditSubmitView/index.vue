<template>
    <div class="problemEditSubmitView" id="ProblemEditSubmit">
        <el-row :gutter="24" style="display: flex">
            <el-col :span="11" :md="12" :xs="24">
                <el-tabs @tab-click="clickChange" v-model="tabName" >
                    <el-tab-pane label="题目" name="tab1" >
                        <el-card v-if="questionInfo" style="height:65vh; overflow: auto">
                            <template #header>
                                <div class="title">
                                    {{ questionInfo.title }}
                                </div>
                                <el-tag v-for=" (tag, index) in questionInfo.tags" :key="index" color="138, 204, 226">
                                    {{ tag }}
                                </el-tag>
                            </template>
                            <MdViewer :value="questionInfo.content || ''" />
                            <el-descriptions title="提示">
                                <el-descriptions-item label="时间限制">
                                    {{ questionInfo.judgeConfig.timeLimit ?? 0 }}
                                </el-descriptions-item>
                                <el-descriptions-item label="内存限制">
                                    {{ questionInfo.judgeConfig.memoryLimit ?? 0 }}
                                </el-descriptions-item>
                                <el-descriptions-item label="堆栈限制">
                                    {{ questionInfo.stackLimit ?? 0 }}
                                </el-descriptions-item>
                            </el-descriptions>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="提交记录" name="tab2">
                        <el-card v-if="questionSubmitInfo.questionInfo" style="height: 65vh; overflow: auto">
                            <el-table stripe style="width: 100%" :data="questionSubmitInfo.questionInfo">
                                <el-table-column prop="questionId" label="题目号" width="180" />
                                <el-table-column prop="language" label="编程语言" width="180" />
                                <el-table-column prop="status" label="是否通过" />
                                <el-table-column prop="createTime" label="时间">{{ moment(createTime).format("YYYY-MM-DD HH:mm") }}</el-table-column>
                            </el-table>
                            <el-pagination class="pagination" layout="prev, pager,next" :total="questionSubmitInfo.total"
                                :page-size="questionSubmitInfo.size" v-model:current-page="questionSubmitInfo.page"
                                @current-change="handleCurrentChange" />
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="题解" name="tab3">
                        暂时无法查看答案

                    </el-tab-pane>
                </el-tabs>
            </el-col >
            <el-col :span="11" :md="12" :xs="24" >
                <el-form :model="form" layout="inline">
                    <el-form-item field="title" label="编程语言" style="min-width: 240px;">
                        <el-select v-model="form.language" :style="{ width: '320px' }" placeholder="选择编程语言">
                            <el-option label="java" value="java"></el-option>
                            <el-option label="cpp" value="cpp"></el-option>
                            <el-option label="python" value="python"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <CodingEditor :value="form.code" :language="form.language" :handle-change="handleChange" style="height:60vh;"/>
                <br />
                <el-button color="#74cd87" :icon="UploadFilled" :dark="isDark" plain @click="doSubmit">提交</el-button>
                <el-button color="#e0e3ea" :icon="CaretTop" @click="duRunning">运行</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import api from '@/api/index.js';
import { UploadFilled, CaretTop } from '@element-plus/icons-vue';
import { onMounted, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import CodingEditor from '@/component/CodingEditor/index.vue';
import MdViewer from '@/component/MdViewer/index.vue';
import moment from "moment";

const tabName = ref('tab1');

// 获取路由对象
const router = useRouter();

// 声明用户信息
const questionInfo = reactive({
    questionId: "",
    title: "title",
    content: "",
    tags: [],
    judgeConfig: {
        timeLimit: "",
        memoryLimit: "",
        stackLimit: ""
    },
    submitNum: "",
    acceptedNum: "",
    thumbNum: "",
    createTime: "",
    updateTime: "",
});


const form = ref({
    language: "cpp",
    code: ""
})

// 使用 ref 创建响应式变量
const id = ref('');

const doSubmit = async () => {
    await api.getQuestionEditSubmit({
        language: form.value.language,
        code: form.value.code.trim(),
        questionId: id.value,
    }).then(res => {
        if (res.data.code === 200) {
            router.push("/")
        } else {
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}

// 获取个人做题提交记录
const questionSubmitInfo = reactive({
    questionInfo: [],
    total: 10,
    page: 1,
    size: 1,

})


const getSubmitInfo = async () => {
    await api.getquestionSubmitList({
        questionId: id.value,
        page: questionSubmitInfo.page,
        size: questionSubmitInfo.size,
    }).then(res => {
        if (res.data.code === 200) {
            questionSubmitInfo.questionInfo = res.data.data.records;
            questionSubmitInfo.total = res.data.data.total;
        } else {
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}

const loadData = async () => {
    console.log(666, "loadData");
    api.getQusetionEdit({
        questionId: id.value
    }).then(res => {
        if (res.data.code === 200) {
            Object.assign(questionInfo, res.data.data)
            console.log(111, questionInfo);
        } else {
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}
const handleChange = (value) => {
    form.value.code = value;
};

onMounted(() => {
    // 通过 router.currentRoute.value.query.id 获取路由参数
    id.value = router.currentRoute.value.query.id;
    loadData();
})
const handleCurrentChange = (page) => {
    questionSubmitInfo.page = page;
    getSubmitInfo();
}
function clickChange(pane) {
    switch (Number(pane.index)) {
        case 0:
            loadData();
            break;
        case 1:
            handleCurrentChange();
            break;
        case 2:
            break;
    }
}
</script>

<style scoped>
#ProblemEditSubmit {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

.el-row {
    height: 100% !important;
}

.title {
    font-weight: bold;
    font-size: large;
    margin-bottom: 15px;
}
</style>

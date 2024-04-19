<template>
  <div class="Person">
    <el-image style="width: 150px; height: 150px;position: absolute;border-radius: 50%;top: -90px;left: 50%;transform: translate(-50%, 0);" :src="userInfo.headPic" :fit="fit" />
    <div class="content">
      <el-descriptions
        :column="3"
        :style="blockMargin"
        border

      >
        <el-descriptions-item :span="3" align="center" min-width="150">
          <template #label>
            <div class="cell-item" >
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              昵称:
            </div>
          </template>
          {{ userInfo.nickname  }}
        </el-descriptions-item>
        <el-descriptions-item :span="3" align="center">
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              电话号码:
            </div>
          </template>
          {{ userInfo.phone  }}
        </el-descriptions-item>
        <el-descriptions-item :span="3" align="center">
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <Edit />
              </el-icon>
              用户简介:
            </div>
          </template>
          {{ userInfo.userProfile }}
        </el-descriptions-item>

      </el-descriptions>
    </div>
  </div>
</template>
<script setup>
import { computed,reactive,onMounted, ref } from 'vue'
import api from '@/api/index.js'

const size = ref('large')

const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: "100px",
    marginBottom: marginMap[size.value] || marginMap.default,
    marginLeft: marginMap[size.value] || marginMap.default,
    marginRight: marginMap[size.value] || marginMap.default,
  }
})

// 个人信息
const userInfo = reactive({
   username: "zhang",
   nickname: "zhang",
   phone: "13242598888",
   headPic:"src/assets/imges/2-cover.png",
   userProfile:"小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教小菜一枚，大神们多多指教",
})

// 登录事件
const handleUserInfo= async ()=>{
    api.getUserInfo({
    }).then(res=>{
        if(res.data.code === 200){
         Object.assign(userInfo, res.data.data)
        }else{
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}

onMounted(() => {
   handleUserInfo();
})
</script>

<style scoped>
::v-deep .el-descriptions__body{
  background: transparent !important;
}

.Person{
  position: relative;
}

.content{
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>

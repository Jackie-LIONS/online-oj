<template>
    <div id="code-editor" ref="codeEditorRef" style="min-height: 400px;height: 70vh;"/>
</template>

<script setup>
import * as monaco from 'monaco-editor'
import { onMounted,ref ,toRaw, defineProps, watch } from 'vue'

// 定义组件属性类型
const props = defineProps({
    value: () => "",
    language: ()=>"java",
    handleChange: {
        default: (v) => {
            console.log(v);
        }
    }
});
const codeEditorRef = ref();
const codeEditor = ref();

// watch(()=>props.language,()=>{
//     codeEditor.value = monaco.editor.create(codeEditorRef.value, {
//         value: props.value,
//         language: props.language,
//         automaticLayout: true,
//         minimap: {
//             enabled: true,
//         },
//         colorDecorators: true,
//         readOnly: false,
//         theme: "vs-dark",
//     });
// })
onMounted(() => {
    if(!codeEditorRef.value){
        return;
    }
    codeEditor.value = monaco.editor.create(codeEditorRef.value,{
        value: props.value,
        language: props.language,
        automaticLayout: true,
        minimap: {
            enabled: true,
        },
        colorDecorators: true,
        readOnly: false,
        theme: "vs-dark",
    });

    // 编辑 监听内容变化
    codeEditor.value.onDidChangeModelContent(()=> {
        props.handleChange(toRaw(codeEditor.value).getValue());
    });
});
</script>

<style scoped>
/* #code-editor {
    height: 100%;
} */
</style>

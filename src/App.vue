<template>
  <ElConfigProvider :locale="locale">
    <router-view/>
  </ElConfigProvider>
<!--  <el-button @click="toggle">switch</el-button>-->
</template>

<script setup lang="ts">
import {ref, computed, h } from "vue";
import { useTheme } from "@/hooks/useTheme"
import {ElNotification} from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs"
// import {zhCn} from "element-plus/es/locale";

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()
// const locale = zhCn
const language = ref('zh-cn')
const locale = computed(()=>(language.value === 'zh-cn' ? zhCn : en))
const toggle = () =>{
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}

ElNotification({
  title: "Hello",
  message: h(
      "a",
      { style: "color: teal", target: "_blank", href: "https://github.com/un-pany/v3-admin-vite" },
      "小项目获取 star 不易，如果你喜欢这个项目的话，欢迎点击这里支持一个 star ！这是作者持续维护的唯一动力（小声：毕竟是免费的）"
  ),
  duration: 0,
  position: "bottom-right"
})
</script>



<!--<style scoped>-->
<!--.logo {-->
<!--  height: 6em;-->
<!--  padding: 1.5em;-->
<!--  will-change: filter;-->
<!--  transition: filter 300ms;-->
<!--}-->
<!--.logo:hover {-->
<!--  filter: drop-shadow(0 0 2em #646cffaa);-->
<!--}-->
<!--.logo.vue:hover {-->
<!--  filter: drop-shadow(0 0 2em #42b883aa);-->
<!--}-->
<!--</style>-->

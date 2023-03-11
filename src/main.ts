// core
import { createApp } from 'vue'
import App from '@/App.vue'
import store from "@/store";
import router from "@/router"
// load
import {loadSvg} from "@/icons";
import {loadPlugins} from "@/plugins";
// css
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import '@/styles/index.scss'

const app = createApp(App)

// 加载插件
loadPlugins(app)
// 加载全局SVG
loadSvg(app)

app.use(store).use(router).mount('#app')
// createApp(App).mount('#app')


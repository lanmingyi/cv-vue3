// core
import { createApp } from 'vue'
import App from '@/App.vue'
import store from "@/store";
import router from "@/router"
import "@/router/permission"
// load
import {loadSvg} from "@/icons";
import {loadPlugins} from "@/plugins";
// css
import "uno.css"
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "vxe-table-plugin-element/dist/style.css"
import '@/styles/index.scss'

const app = createApp(App)

// 加载插件
loadPlugins(app)
// 加载全局SVG
loadSvg(app)

app.use(store).use(router).mount('#app')
// createApp(App).mount('#app')


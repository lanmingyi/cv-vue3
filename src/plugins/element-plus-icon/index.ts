import {type App} from "vue";
import * as ElementPlusIconVue from '@element-plus/icons-vue'

export function loadElementPlusIcon(app: App){
    // 注册所有 Element Plus Icon
    for(const [key, component] of Object.entries(ElementPlusIconVue)){
        app.component(key, component)
    }
}
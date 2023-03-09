import {type App} from "vue";
import ElementPlus from 'element-plus'

export function loadElementPlus(app:App){
    // ElementPlus 组件完整引用
    app.use(ElementPlus)
}
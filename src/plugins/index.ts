import { type App } from 'vue'
import {loadElementPlus} from "@/plugins/element-plus";
import {loadElementPlusIcon} from "@/plugins/element-plus-icon";

export function loadPlugins(app:App){
    loadElementPlus(app)
    loadElementPlusIcon(app)
}
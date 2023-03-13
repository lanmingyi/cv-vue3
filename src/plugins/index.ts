import { type App } from 'vue'
import {loadElementPlus} from "@/plugins/element-plus";
import {loadElementPlusIcon} from "@/plugins/element-plus-icon";
import { loadVxeTable } from "./vxe-table"

export function loadPlugins(app:App){
    loadElementPlus(app)
    loadElementPlusIcon(app)
    loadVxeTable(app)
}
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons"
// import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // /** 将 SVG 静态图转化为 Vue 组件 */
        // svgLoader(),
        /** SVG */
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
            symbolId: "icon-[dir]-[name]"
        }),
    ],
    // 解决[vite] Internal server error: Failed to resolve import
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})

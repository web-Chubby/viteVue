import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pagesPlugin from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pagesPlugin({
      // 将什么样的文件转换成路由
      extensions: ["vue"],
      // 哪个文件夹里的vue文件不需要转换成路由
      exclude: ["**/components/*.vue"],
      // 需要生成路由的文件目录，默认就是识别src下面的pages文件
      dirs: "src/pages",
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});

# Vue 3 + Vite

# 一个简单框架模板

技术栈:
  * vue3
  * vite
  * elementPlus
  * router
  * pinia

vite 插件:
  * @vitejs/plugin-vue 提供 Vue 3 单文件组件支持
  * unplugin-auto-import 按需 API 自动导入
  * unplugin-vue-components 按需组件自动导入
  * vite-plugin-pages 基于文件系统的路由生成器

如果想要支持 vue2 ，可以使用 @vitejs/plugin-vue2 插件

* 其中已经做好文件路由系统，只需要在 pages 文件夹中创建文件路由即可。
* 对于全局状态管理自行查看 pinia 官方文档，基本与vuex相同

如果想要单独配置某个页面的路由信息，在页面中加入 route 标签自行配置
`
<route>
  {
    name: 'home',
    meta: {
      demoactive: '123'
    }
  }
</route>
`

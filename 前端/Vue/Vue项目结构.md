# Vue3 项目结构

```term
$ tree
.
├── index.html: HTML模板
├── node_modules: NPM包
├── package.json: 项目描述文件
├── package-lock.json: 依赖包版本锁定文件
├── public: 公用资源
└── src: 项目文件
    ├── App.vue: 根组件
    ├── assets: 资源目录
    ├── components: 组件
    ├── index.css: 全局样式
    └── main.js: 项目入口文件
```

### 添加 TS 支持

1. 更改入口文件后缀名
2. 更改`HTML`模板
3. 添加`shims-vue.d.ts`类型声明文件

```ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}
```

> **[info] For Info**
>
> 红线提示`vue/no-multiple-template-root`是`Vue2`的遗留。
> `Vue`的虚拟`DOM`将`VNode`设计成了单一`root`节点的树状结构，`render`时只会识别第一个根节点。
> `Vue3`会自动将多节点使用新组件`Fragment`包裹，这样可以减少代码层级，降低内存占用。

## main.ts

```ts
import { createApp } from 'vue';
import App from './App.vue'; // 导入根组件

createApp(App).mount('#app'); // 创建应用实例，并挂载到HTML模板中id为app的标签下
```

## App.vue

```vue
// HTML模板
<template>
    <h1>HTML</h1>
    <hello-world />
</template>

// TS脚本
<script lang="ts">
    import HelloWorld from './components/HelloWorld.vue'; // 导入子组件

    // 模块默认导出
    export default {
        name: 'App', // 组件名
        // 注册子组件
        components: {
            HelloWorld,
        },
    };
</script>

// CSS样式
<style>
    h1 {
        color: red;
    }
</style>
```

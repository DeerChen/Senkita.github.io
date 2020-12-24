# setup 与 ref

所有`Composition API`都放`setup`中，但`setup`在`beforeCreate`之前执行且仅一次，则无法使用组件实例对象`this`。

## Vue3

```vue
<template>
    // 插值语法
    {{ num }}
    <button @click="add">+1</button>
</template>

<script lang="ts">
    import { Ref, ref } from 'vue';

    export default {
        // 复合API入口
        setup() {
            const num: Ref<number> = ref(0); // 基本类型的响应式对象

            function add(): void {
                num.value++; // 操作响应式对象的数据
            }

            return { num, add };
        },
    };
</script>
```

1. `@`：`v-on:`绑定事件
2. `ref`通过对数据的`value`属性添加`setter`和`getter`方法劫持，传入对象则会经过`reactive`处理为`Proxy`对象
3. `template`中要使用`setup`返回出来的属性需要用插值语法
4. 响应式：数据变化，则页面随之更新
5. `setup`中合并了`Vue2`中的`data`和`methods`
6. `setup`返回的数据要在`tempalte`中使用，所以不能`async`，否则返回的是一个`Promise`对象

### setup 参数

1. `props`：父级组件传下来的数据，需要在子组件的`props`中进行接收
2. `context.attrs`：在`props`中无声明但接收了的属性对象
3. `context.emit`：分发事件方法，子传父
4. `context.slots`：插槽

## Vue2

```vue
<template>
    {{ num }}
    <button @click="add">+1</button>
</template>

<script>
    export default {
        // 属性
        data() {
            return {
                num: 0,
            };
        },
        // 方法
        methods: {
            add() {
                this.num++;
            },
        },
    };
</script>
```

### Vue2 的响应式实现

```ts
Object.defineProperty(data, 'num' {
    // 对已有属性进行读写
    get (){},
    set (){}
});
```

1. 对新增和删除无效
2. 响应式数组是通过重写来进行更新的，后来采用`$set`进行部分操作

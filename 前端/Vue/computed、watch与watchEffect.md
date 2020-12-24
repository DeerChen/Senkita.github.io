# computed、watch 与 watchEffect

```vue
<template>
    <input type="text" v-model="name" /><br />
    watch: <input type="text" v-model="nameW" />
</template>
<script lang="ts">
    import { Ref, ref, computed, watchEffect, watch } from 'vue';
    export default {
        setup() {
            let name: string = '张三';

            const change = computed({
                get() {
                    return name;
                },
                set(val: string) {
                    name = val;
                },
            });

            const nameW: Ref<string> = ref('');

            watch(
                () => name,
                (val: string) => {
                    nameW.value = val;
                },
                {
                    immediate: true, // 默认执行一次
                    deep: true, // 深度监听
                }
            );

            watchEffect(() => {
                name = nameW.value;
            });

            return { name, nameW };
        },
    };
</script>
```

1. `v-model`：`:value`和`@`的结合，绑定并监听数据
2. `watch`监听非响应式数据或`reactive`对象属性时，需要使用回调函数
3. `watchEffect`监听会默认`immediate`

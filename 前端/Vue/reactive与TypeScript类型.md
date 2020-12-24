# reactive 与 TypeScript 类型

基础类型响应式用`ref`，复合类型响应式用`reactive`。

```vue
<template>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ nickName }}</div>
    <button @click="sayHi">Click</button>
</template>

<script lang="ts">
    import { reactive, toRefs } from 'vue';

    // 接口
    interface Person {
        readonly name: string; // 只读
        age?: number; // 可选
        nickName: string;
    }

    interface Func {
        (): void;
    }

    export default {
        setup() {
            const person: Person = {
                name: '张三',
                age: 18,
                nickName: '狗蛋',
            };
            const personProxy: Person = reactive<Person>(person); // 复合类型的响应式对象

            // 箭头函数
            const sayHi: Func = (): void => {
                console.log(
                    `My name is ${personProxy.name}, I'm ${personProxy.age++}.`
                );

                delete personProxy.nickName; // 删除属性
            };

            return {
                ...toRefs(personProxy), // 析构reactive为ref
                sayHi,
            };
        },
    };
</script>
```

1. 接口用于约束变量
2. 操作响应式对象的数据，并使得页面更新渲染，则需要使用代理器对象进行操作

## Vue3 的响应式实现

```ts
new Proxy(data, {
    get(target, props) {
        return Reflect.get(target, props);
    },
    set(target, props, val) {
        return Reflect.set(target, props, val);
    },
    deleteProperty(target, props) {
        return Reflect.deleteProperty(target, props, val);
    },
});
```

1. `reactive`使用`ES6`的`Proxy`实现，接收一个普通对象并返回一个响应式代理器对象，将对象内部所有嵌套属性全部转换成响应式数据
2. `Proxy`的`handler`共有 13 种方法，配合`Reflect`对象返回目标对象的静态方法

## TypeScript 类型

```ts
// 数组类型
const arr: Array<number> = [1, 2, 3];
const arr: string[] = ['a', 'b', 'c'];

// 枚举类型
enum Gender {
    Boy,
    Girl,
    Other,
}
const gender: Gender = Gender.Other;
```

1. 基础类型有`string`、`number`、`boolean`、`undefined`、`null`和`object`
2. 任意类型`any`，严格任意类型`unknown`
3. 函数返回空值类型`void`
4. `TS`兼容`JS`，所以支持类型推断

## 类型断言

```ts
// 联合类型
function getLen(x: string | number): void {
    if ((<string>x).length) {
        return (x as string).length;
    } else {
        return x.toString().length;
    }
}
```

1. 类型断言可以使用`<>`或`as`

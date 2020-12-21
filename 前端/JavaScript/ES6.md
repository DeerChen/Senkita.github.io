# ES6

`ECMAScript`规范，`JavaScript`和`TypeScript`是实践，`TypeScript`是`JavaScript`的超集，优先支持`ES`新特性。
并非所有的浏览器都支持`ES6`及其以上的新特性。如果在项目中使用新特性，需用编译器将代码转为`ES5`。

## 变量声明

```ts
// 严格模式
'use strict';

let value = 10;

// 常量声明
const VALUE = 100;
```

1. `let`声明前调用会形成临时死区(`TDZ`)
2. `const`也会形成死区，但必须立即赋值

> **[info] For Info**
>
> 变量标识符以`camelCase`为命名规范，而常量标识符应为全大写，单词之间用`_`隔开

```ts
let obj = {
    one: 1,
};

Object.freeze(obj); // 禁止改动
```

## 函数

```ts
let fu1 = function () {};

// 箭头函数
let fn2 = (...args) => args[0];

// IIFE
(function () {})();

let person = {
    name: '',
    // ES6中可以省略function关键字
    sayHi() {},
};

let arr = [1, 2, 3, 4];
// REST运算符
Math.max(...arr);
```

1. 箭头函数如果只有一个参数，则参数括号可省略
2. 箭头函数如果只有一条执行语句，则函数体括号也可省略
3. `ES6`中函数参数可设置默认值
4. `IIFE`：`Immediately Invoked Function Expression`，立即调用函数表达式

## 析构

```ts
let obj = {
    greeing: 'Halo',
    name: 'Amy',
    score: [1, 2, 3],
};

// 对象解构
let { greeting, name: userName, score, gender = 'female' } = obj;
// 数组解构
let [f, s, l] = score;

// 解构互换
let [f, s] = [s, f];
```

## 模板字符串

```ts
let age = 12;

console.log(`I'm ${age} years old.`);
```

## 类

`ES6`中的类不是完整的基于类的面向对象编程范式的实现，其本质还是原型继承。

```ts
class Animal {
    // 私有属性
    #age;
    // 构造函数
    constructor(name: string, age: int) {
        this._name = name;
        this.#age = age;
    }

    // Getter函数
    get name() {
        return this._name;
    }

    // Setter函数
    set name(newName) {
        this._name = newName;
    }
}

let a = new Animal('Bingo', 18);
a.name = '';
console.log(a.name);
```

1. 类名使用`UpperCamelCase`规范
2. 构造函数在`new`时调用
3. 私有变量标识符以`_`起头
4. `Getter`函数用于外部访问私有变量
5. `Setter`函数用于外部设置私有变量

## 模块

```html
<script type="module" src="script.js"></script>
```

```ts
import React, { PureComponent } from 'react';

class App extends PureComponent {}

export {};
// 默认导出
export default App;
```

1. 每个模块只能有一个`export default`

## Promise

`Promise`是异步通信编程的一种解决方案，避免回调地狱。有`pending`、`Fulfilled`和`Rejected`三种状态。

```ts
const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve('Fulfilled');
    } else {
        reject('Rejected');
    }
});
// 链式调用
promise.then((value) => {}).catch((err) => {});

Promise.all([]); // 异步Promise排序输出，但要全部完成才会输出，而且一个失败全部失败
Promise.race([]); // 只输出第一个改变状态的示例
Promise.resolve(); // 只输出一个成功实例
Promise.reject(); // 只输出一个失败实例
```

1. 链式调用返回的是`Promise`对象

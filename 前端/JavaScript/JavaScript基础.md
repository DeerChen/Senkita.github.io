# JavaScript 基础

## 变量与类型

```js
// 单行注释
/*
    多行注释
*/

// 全局变量声明并赋值
var name = 4;

// 控制台清屏
console.clear();

// 类型
console.log(typeof undefined); // undefined，未定义
console.log(typeof true); // boolean
console.log(typeof ''); // string
console.log(typeof Symbol()); // symbol
console.log(typeof 1n); // bigint
console.log(typeof 1); // number
console.log(typeof {}); // object
console.log(typeof null); // object，但null是JS的类型之一，代表空值
```

1. 变量标识符可以由字母、数字、`_`和`$`组成，但不能含有空格且数字不能打头。严格区分大小写
2. `var`会变量提升，可重复声明，但后来者居上。`var`定义的变量会覆盖掉顶层对象的内置属性，浏览器的顶层对象是`windows`，`Node`环境的顶层对象是`global`
3. `null`的原型对象是`undefined`

> **[info] For Info**
>
> 实数存储为浮点数有时会有四舍五入的精度错误，这是因为计算机的本质是用二进制进行存储所导致的。

## 运算符与转义字符

| 运算符         | 列举                                           |
| -------------- | ---------------------------------------------- | --- | ------------ |
| 算术运算符     | `+`、`-`、`*`、`/`、`%`                        |
| 自增自减运算符 | `++`、`--`                                     |
| 赋值运算符     | `=`、`+=`、`-=`、`*=`、`/=`、`%=`              |
| 关系运算符     | `==`、`===`、`>`、`<`、`>=`、`<=`、`!=`、`!==` |
| 逻辑运算符     | `                                              |     | `、`&&`、`!` |

1. `+`也可用于字符串拼接
2. `%`：求余运算符，与模数相似，但无法对负数使用
3. `==`和`!=`会将变量转化为同类型进行比较

| 转义字符 | 含义    |
| -------- | ------- |
| `\'`     | `'`     |
| `\"`     | `"`     |
| `\\`     | `\`     |
| `\n`     | 换行    |
| `\r`     | 回车    |
| `\t`     | `Tab`位 |

## 字符串

```js
var str = '';

console.log(str.length); // 字符串长度
console.log(str[0]); // 字符串索引
```

1. 字符串的内容不可变

## 函数与作用域

```js
// 函数声明
function queueAdd(arr, item) {
    // 局部变量
    var first = arr.shift();

    arr.push(item);
    // 返回值
    return first;
}

var sum = func(1, 2); // 函数调用
```

1. 花括号定义局部作用域
2. 局部变量作用域高于全局，故同名覆写
3. 无定义返回值返回`undefined`
4. 递归函数必须要有收敛条件，递归栈`FILO`

## 流程控制

流程控制可嵌套。

```js
// 三目运算符
1 === 0 ? console.log(true) : console.log(false);

// if判断
if (1 === 0) {
    console.log('1 === 0');
} else if (1 < 0) {
    console.log('1 < 0');
} else {
    console.log('1 > 0');
}

// switch判断
switch (1 === 0) {
    case true:
        console.log(true);
        break;
    // 缺省语句
    default:
        console.log(false);
}

// for循环
var arr = [];
for (var i = 0; i < arr.length; i += 2) {
    console.log(i);
}

// while循环
var i = 0;
while (i < 5) {
    i++;
}

// do…while循环
do {
    i++;
} while (i < 5);
```

## 数值

```js
console.log(Math.random()); // 返回[0, 1)之间的随机数

console.log(Math.floor(3.14)); // 四舍五入

console.log(parseInt('3.14', 2)); // 字符串转数值
```

1. `NaN`：非数
2. `parseInt`函数的参数是：字符串 进制

## 异常处理

```js
try {
} catch {
} finally {
}
```

## 数组

```js
var arr = [
    [1, 2],
    [3, 4],
]; // 多维数组

arr[0][0] = 5; // 数组索引，数组值可变
arr.indexOf([]); // 查询

arr.push([5, 6]); // 添加到尾部
arr.pop(); // 删除并返回数组末尾元素
arr.unshift([0, 1]); // 添加至首部
arr.shift(); // 删除并返回数组首部元素

let newArr1 = arr.splice(1, 2, 50); // 删增元素并返回新数组
let newArr2 = arr.slice(1, 2); // 切片
```

1. `indexOf`方法不存在返回`-1`
2. `splice`参数：删除起始索引 删除元素数量 在原位上新增的元素
3. `slice`参数：起始索引 终止索引

## 对象

键值对结构，键为字符串类型，值为任意类型。可嵌套。

```js
var obj = {
    one: 1,
    two: 2,
};

// 访问属性并增改
obj.one = '1';
obj['two'] = '2';
obj['list'] = ['a', 0];

delete obj.one; // 删除属性

// 判断属性是否存在
obj.hasOwnProperty('one');
'two' in obj;

// 遍历
for (let i in obj) {
}

// 键值数组
console.log(Object.keys(obj));
```

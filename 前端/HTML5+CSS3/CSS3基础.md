# CSS3 基础

`CSS`(`Cascading Style Sheets`)，层叠样式表。用于编排网页外观及元素布局。层叠表现在后来者居上，元素会采用溯源离它最近的那个样式。

```html
<html>
    <head>
        <!-- 外联式 -->
        <link rel="stylesheet" href="style.css" />

        <!-- 内联式 -->
        <style></style>
    </head>
    <body>
        <!-- 行内式 -->
        <div style="display: none"></div>
    </body>
</html>
```

1. 推荐使用外联式，页面结构与样式相分离。
2. `CSS`严格区分大小写
3. 花括号确定样式范围，分号表示语句作结，不可或缺
4. 子元素会继承父元素样式

> **[info] For Info**
>
> `display: none`和`visibility: hidden`会对所有用户，包括屏幕阅读器隐藏。但`display: none`不占据空间，而`visibility: hidden`隐藏依旧占用空间。
> 如果元素宽高均为 0，则屏幕阅读器也将忽略元素。

## 选择器

`CSS`的原理是通过选择器锁定`DOM`(`Document Object Model`，文档对象模型)上的元素，改变元素属性，从而施加样式。

```css
/* 伪类选择器 */
:root {
    /* 变量 */
    --val: 200px;
}

/* 伪元素选择器 */
div::before {
    content: '';
}

/* 标签选择器 */
body {
    height: var(--val, 100px);
}

/* 类选择器 */
.container {
}

/* id选择器 */
#app {
}

/* 属性选择器 */
input[type='radio'] {
}
```

1. 变量引用可设置默认值
2. 类选择器可复用，`class`属性可重名
3. `id`选择器不可复用，`id`属性要唯一
4. 伪元素选择器用来制作形状时，通常会将其内容置空

## 宽高

```css
div {
    /* 高度 */
    height: 100px;
    /* 宽度 */
    width: 100px;
    /* 最小高度 */
    min-height: 50px;
    /* 最小宽度 */
    min-width: 50px;
}
```

尺寸单位有：

1. `px`：`pixels`像素，绝对尺寸
2. `rpx`：`responsive pixels`，小程序用的宽度自适应尺寸
3. `vh`：视口高度比，相对于视口尺寸
4. `vw`：视口宽度比
5. `vmin`: 视口最小尺寸
6. `vmax`：视口最大尺寸
7. `em`：相对父元素对象尺寸
8. `rem`：相对根元素对象尺寸
9. 百分比：相对于父容器

## 文本

```css
p {
    /* 文本超出标识 */
    text-overflow: ellipsis;
    /* 超出部分处理 */
    overflow: hidden;
    /* 文本换行 */
    white-space: nowrap;

    /* 词间距 */
    word-spacing: 4px;
    /* 字母间距 */
    letter-spacing: 1px;

    /* 换行 */
    word-break: normal;
    word-wrap: normal;

    /* 垂直对齐 */
    vertical-align: bottom;
    /* 水平对齐 */
    text-align: justify;
    /* 首行缩进 */
    text-indent: 40px;
    /* 齐行 */
    text-justify: distribute;

    /* 字体阴影 */
    text-shadow: 2px 2px 5px #000;
    /* 装饰线 */
    text-decoration: lightgreen underline wavy;

    /* 大小写转换 */
    text-transform: lowercase;
}
```

1. `text-overflow`属性要配合`white-space`属性和`overflow`属性使用
2. `vertical-align`只对`display: inline`或`display: table-cell`的元素有效
3. `text-shadow`属性值：水平距离 垂直距离 模糊距离 颜色
4. `text-decoration`属性值：颜色 位置 样式
    1. `text-decoration`属性取值有`underline`(下划线)、`line-through`(删除线)等
5. `text-align`属性取值有：`justify`(两端对齐)、`center`(文本居中)、`left`(文本居左)、`right`(文本居右)
6. `text-transform`属性取值有：`lowercase`(全小写)、`uppercase`(全大写)、`capitalize`(首字母大写)、`initial`(默认值)、`inherit`(继承)和`none`

## 字体

```css
h1 {
    /* 字体颜色 */
    color: hsla(60, 100%, 50%, 100%) !important;
    /* 字体 */
    font-family: sans-serif;
    /* 字号 */
    font-size: 16px;
    /* 字重 */
    font-weight: bold;
    /* 字体样式 */
    font-style: italic;
    /* 小型大写字母 */
    font-variant: small-caps;

    /* 行高 */
    line-height: 1.5;
}
```

1. `!important`表示绝对优先
2. 通用字体族名有：`monospace`(等宽字体，代码首选)、`serif`(衬线字体，打印首选)、`sans-serif`(无衬线字体，页面首选)、`fantasy`和`cursive`(这两种花里胡哨，纯粹为了好看)

## 链接

```css
a {
    /* 鼠标样式 */
    cursor: pointer;
}
/* 链接未被点击状态 */
a:link {
    /* 英文单词 */
    color: red;
}
/* 链接已被点击状态 */
a:visited {
    /* 16 进制 */
    color: #f00;
}
/* 鼠标扫过链接状态 */
a:hover {
    /* rgba值 */
    color: rgba(255, 0, 0, 1);
}
/* 点击链接状态 */
a:active {
    /* hsla值 */
    color: hsla(0, 100%, 50%, 1);
}
```

1. 链接样式书写顺序：`link`、`visited`、`hover`、`active`，不能颠倒，否则不生效

## 边框

```css
div {
    /* 外边距 */
    margin: 20px;
    /* 外边框宽度，不占用盒子模型 */
    outline-width: 2px;
    /* 外边框颜色 */
    outline-color: black;
    /* 外边框样式 */
    outline-style: dashed;
    /* 外边框偏移量 */
    outline-offset: 10px;

    /* 内边距 */
    padding: 50px;

    /* 边框宽度 */
    border-width: 10px 2px 3px 4px;
    /* 边框样式 */
    border-style: dotted;
    /* 边框颜色 */
    border-color: blue red gray;
    /* 圆角半径 */
    border-radius: 10px 20%;
    /* 盒子阴影 */
    box-shadow: 5px 5px 5px cyan;

    /* 边框图片 */
    -webkit-border-image: url('https://www.baidu.com/img/fddong_e2dd633ee46695630e60156c91cda80a.gif')
        0% 1% 0% round;
}
```

1. `margin`控制边框与其它元素之间的距离
2. `padding`控制边框与内部元素之间的距离
3. 样式顺序：上右下左，顺时针
4. `box-shadow`属性值：水平偏移量 垂直偏移量 模糊半径(可选) 扩散半径(可选) 颜色
5. 边框图片属性值：图片地址 向内偏移值 边框宽度 超出边框量 图像边框处理样式

## 定位

```css
.container {
    /* 位置类型 */
    position: relative;
}

.item {
    position: absolute;

    /* 展现形式 */
    display: block;

    /* 坐标偏移量 */
    left: 147px;
    top: 47px;

    /* 堆叠次序 */
    z-index: -1;
}

div {
    /* 浮动 */
    float: right;
}

#photo {
    /* 块元素水平居中 */
    margin: 0 auto;

    overflow: hidden;
    /* 是否显示 */
    visibility: visible;

    /* 清除周围浮动 */
    clear: right;

    /* 剪裁 */
    clip: rect(0px, 100px, 200px, 0px);
}
```

1. `position`属性取值有：
    1. `relative`：相对原位置，不会脱离文档流
    2. `absolute`：相对父容器锁定，脱离文档流。常用有子绝父相布局
    3. `fixed`：相对浏览器窗口锁定，脱离文档流，不随页面滚动而移动
2. `float`属性脱离文档流
3. `z-index`属性取值越大越靠近用户

## 背景

```css
div {
    /* 背景颜色 */
    background-color: repeating-linear-gradient(
        90deg,
        lightsalmon 40px,
        #cff 20px,
        #fcc 10px
    );
    /* 透明度 */
    opacity: 0.8;
    /* 背景剪裁 */
    background-clip: content-box;

    /* 背景图片 */
    background-image: url('https://www.baidu.com/img/flexible/logo/pc/result.png');
    /* 背景图片剪裁 */
    background-origin: border-box;
    /* 背景尺寸 */
    background-size: 120px 80px;
    /* 背景重复 */
    background-repeat: repeat-y;
    /* 背景左上角坐标 */
    background-position: 250px 50px;
    /* 背景滚动 */
    background-attachment: local;

    /* 超出部分处理 */
    overflow-y: scroll;
}
```

1. `url`指向图片链接

### 颜色

1. `repeating-linear-gradient`属性值表示重复线性渐变，参数有：角度，渐变色 渐变色宽度
2. `linear-gradient`属性值表示线性渐变，参数有：角度，渐变色顺序
3. `rgba`即红 绿 蓝 透明度(0 为透明，1 为不透明)
4. `hsla`即色相(红黄绿青蓝洋，以 60 为递进，0-360) 饱和度(灰度含量，0-100%) 亮度(黑白含量，0-100%) 透明度

> **[info] For Info**
>
> 网页设计通常以一种颜色作为主色，互补色用于强调个别内容。普通文本的相对亮度对比值至少是 4.5: 1。
> 色盲用户是对某一波长的光的敏感度降低到完全看不到的程度，因此在传达重要信息时要避免使用相似色组合。

| 常见颜色英文名       | 十六进制值 | `RGB`值              | `HSL`值               |
| -------------------- | ---------- | -------------------- | --------------------- |
| `Red`                | `#F00`     | `rgb(255, 0, 0)`     | `hsl(0, 100%, 50%)`   |
| `Orange`             | `#FFA500`  |                      |                       |
| `Yellow`             | `#FF0`     | `rgb(255, 255, 0)`   | `hsl(60, 100%, 50%)`  |
| `Green`              | `#0F0`     | `rgb(0, 255, 0)`     | `hsl(120, 100%, 50%)` |
| `Cyan`               | `#0FF`     | `rgb(0, 255, 255)`   | `hsl(180, 100%, 50%)` |
| `Blue`               | `#00F`     | `rgb(0, 0, 255)`     | `hsl(240, 100%, 50%)` |
| `Magenta`或`Fuchsia` | `#F0F`     | `rgb(255, 0, 255)`   | `hsl(300, 100%, 50%)` |
| `DodgerBlue`         | `#1E90FF`  |                      |                       |
| `Orchid`             |            | `rgb(218, 112, 214)` |                       |
| `Sienna`             |            | `rgb(160, 82, 45)`   |                       |

## 变换

```css
div {
    /* 图形变换 */
    transform: rotate(30deg);
}
```

1. `transform`属性取值有：
    1. `scale`：放缩
    2. `skewX`：水平变形
    3. `skewY`：垂直变形
    4. `rotate`：旋转

### 动画

```css
/* 动画关键帧 */
@keyframes change {
    from,
    to {
        opacity: 0;
    }
}

div {
    /* 动画时长 */
    animation-duration: 1s;
    /* 动画名 */
    animation-name: change;
    /* 动画循环次数 */
    animation-iteration-count: infinite;
    /* 动画终止状态 */
    animation-fill-mode: forwards;
    /* 动画时延 */
    animation-delay: 1s;

    /* 动画播放状态 */
    animation-play-state: running;
    /* 动画时间曲线 */
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
```

1. `animation-timing-function`属性取值有：
    1. `ease`：中间加速，头尾慢
    2. `ease-in`：开始慢，后面加速
    3. `ease-out`：开始加速，后面慢
    4. `linear`：线性
    5. `cubic-bezier`：贝塞尔曲线，参数为`x1, y1, x2, y2`

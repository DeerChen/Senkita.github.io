# HTML5 基础

`HTML`(`HyperText Markup Language`)，超文本标记语言。是一种用于描述网页结构的标记语言。它使用特定的标签来组织网页结构。其超文本的部分源自于网络早期的使用情况，那时网页通常是静态文档，其中包含对其他文档的引用，而这些引用正是使用超文本链接进行导航跳转的。
随着网页和网络应用越来越复杂，`W3C`万维网联盟(`World Wide Web Consortium`)更新了`HTML`规范，以确保网页能够在任何浏览器上都可以正常显示。
`HTML`的最新版本是`HTML5`。

## 常用标签

大多数`HTML`元素都有一个开头标签和一个结尾标签。开头标签看起来像这样：`<h1>`，结尾标签是这样的：`</h1>`。开头标签和结尾标签的唯一区别是结尾标签有个正斜杠。
标签支持嵌套。

```html
<!-- HTML5声明 -->
<！DOCTYPE html>
<!-- 文档 -->
<html lang="en">
    <!-- 文档头部里写页面信息 -->
    <head>
        <!-- 字符集 -->
        <meta charset="UTF-8" />
        <!-- 视口，文档初始宽度和缩放值 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>文档标题</title>
    </head>

    <!-- 文档主体 -->
    <body>
        <!-- 注释 -->

        <h1>主标题</h1>
        <h2>副标题</h2>
        <h3>三级标题</h3>
        <h4>四级标题</h4>
        <h5>五级标题</h5>
        <h6>六级标题</h6>

        <p>段落</p>

        <!-- 块元素 -->
        <div>
            <span>行内元素</span>
        </div>

        <!-- 换行符 -->
        <br />
        <!-- 分割线 -->
        <hr />

        <center>居中</center>

        <i>倾斜</i>
        <b>加粗</b>
        <em>强调</em>
        <strong>严正强调</strong>

        <s>删除</s>
        <del>这个也是删除</del>

        <u>下划线</u>

        <sub>下标</sub>
        <sup>上标</sup>

        <big>变大</big>
        <small>变小</small>
    </body>
</html>
```

1. `meta`标签是元数据

> **[info] For Info**
>
> 屏幕阅读器阅读摘要的做法是提取标题，因此要语义化文档，标题标签仅作标题使用，其余标签如要调整字号字重则使用样式实现。

`HTML5`新增了多个更加语义化的标签，有助于代码阅读及搜索引擎优化(`SEO`)。

```html
<!-- 主体 -->
<main>
    <!-- 头部 -->
    <header>
        <nav>导航</nav>
    </header>

    <!-- 文章 -->
    <article>
        <time datetime="2020-02-02">2020/02/02</time>
        <section>章节</section>
    </article>
    <footer>脚注</footer>
</main>
```

### 媒体

#### 图像

图像标签为单标签。

```html
<!-- 图表 -->
<figure>
    <img
        src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        alt="百度一下，你就知道"
    />
    <figcaption>图表名</figcaption>
</figure>
```

1. `src`属性指向图片链接
2. `alt`属性的文本用于屏幕阅读器，或在图片加载失败的情况下显示

> **[info] For Info**
>
> 无障碍设计要求`alt`属性必须有，如已有文字描述，则`alt`属性可置空。

#### 音频

```html
<audio controls>
    <source
        src="http://lhttp.qingting.fm/live/1739/64k.mp3"
        type="audio/mpeg"
    />
</audio>
```

1. `source`标签用于加载不同格式的资源
    1. `type`属性取值有：`video/ogg`、`video/mp4`、`video/webm`、`audio/ogg`、`audio/mpeg`
2. `controls`属性表示显示控件

#### 视频

```html
<video
    src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi10ultra/index_08.mp4"
    autoplay="autoplay"
    muted="muted"
    loop="loop"
></video>
```

1. `autoplay`属性为自动播放
2. `muted`属性为静音播放
3. `loop`属性为循环播放
4. `poster`属性为视频封面

### 超链接

```html
<a href="#" target="_blank ">死链</a>
```

1.  `href`属性指向跳转目标，可以指向文档内的标签`id`，也可以指向网址
2.  `target`属性表示跳转操作是在新标签页(`_blank`)还是自身跳转(`_self`)

> **[info] For Info**
>
> 超链接应带有文字描述供屏幕阅读器使用。

### 列表

```html
<ul>
    <li>无序列表</li>
</ul>

<ol>
    <li>有序列表</li>
</ol>

<!-- 自定义列表 -->
<dl>
    <dt>自定义名词</dt>
    <dd>自定义描述</dd>
</dl>
```

### 表单

```html
<form action="https://www.baidu.com/" method="post">
    <!-- 表单域边框 -->
    <fieldset>
        <legend>表单域标题</legend>

        <!-- 输入框 -->
        <input type="text" placeholder="姓名" required tabindex="0" />

        <!-- 标签 -->
        <label for="developer">开发者</label>
        <!-- 单选框 -->
        <input type="radio" id="developer" value="developer" name="identity" />
        <label for="user">用户</label>
        <input type="radio" id="user" value="user" name="identity" />

        <label for="eat">吃</label>
        <!-- 复选框 -->
        <input type="checkbox" id="eat" value="eat" name="hobby" checked />
        <label for="drink">喝</label>
        <input type="checkbox" id="drink" value="drink" name="hobby" />

        <!-- 下拉菜单 -->
        <select name="country" id="country">
            <option value="China">China</option>
            <option value="Foreign">Foreign</option>
        </select>

        <textarea name="textarea" id="textarea" cols="30" rows="10">
            文本框
        </textarea>

        <!-- 按钮 -->
        <button type="submit" accesskey="b">提交</button>
    </fieldset>
</form>
```

1.  `action`属性指向提交表单数据的服务器地址
2.  `method`属性表明请求方法
3.  输入框也是单标签。
    1.  `placeholder`属性是占位文本
    2.  `required`属性表明该项为必填项
4.  单选框和复选框会自动与周围标签相关联，所以通常和`label`标签同用

    1.  `for`属性指向所关联的选项`id`
    2.  `name`属性表明相关选项集合归属
    3.  `value`属性表示表单数据传递值
    4.  `checked`属性表示默认勾选项

5.  `accesskey`属性用于快捷键聚焦
6.  `tabindex`属性表示可被键盘按顺序聚焦

### 表格

```html
<table>
    <caption>
        表格标题
    </caption>

    <!-- 表头 -->
    <thead>
        <th>列一表头</th>
        <th>列二表头</th>
    </thead>

    <!-- 表身 -->
    <tbody>
        <!-- 表行 -->
        <tr>
            <td>列一</td>
            <td>列二</td>
        </tr>
        <tr>
            <td>列一</td>
            <td>列二</td>
        </tr>
    </tbody>
</table>
```

> **[info] For Info**
>
> `Lorem ipsum`：乱数假文，仅用于占位，由无实际含义的拉丁文构成，用于测试文章在不同字型或版型下的排版效果。

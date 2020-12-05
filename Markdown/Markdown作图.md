# Markdown 作图

## Mermaid

### 流程图

`graph`是声明流程图，`T`是上，`B`和`D`是下，`L`是左，`R`是右

````markdown
```mermaid
    graph TD

    subgraph 子图
        A[方形] --实线指向--> B(圆角)
        B --> C>多边形]
    end

    C ---|无指向实线| D{菱形}
    D --- A

    A -.虚线指向.-> C
    B -.-> F

    D ==粗线指向==> F
    A ==> F
```
````

### 时序图

````markdown
```mermaid
    sequenceDiagram
        Github ->> Local: fetch/clone
        Local -->> Github: push

        Note left of Github: 远程仓库
        Note right of Local: 本地仓库
        Note over Github, Local: Git

        participant A
        participant B

        A -> B: Hello, how are you?
        B --> A: I'm fine, thank you, and you?

        loop 隔三岔五
            A ->> Local: 处理好了没？
            alt 好了
                Local -->> A: 好了
            else
                Local -->> A: 没呢还
            end
        end
```
````

### 甘特图

````markdown
```mermaid
    gantt
    dateFormat  YYYY-MM-DD
            title 软件开发
            section 设计
                需求: done,   Need,      2020-01-01,      2020-01-03
                原型: active, Prototype, 2020-01-03,      3d
                UI设计:       Draft,     after Prototype, 5d
            section 开发
                理解需求: crit, done,   2020-01-01,      24h
                设计框架: crit, done,   after Prototype, 2d
                软件开发: crit, active, 3d
            section 测试
                功能测试: active, funcTest, after des3, 3d
                压力测试: after funcTest , 20h
                测试报告: 48h
```
````

### 类图

`<|--`是继承，`+`是公有，`-`是私有

````markdown
```mermaid
    classDiagram
          Animal |>-- Person

          Animal : +int age
          Animal: +run()

          class Person{
              +String name
              +say()
          }
```
````

### 饼图

````markdown
```mermaid
    pie
        title Vote 2020
        "Joe Biden": 51.1
        "Donald Trump": 47.2
        "Jo Jorgensen": 1.2
        "Others": 0.6
```
````

## 标准流程图

<pre>
```flow
    st=>start: 开始框
    op=>operation: 处理框
    cond=>condition: 判断框
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束框

    st(right)->op->cond
    cond(true)->io->e
    cond(false)->sub1(right)->op
```
</pre>

## 标准时序图

<pre>
```sequence
	Title: 标题

    Github ->> Local: fetch/clone
    Local -->> Github: push

    Note left of Github: 远程仓库
    Note right of Local: 本地仓库
    Note over Github, Local: Git

    participant A
    participant B

    A -> B: Hello, how are you?
    B --> A: I'm fine, thank you, and you?
```
</pre>

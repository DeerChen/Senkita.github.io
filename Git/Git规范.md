# Git 规范

## Commit Message

```term
$ git commit # 打开提交信息文档进行编辑
```

### 提交信息文档

```markdown
# type(scope): subject 简述

build(packages.json): build the framework

# body 详细描述

-   Add TypeScript support

# breaking changes

BREAKING CHANGE: Older versions are not support any more

# affect issue

resolves #110, #120, #119
```

### type

#### 主要类型

1. `feat`：增加新功能
2. `fix`：修复`bug`

#### 特殊类型

1. `docs`：文档改动
2. `style`：不改变代码含义的样式改动，如删除空格等
3. `build`：构造工具或外部依赖改动
4. `refactor`：代码重构
5. `revert`：撤销改动
6. `test`：测试相关改动
7. `perf`：性能方面改动
8. `ci`：持续集成相关改动
9. `chore`：无关紧要的改动

### scope

指出改动范围，如果范围跨模块，建议分拆提交，有利于追踪维护

### subject

以动词一般现在时第一人称开头，首字母小写，不加句号，50 字以内

### body

以动词一般现在时第一人称开头，说明动机以及变化

### Footer

只用在不兼容变动和`issue`处理上

#### breaking changes

变动描述，说明变动缘由

#### affect issue

1. `resolves`：解决`issue`中的问题
2. `closes`：关闭`issue`
3. `fixes`：修复`issue`中的`bug`

## 提交信息规范工具

### commitizen

```term
$ npm install -g commitizen cz-conventional-changelog # 安装
$ commitizen init cz-conventional-changelog --save --save-exact # 使项目支持Angular的Gommit Message规范
$ git cz # 替代git commit
```

#### ~/.czrc

```json
{
    "path": "cz-conventional-changelog"
}
```

### cz-conventional-changelog

```term
$ npm install -g cz-conventional-changelog # 安装
$ conventional-changelog -p angular -i CHANGELOG.md -w -r 0 # 生成Change Log，-p是指定规范，-i是指定文件名，-w是覆写，-r是生成全部
```

### commitlint 和 husky

`commitlint`提供格式校验，`husky`提供更易用的`git hook`

```term
$ npm i -D husky @commitlint/config-conventional @commitlint/cli # 安装
```

#### packages.json

```json
{
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -e $GIT_PARAMS"
        }
    }
}
```

#### commitlint.config.js

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
};
```

## README.md

```markdown
## Introduction

项目介绍

## Features

项目特性

## To Do

项目 To do

## Installation

项目安装步骤

## Usage

项目使用说明

## Maintainers

项目维护者

## License

项目许可

## References

项目引用
```

## ChangeLog.md

```markdown
# 更新日志

## [Unreleased]

## [1.0.0] - 2020-02-02

### Added

-   新增项 1
-   新增项 1

### Changed

-   改动项 1
-   改动项 2

### Fixed

-   修复项 1
-   修复项 2

### Removed

-   移除项 1
-   移除项 2
```

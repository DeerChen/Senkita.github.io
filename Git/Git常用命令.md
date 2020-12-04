# Git 常用命令

## 基本设置

```term
$ sudo apt install git # 安装
$ git init # 初始化
$ ssh -T git@github.com # 测试Github的ssh连接
$ git config --global user.name "name" # 设置信息，因为分布式版本控制，所以需要有用户名和邮箱做标识
$ git config --global user.email "email@example.com"
```

## 版本控制

![Workspaces](https://s3.ax1x.com/2020/11/27/DDkIk4.jpg)

### 上传下载

```term
$ git status # 查看文件状态
$ git log # 查看历史
$ git add . # 提交到暂存区
$ git commit -am "Add files" # 提交到版本库，-a是添加所有改动代码，-m是添加描述
$ git push -u origin main # 推送到远程仓库，-u是标识默认提交仓库和分支
$ git remote add origin git@github.com:demo/example.git # 关联项目地址
$ git remote set-url origin git@github.com:demo/example.git # 设置项目地址
$ git remote rm origin # 删除已关联项目地址
$ git clone https://github.com/demo/example.git # 克隆到本地
$ git pull https://github.com/demo/example.git # 从远程仓库拉取并合并
$ git fetch https://github.com/demo/example.git # 从远程仓库拉取
```

### 分支管理

```term
$ git branch # 查看分支
$ git branch develop # 创建分支
$ git checkout develop # 切换分支
$ git branch -d develop # 删除分支
$ git merge develop # 合并分支，保留commit历史
$ git rebase -i develop # 不保留commit历史，慎用
$ git diff main develop # 查看区别
```

### 撤销改动

```term
$ git stash # 将撤销代码暂存
$ git checkout develop # 释放暂存的代码到其他分支上去
$ git stash pop
$ git checkout develop # 嫁接改动到正确分支
$ git cherry-pick 0d934b3 --no-commit # --no-commit是不commit，只放暂存区，支持同时嫁接多个改动
$ git reflog # 恢复撤销
```

#### 未提交到暂存区

即未`add`，撤回到上一次`add`或`commit`时的状态

```term
$ git checkout -- README.md # 撤销单个文件
$ git checkout . # 撤销全部改动
```

#### 提交到了暂存区

即已经`add`，但未`commit`

```term
$ git rm --cached 文件名 # 放弃指定文件的暂存
$ git rm --cached -r . # 放弃全部文件的暂存
```

#### 提交到了版本库

即已经`commit`，但未`push`到远程

```term
$ git reset HEAD^ # 撤销错误提交的commit到工作区
$ git reset --mixed HEAD~1 # 退回一次提交改动到工作区
$ git reset --soft HEAD~1 # 退回一次提交改动到暂存区
$ git reset --hard HEAD^ # 直接硬核回退到上一个commit
```

#### 提交到了远程仓库

即已经`push`过了，只能用一次新 commit 去撤回一次提交

```term
$ git revert HEAD --no-edit # 直接硬核回退到上一个commit，--no-edit是直接使用默认Commit Messages
$ git revert HEAD --edit
$ git revert HEAD --no-commit # 撤销改动到暂存区
```

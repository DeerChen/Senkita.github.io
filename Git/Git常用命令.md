# Git 常用命令

## 基本设置

```bash
# 安装
sudo apt install git

# 初始化
git init

# 测试Github的ssh连接
ssh -T git@github.com

# 设置信息，因为分布式版本控制，所以需要有用户名和邮箱做标识
git config --global user.name "name"
git config --global user.email "email@example.com"
```

## 版本控制

![Workspaces](https://s3.ax1x.com/2020/11/27/DDkIk4.jpg)

### 上传下载

```bash
# 查看文件状态
git status
# 查看历史
git log

# 提交到暂存区
git add .
# 提交到版本库
git commit -am "Add files" # -a是添加所有改动代码，-m是添加描述
# 推送到远程仓库
git push -u origin main # -u是标识默认提交仓库和分支

# 关联项目地址
git remote add origin git@github.com:demo/example.git
# 设置项目地址
git remote set-url origin git@github.com:demo/example.git
# 删除已关联项目地址
git remote rm origin

# 克隆到本地
git clone https://github.com/demo/example.git
# 从远程仓库拉取并合并
git pull https://github.com/demo/example.git
# 从远程仓库拉取
git fetch https://github.com/demo/example.git
```

### 分支管理

```bash
# 查看分支
git branch
# 创建分支
git branch develop
# 切换分支
git checkout develop
# 删除分支
git branch -d develop

# 合并分支
git merge develop # 保留commit历史
git rebase -i develop # 不保留commit历史，慎用


# 查看区别
git diff main develop
```

### 撤销改动

```bash
# 将撤销代码暂存
git stash
# 释放暂存的代码到其他分支上去
git checkout develop
git stash pop

# 嫁接改动到正确分支
git checkout develop
git cherry-pick 0d934b3 --no-commit # --no-commit是不commit，只放暂存区，支持同时嫁接多个改动

# 恢复撤销
git reflog
```

#### 未提交到暂存区

即未`add`，撤回到上一次`add`或`commit`时的状态

```bash
# 撤销单个文件
git checkout -- README.md
# 撤销全部改动
git checkout .
```

#### 提交到了暂存区

即已经`add`，但未`commit`

```bash
# 放弃指定文件的暂存
git rm --cached 文件名
# 放弃全部文件的暂存
git rm --cached -r .
```

#### 提交到了版本库

即已经`commit`，但未`push`到远程

```bash
# 撤销错误提交的commit到工作区
git reset HEAD^
# 退回一次提交改动到工作区
git reset --mixed HEAD~1
# 退回一次提交改动到暂存区
git reset --soft HEAD~1
# 直接硬核回退到上一个commit
git reset --hard HEAD^
```

#### 提交到了远程仓库

即已经`push`过了，只能用一次新 commit 去撤回一次提交

```bash
# 直接硬核回退到上一个commit
git revert HEAD --no-edit # --no-edit是直接使用
git revert HEAD --edit
# 撤销改动到暂存区
git revert HEAD --no-commit
```

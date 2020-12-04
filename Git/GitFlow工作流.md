# GitFlow 工作流

多分支协同

![Git Flow](https://s3.ax1x.com/2020/11/27/DDd4te.png)

```term
$ brew install git-flow # 安装git-flow
$ sudo apt install git-flow
```

## 对比原生操作

### 初始化

```term
$ git flow init # 使用git-flow
$ git branch develop # 使用原生Git
$ git push -u origin develop
```

### feature 分支

用于添加功能特性

#### 使用 git-flow

```term
$ git flow feature start Feature-1 # 创建feature分支
$ git flow feature publish Feature-1 # 推送feature分支到远程
$ git flow feature pull origin Feature-1 # 拉取远程更新到feature分支
$ git flow feature finish Feature-1 # 完成feature分支，加入develop分支，并删除feature分支
```

#### 使用原生 git

```term
$ git checkout -b Feature-1 develop # 基于develop分支，创建并切换到feature分支
$ git push -u origin Feature-1 # 推送feature分支到远程
$ git pull origin develop # 拉取远程更新到develop分支
$ git checkout develop # 切换至develop分支
$ git merge --no-ff Feature-1 # 将feature分支合并入develop分支，--no-ff是保存分支记录
$ git push origin develop # 推送develop分支到远程
$ git branch -d Feature-1 # 删除feature的本地和远程分支
$ git push origin --delete Feature-1
```

### release 分支

用于版本发布，可将改动合并入`main`分支和`develop`分支

#### 使用 git-flow

```term
$ git flow release start Release-1 # 创建release分支
$ git flow release publish Release-1 # 推送release分支到远程
$ git flow finish Release-1 # 完成release分支，加入develop分支和main分支，并删除release分支
```

#### 使用原生 Git

```term
$ git checkout -b Release-1 develop # 基于develop分支，创建并切换到release分支
$ git checkout main # 切换到main分支
$ git merge --no-ff Release-1 # 将release分支合并到main分支，并推送到远程
$ git push origin main
$ git checkout develop # 切换到develop分支，将release分支合并到develop分支，并推送到远程
$ git merge --no-ff Release-1
$ git push origin develop
$ git branch -d Release-1 # 删除release的本地和远程分支
$ git push origin --delete Release-1
```

### hotfix 分支

`hotfix`分支基于`main`分支，`bugfix`分支基于`develop`分支

#### 使用 git-flow

```term
$ git flow hotfix start Hotfix-1
$ git flow hotfix finish Hotfix-1
```

#### 使用原生 Git

```term
$ git checkout -b Hotfix-1 main # 从main分支中创建hotfix分支
$ git checkout main # 完成hotfix分支
$ git merge --no-ff Hotfix-1
$ git push origin main
$ git checkout develop
$ git merge --no-ff Hotfix-1
$ git push origin develop
$ git branch -d Hotfix-1
$ git push origin --delete Hotfix-1
$ git tag -a V1.0 -m "New version" main # 打标签
$ git push --tags
```

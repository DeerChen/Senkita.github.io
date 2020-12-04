# Git 常用操作

## 配置文件

`sudo vi ~/.ssh/config`

```ini
# 别名
Host gitee
    # 域名
    Hostname gitee.com

    # HTTP代理
    # ProxyCommand connect -H localhost:10809 %h %p

    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_rsa

Host github
	Hostname github.com

	# SOCKS代理
    # ProxyCommand connect -S localhost:10808 %h %p

    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_ed25519
```

## 自建 Git 服务器

```term
$ git init --bare demo.git # 服务器初始化
$ chown -R root:root demo.git # 赋权
```

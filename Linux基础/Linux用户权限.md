# Linux 用户权限

`Linux`支持多用户同时登陆系统使用资源

## 配置文件

```term
$ tree /etc -L 1
/etc/
├── passwd：保存用户信息
├── shadow：保存密码
├── group：保存用户组
└── gshadow：保存用户组密码
```

### /etc/passwd

```ini
# 用户名:密码:UID(用户标识号):GID(缺省组标识号):描述信息:主目录:Shell
root:x:0:0:root:/root:/bin/bash
```

### /etc/shadow

```ini
# 用户名:加密密码:最后一次修改时间:改密最小时间间隔:密码有效最大天数:经过密码失效天数:密码过期宽限天数:失效天数:标志
# 加密密码为*表示没有密码，为!!无法登录
root:*:17757:0:99999:7:::
```

### /etc/group

```ini
# 组名:组密码:组标识号:组内成员
root:x:0:
```

### /etc/gshadow

```ini
# 组名:组密码:组管理员用户:组附加成员
root:*::
```

## 常用命令

```term
$ whoami # 查看当前用户
$ id demo # 查看指定用户的UID和GID
$ groups # 查看当前用户组
$ exit root # 退出用户
$ su root # 切换用户
$ useradd -u 500 -g sys -c "demo" demo # 添加用户，-u是指定UID，-g是指定用户组，-c是用户描述
$ useradd -G sys,root demo # -G是指定多个用户组
$ passwd demo # 修改密码
$ passwd -S demo # 查看密码状态，仅root可用
$ usermod -g sys # user modify修改用户，-g是指定组
$ userdel -r demo # user delete删除用户，删除用户时，如同名初始组为空，会一并删除同名初始组，-r是删除用户同时删除用户主目录
$ groupadd -g 1024 demo # 添加组
$ groupmod -n newGroup oldGroup # 修改组名
$ groupdel -g 1024 # 删除组
```

## 专题讨论

### Linux 中有哪几类用户？

1. 超级用户：`root`，`UID`=0

2. 普通用户：`UID`范围在 500-60000

3. 伪用户：`UID`范围在 1-499

### 什么是伪用户？

1. 伪用户与系统和程序服务相关，如系统默认有`bin`、`daemon`等，程序自建的有`apache`、`mysql`、`sshd`等
2. 伪用户通常不需要也无法登录系统
3. 可以没有主目录

### 用户和用户组

1. 用户登录即有初始组，附加组可以多个
2. 用户组内可以有多个用户，组内用户拥有组的权限

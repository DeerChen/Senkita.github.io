# Linux 常用软件

## VIM

文本编辑器，其它常用的还有`nano`、`gedit`等

```term
$ sudo apt install vim # 安装vim
$ x # 删除字符
$ d # 删除行
$ dd # 剪切
$ yy # 复制
$ p # 粘贴
$ i # 进入编辑模式
$ :wq! # w是保存，q是退出，!是强制
```

## SSH

远程连接

```term
$ ssh-keygen -t rsa -f id_rsa -C demo@example.com # 生成密钥，公钥放远端。公钥位置：Windows在%USERPROFILE%\.ssh\id_rsa.pub，Unix在~/.ssh/id_rsa.pub。-t是指定密钥类型，可以是rsa也可以是ed25519，-f是指定文件名，-C是识别密钥注释
$ scp -r dir/ root@192.168.1.1:/root/demo # 传输文件，-r是针对目录传输
```

## Screen

终端分屏

```term
$ sudo apt install screen # 安装screen
$ screen -ls # 列出所有终端
$ screen -wipe # 清理无效终端
$ screen -S demo # 新建终端
$ screen -r demo # 恢复终端
$ screen -X -S 123 quit # 退出终端
```

## 防火墙

```term
$ sudo apt install ufw # 安装防火墙
$ sudo systemctl enable ufw # 开机自启
$ sudo ufw default deny # 设置规则，默认拒绝
$ sudo ufw allow "Nginx Full" # 允许应用
$ sudo ufw allow 3306 # 允许端口
$ sudo ufw delete ssh # 删除规则
```

## Aria2

下载器

{%term%}
{%command%}
sudo apt install libgnutls28-dev nettle-dev libgmp-dev libssh2-1-dev libc-ares-dev libxml2-dev zlib1g-dev libsqlite3-dev pkg-config libcppunit-dev autoconf automake autotools-dev autopoint libtool git gcc g++ libxml2-dev make quilt # 安装依赖项

{%command%}
git clone https://github.com/aria2/aria2.git

{%command%}
cd aria2

{%command%}
sudo autoreconf -i # 编译安装，执行 autoconf、automake，生成 configure 文件
{%directory%}
aria2

{%command%}
sudo ./configure # 生成 Makefile、config.h，检测依赖库是否完全
{%directory%}
aria2

{%command%}
sudo make && sudo make install # 安装
{%directory%}
aria2
{%endterm%}

## Crontab

定时器

```term
$ service crond start # 启动服务
$ service crond stop # 停止服务
$ service crond restart # 重启服务
$ service crond reload # 重载配置
$ service crond status # 查看服务状态
$ crontab -e # 打开配置
```

```ini
# 格式是分(0-59) 小时(0-23) 天(1-31) 月(1-12) 周几(0-6)
* * * * * echo "Halo"
```

## ProxyChains

代理

```term
$ sudo apt install proxychains # 安装ProxyChains
$ sudo vi /etc/proxychains.conf
```

```ini
socks5 127.0.0.1 10808
```

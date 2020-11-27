# Linux常用软件

## VIM

文本编辑器，其它常用的还有`nano`、`gedit`等

```bash
# 安装vim
sudo apt install vim

x # 删除字符
d # 删除行
dd # 剪切
yy # 复制
p # 粘贴
i # 进入编辑模式
:wq! # w是保存，q是退出，!是强制
```

## SSH

远程连接

```bash
# 生成密钥
ssh-keygen -t rsa -C demo@example.com # -t是指定密钥类型，可以是rsa也可以是ed25519，-C是识别密钥注释

# 传输文件
scp -r dir/ root@192.168.1.1:/root/demo # -r是针对目录传输
```

## Screen

终端分屏

```bash
# 安装screen
sudo apt install screen

screen -ls # 列出所有终端
screen -wipe # 清理无效终端
screen -S demo # 新建终端
screen -r demo # 恢复终端
screen -X -S 123 quit # 退出终端
```

## 防火墙

```bash
# 安装防火墙
sudo apt install ufw

# 开机自启
sudo systemctl enable ufw

# 设置规则
sudo ufw default deny # 默认拒绝
sudo ufw allow "Nginx Full" # 允许应用
sudo ufw allow 3306 # 允许端口
sudo ufw delete ssh # 删除规则
```

## Aria2

下载器

```bash
# 安装依赖项
sudo apt install libgnutls28-dev nettle-dev libgmp-dev libssh2-1-dev libc-ares-dev libxml2-dev zlib1g-dev libsqlite3-dev pkg-config libcppunit-dev autoconf automake autotools-dev autopoint libtool git gcc g++ libxml2-dev make quilt

git clone https://github.com/aria2/aria2.git
cd aria2

# 编译安装
sudo autoreconf -i # 执行autoconf、automake，生成configure文件
sudo ./configure # 生成Makefile、config.h，检测依赖库是否完全
sudo make && sudo make install # 安装
```

## Crontab

定时器

```bash
service crond start # 启动服务
service crond stop # 停止服务
service crond restart # 重启服务
service crond reload # 重载配置
service crond status # 查看服务状态

# 打开配置
crontab -e
```

```ini
# 格式是分(0-59) 小时(0-23) 天(1-31) 月(1-12) 周几(0-6)
* * * * * echo "Halo"
```

## ProxyChains

代理

```bash
# 安装ProxyChains
sudo apt install proxychains

sudo vi /etc/proxychains.conf
```

```ini
socks5 127.0.0.1 10808
```


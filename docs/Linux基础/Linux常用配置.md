# Linux常用配置

## Sudo

```bash
sudo vi /etc/sudoers
```

```ini
# 授权用户 主机=(切换到:是否需要密码) 可用命令
# 括号内容可省略
root ALL=(ALL:NOPASSWD) ALL
```

## 改源

```bash
sudo vi /etc/apt/sources.list
```

### Debian

```ini
# 改为网易源
deb http://mirrors.163.com/debian/ buster main
deb http://mirrors.163.com/debian/ buster-updates main
deb http://mirrors.163.com/debian-security/ buster/updates main
```

### Ubuntu

```ini
# 163源
deb http://mirrors.163.com/ubuntu/ Groovy main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ Groovy-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ Groovy-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ Groovy-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ Groovy-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ Groovy main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ Groovy-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ Groovy-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ Groovy-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ Groovy-backports main restricted universe multiverse
# 阿里云源
deb http://mirrors.aliyun.com/ubuntu/ Groovy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ Groovy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ Groovy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ Groovy-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ Groovy-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ Groovy main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ Groovy-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ Groovy-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ Groovy-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ Groovy-backports main restricted universe multiverse
# 清华源
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-updates main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-backports main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-security main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-security main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-proposed main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ Groovy-proposed main restricted universe multiverse
```


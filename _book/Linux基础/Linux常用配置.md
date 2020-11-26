# Linux常用配置

## Sudo

```bash
sudo vi /etc/sudoers

root ALL=(ALL) ALL
```

## 改源

```bash
sudo vi /etc/apt/sources.list

# 改为网易源
deb http://mirrors.163.com/debian/ buster main
deb http://mirrors.163.com/debian/ buster-updates main
deb http://mirrors.163.com/debian-security/ buster/updates main
```


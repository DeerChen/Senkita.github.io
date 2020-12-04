# Shell 命令

## 帮助

```term
$ man ls # manual获取命令帮助信息
$ help ls
```

## 文件处理

```term
$ cd . # change directory切换目录，.是当前目录，..是父级目录，~是主目录
$ ls -l -a -h # list列出，-l是列表形式展示，-a是包含隐藏文件，-h是显示文件大小单位
$ pwd # print working directory输出当前目录
$ mkdir -p newDir # make directory新建文件夹，-p是如果父目录不存在，则一并生成
$ touch README.md # 新建文件
$ echo '' >> README.md # >是覆盖写入，>>是追加
$ cp -r -p dir1/ dir2/ # copy复制，-r是用于目录的递归复制，-p是保留原文件属性
$ mv oldFile newFile # move移动
$ rm -rf dir/ # remove删除，-r是用于目录的递归删除(recursive)，-f是强制删除(force)
$ ln -s file1 link1 # link创建快捷方式，-s是创建软链接
```

## 查看

```term
$ cat README.md # concatenate显示文件内容
$ more README.md # 分页显示文件内容，空格显示下一页，回车显示下一行，q退出
$ head -n 5 README.md # 显示头几行，-n是指定行数
$ tail -n 20 README.md # 显示后几行，-n是指定行数
```

## 查找

```term
$ find dir/ -name "demo" -size -204800  # -name是精确按名查找，-size是按文件大小查找，+是大于，-是小于，不写是等于，以block为单位，1K=2block
$ find dir/ -iname "demo?" -type f # -iname是不区分大小写按名查找，*是匹配所有，?是匹配一个，-type是按文件类型查找，f是二进制文件，l是软链接文件，d是目录，c是字符文件
$ grep -v demo -i -n -c file1 # -v是反选，-i是忽略大小写，-n是显示匹配行和行号，-c是输出匹配行次数
$ which ls # 显示命令所在目录
$ whereis ls # 显示命令及其配置文件和帮助文档的所在目录
```

## 磁盘操作

```term
$ df -h -m -a # 显示文件系统状态，-h是(human-readable)以易读方式显示，-m是以MB为单位，-a是显示所有分区
$ du -h -a -s /home # 只显示占有空间，-h是(human-readable)以易读方式显示，-a是显示所有分区，-s是(summarize)统计总占有量
$ free -g # 显示内存使用率，-g是以GB为单位
```

## 解压缩

```term
$ tar -zcvf dir1.tar.gz dir/ # -c是压缩成tar格式，-z是压缩成gzip格式(不支持压缩目录)，-v是显示过程，-f是指定压缩文件名(必须有且必须放最后)
$ tar -C /opt -xjf dir1.tar.bz2 # -C是解压到指定目录，-x是解压tar格式，-j是解压bzip2格式
$ zip -r dir1.zip dir1/ # -r是压缩目录
$ unzip file1.zip # 解压zip格式
```

## 系统

```term
$ date # 显示系统时间
$ shutdown -c -h 21:30 -r # 关机，-c是取消上一个关机命令，-h是指定时间，-r是重启
$ reboot # 重启
$ uname -r # 查看系统版本信息
```

## 网络

```term
$ ping baidu.com # 测试网络连通性，ping使用ICMP协议，不占用端口
$ ip addr # 查看网卡信息
$ ifconfig -a # interface configure，需要装net-tools，-a是查看所有网卡
$ netstat -antup # network statistics检测主机网络配置，-a是查看所有连接和监听端口，-n是以数字方式显示地址和端口号，-t是显示tcp协议相关，-u是显示udp协议相关，-p是显示socket的PID和进程名
```

## 进程管理

### 进程和线程

1. 进程是系统进行资源分配和调度的基本单位
2. 线程是程序执行的最小单元

|    /     |      进程      |          线程           |
| :------: | :------------: | :---------------------: |
|   定义   | 程序的执行过程 | 轻量级进程，由进程创建  |
| 地址空间 | 有独立地址空间 |     没独立地址空间      |
| 资源消耗 |                | `CPU`和内存耗费小于进程 |

```term
$ ./install.sh & # &是后台进程标识，但仅支持非交互式命令

$ ps aux # 查看进程信息，a是显示所有用户进程，u是显示用户名和启动时间，x是显示没有终端的进程
$ ps -le # -l是长格式显示，-e是显示所有进程
$ top -d 5 # 查看系统健康状态，-d是刷新秒数
$ kill -9 1024 # 关闭进程，-9是强制关闭
$ kill -1 1024 # -1是重启
$ killall -l # 关闭所有
$ w root # 查看用户信息
$ nohup ping baidu.com & # 挂起，即使用户退出登录依旧继续执行
$ uptime # 查看负载
```

## 文件权限

```bash
# 第1位是文件类型，d是目录，-是普通文件，l是链接文件
# 第2-4位是所属用户权限，第2-4位是所属用户组权限，第2-4位是其它用户权限
# r是(read)读，w是(write)写，x是(execute)执行
-rwxr--r-x
```

```term
$ chmod -R 777 README.md # change mode修改权限，-R是递归修改，r=4，w=2，x=1
$ chown -R root:root README.md # change file ownership修改所有者，-R是递归修改
$ chgrp root README.md # change file group ownership修改所属组
```

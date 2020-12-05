# Golang

## 链接

1. [Golang 标准库文档](https://studygolang.com/pkgdoc)

## 应用领域

1. 区块链(`Blockchain Technology`)：分布式账本技术，本质是互联网数据库，去中心化、公开透明
2. 后端服务器
3. 云

## DOS 命令

`DOS`是磁盘操作系统(`Disk Operating System`)

```term
$ dir # 查看当前目录
$ cd .. # 切换目录
$ md newDir # 新建目录make directory
$ rd newDir # 删除目录
$ copy demo.txt . # 复制
$ move demo.txt . # 移动
$ del demo.txt # 删除
$ clr # 清屏
$ exit # 退出
```

## 进制

### 进制转换

1. 十进制转二进制：不断除二，然后将余数倒置
2. 二进制转十进制：从低位往高位求$2^n$加和

### 原码、补码和反码

1. 二进制最高位为符号位，0 正 1 负
2. 正数和 0 的原码、补码和反码都一样
3. $$负数的反码=原码除符号位外其余取反$$
4. $$负数的补码=反码+1$$
5. 计算机运算以补码进行

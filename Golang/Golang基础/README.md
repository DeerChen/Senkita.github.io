# Golang 基础

## 链接

1. [Go 语言中文网下载页面](https://studygolang.com/dl)

## 安装

```term
$ wget https://golang.org/dl/go1.15.linux-amd64.tar.gz # 下载
$ tar -C /usr/local -xzf go1.15.linux-amd64.tar.gz # 解压
$ sudo nano /etc/profile # 系统环境设置
$ sudo source /etc/profile # 更新系统变量
```

### 系统变量配置

```ini
export GOROOT=/usr/local/go
export GOPATH=Golang项目存放路径
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
export PATH=$PATH:$GOPATH/bin
```

## 常用命令

```term
$ go build main.go -o main # 编译main包
$ go install main.go # 普通包安装在$GOPATH/pkg下，main包安装在$GOPATH/bin下
$ go clean # 移除缓存
$ gofmt -w package # 格式化项目文件夹中的全部源码
$ go get # 远程拉取
$ go test *_test.go # 测试
$ go help # 查看帮助
$ go version # 查看版本号
```

## 时间

```go
package main

import "time"

func main() {
	// 当前时间
	/*
	  年：now.Year() 月：now.Month() 日：now.Day()
	  时：now.Hour() 分：now.Minute() 秒：now.Second()
	  时间戳：now.Unix()或now.UnixNano()
	*/
	/*
	  纳秒：time.Nanosecond 微秒：time.Microsecond 毫秒：time.Millisecond
	  秒：time.Second 分：time.Minute 时：time.Hour
	*/
	now := time.Now()
	// 格式化时间，数字固定
	now.Format("2006-01-02 15:04:05")
}
```

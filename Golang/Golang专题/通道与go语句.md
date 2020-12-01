# 通道与 go 语句

## 什么是通道？

通道(`channel`)是`Go`语言中唯一一个可以满足并发安全性的特色数据类型。

```go
package main
import (
    "fmt"
)

var (
    // 定义双向通道，通道为引用类型，零值为nil
    ch chan int
    // 单向通道，箭头代表通道方向
    ch2 <-chan int // 只能发送
    ch3 chan<- int // 只能接收
)

func main(){
    // 第2参数为容量，通道容量为0，为非缓冲通道，大于0为缓冲通道
    ch = make(chan int, 4)
    // 通道是个先进先出(First In First Out)队列
    ch <- 1
    ele := <- ch
    fmt.Println(ele, ch2, ch3)

    close(ch)
    close(ch2)
    close(ch3)
}
```

## 通道的发送与接收

1. 对于同一通道，操作之间互斥。并发执行是因为代码块被分布在不同`goroutine`中
2. 进入通道的是变量副本，离开通道的是通道中的元素副本，并删除通道内元素
3. 操作不会被打断，保证元素完整性和通道唯一性。因而会出现阻塞
4. 关闭通道中如有元素还未取出，则接收还会返回元素值，但第二个结果值为`true`表示通道已关闭，因此应由发送方决定通道的关闭，而非接收方

## 单向通道有什么用？

用于约束代码，如编写模板、函数返回值列表之类。

## select 语句

```go
package main

import (
    "math/rand"
    "fmt"
)


func main(){
    intCh := [3]chan int{
        make(chan int, 1),
        make(chan int, 1),
    }
    index := rand.Intn(2)
    intCh[index] <- index

    // select语句只能与通道联用
    select{
        // 候选分支
        case <- intCh[0]:
            fmt.Println("1")
        // 默认分支
        default:
            fmt.Println("2")
    }
}
```

1. 当所有`case`表达式先求值结束，然后再开始选择候选分支，如果有多个候选分支满足条件，则伪随机选择
2. 默认分支有且只有一个，与编写位置无关

## 什么是 goroutine？

> `Don't communicate by sharing memory, share memory by communicating.`
> 不要通过共享内存来通信，而是要通过通信来共享内存。

`goroutine`是并发编程模型中的用户级线程，架设在系统级线程之上。
`Go`语言中有用于调度`goroutine`和对接系统级线程的调度器。`G`(`goroutine`)和`M`(`Machine`)因为`P`(`processor`)的存在可以实现多对多。
主`goroutine`的`go`函数即`main`函数，`go`函数会明显滞后于它所属的`go`语句，只要`go`语句本身执行完毕，程序不会等待`go`函数的执行，而是立即去执行接下去的语句，从而实现异步并发执行。

## 如何让主协程等待其他协程？

1. 简单粗暴地让主协程`time.Sleep(time.Millisecond * 500)`
2. 建一个长度与手动创建的协程数相等的通道`chan struct`，因为`struct`占用`0 bytes`，而且整个程序中永远是会存在一份
3. 使用`sync.WaitGroup`类型

## 如何是多协程按既定顺序执行？

```go
package main

import (
	"fmt"
	"sync/atomic"
	"time"
)

// 原子操作对被操作的数值类型有约束，所以才需要统一转换成uint32
var count = uint32(0)

func main() {
	for i := uint32(0); i < 10; i++ {
		go func(i uint32) {
			fn := func() {
				fmt.Println(i)
			}

			trigger(i, fn)
		}(i)
	}
	time.Sleep(time.Millisecond * 500)
}

func trigger(i uint32, fn func()) {
	// 不断去获取count变量的值
	for {
		// 判断count变量是否与参数相同
		if n := atomic.LoadUint32(&count); n == i {
			// 相同即调用fn函数
			fn()
			// 然后将count值加一
			atomic.AddUint32(&count, 1)
			break
		}
		time.Sleep(time.Nanosecond)
	}
}

```

# 关于 IO

## 编码规范

### ASCII 码

`American Standard Code for Information Interchange`，最初是美国国家标准学会(`ANSI`)制定的单字节字符编码方案，后被国际标准化组织(`ISO`)定位`ISO 646`标准，适用所有拉丁文字母。
使用单字节的二进制数来编码字符，标准`ASCII`码用一字节的最高比特位作为奇偶校验位，扩展`ASCII`码将此位也用作表示字符。

### Unicode 编码

采用十六进制表示法来表示`Unicode`代码点的整数值，并使用`U+`作为前缀。
目前提供三种不同的编码规范`UTF-8`、`UTF-16`和`UTF-32`。
`UTF`是`Universal Character Set Transformation Format`，`Unicode`转换格式，代表字符与字节序列之间的转换方式。
`UTF-8`会以 8`bit`作为一个编码单元，它与标准`ASCII`码兼容。
在`Go`语言底层，字符串类型的值就是用`UTF-8`编码值来表达的。

```go
package main

import (
    "fmt"
)

func main(){
    str := "Golang"
    fmt.Println([]rune(str))
    // 中文字符需要3个字节
    fmt.Println([]byte(str))
}
```

## strings.Builder

1. 已存在的内容不可变，但可拼接
2. 减少内存分配和内容拷贝次数
3. 可将内容重置，可重复用值

```go
package main

import (
	"fmt"
	"io"
	"strings"
)

var builder strings.Builder

func main() {
	str := "Halo World"
	// 构建字符串,底层有个[]byte,按需扩容
	builder.Write([]byte(str))
    // 读取字符串
	reader := strings.NewReader(str)

	offset := int64(2)
	// 阅读指针,维护了一个已读计数器
	index, _ := reader.Seek(offset, io.SeekCurrent)
	fmt.Println(index)

	buff := make([]byte, reader.Size())
	// 将剩余量存入数组
	reader.Read(buff)
	fmt.Println(buff)
}
```

## bytes.Buffer

`bytes`包用于处理字节序列和字节切片。`Buffer`的`Len`方法获取的是未读内容长度，有可能变小也可能变大。
$$Cap_{新容器}=2 \times Cap_{旧容器}+所需字节数$$

## io 包

### io.Reader 的扩展接口

1. `io.ReadWriter`：包含基本的字节序列读取和写入方法
2. `io.ReadCloser`：除基本字节序列读取方法外，还拥有一个基本关闭方法`Close`
3. `io.ReadWriteCloser`：`io.Reader`、`io.Writer`和`io.Closer`的扩展接口组合
4. `io.ReadSeeker`：拥有一个用于寻找读写位置的基本方法`Seek`
5. `io.ReadWriteSeeker`：`io.Reader`、`io.Writer`和`io.Seeker`的扩展接口组合

### io.Reader 的实现类型

1. `*io.LimitedReader`：包装`io.Reader`类型的值，但读取的总数据量受限
2. `*io.SectionReader`：包装`io.Reader`类型的值，限定`Read`方法只能够读取原始数据中的某一段
3. `*io.teeReader`：结果值的`Read`方法会把`io.Reader`上的数据经过字节切片写入到`io.Writer`中去
4. `*io.multiReader`：多对象读取器，接收多个`io.Reader`的值，返回一个`io.multiReader`的值。调用`Read`会从前面的对象中顺序读取数据
5. `*io.pipe`：实现了`io.Reader`和`io.Writer`，是`io`包的同步内存通道的核心实现
6. `*io.PipeReader`：`io.pipe`的代理类型，并实现了`io.ReadCloser`，同时定义了同步内存通道的读取端

## bufio 包

缓冲区是一个数据存储中介，介于底层读取器和读取方法及其调用方之间。底层读取器即初始化此类值时传入的`io.Reader`类型值。
`Reader`值会先从其所属的缓冲区中读取数据，同时还会预先从底层读取器中读出一部分数据暂存缓冲区。这样可以在大多数时候降低读取方法的执行时间。

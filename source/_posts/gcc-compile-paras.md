---
title: 常见的 GCC C++ 编译选项
cover: 'https://img.examcoo.com/ask/7386438/202205/165147777180700.png'
date: '2023/05/02 15:16:56'
categories:
  - 编程
tags:
  - 编程
  - C++
  - NOI Linux
keywords: '编程,C++,cpp.gcc,g++,编译,NOI Linux'
abbrlink: 43354
---

一个典型的 GCC C++编译过程为：

```
g++ hello.cpp -c -o hello.o -I /opt/include -isystem /usr/include 
g++ hello.o -o hello -L /opt/include -l folly -l boost_system 
```

这两步可以简化到一步：

```
g++ hello.cpp -o hello  -I /opt/include -isystem /usr/include -L /opt/include -l folly -l boost_system 
```

而对于OIer来说，NOI系列比赛的编译命令为

```
g++ hello.cpp -O2 --std=c++14
```

编译后的代码，如果没有指定输出文件，默认将会输出到 `a.out` 中

如果要运行编译后的代码，可以使用以下命令

```
./a.out
```

# 路径和链接库

涉及如下参数：

*   `-I`：`#include`包含头文件时，头文件的查找路径。将依次查找。
*   `-isystem`：`#include &lt;header&gt;`包含头文件时，头文件的查找路径（优先级在`-I`之后）。而且**将不显示这些头文件里出现的警告**（反正也无法修改）。
*   `-l`：编译时要链接的库（包括动态链接库`.so`和静态链接库`.a`），注意库的顺序，被依赖的放在后面。
*   `-L`：查询链接库的位置，编译器将依次查找。（的系统位置不用写）。
*   `-Wl,rpath`: 需要添加到程序`RUNPATH`的路径。

如果用到多线程，需要添加选项`-pthread`。

# 宏和优化级别

`-DMACRO`或者`-DMACRO=value`可以指定宏。其中最重要的一个是`-DNDEBUG`，用于取消生产版本里的`assert`指令（注意`-g`并不会取消`assert`指令）。

`-g`则用于生成 debug 信息，`-O0`、`-O1`、`-O2`、`-O3`则是不同的优化级别。

我们在编译时经常会碰到`make release`或者`make debug`，事实上它们分别是上面指令的组合：

*   make release: `-DNDEBUG -O2`。
*   make debug: `-g -O0`。

# 错误信息相关

gcc 可根据选项，显示具体的编译警告和错误：

*   `-Wall`：大部分常见的警告信息。
*   `-Wextra`：比`-Wall`更多的警告信息。
*   `-Werror`：将警告视作错误，会阻止编译进行，对大多数情况下过于严厉。
*   `-pedantic`： ANSI/ISO C 标准所列出的所有警告。
*   `-Wwarning-type`：提示具体的警告类型。
*   `-Wno-warning-type`：不提示具体的警告类型。

常用的一个组合为：`-Wall -Wextra -pedantic -Werror=return-type -Winvalid-pch  -Wno-unused-parameter`。

# 其它选项

*   `--std=c++14`：指定 C++版本。
*   `-o code.out`：指定输出文件。如果没有指定输出文件，默认将会输出到 `a.out` 中
*   `-MD`：会生成`.d`依赖文件，记录头文件的依赖关系，方便编译器根据修改情况来决定是否需要重新编译。通常会加上。
*   `-pipe`：中间文件直接放在内存，而不是显式的临时文件。通常会加上。
*   `-fPIC`: 生成动态链接库的目标文件时，必须添加该选项。生成静态库，但被其它动态库时用时，也需要添加该选项。
*   `-share`：表示生成的目标文件为动态链接库。
*   `-m64`：生成 64 位应用程序。
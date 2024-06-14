---
title: CodeForces CF1608A Find Array 题解
date: '2021/12/12 23:49:00'
categories:
  - C++题解
tags:
  - CodeForces
  - 题解
  - 编程
  - C++
cover: 'https://img.examcoo.com/ask/7386438/202112/163940894215270.png'
keywords: '题解,CF1608A,C++,CodeForces'
abbrlink: 36757
ai: 这篇文章介绍了CodeForces平台上的CF1608A Find Array题目的解法。给定一个整数n，任务是构造一个整数数组，满足特定条件，例如数组元素递增且后一个元素不能被前一个元素整除。作者认为这是一道简单题，并提供了一种解题思路，即将数组元素依次设置为2到n+1，确保满足题目的要求。随后，文章呈现了C++语言的完整代码实现，并附有提交记录的链接。
main_color: '#281b7e'
---

读题点[这里](https://www.luogu.com.cn/problem/CF1608A)

**这就是一道大水题啊！**

# 题目简述

给定一个整数 $n$，要求构造一个整数数组 $a_{1},a_{2},...,a_{n}$，使得以下条件成立：

- $1 \le a_{i} \le 10^9$
- $a_{1}<a_{2}<...<a_{n}$ 
- $a_{i}$ 不能够被 $a_{i-1}$ 整除

# 思路分析

这道题目其实非常简单。

我们不难发现，当 $a_{1}=2,a_{2}=3,a_{3}=3,...,a_{n}=n+1$ 的时候，满足上述条件，此时 $a_{i}$ 一定不能够被 $a_{i-1}$ 整除。

如果你发现了其它方法，那当然很好，但是一定要注意 $1 \le a_{i} \le 10^9$ 这一条件。

# 完整代码

```cpp
#include <bits/stdc++.h>
using namespace std;

int t,n;

int main(){
    cin>>t;
    while(t--){
        cin>>n;
        for(int i=1;i<=n;i++){
            cout<<i+1<<" ";
        }
        cout<<endl;
    }
    //system("pause");
    return 0;
}
```

[提交记录](https://www.luogu.com.cn/record/64927740)

<!-- **点个赞，关注一下再走吧！**
**QWQ** -->
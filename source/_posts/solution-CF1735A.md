---
title: CF1735A Working Week 题解
date: 2022/10/29 00:07:53
categories:
- C++题解
tags:
- CodeForces
- 题解
- 编程
- C++
# cover: https://img.examcoo.com/ask/7386438/202209/166282763048590.png
keywords: 题解,CF1735A,C++,CodeForces
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1735A)

# 题意简述

假设一周有 $n$ 天，第 $n$ 天的下一天是第 $1$ 天，有三天休息，其中第 $n$ 天一定休息。现需要安排剩下的两个休息日，要求：

- 不能使得休息日相邻，很明显第 $1$ 天不能作为休息日。

- 这两个休息日将 $n-1$ 天分成三段，记每段天数分别为 $l1,l2,l3$。

求最大的 $\min(\ |l1-l2|\ ,\ |l2-l3|\ ,\ |l1-l3|\ )$。

# 思路分析

只有使休息日之间的间隔相等，才能使 $\min(\ |l1-l2|\ ,\ |l2-l3|\ ,\ |l1-l3|\ )$ 最大。故最大值为 $(n-6) \div 3$ 。

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int T,n;

int main(){
    cin>>T;
	while(T--){
		cin>>n;
		cout<<(n-6)/3<<endl;
	}
	//system("pause");
	return 0;
}
```
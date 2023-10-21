---
title: CF1739A Immobile Knight 题解
date: '2022/10/28 22:56:06'
categories:
  - C++题解
tags:
  - CodeForces
  - 题解
  - 编程
  - C++
keywords: '题解,CF1739A,C++,CodeForces'
abbrlink: 24687
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1739A)

# 题意简述

给定一个 $n\times m$ 的国际象棋棋盘，求一个格子使得马在上面不能走到其它格子。不存在则输出任意一个格子。

# 思路分析

假设马现在在 $(x,y)$ ，那么下一步它可以跳到 $(x \pm 1,y \pm 2)$ 或 $(x \pm 2,y \pm 1)$。

我们可以得出以下结论：

1. 当 $n,m \le 2$ 时，任意格子都满足条件。

2. 当 $n=m=3$ 时，方格中间的数满足条件。

3. 当 $n,m>3$ 时，无解，输出任意一个坐标即可。

故输出方格中间的数一定满足条件

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int T,n,m;

int main(){
    cin>>T;
	while(T--){
		cin>>n>>m;
		cout<<(n+1)/2<<" "<<(m+1)/2<<endl;
	}
	//system("pause");
	return 0;
}
```
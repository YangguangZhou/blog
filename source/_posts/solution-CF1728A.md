---
title: CF1728A Colored Balls:Revisited 题解
date: 2022/09/10 23:45:49
categories:
- C++题解
tags:
- CodeForces
- 题解
- 编程
- C++
cover: https://img.examcoo.com/ask/7386438/202209/166282763048590.png
keywords: 题解,CF1728A,C++,CodeForces
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1728A)

# 题意简述

有 $n$ 种颜色的球，第 $i$ 种颜色的球有 $cnt_{i}$ 个（保证球的总数为奇数），每次可以拿走两个颜色不同的球，最后一定会剩下一种颜色的球。请输出剩下的颜色可能是什么（任意一种可能即可）。

# 思路分析

我们不难得到，最后被取走的一种颜色，这种颜色的球数量一定最多

因为保证球的数量为奇数个，所以一定会剩下一种颜色的球，故不需要再特判球被取完的情况

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int T,n;

int main(){
    cin>>T;
	while(T--){
		cin>>n;
		int a,maxx=-1,maxi=0;
		for(int i=1;i<=n;i++){
			cin>>a;
			if(a>maxx){
				maxx=a;
				maxi=i;
			}
		}
		cout<<maxi<<endl;
	}
    //system("pause");
    return 0;
}
```
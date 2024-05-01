---
title: 'CF1734B Bright, Nice, Brilliant 题解'
date: '2022/10/28 22:25:01'
categories:
  - C++题解
tags:
  - CodeForces
  - 题解
  - 编程
  - C++
keywords: '题解,CF1734B,C++,CodeForces'
abbrlink: 49538
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1734B)

# 题意简述

给定一个金字塔（第 $i$ 层有 $i$ 个房间），设第 $i$ 层的第 $j$ 个房间为 $a_{i,j}$ ，那么可以从 $a_{i,j}$ 到达 $a_{i+1,j}$ 和 $a_{i+1,j+1}$。每个房间可以选择放 $1$ 个灯泡或者不放，每个房间的亮度是所有能到达这个房间并且放了灯泡的房间的数量，要求第 $i$ 行的 $i$ 个房间亮度相同，请求出一种放灯泡的方案使放置的灯泡数量最多。

# 思路分析

我们只要在每一行两端的房间中放置灯泡，就可以使第 $i$ 行的 $i$ 个房间亮度相同。

例如，当 $i=5$ 时，灯泡的摆放为

```
1
1 1
1 0 1
1 0 0 1
1 0 0 0 1
```

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int T,n;

int main(){
	cin>>T;
	while(T--){
		cin>>n;
		cout<<1<<endl;
		for(int i=2;i<=n;i++){
			cout<<1<<" ";
			for(int j=2;j<=i-1;j++) cout<<0<<" ";
			cout<<1<<endl;
		}
	}
    //system("pause");
	return 0;
} 
```
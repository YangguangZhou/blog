---
title: 洛谷P9756 [COCI2022-2023#3] Estimathon 题解
date: '2023/10/17 21:49:01' 
categories: 
  - C++题解 
tags: 
  - 洛谷 
  - 题解 
  - 编程 
  - C++ 
keywords: '题解,P9756,C++,洛谷,Luogu' 
---
# 题意简述

有 $n$ 张桌子， $m$ 种颜色的椅子，每种颜色的椅子有 $a_i$ 把。每张桌子旁需要放置 $4$ 把**相同颜色**的椅子，且每种颜色的椅子都要用到。问能否找到满足条件的方案。

# 题目分析

利用 $cnt$ 变量记录所有椅子可以按要求摆放在几张桌子旁。对于每一个 $a_i$ ，$cnt=cnt+\lfloor \frac{a_i}{4} \rfloor$ 。如果 $cnt \geq n$ ，则方案存在。

其中，需要特判这几种方案不存在的情况：

1. 若 $n < m$ ，显然不能做到每一种颜色都放
2. 若 $a_i < 4$ ，则无法满足题目要求

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;
#define N 105

int n,m,a[N],cnt;

int main(){
	cin>>n>>m;
	if(n<m){
		cout<<"NE";
		return 0;
	}
	for(int i=1;i<=m;i++){
		cin>>a[i];
		if(a[i]<4){
			cout<<"NE";
			return 0;
		}
		cnt+=a[i]/4;
	}
	if(cnt>=n) cout<<"DA";
	else cout<<"NE";
	return 0;
}
```

---
title: '洛谷P9756 [COCI2022-2023#3] Estimathon 题解'
date: '2023/10/17 21:49:01'
categories:
  - C++题解
tags:
  - 洛谷
  - 题解
  - 编程
  - C++
keywords: '题解,P9756,C++,洛谷,Luogu'
cover: 'https://img.examcoo.com/ask/7386438/202312/170399492862340.png'
abbrlink: 42126
ai: 这篇文章介绍了洛谷平台上的一道编程题（P9756）的解题思路和代码实现。题目要求是在有n张桌子和m种颜色的椅子的情况下，判断是否能够每张桌子旁摆放4把相同颜色的椅子，并且每种颜色的椅子至少使用一次。文章首先简述了题目的要求，然后详细分析了如何通过计算能满足条件的桌子数目（cnt）来判断是否存在满足条件的摆放方案，包括了必须满足的特殊情况。最后，提供了C++语言实现的代码，该代码通过读入椅子数量和颜色种类信息，利用条件判断和循环计算出答案，并输出是否存在满足题目要求的摆放方案。
---
读题点[这里](https://www.luogu.com.cn/problem/P9756)

# 题意简述

有 $n$ 张桌子， $m$ 种颜色的椅子，每种颜色的椅子有 $a_i$ 把。每张桌子旁需要放置 $4$ 把**相同颜色**的椅子，且每种颜色的椅子都要用到。问能否找到满足条件的方案。

# 题目分析

利用 $cnt$ 变量记录所有椅子可以按要求摆放在几张桌子旁。对于每一个 $a_i$ ，$cnt=cnt+\lfloor \frac{a_i}{4} \rfloor$。如果 $cnt \geq n$ ，则方案存在。

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

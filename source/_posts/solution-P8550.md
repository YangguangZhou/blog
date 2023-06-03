---
title: P8550 冬之花 题解
date: '2022/10/03 00:27:03'
categories:
  - C++题解
tags:
  - CodeForces
  - 题解
  - 编程
  - C++
cover: 'https://img.examcoo.com/ask/7386438/202210/166472880218680.png'
keywords: '题解,P8550,C++,Luogu,洛谷'
abbrlink: 34684
---

读题点 [这里](https://www.luogu.com.cn/problem/P8550)

# 思路分析

我们可以发现，只有当 $a_{i}$ 只有一个， $x$ 能被 $a_{i}$ 整除且 $a_{i}$ 和 $x$ 异号时，才无法完成 $10^{100}$ 次操作。

那么，我们只要筛出无法完成操作的情况，剩下的便一定能够完成操作。

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int T,n,x,a[10];

int main(){
	cin>>T;
	while(T--){
		cin>>n>>x;
		for(int i=1;i<=n;i++){
			cin>>a[i];
		}
		sort(a+1,a+n+1);//去重前要对数组先排序
		int l=unique(a+1,a+n+1)-a-1;//去重并求出去重后数组的长度
		if(l==1&&x%a[1]==0&&x*a[1]<0) cout<<"No"<<endl;//判断是否仅有一个ai，x能被ai整除且x和ai异号
		else cout<<"Yes"<<endl;
	}
	return 0;
} 
```

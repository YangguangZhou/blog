---
title: CF1739B Array Recovery 题解
date: '2022/10/28 23:45:01'
categories:
  - C++题解
tags:
  - CodeForces
  - 题解
  - 编程
  - C++
keywords: '题解,CF1739B,C++,CodeForces'
abbrlink: 3380
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1739B)

# 题意简述

有一个非负整数序列 $a$，定义 $d_1=a_1,d_i=|a_i-a_{i-1}|$。现在给出序列 $d$，问是否能确定唯一的序列 $a$。不能输出 $−1$ ，否则输出序列 $a$。

# 思路分析

我们通过 $d_i=|a_i-a_{i-1}|$ 可以得到 $a_i=d_i+a_{i-1}$ 或 $a_i=a_{i-1}-d_i$。

当序列 $a$ 只有唯一的一种可能性时， $d_i+a_{i-1}$ 和 $a_{i-1}-d_i$ 其中只能有一个大于或等于 $0$ ，或是它们的值相等。

所以我们可以求出 $d_i$ 对应的两个 $a_i$ 的值，当不满足条件时输出 $−1$ ，否则将其中大于或等于 $0$ 的值存入数组即可。

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;
#define N 105

int T,n,d[N],a[N];

int main(){
    cin>>T;
	while(T--){
		cin>>n;
		for(int i=1;i<=n;i++){
			cin>>d[i];
		}
		a[1]=d[1];
		bool flag=0;
		for(int i=2;i<=n;i++){
			int a1=d[i]+a[i-1],a2=a[i-1]-d[i];
			if(a1>=0&&a2>=0&&a1!=a2){
				cout<<-1<<endl;
				flag=1;
				break;
			}else{
				if(a1>=0) a[i]=a1;
				else a[i]=a2;
			}
		}
		if(!flag){
			for(int i=1;i<=n;i++){
				cout<<a[i]<<" ";
			}
			cout<<endl;
		}
	}
	//system("pause");
	return 0;
}
```
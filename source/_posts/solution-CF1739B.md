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
cover: https://img.examcoo.com/ask/7386438/202312/170399453330930.png
ai: 这篇文章介绍了如何通过给定的序列 $d$ 来恢复非负整数序列 $a$ 的题目（题号CF1739B），包括题意简述、思路分析和C++实现代码。文章首先描述了题目的要求，即通过差分序列 $d$ 确定原序列 $a$ 是否存在以及是什么。接着，作者提出了解题的关键逻辑：通过 $d_i$ 的值逐步推导出 $a_i$ 的可能值，并检查这些值是否满足非负整数的条件，以决定是否输出序列 $a$ 或者 $-1$ 表示无解。最后提供了实现上述逻辑的C++代码示例。
main_color: '#67716c'
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
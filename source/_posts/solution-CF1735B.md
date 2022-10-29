---
title: CF1735B Tea with Tangerines 题解
date: 2022/10/29 00:30:58
categories:
- C++题解
tags:
- CodeForces
- 题解
- 编程
- C++
# cover: https://img.examcoo.com/ask/7386438/202209/166282763048590.png
keywords: 题解,CF1735B,C++,CodeForces
---

读题点 [这里](https://www.luogu.com.cn/problem/CF1735B)

# 题意简述

有 $n$ 块橘子皮，每块大小是 $a_i$。你可以做一次操作将一块橘子皮分成任意大小的两块，整个过程橘子皮总量是不变的。问要使任意两块橘子皮 $x,y\ (x\le y)$ 都满足 $2x<y$ 的最小操作数。

# 思路分析

为使操作数最小，我们可以将划分橘子皮的大小定为 $minn \times 2-1$ （ $minn$ 为所有橘子皮长度的最小值）。

特别地，若当前橘子皮的长度 $a_i$ $mod$ $(minn \times 2-1)=0$ ,则答案需要减去 $1$。

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;
#define N 105

int T,n,a[N];

int main(){
    cin>>T;
	while(T--){
		cin>>n;
		int minn=0x7fffffff,ans=0;
		for(int i=1;i<=n;i++){
			cin>>a[i];
			minn=min(a[i],minn);
		}
		for(int i=1;i<=n;i++){
			ans+=a[i]/(minn*2-1);
			if(a[i]%(minn*2-1)==0) ans--;
		}
		cout<<ans<<endl;
	}
	//system("pause");
	return 0;
}
```
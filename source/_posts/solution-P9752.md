---
title: 洛谷P9752 [CSP-S 2023] 密码锁 题解
date: '2023/10/21 23:33:33' 
categories: 
  - C++题解 
tags: 
  - 洛谷 
  - 题解 
  - 编程 
  - C++ 
keywords: '题解,P9752,C++,洛谷,Luogu,CSP,NOIP,CSP-S,CSP提高组,CSP-S 2023,CSP 2023' 
cover: https://img.examcoo.com/ask/7386438/202312/170399470348180.png
---

读题点[这里](https://www.luogu.com.cn/problem/P9752)

# 题意简述

小 Y 拥有一个五个拨圈的密码锁，每个拨圈上标有数字 $0$ 到 $9$。每个拨圈都可以从 $0$ 到 $9$ 循环。小 Y 采用一种锁车方式：从正确密码开始，随机转动密码锁一次，每次只能以某个幅度转动一个拨圈或者同时转动两个相邻的拨圈。现在小 Y 记下了 $n$ 个状态，这些状态都不是正确密码。要求找出有多少种可能的正确密码，使得每个正确密码都能按照小 Y 的锁车方式产生这 $n$ 个状态。

# 思路分析

给定 $n$ 个状态，我们要找到能产生这些状态的所有可能的正确密码数量。

首先，当 $n=1$ 时，任意一个密码都能满足条件。因为无论哪个密码，只要按照给定的锁车方式进行一次操作，都能得到这个状态。所以，当 $n=1$ 时，答案是 $81$。

接下来考虑 $n>1$ 的情况：

1. **枚举所有可能的正确密码**：对于每一个错误状态，我们分别枚举单个拨圈和相邻两个拨圈的所有可能的转动情况，并将其保存在 `pass` 中。

2. **判断当前密码能否通过所有的错误密码锁状态转动得到**：对于每一个可能的正确密码，我们检查是否能通过所有的错误密码锁状态转动得到。如果能够得到，就将计数器 `cnt` 增加。 `cnt` 就是最终的答案。

# 代码

```C++
#include<bits/stdc++.h>
using namespace std;

int n,cnt=0;
string tmp,locks[11];
set<string> pass[11];

int main(){
	//freopen("lock.in","r",stdin);
	//freopen("lock.out","w",stdout);
	cin>>n;
	if(n==1){
		cout<<81<<endl;
		return 0;
	}
	// 读入密码锁的状态
	for(int i=1;i<=n;i++){
		for(int j=1;j<=5;j++){
			int a;
			cin>>a;
			locks[i]+=(char)(a+'0');
		}
	} 
	// 枚举所有可能的正确密码
	for(int i=1;i<=n;i++){
		// 计算单个拨圈上可以转动到的数字
		for(int j=0;j<5;j++){
			for(int k=0;k<=9;k++){
				if(locks[i][j]-'0' !=k){
					// 将当前数字替换成可以转动到的数字
					tmp=locks[i].substr(0,j)+(char)(k+'0')+locks[i].substr(j+1);
					// 将当前状态加入到 set 中
					pass[i].insert(tmp);
				}
			}
		}
		// 计算两个相邻拨圈上可以转动到的数字
		for(int j=0;j<4;j++){
			for(int k=1;k<=9;k++){
				char k1=locks[i][j]+k,k2=locks[i][j+1]+k;
				if(locks[i][j]+k>'9') k1=locks[i][j]+k-10;
				if(locks[i][j+1]+k>'9') k2=locks[i][j+1]+k-10;
				// 将两个相邻拨圈上的数字替换成可以转动到的数字
				tmp=locks[i].substr(0,j)+k1+k2+locks[i].substr(j+2);
				// 将当前状态加入到 set 中
				pass[i].insert(tmp);
			}
		}
	}
	// 枚举所有可能的正确密码
	for(string i:pass[1]){
		bool flag=true;
		// 判断当前密码是否能够产生所有的密码锁状态
		for(int j=2;j<=n;j++){
			if(pass[j].find(i)==pass[j].end()){
				flag=false;
				break;
			}
		}
		if(flag) cnt++;
	}
	cout<<cnt<<endl;
	return 0;
}
```

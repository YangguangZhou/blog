---
title: 洛谷P7886 「MCOI-06」Gerrymandering 题解
date: 2021/10/02 21:49:00
categories:
- C++题解
tags:
- 洛谷
- 题解
- 编程
- C++
cover: https://img.examcoo.com/ask/7386438/202112/163887683575550.png
keywords: 题解,P7886,C++,洛谷,Luogu
---

# **这是本蒟蒻的第一篇题解**

------------

读题点这里：[P7886 「MCOI-06」Gerrymandering](https://www.luogu.com.cn/problem/P7886)

------------
### 题意

题目要求将一个 $n\times m$ 表格染色，使得每一个颜色形成恰好一个连通块，并且每一个连通块大小为 $k$

------------

### 特判

我们**共有4种特判情况**

1. 当 $n\times m<k$ 或 $n\times m\mod k\neq 0$ 时，没有答案，输出
	```NO```
	```cpp
	if(n*m<k||n*m%k!=0) cout<<"NO"<<endl;
	```


2. 当 $k=1$ 时，存在答案，且每一格的数字都不一样 (Subtask 1)
	```cpp
	cout<<"YES"<<endl;
	int cnt=1;
	for(int i=1;i<=m;i++){
		for(int j=1;j<=n;j++){
				cout<<cnt<<" ";
				cnt++;
		}
		cout<<endl;
	}
	```

3. 当 $n=1$ 时，存在答案，且答案只有一行。直接输出 $n\times m\div k$ 个数即可 (Subtask 2) (这一步骤与普通情况可以共用一个代码，故可以省略，但在这里为了便于理解，还是列出)
	```cpp
	cout<<"YES"<<endl;
	for(int i=1;i<=m/k;i++)
		for(int j=1;j<=k;j++) cout<<i<<" ";
	cout<<endl;
	```

4. 当 $n\times m=k$ 时，存在答案，且每一格都是1
	```cpp
	cout<<"YES"<<endl;
	for(int i=1;i<=m;i++){
		for(int j=1;j<=n;j++) cout<<1<<" ";
		cout<<endl;
	}
	```

------------
### 普通情况

先将所有的数字存入一个一维数组，再蛇形展开即可

如测试样例中的 `6 6 4` 就可以先存入一维数组，变成 `1 1 1 1 2 2 3 3 3 3 2 2 4 4 4 4 5 5 6 6 6 6 5 5 7 7 7 7 8 8 9 9 9 9 8 8`

再蛇形展开为
```
1 1 1 1 2 2 
3 3 3 3 2 2 
4 4 4 4 5 5 
6 6 6 6 5 5 
7 7 7 7 8 8 
9 9 9 9 8 8 
```

普通情况的代码如下：
```cpp
cout<<"YES"<<endl;
for(int i=1;i<=n*m;i++) a[i]=(i-1)/k+1;
for(int i=1;i<=n;i++){
    if(i%2==1) for(int j=1;j<=m;j++) cout<<a[(i-1)*m+j]<<' ';
    else for(int j=m;j;j--) cout<<a[(i-1)*m+j]<<' ';
	cout<<endl;
}
```

------------

# **完整代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define N 1000005

int T,n,m,k,a[N];
bool u[N]={0};

int main(){
	cin>>T;
	while(T--){
		cin>>n>>m>>k;
		if(n*m<k||n*m%k!=0) cout<<"NO"<<endl;//不成立的情况
		else if(n*m==k){//特判n*m=k
			cout<<"YES"<<endl;
			for(int i=1;i<=m;i++){
				for(int j=1;j<=n;j++) cout<<1<<" ";
				cout<<endl;
			}
		}else if(k==1){//特判k=1
			cout<<"YES"<<endl;
			int cnt=1;
			for(int i=1;i<=m;i++){
				for(int j=1;j<=n;j++){
					cout<<cnt<<" ";
					cnt++;
				}
				cout<<endl;
			}
		}else{//普通情况
			cout<<"YES"<<endl;
            //生成一维数组
			for(int i=1;i<=n*m;i++) a[i]=(i-1)/k+1;
            //蛇形输出
            for(int i=1;i<=n;i++){
                if(i%2==1)
                    for(int j=1;j<=m;j++) cout<<a[(i-1)*m+j]<<' ';
                else for(int j=m;j;j--) cout<<a[(i-1)*m+j]<<' ';
                cout<<endl;
            }
		}
	}
	system("pause");
	return 0;
}
```

<!-- ------------

**这是本蒟蒻的第一篇题解，点个赞，关注一下再走吧！** -->
---
title: C++学习
date: '2023/09/16 00:01:01'
hidden: true
abbrlink: 8279
---

# 初赛/基础知识

1. `<<1` $=$ $\times2$ 二进制下左移一位
   
   `>>1` $=$ $\div2$ 二进制下右移一位

2. 异或运算：对于两个二进制操作数的每一位，如果相应的位不同，则结果为1；如果相应的位相同，则结果为0。异或运算是一种位运算，代码中用符号 `^` 表示，书写中用 `XOR` 或 $\oplus$。
   
   $eg. 5=101,7=111,5\oplus7=101\oplus111=010=2$

# 复赛/算法

## 树状数组

**区间查询，单点修改**

**修加查减**(`lowbit(i)`的正负号)

查询$x~y$区间的和：`query(y)-query(x-1)`

```C++
int lowbit(int x){
	return x&-x;
}

void add(int x,int a){
	for(int i=x;i<=n;i+=lowbit(i)){
		c[i]+=a;
	}
}

int query(int x){
	ll sum=0;
	for(int i=x;i>=1;i-=lowbit(i)){
		sum+=c[i];
	}
	return sum;
}
```

## 线段树

## 最短路

```C++
//dijkstra算法
int n,m,s,cnt,ans;
int head[N],dis[N];
bool vis[N];

struct Edge{
    int nxt,to,w;
}e[N<<1];//双向边N要×2

struct heap{
	int id,dis;
	bool operator<(const heap &rhs)const{
		return rhs.dis<dis;
	}
};

void addEdge(int u,int v,int w){
    e[++cnt]=(Edge){head[u],v,w};
    head[u]=cnt;
}

void dijkstra(int s){
	priority_queue<heap> q;
	memset(dis,0x3f,sizeof(dis));
	dis[s]=0;
	q.push((heap){s,dis[s]});
	while(!q.empty()){
		heap x=q.top();q.pop();
		int u=x.id;
		//优化
		if(dis[u]!=x.dis) continue;
		for(int i=head[u];i;i=e[i].nxt){
			int v=e[i].to,w=e[i].w;
			if(dis[v]>dis[u]+w){
				dis[v]=dis[u]+w;
				q.push((heap){v,dis[v]});
			}
		}
	}
}
```


![OI](https://i.loli.net/2018/10/22/5bcd9299869eb.png)
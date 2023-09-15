---
title: LaTeX 常用写法
date: '2023/09/16 00:14:01'
hidden: true
---

[原图链接](https://www.cnblogs.com/zahng/p/15383208.html)

$$
\def\F{\verb|\|}
\Huge{\LaTeX \text{ Mathematical Symbols}}\\
\normalsize\text{The more unusual symbols are not defined in base \LaTeX (NFSS) and require }\texttt{\F usepackage\{amssymb\}}\\
\begin{array}{c}
\large 1\quad\textbf{Greek and Hebrew letters}\\
\begin{array}{llllllllllll}
\alpha&\texttt{\F alpha}&\kappa&\texttt{\F kappa}&\psi&\texttt{\F psi}&\digamma&\texttt{\F digamma}&\Delta&\texttt{\F Delta}&\Theta&\texttt{\F Theta}\\\beta&\texttt{\F beta}&\lambda&\texttt{\F lambda}&\rho&\texttt{\F rho}&\varepsilon&\texttt{\F varepsilon}&\Gamma&\texttt{\F Gamma}&\Upsilon&\texttt{\F Upsilon}\\\chi&\texttt{\F chi}&\mu&\texttt{\F mu}&\sigma&\texttt{\F sigma}&\varkappa&\texttt{\F varkappa}&\Lambda&\texttt{\F Lambda}&\Xi&\texttt{\F Xi}\\\delta&\texttt{\F delta}&\nu&\texttt{\F nu}&\tau&\texttt{\F tau}&\varphi&\texttt{\F varphi}&\Omega&\texttt{\F Omega}&\\\epsilon&\texttt{\F epsilon}&o&\texttt{o}&\theta&\texttt{\F theta}&\varpi&\texttt{\F varpi}&\Phi&\texttt{\F Phi}&\aleph&\texttt{\F aleph}\\\eta&\texttt{\F eta}&\omega&\texttt{\F omega}&\upsilon&\texttt{\F upsilon}&\varrho&\texttt{\F varrho}&\Pi&\texttt{\F Pi}&\beth&\texttt{\F beth}\\\gamma&\texttt{\F gamma}&\phi&\texttt{\F phi}&\xi&\texttt{\F xi}&\varsigma&\texttt{\F varsigma}&\Psi&\texttt{\F Psi}&\daleth&\texttt{\F daleth}\\\iota&\texttt{\F iota}&\pi&\texttt{\F pi}&\zeta&\texttt{\F zeta}&\vartheta&\texttt{\F vartheta}&\Sigma&\texttt{\F Sigma}&\gimel&\texttt{\F gimel}\\
\end{array}\\\\
\large 2\quad\textbf{\LaTeX\ math constructs}\\
\begin{array}{llllll}
\frac{abc}{xyz}&\texttt{\F frac}\text{\{abc\}\{xyz\}}&\overline{abc}&\texttt{\F overline}\text{\{abc\}}&\overrightarrow{abc}&\texttt{\F overrightarrow}\text{\{abc\}}&\\f'&\texttt{f'}&\underline{abc}&\texttt{\F underline}\text{\{abc\}}&\overleftarrow{abc}&\texttt{\F overleftarrow}\text{\{abc\}}&\\\sqrt{abc}&\texttt{\F sqrt}\text{\{abc\}}&\widehat{abc}&\texttt{\F widehat}\text{\{abc\}}&\overbrace{abc}&\texttt{\F overbrace}\text{\{abc\}}&\\
\sqrt[n]{abc}&\texttt{\F sqrt[n]}\text{\{abc\}}&\widetilde{abc}&\texttt{\F widetilde}\text{\{abc\}}&\underbrace{abc}&\texttt{\F underbrace}\text{\{abc\}}&\\
\end{array}\\\\
\large 3\quad\textbf{Delimiters}\\
\begin{array}{llllllllllll}
|&|&\{&\texttt{\F \{}&\lfloor&\texttt{\F lfloor}&/&\texttt{/}&\Uparrow&\texttt{\F Uparrow}&\llcorner&\texttt{\F llcorner}\\|&\texttt{\F vert}&\}&\texttt{\F \}}&\rfloor&\texttt{\F rfloor}&\backslash&\texttt{\F backslash}&\uparrow&\texttt{\F uparrow}&\lrcorner&\texttt{\F lrcorner}\\||&\texttt{\F |}&\langle&\texttt{\F langle}&\lceil&\texttt{\F lceil}&[&\texttt{[}&\Downarrow&\texttt{\F Downarrow}&\ulcorner&\texttt{\F ulcorner}\\||&\texttt{\F Vert}&\rangle&\texttt{\F rangle}&\rceil&\texttt{\F rceil}&]&\texttt{]}&\downarrow&\texttt{\F downarrow}&\urcorner&\texttt{\F urcorner}\\
\end{array}\\
\text{Use the pair }\texttt{\F left}_ {s_1}\text{ and }\texttt{\F right}_ {s_2}\text{ to match height of delimiters }s_1\text{ and }s_2\text{ to the height of their contents, e.g.,}\\
\begin{array}{ccc}
\texttt{\F left|}\quad expr\quad \texttt{\F right|}&\texttt{\F left\F\{}\quad expr\quad\texttt{\F right\F\}}& \texttt{\F left\F Vert}\quad expr\quad \texttt{\F right\F Vert.}
\end{array}\\\\
\large 4\quad\textbf{Variable-sized symbols(displayed formulae show larger version)}\\
\begin{array}{llllllllll}
\sum&\texttt{\F sum}&\int&\texttt{\F int}&\biguplus&\texttt{\F biguplus}&\bigoplus&\texttt{\F bigoplus}&\bigvee&\texttt{\F bigvee}\\\prod&\texttt{\F prod}&\oint&\texttt{\F oint}&\bigcap&\texttt{\F bigcap}&\bigotimes&\texttt{\F bigotimes}&\bigwedge&\texttt{\F bigwedge}\\\coprod&\texttt{\F coprod}&\iint&\texttt{\F iint}&\bigcup&\texttt{\F bigcup}&\bigodot&\texttt{\F bigodot}&\bigsqcup&\texttt{\F bigsqcup}\\
\end{array}\\\\
\large 5\quad\textbf{Standard Function Names}\\
\text{Function names should appear in Roman, not Italic, e.g.,}
\begin{array}{l}
\text{Correct:\qquad}\texttt{\F tan(at-n\F pi)}\longrightarrow\tan(at-n\pi)\\
\text{Incorrect:\qquad}\texttt{tan(at-n\F pi)}\longrightarrow tan(at-n\pi)
\end{array}\\
\begin{array}{llllllll}
\arccos&\texttt{\F arccos}&\arcsin&\texttt{\F arcsin}&\arctan&\texttt{\F arctan}&\arg&\texttt{\F arg}\\
\cos&\texttt{\F cos}&\cosh&\texttt{\F cosh}&\cot&\texttt{\F cot}&\coth&\texttt{\F coth}\\
\csc&\texttt{\F csc}&\deg&\texttt{\F deg}&\det&\texttt{\F det}&\dim&\texttt{\F dim}\\
\exp&\texttt{\F exp}&\gcd&\texttt{\F gcd}&\hom&\texttt{\F hom}&\inf&\texttt{\F inf}\\
\ker&\texttt{\F ker}&\lg&\texttt{\F lg}&\lim&\texttt{\F lim}&\liminf&\texttt{\F liminf}\\
\limsup&\texttt{\F limsup}&\ln&\texttt{\F ln}&\log&\texttt{\F log}&\max&\texttt{\F max}\\
\min&\texttt{\F min}&\Pr&\texttt{\F Pr}&\sec&\texttt{\F sec}&\sin&\texttt{\F sin}\\
\sinh&\texttt{\F sinh}&\sup&\texttt{\F sup}&\tan&\texttt{\F tan}&\tanh&\texttt{\F tanh}\\
\end{array}\\\\
\large 6\quad\textbf{Binary Operation/Relation Symbols}\\
\begin{array}{llllllll}
\ast&\texttt{\F ast}&\pm&\texttt{\F pm}&\cap&\texttt{\F cap}&\lhd&\texttt{\F lhd}\\
\star&\texttt{\F star}&\mp&\texttt{\F mp}&\cup&\texttt{\F cup}&\rhd&\texttt{\F rhd}\\
\cdot&\texttt{\F cdot}&\amalg&\texttt{\F amalg}&\uplus&\texttt{\F uplus}&\triangleleft&\texttt{\F triangleleft}\\
\circ&\texttt{\F circ}&\odot&\texttt{\F odot}&\sqcap&\texttt{\F sqcap}&\triangleright&\texttt{\F triangleright}\\
\bullet&\texttt{\F bullet}&\ominus&\texttt{\F ominus}&\sqcup&\texttt{\F sqcup}&\unlhd&\texttt{\F unlhd}\\
\bigcirc&\texttt{\F bigcirc}&\oplus&\texttt{\F oplus}&\wedge&\texttt{\F wedge}&\unrhd&\texttt{\F unrhd}\\
\diamond&\texttt{\F diamond}&\oslash&\texttt{\F oslash}&\vee&\texttt{\F vee}&\bigtriangledown&\texttt{\F bigtriangledown}\\
\times&\texttt{\F times}&\otimes&\texttt{\F otimes}&\dagger&\texttt{\F dagger}&\bigtriangleup&\texttt{\F bigtriangleup}\\
\div&\texttt{\F div}&\wr&\texttt{\F wr}&\ddagger&\texttt{\F ddagger}&\setminus&\texttt{\F setminus}\\
\centerdot&\texttt{\F centerdot}&\Box&\texttt{\F Box}&\barwedge&\texttt{\F barwedge}&\veebar&\texttt{\F veebar}\\
\circledast&\texttt{\F circledast}&\boxplus&\texttt{\F boxplus}&\curlywedge&\texttt{\F curlywedge}&\curlyvee&\texttt{\F curlyvee}\\
\circledcirc&\texttt{\F circledcirc}&\boxminus&\texttt{\F boxminus}&\Cap&\texttt{\F Cap}&\Cup&\texttt{\F Cup}\\
\circleddash&\texttt{\F circleddash}&\boxtimes&\texttt{\F boxtimes}&\bot&\texttt{\F bot}&\top&\texttt{\F top}\\
\dotplus&\texttt{\F dotplus}&\boxdot&\texttt{\F boxdot}&\intercal&\texttt{\F intercal}&\rightthreetimes&\texttt{\F rightthreetimes}\\
\divideontimes&\texttt{\F divideontimes}&\square&\texttt{\F square}&\doublebarwedge&\texttt{\F doublebarwedge}&\leftthreetimes&\texttt{\F leftthreetimes}\\\\
\equiv&\texttt{\F equiv}&\leq&\texttt{\F leq}&\geq&\texttt{\F geq}&\perp&\texttt{\F perp}\\
\cong&\texttt{\F cong}&\prec&\texttt{\F prec}&\succ&\texttt{\F succ}&\mid&\texttt{\F mid}\\
\neq&\texttt{\F neq}&\preceq&\texttt{\F preceq}&\succeq&\texttt{\F succeq}&\parallel&\texttt{\F parallel}\\
\sim&\texttt{\F sim}&\ll&\texttt{\F ll}&\gg&\texttt{\F gg}&\bowtie&\texttt{\F bowtie}\\
\simeq&\texttt{\F simeq}&\subset&\texttt{\F subset}&\supset&\texttt{\F supset}&\Join&\texttt{\F Join}\\
\approx&\texttt{\F approx}&\subseteq&\texttt{\F subseteq}&\supseteq&\texttt{\F supseteq}&\ltimes&\texttt{\F ltimes}\\
\asymp&\texttt{\F asymp}&\sqsubset&\texttt{\F sqsubset}&\sqsupset&\texttt{\F sqsupset}&\rtimes&\texttt{\F rtimes}\\
\doteq&\texttt{\F doteq}&\sqsubseteq&\texttt{\F sqsubseteq}&\sqsupseteq&\texttt{\F sqsupseteq}&\smile&\texttt{\F smile}\\
\propto&\texttt{\F propto}&\dashv&\texttt{\F dashv}&\vdash&\texttt{\F vdash}&\frown&\texttt{\F frown}\\
\models&\texttt{\F models}&\in&\texttt{\F in}&\ni&\texttt{\F ni}&\notin&\texttt{\F notin}\\\\
\approxeq&\texttt{\F approxeq}&\leqq&\texttt{\F leqq}&\geqq&\texttt{\F geqq}&\lessgtr&\texttt{\F lessgtr}\\
\thicksim&\texttt{\F thicksim}&\leqslant&\texttt{\F leqslant}&\geqslant&\texttt{\F geqslant}&\lesseqgtr&\texttt{\F lesseqgtr}\\
\backsim&\texttt{\F backsim}&\lessapprox&\texttt{\F lessapprox}&\gtrapprox&\texttt{\F gtrapprox}&\lesseqqgtr&\texttt{\F lesseqqgtr}\\
\backsimeq&\texttt{\F backsimeq}&\lll&\texttt{\F lll}&\ggg&\texttt{\F ggg}&\gtreqqless&\texttt{\F gtreqqless}\\
\triangleq&\texttt{\F triangleq}&\lessdot&\texttt{\F lessdot}&\gtrdot&\texttt{\F gtrdot}&\gtreqless&\texttt{\F gtreqless}\\
\circeq&\texttt{\F circeq}&\lesssim&\texttt{\F lesssim}&\gtrsim&\texttt{\F gtrsim}&\gtrless&\texttt{\F gtrless}\\
\bumpeq&\texttt{\F bumpeq}&\eqslantless&\texttt{\F eqslantless}&\eqslantgtr&\texttt{\F eqslantgtr}&\backepsilon&\texttt{\F backepsilon}\\
\Bumpeq&\texttt{\F Bumpeq}&\precsim&\texttt{\F precsim}&\succsim&\texttt{\F succsim}&\between&\texttt{\F between}\\
\doteqdot&\texttt{\F doteqdot}&\precapprox&\texttt{\F precapprox}&\succapprox&\texttt{\F succapprox}&\pitchfork&\texttt{\F pitchfork}\\
\thickapprox&\texttt{\F thickapprox}&\Subset&\texttt{\F Subset}&\Supset&\texttt{\F Supset}&\shortmid&\texttt{\F shortmid}\\
\fallingdotseq&\texttt{\F fallingdotseq}&\subseteqq&\texttt{\F subseteqq}&\supseteqq&\texttt{\F supseteqq}&\smallfrown&\texttt{\F smallfrown}\\
\risingdotseq&\texttt{\F risingdotseq}&\sqsubset&\texttt{\F sqsubset}&\sqsupset&\texttt{\F sqsupset}&\smallsmile&\texttt{\F smallsmile}\\
\varpropto&\texttt{\F varpropto}&\preccurlyeq&\texttt{\F preccurlyeq}&\succcurlyeq&\texttt{\F succcurlyeq}&\Vdash&\texttt{\F Vdash}\\
\therefore&\texttt{\F therefore}&\curlyeqprec&\texttt{\F curlyeqprec}&\curlyeqsucc&\texttt{\F curlyeqsucc}&\vDash&\texttt{\F vDash}\\
\because&\texttt{\F because}&\blacktriangleleft&\texttt{\F blacktriangleleft}&\blacktriangleright&\texttt{\F blacktriangleright}&\Vvdash&\texttt{\F Vvdash}\\
\eqcirc&\texttt{\F eqcirc}&\trianglelefteq&\texttt{\F trianglelefteq}&\trianglerighteq&\texttt{\F trianglerighteq}&\shortparallel&\texttt{\F shortparallel}\\
\neq&\texttt{\F neq}&\vartriangleleft&\texttt{\F vartriangleleft}&\vartriangleright&\texttt{\F vartriangleright}&\nshortparallel&\texttt{\F nshortparallel}\\\\
\ncong&\texttt{\F ncong}&\nleq&\texttt{\F nleq}&\ngeq&\texttt{\F ngeq}&\nsubseteq&\texttt{\F nsubseteq}\\
\nmid&\texttt{\F nmid}&\nleqq&\texttt{\F nleqq}&\ngeqq&\texttt{\F ngeqq}&\nsupseteq&\texttt{\F nsupseteq}\\
\nparallel&\texttt{\F nparallel}&\nleqslant&\texttt{\F nleqslant}&\ngeqslant&\texttt{\F ngeqslant}&\nsubseteqq&\texttt{\F nsubseteqq}\\
\nshortmid&\texttt{\F nshortmid}&\nless&\texttt{\F nless}&\ngtr&\texttt{\F ngtr}&\nsupseteqq&\texttt{\F nsupseteqq}\\
\nshortparallel&\texttt{\F nshortparallel}&\nprec&\texttt{\F nprec}&\nsucc&\texttt{\F nsucc}&\subsetneq&\texttt{\F subsetneq}\\
\nsim&\texttt{\F nsim}&\npreceq&\texttt{\F npreceq}&\nsucceq&\texttt{\F nsucceq}&\supsetneq&\texttt{\F supsetneq}\\
\nVDash&\texttt{\F nVDash}&\precnapprox&\texttt{\F precnapprox}&\succnapprox&\texttt{\F succnapprox}&\subsetneqq&\texttt{\F subsetneqq}\\
\nvDash&\texttt{\F nvDash}&\precnsim&\texttt{\F precnsim}&\succnsim&\texttt{\F succnsim}&\supseteqq&\texttt{\F supseteqq}\\
\nvdash&\texttt{\F nvdash}&\lnapprox&\texttt{\F lnapprox}&\gnapprox&\texttt{\F gnapprox}&\varsubsetneq&\texttt{\F varsubsetneq}\\
\ntriangleleft&\texttt{\F ntriangleleft}&\lneq&\texttt{\F lneq}&\gneq&\texttt{\F gneq}&\varsupsetneq&\texttt{\F varsupsetneq}\\
\ntrianglelefteq&\texttt{\F ntrianglelefteq}&\lneqq&\texttt{\F lneqq}&\gneqq&\texttt{\F gneqq}&\varsubsetneqq&\texttt{\F varsubsetneqq}\\
\ntriangleright&\texttt{\F ntriangleright}&\lnsim&\texttt{\F lnsim}&\gnsim&\texttt{\F gnsim}&\varsupsetneqq&\texttt{\F varsupsetneqq}\\
\ntrianglerighteq&\texttt{\F ntrianglerighteq}&\lvertneqq&\texttt{\F lvertneqq}&\gvertneqq&\texttt{\F gvertneqq}&
\end{array}\\\\
\large 7\quad \textbf{Arrow symbols}\\
\begin{array}{llllll}
\leftarrow&\texttt{\F leftarrow}&\longleftarrow&\texttt{\F longleftarrow}&\uparrow&\texttt{\F uparrow}\\
\Leftarrow&\texttt{\F Leftarrow}&\Longleftarrow&\texttt{\F Longleftarrow}&\Uparrow&\texttt{\F Uparrow}\\
\rightarrow&\texttt{\F rightarrow}&\longrightarrow&\texttt{\F longrightarrow}&\downarrow&\texttt{\F downarrow}\\
\Rightarrow&\texttt{\F Rightarrow}&\Longrightarrow&\texttt{\F Longrightarrow}&\Downarrow&\texttt{\F Downarrow}\\
\leftrightarrow&\texttt{\F leftrightarrow}&\longleftrightarrow&\texttt{\F longleftrightarrow}&\updownarrow&\texttt{\F updownarrow}\\
\Leftrightarrow&\texttt{\F Leftrightarrow}&\Longleftrightarrow&\texttt{\F Longleftrightarrow}&\Updownarrow&\texttt{\F Updownarrow}\\\\
\mapsto&\texttt{\F mapsto}&\longmapsto&\texttt{\F longmapsto}&\nearrow&\texttt{\F nearrow}\\
\hookleftarrow&\texttt{\F hookleftarrow}&\hookrightarrow&\texttt{\F hookrightarrow}&\searrow&\texttt{\F searrow}\\
\leftharpoonup&\texttt{\F leftharpoonup}&\rightharpoonup&\texttt{\F rightharpoonup}&\swarrow&\texttt{\F swarrow}\\
\leftharpoondown&\texttt{\F leftharpoondown}&\rightharpoondown&\texttt{\F rightharpoondown}&\nwarrow&\texttt{\F nwarrow}\\
\rightleftharpoons&\texttt{\F rightleftharpoons}&\leadsto&\texttt{\F leadsto}&\\\\
\dashrightarrow&\texttt{\F dashrightarrow}&\dashleftarrow&\texttt{\F dashleftarrow}&\leftleftarrows&\texttt{\F leftleftarrows}\\
\leftrightarrows&\texttt{\F leftrightarrows}&\Lleftarrow&\texttt{\F Lleftarrow}&\twoheadleftarrow&\texttt{\F twoheadleftarrow}\\
\leftarrowtail&\texttt{\F leftarrowtail}&\looparrowleft&\texttt{\F looparrowleft}&\leftrightharpoons&\texttt{\F leftrightharpoons}\\
\curvearrowleft&\texttt{\F curvearrowleft}&\circlearrowleft&\texttt{\F circlearrowleft}&\Lsh&\texttt{\F Lsh}\\
\upuparrows&\texttt{\F upuparrows}&\upharpoonleft&\texttt{\F upharpoonleft}&\downharpoonleft&\texttt{\F downharpoonleft}\\
\multimap&\texttt{\F multimap}&\leftrightsquigarrow&\texttt{\F leftrightsquigarrow}&\rightrightarrows&\texttt{\F rightrightarrows}\\
\rightleftarrows&\texttt{\F rightleftarrows}&\rightrightarrows&\texttt{\F rightrightarrows}&\rightleftarrows&\texttt{\F rightleftarrows}\\
\twoheadrightarrow&\texttt{\F twoheadrightarrow}&\rightarrowtail&\texttt{\F rightarrowtail}&\looparrowright&\texttt{\F looparrowright}\\
\rightleftharpoons&\texttt{\F rightleftharpoons}&\curvearrowright&\texttt{\F curvearrowright}&\circlearrowright&\texttt{\F circlearrowright}\\
\Rsh&\texttt{\F Rsh}&\downdownarrows&\texttt{\F downdownarrows}&\upharpoonright&\texttt{\F upharpoonright}\\
\downharpoonright&\texttt{\F downharpoonright}&\rightsquigarrow&\texttt{\F rightsquigarrow}&\\\\
\nleftarrow&\texttt{\F nleftarrow}&\nrightarrow&\texttt{\F nrightarrow}&\nLeftarrow&\texttt{\F nLeftarrow}\\
\nRightarrow&\texttt{\F nRightarrow}&\nleftrightarrow&\texttt{\F nleftrightarrow}&\nLeftrightarrow&\texttt{\F nLeftrightarrow}\\
\end{array}\\\\
\large 8\quad\textbf{Miscellaneous symbols}\\
\begin{array}{llllllll}
\infty&\texttt{\F infty}&\forall&\texttt{\F forall}&\Bbbk&\texttt{\F Bbbk}&\wp&\texttt{\F wp}\\
\nabla&\texttt{\F nabla}&\exists&\texttt{\F exists}&\bigstar&\texttt{\F bigstar}&\angle&\texttt{\F angle}\\
\partial&\texttt{\F partial}&\nexists&\texttt{\F nexists}&\diagdown&\texttt{\F diagdown}&\measuredangle&\texttt{\F measuredangle}\\
\eth&\texttt{\F eth}&\emptyset&\texttt{\F emptyset}&\diagup&\texttt{\F diagup}&\sphericalangle&\texttt{\F sphericalangle}\\
\clubsuit&\texttt{\F clubsuit}&\varnothing&\texttt{\F varnothing}&\Diamond&\texttt{\F Diamond}&\complement&\texttt{\F complement}\\
\diamondsuit&\texttt{\F diamondsuit}&\imath&\texttt{\F imath}&\Finv&\texttt{\F Finv}&\triangledown&\texttt{\F triangledown}\\
\heartsuit&\texttt{\F heartsuit}&\jmath&\texttt{\F jmath}&\Game&\texttt{\F Game}&\triangle&\texttt{\F triangle}\\
\spadesuit&\texttt{\F spadesuit}&\ell&\texttt{\F ell}&\hbar&\texttt{\F hbar}&\vartriangle&\texttt{\F vartriangle}\\
\cdots&\texttt{\F cdots}&\iint\iint&\texttt{\F iiiint}^{[1]}&\hslash&\texttt{\F hslash}&\blacklozenge&\texttt{\F blacklozenge}\\
\vdots&\texttt{\F vdots}&\iiint&\texttt{\F iiint}&\lozenge&\texttt{\F lozenge}&\blacksquare&\texttt{\F blacksquare}\\
\ldots&\texttt{\F ldots}&\iint&\texttt{\F iint}&\mho&\texttt{\F mho}&\blacktriangle&\texttt{\F blacktriangle}\\
\ddots&\texttt{\F ddots}&\sharp&\texttt{\F sharp}&\prime&\texttt{\F prime}&\blacktriangledown&\texttt{\F blacktriangledown}\\
\Im&\texttt{\F Im}&\flat&\texttt{\F flat}&\square&\texttt{\F square}&\backprime&\texttt{\F backprime}\\
\Re&\texttt{\F Re}&\natural&\texttt{\F natural}&\surd&\texttt{\F surd}&\circledS&\texttt{\F circledS}\\
\end{array}\\\\
\large 9\quad \textbf{Math mode accents}\\
\begin{array}{llllllll}
\acute{a}&\texttt{\F acute}\text{\{a\}}&\bar{a}&\texttt{\F bar}\text{\{a\}}&-^{[2]}&\texttt{\F Acute\{Acute\{A\}\}}&-&\texttt{\F Bar\{Bar\{A\}\}}\\
\breve{a}&\texttt{\F breve}\text{\{a\}}&\check{a}&\texttt{\F check}\text{\{a\}}&-&\texttt{\F Breve\{Breve\{A\}\}}&-&\texttt{\F Check\{Check\{A\}\}}\\
\ddot{a}&\texttt{\F ddot}\text{\{a\}}&\dot{a}&\texttt{\F dot}\text{\{a\}}&-&\texttt{\F Ddot\{Ddot\{A\}\}}&-&\texttt{\F Dot\{Dot\{A\}\}}\\
\grave{a}&\texttt{\F grave}\text{\{a\}}&\hat{a}&\texttt{\F hat}\text{\{a\}}&-&\texttt{\F Grave\{Grave\{A\}\}}&-&\texttt{\F Hat\{Hat\{A\}\}}\\
\tilde{a}&\texttt{\F tilde}\text{\{a\}}&\vec{a}&\texttt{\F vec}\text{\{a\}}&-&\texttt{\F Tilde\{Tilde\{A\}\}}&-&\texttt{\F Vec\{Vec\{A\}\}}\\
\end{array}\\\\
\large 10 \quad \textbf{Array enviroment, examples}\\
\text{Simplest version:}\qquad\qquad\qquad\texttt{\F begin\{array\}\{}cols\texttt{\}}\quad row_1\ \F\F\ row_2\ \F\F\ ...row_m\quad\texttt{\F end\{array\}}\\
\text{where }cols \text{ includes one character [}\texttt{lrc}\text{] for each column (with optionalcharacters | inserted for vertical lines)}\\
\text{and }row_j\text{ includes character }\texttt{\& }\text{a total of }(n-1)\text{ times to separate the }n\text{ elements in the row. Examples:}\\
\begin{array}{rr}
\begin{array}{c}
\texttt{\F left( \F begin\{array\}\{cc\} 2\F tau \& 7\F phi-frac5{12} \F\F}\\
\texttt{3\F psi \& \F frac{\F pi}8 \F end\{array\} \F right)}\\
\texttt{\F left( \F begin\{array\}\{c\} x \F\F \ y \F end\{array\} \F right)}\\
\texttt{\F mbox\{\~ and\~ \} \F left[ \F begin\{array\}\{cc|r\}}\\
\texttt{3 \& 4 \& 5 \F\F 1 \& 3 \& 729 \F end\{array\} \F right]}
\end{array}&
\bigg( \begin{array}{cc} 2\tau & 7\phi-\frac{5}{12} \\
3\psi & \frac{\pi}{8} \end{array} \bigg)\bigg( \begin{array}{c} x \\ y \end{array} \bigg)\text{ and }\bigg[ \begin{array}{cc|r}
3 & 4 & 5 \\ 1 & 3 & 729 \end{array} \bigg]\\\\
\begin{array}{c}
\texttt{f(z) = \quad \F left\F\{ \F begin\{array\}\{rcl\}}\\
\texttt{\F overline\{\F overline\{z\^ 2\}+\F cos z\} \& \F mbox\{for\}}\\
\texttt{\& |z|<3 \F\F\ 0\ \ \&\ \F mbox\{for\} \& 3\F leq|z|\F leq5 \F\F}\\
\texttt{\F sin\F overline\{z\} \& \F mbox\{for\} \& |z|>5}\\
\texttt{\F end\{array\}\F right.}\\
\end{array}&
f(z)=\left\{ \begin{array}{rcl}
\overline{\overline{z^2}+\cos z} & \text{ for }
& |z|<3 \\ 0 & \text{ for } & 3\leq|z|\leq5 \\
\sin\overline{z} & \text{ for } & |z|>5
\end{array}\right.
\end{array}\\\\
\large 11\quad \textbf{Other Styles (math mode only)}\\
\begin{array}{l}
\textbf{Caligraphic letters: }\texttt{\$\F mathcal\{A\}\$ }\text{etc.: }\mathcal{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}\\
\textbf{Mathbb letters: }\texttt{\$\F mathbb\{A\}\$ }\text{etc.: }\mathbb{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}\\
\textbf{Mathfrak letters: }\texttt{\$\F mathfrak\{A\}\$ }\text{etc.: }\mathfrak{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c 1 2 3}\\
\textbf{Math Sans serif letters: }\texttt{\$\F mathsf\{A\}\$ }\text{etc.: }\mathfrak{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c 1 2 3}\\
\textbf{Math bold letters: }\texttt{\$\F mathbf\{A\}\$ }\text{etc.: }\mathbf{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c 1 2 3}\\
\textbf{Math bold italic letters: }\text{define}\texttt{\F def\F mathbi\#1\{\F textbf\{\F em \#1\}\}\quad}\text{then use }\texttt{\$\F mathbi\{A\}\$ }\text{etc.: }\\
\end{array}\\
\def\mathbi#1{\textbf{\textit{#1}}}
\mathbi{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\quad a b c\quad 1 2 3}\\\\
\large 12\quad \textbf{Font sizes}\\
\begin{array}{lc}
\boxed{\textbf{Math Mode:}}&
\begin{array}{cl}
{\displaystyle \int f^{-1}(x-x_a)\,dx}&\texttt{\$\{displaystyle \F int f\^ \{-1\}(x-x\_a)\F ,dx\}\$}\\
{\textstyle \int f^{-1}(x-x_a)\,dx}&\texttt{\$\{textstyle \F int f\^ \{-1\}(x-x\_a)\F ,dx\}\$}\\
{\scriptstyle \int f^{-1}(x-x_a)\,dx}&\texttt{\$\{scriptstyle \F int f\^ \{-1\}(x-x\_a)\F ,dx\}\$}\\
{\scriptscriptstyle \int f^{-1}(x-x_a)\,dx}&\texttt{\$\{scriptscriptstyle \F int f\^ \{-1\}(x-x\_a)\F ,dx\}\$}
\end{array}\\\\
\boxed{\textbf{Text Mode:}}&
\begin{array}{lll}
\begin{array}{l}
\texttt{\F tiny }=\text{ \tiny{smallest}}\\
\texttt{\F scriptsize }=\text{ \scriptsize{very small}}\\
\texttt{\F footnotesize }=\text{ \footnotesize{smaller}}\\
\texttt{\F small }=\text{ \small{small}}\\
\end{array}&
\begin{array}{l}
\texttt{\F normalsize }=\text{ \normalsize{normal}}\\
\texttt{\F large }=\text{ \large{large}}\\
\texttt{\F Large }=\text{ \Large{Large}}\\
\texttt{\F LARGE }=\text{ \LARGE{LARGE}}\\
\end{array}&
\begin{array}{l}
\texttt{\F huge }=\text{ \huge{huge}}\\
\texttt{\F Huge }=\text{ \Huge{Huge}}\\
\end{array}
\end{array}
\end{array}\\\\
\large 13\quad\textbf{Text Mode: Accents and Symbols}\\
\end{array}
$$
![](https://cdn.luogu.com.cn/upload/image_hosting/jgs2sarp.png)$^{[3]}$

$[1]$：此处本来是四个 $\int$ 相连，但是洛谷云剪贴板似乎不支持表中写法。

$[2]$：洛谷云剪贴板不支持此写法。效果：两个 $\acute{}$ 叠加。下面几个都是一样。

$[3]$：这里面的写法大部分都不支持，于是直接把图片粘过来了。
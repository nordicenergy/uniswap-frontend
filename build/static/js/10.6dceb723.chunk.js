(this["webpackJsonpnordicenergy-niswap"]=this["webpackJsonpnordicenergy-niswap"]||[]).push([[10],{805:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 9 10",fill:"currentColor"},e),a.a.createElement("path",{d:"M5.298 0H4.24v7.911h-.075L1.256 4.932l-.717.735L4.769 10 9 5.667l-.718-.735-2.908 2.979h-.076V0z",fill:"currentColor"}))}},807:function(e,t,n){"use strict";var r=n(28),a=n(35),i=n(39),c=n(34),u=n(38),o=n(106),l=n(3),s=n(0),m=n.n(s),f=n(4),d=n(61),b=n(804),h=n(791);function v(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return g=function(){return e},e}function j(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return j=function(){return e},e}function O(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return O=function(){return e},e}var y=f.d.div(O(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray})),E=f.d.div(j(),(function(e){return e.theme.concreteGray})),w=f.d.div(g(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),k=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(b.a,t)}))(p(),(function(e){return e.theme.royalBlue})),x=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(h.a,t)}))(v(),(function(e){return e.theme.royalBlue})),N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={showDetails:!1},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?m.a.createElement(E,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?m.a.createElement(y,{error:i},a):m.a.createElement(m.a.Fragment,null,m.a.createElement(w,{onClick:function(){!e.state.showDetails&&d.a.event({category:"Advanced Interaction",action:"Open Advanced Details",label:"Pool Page Details"}),e.setState((function(e){return{showDetails:!e.showDetails}}))}},this.state.showDetails?m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,r),m.a.createElement(x,null)):m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,n),m.a.createElement(k,null))),this.renderDetails())}}]),t}(s.Component);N.defaultProps={openDetailsText:"Advanced Details",closeDetailsText:"Hide Advanced",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=N},917:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(14),a=n.n(r),i=n(32),c=n(7),u=n(3),o=n(0),l=n.n(o),s=n(60),m=n(61),f=n(47),d=n(17),b=n(4),h=n(11),v=n(78),p=n(77),g=n(73),j=n(5),O=n(16),y=n(15),E=n(808),w=n(807),k=n(787),x=n(805),N=n(806);function T(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return T=function(){return e},e}function D(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return D=function(){return e},e}function S(){var e=Object(u.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return S=function(){return e},e}function A(){var e=Object(u.a)(["\n  margin-top: 1rem;\n"]);return A=function(){return e},e}function C(){var e=Object(u.a)(["\n  ","\n  padding: 1rem 0;\n"]);return C=function(){return e},e}function W(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0;\n"]);return W=function(){return e},e}function H(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0.75rem;\n"]);return H=function(){return e},e}function L(){var e=Object(u.a)(["\n  ","\n  min-height: 3.5rem;\n"]);return L=function(){return e},e}function M(){var e=Object(u.a)(["\n  ","\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return M=function(){return e},e}function R(){var e=Object(u.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return e},e}function B(){var e=Object(u.a)(["\n  color: ",";\n"]);return B=function(){return e},e}var z=d.ethers.utils.bigNumberify(200),q=d.ethers.utils.bigNumberify(1e3),I=b.d.span(B(),(function(e){return e.theme.royalBlue})),P=b.d.div(R(),(function(e){return e.theme.flexRowNoWrap})),Z=Object(b.d)(x.a)(M(),(function(e){return e.theme.flexRowNoWrap}),(function(e){var t=e.theme;return e.active?t.royalBlue:t.doveGray})),G=b.d.div(L(),(function(e){return e.theme.flexRowNoWrap})),F=b.d.div(H()),U=b.d.div(W()),V=b.d.div(C(),(function(e){return e.theme.flexColumnNoWrap})),J=b.d.div(A()),K=b.d.div(S(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),Q=b.d.span(D(),(function(e){return e.theme.doveGray})),X=b.d.div(T());function Y(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18));return a?e.mul(i).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))).div(n):n.mul(i).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r))).div(e)}}catch(c){}}function $(e){if(e){var t=e.mul(z).div(d.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(d.ethers.constants.Zero)?d.ethers.constants.Zero:n,maximum:r.gt(d.ethers.constants.MaxUint256)?d.ethers.constants.MaxUint256:r}}return{}}function _(e){var t=e.params,n=Object(s.b)().t,r=Object(h.k)(),u=r.library,b=r.account,x=r.active,T=r.chainId,D=Object(v.e)(),S=Object(o.useState)(),A=Object(c.a)(S,2),C=A[0],W=A[1];Object(o.useEffect)((function(){Object(f.a)().push(window.location.pathname+"")}),[]);var H=Object(o.useState)(t.poolTokenAddress),L=Object(c.a)(H,2),M=L[0],R=L[1],B=Object(o.useState)(t.poolTokenAmount?t.poolTokenAmount:""),z=Object(c.a)(B,2),_=z[0],ee=z[1],te=Object(o.useState)(),ne=Object(c.a)(te,2),re=ne[0],ae=ne[1],ie=Object(o.useState)(),ce=Object(c.a)(ie,2),ue=ce[0],oe=ce[1];Object(o.useEffect)((function(){W(!1);for(var e=0;e<O.e.length;e++)O.e[e].toLowerCase()===M.toLowerCase()&&W(!0)}),[M]),Object(o.useEffect)((function(){try{var e=d.ethers.utils.parseUnits(_,18);oe(e)}catch(t){""!==_&&ae(n("inputNotValid"))}return function(){ae(),oe()}}),[n,_]);var le=Object(p.d)(M),se=le.symbol,me=le.decimals,fe=le.exchangeAddress,de=Object(o.useState)(),be=Object(c.a)(de,2),he=be[0],ve=be[1],pe=Object(g.c)(b,fe),ge=Object(g.c)(fe,"ETH"),je=Object(g.c)(fe,M),Oe={};t.poolTokenAddress&&(Oe[t.poolTokenAddress]=!0),Object(o.useEffect)((function(){ue&&pe&&(ue.gt(pe)?ae(n("insufficientBalance")):ae(null))}),[pe,n,ue]);var ye=Object(h.f)(fe),Ee=pe&&he&&!he.isZero()?pe.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(he):void 0,we=Ee&&Object(j.a)(Ee,16,4),ke=ge&&Ee&&ge.mul(Ee).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),xe=je&&Ee&&je.mul(Ee).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),Ne=ge?ge.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Te=je?je.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,De=Ne&&ue&&he&&!he.isZero()?Ne.mul(ue).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(he):void 0,Se=Te&&ue&&he&&!he.isZero()?Te.mul(ue).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(he):void 0,Ae=De?$(De).minimum:void 0,Ce=Se?$(Se).minimum:void 0,We=Object(o.useCallback)((function(){ye&&ye.totalSupply().then((function(e){ve(e)}))}),[ye]);Object(o.useEffect)((function(){return We(),u.on("block",We),function(){u.removeListener("block",We)}}),[We,u]);var He=Object(g.e)();function Le(){return(Le=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=He*(De/1e18)*2,m.a.event({category:"Transaction",action:"Remove Liquidity",label:M,value:t}),n=Math.ceil(Date.now()/1e3)+900,e.next=5,ye.estimate.removeLiquidity(ue,Ae,Ce,n);case 5:r=e.sent,ye.removeLiquidity(ue,Ae,Ce,n,{gasLimit:Object(j.b)(r,q)}).then((function(e){D(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Me=function(e){return l.a.createElement(I,null,e)};function Re(){return l.a.createElement("div",null,l.a.createElement("div",null,n("youAreRemoving")," ",Me("".concat(Object(j.a)(De,18,4)," ETH"))," ",n("and")," ",Me("".concat(Object(j.a)(Se,me,Math.min(me,4))," ").concat(se))," ",n("outPool")),l.a.createElement(J,null,n("youWillRemove")," ",Me(Object(j.a)(ue,18,4))," ",n("liquidityTokens")),l.a.createElement(J,null,n("totalSupplyIs")," ",Me(Object(j.a)(he,18,4))),l.a.createElement(J,null,n("tokenWorth")," ",Me(Object(j.a)(Ne.div(he),18,4))," ETH ",n("and")," ",Me(Object(j.a)(Te.div(he),me,Math.min(4,me)))," ",se))}var Be=x&&b,ze=null===re,qe=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Y(e,18,t,n,r)}(ge,je,me),Ie="ETH"!==M&&M&&!p.a[T].hasOwnProperty(M),Pe=Object(o.useState)(!1),Ze=Object(c.a)(Pe,2),Ge=Ze[0],Fe=Ze[1];return Object(o.useEffect)((function(){Fe(!!Ie)}),[Ie]),l.a.createElement(l.a.Fragment,null,Ge&&l.a.createElement(N.a,{onDismiss:function(){Fe(!1)},urlAddedTokens:Oe,currency:M}),l.a.createElement(E.a,{title:n("poolTokens"),extraText:pe&&function(e){return"Balance: ".concat(e)}(Object(j.a)(pe,18,4)),extraTextClickHander:function(){if(pe){var e=pe;e.gt(d.ethers.constants.Zero)&&ee(Object(j.a)(e,18,18,!1))}},urlAddedTokens:Oe,onCurrencySelected:R,onValueChange:ee,value:_,errorMessage:re,selectedTokenAddress:M}),l.a.createElement(k.a,null,l.a.createElement(P,null,l.a.createElement(Z,{active:Be,alt:"arrow"}))),l.a.createElement(E.a,{title:n("output"),description:De&&Se?"(".concat(n("estimated"),")"):"",key:"remove-liquidity-input",renderInput:function(){return De&&Se?l.a.createElement(G,null,l.a.createElement(F,null,"".concat(Object(j.a)(De,18,4,!1)," ETH")),l.a.createElement(U,null," + "),l.a.createElement(F,null,"".concat(Object(j.a)(Se,me,Math.min(4,me))," ").concat(se))):l.a.createElement(G,null)},disableTokenSelect:!0,disableUnlock:!0}),l.a.createElement(k.a,{key:"remove-liquidity-input-under",hideBottom:!0},l.a.createElement(V,null,l.a.createElement(K,null,l.a.createElement(Q,null,n("exchangeRate")),qe?l.a.createElement("span",null,"1 ETH = ".concat(Object(j.a)(qe,18,4)," ").concat(se)):" - "),l.a.createElement(K,null,l.a.createElement(Q,null,n("currentPoolSize")),ge&&je&&(me||0===me)?l.a.createElement("span",null,"".concat(Object(j.a)(ge,18,4)," ETH + ").concat(Object(j.a)(je,me,Math.min(me,4))," ").concat(se)):" - "),l.a.createElement(K,null,l.a.createElement(Q,null,n("yourPoolShare")," (",we&&we,"%)"),ke&&xe?l.a.createElement("span",null,"".concat(Object(j.a)(ke,18,4)," ETH + ").concat(Object(j.a)(xe,me,Math.min(me,4))," ").concat(se)):" - "))),function(){var e="",t=!1;return C?(e=n("brokenToken"),t=!0):re?(e=re,t=!0):M&&"ETH"!==M?ue?b||(e=n("noWallet"),t=!0):e=n("enterValueCont"):e=n("selectTokenCont"),l.a.createElement(w.a,{key:"context-info",openDetailsText:n("transactionDetails"),closeDetailsText:n("hideDetails"),contextualInfo:e,isError:t,renderTransactionDetails:Re})}(),l.a.createElement(X,null,l.a.createElement(y.b,{disabled:!ze,onClick:function(){return Le.apply(this,arguments)}},n("removeLiquidity"))))}}}]);
//# sourceMappingURL=10.6dceb723.chunk.js.map
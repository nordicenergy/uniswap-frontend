(this["webpackJsonpnordicenergy-niswap"]=this["webpackJsonpnordicenergy-niswap"]||[]).push([[0],{804:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),o=t.n(r);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createElement("path",{d:"M11.4673 6L6.23364 1L0.999995 6",stroke:"#388DFF"}),u=function(e){var n=e.svgRef,t=e.title,r=i(e,["svgRef","title"]);return o.a.createElement("svg",a({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,c)},l=o.a.forwardRef((function(e,n){return o.a.createElement(u,a({svgRef:n},e))}));t.p},806:function(e,n,t){"use strict";var r=t(7),o=t(3),a=t(0),i=t.n(a),c=t(4),u=t(11),l=t(77),s=t(5),f=t(15),d=t(842),m=t(104),b=t(224),p=t.n(b);function v(){var e=Object(o.a)(["\n  color: ",";\n"]);return v=function(){return e},e}function h(){var e=Object(o.a)(["\n    left: 2px;\n    top: 50px;\n  "]);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n  position: absolute;\n  width: 228px;\n  right: 110px;\n  top: 4px;\n  z-index: 10;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  animation: "," 0.15s linear;\n  color: ",";\n  font-style: italic;\n\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n\n  ","\n"]);return g=function(){return e},e}function O(){var e=Object(o.a)(["\n  from {\n    opacity : 0;\n  }\n\n  to {\n    opacity : 1;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n  height: 18px;\n  width: 18px;\n"]);return j=function(){return e},e}function y(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(o.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  & > * {\n    height: 14px;\n    width: 14px;\n  }\n"]);return E=function(){return e},e}function w(){var e=Object(o.a)(["\n  color: #aeaeae;\n"]);return w=function(){return e},e}function x(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-items: flex-start;\n  & > * {\n    margin-right: 6px;\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(o.a)(["\n  background: rgba(243, 190, 30, 0.1);\n  position: relative;\n  padding: 1rem;\n  border: 0.5px solid #f3be1e;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-row-gap: 10px;\n"]);return k=function(){return e},e}function R(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return R=function(){return e},e}var C=c.d.div(R()),T=c.d.div(k()),B=c.d.div(x()),S=Object(c.d)(m.a)(w()),L=c.d.div(E()),M=c.d.button(y()),z=c.d.img(j()),P=Object(c.e)(O()),A=Object(c.d)(C)(g(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.mercuryGray}),P,(function(e){return e.theme.textColor}),(function(e){return e.theme.mediaWidth.upToSmall(h())})),N=c.d.div(v(),(function(e){return e.theme.textColor}));n.a=function(e){var n=e.onDismiss,t=e.urlAddedTokens,o=e.currency,c=Object(a.useState)(),m=Object(r.a)(c,2),b=m[0],v=m[1],h=Object(u.k)().chainId,g=Object(l.d)(o),O=g.symbol,j=g.name,y=t.hasOwnProperty(o);return i.a.createElement(T,null,i.a.createElement(L,{onClick:function(){return n()}},i.a.createElement(S,{alt:"close icon"})),i.a.createElement(B,{style:{fontSize:"12px"}},i.a.createElement(N,null,y?"Token imported by URL ":"Token imported by user"),i.a.createElement(M,{onClick:function(){v(!b)},onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},i.a.createElement(z,{src:p.a,alt:"popup"})),b?i.a.createElement(A,null,i.a.createElement(N,null,"The Uniswap smart contracts are designed to support any ERC20 token on Ethereum. Any token can be loaded into the interface by entering its Ethereum address into the search field or passing it as a URL parameter. Be careful when interacting with imported tokens as they have not been verified.")):""),i.a.createElement(B,null,i.a.createElement(d.a,{address:o}),i.a.createElement("div",{style:{fontWeight:500}},j&&O?j+" ("+O+")":""),i.a.createElement(f.d,{style:{fontWeight:400},href:Object(s.j)(h,o,"address")},"(View on Etherscan)")),i.a.createElement(B,{style:{fontSize:"12px",fontStyle:"italic"}},i.a.createElement(N,null,"Please verify the legitimacy of this token before making any transactions.")))}},808:function(e,n,t){"use strict";var r,o=t(1),a=t(14),i=t.n(a),c=t(32),u=t(7),l=t(3),s=t(0),f=t.n(s),d=t(98),m=t(60),b=t(17),p=t(26),v=t(4),h=t(913),g=t.n(h),O=t(10),j=0,y=function(){var e=Object(s.useState)(null),n=e[0],t=e[1];return Object(s.useEffect)((function(){return t(++j)}),[]),n},E=t(72),w=t(186),x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute"},R=function(e){return f.a.createElement("div",x({style:k},e))},C=t(87),T=["bottom","height","left","right","top","width"],B=new Map,S=function e(){B.forEach((function(e){e.hasRectChanged&&(e.callbacks.forEach((function(n){return n(e.rect)})),e.hasRectChanged=!1)})),window.setTimeout((function(){B.forEach((function(e,n){var t,r,o=n.getBoundingClientRect();t=o,r=e.rect,void 0===t&&(t={}),void 0===r&&(r={}),T.some((function(e){return t[e]!==r[e]}))&&(e.hasRectChanged=!0,e.rect=o)}))}),0),r=window.requestAnimationFrame(e)},L=function(e,n){return{observe:function(){var t=0===B.size;B.has(e)?B.get(e).callbacks.push(n):B.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&S()},unobserve:function(){var t=B.get(e);if(t){var o=t.callbacks.indexOf(n);o>=0&&t.callbacks.splice(o,1),t.callbacks.length||B.delete(e),B.size||cancelAnimationFrame(r)}}}},M=(t(2),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}),z=function(e){var n=e.refs;return(0,e.props.children)({ref:function(e){return n.node=e},rect:e.state.rect})},P=function(e){var n=e.setState,t=e.refs,r=e.props;t.node?(t.observer=L(t.node,(function(e){r.onChange&&r.onChange(e),n({rect:e})})),r.observe&&t.observer.observe()):console.warn("You need to place the ref")},A=function(e){var n=e.refs,t=e.props,r=e.prevProps;t.observe&&!r.observe?n.observer.observe():!t.observe&&r.observe&&n.observer.unobserve()},N=function(e){e.refs.observer.unobserve()},W=function(e){return f.a.createElement(C.a,M({},e,{refs:{node:void 0,observer:void 0},initialState:{rect:void 0},didMount:P,didUpdate:A,willUnmount:N,render:z}))};function G(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(s.useState)(null),r=t[0],o=t[1],a=Object(s.useRef)(null);return Object(s.useLayoutEffect)((function(){return a.current||(a.current=L(e.current,o)),n&&a.current.observe(),function(){return a.current.unobserve()}}),[n]),r}W.defaultProps={observe:!0};var H,D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function U(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var V="idle",F="focused",Y="visible",I={initial:V,states:(H={},H.idle={enter:Q,on:{mouseenter:F,focus:Y}},H.focused={enter:function(){clearTimeout(Z),Z=setTimeout((function(){return $("rest")}),100)},leave:function(){clearTimeout(Z)},on:{mousemove:F,mouseleave:V,mousedown:"dismissed",blur:V,rest:Y}},H.visible={on:{focus:F,mouseenter:F,mouseleave:"leavingVisible",blur:"leavingVisible",mousedown:"dismissed",selectWithKeyboard:"dismissed",globalMouseMove:"leavingVisible"}},H.leavingVisible={enter:function(){clearTimeout(q),q=setTimeout((function(){return $("timecomplete")}),500)},leave:function(){clearTimeout(q),Q()},on:{mouseenter:Y,focus:Y,timecomplete:V}},H.dismissed={leave:function(){_.id=null},on:{mouseleave:V,blur:V}},H)},_={id:null},K=I.initial;function $(e,n){var t=I.states[K],r=t.on[e];if(!r)throw new Error('Unknown state for action "'+e+'" from state "'+K+'"');t.leave&&t.leave(),n&&(_=n);var o=I.states[r];o.enter&&o.enter(),K=r,X.forEach((function(e){return e(K,_)}))}var X=[];function J(e){return X.push(e),function(){X.splice(X.indexOf(e),1)}}var Z=void 0;var q=void 0;function Q(){_.id=null}function ee(e){var n=e.children,t=e.label,r=e.ariaLabel,o=e.DEBUG_STYLE,a=U(e,["children","label","ariaLabel","DEBUG_STYLE"]),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onMouseEnter,t=e.onMouseMove,r=e.onMouseLeave,o=e.onFocus,a=(e.onBlur,e.onKeyDown),i=e.onMouseDown,c=e.ref,u=e.DEBUG_STYLE,l="tooltip:"+y(),f=Object(s.useState)(!!u||_.id===l&&K===Y),d=f[0],m=f[1],b=c||Object(s.useRef)(),p=G(b,d);Object(s.useEffect)((function(){return J((function(){_.id!==l||K!==Y&&"leavingVisible"!==K?m(!1):m(!0)}))}),[l]),Object(s.useEffect)((function(){return Object(E.b)("tooltip")}));var v=function(){switch(K){case V:case Y:case"leavingVisible":$("mouseenter",{id:l})}},h=function(){switch(K){case F:$("mousemove",{id:l})}},g=function(e){if(!window.__REACH_DISABLE_TOOLTIPS)switch(K){case V:case Y:case"leavingVisible":$("focus",{id:l})}},O=function(){switch(K){case F:case Y:case"dismissed":$("mouseleave")}},j=function(){if(_.id===l)switch(K){case F:case Y:case"dismissed":$("blur")}},w=function(){if(_.id===l)switch(K){case F:case Y:$("mousedown")}},x=function(e){if("Enter"===e.key||" "===e.key)switch(K){case Y:$("selectWithKeyboard")}},k={"aria-describedby":l,"data-reach-tooltip-trigger":"",ref:b,onMouseEnter:Object(E.c)(n,v),onMouseMove:Object(E.c)(t,h),onFocus:Object(E.c)(o,g),onBlur:Object(E.c)(o,j),onMouseLeave:Object(E.c)(r,O),onKeyDown:Object(E.c)(a,x),onMouseDown:Object(E.c)(i,w)},R={id:l,triggerRect:p,isVisible:d};return[k,R,d]}({DEBUG_STYLE:o}),c=i[0],u=i[1];return f.a.createElement(s.Fragment,null,Object(s.cloneElement)(s.Children.only(n),c),f.a.createElement(ne,D({label:t,ariaLabel:r},u,a)))}var ne=Object(s.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,o=e.position,a=e.isVisible,i=e.id,c=e.triggerRect,u=U(e,["label","ariaLabel","position","isVisible","id","triggerRect"]);return a?f.a.createElement(w.a,null,f.a.createElement(te,D({label:t,ariaLabel:r,position:o,isVisible:a,id:i,triggerRect:c,ref:n},u))):null})),te=Object(s.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,o=e.position,a=void 0===o?oe:o,i=e.isVisible,c=e.id,u=e.triggerRect,l=e.style,d=U(e,["label","ariaLabel","position","isVisible","id","triggerRect","style"]),m=null!=r,b=Object(s.useRef)(),p=G(b,i);return f.a.createElement(s.Fragment,null,f.a.createElement("div",D({"data-reach-tooltip":!0,role:m?void 0:"tooltip",id:m?void 0:c,children:t,style:D({},l,re(a,u,p)),ref:function(e){b.current=e,n&&n(e)}},d)),m&&f.a.createElement(R,{role:"tooltip",id:c},r))})),re=function(e,n,t){return!t?{visibility:"hidden"}:e(n,t)},oe=function(e,n){var t={left:e.left+window.pageXOffset+"px",top:e.top+e.height+window.pageYOffset+"px"},r={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width,bottom:window.innerHeight<e.bottom+n.height+8,left:e.left-n.width<0},o=r.bottom&&!r.top;return D({},t,{left:r.right&&!r.left?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px",top:o?e.top-8-n.height+window.pageYOffset+"px":e.top+8+e.height+window.pageYOffset+"px"})},ae=(t(914),t(36)),ie=t(15),ce=t(11),ue=t(5);function le(){return(le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function se(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var fe=f.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#AEAEAE"}),de=function(e){var n=e.svgRef,t=e.title,r=se(e,["svgRef","title"]);return f.a.createElement("svg",le({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?f.a.createElement("title",null,t):null,fe)},me=f.a.forwardRef((function(e,n){return f.a.createElement(de,le({svgRef:n},e))})),be=(t.p,t(135)),pe=t(842),ve=t(227),he=t.n(ve),ge=t(78),Oe=t(77),je=t(73),ye=t(104),Ee=t(226),we=t.n(Ee);function xe(){var e=Object(l.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n  color: ",";\n  opacity: 0.6;\n"]);return xe=function(){return e},e}function ke(){var e=Object(l.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n"]);return ke=function(){return e},e}function Re(){var e=Object(l.a)(["\n  ",";\n  align-items: flex-end;\n"]);return Re=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: ",";\n"]);return Ce=function(){return e},e}function Te(){var e=Object(l.a)(["\n  font-size: 1rem;\n  line-height: 20px;\n"]);return Te=function(){return e},e}function Be(){var e=Object(l.a)(["\n  color: ",";\n"]);return Be=function(){return e},e}function Se(){var e=Object(l.a)(["\n  color: ",";\n"]);return Se=function(){return e},e}function Le(){var e=Object(l.a)(["\n  ",";\n  margin-left: 1rem;\n"]);return Le=function(){return e},e}function Me(){var e=Object(l.a)(["\n  ","\n  align-items : center;\n"]);return Me=function(){return e},e}function ze(){var e=Object(l.a)(["\n    padding: 0.8rem 1rem;\n    padding-right: 2rem;\n  "]);return ze=function(){return e},e}function Pe(){var e=Object(l.a)(["\n  ","\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  cursor: pointer;\n  user-select: none;\n\n  #symbol {\n    color: ",";\n  }\n\n  :hover {\n    background-color: ",";\n  }\n\n  ","\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n"]);return Ae=function(){return e},e}function Ne(){var e=Object(l.a)(["\n  ","\n  align-items: center;\n  padding: 1rem 1.5rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  user-select: none;\n"]);return Ne=function(){return e},e}function We(){var e=Object(l.a)(["\n  ","\n  justify-content: flex-start;\n  padding: 0.5rem 1.5rem;\n  background-color: ",";\n"]);return We=function(){return e},e}function Ge(){var e=Object(l.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return Ge=function(){return e},e}function He(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return He=function(){return e},e}function De(){var e=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 0px 0px 1rem;\n  height: 60px;\n"]);return De=function(){return e},e}function Ue(){var e=Object(l.a)(["\n  ","\n  width: 100%;\n"]);return Ue=function(){return e},e}function Ve(){var e=Object(l.a)(["\n  color: ",";\n  :hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return Ve=function(){return e},e}function Fe(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return Fe=function(){return e},e}function Ye(){var e=Object(l.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return Ye=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n  :focus-within {\n    border: 1px solid ",";\n  }\n"]);return Ie=function(){return e},e}function _e(){var e=Object(l.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return _e=function(){return e},e}function Ke(){var e=Object(l.a)(["\n  margin: 0 0.5rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ",";\n  }\n"]);return Ke=function(){return e},e}function $e(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return $e=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  align-items: center;\n  font-size: 1rem;\n  color: ",";\n  height: 2rem;\n  border: 1px solid ",";\n  border-radius: 2.5rem;\n  background-color: ",";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n\n  :hover {\n    border: 1px solid\n      ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  :active {\n    background-color: ",";\n  }\n"]);return Xe=function(){return e},e}function Je(){var e=Object(l.a)(["\n  min-height: 2.5rem;\n  flex-shrink: 0;\n  text-align: left;\n  padding-left: 1.6rem;\n  background-color: ",";\n"]);return Je=function(){return e},e}function Ze(){var e=Object(l.a)(["\n  font-size: 1.5rem;\n  color: ",";\n  background-color: ",";\n  -moz-appearance: textfield;\n"]);return Ze=function(){return e},e}function qe(){var e=Object(l.a)(["\n  ","\n  align-items: center;\n\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return qe=function(){return e},e}function Qe(){var e=Object(l.a)(["\n  ","\n  padding: 4px 50px 4px 15px;\n  margin-right: -40px;\n  line-height: 0;\n  height: 2rem;\n  align-items: center;\n  border-radius: 2.5rem;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  background: ",";\n  border: 1px solid ",";\n  color: ",";\n"]);return Qe=function(){return e},e}t.d(n,"a",(function(){return Ln}));var en=b.ethers.utils.bigNumberify(1e3),nn=v.d.button(Qe(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.zumthorBlue}),(function(e){return e.theme.royalBlue}),(function(e){return e.theme.royalBlue})),tn=v.d.div(qe(),(function(e){return e.theme.flexRowNoWrap})),rn=Object(v.d)(ie.a)(Ze(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){return e.theme.inputBackground})),on=Object(v.d)(ie.a)(Je(),(function(e){return e.theme.concreteGray})),an=v.d.button(Xe(),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.mercuryGray:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.concreteGray:t.zumthorBlue}),(function(e){var n=e.selected,t=e.theme;return n?Object(O.a)(.1,t.mercuryGray):Object(O.a)(.1,t.royalBlue)}),(function(e){var n=e.theme;return Object(O.a)(.1,n.royalBlue)}),(function(e){return e.theme.zumthorBlue})),cn=v.d.span($e()),un=Object(v.d)(me)(Ke(),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue})),ln=v.d.div(_e(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(O.c)(.95,n.shadowColor)}),(function(e){return e.theme.inputBackground})),sn=v.d.div(Ie(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.malibuBlue})),fn=v.d.div(Ye(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray}),(function(e){var n=e.theme;return Object(O.a)(.2,n.doveGray)})),dn=v.d.div(Fe()),mn=v.d.span(Ve(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){var n=e.error,t=e.theme;return n&&Object(O.a)(.1,t.salmonRed)})),bn=v.d.div(Ue(),(function(e){return e.theme.flexColumnNoWrap})),pn=v.d.div(De()),vn=Object(v.d)(ye.a)(He(),(function(e){return e.theme.textColor})),hn=v.d.div(Ge()),gn=v.d.div(We(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.concreteGray})),On=v.d.div(Ne(),(function(e){return e.theme.flexRowNoWrap})),jn=v.d.div(Ae()),yn=v.d.div(Pe(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGrey}),(function(e){return e.theme.tokenRowHover}),(function(e){return e.theme.mediaWidth.upToMedium(ze())})),En=v.d.div(Me(),(function(e){return e.theme.flexRowNoWrap})),wn=v.d.div(Le(),(function(e){return e.theme.flexColumnNoWrap})),xn=v.d.div(Se(),(function(e){return e.theme.chaliceGray})),kn=v.d.span(Be(),(function(e){return e.theme.royalBlue})),Rn=v.d.div(Te()),Cn=v.d.div(Ce(),(function(e){return e.theme.chaliceGray})),Tn=v.d.div(Re(),(function(e){return e.theme.flexColumnNoWrap})),Bn=v.d.span(ke()),Sn=Object(v.d)(ie.e)(xe(),(function(e){return e.theme.chaliceGray}));function Ln(e){var n=e.onValueChange,t=void 0===n?function(){}:n,r=e.allBalances,o=e.renderInput,a=e.onCurrencySelected,l=void 0===a?function(){}:a,d=e.title,p=e.description,v=e.extraText,h=e.extraTextClickHander,g=void 0===h?function(){}:h,O=e.errorMessage,j=e.disableUnlock,y=e.disableTokenSelect,E=e.selectedTokenAddress,w=void 0===E?"":E,x=e.showUnlock,k=e.value,R=e.urlAddedTokens,C=Object(m.b)().t,T=Object(s.useState)(!1),B=Object(u.a)(T,2),S=B[0],L=B[1],M=Object(ce.j)(w),z=Object(Oe.d)(w).exchangeAddress,P=Object(ge.d)(w),A=Object(ge.e)(),N=Object(Oe.c)(),W=Object(ce.k)().account,G=Object(je.c)(W,w);return f.a.createElement(ln,null,f.a.createElement(sn,{error:!!O},f.a.createElement(fn,null,f.a.createElement(dn,null,f.a.createElement("span",null,d)," ",f.a.createElement("span",null,p)),f.a.createElement(mn,{"data-tip":"Enter max",error:!!O,onClick:function(){g()}},f.a.createElement(ee,{label:"Enter Max",style:{background:"hsla(0, 0%, 0%, 0.75)",color:"white",border:"none",borderRadius:"24px",padding:"0.5em 1em",marginTop:"-64px"}},f.a.createElement("span",null,v)))),"function"===typeof o?o():f.a.createElement(tn,null,f.a.createElement(rn,{type:"number",min:"0",step:"0.000000000000000001",error:!!O,placeholder:"0.0",onChange:function(e){return t(e.target.value)},onKeyPress:function(e){45===(e.which?e.which:e.keyCode)&&(e.preventDefault(),e.stopPropagation())},value:k}),!j&&x&&"ETH"!==w&&w?P?f.a.createElement(nn,null,C("pending")):f.a.createElement(nn,{onClick:Object(c.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,M.estimate.approve(z,b.ethers.constants.MaxUint256).catch((function(e){console.log("Error setting max token approval.")}));case 3:if(n=e.sent){e.next=9;break}return e.next=7,M.estimate.approve(z,G);case 7:n=e.sent,t=!0;case 9:M.approve(z,t?G:b.ethers.constants.MaxUint256,{gasLimit:Object(ue.b)(n,en)}).then((function(e){A(e,{approval:w})}));case 10:case"end":return e.stop()}}),e)})))},C("unlock")):null,f.a.createElement(an,{selected:!!w,onClick:function(){y||L(!0)}},f.a.createElement(cn,null,w?f.a.createElement(pe.a,{address:w}):null,f.a.createElement(Bn,null,N[w]&&N[w].symbol||C("selectToken")),!y&&f.a.createElement(un,{selected:!!w}))))),!y&&f.a.createElement(Mn,{isOpen:S,onDismiss:function(){L(!1)},urlAddedTokens:R,onTokenSelect:l,allBalances:r}))}function Mn(e){var n=e.isOpen,t=e.onDismiss,r=e.onTokenSelect,a=e.urlAddedTokens,i=Object(m.b)().t,c=Object(s.useState)(""),l=Object(u.a)(c,2),v=l[0],h=l[1],O=Object(Oe.d)(v).exchangeAddress,j=Object(Oe.c)(),y=Object(ce.k)(),E=y.account,w=y.chainId,x=Object(je.e)(),k=Object(je.d)(),R=Object.keys(j).map((function(e){if(x&&k[E]&&k[E][e]&&k[E][e].value){var n=1,t=k[j[e].exchangeAddress];if(t&&t[e]&&t[e].value&&t.ETH&&t.ETH.value){var r=new p.BigNumber(t[e].value.toString());n=new p.BigNumber(t.ETH.value.toString()).div(r)}var o=x.times(n).times(new p.BigNumber(10).pow(j[e].decimals).div(new p.BigNumber(10).pow(18)));return new p.BigNumber(k[E][e].value.toString()).times(o).div(new p.BigNumber(10).pow(j[e].decimals))}return null})),C=R&&Object.keys(j).reduce((function(e,n,t){return Object.assign(Object(o.a)({},n,R[t]),e)}),{}),T=Object(s.useMemo)((function(){return Object.keys(j).sort((function(e,n){if(j[e].symbol&&j[n].symbol){var t=j[e].symbol.toLowerCase(),r=j[n].symbol.toLowerCase();if(t==="ETH".toLowerCase()||r==="ETH".toLowerCase())return t===r?0:t==="ETH".toLowerCase()?-1:1;if(C[e]&&!C[n])return-1;if(C[n]&&!C[e])return 1;if(C[e]&&C[n]){var o=C[e],a=C[n];return o.gt(a)?-1:o.lt(a)?1:0}return t<r?-1:t>r?1:0}return 0})).map((function(e){var n,t;return"ETH"===e&&k[E]&&k[E][e]&&k[E][e].value?(n=Object(ue.d)(k[E][e].value),t=C[e]):k[E]&&k[E][e]&&k[E][e].value&&(n=Object(ue.f)(k[E][e].value,j[e].decimals),t=C[e]),{name:j[e].name,symbol:j[e].symbol,address:e,balance:n,usdBalance:t}}))}),[k,j,C,E]),B=Object(s.useMemo)((function(){return T.filter((function(e){var n="0x"===v.slice(0,2);return Object.keys(e).map((function(t){return"address"===t?n&&"string"===typeof e[t]&&!!e[t].match(new RegExp(g()(v),"i")):"string"===typeof e[t]&&!!e[t].match(new RegExp(g()(v),"i"))})).some((function(e){return e}))}))}),[T,v]);var S=Object(s.useRef)();function L(){h(""),t()}return f.a.createElement(be.a,{isOpen:n,onDismiss:L,minHeight:60,maxHeight:50,initialFocusRef:ae.isMobile?void 0:S},f.a.createElement(bn,null,f.a.createElement(pn,null,f.a.createElement("p",null,"Select Token"),f.a.createElement(hn,{onClick:L},f.a.createElement(vn,{alt:"close icon"}))),f.a.createElement(gn,null,f.a.createElement("img",{src:he.a,alt:"search"}),f.a.createElement(on,{ref:S,type:"text",placeholder:ae.isMobile?i("searchOrPasteMobile"):i("searchOrPaste"),onChange:function(e){var n=e.target.value,t=Object(ue.t)(n);h(t||n)}})),f.a.createElement(jn,null,Object(ue.t)(v)&&void 0===O?f.a.createElement(On,null,"Searching for Exchange..."):Object(ue.t)(v)&&O===b.ethers.constants.AddressZero?f.a.createElement(f.a.Fragment,null,f.a.createElement(On,null,i("noExchange")),f.a.createElement(On,null,f.a.createElement(d.b,{to:"/create-exchange/".concat(v)},i("createExchange")))):B.length?B.map((function(e){var n=e.address,o=e.symbol,i=e.name,c=e.balance,u=e.usdBalance,l=a&&a.hasOwnProperty(n),s="ETH"!==n&&Oe.a[w]&&!Oe.a[w].hasOwnProperty(n)&&!l;return f.a.createElement(yn,{key:n,onClick:function(){return function(e){h(""),r(e),t()}(n)}},f.a.createElement(En,null,f.a.createElement(pe.a,{address:n,size:"2rem"}),f.a.createElement(wn,null,f.a.createElement("div",null,f.a.createElement("span",{id:"symbol"},o),f.a.createElement(kn,null,l&&"(Added by URL)"," ",s&&"(Added by user)")),f.a.createElement(xn,null," ",i))),f.a.createElement(Tn,null,c?f.a.createElement(Rn,null,c&&(c>0||"<0.0001"===c)?c:"-"):E?f.a.createElement(Sn,{src:we.a,alt:"loader"}):"-",f.a.createElement(Cn,null,u&&!u.isNaN()?u.isZero()?"":u.lt(.01)?"<$0.01":"$"+Object(ue.e)(u):"")))})):f.a.createElement(On,null,i("noExchange")))))}},842:function(e,n,t){"use strict";var r=t(7),o=t(106),a=t(3),i=t(0),c=t.n(i),u=t(4),l=t(5);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=c.a.createElement("g",null,c.a.createElement("polygon",{fill:"#343434",points:"127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"}),c.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 0 0 212.32 127.962 287.959 127.962 154.158"}),c.a.createElement("polygon",{fill:"#3C3C3B",points:"127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"}),c.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 416.9052 127.962 312.1852 0 236.5852"}),c.a.createElement("polygon",{fill:"#141414",points:"127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"}),c.a.createElement("polygon",{fill:"#393939",points:"0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"})),m=function(e){var n=e.svgRef,t=e.title,r=f(e,["svgRef","title"]);return c.a.createElement("svg",s({width:"256px",height:"417px",viewBox:"0 0 256 417",preserveAspectRatio:"xMidYMid",ref:n},r),t?c.a.createElement("title",null,t):null,d)},b=c.a.forwardRef((function(e,n){return c.a.createElement(m,s({svgRef:n},e))}));t.p;function p(){var e=Object(a.a)(["\n  width: ",";\n  height: ",";\n"]);return p=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ",";\n  height: ",";\n"]);return v=function(){return e},e}function h(){var e=Object(a.a)(["\n  width: ",";\n  height: ",";\n  background-color: white;\n  border-radius: 1rem;\n"]);return h=function(){return e},e}t.d(n,"a",(function(){return E}));var g={},O=u.d.img(h(),(function(e){return e.size}),(function(e){return e.size})),j=u.d.span(v(),(function(e){return e.size}),(function(e){return e.size})),y=Object(u.d)(b)(p(),(function(e){return e.size}),(function(e){return e.size}));function E(e){var n=e.address,t=e.size,a=void 0===t?"1rem":t,u=Object(o.a)(e,["address","size"]),s=Object(i.useState)(!1),f=Object(r.a)(s,2),d=f[0],m=f[1],b="";return"ETH"===n?c.a.createElement(y,{size:a}):d||g[n]?c.a.createElement(j,Object.assign({},u,{size:a}),c.a.createElement("span",{role:"img","aria-label":"Thinking"},"\ud83e\udd14")):(b=function(e){return"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(Object(l.t)(e),"/logo.png")}(n.toLowerCase()),c.a.createElement(O,Object.assign({},u,{alt:n,src:b,size:a,onError:function(){g[n]=!0,m(!0)}})))}},913:function(e,n,t){"use strict";var r=/[|\\{}()[\]^$+*?.-]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},914:function(e,n,t){}}]);
//# sourceMappingURL=0.f03c2ae6.chunk.js.map
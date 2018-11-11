!function(){"use strict";function r(e,n){e.prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function O(e){return h(e)||j(e)}function L(e){return j(e)||false===e||true===e||h(e)}function _(e){return"function"==typeof e}function p(e){return"string"==typeof e}function j(e){return null===e}function h(e){return void 0===e}function V(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}var H={};function D(e,n){e.appendChild(n)}function Q(e,n,t){j(t)?D(e,n):e.insertBefore(n,t)}function M(e,n){e.removeChild(n)}function f(e){for(var n;void 0!==(n=e.shift());)n()}function X(e,n){for(var t,r;e;){if(2033&(t=e.flags))return e.dom;r=e.children,e=8192&t?2===e.childFlags?r:r[n?0:r.length-1]:4&t?r.$LI:r}return null}function B(e,n){var t=e.flags;if(2033&t)M(n,e.dom);else{var r=e.children;if(4&t)B(r.$LI,n);else if(8&t)B(r,n);else if(8192&t)if(2===e.childFlags)B(r,n);else for(var l=0,o=r.length;l<o;++l)B(r[l],n)}}function N(e,n,t){var r=e.flags;if(2033&r)Q(n,e.dom,t);else{var l=e.children;if(4&r)N(l.$LI,n,t);else if(8&r)N(l,n,t);else if(8192&r)if(2===e.childFlags)N(l,n,t);else for(var o=0,a=l.length;o<a;++o)N(l[o],n,t)}}function G(e,n,t){return e.constructor.getDerivedStateFromProps?V(t,e.constructor.getDerivedStateFromProps(n,t)):t}var v={componentComparator:null,createVNode:null,renderComplete:null},g="$";function m(e,n,t,r,l,o,a,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=i}function o(e,n,t,r,l,o,a,i){var u=void 0===l?1:l,s=new m(u,r,t,e,a,o,i,n),f=v.createVNode;return _(f)&&f(s),0===u&&function(e,n){var t,r=1;if(L(n))t=n;else if(d(n))r=16,t=n;else if(c(n)){for(var l=n.length,o=0;o<l;++o){var a=n[o];if(L(a)||c(a)){$(n,t=t||n.slice(0,o),o,"");break}if(d(a))(t=t||n.slice(0,o)).push(y(a,g+o));else{var i=a.key,u=0<(81920&a.flags),s=j(i),f=!s&&p(i)&&i[0]===g;u||s||f?(t=t||n.slice(0,o),(u||f)&&(a=K(a)),(s||f)&&(a.key=g+o),t.push(a)):t&&t.push(a),a.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=K(n)),r=2;e.children=t,e.childFlags=r}(s,s.children),s}function a(e,n,t,r,l){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var o=n.defaultProps;if(!O(o))for(var a in t||(t={}),o)h(t[a])&&(t[a]=o[a]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!O(i))if(l)for(var u in i)h(l[u])&&(l[u]=i[u]);else l=i}var s=new m(1,null,null,e,r,t,l,n),f=v.createVNode;return _(f)&&f(s),s}function y(e,n){return new m(1,O(e)?"":e,null,16,n,null,null,null)}function i(e,n,t){var r=o(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=q(),r.childFlags=2;break;case 16:r.children=[y(e)],r.childFlags=4}return r}function K(e){var n=-81921&e.flags,t=e.props;if(14&n&&!j(t)){var r=t;for(var l in t={},r)t[l]=r[l]}return 0==(8192&n)?new m(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,r=e.childFlags;if(2===r)n=K(t);else if(12&r){n=[];for(var l=0,o=t.length;l<o;++l)n.push(K(t[l]))}return i(n,r,e.key)}(e)}function q(){return y("",null)}function $(e,n,t,r){for(var l=e.length;t<l;t++){var o=e[t];if(!L(o)){var a=r+g+t;if(c(o))$(o,n,0,a);else{if(d(o))o=y(o,a);else{var i=o.key,u=p(i)&&i[0]===g;(81920&o.flags||u)&&(o=K(o)),o.flags|=65536,j(i)||u?o.key=a:o.key=r+i}n.push(o)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",b={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function u(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var s=u(0),k=u(null),C=u(true);function U(e,n,t){var r,l,o=t.$EV;n?(0===s[e]&&(k[e]=(r=e,l=function(e){var n="onClick"===r||"onDblClick"===r;if(n&&0!==e.button)e.stopPropagation();else{e.stopPropagation=w;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,r,l){for(var o=n;!j(o);){if(t&&o.disabled)return;var a=o.$EV;if(a){var i=a[r];if(i&&(l.dom=o,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}o=o.parentNode}}(e,e.target,n,r,t)}},document.addEventListener(P(r),l),l)),o||(o=t.$EV=u(null)),o[e]||++s[e],o[e]=n):o&&o[e]&&(0==--s[e]&&(document.removeEventListener(P(e),k[e]),k[e]=null),o[e]=null)}function P(e){return e.substr(2).toLowerCase()}function w(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function S(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function t(i,u){var e=function(e){var n=this.$V;if(n){var t=n.props||H,r=n.dom;if(p(i))S(t,i,e);else for(var l=0;l<i.length;++l)S(t,i[l],e);if(_(u)){var o=this.$V,a=o.props||H;u(a,r,false,o)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function J(e){return"checkbox"===e||"radio"===e}var z=t("onInput",x),Y=t(["onClick","onChange"],x);function Z(e){e.stopPropagation()}function x(e,n){var t=e.type,r=e.value,l=e.checked,o=e.multiple,a=e.defaultValue,i=!O(r);t&&t!==n.type&&n.setAttribute("type",t),O(o)||o===n.multiple||(n.multiple=o),O(a)||i||(n.defaultValue=a+""),J(t)?(i&&(n.value=r),O(l)||(n.checked=l)):i&&n.value!==r?(n.defaultValue=r,n.value=r):O(l)||(n.checked=l)}Z.wrapped=true;var ee=t("onChange",F);function F(e,n,t,r){var l=Boolean(e.multiple);if(O(e.multiple)||l===n.multiple||(n.multiple=l),1!==r.childFlags){var o=e.value;t&&O(o)&&(o=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(i=n).props||H,(f=i.dom).value=s.value,s.value===u||c(u)&&-1!==u.indexOf(s.value)?f.selected=true:O(u)&&O(s.selected)||(f.selected=s.selected||false);else{var r=n.children,l=n.flags;if(4&l)e(r.$LI,t);else if(8&l)e(r,t);else if(2===n.childFlags)e(r,t);else if(12&n.childFlags)for(var o=0,a=r.length;o<a;++o)e(r[o],t)}var i,u,s,f}(r,o)}}var ne=t("onInput",T),te=t("onChange");function T(e,n,t){var r=e.value,l=n.value;if(O(r)){if(t){var o=e.defaultValue;O(o)||o===l||(n.defaultValue=o,n.value=o)}}else l!==r&&(n.defaultValue=r,n.value=r)}function re(e,n,t,r,l,o){64&e?x(r,t):256&e?F(r,t,l,n):128&e&&T(r,t,l),o&&(t.$V=n)}function le(e){return e.type&&J(e.type)?!O(e.checked):!O(e.value)}function I(e){e&&(_(e)?e(null):e.current&&(e.current=null))}function oe(e,n,t){var r,l;e&&(_(e)?(r=n,l=e,t.push(function(){l(r)})):void 0!==e.current&&(e.current=n))}function A(e,n){W(e),n&&B(e,n)}function W(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var l=e.props;I(n);var o=e.childFlags;if(!j(l))for(var a=Object.keys(l),i=0,u=a.length;i<u;i++){var s=a[i];C[s]&&U(s,null,e.dom)}12&o?E(r):2===o&&W(r)}else r&&(4&t?(_(r.componentWillUnmount)&&r.componentWillUnmount(),I(e.ref),r.$UN=true,W(r.$LI)):8&t?(!O(n=e.ref)&&_(n.onComponentWillUnmount)&&n.onComponentWillUnmount(X(e,true),e.props||H),W(r)):1024&t?A(r,e.ref):8192&t&&12&e.childFlags&&E(r))}function E(e){for(var n=0,t=e.length;n<t;++n)W(e[n])}function R(e){e.textContent=""}function ae(e,n,t){E(t),8192&n.flags?B(n,e):R(e)}function ie(u,e,n,t,r,l,o){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===u)break;var a=O(n)?"":n;t[u]!==a&&(t[u]=a);break;case"style":!function(e,n,t){if(O(n))t.removeAttribute("style");else{var r,l,o=t.style;if(p(n))o.cssText=n;else if(O(e)||p(e))for(r in n)l=n[r],o.setProperty(r,l);else{for(r in n)(l=n[r])!==e[r]&&o.setProperty(r,l);for(r in e)O(n[r])&&o.removeProperty(r)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(O(s)||(f=t,c=s,(d=document.createElement("i")).innerHTML=c,d.innerHTML===f.innerHTML)||(j(o)||(12&o.childFlags?E(o.children):2===o.childFlags&&W(o.children),o.children=null,o.childFlags=1),t.innerHTML=s));break;default:C[u]?e&&n&&!_(e)&&!_(n)&&e.event===n.event&&e.data===n.data||U(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t){var r,l,o=u.toLowerCase();if(_(n)||O(n)){var a=t[o];a&&a.wrapped||(t[o]=n)}else{var i=n.event;_(i)&&(t[o]=(r=i,l=n,function(e){r(l.data,e)}))}}(0,n,t):O(n)?t.removeAttribute(u):r&&b[u]?t.setAttributeNS(b[u],u,n):t.setAttribute(u,n)}var f,c,d}function ue(e,n,t){var r=se(e.render(n,e.state,t)),l=t;return _(e.getChildContext)&&(l=V(t,e.getChildContext())),e.$CX=l,r}function se(e){return L(e)?e=q():d(e)?e=y(e,null):c(e)?e=i(e,0,null):16384&e.flags&&(e=K(e)),e}function fe(e,n,t,r,l,o){var a,i,u,s,f,c,d,p,h,v,g,m,y,$,b,k,C,U,P,w,S,x,F,N,L,V,D,M,B,T,I,A,W,E,R=e.flags|=16384;481&R?function(e,n,t,r,l,o){var a=e.flags,i=e.props,u=e.className,s=e.ref,f=e.children,c=e.childFlags;r=r||0<(32&a);var d,p=(d=e.type,r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,O(u)||""===u||(r?p.setAttribute("class",u):p.className=u),16===c)de(p,f);else if(1!==c){var h=r&&"foreignObject"!==e.type;2===c?(16384&f.flags&&(e.children=f=K(f)),fe(f,p,t,h,null,o)):8!==c&&4!==c||pe(f,p,t,h,null,o)}j(n)||Q(n,p,l),j(i)||function(e,n,t,r,l){var o,a,i,u,s,f,c=false,d=0<(448&n);for(var p in d&&(c=le(t))&&(a=r,i=t,f=s=u=void 0,64&(o=n)?(f=a,J(i.type)?(f.onchange=Y,f.onclick=Z):f.oninput=z):256&o?a.onchange=ee:128&o&&(s=i,(u=a).oninput=ne,s.onChange&&(u.onchange=te))),t)ie(p,null,t[p],r,l,c,null);d&&re(n,e,r,t,true,c)}(e,a,i,p,r),oe(s,p,o)}(e,n,t,r,l,o):4&R?(V=n,D=t,M=r,B=l,T=o,fe((I=function(e,n,t,r,l,o){var a=new n(t,r),i=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=l,a.$L=o,(e.children=a).$BS=false,a.context=r,a.props===H&&(a.props=t),i)a.state=G(a,t,a.state);else if(_(a.componentWillMount)){a.$BR=true,a.componentWillMount();var u=a.$PS;if(!j(u)){var s=a.state;if(j(s))a.state=u;else for(var f in u)s[f]=u[f];a.$PS=null}a.$BR=false}return a.$LI=ue(a,t,r),a}(L=e,L.type,L.props||H,D,M,T)).$LI,V,I.$CX,M,B,T),oe(L.ref,A=I,W=T),_(A.componentDidMount)&&W.push((E=A,function(){E.$UPD=true,E.componentDidMount(),E.$UPD=false})),I.$UPD=false):8&R?(h=n,v=t,g=r,m=l,y=o,$=(p=e).type,b=p.props||H,k=p.ref,C=se(32768&p.flags?$(b,k,v):$(b,v)),fe(p.children=C,h,v,g,m,y),U=b,w=p,S=y,O(P=k)||(_(P.onComponentWillMount)&&P.onComponentWillMount(U),_(P.onComponentDidMount)&&S.push((x=P,F=w,N=U,function(){x.onComponentDidMount(X(F,true),N)})))):512&R||16&R?ce(e,n,l):8192&R?(i=n,u=t,s=r,f=l,c=o,d=(a=e).children,2===a.childFlags?fe(d,i,f,s,f,c):pe(d,i,u,s,f,c)):1024&R&&function(e,n,t,r,l){fe(e.children,e.ref,n,false,null,l);var o=q();ce(o,t,r),e.dom=o.dom}(e,t,n,l,o)}function ce(e,n,t){var r=e.dom=document.createTextNode(e.children);j(n)||Q(n,r,t)}function de(e,n){e.textContent=n}function pe(e,n,t,r,l,o){for(var a=0,i=e.length;a<i;++a){var u=e[a];16384&u.flags&&(e[a]=u=K(u)),fe(u,n,t,r,l,o)}}function he(e,n,t,r,l,o,a){var i,u,s,f,c,d,p,h,v,g,m,y,$,b,k,C,U,P,w,S,x,F,N=n.flags|=16384;e.flags!==N||e.type!==n.type||e.key!==n.key||0!=(2048&N)?16384&e.flags?(u=n,s=t,f=r,c=l,d=a,W(i=e),0!=(u.flags&i.flags&2033)?(fe(u,null,f,c,null,d),p=s,h=u.dom,v=i.dom,p.replaceChild(h,v)):(fe(u,s,f,c,X(i,true),d),B(i,s))):fe(n,t,r,l,o,a):481&N?function(e,n,t,r,l,o){var a,i=e.dom,u=e.props,s=n.props,f=false,c=false;if(n.dom=i,r=r||0<(32&l),u!==s){var d=u||H;if((a=s||H)!==H)for(var p in(f=0<(448&l))&&(c=le(a)),a){var h=d[p],v=a[p];h!==v&&ie(p,h,v,i,r,c,e)}if(d!==H)for(var g in d)O(a[g])&&!O(d[g])&&ie(g,d[g],null,i,r,c,e)}var m,y,$=n.children,b=n.className;e.className!==b&&(O(b)?i.removeAttribute("class"):r?i.setAttribute("class",b):i.className=b),4096&l?(y=$,(m=i).textContent!==y&&(m.textContent=y)):ve(e.childFlags,n.childFlags,e.children,$,i,t,r&&"foreignObject"!==n.type,null,e,o),f&&re(l,n,i,a,false,c);var k=n.ref,C=e.ref;C!==k&&(I(C),oe(k,i,o))}(e,n,r,l,N,a):4&N?function(e,n,t,r,l,o,a){var i=n.children=e.children;if(!j(i)){i.$L=a;var u=n.props||H,s=n.ref,f=e.ref,c=i.state;if(i.$UPD=true,!i.$N){if(_(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,r),i.$UN)return;i.$BR=false}j(i.$PS)||(c=V(c,i.$PS),i.$PS=null)}ge(i,c,u,t,r,l,false,o,a),f!==s&&(I(f),oe(s,i,a)),i.$UPD=false}}(e,n,t,r,l,o,a):8&N?function(e,n,t,r,l,o,a){var i=true,u=n.props||H,s=n.ref,f=e.props,c=!O(s),d=e.children;if(c&&_(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(f,u)),false!==i){c&&_(s.onComponentWillUpdate)&&s.onComponentWillUpdate(f,u);var p=se(n.type(u,r));he(d,p,t,r,l,o,a),n.children=p,c&&_(s.onComponentDidUpdate)&&s.onComponentDidUpdate(f,u)}else n.children=d}(e,n,t,r,l,o,a):16&N?(w=e,x=(S=n).children,F=w.dom,x!==w.children&&(F.nodeValue=x),S.dom=F):512&N?n.dom=e.dom:8192&N?(m=n,y=t,$=r,b=l,k=a,C=(g=e).children,U=0!=(2&m.childFlags),P=null,12&g.childFlags&&(U||!U&&m.children.length>C.length)&&(P=X(C[C.length-1],false).nextSibling),ve(g.childFlags,m.childFlags,C,m.children,y,$,b,P,g,k)):function(e,n,t,r){var l=e.ref,o=n.ref,a=n.children;if(ve(e.childFlags,n.childFlags,e.children,a,l,t,false,null,e,r),n.dom=e.dom,l!==o&&!L(a)){var i=a.dom;M(l,i),D(o,i)}}(e,n,r,a)}function ve(e,n,t,r,l,o,a,i,u,s){switch(e){case 2:switch(n){case 2:he(t,r,l,o,a,i,s);break;case 1:A(t,l);break;case 16:W(t),de(l,r);break;default:g=r,m=l,y=o,$=a,b=s,W(v=t),pe(g,m,y,$,X(v,true),b),B(v,m)}break;case 1:switch(n){case 2:fe(r,l,o,a,i,s);break;case 1:break;case 16:de(l,r);break;default:pe(r,l,o,a,i,s)}break;case 16:switch(n){case 16:h=l,(d=t)!==(p=r)&&(""!==d?h.firstChild.nodeValue=p:h.textContent=p);break;case 2:R(l),fe(r,l,o,a,i,s);break;case 1:R(l);break;default:R(l),pe(r,l,o,a,i,s)}break;default:switch(n){case 16:E(t),de(l,r);break;case 2:ae(l,u,t),fe(r,l,o,a,i,s);break;case 1:ae(l,u,t);break;default:var f=0|t.length,c=0|r.length;0===f?0<c&&pe(r,l,o,a,i,s):0===c?ae(l,u,t):8===n&&8===e?function(e,n,t,r,l,o,a,i,u,s){var f,c,d=o-1,p=a-1,h=0,v=0,g=e[v],m=n[v];e:{for(;g.key===m.key;){if(16384&m.flags&&(n[v]=m=K(m)),he(g,m,t,r,l,i,s),e[v]=m,d<++v||p<v)break e;g=e[v],m=n[v]}for(g=e[d],m=n[p];g.key===m.key;){if(16384&m.flags&&(n[p]=m=K(m)),he(g,m,t,r,l,i,s),e[d]=m,p--,--d<v||p<v)break e;g=e[d],m=n[p]}}if(d<v){if(v<=p)for(c=(f=p+1)<a?X(n[f],true):i;v<=p;)16384&(m=n[v]).flags&&(n[v]=m=K(m)),++v,fe(m,t,r,l,c,s)}else if(p<v)for(;v<=d;)A(e[v++],t);else{for(var y=v,$=v,b=d-v+1,k=p-v+1,C=[];h++<=k;)C.push(0);var U=b===o,P=false,w=0,S=0;if(a<4||(b|k)<32)for(h=y;h<=d;++h)if(g=e[h],S<k){for(v=$;v<=p;v++)if(m=n[v],g.key===m.key){if(C[v-$]=h+1,U)for(U=false;y<h;)A(e[y++],t);v<w?P=true:w=v,16384&m.flags&&(n[v]=m=K(m)),he(g,m,t,r,l,i,s),++S;break}!U&&p<v&&A(g,t)}else U||A(g,t);else{var x={};for(h=$;h<=p;++h)x[n[h].key]=h;for(h=y;h<=d;++h)if(g=e[h],S<k)if(void 0!==(v=x[g.key])){if(U)for(U=false;y<h;)A(e[y++],t);m=n[v],C[v-$]=h+1,v<w?P=true:w=v,16384&m.flags&&(n[v]=m=K(m)),he(g,m,t,r,l,i,s),++S}else U||A(g,t);else U||A(g,t)}if(U)ae(t,u,e),pe(n,t,r,l,i,s);else if(P){var F=function(e){var n,t,r,l,o,a=e.slice(),i=[0],u=e.length;for(n=0;n<u;++n){var s=e[n];if(0!==s){if(e[t=i[i.length-1]]<s){a[n]=t,i.push(n);continue}for(r=0,l=i.length-1;r<l;)e[i[o=(r+l)/2|0]]<s?r=o+1:l=o;s<e[i[r]]&&(0<r&&(a[n]=i[r-1]),i[r]=n)}}for(l=i[(r=i.length)-1];0<r--;)l=a[i[r]=l];return i}(C);for(v=F.length-1,h=k-1;0<=h;h--)0===C[h]?(16384&(m=n[w=h+$]).flags&&(n[w]=m=K(m)),fe(m,t,r,l,(f=w+1)<a?X(n[f],true):i,s)):v<0||h!==F[v]?N(m=n[w=h+$],t,(f=w+1)<a?X(n[f],true):i):v--}else if(S!==k)for(h=k-1;0<=h;h--)0===C[h]&&(16384&(m=n[w=h+$]).flags&&(n[w]=m=K(m)),fe(m,t,r,l,(f=w+1)<a?X(n[f],true):i,s))}}(t,r,l,o,a,f,c,i,u,s):function(e,n,t,r,l,o,a,i,u){for(var s,f,c=a<o?a:o,d=0;d<c;++d)s=n[d],f=e[d],16384&s.flags&&(s=n[d]=K(s)),he(f,s,t,r,l,i,u),e[d]=s;if(o<a)for(d=c;d<a;++d)16384&(s=n[d]).flags&&(s=n[d]=K(s)),fe(s,t,r,l,i,u);else if(a<o)for(d=c;d<o;++d)A(e[d],t)}(t,r,l,o,a,f,c,i,s)}}var d,p,h,v,g,m,y,$,b}function ge(e,n,t,r,l,o,a,i,u){var s,f,c,d,p=e.state,h=e.props,v=Boolean(e.$N),g=_(e.shouldComponentUpdate);if(v&&(n=G(e,t,n!==p?V(p,n):n)),a||!g||g&&e.shouldComponentUpdate(t,n,l)){!v&&_(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,y=ue(e,t,l);v&&_(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(h,p)),he(e.$LI,y,r,e.$CX,o,i,u),e.$LI=y,_(e.componentDidUpdate)&&(s=e,f=h,c=p,d=m,u.push(function(){s.componentDidUpdate(f,c,d)}))}else e.props=t,e.state=n,e.context=l}function me(e,n,t,r){var l,o,a,i,u,s;void 0===t&&(t=null),void 0===r&&(r=H),l=e,a=t,i=r,u=[],O(s=(o=n).$V)?O(l)||(16384&l.flags&&(l=K(l)),fe(l,o,i,false,null,u),s=o.$V=l):O(l)?(A(s,o),o.$V=null):(16384&l.flags&&(l=K(l)),he(s,l,o,i,false,null,u),s=o.$V=l),0<u.length&&f(u),_(a)&&a(),_(v.renderComplete)&&v.renderComplete(s,o)}"undefined"!=typeof document&&document.body;var ye=[],$e="undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);function be(e,n,t,r){_(n)&&(n=n(e.state,e.props,e.context));var l=e.$PS;if(O(l))e.$PS=n;else for(var o in n)l[o]=n[o];if(e.$BR)_(t)&&e.$L.push(t.bind(e));else{if(!e.$UPD&&(e.$UPD=true,0===ye.length))return void Ue(e,r,t);if(1===ye.push(e)&&$e(Ce),_(t)){var a=e.$QU;a||(a=e.$QU=[]),a.push(t)}}}function ke(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function Ce(){for(var e;e=ye.pop();)Ue(e,false,e.$QU?ke.bind(null,e):null)}function Ue(e,n,t){if(!e.$UN){if(n||!e.$BR){var r=e.$PS;e.$PS=null,e.$UPD=true;var l=[];ge(e,V(e.state,r),e.props,X(e.$LI,true).parentNode,e.context,e.$SVG,n,null,l),e.$UPD=false,0<l.length&&f(l)}else e.state=e.$PS,e.$PS=null;_(t)&&t.call(e)}}var Pe=function(e,n){this.state=null,this.$BR=false,this.$BS=true,this.$PS=null,this.$LI=null,this.$UN=false,this.$CX=null,this.$UPD=true,this.$QU=null,this.$N=false,this.$L=null,this.$SVG=false,this.props=e||H,this.context=n||H};Pe.prototype.forceUpdate=function(e){this.$UN||be(this,{},e,true)},Pe.prototype.setState=function(e,n){this.$UN||this.$BS||be(this,e,n,false)},Pe.prototype.render=function(e,n,t){return null},Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),uibench.init("Inferno [same as react]","6.2.0");var we=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind(l(l(n))),n}r(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(e,n){return this.props.text!==e.text},n.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},n.render=function(){return o(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},e}(Pe),Se=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data,n=e.active?"TableRow active":"TableRow",t=e.props,r=[a(2,we,{text:"#"+e.id},-1,null)],l=0;l<t.length;l++)r.push(a(2,we,{text:t[l]},l,null));return o(1,"tr",n,r,0,{"data-id":e.id},null,null)},n}(Pe),xe=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(a(2,Se,{data:r},r.id,null))}return o(1,"table","Table",o(1,"tbody",null,n,0,null,null,null),2,null,null,null)},n}(Pe),Fe=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){var e=this.props.data,n=e.time,t={"border-radius":(n%10).toString()+"px",background:"rgba(0,0,0,"+(.5+n%10/10).toString()+")"};return o(1,"div","AnimBox",null,1,{"data-id":e.id,style:t},null,null)},n}(Pe),Ne=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(a(2,Fe,{data:r},r.id,null))}return o(1,"div","Anim",n,0,null,null,null)},n}(Pe),Le=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){return o(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},n}(Pe),Ve=function(e){function l(){return e.apply(this,arguments)||this}r(l,e);var n=l.prototype;return n.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},n.render=function(){for(var e=this.props.data,n=[],t=0;t<e.children.length;t++){var r=e.children[t];r.container?n.push(a(2,l,{data:r},r.id,null)):n.push(a(2,Le,{data:r},r.id,null))}return o(1,"ul","TreeNode",n,0,null,null,null)},l}(Pe),De=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){return o(1,"div","Tree",a(2,Ve,{data:this.props.data.root},null,null),2,null,null,null)},n}(Pe),Me=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},t.render=function(){var e,n=this.props.data,t=n.location;return"table"===t?e=a(2,xe,{data:n.table},null,null):"anim"===t?e=a(2,Ne,{data:n.anim},null,null):"tree"===t&&(e=a(2,De,{data:n.tree},null,null)),o(1,"div","Main",e,0,null,null,null)},n}(Pe);document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector("#App");uibench.run(function(e){me(a(2,Me,{data:e},null,null),n)},function(e){me(o(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)})})}();

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{1599:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2265),o=n(8575),i=n(1188),l=e=>{var t,n;let l,u;let{present:s,children:c}=e,d=function(e){var t,n;let[o,l]=r.useState(),u=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=u.current,n=s.current;if(n!==e){let r=c.current,o=a(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),s.current=e}},[e,p]),(0,i.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(u.current).includes(e.animationName);if(e.target===o&&r&&(p("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=a(u.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),l(e)},[])}}(s),p="function"==typeof c?c({present:d.isPresent}):r.Children.only(c),f=(0,o.e)(d.ref,(l=null===(t=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in l&&l.isReactWarning?p.ref:(l=null===(n=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in l&&l.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof c||d.isPresent?r.cloneElement(p,{ref:f}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},1312:function(e,t,n){n.d(t,{VY:function(){return z},fC:function(){return B},xz:function(){return W},zt:function(){return F}});var r=n(2265),o=n(6741),i=n(8575),l=n(3966),a=n(5278),u=n(9255),s=n(9961),c=(n(3832),n(1599)),d=n(6840),p=n(7053),f=n(886),v=n(5098),m=n(7437),[g,h]=(0,l.b)("Tooltip",[s.D7]),x=(0,s.D7)(),y="TooltipProvider",w="tooltip.open",[b,T]=g(y),E=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=r.useState(!0),s=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,m.jsx)(b,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:s,onPointerInTransitChange:r.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:l})};E.displayName=y;var C="Tooltip",[M,N]=g(C),O=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,d=T(C,e.__scopeTooltip),p=x(t),[v,g]=r.useState(null),h=(0,u.M)(),y=r.useRef(0),b=null!=a?a:d.disableHoverableContent,E=null!=c?c:d.delayDuration,N=r.useRef(!1),[O=!1,R]=(0,f.T)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(w))):d.onClose(),null==l||l(e)}}),k=r.useMemo(()=>O?N.current?"delayed-open":"instant-open":"closed",[O]),L=r.useCallback(()=>{window.clearTimeout(y.current),y.current=0,N.current=!1,R(!0)},[R]),_=r.useCallback(()=>{window.clearTimeout(y.current),y.current=0,R(!1)},[R]),P=r.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{N.current=!0,R(!0),y.current=0},E)},[E,R]);return r.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),(0,m.jsx)(s.fC,{...p,children:(0,m.jsx)(M,{scope:t,contentId:h,open:O,stateAttribute:k,trigger:v,onTriggerChange:g,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?P():L()},[d.isOpenDelayed,P,L]),onTriggerLeave:r.useCallback(()=>{b?_():(window.clearTimeout(y.current),y.current=0)},[_,b]),onOpen:L,onClose:_,disableHoverableContent:b,children:n})})};O.displayName=C;var R="TooltipTrigger",k=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...l}=e,a=N(R,n),u=T(R,n),c=x(n),p=r.useRef(null),f=(0,i.e)(t,p,a.onTriggerChange),v=r.useRef(!1),g=r.useRef(!1),h=r.useCallback(()=>v.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),(0,m.jsx)(s.ee,{asChild:!0,...c,children:(0,m.jsx)(d.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||u.isPointerInTransitRef.current||(a.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{v.current||a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});k.displayName=R;var[L,_]=g("TooltipPortal",{forceMount:void 0}),P="TooltipContent",j=r.forwardRef((e,t)=>{let n=_(P,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,l=N(P,e.__scopeTooltip);return(0,m.jsx)(c.z,{present:r||l.open,children:l.disableHoverableContent?(0,m.jsx)(U,{side:o,...i,ref:t}):(0,m.jsx)(I,{side:o,...i,ref:t})})}),I=r.forwardRef((e,t)=>{let n=N(P,e.__scopeTooltip),o=T(P,e.__scopeTooltip),l=r.useRef(null),a=(0,i.e)(t,l),[u,s]=r.useState(null),{trigger:c,onClose:d}=n,p=l.current,{onPointerInTransitChange:f}=o,v=r.useCallback(()=>{s(null),f(!1)},[f]),g=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),f(!0)},[f]);return r.useEffect(()=>()=>v(),[v]),r.useEffect(()=>{if(c&&p){let e=e=>g(e,p),t=e=>g(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,g,v]),r.useEffect(()=>{if(u){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>r!=s>r&&n<(u-l)*(r-a)/(s-a)+l&&(o=!o)}return o}(n,u);r?v():o&&(v(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,u,d,v]),(0,m.jsx)(U,{...e,ref:a})}),[D,A]=g(C,{isInside:!1}),U=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:u,...c}=e,d=N(P,n),f=x(n),{onClose:g}=d;return r.useEffect(()=>(document.addEventListener(w,g),()=>document.removeEventListener(w,g)),[g]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,m.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:g,children:(0,m.jsxs)(s.VY,{"data-state":d.stateAttribute,...f,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,m.jsx)(p.A4,{children:o}),(0,m.jsx)(D,{scope:n,isInside:!0,children:(0,m.jsx)(v.f,{id:d.contentId,role:"tooltip",children:i||o})})]})})});j.displayName=P;var S="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=x(n);return A(S,n).isInside?null:(0,m.jsx)(s.Eh,{...o,...r,ref:t})}).displayName=S;var F=E,B=O,W=k,z=j}}]);
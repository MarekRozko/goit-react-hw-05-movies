"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{877:function(t,e,n){n.d(e,{BP:function(){return p},Df:function(){return o},Jh:function(){return l},lF:function(){return h},pf:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(912),u="f632edb05cc91b97d9ccb27096819906",i="https://api.themoviedb.org/3/",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"trending/movie/week"),{params:{api_key:u}});case 2:return e=t.sent,t.next=5,e.data.results;case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,s.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=").concat(n),{params:{api_key:u,language:"en-US",query:e,page:1}});case 3:return r=t.sent,t.next=6,r.data.results;case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},392:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),i=n(689),o=n(877),p=n(474),f="cast_actorItem__ckSWd",h="cast_actorList__fFVeB",l="cast_actorCharacter__g4xHi",v="cast_actorName__DjUJO",d=n(184),m=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],m=(0,u.useState)(!1),x=(0,a.Z)(m,2),_=x[0],k=x[1],g=(0,u.useState)(null),w=(0,a.Z)(g,2),Z=w[0],b=w[1],y=(0,i.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.prev=1,t.next=4,(0,o.lF)(y);case 4:e=t.sent,n=e.data,c(n.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),b(t.t0.massage);case 12:return t.prev=12,k(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t(y)}),[y]),(0,d.jsxs)("ul",{className:h,children:[_&&(0,d.jsx)(p.Z,{}),Z&&(0,d.jsx)("p",{children:Z.massage}),n.length>0?n.map((function(t){var e=t.id,n=t.profile_path,r=t.name,a=t.character;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:null===n?"https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg":"https://image.tmdb.org/t/p/w500".concat(n),alt:r,width:"220",height:"300"})}),(0,d.jsx)("p",{className:v,children:r}),(0,d.jsxs)("p",{className:l,children:["Character: ",a]})]},e)})):(0,d.jsx)("p",{children:"No cast"})]})}}}]);
//# sourceMappingURL=392.506e5dd8.chunk.js.map
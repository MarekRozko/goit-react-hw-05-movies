"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{877:function(e,t,n){n.d(t,{BP:function(){return p},Df:function(){return o},Jh:function(){return h},lF:function(){return l},pf:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(912),s="f632edb05cc91b97d9ccb27096819906",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"trending/movie/week"),{params:{api_key:s}});case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=").concat(n),{params:{api_key:s,language:"en-US",query:t,page:1}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},400:function(e,t,n){n.d(t,{F:function(){return c}});var r="moviespost_text__CplLP",a=n(184),c=function(e){var t=e.poster_path,n=e.title,c=e.id;return(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:null===t?"https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg":"https://image.tmdb.org/t/p/w500".concat(t),alt:n,width:"320"},c),(0,a.jsx)("p",{className:r,children:n})]})}},779:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),a=n(791),c=n(87),u=n(689),s=n(877),i=n(474),o="moviespage_btnSearch__FvTkz",p="moviespage_inputSearch__MNpGo",f="moviespage_linkSearch__fw9L2",l="moviespage_itemSearch__OT8O5",h="moviespage_gallerySearch__1zsrq",m=n(400),v=n(184),d=function(){var e,t=(0,a.useState)([]),n=(0,r.Z)(t,2),d=n[0],_=n[1],x=(0,a.useState)(""),g=(0,r.Z)(x,2),k=g[0],w=g[1],b=(0,c.lr)(),y=(0,r.Z)(b,2),j=y[0],Z=y[1],S=(0,a.useState)(!1),N=(0,r.Z)(S,2),F=N[0],q=N[1],C=null!==(e=j.get("name"))&&void 0!==e?e:"",P=(0,u.TH)();(0,a.useEffect)((function(){""!==k&&(q(!0),(0,s.BP)(k).then((function(e){return _(e)})).finally(q(!1)))}),[k]),(0,a.useEffect)((function(){""!==C&&w(C)}),[C]);return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Search Movies"}),(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,n=e.target.name.value;w(n),Z(""!==(t=n)?{name:t}:{}),e.target.reset()},children:[(0,v.jsx)("input",{className:p,type:"text",name:"name",placeholder:"Search movies..."}),(0,v.jsx)("button",{type:"submit",className:o,children:"Search"})]}),F&&(0,v.jsx)(i.Z,{}),(0,v.jsx)(u.j3,{}),(0,v.jsx)("ul",{className:h,children:null===d||void 0===d?void 0:d.map((function(e){return(0,v.jsx)("li",{className:l,children:(0,v.jsx)(c.rU,{className:f,to:"".concat(e.id),state:{from:P},children:(0,m.F)(e)},e.id)},e.id)}))})]})}}}]);
//# sourceMappingURL=779.5ca5c67f.chunk.js.map
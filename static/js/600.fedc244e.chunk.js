"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{877:function(e,t,n){n.d(t,{BP:function(){return p},Df:function(){return u},Jh:function(){return f},lF:function(){return l},pf:function(){return v}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="f632edb05cc91b97d9ccb27096819906",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"trending/movie/week"),{params:{api_key:i}});case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,c.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(n),{params:{api_key:i,language:"en-US",query:t,page:1}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},600:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(877),o=n(791),u=n(87),p=n(689),v=n(474),l={backLink:"detailsMovies_backLink__FwccS",cast:"detailsMovies_cast__J-e1t",reviews:"detailsMovies_reviews__iTiVy",postMovie:"detailsMovies_postMovie__OqZsQ",postContainer:"detailsMovies_postContainer__SWdqs",textContainer:"detailsMovies_textContainer__N7bV0",overview:"detailsMovies_overview__gNcHP",inform:"detailsMovies_inform__i7QjA"},f=n(184),d=function(){var e,t,n=(0,o.useState)(null),s=(0,a.Z)(n,2),d=s[0],h=s[1],m=(0,o.useState)(!1),_=(0,a.Z)(m,2),x=_[0],w=_[1],k=(0,o.useState)(null),g=(0,a.Z)(k,2),j=g[0],b=g[1],Z=(0,p.UO)().movieId,y=(0,p.TH)(),M=(null===(e=y.state)||void 0===e?void 0:e.from)||"/";if((0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,i.pf)(Z);case 4:t=e.sent,n=t.data,h(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b(e.t0.massage);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(Z)}),[Z]),d){var N=d.poster_path,C=d.genres.map((function(e){return e.name})).join(", "),S=(null===(t=y.state)||void 0===t?void 0:t.from)||"/";return(0,f.jsxs)("div",{children:[(0,f.jsx)(u.rU,{to:S,className:l.backLink,children:"Go back"}),(0,f.jsxs)("div",{className:l.postContainer,children:[x&&(0,f.jsx)(v.Z,{}),j&&(0,f.jsx)("p",{children:j.massage}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:void 0===N?"https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg":"https://image.tmdb.org/t/p/w500".concat(N),alt:"Poster",width:"240",className:l.postMovie})}),(0,f.jsxs)("div",{className:l.textContainer,children:[(0,f.jsx)("h3",{className:l.title,children:d.title}),(0,f.jsxs)("h3",{children:["Rating ",d.vote_average]}),(0,f.jsx)("h3",{children:"Overwiev"}),(0,f.jsx)("p",{className:l.overview,children:d.overview}),(0,f.jsx)("h3",{children:"Genres"}),C]})]}),(0,f.jsx)("p",{className:l.inform,children:"Additional information:"}),(0,f.jsx)(u.rU,{state:{from:M},to:"cast",className:l.cast,children:"Cast"}),(0,f.jsx)(u.rU,{state:{from:M},to:"reviews",className:l.reviews,children:"Reviews"}),(0,f.jsx)(p.j3,{})]})}}}}]);
//# sourceMappingURL=600.fedc244e.chunk.js.map
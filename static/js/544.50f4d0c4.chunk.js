"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{2274:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return s},Y5:function(){return f},vw:function(){return o},wL:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="ae6c62c72a5978b94a24875b7ee5ebd9",o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8615:function(n,t,e){e.d(t,{k:function(){return d}});var r,a,u,c=e(7689),i=e(168),o=e(5706),s=e(1087),f=o.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),p=o.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,o.Z)(s.rU)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: purple;\n  }\n"]))),v=e(184);function d(n){var t=n.films,e=(0,c.TH)();return(0,v.jsx)(f,{children:t.map((function(n){return(0,v.jsx)(p,{children:(0,v.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(9439),a=e(2791),u=e(8615),c=e(2274),i=e(1362),o=e(184);function s(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],v=p[1];return(0,a.useEffect)((function(){v(!0),(0,c.vw)().then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(u.k,{films:e}),l&&(0,o.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=544.50f4d0c4.chunk.js.map
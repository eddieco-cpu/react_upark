(this.webpackJsonpreact_staging=this.webpackJsonpreact_staging||[]).push([[0],{41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(2),r=a(16),s=a.n(r),o=a(18),i=a(3),j=a(4),u=a(6),l=a(5),b=a(17),p=a.n(b),h=(a(41),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("h2",{className:"title",children:"Welcome"})}}]),a}(c.Component)),g=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={page1:[]},t.getParkData=function(){p.a.get("https://data.ntpc.gov.tw/api/datasets/B1464EF0-9C7C-4A6F-ABF7-6BDF32847E68/json?page=0&size=400").then((function(e){t.setState({page1:e.data}),console.log("--- res ---",e.data)})).catch((function(t){return console.warn(t)}))},t.showParkData=function(){var e=t.state.page1;console.log("page1",e);var a=[];a.push.apply(a,Object(o.a)(e.filter((function(t){return"\u65b0\u5e97\u5340"===t.AREA})))),console.log("\u65b0\u5e97",a)},t}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsxs)("main",{className:"wrapper",children:[Object(n.jsxs)("p",{children:["\u65b0\u5317\u5e02\u9818\u6709\u505c\u8eca\u5834\u767b\u8a18\u8b49\u4e4b\u8def\u5916\u505c\u8eca\u5834\uff1a",Object(n.jsx)("button",{onClick:this.getParkData,children:"get data"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:this.showParkData,children:"show data"})]}),Object(n.jsx)("br",{})]})]})}}]),a}(c.Component);a(42);s.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.600462a6.chunk.js.map
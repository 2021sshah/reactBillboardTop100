(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(3),o=n.n(a),s=(n(24),n(4)),i=n(6),l=n(5),d=n(18),j=n.n(d),b=n.p+"static/media/logo.c3a347f7.svg",h=(n(44),n(1));var f=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.useEffect((function(){j.a.get("http://localhost:8081/random").then((function(e){c(e.data.data)})).catch((function(e){}))}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:b,className:"App-logo",alt:"logo"}),Object(h.jsx)("h1",{children:"Songs from the Top 100!"}),Object(h.jsx)("h4",{children:"Rank from MOST to LEAST Popular -- Courtesy of Siddharth Shah"}),Object(h.jsx)(l.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(n),r=t.splice(e.source.index,1),a=Object(i.a)(r,1)[0];t.splice(e.destination.index,0,a);for(var o=!0,s=0;s<t.length-1;s++)t[s][1]>t[s+1][1]&&(o=!1);o?document.getElementById("toRank").classList.add("correct"):document.getElementById("toRank").classList.remove("correct"),console.log(t),c(t)}},children:Object(h.jsx)(l.c,{droppableId:"songs",children:function(e){return Object(h.jsxs)("ul",Object(s.a)(Object(s.a)({id:"toRank",className:"songs"},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,t){var n=Object(i.a)(e,4),c=n[0],r=(n[1],n[2]),a=n[3];return Object(h.jsx)(l.b,{draggableId:c,index:t,children:function(e){return Object(h.jsx)("li",Object(s.a)(Object(s.a)(Object(s.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(h.jsxs)("p",{children:["Song Title: ",r,Object(h.jsx)("br",{}),"Artist: ",a]})}))}},c)})),e.placeholder]}))}})}),Object(h.jsx)("a",{className:"App-link",href:"https://www.billboard.com/charts/hot-100",target:"_blank",rel:"noopener noreferrer",children:"Visit Billboard Website"})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[52,1,2]]]);
//# sourceMappingURL=main.b39eae07.chunk.js.map
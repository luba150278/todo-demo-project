(this["webpackJsonplevel-2-trello"]=this["webpackJsonplevel-2-trello"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(19),r=n.n(o),s=(n(26),n(8)),a=n(2),l=n(1),u=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"nav-wrapper teal teal darken-1 px1",children:[Object(l.jsx)("a",{href:"#",className:"brand-logo",children:"React + TS"}),Object(l.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},d=function(){var e=Object(a.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Information page"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis asperiores numquam eos recusandae minus consequatur impedit cumque explicabo dolore esse, distinctio exercitationem doloribus ipsum earum veniam ex omnis. Incidunt."}),Object(l.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"Back to the 'To-Do' page"})]})},j=n(17),b=n(21),h=n(12),m=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),i=n[0],o=n[1];return Object(l.jsxs)("div",{className:"input-field mt2",children:[Object(l.jsx)("input",{onChange:function(e){return o(e.target.value)},value:i,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430",onKeyPress:function(t){"Enter"===t.key&&(e.onAdd(i),o(""))}}),Object(l.jsx)("label",{htmlFor:"title",className:"active",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"})]})},O=function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;if(0===t.length)return Object(l.jsx)("p",{className:"center",children:"Nothing data now!"});return Object(l.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(l.jsx)("li",{className:t.join(" "),children:Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:e.completed,onChange:c.bind(null,e.id)}),Object(l.jsx)("span",{children:e.title}),Object(l.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},p=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");i(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};i((function(e){return[t].concat(Object(b.a)(e))}))}}),Object(l.jsx)(O,{todos:n,onToggle:function(e){i((function(t){return t.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t}))}))},onRemove:function(e){confirm("Are you sure to delete the to-do item?")&&i((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},x=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{component:p,path:"/",exact:!0}),Object(l.jsx)(a.a,{component:d,path:"/about",exact:!0})]})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.8e278c6c.chunk.js.map
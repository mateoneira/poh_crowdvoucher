(this.webpackJsonpcrowdvouch_app=this.webpackJsonpcrowdvouch_app||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=(n(10),n(5)),o=(n(11),n(4)),l=n.n(o),d=n(0);var j=function(e){return e.data,Object(d.jsxs)("div",{children:["Graph of Vouches",Object(d.jsx)("br",{}),"Work in progress..."]})};var u=function(e){var t=e.person,n=function(e){return 0===e.vouched_by.length?e.registered||"PendingRegistration"===e.status?"external":"":e.vouched_by[0]};return Object(d.jsxs)("div",{className:"flex m-1 bg-gray-100",children:[Object(d.jsx)("div",{className:t.registered?"w-5 bg-green-500":"PendingRegistration"===t.status?"w-5 bg-yellow-500":"w-5 bg-red-500"}),Object(d.jsxs)("div",{className:"p-1",children:[Object(d.jsx)("h4",{className:"font-lg font-bold",children:t.name}),""!==n(t)?Object(d.jsxs)("div",{children:["\xa0\xa0\xa0\xa0vouched by: ",n(t)]}):Object(d.jsx)("div",{}),t.registered?Object(d.jsxs)("div",{children:["\xa0\xa0\xa0\xa0 # vouches: ",t.n_vouches," "]}):"PendingRegistration"===t.status?Object(d.jsxs)("div",{children:["\xa0\xa0\xa0\xa0pending: ",t.days_left]}):Object(d.jsx)("div",{children:"\xa0\xa0\xa0\xa0waiting for vouch"}),t.current_vouch?Object(d.jsxs)("div",{children:["\xa0\xa0\xa0\xa0current vouch: ",t.current_vouch.name]}):Object(d.jsx)("div",{})]})]})};var h=function(e){var t=e.data,n=function(e){for(var t=0,n=0;t<e.length;)e[t].registered&&(n+=1),t+=1;return n},c=function(e){for(var t=0,n=0;t<e.length;)"PendingRegistration"===e[t].status&&(n+=1),t+=1;return n};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{className:"text-center text-lg",children:["Registered: ",n(t),Object(d.jsx)("br",{}),"Vouched: ",c(t),Object(d.jsx)("br",{}),"Queue: ",function(e){return e.length-n(e)-c(e)}(t)]}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{className:"m-1 text-lg",children:" Crowdvoucher List"}),Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(u,{person:e})}))})]})};var b=function(e){var t=e.data;return Object(d.jsxs)("div",{className:"h-full flex",children:[Object(d.jsxs)("div",{className:"m-2.5 w-3/5 bg-gray-200",children:[" ",Object(d.jsx)(j,{data:t})]}),Object(d.jsx)("div",{className:"m-2.5 flex-auto overflow-y-auto",children:Object(d.jsx)(h,{data:t})})]})};var x=function(){var e=Object(c.useState)([{name:"none",id:"1"}]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){"none"===n[0].name&&l()("https://poh-query.herokuapp.com/").then((function(e){return e.text()})).then((function(e){return e.replace(/\bNaN\b/g,'"null"')})).then((function(e){r(JSON.parse(e))})).then((function(e){console.log(n)})).catch()})),Object(d.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(d.jsx)("header",{className:"py-5 bg-yellow-400 text-white text-center text-xl font-bold",children:"Proof-Of-Humanity Crowdvoucher Map"}),Object(d.jsx)("main",{className:"p-5 flex-1 overflow-y-auto",children:"none"===n[0].name?Object(d.jsx)("div",{className:"h-full flex items-center justify-center",children:Object(d.jsx)("div",{className:"text-center text-2xl",children:"Loading Data ..."})}):Object(d.jsx)(b,{data:n})}),Object(d.jsx)("footer",{className:"py-5 bg-yellow-400 text-center text-white",children:"made by @MateoNeira"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.d9c46edd.chunk.js.map
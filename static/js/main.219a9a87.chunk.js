(this.webpackJsonpcrowdvouch_app=this.webpackJsonpcrowdvouch_app||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(35),s=n.n(r),i=(n(42),n(13)),l=(n(43),n(36)),a=n.n(l),d=n(37),u=n.n(d),g=n(0),h={autoResize:!0,height:"100%",nodes:{shape:"dot",font:{size:6}},physics:{forceAtlas2Based:{gravitationalConstant:-5,centralGravity:.01,springLength:30,springConstant:2},maxVelocity:100,solver:"forceAtlas2Based",timestep:.5,stabilization:{iterations:100}},edges:{arrows:{to:{enabled:!0,scaleFactor:.5,type:"arrow"}}}},j={click:function(e){e.event="[original event]",console.log("click event, getNodeAt returns: "+this.getNodeAt(e.pointer.DOM))},doubleClick:function(e){console.log("doubleClick Event:",e),e.event="[original event]"},oncontext:function(e){console.log("oncontext Event:",e),e.event="[original event]"},dragStart:function(e){e.event="[original event]",console.log("dragStart Event:",e),console.log("dragStart event, getNodeAt returns: "+this.getNodeAt(e.pointer.DOM))},dragging:function(e){e.event="[original event]"},dragEnd:function(e){e.event="[original event]",console.log("dragEnd Event:",e),console.log("dragEnd event, getNodeAt returns: "+this.getNodeAt(e.pointer.DOM))},controlNodeDragging:function(e){e.event="[original event]"},controlNodeDragEnd:function(e){e.event="[original event]",console.log("controlNodeDragEnd Event:",e)},zoom:function(e){},showPopup:function(e){},hidePopup:function(){console.log("hidePopup Event")},select:function(e){console.log("select Event:",e)},selectNode:function(e){console.log("selectNode Event:",e)},selectEdge:function(e){console.log("selectEdge Event:",e)},deselectNode:function(e){console.log("deselectNode Event:",e)},deselectEdge:function(e){console.log("deselectEdge Event:",e)},hoverNode:function(e){console.log("hoverNode Event:",e)},hoverEdge:function(e){console.log("hoverEdge Event:",e)},blurNode:function(e){console.log("blurNode Event:",e)},blurEdge:function(e){console.log("blurEdge Event:",e)}};var v=function(e){var t=e.data,n=Object(o.useState)({}),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(o.useEffect)((function(){0===Object.keys(r).length&&function(e){for(var t=[],n=[],o=0;o<e.length;o++){var c=e[o],r={id:c.id,label:c.name,color:"#EF4444",size:3};if(c.registered&&(r.color="#10B981",r.size=5),"PendingRegistration"===c.status&&(r.color="#F59E0B",r.size=4),t.push(r),c.vouched_list.length>0)for(var i=0;i<c.vouched_list.length;i++){var l=c.vouched_list[i],a={from:r.id,to:l};n.push(a)}}s({nodes:t,edges:n})}(t)})),Object(g.jsx)("div",{className:"h-full",children:Object(g.jsx)(u.a,{data:r,options:h,events:j})})};var f=function(e){var t=e.person,n=function(e){return"null"===e.vouched_by?e.registered||"PendingRegistration"===e.status?"external":"":e.vouched_by};return Object(g.jsxs)("div",{className:"flex m-1 bg-gray-100",children:[Object(g.jsx)("div",{className:t.registered?"w-2 md:w-4 bg-green-500":"PendingRegistration"===t.status?"w-2 md:w-4 bg-yellow-500":"w-2 md:w-4 bg-red-500"}),Object(g.jsxs)("div",{className:"p-1 w-4/5",children:[Object(g.jsx)("h4",{className:"font-lg font-bold",children:Object(g.jsx)("a",{href:"https://app.proofofhumanity.id/profile/"+t.id+"?network=mainnet",target:"_blank",rel:"noopener noreferrer",children:t.name})}),Object(g.jsx)("h4",{className:"text-xs truncate",children:t.id}),""!==n(t)?Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0vouched by: ",n(t)]}):Object(g.jsx)("div",{}),t.registered?Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0 # vouches: ",t.n_vouches," "]}):"PendingRegistration"===t.status?Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0pending: ",t.days_left]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"\xa0\xa0\xa0\xa0waiting for vouch"})," ",Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0Approx wait: ",t.days_left]})]}),t.current_vouch?Object(g.jsxs)("div",{children:["\xa0\xa0\xa0\xa0current vouch: ",t.current_vouch.name]}):Object(g.jsx)("div",{})]})]})};var b=function(e){var t=e.data,n=function(e){for(var t=0,n=0;t<e.length;)e[t].registered&&(n+=1),t+=1;return n},o=function(e){for(var t=0,n=0;t<e.length;)"PendingRegistration"===e[t].status&&(n+=1),t+=1;return n};return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{className:"text-center text-lg",children:["Registered: ",n(t),Object(g.jsx)("br",{}),"Vouched: ",o(t),Object(g.jsx)("br",{}),"Queue: ",function(e){return e.length-n(e)-o(e)}(t)]}),Object(g.jsx)("br",{}),Object(g.jsx)("hr",{}),Object(g.jsx)("h4",{className:"text-sm font-bold text-yellow-500",children:Object(g.jsx)("a",{href:"http://shorturl.at/nvNO2",target:"_blank",rel:"noopener noreferrer",children:"Official List"})}),Object(g.jsx)("h4",{className:"text-sm font-bold text-yellow-500",children:Object(g.jsx)("a",{href:"http://shorturl.at/nvNO2",target:"_blank",rel:"noopener noreferrer",children:"Official Telegram Group"})}),Object(g.jsx)("hr",{}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{className:"m-1 text-lg",children:" Crowdvoucher List"}),Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsx)(f,{person:e},e.id)}))})]})};var x=function(e){var t=e.data;return Object(g.jsxs)("div",{className:"h-full flex justify-center",children:[Object(g.jsxs)("div",{className:"hidden md:block m-2.5 w-3/4",children:[" ",Object(g.jsx)(v,{data:t})]}),Object(g.jsx)("div",{className:"m-2.5 overflow-y-auto md:w-1/4 ",children:Object(g.jsx)(b,{data:t})})]})};var O=function(){var e=Object(o.useState)([{name:"none",id:"1"}]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){"none"===n[0].name&&a()("https://poh-query.herokuapp.com/").then((function(e){return e.text()})).then((function(e){return e.replace(/\bNaN\b/g,'"null"')})).then((function(e){c(JSON.parse(e))})).then((function(e){console.log(n)})).catch()})),Object(g.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(g.jsx)("header",{className:"py-5 bg-yellow-400 text-white text-center text-xl font-bold",children:"Proof-Of-Humanity Crowdvoucher Map"}),Object(g.jsx)("main",{className:"p-5 flex-1 overflow-y-auto",children:"none"===n[0].name?Object(g.jsx)("div",{className:"h-full flex items-center justify-center",children:Object(g.jsx)("div",{className:"text-center text-2xl",children:"Loading Data ..."})}):Object(g.jsx)(x,{data:n})}),Object(g.jsx)("footer",{className:"py-5 bg-yellow-400 text-center text-white text-sm",children:"made by @MateoNeira"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),p()},42:function(e,t,n){},43:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.219a9a87.chunk.js.map
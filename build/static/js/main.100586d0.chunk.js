(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{125:function(e,t,c){},126:function(e,t,c){},192:function(e,t,c){},327:function(e,t,c){},328:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(38),n=c.n(s),r=c(16),i=[{id:"01",title:"\u041c\u0435\u043d\u044e",text:["\u041c\u0435\u043d\u044e","\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c","\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"],link:{"\u041c\u0435\u043d\u044e":"/","\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c":"/SaveModel","\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c":"/"}}],l=(c(192),c(1)),o=new Date;function d(){return Object(l.jsxs)("div",{className:"borderTop fixed-bottom bg-white d-flex justify-content-between align-items-center",style:{height:"20px",paddingRight:"20px"},children:[Object(l.jsx)("div",{style:{width:"25%"}}),Object(l.jsxs)("h4",{style:{color:"#228D00",fontFamily:"Calibri",fontSize:16,marginTop:"5px"},children:["VA VKO ",o.getFullYear()]}),Object(l.jsx)("div",{className:"progress",style:{width:"25%"},children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-success",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:"100%"})})]})}var j=c(87),b=c(88),u=c(89),p=c(97),m=c(52),x=function(e){Object(u.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.text;return Object(l.jsxs)("div",{className:"btn-group ms-1 mt-1 mb-1",role:"group","aria-label":"Basic example",children:[Object(l.jsx)("button",{className:"btn btn-outline-success btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:e.title}),Object(l.jsx)("ul",{className:"dropdown-menu",children:e.text.map((function(t){return Object(l.jsx)(m.b,{to:e.link[t],children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:e.link[t],children:t})})},t.toString())}))})]})}}]),c}(a.Component),h=x;function O(e){var t=e.name.map((function(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(h,{text:e})},e.id)}));return Object(l.jsx)("ul",{className:"btn-group nav",children:t})}var g=c.p+"static/media/New_model.6e03a858.svg",f=c.p+"static/media/Download_model.60e4e693.svg",v=c.p+"static/media/Settings.d2849815.svg",y=c.p+"static/media/Help.ea7709f5.svg",N=c.p+"static/media/Exit.3b4b9ff0.svg";function w(){var e=[{title:"\u041d\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",link:g,href:"/NewModel"},{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c",link:f,href:"/LoadModel"},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",link:v,href:"/Settings"},{title:"\u0421\u043f\u0440\u0430\u0432\u043a\u0430",link:y,href:"/Help"},{title:"\u0412\u044b\u0445\u043e\u0434",link:N,href:"/Exit"}].map((function(e,t){return Object(l.jsx)(m.b,{to:e.href,children:Object(l.jsxs)("button",{type:"button",className:"btn btn-lg bg-light text-success text-start mb-3 btn-outline-success",children:[e.title,Object(l.jsx)("img",{src:e.link,className:"ps-3",alt:e.title})]},e.title)},t)}));return Object(l.jsx)("div",{className:"btn-group-vertical",children:e})}var k=c.p+"static/media/Logo_vavko.5e571253.png";c(125);function S(){return Object(l.jsx)("div",{className:"logo-wrapper",children:Object(l.jsx)("img",{src:k,className:"img-fluid position-absolute top-50 end-0 translate-middle-y",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})}var T=function(e){Object(u.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"content-bg vh-100 vw-100 overflow-hidden",children:[Object(l.jsx)(w,{}),Object(l.jsx)(S,{})]})}}]),c}(a.Component),C=T,R=c(48),I=(c(126),c.p+"static/media/Arm.97e82f01.svg"),D=c.p+"static/media/Server_group.22d1df14.svg",A=c.p+"static/media/Switch.f1c467d1.svg",B=function(e){var t=e.chart,c=e.setChart,a=(e.timeTest,e.setTimeTest),s=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"};return t&&a(prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u044b (\u0427\u0430\u0441\u044b)","")),Object(l.jsxs)("div",{className:"content contentBg elementArea",children:[Object(l.jsx)("img",{className:"rounded mx-auto d-block pt-3",src:I,alt:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e",style:{cursor:"pointer"},onDragStart:function(e){return s(e,"armNode")}}),Object(l.jsx)("p",{className:"text-center pb-3",style:{color:"white"},children:"\u0410\u0420\u041c"}),Object(l.jsx)("img",{className:"rounded mx-auto d-block",src:D,alt:"\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430",style:{cursor:"pointer"},onDragStart:function(e){return s(e,"serverNode")}}),Object(l.jsx)("p",{className:"text-center pb-3",style:{color:"white"},children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"}),Object(l.jsx)("img",{className:"rounded mx-auto d-block",src:A,alt:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440-Switch",style:{cursor:"pointer"},onDragStart:function(e){return s(e,"switchNode")}}),Object(l.jsx)("p",{className:"text-center pb-3",style:{color:"white"},children:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440-Switch"}),Object(l.jsxs)("div",{className:"d-grid gap-2 mb-0",children:[Object(l.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){c(!t)},children:t?"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e":"\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("button",{className:"btn btn-warning text-white","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445"})]})]})},L=c(330),M=c(334),F=c(173),P=c(174),z=c(77),K=c(74),E=c(183),V=c(335),_=c(336),G=c(337),H=c(178),J=c(179),W=c(176),Y={position:"relative",width:"100%",height:"100%",borderRadius:"10px",backgroundColor:"#FFFAFA",zIndex:"10"},U=[{subject:"\u041a\u043e\u043b-\u0432\u043e \u043e\u0442\u043a\u0430\u0437\u043e\u0432",A:120,B:110,fullMark:150},{subject:"\u0418\u041e",A:98,B:130,fullMark:150},{subject:"\u0421\u0440 \u0412\u0411\u0420 \u0424\u0413",A:86,B:130,fullMark:150},{subject:"\u041a\u043e\u043b-\u0432\u043e \u0442\u0435\u0441\u0442\u043e\u0432",A:65,B:85,fullMark:150}];var X=function(e){for(var t,c=[],a=0;e--;)a++,c.push({uv:(t=a,Math.exp(-1.765*Math.pow(10,-5)*10*t))});return c};function q(e){var t=e.timeTest;e.valueInput;return Object(l.jsx)("div",{style:Y,className:"container",children:Object(l.jsxs)("div",{className:"row row-cols-2",children:[Object(l.jsx)("div",{className:"col text-center",style:{color:"green"},children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u043a\u043e\u043b-\u0432\u0430 \u043e\u0442\u043a\u0430\u0437\u043e\u0432 \u0424\u0413 \u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(l.jsx)("div",{className:"col",style:{color:"green"},children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u043a\u0430\u0437\u043e\u0432 \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(l.jsxs)(L.a,{className:"col",width:500,height:300,data:X(t),margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(M.a,{strokeDasharray:"3 3"}),Object(l.jsx)(F.a,{dataKey:"name"}),Object(l.jsx)(P.a,{}),Object(l.jsx)(z.a,{}),Object(l.jsx)(K.a,{}),Object(l.jsx)(E.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]}),Object(l.jsxs)(L.a,{className:"col",width:500,height:300,data:X(t),margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(M.a,{strokeDasharray:"3 3"}),Object(l.jsx)(F.a,{dataKey:"name"}),Object(l.jsx)(P.a,{}),Object(l.jsx)(z.a,{}),Object(l.jsx)(K.a,{}),Object(l.jsx)(E.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]}),Object(l.jsx)("span",{className:"col text-center",style:{color:"green"},children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438 \u0431\u0435\u0437\u043e\u0442\u043a\u0430\u0437\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(l.jsx)("span",{className:"col",style:{color:"green"},children:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0434\u0430\u0440 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439 \u0424\u0413"}),Object(l.jsxs)(L.a,{className:"col",width:500,height:300,data:X(t),margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(M.a,{strokeDasharray:"3 3"}),Object(l.jsx)(F.a,{dataKey:"name"}),Object(l.jsx)(P.a,{}),Object(l.jsx)(z.a,{}),Object(l.jsx)(K.a,{}),Object(l.jsx)(E.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]}),Object(l.jsx)(V.a,{width:"30%",height:300,className:"col",children:Object(l.jsxs)(_.a,{cx:"50%",cy:"30%",outerRadius:"50%",data:U,children:[Object(l.jsx)(G.a,{}),Object(l.jsx)(H.a,{dataKey:"subject"}),Object(l.jsx)(J.a,{}),Object(l.jsx)(W.a,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6})]})})]})})}var Q=c(61),Z=[{id:"server",name:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b",srcImg:D,subName:["\u2116","\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430","\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","\u0426\u0435\u043b\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f","\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u0430\u0437\u043e\u0432","\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043d\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u043a\u0430\u0437\u0430\u043c\u0438"]},{id:"switch",name:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b Switch",srcImg:A,subName:["\u2116","\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430","\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","\u0426\u0435\u043b\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f","\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u0430\u0437\u043e\u0432","\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043d\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u043a\u0430\u0437\u0430\u043c\u0438"]},{id:"arm",name:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b (\u0410\u0420\u041c)",srcImg:I,subName:["\u2116","\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430","\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","\u0426\u0435\u043b\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f","\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u0430\u0437\u043e\u0432","\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043d\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u043a\u0430\u0437\u0430\u043c\u0438"]}],$=function(e){var t=e.elements,c=e.valueInput,a=e.setValueInput,s=t.filter((function(e){return"type"in e})),n=s.filter((function(e){return"armNode"===e.type})),r=s.filter((function(e){return"switchNode"===e.type})),i=s.filter((function(e){return"serverNode"===e.type})),o=(t.filter((function(e){return"source"in e})),function(e){switch(e){case"arm":return Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:t+1}),Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:Object(l.jsxs)("select",{className:"form-select form-select-sm","aria-label":".form-select-sm \u043f\u0440\u0438\u043c\u0435\u0440",children:[Object(l.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u043e\u0440..."}),n.map((function(e,t){return Object(l.jsx)("option",{value:t+1,children:t+1})}))]})}),Object(l.jsx)("td",{children:Object(l.jsx)("ol",{className:"list-group list-group-numbered",children:Object(l.jsx)("li",{className:"list-group-item",children:"A list item"})})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(e){return a([].concat(Object(Q.a)(c),[{i:e.target.value}]))}}),Object(l.jsxs)("span",{className:"input-group-text",id:"basic-addon2",children:["\u03bb(10",Object(l.jsx)("sup",{children:"-5"}),")"]})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"\u03c4(\u0447\u0430\u0441\u044b)"})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"T(\u0447\u0430\u0441\u044b)"})]})})]},t)}))});case"server":return Object(l.jsx)("tbody",{children:i.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:t+1}),Object(l.jsx)("td",{children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u2116".concat(e.id[e.id.length-1])}),Object(l.jsx)("td",{children:Object(l.jsxs)("select",{className:"form-select form-select-sm","aria-label":".form-select-sm \u043f\u0440\u0438\u043c\u0435\u0440",children:[Object(l.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u043e\u0440..."}),i.map((function(e,t){return Object(l.jsx)("option",{value:t+1,children:t+1})}))]})}),Object(l.jsx)("td",{children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u21161"}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsxs)("span",{className:"input-group-text",id:"basic-addon2",children:["\u03bb(10",Object(l.jsx)("sup",{children:"-5"}),")"]})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"\u03c4(\u0447\u0430\u0441\u044b)"})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"T(\u0447\u0430\u0441\u044b)"})]})})]},t)}))});case"switch":return Object(l.jsx)("tbody",{children:r.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:t+1}),Object(l.jsx)("td",{children:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440-Switch \u2116".concat(e.id[e.id.length-1])}),Object(l.jsx)("td",{children:Object(l.jsxs)("select",{className:"form-select form-select-sm","aria-label":".form-select-sm \u043f\u0440\u0438\u043c\u0435\u0440",children:[Object(l.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u043e\u0440..."}),r.map((function(e,t){return Object(l.jsx)("option",{value:t+1,children:t+1})}))]})}),Object(l.jsx)("td",{children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u21161"}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsxs)("span",{className:"input-group-text",id:"basic-addon2",children:["\u03bb(10",Object(l.jsx)("sup",{children:"-5"}),")"]})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"\u03c4(\u0447\u0430\u0441\u044b)"})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"T(\u0447\u0430\u0441\u044b)"})]})})]},t)}))});default:return Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row"}),Object(l.jsx)("td",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b!"})]})})}});return console.log(c),Object(l.jsx)(l.Fragment,{children:Z.map((function(e,t){return Object(l.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-heading".concat(t),children:Object(l.jsxs)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-".concat(t),"aria-expanded":"true","aria-controls":"#panelsStayOpen-".concat(t),children:[e.name,Object(l.jsx)("img",{src:e.srcImg,alt:e.name,style:{marginLeft:"20px"}})]})}),Object(l.jsx)("div",{id:"panelsStayOpen-".concat(t),className:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-heading".concat(t),children:Object(l.jsx)("div",{className:"accordion-body",children:Object(l.jsxs)("table",{className:"table table-success table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:e.subName.map((function(e,t){return Object(l.jsx)("th",{scope:"col",className:"align-middle",children:e},t)}))})}),o(e.id)]})})})]})},t)}))})};function ee(e){var t=e.elements,c=e.valueInput,a=e.setValueInput;return Object(l.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{className:"modal-dialog modal-fullscreen",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432:"}),Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsx)($,{elements:t,valueInput:c,setValueInput:a})}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})]})]})})})}var te=c(21),ce=[],ae={backgroundImage:"url(".concat(I,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"40px",width:"50px"},se={backgroundImage:"url(".concat(D,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"40px",width:"50px"},ne={backgroundImage:"url(".concat(A,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"55px",width:"50px"},re={color:"white",backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"4px",fontSize:"8px",position:"relative",top:"41px",display:"flex",alignItems:"center",justifyContent:"center"},ie=1,le=1,oe=1,de=function(e){switch(e){case"armNode":return"\u0410\u0440\u043c \u2116".concat(ie++);case"serverNode":return"\u0421\u0435\u0440\u0432. \u0433\u0440. \u2116".concat(le++);case"switchNode":return"Switch \u2116".concat(oe++);default:return"Error 404"}},je=function(e){var t=e.settingPropertie,c=Object(a.useState)(!1),s=Object(r.a)(c,2),n=s[0],i=s[1],o=Object(a.useState)(0),d=Object(r.a)(o,2),j=d[0],b=d[1],u=Object(a.useRef)(null),p=Object(a.useState)(null),m=Object(r.a)(p,2),x=m[0],h=m[1],O=Object(a.useState)(ce),g=Object(r.a)(O,2),f=g[0],v=g[1],y=Object(a.useState)([]),N=Object(r.a)(y,2),w=N[0],k=N[1],S={stroke:t[1].colorLine,strokeWidth:t[3].value},T={armNode:function(e){var t=e.id;return Object(l.jsxs)("div",{style:ae,children:[Object(l.jsx)(te.c,{type:"target",position:te.d.Left,id:"Left",style:{top:"50%"}}),Object(l.jsx)("span",{style:re,children:t}),Object(l.jsx)(te.c,{type:"source",position:te.d.Right,id:"Right",style:{top:"50%"}}),Object(l.jsx)(te.c,{type:"target",position:te.d.Top,id:"Top"})]})},serverNode:function(e){var t=e.id;return Object(l.jsxs)("div",{style:se,children:[Object(l.jsx)("span",{style:Object(R.a)(Object(R.a)({},re),{},{top:"-11px"}),children:t}),Object(l.jsx)(te.c,{type:"source",position:te.d.Bottom,id:"Bottom"})]})},switchNode:function(e){var t=e.id;return Object(l.jsxs)("div",{style:ne,children:[Object(l.jsx)(te.c,{type:"source",position:te.d.Bottom,id:"Bottom"}),Object(l.jsx)(te.c,{type:"target",position:te.d.Top,id:"Top"}),Object(l.jsx)("span",{style:Object(R.a)(Object(R.a)({},re),{},{top:"38px"}),children:t})]})}},C=Object(a.useCallback)((function(e){return v((function(c){return Object(te.f)(Object(R.a)(Object(R.a)({},e),{},{animated:t[2].active,style:{stroke:t[1].colorLine,strokeWidth:t[3].value}}),c)}))}),[v]),I=n&&Object(l.jsx)(q,{chart:n,setChart:i,timeTest:j,valueInput:w});return Object(l.jsxs)("div",{className:"contents dndflow dndflow vh-100 vw-100 overflow-hidden",children:[Object(l.jsx)(ee,{elements:f,valueInput:w,setValueInput:k}),Object(l.jsxs)(te.e,{children:[Object(l.jsx)("div",{className:"titleArea contentBg",children:Object(l.jsx)("p",{className:"text-center p-2",children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"})}),Object(l.jsx)(B,{setChart:i,chart:n,timeTest:j,setTimeTest:b}),Object(l.jsx)("div",{className:"reactflow-wrapper contentBg",ref:u,children:Object(l.jsxs)(te.g,{elements:f,onConnect:C,onElementsRemove:function(e){return v((function(t){return Object(te.h)(e,t)}))},onLoad:function(e){return h(e)},onDrop:function(e){e.preventDefault();var t=u.current.getBoundingClientRect(),c=e.dataTransfer.getData("application/reactflow"),a=x.project({x:e.clientX-t.left,y:e.clientY-t.top}),s={id:de(c),type:c,position:a,data:{label:c}};v((function(e){return e.concat(s)}))},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},nodeTypes:T,deleteKeyCode:"Delete",connectionLineStyle:S,children:[Object(l.jsx)(te.a,{variant:"lines"}),Object(l.jsx)(te.b,{}),I]})})]})]})},be=c(11),ue=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"d-flex justify-content-center align-items-center .bg-dark.bg-gradient vw-100 vh-100",style:{position:"relative",backgroundColor:"black",color:"white",fontSize:"24px",textAlign:"center",zIndex:9999,flexDirection:"column"},children:["\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",Object(l.jsx)("span",{style:{fontSize:"12px",color:"GrayText"},children:"Dev: Sokolik Alexey"})]})})},pe=(c(327),function(e){var t=e.settingPropertie,c=e.onToggle,a=e.onColor,s=e.onRange;return Object(l.jsx)("div",{className:"row row-cols-2 g-2",children:t.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"p-3",children:[e.title," ","color"===e.type&&Object(l.jsx)("label",{class:"form-label",children:e.colorLine}),"range"===e.type&&Object(l.jsx)("label",{class:"form-label",children:e.value})]})},e.id),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"p-3",children:["checkbox"===e.type&&Object(l.jsx)("div",{className:"form-check form-switch",children:Object(l.jsx)("input",{className:e.className,type:e.type,id:"flexSwitchCheckDefault",checked:e.active,onChange:function(t){c(e.id,t.target.checked)}})}),"color"===e.type&&Object(l.jsx)("input",{type:"color",class:"form-control form-control-color",id:"exampleColorInput",value:e.colorLine,title:"Choose your color",onChange:function(t){a(e.id,t.target.value)}}),"range"===e.type&&Object(l.jsx)("input",{type:"range",class:"form-range",min:"2",max:"5",value:e.value,onChange:function(t){s(e.id,t.target.value)},id:"customRange2"})]})})]})}))})}),me=function(e){var t=e.settingPropertie,c=e.setSettingPropertie;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container d-flex justify-content-start",style:{paddingTop:"40px"},children:Object(l.jsx)(pe,{settingPropertie:t,onToggle:function(e,a){var s=Object(Q.a)(t);s.find((function(t){return t.id===e})).active=a,c(s)},onColor:function(e,a){var s=Object(Q.a)(t);s.find((function(t){return t.id===e})).colorLine=a,c(s)},onRange:function(e,a){var s=Object(Q.a)(t);s.find((function(t){return t.id===e})).value=a,c(s)}})})})},xe=[{id:"01-id",title:"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",type:"checkbox",className:"form-check-input",active:!1},{id:"02-id",title:"\u0426\u0432\u0435\u0442 \u043b\u0438\u043d\u0438\u0438\u0439 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",type:"color",className:"form-control form-control-color",colorLine:"#ddd"},{id:"03-id",title:"\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043b\u0438\u043d\u0438\u0439",type:"checkbox",className:"form-check-input",active:!0},{id:"04-id",title:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043b\u0438\u043d\u0438\u0439",type:"range",className:"form-check-input",value:2}],he=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container d-flex justify-content-center align-items-center vw-100 vh-100",style:{position:"relative",color:"white",fontSize:"24px",textAlign:"center",flexDirection:"column"},children:Object(l.jsxs)("div",{class:"input-group",children:[Object(l.jsx)("input",{type:"file",class:"form-control",id:"inputGroupFile04","aria-describedby":"inputGroupFileAddon04","aria-label":"Upload"}),Object(l.jsx)("button",{class:"btn btn-outline-secondary",type:"button",id:"inputGroupFileAddon04",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"})]})})})};function Oe(){var e=Object(a.useState)(xe),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"position-relative",children:[Object(l.jsxs)(m.a,{children:[Object(l.jsx)("div",{className:"btn-group br_bt d-flex fixed-top bg-white",role:"group","aria-label":"Basic outlined example",style:{borderBottom:"2px solid #6f47d7"},children:Object(l.jsx)(O,{name:i})}),Object(l.jsxs)(be.c,{children:[Object(l.jsx)(be.a,{path:"/",element:Object(l.jsx)(C,{})}),Object(l.jsx)(be.a,{path:"/NewModel",element:Object(l.jsx)(je,{settingPropertie:c})}),Object(l.jsx)(be.a,{path:"/LoadModel",element:Object(l.jsx)(he,{})}),Object(l.jsx)(be.a,{path:"/Settings",element:Object(l.jsx)(me,{settingPropertie:c,setSettingPropertie:s})}),Object(l.jsx)(be.a,{path:"/Exit",element:Object(l.jsx)(ue,{})})]})]}),Object(l.jsx)(d,{})]})}n.a.render(Object(l.jsx)(Oe,{}),document.getElementById("root"))}},[[328,1,2]]]);
//# sourceMappingURL=main.100586d0.chunk.js.map
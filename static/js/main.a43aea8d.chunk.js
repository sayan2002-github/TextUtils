(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),a(1));a(15);function m(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.name),l.a.createElement("div",{className:"form-check form-switch text-light"},l.a.createElement("input",{className:"form-check-input bg-".concat(e.mode),onClick:e.styling,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},e.myText)))))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("h3",{className:"mt-5"}," ",e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},id:"exampleFormControlTextarea1",rows:"7",style:{backgroundColor:"dark"===e.mode?"#212529":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{type:"button",disabled:0===c.length,className:"btn btn-".concat(e.mode," me-2 mt-2"),onClick:function(){var e=c.toUpperCase();r(e)}},"UpperCase"),l.a.createElement("button",{type:"button",disabled:0===c.length,className:"btn btn-".concat(e.mode," me-2 mt-2"),onClick:function(){var e=c.toLowerCase();r(e)}},"LowerCase"),l.a.createElement("button",{type:"button",disabled:0===c.length,className:"btn btn-".concat(e.mode," me-2 mt-2"),onClick:function(){r("")}},"Clear Text"),l.a.createElement("button",{type:"button",disabled:0===c.length,className:"btn btn-".concat(e.mode," me-2 mt-2"),onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text is copied to clipboard!","success")}},"Copy To Clipboard"),l.a.createElement("button",{type:"button",disabled:0===c.length,className:"btn btn-".concat(e.mode," me-2 mt-2"),onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))}},"Remove Spaces"),l.a.createElement("h2",{className:"mt-3"},"Text Summary"),l.a.createElement("p",null,c.split(/\s+/).filter(function(e){return 0!==e.length}).length," words and ",function(){var e=0;return c.split(/\s+/).forEach(function(t){e+=t.length}),e}()," characters"),l.a.createElement("p",null,"[",l.a.createElement("strong",null,.008*c.split(/\s+/).filter(function(e){return 0!==e.length}).length," minutes "),"taken to read]"),l.a.createElement("h2",null,"Text Preview"),l.a.createElement("div",{className:"container-fluid border border-2"},l.a.createElement("p",null,c.length>0?c:"Write something in the above textbox to view here !!!")))}function s(e){return l.a.createElement("div",{style:{height:"30px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.msg)))}var u=function(){var e=Object(n.useState)("dark"),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(n.useState)("primary")),r=Object(o.a)(c,2),u=r[0],d=r[1],b=Object(n.useState)("Dark Mode"),h=Object(o.a)(b,2),p=h[0],f=h[1],g=Object(n.useState)(null),E=Object(o.a)(g,2),v=E[0],k=E[1],y=function(e,t){k({msg:e,typ:t}),setTimeout(function(){k(null)},3e3)};return l.a.createElement("div",{className:"App"},l.a.createElement(m,{name:"TextUtils",mode:u,styling:function(){"primary"===u?(d("dark"),f("Light Mode"),document.body.style.backgroundColor="#091a32",document.body.style.color="white",y("Dark mode has been enabeled!","success")):(d("primary"),f("Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black",y("Light mode has been enabeled!","success"))},myText:p,col:a}),l.a.createElement(s,{alert:v}),l.a.createElement("div",{className:"container"},l.a.createElement(i,{heading:"Write a text here to convert it in UPPERCASE/lowercase:",mode:u,showAlert:y})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.a43aea8d.chunk.js.map
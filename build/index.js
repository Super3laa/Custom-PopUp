!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var r="object"===typeof exports?t(require("react")):t(e.react);for(var n in r)("object"===typeof exports?exports:e)[n]=r[n]}}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(3)},function(e,t,r){},function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t);var a=r(0),l=r.n(a);r(2);function u(e){var t;return t=e.content.required?function(e,t){var r=o(l.a.useState(t),2),n=r[0],u=r[1],i=o(Object(a.useState)({msg:"",color:"",valid:!1}),2),c=i[0],s=i[1],f=o(l.a.useState("gray"),2),p=f[0],d=f[1];return{input:{onChange:function(e){u(e.target.value)},onBlur:function(){n.length<1?(s({color:"red",msg:"Input cannot be empty",valid:!1}),d("red")):(s({color:"green",msg:"Great",valid:!0}),d("gray"))},onFocus:function(){return d(e)},value:n},msg:{msg:c.msg,style:{color:c.color},valid:c.valid},color:p}}(e.primaryColor,e.dataValue):function(e,t){var r=o(l.a.useState(t),2),n=r[0],a=r[1],u=o(l.a.useState("gray"),2),i=u[0],c=u[1];return{input:{value:n,onChange:function(e){a(e.target.value)},onFocus:function(){return c(e)},onBlur:function(){return c("gray")}},msg:{msg:"",style:{}},color:i}}(e.primaryColor,e.dataValue),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Field"},l.a.createElement("h1",null,e.content.title),l.a.createElement("input",Object.assign({id:e.content.title,type:e.content.type},e.content.props,t.input,{style:{borderColor:t.color}})),l.a.createElement("label",{style:t.msg.style},t.msg.msg)))}t.default=function(e){var t=[],r=[],n=[],o=[],a=[];if(e.content)for(var i=0;i<e.content.length;i++)o.push(e.content[i]),t.push(l.a.createElement(u,{key:i,content:e.content[i],primaryColor:e.primaryColor,dataValue:e.populateDataValues?e.dataValues[e.content[i].title]:"",populateDataValues:e.populateDataValues}));if(e.selectors)for(var c=0;c<e.selectors.length;c++){o.push(e.selectors[c]);for(var s=[],f=0;f<e.selectors[c].options.length;f++)s.push(l.a.createElement("option",{key:f,value:e.selectors[c].options[f].value},e.selectors[c].options[f].label));a.push(l.a.createElement("div",{key:99,className:"Field"},l.a.createElement("h1",null,e.selectors[c].title),l.a.createElement("select",Object.assign({className:"Selector",key:c,id:e.selectors[c].title},e.selectors[c].props),s)))}if(e.buttons)for(var p=0;p<e.buttons.length;p++)n.push(e.buttons[p]),r.push(l.a.createElement("button",{key:p,id:p,style:{background:e.buttons[p].backgroundColor},onClick:function(e){var t={},r=!1;if(!0===n[e.target.id].exitButton)n[e.target.id].action(t);else{for(var a=0;a<o.length;a++){var l="";"file"===o[a].type?(l=document.getElementById(o[a].title).files[0],t.file=l):(l=document.getElementById(o[a].title).value,t[o[a].title]=l),0===l.length&&!0===o[a].required&&(r=!0)}!0===r&&!0!==n[e.target.id].exitButton?alert("Please fill all the required fields"):n[e.target.id].action(t)}}},e.buttons[p].name));return l.a.createElement("div",{className:"PopUp"},t,a,r)}}])}));
//# sourceMappingURL=index.js.map
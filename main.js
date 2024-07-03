(()=>{"use strict";var e={348:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(500),r=n.n(a),i=n(312),o=n.n(i)()(r());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=o},904:(e,t,n)=>{n.d(t,{c:()=>m});var a=n(500),r=n.n(a),i=n(312),o=n.n(i),s=n(536),c=n.n(s),l=new URL(n(556),n.b),d=new URL(n(424),n.b),p=new URL(n(844),n.b),u=o()(r()),h=c()(l),f=c()(d),g=c()(p);u.push([e.id,`html {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n}\n\nmain {\n  height: 100vh;\n  background-color: cyan;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nmain > div {\n  height: 100vh;\n  /* background-color: cyan; */\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n  padding-top: 80px;\n}\n\n.ship-placement {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.ocean-grid > div:nth-child(1), .tracking-grid > div:nth-child(1) {\n  border: none;\n  width: auto;\n  display: flex;\n}\n\n.ocean-grid > div:nth-child(2), .tracking-grid > div:nth-child(2) {\n  border: none;\n  width: 501px;\n  display: flex;\n  width: auto;\n}\n\n.ocean-grid, .tracking-grid {\n  border: none;\n}\n\n.coordinates {\n  width: 370px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  flex-direction: column;\n}\n\n.coordinates > div {\n  border: 1px solid black;\n  width: 37px;\n  height: 37px;\n}\n\n.numbers {\n  width: 37px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.numbers > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.letters {\n  width: 370px;\n  height: 37px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.letters > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ships {\n  width: 407px;\n  height: auto;\n  border: 1px solid black;\n}\n\n.ships > div:nth-child(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px ;\n}\n\n.ships > div:nth-child(2) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  align-items: center;\n  padding: 0px 30px 40px;\n}\n\n.ships > div:nth-child(2) > div > div {\n  border: 1px solid black;\n}\n\n.rotate {\n  display: flex;\n}\n\n.ships > div:nth-child(2) >  div > div > div {\n  width: 37px;\n  height: 37px;\n  border: 1px solid black;\n  background-color: #5F5F5F;\n}\n\n.ship-placement > .buttons, .battlefield + .buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n\n.battlefield {\n  display: flex;\n  gap: 150px;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin: 30px;\n}\n\n.hidden {\n  display: none;\n}\n\n/* mark shot at grid */\n.shot {\n content: url(${h});\n}\n\n\n/* mark hit at enemy ship */\n.hit {\n  content: url(${f});\n}\n\n/* mark hit at player ship */\n.attacked  { \n content: url(${f});\n}\n\n/* mark sunk ship*/\n.sunk {\n  content: url(${g});\n}`,""]);const m=u},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},536:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=a(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},176:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},556:(e,t,n)=>{e.exports=n.p+"cc08c6393f21d18e150d.svg"},844:(e,t,n)=>{e.exports=n.p+"fbffb5e6a89fe9b39e7c.svg"},424:(e,t,n)=>{e.exports=n.p+"1ded1e99216871d2a3ae.svg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(596),t=n.n(e),a=n(520),r=n.n(a),i=n(176),o=n.n(i),s=n(120),c=n.n(s),l=n(808),d=n.n(l),p=n(936),u=n.n(p),h=n(348),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(h.c,f),h.c&&h.c.locals&&h.c.locals;var g=n(904),m={};function v(e,t){let n=0;const a=e,r=t;return{increaseHitCount:()=>{n+=1},isSunk:()=>n>=a,getShipLength:()=>a,getShipName:()=>r}}m.styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(g.c,m),g.c&&g.c.locals&&g.c.locals;const b=(e,t)=>{const n=e,a=t;let r=!0,i=null,o=!1,s=!1,c=!1;return{getXCoordinate:()=>n,getYCoordinate:()=>a,setOccupiedStatus:()=>{o=!0},getOccupiedStatus:()=>o,setShipName:e=>{i=e},getShipName:()=>i,setAttackedStatus:()=>{s=!0},getAttackedStatus:()=>s,setSunkStatus:()=>{c=!0},getSunkStatus:()=>c,setSpaceAvailability:()=>{r=!1},getSpaceAvailability:()=>r}};function y(e,t){const n=e,a=t,r=function(){let e=[];for(let t=0;t<10;t+=1){e[t]=[];for(let n=0;n<10;n+=1)e[t].push(b(t,n))}const t=()=>{e=[];for(let t=0;t<10;t+=1){e[t]=[];for(let n=0;n<10;n+=1)e[t].push(b(t,n))}};let n={carrier:v(5,"carrier"),battleship:v(4,"battleship"),cruiser:v(3,"cruiser"),submarine:v(3,"submarine"),destroyer:v(2,"destroyer")};const a=(t,a,r,i)=>{const o=n[t].getShipLength(),s=+a,c=+r;let l=null;if(i)for(let t=0;t<o;t+=1){if(s+t===10){l=!1;break}if(l=e[s+t][c].getSpaceAvailability(),!1===l)break}else for(let t=0;t<o;t+=1){if(c+t===10){l=!1;break}if(l=e[s][c+t].getSpaceAvailability(),!1===l)break}return l},r=(t,r,i,o)=>{const s=n[t],c=s.getShipLength(),l=+r,d=+i;let p="success";if(a(t,l,d,o))if(o){for(let t=0;t<c;t+=1)e[l+t][d].setOccupiedStatus(),e[l+t][d].setSpaceAvailability(),e[l+t][d].setShipName(s.getShipName());((t,n,a)=>{if(e[t-1]&&e[t-1][n-1]){const a=e[t-1][n-1];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n]){const a=e[t-1][n];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n+1]){const a=e[t-1][n+1];a&&a.setSpaceAvailability()}if(e[t+a]&&e[t+a][n-1]){const r=e[t+a][n-1];r&&r.setSpaceAvailability()}if(e[t+a]&&e[t+a][n]){const r=e[t+a][n];r&&r.setSpaceAvailability()}if(e[t+a]&&e[t+a][n+1]){const r=e[t+a][n+1];r&&r.setSpaceAvailability()}const r=[],i=[];for(let o=0;o<a;o+=1)e[t+o]&&e[t+o][n-1]&&r.push(e[t+o][n-1]),e[t+o]&&e[t+o][n+1]&&i.push(e[t+o][n+1]);r.forEach((e=>{e&&e.setSpaceAvailability()})),i.forEach((e=>{e&&e.setSpaceAvailability()}))})(l,d,c)}else{for(let t=0;t<c;t+=1)e[l][d+t].setOccupiedStatus(),e[l][d+t].setSpaceAvailability(),e[l][d+t].setShipName(s.getShipName());((t,n,a)=>{if(e[t+1]&&e[t+1][n-1]){const a=e[t+1][n-1];a&&a.setSpaceAvailability()}if(e[t]&&e[t][n-1]){const a=e[t][n-1];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n-1]){const a=e[t-1][n-1];a&&a.setSpaceAvailability()}if(e[t+1]&&e[t+1][n+a]){const r=e[t+1][n+a];r&&r.setSpaceAvailability()}if(e[t]&&e[t][n+a]){const r=e[t][n+a];r&&r.setSpaceAvailability()}if(e[t-1]&&e[t-1][n+a]){const r=e[t-1][n+a];r&&r.setSpaceAvailability()}const r=[],i=[];for(let o=0;o<a;o+=1)e[t+1]&&e[t+1][n+o]&&r.push(e[t+1][n+o]),e[t-1]&&e[t-1][n+o]&&i.push(e[t-1][n+o]);r.forEach((e=>{e&&e.setSpaceAvailability()})),i.forEach((e=>{e&&e.setSpaceAvailability()}))})(l,d,c)}else p="failed";return p},i=()=>Math.floor(10*Math.random());return{placeShip:r,receiveAttack:(t,a)=>{const r=e[t][a];if(r.setAttackedStatus(),r.getOccupiedStatus()){const e=r.getShipName();n[e].increaseHitCount()}Object.keys(n).filter((e=>n[e].isSunk())).forEach((t=>{e.forEach((e=>{e.forEach((e=>{t===e.getShipName()&&e.setSunkStatus()}))}))}))},checkFleetSunkStatus:()=>!Object.keys(n).map((e=>n[e].isSunk())).includes(!1),getShips:()=>n,randomizeShipPlacement:()=>{t(),Object.keys(n).forEach((e=>{let t=null,n=null,o=null,s=null;do{t=i(),n=i(),o=0===Math.floor(2*Math.random()),s=a(e,t,n,o)}while(!1===s);r(e,t,n,o)}))},getBoard:()=>e,getRandomCoordinate:i,resetBoard:t,resetShips:()=>{n={carrier:v(5,"carrier"),battleship:v(4,"battleship"),cruiser:v(3,"cruiser"),submarine:v(3,"submarine"),destroyer:v(2,"destroyer")}}}}();return{getPlayerName:()=>n,getPlayerType:()=>a,placeShip:(e,t,n,a)=>r.placeShip(e,t,n,a),receiveAttack:(e,t)=>{r.receiveAttack(e,t)},checkFleetSunkStatus:()=>r.checkFleetSunkStatus(),getShips:()=>r.getShips(),randomizeShipPlacement:()=>{r.randomizeShipPlacement()},getBoard:()=>r.getBoard(),getRandomCoordinate:()=>r.getRandomCoordinate(),resetBoard:()=>{r.resetBoard()},resetShips:()=>{r.resetShips()}}}const S=function(){const e=[y("Player 1","real"),y("Computer","computer")];let[t,n]=e,a=!1,r=`${t.getPlayerName()}'s turn `;const i=(o,s)=>{if(!0!==n.getBoard()[o][s].getAttackedStatus()){if(n.receiveAttack(o,s),n.checkFleetSunkStatus())return r=`${t.getPlayerName()} won!`,void(a=!0);if(n=n===e[1]?e[0]:e[1],t=t===e[0]?e[1]:e[0],r=`${t.getPlayerName()}'s turn`,"computer"===t.getPlayerType()){let e=null,a=null;do{e=t.getRandomCoordinate(),a=t.getRandomCoordinate()}while(!0===n.getBoard()[e][a].getAttackedStatus());i(e,a)}}};return{getPlayers:()=>e,getActivePlayer:()=>t,getActiveOpponent:()=>n,playRound:i,getGameStatus:()=>r,isGameOver:()=>a,resetGame:()=>{t.resetBoard(),t.resetShips(),n.resetBoard(),n.resetShips(),a=!1,r=`${t.getPlayerName()}'s turn `,[t,n]=e}}}();!function(){const e=document.querySelector("main"),t=[...e.querySelectorAll("div:not(div div)")],n=document.querySelector("main > div:nth-child(3) .status"),a=document.querySelector(".battlefield .ocean-grid .coordinates"),r=document.querySelector(".battlefield .tracking-grid .coordinates"),i=document.querySelector(".ship-placement .ocean-grid .coordinates"),[o,s]=S.getPlayers();let c=null,l=null,d=document.querySelectorAll(".ships > div:nth-child(2) > div");const p=[...document.querySelectorAll(".ships > div:nth-child(2) > div")].map((e=>e.getAttribute("class"))),u=document.querySelector(".ships > div:nth-child(2)"),h=(e,t)=>{const n=t;n.innerHTML="";const a=e.getShips();Object.keys(a).forEach((e=>{const t=document.createElement("div");t.classList.add(e);const r=document.createElement("div");r.classList.add(e);for(let t=0;t<a[e].getShipLength();t+=1){const t=document.createElement("div");t.classList.add(e),r.append(t)}t.append(r),n.append(t)}))},f=(e,t,n)=>{const a=t;a.innerHTML="",e.getBoard().forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.dataset.xCoordinate=e.getXCoordinate(),t.dataset.yCoordinate=e.getYCoordinate(),e.getAttackedStatus()&&t.classList.add("shot"),e.getSunkStatus()&&t.classList.replace("shot","sunk"),e.getShipName()&&(1===n?t.classList.replace("shot","attacked"):t.classList.replace("shot","hit")),1===n?t.classList.add("ocean-coord"):t.classList.add("track-coord"),1===n&&e.getShipName()&&(t.dataset.shipName=e.getShipName(),t.style.backgroundColor="#5F5F5F"),a.appendChild(t)}))}))},g=e=>{t.forEach((e=>{e.classList.add("hidden")})),t[e].classList.remove("hidden")},m=e=>{l=!!e.target.parentNode.getAttribute("class").includes("rotate")},v=()=>{d=document.querySelectorAll(".ships > div:nth-child(2) > div"),d.forEach((e=>{e.addEventListener("contextmenu",(t=>{t.preventDefault(),c=e.getAttribute("class"),t.target.parentNode.classList.toggle("rotate"),m(t)}))}))};e.addEventListener("click",(e=>{if("track-coord"===e.target.getAttribute("class")){if(S.isGameOver())return void(n.textContent=S.getGameStatus());const t=e.target;if(S.playRound(t.dataset.xCoordinate,t.dataset.yCoordinate),setTimeout((()=>{f(o,a,1),n.textContent=`${o.getPlayerName()}'s turn`,S.isGameOver()&&(n.textContent=S.getGameStatus())}),500),n.textContent=`${s.getPlayerName()}'s turn`,f(s,r,2),S.isGameOver()){if(S.getActivePlayer()===s)return;n.textContent=S.getGameStatus()}}if("Return to starting menu"===e.target.textContent&&g(0),"Restart game!!"!==e.target.textContent&&"Place your ships!"!==e.target.textContent||(g(1),S.resetGame(),f(o,i,1),h(o,u),v()),"Start your game!"===e.target.textContent&&!1===u.hasChildNodes()&&(g(2),s.randomizeShipPlacement(),f(o,a,1),f(s,r,2),n.textContent=S.getGameStatus()),"Randomize ships!"===e.target.textContent&&(o.randomizeShipPlacement(),!0===u.hasChildNodes()&&d.forEach((e=>{u.removeChild(e)})),f(o,i,1)),"Clear board!"===e.target.textContent&&(o.resetBoard(),f(o,i,1),h(o,u),v()),p.includes(e.target.getAttribute("class"))&&(c=e.target.getAttribute("class"),m(e)),null!==e.target.getAttribute("class")&&e.target.getAttribute("class").includes("ocean-coord")&&e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("class").includes("ship-placement")){const t=e.target.dataset.xCoordinate,n=e.target.dataset.yCoordinate;null!==c&&null!==l&&("success"===o.placeShip(c,t,n,l)&&u.removeChild(u.querySelector(`div.${c}`)),c=null,l=null),f(o,i,1)}})),v()}()})()})();
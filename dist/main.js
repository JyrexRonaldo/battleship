(()=>{"use strict";var e={348:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(500),i=n.n(a),r=n(312),o=n.n(r)()(i());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=o},904:(e,t,n)=>{n.d(t,{c:()=>m});var a=n(500),i=n.n(a),r=n(312),o=n.n(r),s=n(536),c=n.n(s),l=new URL(n(556),n.b),d=new URL(n(424),n.b),p=new URL(n(844),n.b),u=o()(i()),h=c()(l),f=c()(d),g=c()(p);u.push([e.id,`html {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n}\n\nmain {\n  height: 100vh;\n  background-color: cyan;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nmain > div {\n  height: 100vh;\n  background-color: cyan;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n  padding-top: 80px;\n}\n\n.ship-placement {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.ocean-grid > div:nth-child(1), .tracking-grid > div:nth-child(1) {\n  border: none;\n  width: auto;\n  display: flex;\n}\n\n.ocean-grid > div:nth-child(2), .tracking-grid > div:nth-child(2) {\n  border: none;\n  width: 501px;\n  display: flex;\n  width: auto;\n}\n\n.ocean-grid, .tracking-grid {\n  border: none;\n}\n\n.coordinates {\n  width: 370px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  flex-direction: column;\n}\n\n.coordinates > div {\n  border: 1px solid black;\n  width: 37px;\n  height: 37px;\n}\n\n.numbers {\n  width: 37px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.numbers > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.letters {\n  width: 370px;\n  height: 37px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.letters > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ships {\n  width: 407px;\n  height: 407px;\n  border: 1px solid black;\n}\n\n.ships > div:nth-child(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px ;\n}\n\n.ships > div:nth-child(2) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  align-items: center;\n  padding: 0px 30px 60px;\n}\n\n.ships > div:nth-child(2) > div {\n  border: 1px solid black;\n}\n\n.ships > div:nth-child(2) > div:nth-child(1) {\n  rotate: 90deg;\n  margin: 0px 60px; \n}\n\n.ships > div:nth-child(2) > div > div {\n  width: 37px;\n  height: 37px;\n  border: 1px solid black;\n}\n\n.ship-placement > .buttons, .battlefield + .buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n\n.battlefield {\n  display: flex;\n  gap: 150px;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin: 30px;\n}\n\n.hidden {\n  display: none;\n}\n/* mark shot at grid */\n.shot {\n /* content: url(./assets/delete-icon.svg); */\n /* content: url(./assets/delete-icon-red.svg); */\n content: url(${h});\n\n\n\n}\n/* mark hit at enemy ship */\n.hit {\n  /* background-color: #006E19; */\n  content: url(${f});\n}\n/* mark hit at player ship */\n.attacked  {\n /* background-color: #F95D5E; */\n content: url(${f});\n}\n\n/* mark sunk ship*/\n.sunk {\n  content: url(${g});\n}`,""]);const m=u},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},536:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},o=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=i(h,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=n(r[o]);t[s].references--}for(var c=a(e,i),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},176:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},556:(e,t,n)=>{e.exports=n.p+"cc08c6393f21d18e150d.svg"},844:(e,t,n)=>{e.exports=n.p+"fbffb5e6a89fe9b39e7c.svg"},424:(e,t,n)=>{e.exports=n.p+"1ded1e99216871d2a3ae.svg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(596),t=n.n(e),a=n(520),i=n.n(a),r=n(176),o=n.n(r),s=n(120),c=n.n(s),l=n(808),d=n.n(l),p=n(936),u=n.n(p),h=n(348),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),t()(h.c,f),h.c&&h.c.locals&&h.c.locals;var g=n(904),m={};function v(e,t){let n=0;const a=e,i=t;return{increaseHitCount:()=>{n+=1},isSunk:()=>n>=a,getShipLength:()=>a,getShipName:()=>i}}m.styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(g.c,m),g.c&&g.c.locals&&g.c.locals;const b=(e,t)=>{const n=e,a=t;let i=!0,r=null,o=!1,s=!1,c=!1;return{getXCoordinate:()=>n,getYCoordinate:()=>a,setOccupiedStatus:()=>{o=!0},getOccupiedStatus:()=>o,setShipName:e=>{r=e},getShipName:()=>r,setAttackedStatus:()=>{s=!0},getAttackedStatus:()=>s,setSunkStatus:()=>{c=!0},getSunkStatus:()=>c,setSpaceAvailability:()=>{i=!1},getSpaceAvailability:()=>i}};function y(e,t){const n=e,a=t,i=function(){let e=[];for(let t=0;t<10;t+=1){e[t]=[];for(let n=0;n<10;n+=1)e[t].push(b(t,n))}const t=()=>{e=[];for(let t=0;t<10;t+=1){e[t]=[];for(let n=0;n<10;n+=1)e[t].push(b(t,n))}},n={carrier:v(5,"carrier"),battleship:v(4,"battleship"),cruiser:v(3,"cruiser"),submarine:v(3,"submarine"),destroyer:v(2,"destroyer")},a=(t,a,i,r)=>{const o=n[t].getShipLength();let s=null;if(r)for(let t=0;t<o;t+=1){if(a+t===10){s=!1;break}if(s=e[a+t][i].getSpaceAvailability(),!1===s)break}else for(let t=0;t<o;t+=1){if(i+t===10){s=!1;break}if(s=e[a][i+t].getSpaceAvailability(),!1===s)break}return s},i=(t,i,r,o)=>{const s=n[t],c=s.getShipLength();let l="ship has been placed";if(a(t,i,r,o))if(o){for(let t=0;t<c;t+=1)e[i+t][r].setOccupiedStatus(),e[i+t][r].setSpaceAvailability(),e[i+t][r].setShipName(s.getShipName());((t,n,a)=>{if(e[t-1]&&e[t-1][n-1]){const a=e[t-1][n-1];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n]){const a=e[t-1][n];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n+1]){const a=e[t-1][n+1];a&&a.setSpaceAvailability()}if(e[t+a]&&e[t+a][n-1]){const i=e[t+a][n-1];i&&i.setSpaceAvailability()}if(e[t+a]&&e[t+a][n]){const i=e[t+a][n];i&&i.setSpaceAvailability()}if(e[t+a]&&e[t+a][n+1]){const i=e[t+a][n+1];i&&i.setSpaceAvailability()}const i=[],r=[];for(let o=0;o<a;o+=1)e[t+o]&&e[t+o][n-1]&&i.push(e[t+o][n-1]),e[t+o]&&e[t+o][n+1]&&r.push(e[t+o][n+1]);i.forEach((e=>{e&&e.setSpaceAvailability()})),r.forEach((e=>{e&&e.setSpaceAvailability()}))})(i,r,c)}else{for(let t=0;t<c;t+=1)e[i][r+t].setOccupiedStatus(),e[i][r+t].setSpaceAvailability(),e[i][r+t].setShipName(s.getShipName());((t,n,a)=>{if(e[t+1]&&e[t+1][n-1]){const a=e[t+1][n-1];a&&a.setSpaceAvailability()}if(e[t]&&e[t][n-1]){const a=e[t][n-1];a&&a.setSpaceAvailability()}if(e[t-1]&&e[t-1][n-1]){const a=e[t-1][n-1];a&&a.setSpaceAvailability()}if(e[t+1]&&e[t+1][n+a]){const i=e[t+1][n+a];i&&i.setSpaceAvailability()}if(e[t]&&e[t][n+a]){const i=e[t][n+a];i&&i.setSpaceAvailability()}if(e[t-1]&&e[t-1][n+a]){const i=e[t-1][n+a];i&&i.setSpaceAvailability()}const i=[],r=[];for(let o=0;o<a;o+=1)e[t+1]&&e[t+1][n+o]&&i.push(e[t+1][n+o]),e[t-1]&&e[t-1][n+o]&&r.push(e[t-1][n+o]);i.forEach((e=>{e&&e.setSpaceAvailability()})),r.forEach((e=>{e&&e.setSpaceAvailability()}))})(i,r,c)}else l="can't place ship";return l},r=()=>Math.floor(10*Math.random());return{placeShip:i,receiveAttack:(t,a)=>{const i=e[t][a];if(i.setAttackedStatus(),i.getOccupiedStatus()){const e=i.getShipName();n[e].increaseHitCount()}Object.keys(n).filter((e=>n[e].isSunk())).forEach((t=>{e.forEach((e=>{e.forEach((e=>{t===e.getShipName()&&e.setSunkStatus()}))}))}))},checkShipSunkStatus:()=>!Object.keys(n).map((e=>n[e].isSunk())).includes(!1),getShips:()=>n,randomizeShipPlacement:()=>{t(),Object.keys(n).forEach((e=>{let t=null,n=null,o=null,s=null;do{t=r(),n=r(),o=0===Math.floor(2*Math.random()),s=a(e,t,n,o)}while(!1===s);i(e,t,n,o)}))},getBoard:()=>e,getRandomCoordinate:r,resetBoard:t}}();return{getPlayerName:()=>n,getPlayerType:()=>a,placeShip:(e,t,n,a)=>{i.placeShip(e,t,n,a)},receiveAttack:(e,t)=>{i.receiveAttack(e,t)},checkShipSunkStatus:()=>i.checkShipSunkStatus(),getShips:()=>i.getShips(),randomizeShipPlacement:()=>{i.randomizeShipPlacement()},getBoard:()=>i.getBoard(),getRandomCoordinate:()=>i.getRandomCoordinate(),resetBoard:()=>{i.resetBoard()}}}const S=function(){const e=[y("Player 1","real"),y("Computer","computer")];let t=e[0],n=e[1],a=!1,i=`${t.getPlayerName()}'s turn `;const r=(o,s)=>{if(!0!==n.getBoard()[o][s].getAttackedStatus()){if(n.receiveAttack(o,s),n.checkShipSunkStatus())return i=`${t.getPlayerName()} won!`,void(a=!0);if(n=n===e[1]?e[0]:e[1],t=t===e[0]?e[1]:e[0],i=`${t.getPlayerName()}'s turn`,"computer"===t.getPlayerType()){let e=null,a=null;do{e=t.getRandomCoordinate(),a=t.getRandomCoordinate()}while(!0===n.getBoard()[e][a].getAttackedStatus());r(e,a)}}};return{getPlayers:()=>e,getActivePlayer:()=>t,getActiveOpponent:()=>n,playRound:r,getGameStatus:()=>i,isGameOver:()=>a}}();!function(){const e=document.querySelector("main"),t=[...e.querySelectorAll("div:not(div div)")];console.log(t);const n=document.querySelector("main > div:nth-child(3) .status"),a=document.querySelector(".battlefield .ocean-grid .coordinates"),i=document.querySelector(".battlefield .tracking-grid .coordinates"),r=document.querySelector(".ship-placement .ocean-grid .coordinates"),[o,s]=S.getPlayers(),c=(e,t,n)=>{const a=t;a.innerHTML="",e.getBoard().forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.dataset.xCoordinate=e.getXCoordinate(),t.dataset.yCoordinate=e.getYCoordinate(),e.getAttackedStatus()&&t.classList.add("shot"),e.getSunkStatus()&&t.classList.replace("shot","sunk"),e.getShipName()&&(1===n?t.classList.replace("shot","attacked"):t.classList.replace("shot","hit")),1===n&&e.getShipName()&&(t.dataset.shipName=e.getShipName(),t.style.backgroundColor="#5F5F5F"),a.appendChild(t)}))}))},l=e=>{t.forEach((e=>{console.log(e),e.classList.add("hidden")})),t[e].classList.remove("hidden")};s.randomizeShipPlacement(),e.addEventListener("click",(e=>{if("tracking-grid"===e.target.parentNode.parentNode.parentNode.getAttribute("class")){if(S.isGameOver())return void(n.textContent=S.getGameStatus());const t=e.target;if(S.playRound(t.dataset.xCoordinate,t.dataset.yCoordinate),setTimeout((()=>{c(o,a,1),n.textContent=`${o.getPlayerName()}'s turn`,S.isGameOver()&&(n.textContent=S.getGameStatus())}),500),""===e.target.classList.value&&(n.textContent=`${s.getPlayerName()}'s turn`),c(s,i,2),S.isGameOver()){if(S.getActivePlayer()===s)return;n.textContent=S.getGameStatus()}}"Return to starting menu"===e.target.textContent&&l(0),"Restart game!!"!==e.target.textContent&&"Place your ships!"!==e.target.textContent||(o.resetBoard(),l(1),c(o,r,1)),"Start your game!"===e.target.textContent&&(l(2),s.randomizeShipPlacement(),c(o,a,1),c(s,i,2)),"Randomize ships!"===e.target.textContent&&(o.randomizeShipPlacement(),c(o,r,1))}))}()})()})();
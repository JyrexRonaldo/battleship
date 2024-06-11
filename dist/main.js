(()=>{"use strict";var n={348:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),i=t.n(r),o=t(312),a=t.n(o)()(i());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=a},904:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),i=t.n(r),o=t(312),a=t.n(o)()(i());a.push([n.id,"html {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n}\n\nmain {\n  height: 100vh;\n  background-color: cyan;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n  padding-top: 80px;\n}\n\nmain > .ship-placement {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.ocean-grid > div:nth-child(1), .tracking-grid > div:nth-child(1) {\n  border: none;\n  width: auto;\n  display: flex;\n}\n\n.ocean-grid > div:nth-child(2), .tracking-grid > div:nth-child(2) {\n  border: none;\n  width: 501px;\n  display: flex;\n  width: auto;\n}\n\n.ocean-grid, .tracking-grid {\n  border: none;\n}\n\n.coordinates {\n  width: 370px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.coordinates > div {\n  border: 1px solid black;\n  width: 37px;\n  height: 37px;\n}\n\n.numbers {\n  width: 37px;\n  height: 370px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.numbers > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.letters {\n  width: 370px;\n  height: 37px;\n  display: flex;\n  flex-wrap: wrap;\n  border: none;\n}\n\n.letters > div {\n  border: none;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ships {\n  width: 407px;\n  height: 407px;\n  border: 1px solid black;\n}\n\n.ships > div:nth-child(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px ;\n}\n\n.ships > div:nth-child(2) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  align-items: center;\n  padding: 0px 30px 60px;\n}\n\n.ships > div:nth-child(2) > div {\n  border: 1px solid black;\n}\n\n.ships > div:nth-child(2) > div:nth-child(1) {\n  rotate: 90deg;\n  margin: 0px 60px; \n}\n\n.ships > div:nth-child(2) > div > div {\n  width: 37px;\n  height: 37px;\n  border: 1px solid black;\n}\n\n.ship-placement > .buttons, .battlefield + .buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n\n.battlefield {\n  display: flex;\n  gap: 150px;\n}\n",""]);const s=a},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),i=t.n(r),o=t(176),a=t.n(o),s=t(120),c=t.n(s),d=t(808),l=t.n(d),p=t(936),u=t.n(p),f=t(348),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(f.c,h),f.c&&f.c.locals&&f.c.locals;var v=t(904),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),e()(v.c,b),v.c&&v.c.locals&&v.c.locals})()})();
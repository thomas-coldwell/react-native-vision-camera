!function(){"use strict";var e,t,n,r,a,f={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return f[e].call(n.exports,n,n.exports,d),n.exports}d.m=f,e=[],d.O=function(t,n,r,a){if(!n){var f=1/0;for(i=0;i<e.length;i++){n=e[i][0],r=e[i][1],a=e[i][2];for(var c=!0,o=0;o<n.length;o++)(!1&a||f>=a)&&Object.keys(d.O).every((function(e){return d.O[e](n[o])}))?n.splice(o--,1):(c=!1,a<f&&(f=a));c&&(e.splice(i--,1),t=r())}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,r,a]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);d.r(a);var f={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},d.d(a,f),a},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,n){return d.f[n](e,t),t}),[]))},d.u=function(e){return"assets/js/"+({53:"935f2afb",108:"e3411310",618:"a228627b",723:"a18ef71b",881:"8066111e",997:"92efe2c7",1270:"8d11e070",1534:"ba7ab9f9",1909:"8428cd00",2065:"11839375",2187:"07a8c724",2319:"660e807b",2611:"ee698e86",3112:"48206ddc",3386:"828d7c42",3396:"3870dbe9",3426:"9e4f55af",3762:"6d5900e3",4098:"1c660d31",4164:"610d0a85",4195:"c4f5d8e4",4674:"1d0e5df0",5429:"cdcbf298",5574:"87b75037",5882:"d8655d6a",6270:"72a68337",6285:"40786178",6605:"6a37b9ff",6752:"be144170",6881:"6eac279e",6909:"ef4cc7ef",7001:"2eec7143",7054:"531a59c3",7224:"0dcdd983",7258:"1c5751c2",7597:"5e8c322a",7620:"9dfe0207",7918:"17896441",8183:"0196f052",8191:"e6863846",8567:"e829e97e",8812:"62fe576c",9013:"07c3dbbf",9212:"620dfe88",9220:"e46c9e11",9442:"ef5eb469",9505:"e4d71701",9514:"1be78505",9563:"a71356b6",9686:"9e8aa0b8",9706:"f66f25a1",9846:"876bbd93",9857:"b18d2e18"}[e]||e)+"."+{53:"704e382f",108:"05276fe7",618:"735c29a5",723:"e2f71511",881:"8fdfe972",997:"756ec602",1270:"181aa20e",1534:"f54af93e",1909:"08ea2238",2065:"8729d1db",2187:"a4e441de",2319:"a1475254",2611:"3b632eb7",3112:"b4322a91",3386:"5ff5a475",3396:"6a031080",3426:"af07e7c6",3762:"7cc5cf75",3763:"2edd4c11",4098:"c30e00fc",4164:"d608b72d",4195:"68801429",4608:"eaf61cee",4674:"55d64676",5256:"58a6cb9a",5429:"6c5af6b4",5486:"fe69de79",5574:"991e0e2f",5882:"31457fc1",5888:"cdf031ff",6270:"3a3693a3",6285:"d3bd3ed5",6605:"a0871523",6752:"418c1dcc",6881:"c0b99506",6909:"dc472d71",6945:"93181fe7",7001:"bcf2fce8",7054:"d3380908",7224:"1a582672",7258:"ce3b1fae",7597:"ddcb6b99",7620:"57555cb1",7918:"19455c05",8183:"182d8b25",8191:"5165340c",8567:"8acd5480",8812:"a04eb052",9013:"461aa814",9212:"e7901571",9220:"c770ecc8",9442:"da71d5c6",9505:"b92566f6",9514:"a73efc83",9563:"4bf51dfd",9686:"371b8f7a",9706:"8d207020",9846:"18d5efda",9857:"e3b20b72"}[e]+".js"},d.miniCssF=function(e){return"assets/css/styles.babaf679.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},a="vision-camera:",d.l=function(e,t,n,f){if(r[e])r[e].push(t);else{var c,o;if(void 0!==n)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+n){c=b;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",a+n),c.src=e),r[e]=[t];var s=function(t,n){c.onerror=c.onload=null,clearTimeout(l);var a=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),o&&document.head.appendChild(c)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/react-native-vision-camera/",d.gca=function(e){return e={11839375:"2065",17896441:"7918",40786178:"6285","935f2afb":"53",e3411310:"108",a228627b:"618",a18ef71b:"723","8066111e":"881","92efe2c7":"997","8d11e070":"1270",ba7ab9f9:"1534","8428cd00":"1909","07a8c724":"2187","660e807b":"2319",ee698e86:"2611","48206ddc":"3112","828d7c42":"3386","3870dbe9":"3396","9e4f55af":"3426","6d5900e3":"3762","1c660d31":"4098","610d0a85":"4164",c4f5d8e4:"4195","1d0e5df0":"4674",cdcbf298:"5429","87b75037":"5574",d8655d6a:"5882","72a68337":"6270","6a37b9ff":"6605",be144170:"6752","6eac279e":"6881",ef4cc7ef:"6909","2eec7143":"7001","531a59c3":"7054","0dcdd983":"7224","1c5751c2":"7258","5e8c322a":"7597","9dfe0207":"7620","0196f052":"8183",e6863846:"8191",e829e97e:"8567","62fe576c":"8812","07c3dbbf":"9013","620dfe88":"9212",e46c9e11:"9220",ef5eb469:"9442",e4d71701:"9505","1be78505":"9514",a71356b6:"9563","9e8aa0b8":"9686",f66f25a1:"9706","876bbd93":"9846",b18d2e18:"9857"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(t,n){var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var f=d.p+d.u(t),c=new Error;d.l(f,(function(n){if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+f+")",c.name="ChunkLoadError",c.type=a,c.request=f,r[1](c)}}),"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,f=n[0],c=n[1],o=n[2],i=0;for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(o)var u=o(d);for(t&&t(n);i<f.length;i++)a=f[i],d.o(e,a)&&e[a]&&e[a][0](),e[f[i]]=0;return d.O(u)},n=self.webpackChunkvision_camera=self.webpackChunkvision_camera||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
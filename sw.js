if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const t=e=>i(e,n),o={module:{uri:n},exports:d,require:t};s[n]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-fdb6eb46"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style-dark.css",revision:"527a4b7dcd41f31252ab36c8fc7d2c50"},{url:"css/style-dark.min.css",revision:"b2e3814bac5ad378e611d7990d2e48e2"},{url:"css/style.css",revision:"59e0031bc397d13a6ce2edbdcf4ff9f3"},{url:"css/style.min.css",revision:"37142f45043fc865d103f927081c43d5"},{url:"img/rlp-sms.png",revision:"07b782a46bc86391bd24503cb3b87aea"},{url:"index.html",revision:"75429be7c33b20942361bdf4135db3a5"},{url:"js/main.js",revision:"7393d5a2460b0b1085ca8e776d404e17"},{url:"js/main.min.js",revision:"57690ae4bd995ad22539d3f217f9e73e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

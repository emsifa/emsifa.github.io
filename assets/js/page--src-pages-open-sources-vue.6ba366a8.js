(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n(234),i=n(235),a=n(236),s=function(t,e){return Object(r.a)(t,e,{locale:a.a})},o=function(t){return Object(i.a)(t,{locale:a.a})}},229:function(t,e,n){"use strict";var r={name:"Footer"},i=n(17),a=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),e("div",{staticClass:"w-full sm:w-1/2"},[e("nav",[e("ul",{staticClass:"flex sm:justify-end -mx-2"},[e("li",{staticClass:"px-2"},[e("g-link",{staticClass:"text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/"}},[this._v("Home")])],1),this._m(1),this._m(2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0 text-gray-700"},[e("p",[this._v("© 2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"px-2"},[e("a",{staticClass:"text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"px-2"},[e("a",{staticClass:"text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);e.a=a.exports},230:function(t,e,n){"use strict";var r=n(1),i=n(103)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(150)("includes")},231:function(t,e,n){"use strict";var r=n(1),i=n(101);r(r.P+r.F*n(102)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},232:function(t,e,n){"use strict";n(230),n(231);var r={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,e){return e>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},i=n(17),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mx-auto max-w-3xl px-6 md:px-8 py-8"},[n("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[n("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[n("li",{staticClass:"lg:w-1/5"},[n("g-link",{staticClass:"text-gray-700 focus:outline-none hover:text-gray-500 px-4 py-2",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),n("li",{staticClass:"hidden md:flex w-auto text-center text-gray-700 text-base"},[t._v(t._s(t.info.currentPage)+" / "+t._s(t.info.totalPages))]),n("li",{staticClass:"lg:w-1/5 text-right"},[n("g-link",{staticClass:"text-gray-700 focus:outline-none hover:text-gray-500 px-4 py-2",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])}),[],!1,null,null,null);e.a=a.exports},240:function(t,e,n){t.exports=n(241)},241:function(t,e,n){n(69),n(242),t.exports=n(15).Array.from},242:function(t,e,n){"use strict";var r=n(151),i=n(52),a=n(105),s=n(243),o=n(244),c=n(152),l=n(245),u=n(153);i(i.S+i.F*!n(246)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,g=a(t),h="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,v=void 0!==d,b=0,x=u(g);if(v&&(d=r(d,p>2?arguments[2]:void 0,2)),null==x||h==Array&&o(x))for(n=new h(e=c(g.length));e>b;b++)l(n,b,v?d(g[b],b):g[b]);else for(f=x.call(g),n=new h;!(i=f.next()).done;b++)l(n,b,v?s(f,d,[i.value,b],!0):i.value);return n.length=b,n}})},243:function(t,e,n){var r=n(44);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},244:function(t,e,n){var r=n(45),i=n(14)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},245:function(t,e,n){"use strict";var r=n(26),i=n(53);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},246:function(t,e,n){var r=n(14)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],s=a[r]();s.next=function(){return{done:n=!0}},a[r]=function(){return s},t(a)}catch(t){}return n}},248:function(t,e){},250:function(t,e,n){"use strict";n(100),n(99),n(149);var r=n(19),i=(n(228),{props:{data:{type:Object,required:!0},activeTags:{type:Array,default:function(){return[]}}},computed:Object(r.c)(["light"]),methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}}}),a=n(17),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1 h-full max-w-sm rounded overflow-hidden shadow-lg",class:{"bg-transparent":t.light,"bg-gray-800":!t.light}},[n("div",{staticClass:"px-6 py-4"},[n("h4",{staticClass:"font-bold text-xl mb-2",class:{"text-gray-700":t.light,"text-gray-300":!t.light}},[n("a",{attrs:{href:t.data.demoUrl,rel:"noopener",target:"_blank"}},[t._v(t._s(t.data.title))])]),n("p",{staticClass:"text-base",class:{"text-gray-700":t.light,"text-gray-500":!t.light}},[t._v(t._s(t.data.description))]),n("div",{staticClass:"mt-4"},t._l(t.data.techStack,(function(e){return n("span",{key:e,staticClass:"\n        inline-block\n        rounded-full\n        px-2\n        py-1\n        font-semibold\n        mb-2\n        mr-2\n      ",class:{"bg-gray-200":t.light,"text-gray-700":t.light&&-1==t.activeTags.indexOf(e),"bg-gray-700":!t.light,"text-gray-300":!t.light&&-1==t.activeTags.indexOf(e),"bg-blue-500":t.activeTags.indexOf(e)>-1,"text-white":t.activeTags.indexOf(e)>-1},staticStyle:{"font-size":".7rem"}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.a=s.exports},251:function(t,e,n){"use strict";var r=n(106),i=n.n(r);var a=n(240),s=n.n(a),o=n(107),c=n.n(o);function l(t){return function(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return l}))},269:function(t,e,n){"use strict";var r=n(1),i=n(270);r(r.P+r.F*!n(55)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},270:function(t,e,n){var r=n(54),i=n(27),a=n(73),s=n(20);t.exports=function(t,e,n,o,c){r(e);var l=i(t),u=a(l),f=s(l.length),g=c?f-1:0,h=c?-1:1;if(n<2)for(;;){if(g in u){o=u[g],g+=h;break}if(g+=h,c?g<0:f<=g)throw TypeError("Reduce of empty array with no initial value")}for(;c?g>=0:f>g;g+=h)g in u&&(o=e(o,u[g],g,l));return o}},271:function(t,e,n){"use strict";var r=n(248),i=n.n(r);e.default=i.a},281:function(t,e,n){"use strict";n.r(e);n(39),n(40),n(41),n(18),n(13),n(43),n(42),n(154);var r=n(251),i=(n(269),n(10)),a=n(19),s=n(6),o=n(104),c=n(229),l=n(232),u=n(250);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var g={components:{PageHeader:o.a,Pagination:l.a,SiteFooter:c.a,OpenSourceCard:u.a},metaInfo:function(){return{title:this.config.siteName,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.config.siteName},{property:"og:description",content:this.config.siteDescription},{property:"og:url",content:this.config.siteUrl},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.config.siteName},{name:"twitter:description",content:this.config.siteDescription},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},data:function(){return{activeTags:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.c)(["light"]),{tags:function(){return this.$page.openSources.edges.reduce((function(t,e){return[].concat(Object(r.a)(t),Object(r.a)(e.node.techStack))}),[]).reduce((function(t,e){return-1===t.indexOf(e)&&t.push(e),t}),[])},filteredOpenSources:function(){var t=this;return this.activeTags.length?this.$page.openSources.edges.filter((function(e){return e.node.techStack.filter((function(e){return t.activeTags.indexOf(e)>-1})).length})):this.$page.openSources.edges},config:function(){return s.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}),methods:{isActive:function(t){return this.activeTags.indexOf(t)>-1},toggleTag:function(t){this.activeTags.indexOf(t)>-1?this.activeTags=this.activeTags.filter((function(e){return e!==t})):this.activeTags.push(t)}},mounted:function(){this.$adaptLight()}},h=n(17),p=n(271),d=Object(h.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{subtitle:"Ini halaman open source"}},[n("main",[n("container",{staticClass:"select-none"},[n("h4",{staticClass:"mb-4 font-semibold text-2xl pl-4",class:{"text-gray-700":t.light,"text-gray-400":!t.light}},[t._v("\n        Open Source\n        "),n("small",{staticClass:"h-auto text-sm text-white py-1 rounded-full float-right px-2 inline-block mt-1",class:{"bg-gray-500":t.light,"bg-gray-800":!t.light}},[t._v("Total: "+t._s(t.$page.openSources.edges.length))])]),n("div",{staticClass:"filters p-4 pb-2 border-b border-t mb-4",class:{"text-gray-700":t.light,"border-gray-200":t.light,"text-gray-400":!t.light,"border-gray-800":!t.light}},t._l(t.tags,(function(e){return n("button",{key:e,staticClass:"\n          inline-block\n          font-sans\n          font-semibold\n          text-xs\n          sm:text-sm\n          px-2\n          py-1\n          mr-2\n          mb-2\n          rounded\n          transition-color\n          transition-bg\n          focus:outline-none\n        ",class:{"bg-gray-200 hover:text-white hover:bg-gray-700":t.light,"bg-gray-800 hover:text-gray-800 hover:bg-gray-300":!t.light,"text-gray-700":!t.isActive(e)&&t.light,"text-gray-400":!t.isActive(e)&&!t.light,"bg-blue-500":t.isActive(e),"text-white":t.isActive(e)},on:{click:function(n){return t.toggleTag(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),n("div",{staticClass:"flex flex-wrap"},t._l(t.filteredOpenSources,(function(e){return n("div",{key:e.node.id,staticClass:"w-full md:w-4/12 p-3"},[n("open-source-card",{attrs:{data:e.node,"active-tags":t.activeTags}})],1)})),0)]),n("site-footer",{staticClass:"py-8 sm:py-16"})],1)])}),[],!1,null,null,null);"function"==typeof p.default&&Object(p.default)(d);e.default=d.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{228:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return i}));var n=a(234),r=a(235),s=a(236),o=function(t,e){return Object(n.a)(t,e,{locale:s.a})},i=function(t){return Object(r.a)(t,{locale:s.a})}},229:function(t,e,a){"use strict";var n={name:"Footer"},r=a(17),s=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),e("div",{staticClass:"w-full sm:w-1/2"},[e("nav",[e("ul",{staticClass:"flex sm:justify-end -mx-2"},[e("li",{staticClass:"px-2"},[e("g-link",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/"}},[this._v("Home")])],1),this._m(1),this._m(2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0 text-gray-600"},[e("p",[this._v("© 2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"px-2"},[e("a",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"px-2"},[e("a",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);e.a=s.exports},230:function(t,e,a){"use strict";var n=a(1),r=a(103)(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(150)("includes")},231:function(t,e,a){"use strict";var n=a(1),r=a(101);n(n.P+n.F*a(102)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},232:function(t,e,a){"use strict";a(230),a(231);var n={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,e){return e>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=a(17),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mx-auto max-w-3xl px-6 md:px-8 py-8"},[a("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[a("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[a("li",{staticClass:"lg:w-1/5"},[a("g-link",{staticClass:"text-gray-700 focus:outline-none hover:text-gray-500 px-4 py-2",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),a("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v(t._s(t.info.currentPage)+" / "+t._s(t.info.totalPages))]),a("li",{staticClass:"lg:w-1/5 text-right"},[a("g-link",{staticClass:"text-gray-700 focus:outline-none hover:text-gray-500 px-4 py-2",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])}),[],!1,null,null,null);e.a=s.exports},233:function(t,e,a){"use strict";a(39),a(40),a(41),a(18),a(42),a(13),a(43),a(100),a(99),a(149);var n=a(10),r=a(19),s=a(228);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var i={props:["post"],computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(n.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.c)(["light"]),{formattedPublishDate:function(){return Object(s.a)(new Date(this.post.datetime),"dd MMMM, yyyy")}}),methods:{formatPublishDate:function(t){return Object(s.a)(new Date(t),"dd MMMM, yyyy")},timeago:function(t){return Object(s.b)(new Date(t))},titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}}},c=a(17),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"\n  p-3\n  select-none\n  border-transparent\n  mb-3\n  rounded",class:{"hover:border-gray-400":t.light,"hover:bg-gray-200":t.light,"hover:border-gray-700":!t.light,"hover:bg-gray-800":!t.light}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-auto flex flex-wrap content-center"},[a("img",{attrs:{src:t.post.icon,alt:"Thumbnail"}})]),a("div",{staticClass:"w-auto ml-3"},[a("header",[a("time",{staticClass:"text-xs mb-2 uppercase",class:{"text-gray-600":t.light,"text-gray-500":!t.light},attrs:{datetime:t.post.datetime}},[t._v("\n          "+t._s(t.timeago(t.post.datetime))+" LALU\n        ")]),a("h2",{staticClass:"text-lg leading-tight font-sans"},[a("g-link",{staticClass:"text-black font-semibold",class:{"text-gray-700":t.light,"text-gray-300":!t.light},attrs:{to:t.post.path+"/"}},[t._v("\n            "+t._s(t.post.title)+"\n          ")])],1)])])])])}),[],!1,null,null,null);e.a=l.exports},238:function(t,e){},251:function(t,e,a){"use strict";var n=a(238),r=a.n(n);e.default=r.a},278:function(t,e,a){"use strict";a.r(e);a(100),a(99),a(149);var n=a(6),r=a(233),s=a(229),o=a(232),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:s.a},metaInfo:function(){return{title:"Posts written by ".concat(this.titleCase(this.$page.author.title)),meta:[{key:"description",name:"description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:type",content:"website"},{property:"og:title",content:"Posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:url",content:"".concat(this.config.siteUrl,"/").concat(this.$page.author.path,"/")},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Posts written by ".concat(this.titleCase(this.$page.author.title))},{name:"twitter:description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}},computed:{config:function(){return n.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}},c=a(17),l=a(251),u=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("main",[a("header",[a("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"},[a("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize"},[t._v(t._s(t.titleCase(t.$page.author.title)))]),a("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"authorIcon"}},[a("title",{attrs:{id:"authorIcon"}},[t._v("Author posts")]),a("path",{attrs:{d:"M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"}})])]),a("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[a("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity",attrs:{to:"/"}},[t._v("← Home")])],1)]),a("section",t._l(t.$page.author.belongsTo.edges,(function(t){return a("post-item",{key:t.node.id,attrs:{post:t.node}})})),1),t.$page.author.belongsTo.pageInfo.totalPages>1?a("pagination",{attrs:{base:""+t.$page.author.path,info:t.$page.author.belongsTo.pageInfo}}):t._e(),a("site-footer",{staticClass:"py-8 sm:py-16"})],1)])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(u);e.default=u.exports}}]);
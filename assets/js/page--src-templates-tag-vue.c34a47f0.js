(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(t,s,e){"use strict";var a={name:"Footer"},r=e(92),n=Object(r.a)(a,function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),s("div",{staticClass:"w-full sm:w-1/2"},[s("nav",[s("ul",{staticClass:"flex sm:justify-end -mx-2"},[s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/"}},[this._v("Home")])],1),this._m(1),this._m(2)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0 text-gray-600"},[s("p",[this._v("© 2019")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"text-gray-600 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);s.a=n.exports},348:function(t,s,e){"use strict";var a=e(1),r=e(95)(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(143)("includes")},349:function(t,s,e){"use strict";var a=e(1),r=e(96);a(a.P+a.F*e(97)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},350:function(t,s,e){"use strict";e(93),e(142),e(94);var a=e(219),r=e.n(a),n={props:["post"],computed:{formattedPublishDate:function(){return r()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return r()(t).format("DD MMMM, YYYY")},excerpt:function(t,s,e){if(t.excerpt)return t.excerpt;s=s||280,e=e||" ...";var a=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return a.length>s?"".concat(a.slice(0,s)).concat(e):a},titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}}},o=e(92),i=Object(o.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("div",{staticClass:"mx-auto max-w-3xl px-6 border-b border-gray-200"},[e("div",{staticClass:"py-5 sm:py-10"},[e("header",{staticClass:"mb-8"},[e("time",{staticClass:"text-gray-700 text-xs mb-2 uppercase",attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),e("h2",{staticClass:"text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2"},[e("g-link",{staticClass:"text-black font-semibold text-gray-700",attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1),e("p",{staticClass:"text-gray-700 leading-normal text-sm sm:text-base"},[t.post.author?e("span",[t._v("Oleh "),t.post.author?e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.author.path+"/"}},[t._v(t._s(t.titleCase(t.post.author.title)))]):t._e()],1):t._e(),t.post.tags&&t.post.tags.length>0?e("span",[t._v(" di "),e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.tags[0].path+"/"}},[t._v(t._s(t.titleCase(t.post.tags[0].title)))])],1):t._e()])]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-normal text-lg text-gray-600",domProps:{innerHTML:t._s(t.excerpt(t.post,160," ..."))}})])])])},[],!1,null,null,null);s.a=i.exports},351:function(t,s,e){"use strict";e(348),e(349);var a={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,s){return s>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=e(92),n=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"},[e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[e("li",{staticClass:"lg:w-1/5"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),e("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),e("li",{staticClass:"lg:w-1/5 text-right"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])},[],!1,null,null,null);s.a=n.exports},352:function(t,s,e){var a={"./af":220,"./af.js":220,"./ar":221,"./ar-dz":222,"./ar-dz.js":222,"./ar-kw":223,"./ar-kw.js":223,"./ar-ly":224,"./ar-ly.js":224,"./ar-ma":225,"./ar-ma.js":225,"./ar-sa":226,"./ar-sa.js":226,"./ar-tn":227,"./ar-tn.js":227,"./ar.js":221,"./az":228,"./az.js":228,"./be":229,"./be.js":229,"./bg":230,"./bg.js":230,"./bm":231,"./bm.js":231,"./bn":232,"./bn.js":232,"./bo":233,"./bo.js":233,"./br":234,"./br.js":234,"./bs":235,"./bs.js":235,"./ca":236,"./ca.js":236,"./cs":237,"./cs.js":237,"./cv":238,"./cv.js":238,"./cy":239,"./cy.js":239,"./da":240,"./da.js":240,"./de":241,"./de-at":242,"./de-at.js":242,"./de-ch":243,"./de-ch.js":243,"./de.js":241,"./dv":244,"./dv.js":244,"./el":245,"./el.js":245,"./en-SG":246,"./en-SG.js":246,"./en-au":247,"./en-au.js":247,"./en-ca":248,"./en-ca.js":248,"./en-gb":249,"./en-gb.js":249,"./en-ie":250,"./en-ie.js":250,"./en-il":251,"./en-il.js":251,"./en-nz":252,"./en-nz.js":252,"./eo":253,"./eo.js":253,"./es":254,"./es-do":255,"./es-do.js":255,"./es-us":256,"./es-us.js":256,"./es.js":254,"./et":257,"./et.js":257,"./eu":258,"./eu.js":258,"./fa":259,"./fa.js":259,"./fi":260,"./fi.js":260,"./fo":261,"./fo.js":261,"./fr":262,"./fr-ca":263,"./fr-ca.js":263,"./fr-ch":264,"./fr-ch.js":264,"./fr.js":262,"./fy":265,"./fy.js":265,"./ga":266,"./ga.js":266,"./gd":267,"./gd.js":267,"./gl":268,"./gl.js":268,"./gom-latn":269,"./gom-latn.js":269,"./gu":270,"./gu.js":270,"./he":271,"./he.js":271,"./hi":272,"./hi.js":272,"./hr":273,"./hr.js":273,"./hu":274,"./hu.js":274,"./hy-am":275,"./hy-am.js":275,"./id":276,"./id.js":276,"./is":277,"./is.js":277,"./it":278,"./it-ch":279,"./it-ch.js":279,"./it.js":278,"./ja":280,"./ja.js":280,"./jv":281,"./jv.js":281,"./ka":282,"./ka.js":282,"./kk":283,"./kk.js":283,"./km":284,"./km.js":284,"./kn":285,"./kn.js":285,"./ko":286,"./ko.js":286,"./ku":287,"./ku.js":287,"./ky":288,"./ky.js":288,"./lb":289,"./lb.js":289,"./lo":290,"./lo.js":290,"./lt":291,"./lt.js":291,"./lv":292,"./lv.js":292,"./me":293,"./me.js":293,"./mi":294,"./mi.js":294,"./mk":295,"./mk.js":295,"./ml":296,"./ml.js":296,"./mn":297,"./mn.js":297,"./mr":298,"./mr.js":298,"./ms":299,"./ms-my":300,"./ms-my.js":300,"./ms.js":299,"./mt":301,"./mt.js":301,"./my":302,"./my.js":302,"./nb":303,"./nb.js":303,"./ne":304,"./ne.js":304,"./nl":305,"./nl-be":306,"./nl-be.js":306,"./nl.js":305,"./nn":307,"./nn.js":307,"./pa-in":308,"./pa-in.js":308,"./pl":309,"./pl.js":309,"./pt":310,"./pt-br":311,"./pt-br.js":311,"./pt.js":310,"./ro":312,"./ro.js":312,"./ru":313,"./ru.js":313,"./sd":314,"./sd.js":314,"./se":315,"./se.js":315,"./si":316,"./si.js":316,"./sk":317,"./sk.js":317,"./sl":318,"./sl.js":318,"./sq":319,"./sq.js":319,"./sr":320,"./sr-cyrl":321,"./sr-cyrl.js":321,"./sr.js":320,"./ss":322,"./ss.js":322,"./sv":323,"./sv.js":323,"./sw":324,"./sw.js":324,"./ta":325,"./ta.js":325,"./te":326,"./te.js":326,"./tet":327,"./tet.js":327,"./tg":328,"./tg.js":328,"./th":329,"./th.js":329,"./tl-ph":330,"./tl-ph.js":330,"./tlh":331,"./tlh.js":331,"./tr":332,"./tr.js":332,"./tzl":333,"./tzl.js":333,"./tzm":334,"./tzm-latn":335,"./tzm-latn.js":335,"./tzm.js":334,"./ug-cn":336,"./ug-cn.js":336,"./uk":337,"./uk.js":337,"./ur":338,"./ur.js":338,"./uz":339,"./uz-latn":340,"./uz-latn.js":340,"./uz.js":339,"./vi":341,"./vi.js":341,"./x-pseudo":342,"./x-pseudo.js":342,"./yo":343,"./yo.js":343,"./zh-cn":344,"./zh-cn.js":344,"./zh-hk":345,"./zh-hk.js":345,"./zh-tw":346,"./zh-tw.js":346};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=352},356:function(t,s){},367:function(t,s,e){"use strict";var a=e(356),r=e.n(a);s.default=r.a},369:function(t){t.exports=JSON.parse('{"/tag/RU202":[1,"648602b3"],"/tag/Redis%20University":[1,"5ef36fa9"],"/tag/Course":[1,"9e6ec43c"],"/tag/RU201":[1,"6ca78dca"],"/tag/RU101":[1,"6d6e2166"],"/tag/RU102J":[1,"14a612b0"]}')},372:function(t,s,e){"use strict";e.r(s);e(94),e(93),e(142),e(219);var a=e(10),r=e(350),n=e(347),o=e(351),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:n.a},metaInfo:function(){return{title:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"'),meta:[{key:"description",name:"description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:type",content:"website"},{property:"og:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:url",content:"".concat(this.config.siteUrl,"/").concat(this.$page.tag.path,"/")},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}},computed:{config:function(){return a.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}},l=e(92),c=e(367),g=Object(l.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("main",{},[e("header",[e("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-16"},[e("p",{staticClass:"text-gray-700 leading-normal"},[t._v(t._s(t.$page.tag.belongsTo.totalCount)+" posts in total")]),e("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize text-gray-700"},[t._v(t._s(t.titleCase(t.$page.tag.title)))]),e("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"tagIcon"}},[e("title",{attrs:{id:"tagIcon"}},[t._v("Posts tagged")]),e("path",{attrs:{d:"M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}})])]),e("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[e("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity",attrs:{to:"/"}},[t._v("← Home")])],1)]),e("section",[e("div",{staticClass:"container max-w-3xl bg-white"},t._l(t.$page.tag.belongsTo.edges,function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})}),1)]),t.$page.tag.belongsTo.pageInfo.totalPages>1?e("pagination",{attrs:{base:""+t.$page.tag.path,info:t.$page.tag.belongsTo.pageInfo}}):t._e(),e("site-footer",{staticClass:"py-8 sm:py-16"})],1)])},[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(g);s.default=g.exports}}]);
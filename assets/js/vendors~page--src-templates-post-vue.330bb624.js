(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{253:function(t,e,r){"use strict";const n=r(254),i=r(255),o=r(256),s=r(257);t.exports=(t,e)=>{if("string"!=typeof t)throw new TypeError(`Expected a string, got \`${typeof t}\``);e=Object.assign({separator:"-",lowercase:!0,decamelize:!0,customReplacements:[]},e);const r=i(e.separator);t=((t,e)=>{for(const[r,n]of e)t=t.replace(new RegExp(i(r),"g"),n);return t})(t,new Map([...s,...e.customReplacements,...o])),t=(t=n(t)).normalize("NFKD"),e.decamelize&&(t=(t=>t.replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1 $2"))(t));let a=/[^a-zA-Z\d]+/g;return e.lowercase&&(t=t.toLowerCase(),a=/[^a-z\d]+/g),t=((t,e)=>t.replace(new RegExp(`${e}{2,}`,"g"),e).replace(new RegExp(`^${e}|${e}$`,"g"),""))(t=(t=t.replace(a,r)).replace(/\\/g,""),r)}},254:function(t,e,r){(function(e){var r=1/0,n="[object Symbol]",i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),s="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=s||a||Function("return this")();var f,h=(f={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==f?void 0:f[t]}),c=Object.prototype.toString,l=u.Symbol,p=l?l.prototype:void 0,d=p?p.toString:void 0;function g(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&c.call(t)==n}(t))return d?d.call(t):"";var e=t+"";return"0"==e&&1/t==-r?"-0":e}t.exports=function(t){var e;return(t=null==(e=t)?"":g(e))&&t.replace(i,h).replace(o,"")}}).call(this,r(34))},255:function(t,e,r){"use strict";var n=/[|\\{}()[\]^$+*?.]/g;t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(n,"\\$&")}},256:function(t,e,r){"use strict";t.exports=[["ß","ss"],["ä","ae"],["Ä","Ae"],["ö","oe"],["Ö","Oe"],["ü","ue"],["Ü","Ue"],["à","a"],["À","A"],["á","a"],["Á","A"],["â","a"],["Â","A"],["ã","a"],["Ã","A"],["è","e"],["È","E"],["é","e"],["É","E"],["ê","e"],["Ê","E"],["ì","i"],["Ì","I"],["í","i"],["Í","I"],["ò","o"],["Ò","O"],["ó","o"],["Ó","O"],["ô","o"],["Ô","O"],["õ","o"],["Õ","O"],["ù","u"],["Ù","U"],["ú","u"],["Ú","U"],["ý","y"],["Ý","Y"],["ă","a"],["Ă","A"],["Đ","D"],["đ","d"],["ĩ","i"],["Ĩ","I"],["ũ","u"],["Ũ","U"],["ơ","o"],["Ơ","O"],["ư","u"],["Ư","U"],["ạ","a"],["Ạ","A"],["ả","a"],["Ả","A"],["ấ","a"],["Ấ","A"],["ầ","a"],["Ầ","A"],["ẩ","a"],["Ẩ","A"],["ẫ","a"],["Ẫ","A"],["ậ","a"],["Ậ","A"],["ắ","a"],["Ắ","A"],["ằ","a"],["Ằ","A"],["ẳ","a"],["Ẳ","A"],["ẵ","a"],["Ẵ","A"],["ặ","a"],["Ặ","A"],["ẹ","e"],["Ẹ","E"],["ẻ","e"],["Ẻ","E"],["ẽ","e"],["Ẽ","E"],["ế","e"],["Ế","E"],["ề","e"],["Ề","E"],["ể","e"],["Ể","E"],["ễ","e"],["Ễ","E"],["ệ","e"],["Ệ","E"],["ỉ","i"],["Ỉ","I"],["ị","i"],["Ị","I"],["ọ","o"],["Ọ","O"],["ỏ","o"],["Ỏ","O"],["ố","o"],["Ố","O"],["ồ","o"],["Ồ","O"],["ổ","o"],["Ổ","O"],["ỗ","o"],["Ỗ","O"],["ộ","o"],["Ộ","O"],["ớ","o"],["Ớ","O"],["ờ","o"],["Ờ","O"],["ở","o"],["Ở","O"],["ỡ","o"],["Ỡ","O"],["ợ","o"],["Ợ","O"],["ụ","u"],["Ụ","U"],["ủ","u"],["Ủ","U"],["ứ","u"],["Ứ","U"],["ừ","u"],["Ừ","U"],["ử","u"],["Ử","U"],["ữ","u"],["Ữ","U"],["ự","u"],["Ự","U"],["ỳ","y"],["Ỳ","Y"],["ỵ","y"],["Ỵ","Y"],["ỷ","y"],["Ỷ","Y"],["ỹ","y"],["Ỹ","Y"],["ء","e"],["آ","a"],["أ","a"],["ؤ","w"],["إ","i"],["ئ","y"],["ا","a"],["ب","b"],["ة","t"],["ت","t"],["ث","th"],["ج","j"],["ح","h"],["خ","kh"],["د","d"],["ذ","dh"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["ص","s"],["ض","d"],["ط","t"],["ظ","z"],["ع","e"],["غ","gh"],["ـ","_"],["ف","f"],["ق","q"],["ك","k"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["و","w"],["ى","a"],["ي","y"],["َ‎","a"],["ُ","u"],["ِ‎","i"],["٠","0"],["١","1"],["٢","2"],["٣","3"],["٤","4"],["٥","5"],["٦","6"],["٧","7"],["٨","8"],["٩","9"],["چ","ch"],["ک","k"],["گ","g"],["پ","p"],["ژ","zh"],["ی","y"],["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"],["ټ","p"],["ځ","z"],["څ","c"],["ډ","d"],["ﺫ","d"],["ﺭ","r"],["ړ","r"],["ﺯ","z"],["ږ","g"],["ښ","x"],["ګ","g"],["ڼ","n"],["ۀ","e"],["ې","e"],["ۍ","ai"],["ٹ","t"],["ڈ","d"],["ڑ","r"],["ں","n"],["ہ","h"],["ھ","h"],["ے","e"],["А","A"],["а","a"],["Б","B"],["б","b"],["В","V"],["в","v"],["Г","G"],["г","g"],["Д","D"],["д","d"],["Е","E"],["е","e"],["Ж","Zh"],["ж","zh"],["З","Z"],["з","z"],["И","I"],["и","i"],["Й","J"],["й","j"],["К","K"],["к","k"],["Л","L"],["л","l"],["М","M"],["м","m"],["Н","N"],["н","n"],["О","O"],["о","o"],["П","P"],["п","p"],["Р","R"],["р","r"],["С","S"],["с","s"],["Т","T"],["т","t"],["У","U"],["у","u"],["Ф","F"],["ф","f"],["Х","H"],["х","h"],["Ц","Cz"],["ц","cz"],["Ч","Ch"],["ч","ch"],["Ш","Sh"],["ш","sh"],["Щ","Shh"],["щ","shh"],["Ъ",""],["ъ",""],["Ы","Y"],["ы","y"],["Ь",""],["ь",""],["Э","E"],["э","e"],["Ю","Yu"],["ю","yu"],["Я","Ya"],["я","ya"],["Ё","Yo"],["ё","yo"],["ș","s"],["Ș","s"],["ț","t"],["Ț","t"],["ş","s"],["Ş","s"],["ç","c"],["Ç","c"],["ğ","g"],["Ğ","g"],["ı","i"],["İ","i"]]},257:function(t,e,r){"use strict";t.exports=[["&"," and "],["🦄"," unicorn "],["♥"," love "]]},258:function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(8));t.exports=n.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{parallax:{default:!0,type:Boolean},speedFactor:{default:.15,type:Number},fixed:{default:!1,type:Boolean},breakpoint:{default:"(min-width: 968px)",type:String},sectionHeight:{default:70,type:Number,required:!1},sectionClass:{type:String,default:"Masthead"},containerClass:{type:String,default:"Masthead__image"},parallaxClass:{type:String,default:"is-parallax"},fixedClass:{type:String,default:"is-fixed"},direction:{type:String,default:"up"}},data:function(){return{el:null,mediaQuery:null}},mounted:function(){this.parallax&&!this.fixed&&(this.el=this.$refs.parallax,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},this.init())},methods:{animateElement:function(){var t=this.$refs.block.offsetHeight,e=this.$refs.parallax.offsetHeight-t,r=window.pageYOffset*this.speedFactor;r<=e&&r>=0&&(this.el.style.transform="translate3d(0, "+r*this.directionValue+"px ,0)")},scrollHandler:function(){var t=this;window.requestAnimationFrame((function(){t.isInView(t.$refs.parallax)&&t.animateElement()}))},isInView:function(t){var e=t.getBoundingClientRect();return e.bottom>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)},setupListener:function(){this.mediaQuery.matches?window.addEventListener("scroll",this.scrollHandler,!1):window.removeEventListener("scroll",this.scrollHandler,!1)},init:function(){this.mediaQuery=window.matchMedia(this.breakpoint),this.mediaQuery&&(this.mediaQuery.addListener(this.setupListener),this.setupListener())}},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)},computed:{directionValue:function(){return"down"===this.direction?1:-1}}}},function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return o[t>>18&63]+o[t>>12&63]+o[t>>6&63]+o[63&t]}function i(t,e,r){for(var i,o=[],s=e;s<r;s+=3)i=(t[s]<<16)+(t[s+1]<<8)+t[s+2],o.push(n(i));return o.join("")}e.byteLength=function(t){return 3*t.length/4-r(t)},e.toByteArray=function(t){var e,n,i,o,u,f,h=t.length;u=r(t),f=new a(3*h/4-u),i=u>0?h-4:h;var c=0;for(e=0,n=0;e<i;e+=4,n+=3)o=s[t.charCodeAt(e)]<<18|s[t.charCodeAt(e+1)]<<12|s[t.charCodeAt(e+2)]<<6|s[t.charCodeAt(e+3)],f[c++]=o>>16&255,f[c++]=o>>8&255,f[c++]=255&o;return 2===u?(o=s[t.charCodeAt(e)]<<2|s[t.charCodeAt(e+1)]>>4,f[c++]=255&o):1===u&&(o=s[t.charCodeAt(e)]<<10|s[t.charCodeAt(e+1)]<<4|s[t.charCodeAt(e+2)]>>2,f[c++]=o>>8&255,f[c++]=255&o),f},e.fromByteArray=function(t){for(var e,r=t.length,n=r%3,s="",a=[],u=16383,f=0,h=r-n;f<h;f+=u)a.push(i(t,f,f+u>h?h:f+u));return 1===n?(e=t[r-1],s+=o[e>>2],s+=o[e<<4&63],s+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],s+=o[e>>10],s+=o[e>>4&63],s+=o[e<<2&63],s+="="),a.push(s),a.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,h=u.length;f<h;++f)o[f]=u[f],s[u.charCodeAt(f)]=f;s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},function(t,e,r){(function(t){
/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function n(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=o.prototype:(null===t&&(t=new o(e)),t.length=e),t}function o(t,e,r){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return u(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),o.TYPED_ARRAY_SUPPORT?(t=e).__proto__=o.prototype:t=f(t,e),t}(t,e,r,n):"string"==typeof e?function(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!o.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|c(e,r),s=(t=i(t,n)).write(e,r);return s!==n&&(t=t.slice(0,s)),t}(t,e,r):function(t,e){if(o.isBuffer(e)){var r=0|h(e.length);return 0===(t=i(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?i(t,0):f(t,e);if("Buffer"===e.type&&z(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e){if(a(e),t=i(t,e<0?0:0|h(e)),!o.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function f(t,e){var r=e.length<0?0:0|h(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function h(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function c(t,e){if(o.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return L(t).length;default:if(n)return j(t).length;e=(""+e).toLowerCase(),n=!0}}function l(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,e,r);case"utf8":case"utf-8":return _(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return R(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function p(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function d(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:g(t,e,r,n,i);if("number"==typeof e)return e&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):g(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function g(t,e,r,n,i){function o(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}var s,a=1,u=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;a=2,u/=2,f/=2,r/=2}if(i){var h=-1;for(s=r;s<u;s++)if(o(t,s)===o(e,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===f)return h*a}else-1!==h&&(s-=s-h),h=-1}else for(r+f>u&&(r=u-f),s=r;s>=0;s--){for(var c=!0,l=0;l<f;l++)if(o(t,s+l)!==o(e,l)){c=!1;break}if(c)return s}return-1}function A(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function y(t,e,r,n){return D(j(e,t.length-r),t,r,n)}function w(t,e,r,n){return D(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function v(t,e,r,n){return w(t,e,r,n)}function m(t,e,r,n){return D(L(e),t,r,n)}function b(t,e,r,n){return D(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function E(t,e,r){return 0===e&&r===t.length?N.fromByteArray(t):N.fromByteArray(t.slice(e,r))}function _(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,a,u,f=t[i],h=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=r)switch(c){case 1:f<128&&(h=f);break;case 2:128==(192&(o=t[i+1]))&&(u=(31&f)<<6|63&o)>127&&(h=u);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&f)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&f)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(h=u)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var e=t.length;if(e<=F)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=F));return r}(n)}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function R(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function x(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=M(t[o]);return i}function C(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function U(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function S(t,e,r,n,i,s){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function T(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function P(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function O(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(t,e,r,n,i){return i||O(t,0,r,4),k.write(t,e,r,n,23,4),r+4}function I(t,e,r,n,i){return i||O(t,0,r,8),k.write(t,e,r,n,52,8),r+8}function M(t){return t<16?"0"+t.toString(16):t.toString(16)}function j(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function L(t){return N.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function D(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}var N=r(2),k=r(6),z=r(7);e.Buffer=o,e.SlowBuffer=function(t){return+t!=t&&(t=0),o.alloc(+t)},e.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,e,r){return s(null,t,e,r)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,e,r){return function(t,e,r,n){return a(e),e<=0?i(t,e):void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}(null,t,e,r)},o.allocUnsafe=function(t){return u(null,t)},o.allocUnsafeSlow=function(t){return u(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,e){if(!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!z(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=o.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!o.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},o.byteLength=c,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)p(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)p(this,e,e+3),p(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)p(this,e,e+7),p(this,e+1,e+6),p(this,e+2,e+5),p(this,e+3,e+4);return this},o.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_(this,0,t):l.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,e,r,n,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var s=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0),u=Math.min(s,a),f=this.slice(n,i),h=t.slice(e,r),c=0;c<u;++c)if(f[c]!==h[c]){s=f[c],a=h[c];break}return s<a?-1:a<s?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return d(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return d(this,t,e,r,!1)},o.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,e,r);case"utf8":case"utf-8":return y(this,t,e,r);case"ascii":return w(this,t,e,r);case"latin1":case"binary":return v(this,t,e,r);case"base64":return m(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var F=4096;o.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),o.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=o.prototype;else{var i=e-t;r=new o(i,void 0);for(var s=0;s<i;++s)r[s]=this[s+t]}return r},o.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||U(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},o.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||U(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},o.prototype.readUInt8=function(t,e){return e||U(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return e||U(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return e||U(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return e||U(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return e||U(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||U(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},o.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||U(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},o.prototype.readInt8=function(t,e){return e||U(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){e||U(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){e||U(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return e||U(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return e||U(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return e||U(t,4,this.length),k.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return e||U(t,4,this.length),k.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return e||U(t,8,this.length),k.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return e||U(t,8,this.length),k.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,r,n){t=+t,e|=0,r|=0,n||S(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},o.prototype.writeUIntBE=function(t,e,r,n){t=+t,e|=0,r|=0,n||S(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},o.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):T(this,t,e,!0),e+2},o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):T(this,t,e,!1),e+2},o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):P(this,t,e,!0),e+4},o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):P(this,t,e,!1),e+4},o.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);S(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},o.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);S(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):T(this,t,e,!0),e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):T(this,t,e,!1),e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):P(this,t,e,!0),e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||S(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):P(this,t,e,!1),e+4},o.prototype.writeFloatLE=function(t,e,r){return Y(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return Y(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return I(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return I(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,s=n-r;if(this===t&&r<e&&e<n)for(i=s-1;i>=0;--i)t[i+e]=this[i+r];else if(s<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},o.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var s;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(s=e;s<r;++s)this[s]=t;else{var a=o.isBuffer(t)?t:j(new o(t,n).toString()),u=a.length;for(s=0;s<r-e;++s)this[s+e]=a[s%u]}return this};var q=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e,r){(t.exports=r(5)(!0)).push([t.id,'.Masthead{position:relative;min-height:21.875rem;scroll-behavior:smooth;overflow:hidden;z-index:-1}@media screen and (min-width:768px){.Masthead{min-height:100vh}}.Masthead__image{width:100%;overflow:hidden;height:120%}.Masthead__image>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"}.Masthead__image.is-parallax{left:0;position:absolute;will-change:transform;right:0;top:0}.Masthead__image.is-parallax>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"}.Masthead__image.is-fixed{position:fixed;will-change:transform}.Masthead__image.is-fixed>img{height:100vh;max-width:none}',"",{version:3,sources:["/Users/jjuszczak/Projekte/Privat/vue-parallax/src/components/Parallax.vue"],names:[],mappings:"AACA,UAAU,kBAAkB,qBAAqB,uBAAuB,gBAAgB,UAAU,CACjG,AACD,oCACA,UAAU,gBAAgB,CACzB,CACA,AACD,iBAAiB,WAAW,gBAAgB,WAAW,CACtD,AACD,qBAAqB,YAAY,eAAe,WAAW,oBAAoB,iBAAiB,uBAAuB,oBAAoB,qDAAqD,CAC/L,AACD,6BAA6B,OAAO,kBAAkB,sBAAsB,QAAQ,KAAK,CACxF,AACD,iCAAiC,YAAY,eAAe,WAAW,oBAAoB,iBAAiB,uBAAuB,oBAAoB,qDAAqD,CAC3M,AACD,0BAA0B,eAAe,qBAAqB,CAC7D,AACD,8BAA8B,aAAa,cAAc,CACxD",file:"Parallax.vue",sourcesContent:['\n.Masthead{position:relative;min-height:21.875rem;scroll-behavior:smooth;overflow:hidden;z-index:-1\n}\n@media screen and (min-width: 768px){\n.Masthead{min-height:100vh\n}\n}\n.Masthead__image{width:100%;overflow:hidden;height:120%\n}\n.Masthead__image>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"\n}\n.Masthead__image.is-parallax{left:0;position:absolute;will-change:transform;right:0;top:0\n}\n.Masthead__image.is-parallax>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"\n}\n.Masthead__image.is-fixed{position:fixed;will-change:transform\n}\n.Masthead__image.is-fixed>img{height:100vh;max-width:none\n}\n'],sourceRoot:""}])},function(t,e,r){(function(e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e){var o=n(i),s=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[r].concat(s).concat([o]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new e(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}}).call(e,r(3).Buffer)},function(t,e){e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[e+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[e+c],c+=l,h-=8);if(0===o)o=1-f;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,u,f=8*o-i-1,h=(1<<f)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+c>=1?l/u:l*Math.pow(2,1-c))*u>=2&&(s++,u/=2),s+c>=h?(a=0,s=h):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){var n=r(9)(r(1),r(10),(function(t){r(11)}),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r,n,i){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var u,f="function"==typeof s?s.options:s;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),n&&(f._scopeId=n),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=u):r&&(u=r),u){var h=f.functional,c=h?f.render:f.beforeCreate;h?f.render=function(t,e){return u.call(e),c(t,e)}:f.beforeCreate=c?[].concat(c,u):[u]}return{esModule:o,exports:s,options:f}}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{ref:"block",class:[t.sectionClass],style:{height:t.sectionHeight+"vh"}},[e("div",{ref:"parallax",class:[t.parallax?t.parallaxClass:"",t.fixed?t.fixedClass:"",t.containerClass]},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),r(12)("4e392459",n,!0)},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=h[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(o(r.parts[i]));h[r.id]={id:r.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(d)return g;n.parentNode.removeChild(n)}if(A){var o=p++;n=l||(l=i()),e=s.bind(null,n,o,!1),r=s.bind(null,n,o,!0)}else n=i(),e=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function s(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,f=r(13),h={},c=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,d=!1,g=function(){},A="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){d=r;var i=f(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var s=i[o];(a=h[s.id]).refs--,r.push(a)}for(e?n(i=f(t,e)):i=[],o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete h[a.id]}}}};var y=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],s=o[0],a={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}}])}}]);
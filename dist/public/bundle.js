var an=function(){"use strict";function a(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(a){f(a)}}function h(a){try{i(d["throw"](a))}catch(a){f(a)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})}function b(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(e)throw new TypeError("Generator is already executing.");for(;k;)try{if(e=1,h&&(i=2&c[0]?h["return"]:c[0]?h["throw"]||((i=h["return"])&&i.call(h),0):h.next)&&!(i=i.call(h,c[1])).done)return i;switch((h=0,i)&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return k.label++,{value:c[1],done:!1};case 5:k.label++,h=c[1],c=[0];continue;case 7:c=k.ops.pop(),k.trys.pop();continue;default:if((i=k.trys,!(i=0<i.length&&i[i.length-1]))&&(6===c[0]||2===c[0])){k=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){k.label=c[1];break}if(6===c[0]&&k.label<i[1]){k.label=i[1],i=c;break}if(i&&k.label<i[2]){k.label=i[2],k.ops.push(c);break}i[2]&&k.ops.pop(),k.trys.pop();continue;}c=b.call(a,k)}catch(a){c=[6,a],h=0}finally{e=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e,h,i,j,k={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return j={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(j[Symbol.iterator]=function(){return this}),j}function c(c,d){return a(this,void 0,void 0,function(){var a,f,g;return b(this,function(b){switch(b.label){case 0:return a={type:"event",category:"",action:"",label:"",url:window.location.href,urlDomain:window.location.hostname,urlPath:window.location.pathname,referrer:document.referrer},f=e({},a,c),[4,fetch("",{cache:"no-cache",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(f)})];case 1:if(g=b.sent(),200!==g.status)throw new Error("Bad data sent with event");return d?[2,d()]:[2];}})})}function d(d,e,f){return a(this,void 0,void 0,function(){return b(this,function(){return"send"===d?[2,c(e,f)]:[2]})})}var e=function(){return e=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},e.apply(this,arguments)},f="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window,g=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(a,c){c(b)})(f,function(a){function b(a){return a&&DataView.prototype.isPrototypeOf(a)}function c(a){if("string"!=typeof a&&(a+=""),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function d(a){return"string"!=typeof a&&(a+=""),a}function e(a){var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return t.iterable&&(b[Symbol.iterator]=function(){return b}),b}function f(a){this.map={},a instanceof f?a.forEach(function(a,b){this.append(b,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function g(a){return a.bodyUsed?Promise.reject(new TypeError("Already read")):void(a.bodyUsed=!0)}function h(a){return new Promise(function(b,c){a.onload=function(){b(a.result)},a.onerror=function(){c(a.error)}})}function i(a){var b=new FileReader,c=h(b);return b.readAsArrayBuffer(a),c}function j(a){var b=new FileReader,c=h(b);return b.readAsText(a),c}function k(a){for(var b=String.fromCharCode,c=new Uint8Array(a),d=Array(c.length),e=0;e<c.length;e++)d[e]=b(c[e]);return d.join("")}function l(a){if(a.slice)return a.slice(0);var b=new Uint8Array(a.byteLength);return b.set(new Uint8Array(a)),b.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(a){this._bodyInit=a,a?"string"==typeof a?this._bodyText=a:t.blob&&Blob.prototype.isPrototypeOf(a)?this._bodyBlob=a:t.formData&&FormData.prototype.isPrototypeOf(a)?this._bodyFormData=a:t.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)?this._bodyText=a.toString():t.arrayBuffer&&t.blob&&b(a)?(this._bodyArrayBuffer=l(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||v(a))?this._bodyArrayBuffer=l(a):this._bodyText=a=Object.prototype.toString.call(a):this._bodyText="",this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var a=g(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");else return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?g(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(i)}),this.text=function(){var a=g(this);if(a)return a;if(this._bodyBlob)return j(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(k(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");else return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function n(a){var b=a.toUpperCase();return-1<w.indexOf(b)?b:a}function o(a,b){b=b||{};var c=b.body;if(a instanceof o){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url,this.credentials=a.credentials,b.headers||(this.headers=new f(a.headers)),this.method=a.method,this.mode=a.mode,this.signal=a.signal,c||null==a._bodyInit||(c=a._bodyInit,a.bodyUsed=!0)}else this.url=a+"";if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new f(b.headers)),this.method=n(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}function p(a){var b=new FormData;return a.trim().split("&").forEach(function(a){if(a){var c=a.split("="),d=c.shift().replace(/\+/g," "),e=c.join("=").replace(/\+/g," ");b.append(decodeURIComponent(d),decodeURIComponent(e))}}),b}function q(a){var b=new f,c=a.replace(/\r?\n[\t ]+/g," ");return c.split(/\r?\n/).forEach(function(a){var c=a.split(":"),d=c.shift().trim();if(d){var e=c.join(":").trim();b.append(d,e)}}),b}function r(a,b){b||(b={}),this.type="default",this.status=void 0===b.status?200:b.status,this.ok=200<=this.status&&300>this.status,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new f(b.headers),this.url=b.url||"",this._initBody(a)}function s(b,c){return new Promise(function(d,e){function f(){h.abort()}var g=new o(b,c);if(g.signal&&g.signal.aborted)return e(new a.DOMException("Aborted","AbortError"));var h=new XMLHttpRequest;h.onload=function(){var a={status:h.status,statusText:h.statusText,headers:q(h.getAllResponseHeaders()||"")};a.url="responseURL"in h?h.responseURL:a.headers.get("X-Request-URL");var b="response"in h?h.response:h.responseText;d(new r(b,a))},h.onerror=function(){e(new TypeError("Network request failed"))},h.ontimeout=function(){e(new TypeError("Network request failed"))},h.onabort=function(){e(new a.DOMException("Aborted","AbortError"))},h.open(g.method,g.url,!0),"include"===g.credentials?h.withCredentials=!0:"omit"===g.credentials&&(h.withCredentials=!1),"responseType"in h&&t.blob&&(h.responseType="blob"),g.headers.forEach(function(a,b){h.setRequestHeader(b,a)}),g.signal&&(g.signal.addEventListener("abort",f),h.onreadystatechange=function(){4===h.readyState&&g.signal.removeEventListener("abort",f)}),h.send("undefined"==typeof g._bodyInit?null:g._bodyInit)})}var t={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(a){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(t.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=ArrayBuffer.isView||function(a){return a&&-1<u.indexOf(Object.prototype.toString.call(a))};f.prototype.append=function(a,b){a=c(a),b=d(b);var e=this.map[a];this.map[a]=e?e+", "+b:b},f.prototype["delete"]=function(a){delete this.map[c(a)]},f.prototype.get=function(a){return a=c(a),this.has(a)?this.map[a]:null},f.prototype.has=function(a){return this.map.hasOwnProperty(c(a))},f.prototype.set=function(a,b){this.map[c(a)]=d(b)},f.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&a.call(b,this.map[c],c,this)},f.prototype.keys=function(){var a=[];return this.forEach(function(b,c){a.push(c)}),e(a)},f.prototype.values=function(){var a=[];return this.forEach(function(b){a.push(b)}),e(a)},f.prototype.entries=function(){var a=[];return this.forEach(function(b,c){a.push([c,b])}),e(a)},t.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];o.prototype.clone=function(){return new o(this,{body:this._bodyInit})},m.call(o.prototype),m.call(r.prototype),r.prototype.clone=function(){return new r(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},r.error=function(){var a=new r(null,{status:0,statusText:""});return a.type="error",a};var x=[301,302,303,307,308];r.redirect=function(a,b){if(-1===x.indexOf(b))throw new RangeError("Invalid status code");return new r(null,{status:b,headers:{location:a}})},a.DOMException=self.DOMException;try{new a.DOMException}catch(b){a.DOMException=function(a,b){this.message=a,this.name=b;var c=Error(a);this.stack=c.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}s.polyfill=!0,self.fetch||(self.fetch=s,self.Headers=f,self.Request=o,self.Response=r),a.Headers=f,a.Request=o,a.Response=r,a.fetch=s,Object.defineProperty(a,"__esModule",{value:!0})})});(function(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a})(g);var h=window.an;return h.q.forEach(function(a){d.call(null,a)}),d}();
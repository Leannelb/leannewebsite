if (self.CavalryLogger) { CavalryLogger.start_js(["E4U7V"]); }

__d("AdsInstagramStoryProgressBar",["Event","Style","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=5e3,h=25;a={init:function(a,c){__p&&__p();var d,e=Date.now(),f=0,i,j=0,k=function a(){d&&(f=(Date.now()-e+f)%d,e=Date.now(),j=Math.max(0,f/d*100),b("Style").set(c,"width",j+"%")),i=b("setTimeout")(a,h)};if(a instanceof HTMLVideoElement){var l=a;l.readyState>=l.HAVE_METADATA?d=l.duration*1e3:b("Event").listen(l,"loadedmetadata",function(){d=l.duration*1e3});b("Event").listen(l,"timeupdate",function(){e=Date.now(),f=l.currentTime*1e3})}else d=g;i=b("setTimeout")(k,h);b("Event").listen(a,"DOMNodeRemoved",function(){return b("clearTimeout")(i)})}};e.exports=a}),null);
__d("SubRipText",[],(function(a,b,c,d,e,f){__p&&__p();var g={size:"90%"};function h(a){__p&&__p();var b=Number(a.substr(0,a.length-1)),c=a.substr(-1);switch(c){case"s":return b;case"m":return b*60;case"h":return b*3600}c=a.split(":");b=Number(c[c.length-1].replace(/,/,"."));c.length>1&&(b+=Number(c[c.length-2])*60);c.length>2&&(b+=Number(c[c.length-3])*3600);return b}function i(a){__p&&__p();a=a.split(/\r\n|\r|\n/).map(function(a){return a.trim()});var b=[],c=0;do{var d=a.indexOf("",c);d<0&&(d=a.length);var e=k(a.slice(c,d));e&&b.push(e);c=d+1}while(c>0&&c<a.length);return b}function j(a){a=a.split("-->");if(a.length!=2)return null;var b=h(a[0].trim());a=h(a[1].trim());return Number.isNaN(a)||Number.isNaN(b)?null:{begin:b,end:a}}function k(a){if(a.length<3)return null;var b=l(a[0]),c=j(a[1]);return!c?null:{counter:b,begin:c.begin,end:c.end,text:a.slice(2,6)}}function l(a){return Number(a.trim())}function m(a){a=a.split(".");return a[0].length<2?"0"+a.join("."):a.join(".")}function n(a){var b=m(Math.floor(a/3600).toString()),c=m(Math.floor(a%3600/60).toString());a=m((a%60).toFixed(3));return b+":"+c+":"+a}function o(a,b,c){var d="";if(c)for(var e in c)d+=" "+e+":"+c[e];return n(a)+" --> "+n(b)+d}function p(a,b){return a.counter+"\n"+o(a.begin,a.end,b)+"\n"+a.text.join("\n")+"\n"}function q(a,b){return"WEBVTT\n\n"+a.map(function(a){return p(a,b)}).join("\n")}function a(a){"use strict";this.$1=i(a),this.$1.sort(function(a,b){return a.counter-b.counter}),this.$2=this.$1.map(function(a,b){return b}).sort(function(a,b){return this.$1[a].begin-this.$1[b].begin}.bind(this)),this.invalidateCache(),this.$6=g}a.prototype.$7=function(a){"use strict";return this.$1[this.$2[a]]};a.prototype.$8=function(a){"use strict";var b=this.$3;while(b<this.$2.length){var c=this.$7(b);if(c.begin<=a)this.$4.push(c),b++;else break}this.$3=b};a.prototype.$9=function(a){"use strict";this.$4=this.$4.filter(function(b){return b.end>a})};a.prototype.invalidateCache=function(){"use strict";this.$5=0,this.$4=[],this.$3=0};a.prototype.setStyle=function(a){"use strict";this.$6=a};a.prototype.getSubtitles=function(a){"use strict";a<this.$5&&this.invalidateCache();this.$5=a;this.$8(a);this.$9(a);return this.$4.reduce(function(a,b){return a.concat(b.text)},[])};a.prototype.renderVTT=function(){"use strict";return q(this.$1,this.$6)};e.exports=a}),null);
__d("IGVideoSubtitles",["DOM","EventListener","SubRipText","XHRRequest","getCrossOriginTransport"],(function(a,b,c,d,e,f){__p&&__p();var g=a.URL||a.webkitURL;function h(a,b,c){"use strict";this.$1=a,this.$2=this.showSubtitles.bind(this,c),this.$3(b)}h.prototype.$4=function(a){"use strict";a=new(b("SubRipText"))(a);a=new Blob([a.renderVTT()],{type:"text/vtt"});return g.createObjectURL(a)};h.prototype.$3=function(a){"use strict";if(!g)return;new(b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a){this.$5(this.$4(a))}.bind(this)).send()};h.prototype.$5=function(a){"use strict";a=b("DOM").create("track",{kind:"captions",src:a});b("EventListener").listen(a,"load",function(){this.$2()}.bind(this));b("DOM").appendContent(this.$1,a);this.hideSubtitles()};h.prototype.showSubtitles=function(a){"use strict";Array.prototype.forEach.call(this.$1.textTracks,function(b){b.mode="showing",a&&Array.prototype.forEach.call(b.cues,function(b){return b.line=a})})};h.prototype.hideSubtitles=function(){"use strict";Array.prototype.forEach.call(this.$1.textTracks,function(a){return a.mode="hidden"})};h.prototype.setOnSubtitlesReady=function(a){"use strict";this.$2=a};h.load=function(a,b,c){"use strict";return new h(a,b,c)};e.exports=h}),null);
__d("isCdnURI",["CdnAkamaiDomainsConfig"],(function(a,b,c,d,e,f){"use strict";function a(a){if(a.getProtocol()!=="http"&&a.getProtocol()!=="https")return!1;var c=a.getPort();if(!!c&&c!==80&&c!==443)return!1;return a.isSubdomainOfDomain("fbcdn.net")?!0:b("CdnAkamaiDomainsConfig")[a.getDomain()]!=undefined}e.exports=a}),null);
__d("InstagramVideo",["EventListener","IGVideoSubtitles","LitestandStoryInsertionStatus","Run","URI","isCdnURI","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3/15,h;a={init:function(a,c,d){__p&&__p();h=a;h.loop=d.loop;h.muted=d.playMuted!=null?d.playMuted:!0;h.setAttribute("webkit-playsinline","");h.setAttribute("playsinline","");i(d);h.play();this.setSubtitles(h,d.subtitlesSrc,d.subtitleOffset);c=b("LitestandStoryInsertionStatus").registerBlocker(function(){return!h.paused&&!h.ended});b("Run").onLeave(c.unsubscribe.bind(c))},setSubtitles:function(a,c,d){c&&b("isCdnURI")(new(b("URI"))(c))&&b("IGVideoSubtitles").load(a,c,d)}};function i(a){a.playStartSec&&a.playStartSec>0&&b("EventListener").listen(h,"loadedmetadata",j(a)),a.playEndSec!=null&&b("EventListener").listen(h,"timeupdate",b("throttle").withBlocking(k.bind(null,a),g)),a.loop&&(a.playStartSec||a.playEndSec)&&b("EventListener").listen(h,"timeupdate",b("throttle").withBlocking(l.bind(null,a),g))}function j(a){a.playStartSec>0&&(h.currentTime=a.playStartSec)}function k(a,b){h.currentTime>a.playEndSec&&!a.loop&&h.pause()}function l(a,b){(a.playEndSec&&h.currentTime>a.playEndSec||a.playStartSec&&h.currentTime==0)&&(h.currentTime=a.playStartSec)}e.exports=a}),null);
__d("InstagramAdsPreview",["cssVar","csx","cx","CSS","DOMDimensions","DOMQuery","Event","Style"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=14,k=23,l={truncateCaption:function(a,c,d){__p&&__p();var e=[],f,g=!1;c=parseInt("15px",c);Array.from(a.children).forEach(function(a){Array.from(a.children).forEach(function(a){e.push(a)})});var h=e[e.length-1];for(var i=0;i<e.length-1;i++){b("CSS").removeClass(e[i],"_50f0");f=b("DOMDimensions").getElementDimensions(a).height;if(f/c>d){g=!0;b("CSS").removeClass(h,"_50f0");while(f/c>d&&i>=0)b("CSS").addClass(e[i],"_50f0"),f=b("DOMDimensions").getElementDimensions(a).height,i--;break}}b("CSS").removeClass(a,"_50f1");return g},setDynamicTextSizeForCaption:function(a,b,c,d){__p&&__p();var e=k,f=j;while(e-f>1){var g=Math.floor(f+(e-f)/2);l.setTextFontSizeForCaption(a,g);l.didElementDimensionOverflow(a,b,c,d,parseFloat(window.getComputedStyle(a,null).getPropertyValue("line-height")))?e=g:f=g}l.setTextFontSizeForCaption(a,e);if(!l.didElementDimensionOverflow(a,b,c,d,parseFloat(window.getComputedStyle(a,null).getPropertyValue("line-height"))))return;l.setTextFontSizeForCaption(a,f)},setTextFontSizeForCaption:function(a,c){b("Style").set(a,"font-size",c+"px")},didElementDimensionOverflow:function(a,c,d,e,f){a=b("DOMDimensions").getElementDimensions(a);return a.height>c||a.width>d||a.height/f>e},subscribeFocusEvent:function(a,c){__p&&__p();var d=b("DOMQuery").scry(a,"._2ru6");if(d.length!==1)return;d=d[0];var e=!1,f="_2ru4",g="_2ru5",h=b("DOMQuery").find(a,"._2ru5"),i=function(){if(e)return;var a=b("DOMQuery").find(h,"._2ru7");e=!0;b("CSS").removeClass(h,g);b("CSS").addClass(h,f);a.hasAttribute("src")&&a.setAttribute("src",c.focusImageSrc)},j=function(){if(!e)return;var a=b("DOMQuery").find(h,"._2ru7");e=!1;b("CSS").removeClass(h,f);b("CSS").addClass(h,g);a.hasAttribute("src")&&a.setAttribute("src",c.unfocusImageSrc)},k=function(a){return a instanceof HTMLVideoElement?!1:a instanceof HTMLImageElement};b("Event").listen(d,"click",function(event){k(event.srcElement)&&i()});b("Event").listen(document,"click",function(event){a.contains(event.target)||j()})},subscribeToggleEvent:function(a){var c=!1,d=b("DOMQuery").scry(a,".img");b("Event").listen(a,"click",function(event){c=!c;for(var a=0;a<d.length;a++)b("CSS").toggle(d[a])})},isDescendant:function(a,b,c){c=c||1;b=b.parentNode;while(c&&b){if(a==b)return!0;b=b.parentNode;c--}return!1}};e.exports=l}),null);
__d("InstagramCarouselAdsPreview",["csx","cx","Animation","CSS","DOMQuery","Ease","Event","setTimeout"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=500,j={subscribeScrollEvent:function(a,c,d,e,f){__p&&__p();var g=!1;if(d===null){var h=b("DOMQuery").find(d,"._2_zv");j.toggleCTAMeta(h,f)}b("Event").listen(a,"click",function(){__p&&__p();if(g)return;if(d){var a="_2_zv";a=b("DOMQuery").find(d,"."+a);var c=a.previousSibling;c==null&&(c=d.lastChild);j.toggleCTAButton(a,c);j.toggleCTAMeta(c,f)}if(e){a="_2ikr";c=b("DOMQuery").find(e,"."+a);a=c.previousSibling;a==null&&(a=e.lastChild);j.toggleCaption(c,a)}g=!0;b("setTimeout")(function(){g=!1},i)});b("Event").listen(c,"click",function(){__p&&__p();if(g)return;if(d){var a="_2_zv";a=b("DOMQuery").find(d,"."+a);var c=a.nextSibling;c==null&&(c=d.firstChild);j.toggleCTAButton(a,c);j.toggleCTAMeta(c,f)}if(e){a="_2ikr";c=b("DOMQuery").find(e,"."+a);a=c.nextSibling;a==null&&(a=e.firstChild);j.toggleCaption(c,a)}g=!0;b("setTimeout")(function(){g=!1},i)})},toggleCTAButton:function(a,c){var d="_2_zv",e="_2_zw";new(b("Animation"))(a).from("opacity",1).to("opacity",0).ease(b("Ease").makePowerIn(4)).duration(400).go();new(b("Animation"))(c).from("opacity",0).to("opacity",1).ease(b("Ease").makePowerIn(4)).duration(400).ondone(function(){b("CSS").addClass(c,d),b("CSS").removeClass(c,e),b("CSS").addClass(a,e),b("CSS").removeClass(a,d)}).go()},toggleCaption:function(a,c){var d="_2iks",e="_2ikr";b("CSS").addClass(a,d);b("CSS").removeClass(a,e);b("CSS").removeClass(c,d);b("CSS").addClass(c,e)},toggleCTAMeta:function(a,c){if(a===null||c===null)return;b("CSS").matchesSelector(a,"._z_5")?b("CSS").show(c):b("CSS").hide(c)}};e.exports=j}),null);
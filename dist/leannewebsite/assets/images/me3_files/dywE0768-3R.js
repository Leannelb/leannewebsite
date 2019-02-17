if (self.CavalryLogger) { CavalryLogger.start_js(["FKq6R"]); }

__d("InstanceProxy",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a}a.prototype.getInstance=function(){"use strict";return this.$1};a.prototype.setInstance=function(a){"use strict";this.$1=a};e.exports=a}),null);
__d("BrowseMouseSpeedTracker",["Event","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g=50,h=null,i=null,j=[],k={x:0,y:0},l=0,m=[{x:0,y:0},{x:0,y:0}];function n(){m[l].x=k.x,m[l].y=k.y,l=(l+1)%2}function o(){var a=m[0].x-m[1].x,b=m[0].y-m[1].y;return Math.sqrt(a*a+b*b)*(1e3/g)}function p(){if(h)return;i=b("Event").listen(document.body,"mousemove",function(event){k.x=event.pageX||event.screenX,k.y=event.pageY||event.screenY});h=window.setInterval(function(){n(),r(o())},g)}function q(){h&&(window.clearInterval(h),i.remove(),h=null)}function r(a){j.forEach(function(b){a<b.velocity&&(b.callback(a),s(b))})}function s(a){b("removeFromArray")(j,a),j.length||q()}a={addTrigger:function(a,b){a={velocity:a,callback:b};p();j.push(a);return{remove:s.bind(null,a)}}};e.exports=a}),null);
__d("BrowseRunOnLeave",["Run"],(function(a,b,c,d,e,f){a={register:function(a){b("Run").onLeave(a),this.handlers=(this.handlers||[]).concat(a)},cleanup:function(){this.handlers.forEach(function(a){return a.call(null,{})}),this.handlers=[]}};e.exports=a}),null);
__d("BrowseMouse",["cx","BrowseMouseSpeedTracker","BrowseRunOnLeave","CSS","DataStore","DOM","Event","Parent","Toggler","removeFromArray"],(function(a,b,c,d,e,f,g){__p&&__p();var h=500,i="_3u0",j="_3u1",k=null,l=[];function m(a){return b("Parent").byClass(a,j)}function n(a){return"browse-"+(a?"over":"out")}function a(a){return b("CSS").addClass(a,j)}function c(a,c,d,e){var f=m(c);e||l.push({element:c,callback:d});if(f){e=n(a);c=b("DataStore").get(f,e,[]);b("DataStore").set(f,e,c.concat(d));return f}}function o(a,c){if(a){b("CSS").conditionClass(a,i,c);a=b("DataStore").get(a,n(c));a&&a.forEach(function(a){a()})}}function p(a){var c=a.element;["browse-over","browse-out"].forEach(function(d){var e=b("DataStore").get(c,d);e&&(b("removeFromArray")(e,a.callback),e.length||b("DataStore").remove(c,d))})}function d(){__p&&__p();var a=null;if(k)return;k=b("Event").listen(document.body,"mouseover",function(c){__p&&__p();var d=m(c.getTarget());if(!d||d==a)return;var e=null,f=null,g=!1;a=d;var i=b("BrowseMouseSpeedTracker").addTrigger(h,function(){o(d,!0),g=!0}),j=function(){i.remove(),l.remove(),e&&e.remove(),f&&f.unsubscribe()},k=function(){j(),g&&o(d,!1),a=null},l=b("Event").listen(d,"mouseleave",function(){var a=b("Toggler").getActive();a&&b("DOM").contains(d,a)?(f=b("Toggler").subscribe("hide",k),e=b("Event").listen(d,"mouseover",j)):k()})});b("BrowseRunOnLeave").register(function(){while(l.length)p(l.pop())})}f={init:d,makeTarget:a,onMouseOver:c.bind(null,!0),onMouseOut:c.bind(null,!1),removeListeners:p};e.exports=f}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="data-gamesrankedimp";c=1e3;function j(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function k(a){return function(){a&&(a(),a=null)}}h=babelHelpers.inherits(a,b("VisibilityTracking"));h&&h.prototype;a.prototype.handleEvent=function(a,event){if(event.name==="visible"){var c=a.getAttribute(i);a.removeAttribute(i);c&&(j(a),c&&b("Banzai").post("games_ranked_imp",{data:c}));b("Event").listen(a,"mouseover",k(function(){b("Banzai").post("games_mouseover",{data:c}),b("Event").listen(a,"mouseout",k(function(){b("Banzai").post("games_mouseout",{data:c})}))}))}};function a(){h.apply(this,arguments)}var l=new a({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return l.fireEventCallback()},c,null);l.listeners&&l.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return l.refreshAllTrackedElements()}))}),null);
__d("RequiredFormListener",["Event","Input"],(function(a,b,c,d,e,f){__p&&__p();b("Event").listen(document.documentElement,"submit",function(a){a=a.getTarget();if(a.getAttribute("novalidate"))return!0;a=a.getElementsByTagName("*");for(var c=0;c<a.length;c++)if(a[c].getAttribute("required")&&b("Input").isEmpty(a[c])){a[c].focus();return!1}},b("Event").Priority.URGENT)}),null);
__d("KeyboardActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDuration=function(a){this.$1.duration=a;return this};a.prototype.setKey=function(a){this.$1.key=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={duration:!0,key:!0,vc:!0};e.exports=a}),null);
__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function(a,b,c,d,e,f){a=b("getViewportDimensions")();b("BanzaiNectar").log("browser_dimension","homeload",{x:a.width,y:a.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("PagesBrowserUtils",["Event","QE2Logger","tidyEvent"],(function(a,b,c,d,e,f){var g="pages_browser_your_pages_tab_redesign",h="navItem_2530096808";a={init:function(){var a=document.getElementById(h);b("tidyEvent")(b("Event").listen(a,"click",function(a){b("QE2Logger").logExposureForUser(g)}))}};e.exports=a}),null);
__d("KeyboardActivityLogger",["Event","KeyboardActivityTypedLogger","Keys","isElementInteractive"],(function(a,b,c,d,e,f){__p&&__p();a=["tab","right","left","up","down","enter"];var g=a.reduce(function(a,b){a[b]={count:0,startTS:0};return a},{}),h=20;c={init:function(){document.addEventListener("keydown",this._listenForKey.bind(this))},_listenForKey:function(a){__p&&__p();var c=a.getTarget();if(b("isElementInteractive")(c))return;switch(b("Event").getKeyCode(a)){case b("Keys").TAB:this._checkKeyActivity("tab");break;case b("Keys").RIGHT:this._checkKeyActivity("right");break;case b("Keys").LEFT:this._checkKeyActivity("left");break;case b("Keys").UP:this._checkKeyActivity("up");break;case b("Keys").DOWN:this._checkKeyActivity("down");break;case b("Keys").RETURN:this._checkKeyActivity("enter");break}},_checkKeyActivity:function(a){var b=g[a];b.count++;b.startTS===0&&(b.startTS=Date.now());b.count===h&&(this._log(a),b.count=0,b.startTS=0)},_log:function(a){var c=g[a];c=Date.now()-c.startTS;new(b("KeyboardActivityTypedLogger"))().setKey(a).setDuration(c).log()}};e.exports=c}),null);
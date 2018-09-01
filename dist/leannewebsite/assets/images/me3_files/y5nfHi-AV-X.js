if (self.CavalryLogger) { CavalryLogger.start_js(["r330a"]); }

__d("ChannelConnectionEvents",[],(function(a,b,c,d,e,f){e.exports={CONNECTED:"chat-connection/connected",RECONNECTING:"chat-connection/reconnecting",SHUTDOWN:"chat-connection/shutdown",MUTE_WARNING:"chat-connection/mute",UNMUTE_WARNING:"chat-connection/unmute"}}),null);
__d("ChannelConnection",["Arbiter","ArbiterMixin","ChannelConnectionEvents","ChannelConstants","ChannelManager","JSLogger","Run","SystemEvents","Visibility","clearTimeout","mixin","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("JSLogger").create("channel_connection"),i=null,j=null,k=null,l=null,m=0;b("ChannelManager").startChannelManager();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.CONNECTED=b("ChannelConnectionEvents").CONNECTED,this.RECONNECTING=b("ChannelConnectionEvents").RECONNECTING,this.SHUTDOWN=b("ChannelConnectionEvents").SHUTDOWN,this.MUTE_WARNING="chat-connection/mute",this.UNMUTE_WARNING="chat-connection/unmute",this.unmuteWarning=p,c}a.prototype.disconnected=function(){"use strict";return l===n.SHUTDOWN||l===n.RECONNECTING&&!j&&m>1};a.prototype.isShutdown=function(){"use strict";return l===n.SHUTDOWN};a.prototype.reconnect=function(a){"use strict";if(b("ChannelManager").state==="ping"||b("ChannelManager").state==="pull"||b("ChannelManager").isShutdown())return;h.log("reconnect",{now:a});n.inform(n.RECONNECTING,0);a?(i!==null&&(b("clearTimeout")(i),i=null),b("ChannelManager").enterState("ping!")):i||(i=b("setTimeoutAcrossTransitions")(function(){b("ChannelManager").enterState("ping!"),i=null},b("ChannelConstants").CHANNEL_MANUAL_RECONNECT_DEFER_MSEC));b("ChannelManager").resetDelay()};a.prototype.mockAfterLoad=function(){"use strict";t(),u()};var n=new a();b("Run").onBeforeUnload(function(){});function o(){j&&(b("clearTimeout")(j),j=null)}function p(){o(),h.log("unmute_warning"),n.inform(n.UNMUTE_WARNING)}function q(a){o(),j=b("setTimeoutAcrossTransitions")(p,a),h.log("mute_warning",{time:a}),n.inform(n.MUTE_WARNING)}function r(){k&&(b("clearTimeout")(k),k=null)}function s(a,c){__p&&__p();r();if(a===b("ChannelConstants").ON_ENTER_STATE&&(c.nextState||c.state)==="pull"){if(l!==n.CONNECTED){h.log("connected");var d=!l;l=n.CONNECTED;m=0;n.inform(n.CONNECTED,{init:d})}}else a===b("ChannelConstants").ON_ENTER_STATE&&((c.nextState||c.state)==="ping"||!c.nextState&&c.state==="idle")?k=b("setTimeoutAcrossTransitions")(function(){var b=null;c.state==="idle"&&!c.nextState||(b=c.delay||0);h.log("reconnecting",{delay:b});n.disconnected()&&h.log("reconnecting_ui",{delay:b});l=n.RECONNECTING;c.state==="idle"&&m++;m>1?n.inform(n.RECONNECTING,b):!c.nextState&&c.state==="idle"&&s(a,c)},500):a===b("ChannelConstants").ON_SHUTDOWN&&(h.log("shutdown",{reason:c.reason}),l=n.SHUTDOWN,m=0,n.inform(n.SHUTDOWN,c.reason))}function t(){b("ChannelManager").isShutdown()?s(b("ChannelConstants").ON_SHUTDOWN,b("ChannelManager")._shutdownHint):s(b("ChannelConstants").ON_ENTER_STATE,{state:b("ChannelManager").state,nextState:b("ChannelManager").nextState,delay:0}),b("Visibility").addListener(b("Visibility").VISIBLE,n.reconnect)}b("Run").onAfterLoad(t);function u(){b("Arbiter").subscribe([b("ChannelConstants").ON_ENTER_STATE,b("ChannelConstants").ON_SHUTDOWN],s),b("Arbiter").subscribe(b("ChannelConstants").ATTEMPT_RECONNECT,function(){n.disconnected()&&n.reconnect()}),b("SystemEvents").subscribe(b("SystemEvents").TIME_TRAVEL,function(){n.reconnect(),q(b("ChannelConstants").MUTE_WARNING_TIME_MSEC)}),b("Run").onBeforeUnload(r,!1)}b("Run").onAfterLoad(u);b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.channel_connected=!n.disconnected()});e.exports=n}),3);
__d("XPymkFunnelLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymk/funnel_logging/",{event_ts:{type:"Int",required:!0},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:!0},ref:{type:"String"},action:{type:"Enum",required:!0,enumType:1}})}),null);
__d("PymkFunnelLogger",["AsyncRequest","DOMQuery","XPymkFunnelLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupListeners:function(a,b,c,d,e){this._setupForSingleElement(a,b,c,"add"),this._setupForSingleElement(a,b,d,"click"),this._setupForSingleElement(a,b,e,"click")},logImpression:function(a,b,c){this._logEvent(a,"impression",b,c)},logXOut:function(a,b,c){this._logEvent(a,"hide",b,c)},_logEvent:function(a,event,c,d){a=b("XPymkFunnelLoggingController").getURIBuilder().setInt("candidate_id",a).setInt("signature",c).setInt("event_ts",Math.floor(Date.now()/1e3)).setEnum("action",event).setString("loc",d).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForSingleElement:function(a,c,d,e){Event.listen(d,"click",function(event){var d=a.getAttribute("data-signature"),f=b("DOMQuery").find(a,"input.friendBrowserID");f=parseInt(f.value,10);this._logEvent(f,e,d,c)}.bind(this))}};e.exports=a}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/requests/interaction_history_logging/",{target_id:{type:"FBID",required:!0},log_event:{type:"String",required:!0}})}),null);
__d("FriendRequestIHEventLogger",["AsyncRequest","Event","XFriendRequestIHEventLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupJewelListeners:function(a,b,c){this._setupForJewelSingleElement(a,b,"click"),c&&this._setupForJewelSingleElement(a,c,"click")},logImpression:function(a){this._logEvent(a,"impression")},_logEvent:function(a,event){if(isNaN(a))return;a=b("XFriendRequestIHEventLoggingController").getURIBuilder().setFBID("target_id",a).setString("log_event",event).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForJewelSingleElement:function(a,c,d){b("Event").listen(c,"click",function(event){var b=a.getAttribute("id");if(!b)return;b=b.substring(0,b.length-6);this._logEvent(b,d)}.bind(this))}};e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,event,c){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",event).setStringToStringMap("qp_instance_log_data",c).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,"._5jmm");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);
__d("JewelQPLogging",["QPRenderer"],(function(a,b,c,d,e,f){var g=!1,h=null,i=!1;function j(){if(i)return;g&&h&&(i=!0,b("QPRenderer").logEvent(String(h.promotion_id),"view",h.instance_log_data?h.instance_log_data:{}))}a={onJewelOpened:function(){g=!0,j()},updateQPLogData:function(a){h=a,j()}};e.exports=a}),null);
__d("RequestsJewelStore",["Arbiter","ArbiterMixin","ChannelConstants"],(function(a,b,c,d,e,f){__p&&__p();a=babelHelpers["extends"]({},b("ArbiterMixin"),{_initialized:!1,_count:0,_requestList:{},addFriendRequests:function(a){Object.assign(this._requestList,a)},getRequestListKeys:function(){return Object.keys(this._requestList)},removeRequest:function(a){delete this._requestList[a]},getRequestCount:function(a){return this.getRequestListKeys().length},decrementCount:function(){this.setCount(Math.max(0,this._count-1))},setCount:function(a){b("Arbiter").inform("jewel/count-updated",{jewel:"requests",count:a},"state")},setupListeners:function(){__p&&__p();if(this._initialized)return;this._initialized=!0;b("Arbiter").subscribe("jewel/count-updated",function(a,b){b.jewel==="requests"&&this._updateCount(b.count)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_add"),function(a,b){return this._addRequest(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_friending_notifs"),function(a,b){return this._addNotification(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("mobile_requests_count"),function(a,b){return this._updateBadgeCountFromObject(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_remove_old"),function(a,b){return this._removeOldRequest(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_expired"),function(a,b){return this._refreshJewel(!0)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_seen"),function(a,b){return this.setCount(0)}.bind(this))},_updateCount:function(a){var b=this._count!==a;this._count=a;b&&this.inform("countUpdated",a)},_addRequest:function(a){__p&&__p();if(!a)return;a=a.obj;var b=a.from;a=a.suggester;b=this._requestList[b];b||this.setCount(this._count+1);b=b?b.type:null;a=b===19&&!a;this.inform("addRequest",{shouldReplace:a,previousType:b})},_updateBadgeCountFromObject:function(a){if(!a)return;a=a.obj;a=a.num_unseen+a.num_friend_confirmed_unseen+a.num_expire_highlight_unseen;this._refreshJewel();this.setCount(a)},_addNotification:function(a){if(!a||a.obj.notif_type!=="friend_confirmed")return;this.inform("addNotification")},_removeOldRequest:function(a){if(!a)return;a=this._requestList[a.obj.from];if(!a)return;this.inform("removeOldRequest",a)},_refreshJewel:function(a){a===void 0&&(a=!1),this.inform("refreshJewel",a)}});e.exports=a}),null);
__d("XExpireFriendRequestsMutationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/requests/expire/",{from_m_jewel:{type:"Bool",defaultValue:!1}})}),null);
__d("XGigaboxxUpdateSeenTimeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/gigaboxx/endpoint/writesafe/update_last_seen_time/",{})}),null);
__d("RequestsJewelController",["invariant","Promise","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","Event","EventProfiler","Focus","FriendRequestIHEventLogger","JewelQPLogging","MarauderLogger","Parent","PymkFunnelLogger","RequestsJewelStore","ScrollableArea","TimeSlice","XExpireFriendRequestsMutationController","XGigaboxxUpdateSeenTimeAsyncController","XUIBadge","ge","getElementPosition","getViewportDimensions","promiseDone","requireWeak","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null;b("requireWeak")("FriendBrowserCheckboxController",function(a){return h=a});var i=31,j=600,k=30,l=160;m.getInstance=function(){"use strict";return this.$12};m.updateFromDOM=function(){"use strict";var a=this.getInstance();a&&a.fromDom()};m.setupScroll=function(){"use strict";var a=this.getInstance();a&&a.setupScroll()};m.setInitialHeight=function(){"use strict";var a=this.getInstance();a&&a.updateHeight()};m.maybeLoadJewel=function(){"use strict";var a=this.getInstance();a&&a.maybeLoadJewel()};m.setTitleBadgeCount=function(a){"use strict";this.$11&&this.$11.setCount(a)};m.initTitleBadge=function(a,c){"use strict";this.$11||b("Arbiter").subscribe(["FriendRequest/delete","FriendRequest/confirm","FriendSuggestion/accepting","FriendSuggestion/ignoring"],function(a,b){return this.decrementTitleBadgeCount(b)}.bind(this)),this.$11=c};m.decrementTitleBadgeCount=function(a){"use strict";this.$11&&this.$11.setCount(this.$11.getCount()-1)};m.isOpen=function(){"use strict";var a=this.getInstance();return a?a.$2():!1};m.create=function(a,b){"use strict";this.$12&&g(0);return this.$12=new m(a,b)};m.setupJewelRefresh=function(){"use strict";b("Arbiter").subscribe(["FriendRequest/confirmFromProfile","FriendRequest/deleteFromProfile"],function(a,c){a={};a.reloadcontent=!0;new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(a).setAllowCrossPageTransition(!0).send()})};function m(a,c){"use strict";this.$2=c,this.$1=a,this.$4=-1,this.$5=-1,this.$10=b("Promise").resolve(!0),this.$8=b("throttle").acrossTransitionsWithBlocking(function(){return this.$13({log_impressions:!0})}.bind(this),5e3),b("RequestsJewelStore").subscribe("addRequest",this.$14.bind(this)),b("RequestsJewelStore").subscribe("addNotification",function(){return this.$15()}.bind(this)),b("RequestsJewelStore").subscribe("removeOldRequest",this.$16.bind(this)),b("RequestsJewelStore").subscribe("refreshJewel",this.$17.bind(this)),b("RequestsJewelStore").setupListeners(),this.setupScroll(),this.$18(),this.$19(),this.$20()}m.prototype.fromDom=function(){"use strict";__p&&__p();var a={};b("DOMQuery").scry(this.$1,"li.objectListItem").forEach(function(b){b=b.getAttribute("id");if(b){b=this.$21(b);b&&b.requester&&(a[b.requester]=b)}}.bind(this));b("RequestsJewelStore").addFriendRequests(a);this.$22()};m.prototype.maybeLoadJewel=function(){"use strict";this.$9&&(this.$9(function(){this.openHandler()}.bind(this)),this.$9=null)};m.prototype.updateHeight=function(){"use strict";var a=this.$23();a&&(a.style.height=this.$24()+"px")};m.prototype.markSeen=function(){"use strict";b("promiseDone")(this.$10,function(){new(b("AsyncRequest"))(b("XGigaboxxUpdateSeenTimeAsyncController").getURIBuilder().getURI()).setMethod("POST").send()})};m.prototype.openHandler=function(){"use strict";__p&&__p();!this.$6&&this.$2()&&(this.$6=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstRequestsJewelOpen"));b("Arbiter").inform("requestsJewel/opened");var a=b("ge")("fbRequestsJewelLoading"),c=this.$23();new(b("AsyncRequest"))().setURI(b("XExpireFriendRequestsMutationController").getURIBuilder().getURI()).send();if(!a&&!c)this.$9=b("TimeSlice").getGuardedContinuation("RequestsJewelController clickBeforeE2E continuation");else if(a)this.$8();else{a=b("RequestsJewelStore").getRequestListKeys();a.length>0&&new(b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI("/friends/requests/log_impressions").setData({ids:a.join(","),ref:"jewel"}).send()}b("DOMQuery").scry(this.$1,"a.findFriendsLink").forEach(function(a){b("Focus").set(a)});c&&b("ScrollableArea").poke(c);b("JewelQPLogging").onJewelOpened()};m.prototype.closeHandler=function(){"use strict";b("Arbiter").inform("requestsJewel/closed"),b("DOMQuery").scry(this.$1,"li.jewelItemNew").forEach(function(a){b("CSS").removeClass(a,"jewelItemNew")}),b("DOMQuery").scry(this.$1,"span.highlightedExpireText").forEach(function(a){b("CSS").removeClass(a,"highlightedExpireText")})};m.prototype.setupScroll=function(){"use strict";var a=this.$23();a&&(this.$7=this.$25(),this.$3=0,b("ScrollableArea").getInstance(a).subscribe("scroll",this.$26.bind(this)),this.$27(),this.$28())};m.prototype.$18=function(){"use strict";b("Event").listen(this.$1,"submit",function(a){a=b("Parent").byClass(a.getTarget(),"objectListItem");a&&(b("CSS").removeClass(a,"jewelItemNew"),b("CSS").addClass(a,"jewelItemResponded"))})};m.prototype.$19=function(){"use strict";b("Event").listen(window,"resize",b("throttle").acrossTransitions(function(){this.updateHeight()}.bind(this)))};m.prototype.$20=function(){"use strict";b("Arbiter").subscribe("pymk-x-out",function(a,b){a=b.location;(a==="pymk_jewel_first_page"||a==="pymk_jewel")&&this.$27()}.bind(this))};m.prototype.$29=function(a){"use strict";a=parseInt(a,10);return isNaN(a)?null:a};m.prototype.$21=function(a){"use strict";a=a.match(/^(\d+)_(\d+)/);return!a?null:{requester:this.$29(a[1]),type:this.$29(a[2])}};m.prototype.$30=function(a,b){"use strict";return a==null||b==null?null:a+"_"+b};m.prototype.$31=function(a,b){"use strict";return a==null||b==null?null:a+"_"+b+"_req"};m.prototype.$23=function(){"use strict";return b("DOMQuery").scry(this.$1,".uiScrollableArea")[0]};m.prototype.$25=function(){"use strict";return b("DOMQuery").scry(this.$1,".uiScrollableAreaWrap")[0]};m.prototype.$26=function(){"use strict";__p&&__p();var a=b("DOMQuery").scry(this.$7,".uiMorePager").pop();if(a){var c=b("getElementPosition")(a).y,d=this.$23();c>0&&d&&b("CSS").addClass(d,"contentAfter");c=b("DOMQuery").find(a,"a");if(!c)return;d=b("getElementPosition")(c).y;if(d===this.$3)return;a=b("getElementPosition")(this.$7);a=a.y+a.height;if(d-300<a&&d>0){this.$3=d;a=c.getAttribute("ajaxify");a?new(b("AsyncRequest"))(a).setRelativeTo(c).setStatusElement(b("Parent").byClass(c,"stat_elem")).send():h&&h.getInstance("jewel").showMore()}}this.$27();this.$28()};m.prototype.$27=function(){"use strict";__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.friendBrowserListUnit"),d=c.length-1;while(d>this.$4){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$4){e=b("DOMQuery").find(c[d],"input.friendBrowserID");a=parseInt(e.value,10);e=parseInt(c[d].getAttribute("data-signature"),10);b("PymkFunnelLogger").logImpression(a,e,"pymk_jewel");d--}this.$4=Math.max(this.$4,f)};m.prototype.$28=function(){"use strict";__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.objectListItem"),d=c.length-1;while(d>this.$5){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$5){e=c[d].getAttribute("id");e=e.substring(0,e.length-6);b("MarauderLogger").log("request_seen","friend_request_waterfall",{request_id:e,request_location:"requests_jewel"});b("FriendRequestIHEventLogger").logImpression(e);d-=1}this.$5=Math.max(this.$5,f)};m.prototype.$13=function(a){a===void 0&&(a={}),this.$10=new(b("Promise"))(function(c,d){var e=!b("ge")("fbRequestsJewelLoading");new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(babelHelpers["extends"]({},a,{reloadcontent:e})).setFinallyHandler(function(a){!a.getError()?c(!0):d()}).send()})};m.prototype.$15=function(){"use strict";if(this.$2())return;this.$13()};m.prototype.$14=function(a,b){a=b.shouldReplace;b=b.previousType;if(!a&&(b||this.$2()))return;this.$13()};m.prototype.$16=function(a,c){a=c.requester;c=c.type;if(this.$2()||b("ge")("fbRequestsJewelLoading")!=null)return;var d=this.$30(a,c),e=d&&b("ge")(d);e||(d=this.$31(a,c),e=b("ge")(d));e&&(b("CSS").hasClass(e,"jewelItemNew")&&b("RequestsJewelStore").decrementCount(),b("CSS").hasClass(e,"jewelItemResponded")||(b("DOM").remove(e),b("RequestsJewelStore").removeRequest(a),this.$22()))};m.prototype.$17=function(a,b){"use strict";if(b!==!0&&this.$2())return;this.$13()};m.prototype.$22=function(){"use strict";b("DOMQuery").scry(this.$1,"li.empty").forEach(function(a){b("CSS").conditionShow(a,b("RequestsJewelStore").getRequestCount()<=0)})};m.prototype.$24=function(){"use strict";return Math.min(Math.max(b("getViewportDimensions")().height-l,k),j)+i};m.$12=null;e.exports=m}),null);
__d("DeviceBasedLoginWWWQP",["CSS","Event","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={swapWithShadowMessageOnClick:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("CSS").hide(c),b("CSS").show(d)}))}};e.exports=a}),null);
__d("MNCommerceActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({RECEIPT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},SHIPMENT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},DIALOG:{SHOW:null,HIDE:null},RETAIL_ITEM:{LOADED:null,LOAD_ERROR:null,RELOAD:null},PROMOTION_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},TRANSACTION_INVOICE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},BOT_REVIEW_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null}});e.exports=a}),null);
__d("MNCommerceDialogStateStore",["FluxStore","MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("MessengerDispatcher")),this.$MNCommerceDialogStateStore1=null,this.$MNCommerceDialogStateStore2=null}a.prototype.__onDispatch=function(a){__p&&__p();var c=a.type;switch(c){case b("MNCommerceActionTypes").DIALOG.SHOW:this.$MNCommerceDialogStateStore1=a.dialogContainer;this.$MNCommerceDialogStateStore2=a.state;this.__emitChange();break;case b("MNCommerceActionTypes").DIALOG.HIDE:this.$MNCommerceDialogStateStore1=null;this.$MNCommerceDialogStateStore2=null;this.__emitChange();break}};a.prototype.getDialogContainer=function(){return this.$MNCommerceDialogStateStore1};a.prototype.getState=function(){return this.$MNCommerceDialogStateStore2};a.__moduleID=e.id;e.exports=new a()}),null);
__d("MNCommerceDialogContainer.react",["MNCommerceDialogStateStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"MNCommerceDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("MNCommerceDialogStateStore"))],statics:{calculateState:function(){var a=b("MNCommerceDialogStateStore").getDialogContainer();return{dialogContainer:a}}},render:function(){var a=this.state.dialogContainer;return!a?null:b("React").createElement(a,null)}});e.exports=a}),null);
__d("P2PDialogStore",["EventEmitter","P2PActionConstants","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),b("P2PDispatcher").register(this.onEventDispatched.bind(this)),h={dialogClass:null,dialogProps:null}}a.prototype.getState=function(){return h};a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").DIALOG_SHOWN:h.dialogClass=a.dialogClass;h.dialogProps=a.dialogProps;this.emit("change");break;case b("P2PActionConstants").DIALOG_CLOSED:h.dialogClass=null;h.dialogProps=null;this.emit("change");break}};e.exports=new a()}),null);
__d("P2PDialogContainer.react",["P2PDialogStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state=b("P2PDialogStore").getState(),this.onDialogStoreChange=function(){this.setState(b("P2PDialogStore").getState())}.bind(this),c}a.prototype.componentDidMount=function(){this.dialogStoreSub=b("P2PDialogStore").addListener("change",this.onDialogStoreChange)};a.prototype.componentWillUnmount=function(){this.dialogStoreSub&&(this.dialogStoreSub.remove(),this.dialogStoreSub=null)};a.prototype.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};e.exports=a}),null);
__d("PagesPlatformActionConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BOOKING_REQUEST_ACCEPT_ERROR:"booking_request_accept_error",BOOKING_REQUEST_ACCEPT_INITIATED:"booking_request_accept_initiated",BOOKING_REQUEST_ACCEPTED:"booking_request_accepted",BOOKING_REQUEST_CREATED:"booking_request_created",BOOKING_REQUEST_DECLINE_ERROR:"booking_request_decline_error",BOOKING_REQUEST_DECLINE_INITIATED:"booking_request_decline_initiated",BOOKING_REQUEST_DECLINED:"booking_request_declined",BOOKING_REQUEST_RESCHEDULE_INITIATED:"booking_request_reschedule_initiated",BOOKING_REQUEST_RESCHEULED:"booking_request_reschedule",DIALOG_CLOSED:"dialog_closed",DIALOG_SHOWN:"dialog_shown",NEW_TIME_CHOSEN:"new_time_chosen"});e.exports=a}),null);
__d("PagesPlatformRequestDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("PagesPlatformDialogStore",["EventEmitter","PagesPlatformActionConstants","PagesPlatformRequestDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),b("PagesPlatformRequestDispatcher").register(this.onEventDispatched.bind(this)),h={dialogClass:null,dialogProps:null}}a.prototype.getState=function(){return h};a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("PagesPlatformActionConstants").DIALOG_SHOWN:h.dialogClass=a.dialogClass;h.dialogProps=a.dialogProps;this.emit("change");break;case b("PagesPlatformActionConstants").DIALOG_CLOSED:h.dialogClass=null;h.dialogProps=null;this.emit("change");break}};e.exports=new a()}),null);
__d("PagesPlatformDialogContainer.react",["PagesPlatformDialogStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"PagesPlatformDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("PagesPlatformDialogStore"))],statics:{calculateState:function(){return b("PagesPlatformDialogStore").getState()}},render:function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))}});e.exports=a}),null);
__d("FBPaymentsDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!1})}),null);
__d("FBPaymentsDialogActions",["FBPaymentsDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";var g={types:b("keyMirror")({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function(a,c){b("FBPaymentsDispatcher").dispatch({type:g.types.SHOW_DIALOG,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("FBPaymentsDispatcher").dispatch({type:g.types.HIDE_DIALOG,data:{}})}};e.exports=g}),null);
__d("FBPaymentsDialogStore",["FBPaymentsDialogActions","FBPaymentsDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("FBPaymentsDispatcher")),this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null}}a.prototype.__onDispatch=function(a){var c=a.type;a=a.data;switch(c){case b("FBPaymentsDialogActions").types.SHOW_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:a.dialogClass,dialogProps:a.dialogProps};this.__emitChange();break;case b("FBPaymentsDialogActions").types.HIDE_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};this.__emitChange();break}};a.prototype.getState=function(){return this.$FBPaymentsDialogStore1};a.__moduleID=e.id;e.exports=new a()}),null);
__d("FBPaymentsDialogContainer.react",["FBPaymentsDialogStore","FBPaymentsDispatcher","FluxContainer","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.calculateState=function(){return b("FBPaymentsDialogStore").getState()};a.getStores=function(){return[b("FBPaymentsDialogStore")]};a.prototype.UNSAFE_componentWillMount=function(){b("FBPaymentsDispatcher").explicitlyRegisterStore(b("FBPaymentsDialogStore"))};a.prototype.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};function a(){g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
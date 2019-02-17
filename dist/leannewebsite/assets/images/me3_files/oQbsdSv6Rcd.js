if (self.CavalryLogger) { CavalryLogger.start_js(["mTNrv"]); }

__d("PageVoiceDropdownSelector.react",["ix","cx","BootloadedComponent.react","Image.react","JSResource","React","XUIPopoverButton.react","XUISpinner.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=16,k=40;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={dialogShown:!1,bootloadFinished:!1},this.$1=function(a){this.props.onChange(a),this.setState({dialogShown:!1})}.bind(this),this.$2=function(){return this.refs["open-menu-button"]}.bind(this),this.$3=function(){this.setState({bootloadFinished:!0})}.bind(this),this.$7=function(event){this.setState({dialogShown:!this.state.dialogShown},function(){return this.props.onClick(event)}.bind(this))}.bind(this),this.$4=function(a){this.setState({dialogShown:a})}.bind(this),this.$5=function(){var a=this.props.selectedActorID;if(!a)return"";return a===this.props.user.id?this.props.user.thumbSrc||"":this.props.pages[a].thumbSrc||""}.bind(this),this.$6=function(){var a=this.props.selectedActorID;if(!a)return"";return a===this.props.user.id?this.props.user.name||"":this.props.pages[a].name||""}.bind(this),b}a.prototype.render=function(){var a=null;this.state.dialogShown&&(a=b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:b("JSResource")("PageVoiceDropdownSelectorMenu.react").__setRef("PageVoiceDropdownSelector.react"),bootloadPlaceholder:b("React").createElement("div",null),onComponentLoad:this.$3},this.props,{contextRef:this.$2,shown:!0,onChange:this.$1,onToggle:this.$4})));var c=this.state.dialogShown&&!this.state.bootloadFinished;c=this.props.loading||c;var d=null,e=null;c?e=b("React").createElement("span",{className:"_2wk7"},b("React").createElement(b("XUISpinner.react"),null)):d=b("React").createElement(b("Image.react"),{className:"_6vg",height:j,src:this.$5(),width:j});this.props.useProfileActorSelector&&(d=b("React").createElement("div",{className:"_6ljg"},b("React").createElement(b("Image.react"),{className:b("joinClasses")("_6vg","_6kf_"),height:k,src:this.$5(),width:k}),b("React").createElement("div",{className:"_6rig"})),e=c&&b("React").createElement("div",{className:"_6ljh"},b("React").createElement("div",{className:"_6lji"},b("React").createElement(b("XUISpinner.react"),{size:"large"}))));return this.props.useProfileActorSelector?b("React").createElement("div",null,b("React").createElement(b("XUIPopoverButton.react"),{"aria-label":this.props.ariaLabel,chevron:b("React").createElement(b("Image.react"),{src:g("364970")}),className:"_6n1z",disabled:this.props.disabled,haschevron:!0,image:b("React").createElement("div",{className:"_6ljg"},d,e),label:this.$6(),labelIsHidden:!this.props.showPageName,ref:"open-menu-button",size:"xxlarge",suppressed:this.props.suppressed,type:"button",onClick:this.$7}),a):b("React").createElement("span",null,b("React").createElement(b("XUIPopoverButton.react"),{"aria-label":this.props.ariaLabel,disabled:this.props.disabled,image:b("React").createElement("span",null,d,e),label:this.$6(),labelIsHidden:!this.props.showPageName,maxwidth:this.props.maxwidth,ref:"open-menu-button",suppressed:this.props.suppressed,type:"button",onClick:this.$7}),a)};a.propTypes={ariaLabel:c.string,disabled:c.bool,loading:c.bool,maxWidth:c.number,pages:c.object.isRequired,selectedActorID:c.string,showPageName:c.bool,suppressed:c.bool.isRequired,useProfileActorSelector:c.bool,user:c.object.isRequired,onChange:c.func.isRequired,onClick:c.func.isRequired};a.defaultProps={disabled:!1,showPageName:!1};e.exports=a}),null);
__d("PagesCalloutActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REGISTER_CALLOUT:"register_callout",INIT_SURFACE:"init_surface",SHOW_CALLOUT:"show_callout",DISMISS_CALLOUT:"dismiss_callout"})}),null);
__d("PagesCalloutDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!0})}),null);
__d("ActorSelector.react",["cx","Arbiter","BizSiteIdentifier.brands","BootloadedComponent.react","Bootloader","Event","JSResource","PagesCalloutActions","PagesCalloutDispatcher","PageVoiceDropdownSelector.react","React","ReactDOM","ShortProfiles","TooltipData","emptyFunction","getObjectValues","goURI","joinClasses","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;var i=500;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={actorData:{},nuxShown:!1,selectedActorID:this.props.selectedActorID},this.$4=function(){return this.refs.selector}.bind(this),this.$3=function(){b("ShortProfiles").getMulti(this.props.actorIDs,function(a){this.$2&&this.setState({actorData:a})}.bind(this))}.bind(this),this.$9=function(){this.state.nuxShown&&this.$5()}.bind(this),this.$8=function(a){if(this.props.syncEnabled){b("Arbiter").inform("ActorSelector/ActorChange",a);return}this.props.onChange(a)}.bind(this),this.$6=function(){this.$5(),b("goURI")(this.props.settingsURI)}.bind(this),this.$5=function(){this.setState({nuxShown:!1}),this.props.onCompleteNux&&this.props.onCompleteNux()}.bind(this),this.$11=function(){if(!this.props.nuxEnabled)return;this.props.nuxHoverContext&&!this.$14&&(this.$14=b("tidyEvent")(b("Event").listen(this.props.nuxHoverContext,"mouseenter",function(){b("Bootloader").loadModules(["ActorSelectorNUXLayer.react"],b("emptyFunction"),"ActorSelector.react");var a=setTimeout(function(){this.$14.remove(),this.$15()}.bind(this),i),c=b("tidyEvent")(b("Event").listen(this.props.nuxHoverContext,"mouseleave",function(){clearTimeout(a),c.remove()}))}.bind(this))))}.bind(this),this.$10=function(){if(!this.props.nuxEnabled||!this.props.pageTimelineNuxTipID)return;b("PagesCalloutDispatcher").dispatch({type:b("PagesCalloutActions").REGISTER_CALLOUT,data:{tip_id:this.props.pageTimelineNuxTipID,showCallback:function(){return this.$15()}.bind(this)}})}.bind(this),this.$15=function(){this.props.nuxEnabled&&this.setState({nuxShown:!0})}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.$2=!0,this.$3()};a.prototype.render=function(){"use strict";if(!this.state.selectedActorID||!this.state.actorData[this.state.selectedActorID])return b("React").createElement("div",null);if(this.props.actorIDs.length===0)return b("React").createElement("div",null);var a=null;this.state.nuxShown&&(a=b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ActorSelectorNUXLayer.react").__setRef("ActorSelector.react"),bootloadPlaceholder:b("React").createElement("span",null),onCompleteNux:this.$5,onClickSettings:this.$6,settingsURI:this.props.settingsURI,shown:!0,contextRef:this.$4,nuxBody:this.props.nuxBody}));return b("React").createElement("span",{className:b("joinClasses")("_6vh",this.props.className),"data-testid":"actor-selector"},b("React").createElement("span",{ref:"selector"},b("React").createElement(b("PageVoiceDropdownSelector.react"),{ariaLabel:this.$7(),disabled:this.props.disabled,loading:this.props.loading,pages:this.state.actorData,onChange:this.$8,onClick:this.$9,selectedActorID:this.state.selectedActorID,searchBarVisible:!0,showBusinessPages:!1,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!b("BizSiteIdentifier.brands").isBizSite(),suppressed:this.props.suppressed,useProfileActorSelector:this.props.useProfileActorSelector,user:b("getObjectValues")(this.state.actorData)[0]})),a)};a.prototype.componentDidMount=function(){"use strict";this.$10(),this.$11(),this.$12(),this.props.syncEnabled&&this.$13()};a.prototype.componentDidUpdate=function(a,c){"use strict";this.props.actorIDs.toString()!==a.actorIDs.toString()&&this.$3(),this.$11(),this.$12(),this.state.nuxShown&&!c.nuxShown&&this.props.onShowNux&&this.props.onShowNux(),this.props.selectedActorID!==a.selectedActorID&&(this.setState({selectedActorID:this.props.selectedActorID}),b("Arbiter").inform("ActorSelector/ActorSelected",{selectedActorID:this.props.selectedActorID}))};a.prototype.componentWillUnmount=function(){"use strict";this.$2=!1,this.$1&&b("Arbiter").unsubscribe(this.$1)};a.prototype.$13=function(){"use strict";this.$1=b("Arbiter").subscribe("ActorSelector/ActorChange",function(a,b){if(this.props.actorIDs.indexOf(b.value)===-1)return;this.setState({selectedActorID:b.value},function(){return this.props.onChange(b)}.bind(this))}.bind(this))};a.prototype.$16=function(){"use strict";var a=this.state.actorData[this.state.selectedActorID];if(!a)return null;return!this.props.tooltipConstructor?null:this.props.tooltipConstructor(a.name)};a.prototype.$7=function(){"use strict";var a=this.$16();return!a?null:a.toString()};a.prototype.$12=function(){"use strict";if(!this.refs.selector)return;var a=this.$16();if(!a)return;b("TooltipData").set(b("ReactDOM").findDOMNode(this.refs.selector),a,"above","right")};a.propTypes={actorIDs:c.array.isRequired,disabled:c.bool,loading:c.bool,nuxBody:c.node,nuxEnabled:c.bool,nuxHoverContext:c.object,onChange:c.func.isRequired,onCompleteNux:c.func,onShowNux:c.func,pageTimelineNuxTipID:c.string,selectedActorID:c.string,settingsURI:c.string,showName:c.bool,showNameMaxWidth:c.number,suppressed:c.bool,syncEnabled:c.bool,tooltipConstructor:c.func,useProfileActorSelector:c.bool};a.defaultProps={disabled:!1,suppressed:!0};e.exports=a}),null);
__d("AdsPerfTiming",["performance"],(function(a,b,c,d,e,f){"use strict";e.exports={start:b("performance").timing&&b("performance").timing.fetchStart||a._cstart}}),null);
__d("ActorSelectorNuxTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"})}),null);
__d("XActorSelectorNuxSeenWriteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actor_selector/nux/mark_seen/",{nux_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("UFIActorSelector.react",["csx","fbt","ActorSelector.react","ActorSelectorNuxTypes","Arbiter","AsyncRequest","Parent","React","ReactDOM","SubscriptionsHandler","UFICentralUpdates","UFIFeedbackTargets","UFIODSLogger","UFIUserActions","UFIVersion","XActorSelectorNuxSeenWriteController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j="ufi_actor_selector_nux_disabled_event";d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(a){__p&&__p();i.constructor.call(this,a);this.$3=function(a){b("UFIODSLogger").bump("actor_selector.on_change",b("UFIVersion").LEGACY),this.setState({loading:!0}),b("UFIUserActions").changeActor(this.props.ftEntIdentifier,a.value)}.bind(this);this.$5=function(){var a=this.props.isTimeline?b("ActorSelectorNuxTypes").UFI_TIMELINE:b("ActorSelectorNuxTypes").UFI;a=b("XActorSelectorNuxSeenWriteController").getURIBuilder().setEnum("nux_type",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}.bind(this);a=b("UFIFeedbackTargets").getFeedbackTargetIfExists(this.props.ftEntIdentifier);a=a&&a.actorforpost;this.state={loading:!a,nuxEnabled:!!this.props.nuxEnabled,nuxHoverContext:null,selectedActorID:a||null}}a.prototype.render=function(){return b("React").createElement(b("ActorSelector.react"),{actorIDs:this.props.actorIDs,loading:this.props.loading||this.state.loading,nuxBody:this.$2(),nuxEnabled:this.state.nuxEnabled,nuxHoverContext:this.state.nuxHoverContext,onChange:this.$3,onShowNux:this.$4,onCompleteNux:this.$5,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this.$6,syncEnabled:this.props.syncEnabled})};a.prototype.componentDidMount=function(){__p&&__p();b("UFIODSLogger").bump("actor_selector.component_did_mount",b("UFIVersion").LEGACY);this.$7();this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("UFICentralUpdates").subscribe("feedback-updated",function(a,b){this.props.ftEntIdentifier in b.updates&&this.$7()}.bind(this)),b("Arbiter").subscribe(j,function(){this.setState({nuxEnabled:!1})}.bind(this)));if(this.state.nuxEnabled){var a=b("ReactDOM").findDOMNode(this);if(a){a=b("Parent").bySelector(a,"._5pcr");a instanceof HTMLElement&&this.setState({nuxHoverContext:a})}}};a.prototype.componentWillUnmount=function(){this.$1.release()};a.prototype.$7=function(){b("UFIFeedbackTargets").getFeedbackTarget(this.props.ftEntIdentifier,function(a){if(this.state.loading===!1&&this.state.selectedActorID===a.actorforpost)return;this.setState({loading:!1,selectedActorID:a.actorforpost})}.bind(this))};a.prototype.$2=function(){return h._("Like, comment or share as yourself or as one of the Pages that you manage.")};a.prototype.$6=function(a){return h._("Liking and commenting as {actorName}",[h._param("actorName",a)])};a.prototype.$4=function(){b("Arbiter").inform(j)};a.propTypes={actorIDs:c.array.isRequired,ftEntIdentifier:c.string.isRequired,isTimeline:c.bool,loading:c.bool,nuxEnabled:c.bool,settingsURI:c.string,syncEnabled:c.bool};e.exports=a}),null);
__d("FeedReactComposerBootloadPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setBootloadDurationMillis=function(a){this.$1.bootload_duration_millis=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={bootload_duration_millis:!0,vc:!0};e.exports=a}),null);
__d("FeedComposerIDStore",["Arbiter","ReactComposerEvents","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={_composerID:null,_subscriptions:b("SubscriptionsHandler"),set:function(a){this._subscriptions=new(b("SubscriptionsHandler"))(),this._composerID=a,this._subscribeComposerResetEvent()},get:function(){if(!this._composerID)throw new Error("ID Store has not yet been initialized via set()");return this._composerID},_subscribeComposerResetEvent:function(){if(!this._composerID)throw new Error("Composer ID cannot be null");var a=b("Arbiter").subscribeOnce(b("ReactComposerEvents").COMPOSER_RESET+this._composerID,function(a,b){b&&b.newComposerID&&(this._composerID=b.newComposerID,this._subscribeComposerResetEvent())}.bind(this));this._subscriptions.addSubscriptions(a)}};e.exports=a}),null);
__d("XReactFeedSproutsComposerXBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/feedx_sprouts/bootload/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},friend_list_id:{type:"String"},target_id:{type:"String",required:!0}})}),null);
__d("ReactFeedSproutsComposerX",["csx","cx","invariant","Arbiter","AsyncRequest","BasicFBNux","Bootloader","Button","CSS","DOM","Event","FeedComposerIDStore","FeedReactComposerBootloadPerfTypedLogger","LitestandComposer","React","ReactComposerAttachmentType","ReactComposerEvents","ReactComposerFocusInit","ReactComposerStoryArchiveIntroductionDialogGatedModule","ReactDOM","Run","SharesheetDestination","SubscriptionsHandler","XReactFeedSproutsComposerXBootloadController","$"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReactComposerStoryArchiveIntroductionDialogGatedModule").module,k=!0;function a(a){__p&&__p();this.$31=!1;this.$41=function(){setTimeout(function(){this.$29&&(this.$29&&this.$29.show(),this.$26&&b("CSS").addClass(this.$26,"_6hqu"),this.$29&&this.$29.subscribe("hide",this.$42),this.$31=!0,this.$30&&b("BasicFBNux").onView(this.$30))}.bind(this),0)}.bind(this);this.$42=function(){this.$26&&b("CSS").removeClass(this.$26,"_6hqu")}.bind(this);this.$43=function(a){if(!this.$11)return;this.$22&&b("Button").setEnabled(this.$22,this.$20.size!=0&&this.$18.value.length!=0);if(!this.$11.textEligibleForStory)return;a=this.$18.value.match(/\n/g)||[];this.$11.maxTextLengthForStory&&this.$18.value.length>this.$11.maxTextLengthForStory||this.$11.maxLinesForStory&&a.length>=this.$11.maxLinesForStory?(this.$26&&b("CSS").addClass(this.$26,"_3560"),this.$20["delete"](b("SharesheetDestination").STORIES)&&(this.$26&&b("CSS").removeClass(this.$26,"_1sfg"),this.$21.add(b("SharesheetDestination").STORIES))):(this.$26&&b("CSS").removeClass(this.$26,"_3560"),this.$21["delete"](b("SharesheetDestination").STORIES)&&(this.$26&&b("CSS").addClass(this.$26,"_1sfg"),this.$20.add(b("SharesheetDestination").STORIES)));this.$22&&b("Button").setEnabled(this.$22,this.$20.size!=0&&this.$18.value.length!=0)}.bind(this);this.$44=function(a){a.preventDefault(),b("CSS").addClass(this.$12,"_1qf9")}.bind(this);this.$34=function(a){if(!this.$11||!this.$11.sharingSpacesDestinationPicker&&!this.$11.oneStepDestinationPicker)return!0;this.$22&&b("Button").setEnabled(this.$22,!1);if(this.$20&&this.$20.has(b("SharesheetDestination").STORIES)&&this.$23){a={composerID:this.$4,targetID:this.$17,actorID:this.$1,text:this.$18.value,successHandler:this.$33};this.$23.postToStory(a)}return this.$20&&this.$20.has(b("SharesheetDestination").TIMELINE)?!0:!1}.bind(this);this.$38=function(a){__p&&__p();a=a.getTarget();var c=null;while(a){if(a.nodeType===1&&a.nodeName==="A"){c=a;break}a=a.parentNode}c!==null||i(0);a=b("CSS").hasClass(c,"._5qtn");if(a)return;this.$13.forEach(function(a){return b("CSS").removeClass(a,"_5qtn")});b("CSS").addClass(c,"_5qtn");a=b("DOM").find(this.$12,"._559p");var d=b("DOM").find(this.$12,"._559q");switch(c.getAttribute("data-attachment-type")){case b("ReactComposerAttachmentType").STATUS:b("CSS").hide(d);b("CSS").show(a);break;case b("ReactComposerAttachmentType").MEDIA:case b("ReactComposerAttachmentType").LIVE_VIDEO:b("CSS").show(d);b("CSS").hide(a);break;case b("ReactComposerAttachmentType").ALBUM:this.$11&&this.$11.albumTabUsesSelector&&this.$45();break;case b("ReactComposerAttachmentType").POST_TO_GROUP:b("Bootloader").loadModules(["XReactComposerPostToGroupLoggingODSController","ReactComposerPostToGroupLoggingEvent"],function(a,c){a=a.getURIBuilder().setString("event",c.CLICK_OUTER_TAB).getURI();new(b("AsyncRequest"))(a).send()},"ReactFeedSproutsComposerX");break}}.bind(this);this.$32=function(a){this.$11&&this.$11.lazySproutsExpand||this.$46();if(this.$3||!this.$27)return;this.$23&&this.$23.bootload();this.$19=Date.now();this.$3=!0;a=b("XReactFeedSproutsComposerXBootloadController").getURIBuilder().setString("composer_id",this.$4).setString("target_id",this.$17).setEnum("composer_type",this.$5).setString("friend_list_id",this.$8).getURI();new(b("AsyncRequest"))(a).send()}.bind(this);this.$37=function(){b("CSS").removeClass(this.$12,"_4qr4"),b("CSS").addClass(this.$12,"_4a8c")}.bind(this);this.$36=function(){this.$37(),this.$18.value="",b("CSS").removeClass(this.$12,"_2-q9")}.bind(this);this.$35=function(){this.$16.release()}.bind(this);this.$33=function(){this.$22&&b("Button").setEnabled(this.$22,!0),b("Arbiter").inform(b("ReactComposerEvents").POST_SUCCEEDED+this.$4),this.$36(),this.$20&&this.$20.has(b("SharesheetDestination").STORIES)&&k&&(j&&(b("ReactDOM").render(b("React").createElement(j,null),b("DOM").create("div")),k=!1))}.bind(this);this.$24=!1;this.$1=a.actorID;this.$12=a.root;this.$4=a.composerID;this.$17=a.targetID;this.$5=a.composerType;this.$8=a.friendListID;this.$9=a.largeTextThreshold;this.$11=a.gks;this.$23=a.jsModules.postModule;this.$27=a.loadReact;this.$29=a.storiesFirstNux;this.$30=a.storiesFirstNuxID;this.$10=!1;this.$3=!1;this.$7=b("DOM").find(this.$12,"form");this.$18=b("DOM").find(this.$12,"._3en1");this.$15=b("DOM").find(this.$12,"._16ve");this.$20=new Set();this.$21=new Set();b("FeedComposerIDStore").set(this.$4);b("LitestandComposer").initComposer(a.composerID);this.$16=new(b("SubscriptionsHandler"))();this.$16.addSubscriptions(b("Event").listen(this.$18,"focus",this.$32),b("Event").listen(this.$12,"click",this.$32),b("Event").listen(this.$7,"success",this.$33),b("Event").listen(this.$7,"submit",this.$34),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$4,function(){new(b("FeedReactComposerBootloadPerfTypedLogger"))().setBootloadDurationMillis(Date.now()-this.$19).log(),this.$35()}.bind(this)),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/selectcomposer/"+this.$4,this.$32),b("Arbiter").subscribe("ReactComposerFocus/reset/"+this.$4,this.$36),b("Arbiter").subscribe("ReactComposerFocus/collapse/"+this.$4,this.$37),b("Arbiter").subscribe(b("ReactComposerEvents").TEXT_PREFILL_BEFORE_BOOTLOAD+this.$4,function(a,b){this.$18.value=b,this.$18.selectionEnd=0}.bind(this)),b("Arbiter").subscribe("ReactFeedSproutsComposerXBody/onDrop",this.$32));this.$13=b("DOM").scry(this.$12,"._4-h7");this.$13.forEach(function(a){return this.$16.addSubscriptions(b("Event").listen(a,"click",this.$38))}.bind(this));this.$14=b("DOM").scry(this.$12,"._m_1");this.$11&&this.$11.prefillSprouts&&this.$14.forEach(function(a){return this.$16.addSubscriptions(b("Event").listen(a,"click",function(){this.$39(a)}.bind(this)))}.bind(this));var c=b("DOM").scry(this.$12,"._2mo4");c.length===1&&this.$16.addSubscriptions(b("Event").listen(c[0],"click",function(){if(this.$10)return;this.$10=!0;b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$4,function(a,c){b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){a.startPreviewUI(c.contextConfig,c.config),this.$10=!1}.bind(this),"ReactFeedSproutsComposerX")}.bind(this));b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(){},"ReactFeedSproutsComposerX")}.bind(this)));this.$11&&(this.$11.sharingSpacesDestinationPicker||this.$11.oneStepDestinationPicker)&&this.$40();c=a.reactComposerFocusExtraConfigData;c&&c.showDialogForP2PAdminsMetadata&&c.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins&&a.jsModules.P2PNewAdminComposerFocus?b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$4,this.$1,this.$11,a.jsModules.P2PNewAdminComposerFocus,!1,a.reactComposerFocusExtraConfigData):a.jsModules&&a.jsModules.composerFocus&&b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$4,this.$1,this.$11,a.jsModules.composerFocus,!1,a.reactComposerFocusExtraConfigData,this.$29?this.$41:undefined);b("Run").onLeave(this.$35)}a.prototype.$45=function(){var a=b("DOM").find(this.$12,"._559p"),c=b("DOM").find(this.$12,"._559q");b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$4,function(){b("Bootloader").loadModules(["ReactComposerCollectionsActions","ReactComposerLoggingName"],function(a,b){a.showCollectionsSelector(this.$4,b.ALBUM_TAB_SELECTOR)}.bind(this),"ReactFeedSproutsComposerX"),this.$35()}.bind(this));b("CSS").show(c);b("CSS").hide(a)};a.prototype.$39=function(a,c){c=a.getAttribute("data-sprout-tagger-id");if(c){var d=b("DOM").find(this.$15,"._16vl");d=b("DOM").find(d,'*[data-sprout-tagger-id="'+c+'"]');b("CSS").addClass(d,"_30lm");this.$15.setAttribute("data-selected-sprout-id",c)}else b("CSS").matchesSelector(a,"._1gr3")&&(this.$11&&this.$11.lazySproutsExpand&&this.$46())};a.prototype.$40=function(){__p&&__p();this.$25=b("DOM").find(this.$12,"._3h0d");this.$16.addSubscriptions(b("Event").listen(this.$18,"input",this.$43));this.$22=b("DOM").find(this.$12,"._ej1");this.$22&&b("Button").setEnabled(this.$22,!1);this.$11&&this.$11.showMessengerSection&&this.$11.oneStepDestinationPicker&&(this.$28=b("DOM").find(this.$12,"._1qfa"),this.$16.addSubscriptions(b("Event").listen(this.$28,"click",this.$44)));var a=b("DOM").scry(this.$12,"._66-n");a.forEach(function(a){return this.$47(a)}.bind(this));this.$25&&this.$16.addSubscriptions(b("Event").listen(this.$25,"click",function(){this.$48()}.bind(this)));this.$11&&this.$11.defaultDestination===b("SharesheetDestination").STORIES?this.$20.add(b("SharesheetDestination").STORIES):this.$20.add(b("SharesheetDestination").TIMELINE);if(this.$29){a=b("DOM").scry(this.$12,'._66-n[data-destination="STORIES"] ._1se_');a.length>0&&(this.$29&&this.$29.setContext(a[0]))}};a.prototype.$48=function(a){this.$24=!0};a.prototype.$47=function(a){a.getAttribute("data-destination")==b("SharesheetDestination").STORIES&&(this.$26=a,this.$11&&!this.$11.textEligibleForStory&&b("CSS").addClass(a,"_3560")),this.$16.addSubscriptions(b("Event").listen(a,"click",function(){this.$49(a)}.bind(this)))};a.prototype.$49=function(a,c){if(this.$24){this.$24=!1;return}b("CSS").toggleClass(a,"_1sfg");c=a.dataset.destination;this.$20.has(c)?this.$20["delete"](c):this.$20.add(c);this.$22&&b("Button").setEnabled(this.$22,this.$20.size!=0&&this.$18.value.length!=0)};a.prototype.$46=function(){b("CSS").addClass(this.$12,"_4qr4"),b("CSS").removeClass(this.$12,"_4a8c")};e.exports=a}),null);
__d("VideoNodeStaledScreen",["CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$3=new(b("SubscriptionsHandler"))(),this.$5=function(){b("CSS").show(this.$1)}.bind(this),this.$4=function(){b("CSS").hide(this.$1)}.bind(this),this.$1=a,this.$2=null,b("EventListener").listen(this.$1,"click",this.$4)}a.prototype.enable=function(a){"use strict";this.$2=a,this.$3.addSubscriptions(this.$2.addListener("videoNodeStaled",this.$5))};a.prototype.disable=function(){"use strict";this.$3.release(),this.$2=null};e.exports=a}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$VideoStateDirectory1=new Map()}a.prototype.setPlaybackState=function(a,c,d){"use strict";var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};a.prototype.setSaveState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};a.prototype.setSubscriptionState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};a.prototype.getState=function(a){"use strict";return this.$VideoStateDirectory1.get(a)};e.exports=new a()}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$2=function(){var a=this.$1,c=a.getVideoID(),d=a.getCurrentTimePosition();a=a.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(c,d,a)}.bind(this)}a.prototype.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};a.prototype.disable=function(){};e.exports=a}),null);
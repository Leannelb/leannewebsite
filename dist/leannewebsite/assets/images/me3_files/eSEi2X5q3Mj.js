if (self.CavalryLogger) { CavalryLogger.start_js(["bOeor"]); }

__d("AbstractCommentLiveTypingXHRController",["destroyOnUnload","ex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={START:"start",STOP:"stop"},h=10*1e3;function a(a,c,d,e){e===void 0&&(e=null),this.$5=a,this.$6=c,this.$7=d,this.$1=e,this.$2=!1,this.$3=0,this.$4=null,b("destroyOnUnload")(this.destroy.bind(this))}a.prototype.destroy=function(){this.$1&&this.$1.destroy(),this.$1=null,this.$2=!1,this.$3=0,this.$4=null};a.prototype.bootloadPublisherModule=function(a){throw new Error(b("ex")("bootloadPublisherModule not implemented, should be overridden by subclass"))};a.prototype.$8=function(a){a=new a(this.$5,this.$6,this.$7);var b=Date.now(),c=this.$3;if(c&&c+h>=b){c=this.$4;c===g.START?a.handleStartEvent():c===g.STOP&&a.handleStopEvent()}this.$1=a};a.prototype.$9=function(){if(this.$2||!this.$5)return;this.$2=!0;this.bootloadPublisherModule(this.$8.bind(this))};a.prototype.attemptPublishStartEvent=function(){this.$4=g.START,this.$3=Date.now(),this.$1?this.$1.handleStartEvent():this.$2||this.$9()};a.prototype.attemptPublishStopEvent=function(){this.$4=g.STOP,this.$3=Date.now(),this.$1?this.$1.handleStopEvent():this.$2||this.$9()};e.exports=a}),null);
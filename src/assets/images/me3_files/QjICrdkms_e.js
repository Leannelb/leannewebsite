if (self.CavalryLogger) { CavalryLogger.start_js(["facKw"]); }

__d("PhotoSnowliftViewableWithContextMenuLogging",["Event","PhotoDownloadTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("Event").listen(a,"contextmenu",function(a){new(b("PhotoDownloadTypedLogger"))().setDownloadMethod("context_menu").setPhotoFbid(c).log()})}e.exports={setupContextMenuLogging:a}}),null);
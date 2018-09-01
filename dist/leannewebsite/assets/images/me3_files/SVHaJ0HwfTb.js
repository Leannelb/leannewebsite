if (self.CavalryLogger) { CavalryLogger.start_js(["dj\/ic"]); }

__d("MessengerGraphQLThreadFetcher.bs",["Promise","bs_array","BanzaiODS","bs_caml_array","bs_pervasives","WebGraphQL","bs_js_null_undefined","MessengerThreadsWebGraphQLQuery","MessengerServerPayloadTransformer.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d,e,f){__p&&__p();if(a==null)if(e)return{actions:null,thread:undefined,end_of_history:{type:"user",fbid:c},roger:null};else return{actions:null,thread:undefined,end_of_history:undefined,roger:null};else{e=b("MessengerServerPayloadTransformer.bs").getThreadFBID(a);var g=b("MessengerServerPayloadTransformer.bs").getOtherUserID(a);e=g==null?e==null?b("bs_pervasives").failwith("No thread ID"):e:g;e!==c&&b("bs_pervasives").failwith("Thread ID mismatch");g=b("MessengerServerPayloadTransformer.bs").transformThread(d,a,f);e=b("bs_js_null_undefined").fromOption(b("MessengerServerPayloadTransformer.bs").transformMessages(d,a,f));f=b("MessengerServerPayloadTransformer.bs").transformReadReceipts(d,a);if(f){d={};d[c]=f[0];f=d}else f=null;d=b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);if(d)if(d[0].has_previous_page)return{actions:e,thread:g,end_of_history:undefined,roger:f};else return{actions:e,thread:g,end_of_history:{type:"thread",fbid:c},roger:f};else return{actions:e,thread:g,end_of_history:undefined,roger:f}}}function h(a){return new(b("MessengerThreadsWebGraphQLQuery"))({id:a.id,message_limit:a.limit,load_messages:a.limit>0,load_read_receipts:a.loadReadReceipts,before:a.timestamp})}function a(a,c,d){var e=b("bs_array").map(h,c);return b("Promise").all(b("WebGraphQL").execAll(e,{actorID:d?a:null,batchName:"MessengerGraphQLThreadFetcher"}))["catch"](function(a){b("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.failure");return b("Promise").reject(a)}).then(function(e){b("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.success");return b("bs_array").mapi(function(e,f){f=f.message_thread;e=b("bs_caml_array").caml_array_get(c,e);return g(f,e.id,a,e.isCanonical,d)},e)})}f._transformPayload=g;f._getQuery=h;f.fetchAll=a}),null);
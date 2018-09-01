if (self.CavalryLogger) { CavalryLogger.start_js(["yCN\/F"]); }

__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={use:c.oneOf(["special","confirm","default"]),size:c.oneOf(["medium","large"]),suppressed:c.bool};e.exports=a}),null);
__d("GroupDescriptionMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"GroupEditData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input",type:"GroupEditData!"}],c={kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null};return{kind:"Request",operationKind:"mutation",name:"GroupDescriptionMutation",id:"1531464596884273",text:null,metadata:{},fragment:{kind:"Fragment",name:"GroupDescriptionMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"group_edit",storageKey:null,args:b,concreteType:"GroupEditResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[c]}]}]},operation:{kind:"Operation",name:"GroupDescriptionMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"group_edit",storageKey:null,args:b,concreteType:"GroupEditResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}]}}}();e.exports=a}),null);
__d("GroupTopicsMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"GroupEditData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input",type:"GroupEditData!"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"LinkedField",alias:null,name:"group_topic_tags",storageKey:null,args:null,concreteType:"Page",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null},c,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]};return{kind:"Request",operationKind:"mutation",name:"GroupTopicsMutation",id:"1334102816644427",text:null,metadata:{},fragment:{kind:"Fragment",name:"GroupTopicsMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"group_edit",storageKey:null,args:b,concreteType:"GroupEditResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[d]}]}]},operation:{kind:"Operation",name:"GroupTopicsMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"group_edit",storageKey:null,args:b,concreteType:"GroupEditResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"group",storageKey:null,args:null,concreteType:"Group",plural:!1,selections:[d,c]}]}]}}}();e.exports=a}),null);
__d("GroupsAboutTabDescriptionCardQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"group_id",type:"String!",defaultValue:null}],b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};b=[{kind:"LinkedField",alias:null,name:"group_address",storageKey:null,args:[{kind:"Variable",name:"address",variableName:"group_id",type:"String!"}],concreteType:"Group",plural:!1,selections:[b,{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_change_tags",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_change_description",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"group_topic_tags",storageKey:null,args:null,concreteType:"Page",plural:!0,selections:[b,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"group_purposes",storageKey:null,args:null,concreteType:"GroupToPurposesConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"GroupToPurposesEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"GroupPurpose",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"purpose_name",args:null,storageKey:null}]}]}]}]}];return{kind:"Request",operationKind:"query",name:"GroupsAboutTabDescriptionCardQuery",id:"1451744114907676",text:null,metadata:{},fragment:{kind:"Fragment",name:"GroupsAboutTabDescriptionCardQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"GroupsAboutTabDescriptionCardQuery",argumentDefinitions:a,selections:b}}}();e.exports=a}),null);
__d("UntrustedLink",["DOM","Event","LinkshimHandlerConfig","URI","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){this.dom=a,this.url=a.href,this.func_get_params=d||function(){return{}},b("Event").listen(this.dom,"click",this.onclick.bind(this)),b("Event").listen(this.dom,"mousedown",this.onmousedown.bind(this)),b("Event").listen(this.dom,"mouseup",this.onmouseup.bind(this)),b("Event").listen(this.dom,"mouseout",this.onmouseout.bind(this)),this.onmousedown(b("Event").$E(c))}g.bootstrap=function(a,b,c){if(a.__untrusted)return;a.__untrusted=!0;new g(a,b,c)};g.prototype.getRewrittenURI=function(){var a=babelHelpers["extends"]({u:this.url,h:b("LinkshimHandlerConfig").untrusted_link_default_hash},this.func_get_params(this.dom)),c=new(b("URI"))("/l.php").setDomain(b("LinkshimHandlerConfig").linkshim_host);if(new(b("URI"))(this.url).getProtocol()=="https")return c.setQueryData(a).setProtocol("https");else return c.setQueryData(a).setProtocol("http")};g.prototype.onclick=function(){setTimeout(function(){this.setHref(this.url)}.bind(this),100),this.setHref(this.getRewrittenURI())};g.prototype.onmousedown=function(a){a.button==2&&this.setHref(this.getRewrittenURI())};g.prototype.onmouseup=function(){this.setHref(this.getRewrittenURI())};g.prototype.onmouseout=function(){this.setHref(this.url)};g.prototype.setHref=function(a){if(b("UserAgent_DEPRECATED").ie()<9){var c=b("DOM").create("span");b("DOM").appendContent(this.dom,c);this.dom.href=a;b("DOM").remove(c)}else this.dom.href=a};e.exports=g}),null);
__d("DOMHyperlink",["cx","Env","JSXDOM","TransformTextToDOMMixin","UntrustedLink","URI","URLScraper","isFacebookURI"],(function(a,b,c,d,e,f,g){__p&&__p();a={MAX_ITEMS:40,match:function(a,c){var d=b("URLScraper").match(a);if(!d)return!1;a=a.indexOf(d);var e=a+d.length;return{startIndex:a,endIndex:e,element:this._element(d,c)}},_element:function(a,c){var d=a,e=d.replace(/\"/g,"%22");/^[a-z][a-z0-9\-+.]+:\/\//i.test(a)||(e="http://"+e);a=b("URI").tryParseURI(e);if(!a)return d;e=b("JSXDOM").a({className:"_553k",href:e,target:"_blank",rel:"nofollow"},d);c&&!b("isFacebookURI")(a)&&(e.onmousedown=function(a){b("UntrustedLink").bootstrap(this,b("Env").lhsh,a)});return e}};e.exports=Object.assign(a,b("TransformTextToDOMMixin"))}),null);
__d("GroupDescriptionMutation",["RelayModern","GroupDescriptionMutation.graphql"],(function(a,b,c,d,e,f){var g=b("RelayModern").commitMutation;b("RelayModern").graphql;var h=function(){return b("GroupDescriptionMutation.graphql")};function a(a,b,c){return g(a,{mutation:h,onCompleted:c.onSuccess,onError:c.onError,optimisticResponse:{group_address:{description:b.description}},variables:{input:{description:b.description,group_id:b.group_id}}})}e.exports={commit:a}}),null);
__d("GroupTopicsMutation",["RelayModern","GroupTopicsMutation.graphql"],(function(a,b,c,d,e,f){var g=b("RelayModern").commitMutation;b("RelayModern").graphql;var h=function(){return b("GroupTopicsMutation.graphql")};function a(a,b,c){return g(a,{mutation:h,onCompleted:c.onSuccess,onError:c.onError,optimisticResponse:{group_address:{group_topic_tags:b.group_topic_tags}},variables:{input:{group_topic_tags:b.group_topic_tags,group_id:b.group_id}}})}e.exports={commit:a}}),null);
__d("GroupsAboutTabDescriptionCardLoading.react",["cx","FBLoadShimmer.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").Component;h=babelHelpers.inherits(a,c);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("div",null,b("React").createElement(b("FBLoadShimmer.react"),{className:"_16wr"}),b("React").createElement(b("FBLoadShimmer.react"),{className:"_16ws"}),b("React").createElement(b("FBLoadShimmer.react"),{className:"_16wt"}),b("React").createElement(b("FBLoadShimmer.react"),{className:"_16wu"}))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("GroupsAboutTabDescriptionTransformText.react",["DOM","React","transformTextToDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.$2(a)};a.prototype.componentDidMount=function(){this.$2(this.props)};a.prototype.shouldComponentUpdate=function(){return!1};a.prototype.render=function(){return b("React").createElement("span",{ref:function(a){return this.$1=a}.bind(this)})};a.prototype.$2=function(a){if(this.$1){b("DOM").empty(this.$1);var c=a.text;a=a.transforms;b("transformTextToDOM")(c,a).forEach(function(a){b("DOM").appendContent(this.$1,a)}.bind(this))}};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("XGroupBrowseController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/",{category:{type:"String"},ref:{type:"String"},dismissnux:{type:"Bool",defaultValue:!1},create:{type:"Exists",defaultValue:!1},s:{type:"Exists",defaultValue:!1},seemore:{type:"Exists",defaultValue:!1},seeallmanaged:{type:"Exists",defaultValue:!1},seeallbookmarks:{type:"Exists",defaultValue:!1},selected_inactive_card_type:{type:"Enum",enumType:1},query:{type:"String"},refreshsidenav:{type:"Bool",defaultValue:!1},discover_category_id:{type:"Int"},tag_id:{type:"Int"},order:{type:"Enum",enumType:1},page_offset:{type:"Int"},a_type:{type:"String"}})}),null);
__d("GroupsAboutTabDescriptionCard.react",["cx","fbt","Button.react","DOMEmoji","DOMEmote","DOMHyperlink","ExpandableText.react","GroupDescriptionMutation","GroupMemberActionSource","GroupsAboutTabDescriptionCardLoading.react","GroupsAboutTabDescriptionTransformText.react","GroupTopicsMutation","LeftRight.react","Link.react","React","RelayFBEnvironment","SearchableEntry","SUIAtlasTheme","SUITextArea.react","WebAsyncSearchSource","XGroupBrowseController","XUIGrayText.react","XUIText.react","XUITokenizer.react","RelayModern","GroupsAboutTabDescriptionCardQuery.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;a=b("React").Component;b("RelayModern").graphql;var j=b("RelayModern").QueryRenderer,k=3e3,l=225,m=5e3;c=babelHelpers.inherits(n,a);i=c&&c.prototype;function n(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={editingDescription:!1,editingTopics:!1,topicEntries:[],description:""},this.$1=function(a){var b=a.getUniqueID(),c=this.state.topicEntries,d=c.some(function(a){return a.getUniqueID()===b?!0:!1});if(d)return;c.push(a);this.setState({topicEntries:c})}.bind(this),this.$2=function(a){var b=a.getUniqueID(),c=this.state.topicEntries,d=c.some(function(a){return a.getUniqueID()===b?!0:!1});d&&c.splice(c.indexOf(a),1);this.setState({topicEntries:c})}.bind(this),b}n.prototype.$3=function(a){return a.map(function(a){return new(b("SearchableEntry"))({uniqueID:a.id,title:a.name})})};n.prototype.$4=function(){return b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({editingDescription:!0})}.bind(this)},b("React").createElement(b("XUIText.react"),{size:"header4",display:"block",className:"_3-96"},h._("Add a Description")))};n.prototype.$5=function(){return b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({editingDescription:!0})}.bind(this)},b("React").createElement(b("XUIText.react"),{size:"header4"},h._("Edit")))};n.prototype.$6=function(a){return b("React").createElement(b("Button.react"),{use:"confirm",label:"Confirm",onClick:function(){this.setState({editingDescription:!1}),b("GroupDescriptionMutation").commit(b("RelayFBEnvironment"),{group_id:a.groupID,description:this.state.description},{onSuccess:function(){},onError:function(a){}})}.bind(this)})};n.prototype.$7=function(){return b("React").createElement(b("Button.react"),{use:"default",label:"Cancel",onClick:function(){return this.setState({editingDescription:!1})}.bind(this)})};n.prototype.$8=function(){return b("React").createElement(b("XUIGrayText.react"),{size:"header4",weight:"bold",display:"block"},h._("Description"))};n.prototype.$9=function(a,c){__p&&__p();var d=null,e=null,f=null,g=null,i=a.group_address.description.length===0,j=this.$8();if(a.group_address.can_viewer_change_description){i?f=this.$4():e=this.$5();c=this.$6(c);var n=this.$7();g=b("React").createElement("div",null,j,b("React").createElement(b("SUITextArea.react"),{defaultValue:a.group_address.description,rows:4,style:{height:"100%"},maxLength:k,theme:b("SUIAtlasTheme"),onChange:function(a){return this.setState({description:a})}.bind(this),className:"_3-8y _3-95"}),b("React").createElement("div",{className:"_3-96"},c,n))}!i?d=b("React").createElement("div",null,b("React").createElement(b("LeftRight.react"),null,j,e),b("React").createElement(b("XUIText.react"),{size:"header4",display:"block"},b("React").createElement(b("ExpandableText.react"),{cutoff:l,grow:m,seeMoreText:h._("See more"),seeLessText:"",text:a.group_address.description,TextRenderer:this.$10}))):a.group_address.can_viewer_change_description&&(d=b("React").createElement("div",null,b("React").createElement("div",{className:"_3-96"},j),f));return this.state.editingDescription?g:d};n.prototype.$10=function(a){a=a.children;return b("React").createElement(b("GroupsAboutTabDescriptionTransformText.react"),{text:a,transforms:[b("DOMHyperlink"),b("DOMEmoji"),b("DOMEmote")]})};n.prototype.$11=function(a,c){c=null;a.group_address.group_purposes.edges.length>0&&(c=b("React").createElement("div",null,b("React").createElement(b("XUIGrayText.react"),{size:"header4",weight:"bold",display:"block",className:"_3-96"},h._("Group Type")),a.group_address.group_purposes.edges.map(function(a){return b("React").createElement(b("XUIText.react"),{size:"header4",display:"block",key:a.node.purpose_name,className:"_3-96"},a.node.purpose_name)})));return c};n.prototype.$12=function(){return b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({editingTopics:!0})}.bind(this)},b("React").createElement(b("XUIText.react"),{size:"header4",display:"block",className:"_3-96"},h._("Add Tags")))};n.prototype.$13=function(){return b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({editingTopics:!0})}.bind(this)},b("React").createElement(b("XUIText.react"),{size:"header4"},h._("Edit")))};n.prototype.$14=function(a){return b("React").createElement(b("Button.react"),{use:"confirm",label:"Confirm",onClick:function(){this.setState({editingTopics:!1});var c=this.state.topicEntries.map(function(a){return a.getUniqueID()});b("GroupTopicsMutation").commit(b("RelayFBEnvironment"),{group_id:a.groupID,group_topic_tags:c},{onSuccess:function(){},onError:function(a){}})}.bind(this)})};n.prototype.$15=function(){return b("React").createElement(b("Button.react"),{use:"default",label:"Cancel",onClick:function(){return this.setState({editingTopics:!1})}.bind(this)})};n.prototype.$16=function(){return b("React").createElement(b("XUIGrayText.react"),{size:"header4",weight:"bold",display:"block",className:"_3-96"},h._("Tags"))};n.prototype.$17=function(a){return a.group_address.group_topic_tags.map(function(a){return b("React").createElement(b("Link.react"),{key:a.name,href:b("XGroupBrowseController").getURIBuilder().setString("category",b("GroupMemberActionSource").CATEGORY_DISCOVER_TAG).setInt("tag_id",a.id).getURI(),className:"_1-da"},b("React").createElement(b("XUIText.react"),{className:"_1-db"},a.name))})};n.prototype.$18=function(a,c){__p&&__p();var d=null,e=null,f=null,g=null,h=this.$16();if(a.group_address.can_viewer_change_tags){a.group_address.group_topic_tags.length===0?f=this.$12():e=this.$13();var i=this.$14(c),j=this.$15();if(a.group_address.group_topic_tags.length!=this.state.topicEntries.length&&!this.state.editingTopics){var k=this.$3(a.group_address.group_topic_tags);this.setState({topicEntries:k})}g=b("React").createElement("div",null,h,b("React").createElement(b("XUITokenizer.react"),{entries:this.state.topicEntries,onAddEntryAttempt:this.$1,onRemoveEntryAttempt:this.$2,searchSource:c.searchSource,limit:5,className:"_3-8w _3-95"}),b("React").createElement("div",{className:"_3-96"},i,j))}a.group_address.group_topic_tags.length>0?d=b("React").createElement("div",{className:"_2pio"},b("React").createElement(b("LeftRight.react"),null,h,e),this.$17(a)):a.group_address.can_viewer_change_tags&&(d=b("React").createElement("div",null,h,f));return this.state.editingTopics?g:d};n.prototype.render=function(){var a={group_id:this.props.groupID},c=this.props;return b("React").createElement(j,{environment:b("RelayFBEnvironment"),query:n.query,variables:a,render:function(a){a.error;a=a.props;return!a?b("React").createElement(b("GroupsAboutTabDescriptionCardLoading.react"),null):b("React").createElement("div",null,this.$9(a,c),this.$11(a,c))}.bind(this)})};n.query=function(){return b("GroupsAboutTabDescriptionCardQuery.graphql")};e.exports=n}),null);
__d("XLiveVideoBroadcastLaunchComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_map/composer_config/",{default_input_source:{type:"String"},composer_entry_point:{type:"String",required:!0},page_id:{type:"FBID"},game_id:{type:"FBID"},hide_input_toggle:{type:"Bool",defaultValue:!1}})}),null);
__d("XPagesBanUserDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/admin/ban_user/",{page_id:{type:"FBID",required:!0},user_ids:{type:"FBIDVector",required:!0}})}),null);
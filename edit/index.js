(function(N,B,o,i,M,e,R,g,f,j){"use strict";const{FormRow:L}=R.Forms;function S(t){let{label:a,icon:s,onPress:c,onLongPress:n}=t;const l=e.stylesheet.createThemedStyleSheet({icon:{width:24,height:24,tintColor:g.semanticColors.INTERACTIVE_NORMAL,opacity:1}});return React.createElement(L,{label:a,leading:React.createElement(L.Icon,{source:s,style:l.icon}),onPress:function(){return c?.()},onLongPress:function(){return n?.()}})}const $="https://api.deeplx.org/translate",U="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function z(t){const a=`${U}&sl=auto&tl=en&q=${encodeURIComponent(t.replace(/\n/g,"                                           "))}`;try{const s=await fetch(a);return s.ok?(await s.json())[0][0][0]:"Try Again"}catch{}}async function J(t){const a=await(await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,source_lang:"auto",target_lang:"en"})})).json();return a.code!==200?"Try Again.":a.data}async function Y(t,a){try{return a==="dl"?await J(t):await z(t)}catch{}}const A=` \uFF3D\`

`;i.findByStoreName("MessageStore"),i.findByProps("getChannel","getDMFromUserId");const v=i.findByProps("openLazy","hideActionSheet");async function F(t,a){let s=t.content;s.includes(A)&&(s=`${s.substring(s.lastIndexOf(A)+A.length)}`);const c=await Y(s,a);j.showConfirmationAlert({title:`Translation [en] | @${t.author.globalName?.normalize("NFKC")||t.author.username}`,content:`${c}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${c}`),f.showToast("Copied Translation",o.getAssetIDByName("toast_copy_message"))}catch{}}}),v.hideActionSheet()}function W(){B.before("openLazy",v,function(t){const[a,s,c]=t,n=c?.message;s!=="MessageLongPressActionSheet"||!n||a.then(function(l){const b=B.after("default",l,function(D,h){e.React.useEffect(function(){return function(){return b()}},[]);const r=M.findInReactTree(h,function(p){return p?.[0]?.type?.name==="ButtonRow"});if(!r)return h;n.content&&r.splice(5,0,e.React.createElement(S,{label:"Translate Message",icon:o.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await F(n,"dl")},onLongPress:async function(){return await F(n,"gl")}}))})})})}const{View:u,Text:O,TextInput:G,TouchableOpacity:y}=R.General,{FormIcon:T}=R.Forms,{ScrollView:k,Image:V,Modal:K}=e.ReactNative,X=i.findByProps("pushModal"),E=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:C}}=i.findByProps("colors","meta"),Z=i.findByName("Navigator")??i.findByProps("Navigator")?.Navigator,q=i.findByProps("getRenderCloseButton")?.getRenderCloseButton??i.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,Q=i.findByName("Svg",!1).default,w=i.findByName("Svg",!1).Path,ee=i.findByProps("useSafeAreaInsets");function te(t,a){return function(){return e.React.createElement(y,{onPress:t,onLongPress:a},e.React.createElement(T,{source:o.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function ne(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",c=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0;return function(){const[l,b]=e.React.useState(!0),[D,h]=e.React.useState(`${a}`),r={header:C(E.theme,g.semanticColors.HEADER_PRIMARY),test:C(E.theme,g.semanticColors.TEXT_MUTED),bgDark:C(E.theme,g.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:C(E.theme,g.semanticColors.BACKGROUND_SECONDARY),bgBrighter:C(E.theme,g.semanticColors.BACKGROUND_ACCENT)},p=e.React.createElement(Q,{height:"24",width:"24",viewBox:"0 0 24 24",fill:l?r.header:r.test},e.React.createElement(w,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(w,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(w,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[_,m]=e.React.useState(!1),x=e.React.useRef(null),oe=ee.useSafeAreaInsets();let le=e.React.createElement(u,{style:{marginTop:0}},e.React.createElement(u,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(u,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(y,{onPress:function(){b(!l)},onLongPress:function(){f.showToast("Toggle Word Wrap",o.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:l?r.bgBrighter:r.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:l?r.bgBright:r.bgDark}},p),e.React.createElement(y,{onPress:function(){m(!0)},onLongPress:function(){f.showToast(e.i18n.Messages.JUMP,o.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:r.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:r.bgDark}},e.React.createElement(V,{source:o.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement(k,{ref:x,style:{margin:15,marginBottom:50+oe.bottom}},e.React.createElement(k,{horizontal:!l},e.React.createElement(u,{style:{flexDirection:"row"}},e.React.createElement(u,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:r.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(G,{multiline:!0,selectable:!0,editable:n,style:[{color:r.header,lineHeight:20,flex:1}],onChangeText:function(d){h(`${d}`)}},D)))),e.React.createElement(K,{transparent:!0,animationType:"none",visible:_,onRequestClose:function(){return m(!1)}},e.React.createElement(u,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(u,{style:{backgroundColor:r.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(u,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(R.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(y,{onPress:function(){return m(!1)}},e.React.createElement(T,{source:o.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(y,{style:{backgroundColor:r.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let d=x?.current;m(!1),d?.scrollToEnd?.({animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(R.Forms.FormText,{style:{color:r.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(u,null)),e.React.createElement(y,{style:{backgroundColor:r.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let d=x?.current;m(!1),d?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(R.Forms.FormText,{style:{color:r.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(u,null))))));return e.React.createElement(Z,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:q(function(){return X.popModal("file-content-preview")}),headerRight:te(function(){return c(`${D}`)}),render:function(){return le},headerTitle:function(){let d=C(E.theme,g.semanticColors.HEADER_PRIMARY);return e.React.createElement(y,{onPress:function(){e.clipboard.setString(t),f.showToast(e.i18n.Messages.COPIED_TEXT,o.getAssetIDByName("toast_copy_message"))}},e.React.createElement(O,{numberOfLines:1,style:{color:d}},t),e.React.createElement(O,{style:{color:d,fontSize:12}},s))}}}})}}const ae=i.findByProps("getChannel","getDMFromUserId");i.findByStoreName("MessageStore"),i.findByStoreName("SelectedChannelStore"),i.findByProps("MessagesHandlers");const P=i.findByProps("openLazy","hideActionSheet"),H=i.findByProps("pushModal");function re(t){const a=JSON.parse(JSON.stringify(t));for(const s in a.author)switch(s){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete a.author[s]}return Object.fromEntries(Object.entries(a).sort(function(s,c){let[n]=s,[l]=c;return n.localeCompare(l)}))}function se(){B.before("openLazy",P,function(t){const[a,s,c]=t,n=c?.message;s!=="MessageLongPressActionSheet"||!n||a.then(function(l){const b=B.after("default",l,function(D,h){e.React.useEffect(function(){return function(){return b()}},[]);const r=M.findInReactTree(h,function(p){return p?.[0]?.type?.name==="ButtonRow"});if(!r)return h;r.splice(21,0,e.React.createElement(S,{label:"Edit Message Locally",icon:o.getAssetIDByName("ic_chat_bubble_32px"),onPress:async function(){P.hideActionSheet()},onLongPress:async function(){H.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:ne(n.content&&n.content!=""?n?.content.length>32?n?.content?.slice(0,32)?.replace(/\n/g," ")+"...":n?.content:"[Attachment(s)]",JSON.stringify(re(n),null,"	"),`@${n?.author?.username}`,function(p){try{let _={type:"MESSAGE_UPDATE",message:{...JSON.parse(p),guild_id:ae.getChannel(n?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!_.message.content||_.message.content.replace(/\ufeff/g,"")==="")&&delete _.message.content,e.FluxDispatcher.dispatch(_),f.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),H.popModal("file-content-preview")}catch{f.showToast("Make sure the JSON is valid",o.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),P.hideActionSheet()}})),n.__vml_deleted||r.splice(30,0,e.React.createElement(S,{label:"Hide Message Locally",icon:o.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:n.id,channelId:n.channel_id,__vml_cleanup:!0}),f.showToast("Hidden Message",o.getAssetIDByName("ic_eye_hidden")),P.hideActionSheet()}}))})})})}let I=[];var ie={onLoad:function(){I.push(se()),I.push(W())},onUnload:function(){for(const t of I)t()}};return N.default=ie,Object.defineProperty(N,"__esModule",{value:!0}),N})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);

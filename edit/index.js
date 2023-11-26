(function(S,B,o,i,v,e,y,g,j,R){"use strict";const{FormRow:L}=y.Forms;function A(n){let{label:a,icon:s,onPress:c,onLongPress:t}=n;const l=e.stylesheet.createThemedStyleSheet({icon:{width:24,height:24,tintColor:"#B5BAC1"}});return React.createElement(L,{label:a,leading:React.createElement(L.Icon,{source:s,style:l.icon}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}})}const z="https://api.deeplx.org/translate",J="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function Y(n){const a=`${J}&sl=auto&tl=en&q=${encodeURIComponent(n.replace(/\n/g,"                                           "))}`;try{const s=await fetch(a);return s.ok?(await s.json())[0][0][0]:"Try Again"}catch{}}async function G(n){const a=await(await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n,source_lang:"auto",target_lang:"en"})})).json();return a.code!==200?"Try Again.":a.data}async function W(n,a){try{return a==="dl"?await G(n):await Y(n)}catch{}}const N=` \uFF3D\`

`;i.findByStoreName("MessageStore"),i.findByProps("getChannel","getDMFromUserId");const F=i.findByProps("openLazy","hideActionSheet");async function O(n,a){let s=n.content;s.includes(N)&&(s=`${s.substring(s.lastIndexOf(N)+N.length)}`);const c=await W(s,a);j.showConfirmationAlert({title:`Translation [en] | @${n.author.globalName?.normalize("NFKC")||n.author.username}`,content:`${c}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${c}`),g.showToast("Copied Translation",o.getAssetIDByName("toast_copy_message"))}catch{}}}),F.hideActionSheet()}function V(){B.before("openLazy",F,function(n){const[a,s,c]=n,t=c?.message;s!=="MessageLongPressActionSheet"||!t||a.then(function(l){const m=B.after("default",l,function(D,p){e.React.useEffect(function(){return function(){return m()}},[]);const r=v.findInReactTree(p,function(u){return u?.[0]?.type?.name==="ButtonRow"});if(!r)return p;t.content&&r.splice(5,0,e.React.createElement(A,{label:"Translate Message",icon:o.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await O(t,"dl")},onLongPress:async function(){return await O(t,"gl")}}))})})})}const{View:d,Text:k,TextInput:K,TouchableOpacity:h}=y.General,{FormIcon:T}=y.Forms,{ScrollView:H,Image:q,Modal:X}=e.ReactNative,Z=i.findByProps("pushModal"),E=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:_}}=i.findByProps("colors","meta"),Q=i.findByName("Navigator")??i.findByProps("Navigator")?.Navigator,ee=i.findByProps("getRenderCloseButton")?.getRenderCloseButton??i.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,te=i.findByName("Svg",!1).default,I=i.findByName("Svg",!1).Path,ne=i.findByProps("useSafeAreaInsets");function ae(n,a){return function(){return e.React.createElement(h,{onPress:n,onLongPress:a},e.React.createElement(T,{source:o.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function $(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",c=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0;return function(){const[l,m]=e.React.useState(!0),[D,p]=e.React.useState(`${a}`),r={header:_(E.theme,R.semanticColors.HEADER_PRIMARY),test:_(E.theme,R.semanticColors.TEXT_MUTED),bgDark:_(E.theme,R.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:_(E.theme,R.semanticColors.BACKGROUND_SECONDARY),bgBrighter:_(E.theme,R.semanticColors.BACKGROUND_ACCENT)},u=e.React.createElement(te,{height:"24",width:"24",viewBox:"0 0 24 24",fill:l?r.header:r.test},e.React.createElement(I,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(I,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(I,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[C,b]=e.React.useState(!1),M=e.React.useRef(null),oe=ne.useSafeAreaInsets();let le=e.React.createElement(d,{style:{marginTop:0}},e.React.createElement(d,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(d,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(h,{onPress:function(){m(!l)},onLongPress:function(){g.showToast("Toggle Word Wrap",o.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:l?r.bgBrighter:r.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:l?r.bgBright:r.bgDark}},u),e.React.createElement(h,{onPress:function(){b(!0)},onLongPress:function(){g.showToast(e.i18n.Messages.JUMP,o.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:r.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:r.bgDark}},e.React.createElement(q,{source:o.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement(H,{ref:M,style:{margin:15,marginBottom:50+oe.bottom}},e.React.createElement(H,{horizontal:!l},e.React.createElement(d,{style:{flexDirection:"row"}},e.React.createElement(d,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:r.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(K,{multiline:!0,selectable:!0,editable:t,style:[{color:r.header,lineHeight:20,flex:1}],onChangeText:function(f){p(`${f}`)}},D)))),e.React.createElement(X,{transparent:!0,animationType:"none",visible:C,onRequestClose:function(){return b(!1)}},e.React.createElement(d,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(d,{style:{backgroundColor:r.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(d,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(y.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(h,{onPress:function(){return b(!1)}},e.React.createElement(T,{source:o.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(h,{style:{backgroundColor:r.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=M?.current;b(!1),f?.scrollToEnd?.({animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(y.Forms.FormText,{style:{color:r.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(d,null)),e.React.createElement(h,{style:{backgroundColor:r.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=M?.current;b(!1),f?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(y.Forms.FormText,{style:{color:r.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(d,null))))));return e.React.createElement(Q,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:ee(function(){return Z.popModal("file-content-preview")}),headerRight:ae(function(){return c(`${D}`)}),render:function(){return le},headerTitle:function(){let f=_(E.theme,R.semanticColors.HEADER_PRIMARY);return e.React.createElement(h,{onPress:function(){e.clipboard.setString(n),g.showToast(e.i18n.Messages.COPIED_TEXT,o.getAssetIDByName("toast_copy_message"))}},e.React.createElement(k,{numberOfLines:1,style:{color:f}},n),e.React.createElement(k,{style:{color:f,fontSize:12}},s))}}}})}}const U=i.findByProps("getChannel","getDMFromUserId");i.findByStoreName("MessageStore"),i.findByStoreName("SelectedChannelStore"),i.findByProps("MessagesHandlers");const P=i.findByProps("openLazy","hideActionSheet"),w=i.findByProps("pushModal");function re(n){const a=JSON.parse(JSON.stringify(n));for(const s in a.author)switch(s){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete a.author[s]}return Object.fromEntries(Object.entries(a).sort(function(s,c){let[t]=s,[l]=c;return t.localeCompare(l)}))}function se(){B.before("openLazy",P,function(n){const[a,s,c]=n,t=c?.message;s!=="MessageLongPressActionSheet"||!t||a.then(function(l){const m=B.after("default",l,function(D,p){e.React.useEffect(function(){return function(){return m()}},[]);const r=v.findInReactTree(p,function(u){return u?.[0]?.type?.name==="ButtonRow"});if(!r)return p;r.splice(21,0,e.React.createElement(A,{label:"View Raw",icon:o.getAssetIDByName("icon-qs-files"),onPress:async function(){w.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:$(t.content&&t.content!=""?t?.content.length>32?t?.content?.slice(0,32)?.replace(/\n/g," ")+"...":t?.content:"[Attachment(s)]",JSON.stringify(re(t),null,"	"),`@${t?.author?.username}`,function(u){try{let C={type:"MESSAGE_UPDATE",message:{...JSON.parse(u),guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!C.message.content||C.message.content.replace(/\ufeff/g,"")==="")&&delete C.message.content,e.FluxDispatcher.dispatch(C),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),w.popModal("file-content-preview")}catch{g.showToast("Make sure the JSON is valid",o.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),P.hideActionSheet()},onLongPress:async function(){w.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:$(t.content&&t.content.trim()!==""?t.content.replace(/\n/g," "):"[Attachment(s)]",t.content&&t.content.trim()!==""?t.content:"\uFEFF ",`@${t?.author?.username}`,function(u){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...t,content:`${u.replace(/\ufeff/g,"")}`,guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0}),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),w.popModal("file-content-preview")}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),P.hideActionSheet()}})),t.__vml_deleted||r.splice(30,0,e.React.createElement(A,{label:"Hide Message Locally",icon:o.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:t.id,channelId:t.channel_id,__vml_cleanup:!0}),g.showToast("Hidden Message",o.getAssetIDByName("ic_eye_hidden")),P.hideActionSheet()}}))})})})}let x=[];var ie={onLoad:function(){x.push(se()),x.push(V())},onUnload:function(){for(const n of x)n()}};return S.default=ie,Object.defineProperty(S,"__esModule",{value:!0}),S})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.ui);

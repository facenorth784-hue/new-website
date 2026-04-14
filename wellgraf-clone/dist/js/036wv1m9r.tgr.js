;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="441e2d71-713c-3659-e2d0-159d9bb7f0c6")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8017306,4868006,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),n=e.i(8534334),o=e.i(6112151),r=e.i(1789610),s=e.i(1804267);let a=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconBrandCrowdcast",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M8.981 15.578v2.093h6.179v-2.093zm0-2.898v2.093h6.179V12.68zm0-2.897v2.093h6.179V9.783zm3.129-.885c.798 0 1.445-.65 1.445-1.45S12.908 6 12.111 6c-.798 0-1.445.649-1.445 1.449s.647 1.449 1.445 1.449m3.693 6.692v2.076H22V15.59zm0-2.905v2.076H22v-2.076zm3.098-.83a1.45 1.45 0 0 0 1.446-1.452 1.45 1.45 0 0 0-1.446-1.453 1.45 1.45 0 0 0-1.446 1.453 1.45 1.45 0 0 0 1.446 1.452M2 17.67v-2.092h6.179v2.093zm4.574-4.346c0 .782-.647 1.449-1.445 1.449a1.46 1.46 0 0 1-1.444-1.449c0-.862.647-1.53 1.444-1.53.798 0 1.445.668 1.445 1.53"})})});e.s(["IconBrandCrowdcast",0,a],4868006);var d=e.i(1968870),l=e.i(2859206),c=e.i(1108816),u=e.i(226931),p=e.i(6191788),h=e.i(8683249),x=e.i(2550472),m=e.i(829490),f=e.i(9760814);let g="20px",y=f.styled.div.withConfig({componentId:"sc-1662d93c-0"})`
  background-position: center;
  background-image: url('${e=>e.src}');
  padding: ${g};
  margin: 0 -${g};
  filter: blur(${g});
  background-size: cover;
  overflow: hidden;
  width: 100%;
  padding-bottom: 38%;
  opacity: 0.4;
`,v=f.styled.div.withConfig({componentId:"sc-1662d93c-1"})`
  margin: ${u.tokens.space.x16};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${u.tokens.constant.blackSubtle.hover};
  border-radius: ${"200px"};
  cursor: pointer;
  border: 4px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${e=>e.hidden?"display: none":""};
`,b=f.styled.div.withConfig({componentId:"sc-1662d93c-2"})`
  opacity: 0.7;
`,k=f.styled.div.withConfig({componentId:"sc-1662d93c-3"})`
  z-index: ${u.tokens.layer.z1};
  position: relative;
`,w=f.styled.input.withConfig({componentId:"sc-1662d93c-4"})`
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${u.tokens.layer.z1};
`;class T extends p.Component{state={isHovering:!1};handleClickWatch=()=>{h.patreonTrackerClient.logTypedEvent("Crowdcast : Post : Clicked Watch Livestream")};handleRemoveImage=e=>{e.preventDefault(),h.patreonTrackerClient.logTypedEvent("Crowdcast : Upload Cover Photo : Clicked Remove Cover Photo"),this.props.onRemoveImage()};renderEditPhoto=()=>{let{acceptedFileTypes:e,hasCustomImage:n=!1,onAddImage:r}=this.props,s=(0,t.jsx)(w,{accept:e,type:"file","data-tag":"editPhoto",onChange:r});return(0,t.jsxs)(v,{hidden:!this.state.isHovering,onClick:n&&this.handleRemoveImage,children:[n?(0,t.jsx)(d.IconClose,{color:u.tokens.inverted.regular.default,size:"12px"}):s,n?(0,t.jsx)(o.BodyText,{align:"center",color:u.tokens.constant.white.default,size:"md",as:"span",children:(0,t.jsx)("strong",{children:(0,t.jsx)(i.Trans,{id:"dXAa/c",message:"Remove",context:"Text description to remove an existing custom image"})})}):(0,t.jsx)(o.BodyText,{align:"center",color:u.tokens.constant.white.default,size:"md",as:"span",children:(0,t.jsx)("strong",{children:(0,t.jsx)(i.Trans,{id:"YkBqCl",message:"Replace Photo",context:"Text description to replace an existing image"})})})]})};renderAvatarSection=()=>{let{isEditing:e=!1,src:i,url:o}=this.props,s=(0,t.jsxs)(m.UnstyledLink,{href:o,"data-tag":"editPhoto",children:[e&&this.renderEditPhoto(),(0,t.jsx)(n.Avatar,{size:{xs:"80px",sm:"120px"},src:i})]}),a={b:{xs:!1,sm:!0},borderStrokeWidth:"5px",cornerRadius:"circle",position:"relative",display:"inline-block"};return(0,t.jsx)(r.Box,{alignContent:"flex-start",alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",children:(0,t.jsx)(r.Box,{...a,p:1,mr:2,children:(0,t.jsx)(r.Box,{...a,p:2,children:s})})})};renderButtonSection=()=>{let{url:e}=this.props;return(0,t.jsx)(c.Stack,{flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"flex-start",children:(0,t.jsxs)(l.Spacer,{mv:u.tokens.space.x16,children:[(0,t.jsx)(x.ButtonShim,{loggerId:"CrowdcastLivestreamPreview-watch-the-livestream",variant:"insetBlack",disabled:!e,href:e,onClick:this.handleClickWatch,size:{xs:"sm",sm:"md"},target:"_blank",children:(0,t.jsx)(i.Trans,{id:"tKAOiP",message:"Watch the livestream",context:"Button to take you to the live video stream"})}),(0,t.jsx)(b,{children:(0,t.jsx)(o.BodyText,{align:"center",color:u.tokens.constant.white.default,as:"div",size:"md",children:(0,t.jsx)(i.Trans,{id:"FqQwig",components:{0:(0,t.jsx)(a,{color:u.tokens.inverted.regular.default})},message:"<0/>Powered by Crowdcast",context:"Icon and message that the livestream is hosted by Crowdcast, a proper noun"})})})]})})};render(){let{src:e}=this.props,i=(0,t.jsx)(r.Box,{fluidHeight:!0,fluidWidth:!0,mt:0,position:"absolute",pl:2,pt:2,children:(0,t.jsxs)(r.Box,{alignContent:"flex-start",alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"nowrap",fluidHeight:!0,justifyContent:"flex-start",children:[(0,t.jsx)(s.Col,{display:{xs:"block"},xs:4,sm:5,alignSelf:"center",children:(0,t.jsx)(k,{children:this.renderAvatarSection()})}),(0,t.jsx)(s.Col,{xs:7,sm:6,alignSelf:"center",children:(0,t.jsx)(k,{children:this.renderButtonSection()})})]})});return(0,t.jsxs)(r.Box,{backgroundColor:u.tokens.content.regular.default,overflow:"hidden",onMouseEnter:()=>this.setState({isHovering:!0}),onMouseLeave:()=>this.setState({isHovering:!1}),position:"relative",children:[i,(0,t.jsx)(y,{src:e})]})}}e.s(["CrowdcastLivestreamPreview",0,T],8017306)},2154176,e=>{"use strict";var t=e.i(6357605);e.s(["convertBasisPointsToPercentagePoints",0,e=>e/1e4,"formatPercentRound",0,(e,i)=>new Intl.NumberFormat(i,{style:"percent",useGrouping:!1}).format((0,t.checkNumberType)(e))])},2275783,e=>{e.v({audioSkeleton:"JSONMedia-module__dCyHza__audioSkeleton",audioWrapper:"JSONMedia-module__dCyHza__audioWrapper",mediaContainer:"JSONMedia-module__dCyHza__mediaContainer",videoSkeleton:"JSONMedia-module__dCyHza__videoSkeleton"})},9575482,e=>{e.v({divider:"JSONToHTMLPostBody-module__t0j7VG__divider",fallbackModule:"JSONToHTMLPostBody-module__t0j7VG__fallbackModule"})},5831427,e=>{"use strict";var t=e.i(9391398),i=e.i(6112151),n=e.i(1015942),o=e.i(8139671),r=e.i(5363035),s=e.i(2859206),a=e.i(226931),d=e.i(6191788),l=e.i(7973243);let c=new Set(["http","https","mailto","tel"]);function u(e){if(!e)return null;try{let t=window.location.href,i=new URL(e,t).protocol.replace(":","").toLowerCase();return c.has(i)?e:null}catch{return null}}var p=e.i(8251167),h=e.i(2420554),x=e.i(3783965),m=e.i(177658),f=e.i(829490);let g=e=>{let{imageAttributes:i}=e,[n,o]=(0,d.useState)(!1),r=(0,d.useRef)(null);(0,d.useEffect)(()=>{r.current?.complete&&i.src&&o(!0)},[i.src]);let s=(0,t.jsx)("img",{ref:r,src:i.src||void 0,alt:i.alt||void 0,"data-media-id":i[x.MEDIA_ID_ATTRIBUTE],onLoad:()=>{o(!0)}}),a=i.customLink&&""!==i.customLink?(0,t.jsx)(f.UnstyledLink,{href:i.customLink,routeType:"external",children:s}):s;return(0,t.jsx)("div",{"data-image-container":"true","data-alignment":i[x.ALIGNMENT_ATTRIBUTE],children:(0,t.jsxs)("figure",{children:[a,i.caption&&n&&(0,t.jsx)("figcaption",{children:i.caption})]})})};var y=e.i(6571943),v=e.i(8205331),b=e.i(7308002),k=e.i(9598373);let w=(0,b.atom)(null),T=()=>{let e=(0,k.useSetAtom)(w);return{getMediaControls:(0,d.useCallback)((t,i)=>({onPlay:()=>{e(e=>(e&&e.id!==t&&e.onPause(),{id:t,onPause:i}))},onEnd:()=>{e(e=>e?.id===t?null:e)}}),[e])}};var I=e.i(6018844),C=e.i(2490126),j=e.i(5796023),S=e.i(2275783);let _=e=>{let{mediaId:i}=e,n=(0,d.useRef)(null),{getMediaControls:o}=T(),[r,,s]=(0,v.useNion)({dataKey:`inline-media-${i}`,endpoint:(0,I.buildUrl)(`/media/${i}`),fetchOnMount:!!i},[i]),a=i?o(i,()=>{n.current?.pause()}):null;return!i||s.isError||r&&"ready"!==r.state?null:r?.state==="ready"?(0,t.jsx)("div",{className:S.default.mediaContainer,children:(0,t.jsx)("div",{className:S.default.audioWrapper,children:(0,t.jsx)(C.AudioPlayerMediaCard,{audioRef:n,accessRules:void 0,audio:r,audioPreview:void 0,thumbnail:r.display?.defaultThumbnail?.url,patreonUrl:void 0,campaign:null,url:void 0,id:i,postMetadata:void 0,parentHighlightPost:void 0,currentUserCanView:!0,currentUserIsFreeMemberAndCanUpgrade:!1,currentUserPledge:void 0,isFreeMember:!1,isPatron:!0,isPostOwner:!1,postSource:void 0,isPostPreview:!1,isPostPage:!1,drop:null,hasPostViewerData:!0,onFinishedPlaying:a?.onEnd,isCreatorWorldHome:!1,title:void 0,hideSnipButton:!0,isInline:!0,onPlay:a?.onPlay,onPause:a?.onEnd})})}):(0,t.jsx)("div",{className:S.default.mediaContainer,children:(0,t.jsx)("div",{className:S.default.audioSkeleton,children:(0,t.jsx)(j.PulseEffect,{pulseColor:"content"})})})};var A=e.i(4152146),P=e.i(1053015);let E=e=>{let{mediaId:i}=e,n=(0,d.useRef)(null),{getMediaControls:o}=T(),r=(0,A.useSessionValue)("user_id"),[s,,a]=(0,v.useNion)({dataKey:`inline-media-${i}`,endpoint:(0,I.buildUrl)(`/media/${i}`),fetchOnMount:!!i},[i]),l=i?o(i,()=>{n.current?.pause()}):null;return!i||a.isError||s&&"ready"!==s.state?null:s?.state==="ready"?(0,t.jsx)("div",{className:S.default.mediaContainer,children:(0,t.jsx)(P.LazyVideoPlayer,{ref:n,variant:"contentCard",videoId:i,userId:r,videoUrl:s.display?.url||s.downloadUrl,videoWidth:s.display?.width||640,videoHeight:s.display?.height||360,thumbnailUrl:s.display?.defaultThumbnail?.url,duration:s.display?.duration||0,controls:!0,playbackData:s.display?.viewerPlaybackData,time:s.display?.progress?.positionSecs||0,isInline:!0,onPlay:l?.onPlay,onPaused:l?.onEnd,onCompleted:l?.onEnd})}):(0,t.jsx)("div",{className:S.default.mediaContainer,children:(0,t.jsx)("div",{className:S.default.videoSkeleton,children:(0,t.jsx)(j.PulseEffect,{pulseColor:"content"})})})};var R=e.i(2358280),N=e.i(9575482);let M=()=>(0,t.jsx)("div",{className:N.default.fallbackModule,children:(0,t.jsx)(r.HeadingText,{size:"md",children:(0,t.jsx)(R.Trans,{id:"UURtDM",message:"This section is currently unavailable",context:"Telling user we can't display this content"})})});var L=e.i(5623175);let $=e=>{let{mark:i,children:n}=e,o=!(0,L.isBoldMark)(i)&&!(0,L.isItalicMark)(i)&&!(0,L.isUnderlineMark)(i)&&!(0,L.isStrikethroughMark)(i)&&!(0,L.isLinkMark)(i)&&!(0,L.isMentionMark)(i);if((0,d.useEffect)(()=>{o&&(0,l.logException)({exception:Error("Unknown mark type passed into JSON post content body"),surface:"content",context:{mark:i},tags:{productSurface:"jsonContentParsing"}})},[o,i]),o)return n;if((0,L.isBoldMark)(i))return(0,t.jsx)("strong",{children:n});if((0,L.isItalicMark)(i))return(0,t.jsx)("em",{children:n});if((0,L.isUnderlineMark)(i))return(0,t.jsx)("u",{children:n});if((0,L.isStrikethroughMark)(i))return(0,t.jsx)("s",{children:n});if((0,L.isLinkMark)(i)){let{href:e,target:o}=i.attrs,r=u(e);return r?(0,t.jsx)(f.UnstyledLink,{href:r,target:o??"_blank",routeType:"external",onClick:e=>e.stopPropagation(),children:n}):(0,t.jsx)(t.Fragment,{children:n})}else{if(!(0,L.isMentionMark)(i))return n;let{url:e}=i.attrs;return(0,t.jsx)(f.UnstyledLink,{href:e,routeType:"external",rel:"noreferrer",style:{textDecoration:"none",color:a.tokens.content.primary.default},children:n})}},O={"post-page":{1:(e,i)=>(0,t.jsx)(n.DisplayText,{as:"h1",size:"md",style:i,children:e}),2:(e,i)=>(0,t.jsx)(r.HeadingText,{as:"h2",size:"xl",style:i,children:e}),3:(e,i)=>(0,t.jsx)(r.HeadingText,{as:"h3",size:"lg",style:i,children:e})},"content-card":{1:(e,i)=>(0,t.jsx)(r.HeadingText,{as:"h1",size:"xl",style:i,children:e}),2:(e,i)=>(0,t.jsx)(r.HeadingText,{as:"h2",size:"lg",style:i,children:e}),3:(e,i)=>(0,t.jsx)(r.HeadingText,{as:"h3",size:"md",style:i,children:e})},default:{1:(e,i)=>(0,t.jsx)("h1",{style:i,children:e}),2:(e,i)=>(0,t.jsx)("h2",{style:i,children:e}),3:(e,i)=>(0,t.jsx)("h3",{style:i,children:e})}},B=e=>{let{node:n,postSource:r,postId:c,variant:p}=e,f=!["text","paragraph","heading","blockquote","bulletList","orderedList","listItem","image","customImage","hardBreak","video","audio","mention","caption",m.PAYWALL_BREAKPOINT_NAME,h.INLINE_BUTTON_EXTENSION_NAME,"horizontalRule"].includes(n.type);if((0,d.useEffect)(()=>{f&&(0,l.logException)({exception:Error(`Unknown node type passed into JSON post content body: ${n.type}`),surface:"content",context:{node:n},tags:{productSurface:"jsonContentParsing"}})},[f,n]),(0,L.isTextModule)(n)){let e=n.text,i=(0,t.jsx)(t.Fragment,{children:n.text});return n.marks?.length&&(e=n.marks.reduceRight((e,i)=>(0,t.jsx)($,{mark:i,children:e}),i)),e}if((0,L.isImageModule)(n)&&"block"!==n.attrs.node_type){let{src:e,alt:i,height:o,width:r}=n.attrs,s=(0,t.jsx)("img",{src:e,alt:i,height:o,width:r}),a=(0,t.jsx)("img",{src:e,alt:i,height:o,width:r});return n.marks?.length&&(s=n.marks.reduceRight((e,i)=>(0,t.jsx)($,{mark:i,children:e}),a)),s}if((0,L.isHardBreakModule)(n)){let e=(0,t.jsx)("br",{}),i=(0,t.jsx)("br",{});return n.marks?.length&&(e=n.marks.reduceRight((e,i)=>(0,t.jsx)($,{mark:i,children:e}),i)),e}let v=[];switch("content"in n&&(v=n.content.map((e,i)=>(0,t.jsx)(B,{node:e,postSource:r,postId:c},i))),n.type){case"paragraph":{let e=W(n.attrs?.nodeTextAlignment);return(0,t.jsx)("p",{style:e&&{textAlign:e},children:v})}case"heading":{let e=W(n.attrs?.nodeTextAlignment),t=Math.min(n.attrs.level,3);return O[p??"default"][t](v,e&&{textAlign:e})}case"caption":{let e=W(n.attrs?.nodeTextAlignment);return(0,t.jsx)(i.BodyText,{size:"sm",color:a.tokens.content.muted.default,style:e&&{textAlign:e},children:v})}case"blockquote":return(0,t.jsx)("blockquote",{children:v});case"bulletList":return(0,t.jsx)("ul",{children:v});case"orderedList":if((0,L.isOrderedListModule)(n))return(0,t.jsx)("ol",{start:n.attrs.order,children:v});return(0,t.jsx)("ol",{children:v});case"listItem":return(0,t.jsx)("li",{children:v});case"image":if((0,L.isImageModule)(n)&&"block"===n.attrs.node_type){let{alignment:e,alt:i,caption:o,link:r,media_id:s,src:a}=n.attrs,d=r?u(r):void 0;return(0,t.jsx)(g,{imageAttributes:{[x.ALIGNMENT_ATTRIBUTE]:e,alt:i,caption:o,customLink:d||void 0,[x.MEDIA_ID_ATTRIBUTE]:s,src:a}})}return null;case"customImage":if((0,L.isCustomImageModule)(n)){let e={...n.attrs};if(e.customLink){let t=u(e.customLink);e.customLink=t||void 0}return(0,t.jsx)(g,{imageAttributes:e})}return null;case"audio":return(0,t.jsx)(_,{mediaId:n.attrs.media_id||n.attrs["data-media-id"]});case"video":return(0,t.jsx)(E,{mediaId:n.attrs.media_id||n.attrs["data-media-id"]});case h.INLINE_BUTTON_EXTENSION_NAME:{let e=n.attrs[h.BUTTON_LINK_ATTRIBUTE],i=e?u(e):void 0;return(0,t.jsx)(y.InlineButton,{buttonText:n.attrs[h.BUTTON_TEXT_ATTRIBUTE],buttonLink:i||void 0,caption:n.attrs[h.CAPTION_ATTRIBUTE],postSource:r,postId:c})}case"horizontalRule":return(0,t.jsx)(s.Spacer,{mv:a.tokens.space.x32,children:(0,t.jsx)(o.Divider,{variant:"horizontal",className:N.default.divider})});case m.PAYWALL_BREAKPOINT_NAME:return null;default:return(0,t.jsx)(M,{})}},z=e=>{let{document:i,postSource:n,postId:o,variant:r}=e,s=i.content.map((e,i)=>(0,t.jsx)(B,{node:e,postSource:n,postId:o,variant:r},i));return!function(e){if(Array.isArray(e)&&1===e.length){let t=e[0];return"paragraph"===t.props.node.type&&!t.props.node.content?.length}return!1}(s)?s:null},U=e=>{let{contentJson:i,postSource:n,postId:o,variant:r}=e,s=(0,d.useMemo)(()=>JSON.parse(i),[i]);if(!(0,L.isDocument)(s))throw Error("Invalid document structure");return(0,t.jsx)(z,{document:s,postSource:n,postId:o,variant:r})},D=e=>{let{contentJson:t,charLimit:i}=e,n=(0,d.useMemo)(()=>JSON.parse(t),[t]);if(!(0,L.isDocument)(n))throw Error("Invalid document structure");return(0,d.useMemo)(()=>(0,L.extractPlainText)(n,{charLimit:i}),[n,i])};function W(e){if("left"===e||"center"===e)return e}e.s(["JSONToHTML",0,e=>{let{contentJson:i,errorBoundaryName:n="JSONToHTMLPostBody",fallbackText:o,postSource:r,postId:s,variant:a}=e;return i?(0,t.jsx)(p.ErrorBoundary,{fallback:(0,t.jsx)(M,{}),scope:"custom",surface:"content",name:n,extraData:{contentJson:i},children:(0,t.jsx)(U,{contentJson:i,postSource:r,postId:s,variant:a})}):o??null},"JSONToPlainText",0,e=>{let{contentJson:i,charLimit:n}=e;return i?(0,t.jsx)(p.ErrorBoundary,{fallback:(0,t.jsx)(M,{}),scope:"custom",surface:"content",name:"JSONToHTMLPostBody",extraData:{contentJson:i},children:(0,t.jsx)(D,{contentJson:i,charLimit:n})}):null}],5831427)},359416,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),n=e.i(4613437),o=e.i(3106453),r=e.i(226931),s=e.i(6191788),a=e.i(8182035),d=e.i(6774867),l=e.i(9760814);let c=l.styled.button.withConfig({componentId:"sc-d10d8227-0"})`
  appearance: none;
  background: none;
  border: 0;
  display: flex;
  width: 100%;
  max-width: ${(0,d.convertLegacyUnitValue)(10)};
  margin-left: auto;
  margin-right: auto;

  &:focus {
    opacity: 1;
  }
`,u=l.styled.div.withConfig({componentId:"sc-d10d8227-1"})`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  top: 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover ${c} {
    opacity: 1;
  }
`,p=l.styled.div.withConfig({componentId:"sc-d10d8227-2"})`
  ${e=>`
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    position: relative;
    border-radius: ${r.tokens.radius.sm};
    transition: ${r.tokens.transition.regular.easing} ${r.tokens.transition.regular.duration};
    ${e.height?`height: ${e.height}px;`:"100%"}
    ${e.width?`width: ${e.width}px;`:""}
    min-height: ${e.minHeight}px;
    overflow: ${e.overflow};
`};
`,h=l.styled.img.withConfig({componentId:"sc-d10d8227-3"})`
  min-height: 200px;
`,x=l.styled.figure.withConfig({componentId:"sc-d10d8227-4"})`
  margin: 0;
  height: 100%;
`,m=(0,s.forwardRef)(function(e,s){let{setLoadIframe:a,variant:d,thumbnailUrl:l}=e,{i18n:m}=(0,i.useLingui)(),f="video"===d||"livestream_youtube"===d;return(0,t.jsx)(x,{ref:s,title:m._({id:"SIGvg7",message:"{variant} thumbnail",values:{variant:d}}),children:(0,t.jsxs)(p,{onClick:()=>{a(!0)},"data-tag":"media-container",children:[(0,t.jsx)(h,{src:l,alt:""}),(0,t.jsx)(u,{children:(0,t.jsx)(c,{title:m._({id:"iBzusN",message:"Start playback"}),children:f?(0,t.jsx)(n.IconBrandYoutube,{size:"64px",color:r.tokens.constant.white.default}):(0,t.jsx)(o.IconPlaybackPlayButton,{size:"64px",color:r.tokens.constant.white.default})})})]})})});e.s(["default",0,e=>{let{iframe:i,logMediaEnded:n,logTogglePlay:o,shouldAutoLoad:r,shouldRenderThumbnailFirst:d,thumbnailUrl:l,url:c="",variant:u,subject:p,showPaidAccessChip:h=!1,shouldDisableOpeningMediaUrl:x=!1}=e,[f,g]=(0,s.useState)(!!r),y=(0,s.useRef)(null);return f||d?(0,t.jsx)(a.LazyPostIframeWrapper,{innerHTML:i,logTogglePlay:o,logMediaEnded:n,logStartedPlayback:()=>void 0,logUnplayableMedia:()=>void 0,variant:u,media:{url:c,subject:p,imageSrc:l},showPaidAccessChip:h,shouldDisableOpeningMediaUrl:x},i):(0,t.jsx)(m,{setLoadIframe:g,variant:u,thumbnailUrl:l,ref:y})}],359416)},3436738,(e,t,i)=>{var n=e.r(6864353),o=e.r(7379862),r=e.r(473140);t.exports=function(e,t){return null==e?e:n(e,o(t),r)}},47401,e=>{"use strict";e.s(["COMMUNITY",0,"COMMUNITY","COV",0,"COV","CREATOR_PUBLIC_PAGE",0,"CREATOR_PUBLIC_PAGE","CREATOR_WORLD_HOME",0,"creator_world_home","HOME",0,"HOME","INSTANT_ACCESS",0,"INSTANT_ACCESS","OVERVIEW",0,"OVERVIEW","POSTS",0,"POSTS","POSTS_PAGE_SIDEBAR",0,"posts_page_sidebar","POSTS_TAB_SIDEBAR",0,"posts_tab_sidebar","POST_VIEWER",0,"post_viewer","QUICK_POSTS",0,"quick_posts","RELATED_POSTS",0,"related_posts","SINGLE_POST",0,"SINGLE_POST"])},4613437,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconBrandYoutube",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M11.994 5s-6.251 0-7.82.408a2.59 2.59 0 0 0-1.766 1.778C2 8.756 2 12.004 2 12.004s0 3.262.408 4.806a2.55 2.55 0 0 0 1.766 1.766c1.581.42 7.82.42 7.82.42s6.263 0 7.832-.407a2.49 2.49 0 0 0 1.754-1.767c.42-1.556.42-4.805.42-4.805s.012-3.262-.42-4.83a2.47 2.47 0 0 0-1.754-1.755C18.257 5 11.994 5 11.994 5m-1.99 4.003 5.202 3.001-5.201 2.99z"})})});e.s(["IconBrandYoutube",0,i])},8182035,e=>{"use strict";let t=(0,e.i(1168489).default)(()=>e.A(7266934).then(e=>e.PostIframeWrapper),{loadableGenerated:{modules:[9084492]},ssr:!1});e.s(["LazyPostIframeWrapper",0,t])},4441225,e=>{"use strict";var t=e.i(8683249);e.s(["logPollLandedEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Poll : Landed",e)}])},391216,e=>{"use strict";var t=e.i(9391398),i=e.i(6112151),n=e.i(1789610),o=e.i(5363035),r=e.i(226931),s=e.i(6191788),a=e.i(6985202),d=e.i(829490),l=e.i(9760814);let c=l.styled.div.withConfig({componentId:"sc-527de1e0-0"})`
  max-height: 500px;
  overflow-y: hidden;

  img {
    width: 100%;
  }
`,u=l.styled.div.withConfig({componentId:"sc-527de1e0-1"})`
  padding: ${r.tokens.space.x16};
  & > * {
    &:not(:last-child) {
      margin-bottom: ${r.tokens.space.x8};
    }
  }
`;class p extends s.Component{shouldComponentUpdate=a.shallowCompare;render(){let{url:e,subject:s,description:a,domain:l}=this.props;return(0,t.jsx)(n.Box,{b:!0,overflow:"hidden",cornerRadius:"default",children:(0,t.jsxs)(d.UnstyledLink,{href:e,target:"_blank",style:{color:"inherit"},rel:"noreferrer",children:[this.renderEmbedImage(),(0,t.jsxs)(u,{children:[s?(0,t.jsx)(o.HeadingText,{as:"div",size:"sm",children:s}):null,a&&(0,t.jsx)(i.BodyText,{size:"md",as:"div",children:a}),l?(0,t.jsx)(i.BodyText,{color:r.tokens.content.regular.default,size:"md",as:"div",children:l}):null]})]})})}renderEmbedImage(){let{imageSrc:e,imageEl:i}=this.props;return e&&!i?(0,t.jsx)(c,{children:(0,t.jsx)("img",{alt:"",src:e,loading:"lazy"})}):i||null}}e.s(["GenericEmbed",0,p],391216)},4406882,(e,t,i)=>{t.exports=function(e){return function(t){return null==e?void 0:e[t]}}},3640195,(e,t,i)=>{t.exports=e.r(4406882)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"})},8640928,(e,t,i)=>{var n=e.r(3640195),o=e.r(1782346),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(e){return(e=o(e))&&e.replace(r,n).replace(s,"")}},8447850,(e,t,i)=>{var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(e){return e.match(n)||[]}},2313716,(e,t,i)=>{var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(e){return n.test(e)}},3370541,(e,t,i)=>{var n="\\ud800-\\udfff",o="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",s="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",l="["+a+"]",c="["+r+"]",u="[^"+n+a+"\\d+"+o+r+s+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",x="["+s+"]",m="(?:"+c+"|"+u+")",f="(?:"+x+"|"+u+")",g="(?:"+d+"(?:d|ll|m|re|s|t|ve))?",y="(?:"+d+"(?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",k="(?:\\u200d(?:"+["[^"+n+"]",p,h].join("|")+")"+b+v+")*",w="(?:"+["["+o+"]",p,h].join("|")+")"+(b+v+k),T=RegExp([x+"?"+c+"+"+g+"(?="+[l,x,"$"].join("|")+")",f+"+"+y+"(?="+[l,x+m,"$"].join("|")+")",x+"?"+m+"+"+g,x+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",w].join("|"),"g");t.exports=function(e){return e.match(T)||[]}},327708,(e,t,i)=>{var n=e.r(8447850),o=e.r(2313716),r=e.r(1782346),s=e.r(3370541);t.exports=function(e,t,i){return(e=r(e),void 0===(t=i?void 0:t))?o(e)?s(e):n(e):e.match(t)||[]}},422471,(e,t,i)=>{var n=e.r(3429892),o=e.r(8640928),r=e.r(327708),s=RegExp("['’]","g");t.exports=function(e){return function(t){return n(r(o(t).replace(s,"")),e,"")}}},4971520,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconDelete",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"m19.398 11.448-.24 1.802-.24 1.803c-.397 2.973-.627 4.46-1.507 5.203S15 21 12 21s-4.531 0-5.411-.744c-.88-.743-1.11-2.23-1.506-5.203l-.24-1.803-.24-1.802c-.113-.843-.167-1.268.02-1.482s.615-.216 1.466-.216h11.822c.85 0 1.279.003 1.466.216.187.214.133.639.02 1.482M21 7.125c0 .45-.056.73-.225.9-.169.169-.45.225-.9.225H4.125c-.45 0-.73-.056-.9-.225-.169-.169-.225-.45-.225-.9s.056-.731.225-.9.45-.225.9-.225h2.634c.287 0 .472-.04.586-.152s.158-.295.164-.582c.03-1.508.169-2.262.792-2.639S10.031 2.25 12 2.25s3.076 0 3.7.377c.622.377.76 1.13.791 2.639.006.287.05.47.164.582s.299.152.586.152h2.634c.45 0 .73.056.9.225.169.169.225.45.225.9m-6.768-1.94c-.03-.343-.113-.514-.331-.6S13.327 4.5 12.75 4.5h-1.5c-.578 0-.933 0-1.151.086-.219.085-.3.256-.33.599-.028.308.004.512.12.639.117.126.318.176.627.176h2.968c.31 0 .51-.05.626-.176.117-.127.15-.331.122-.64"})})});e.s(["IconDelete",0,i])},6357605,e=>{"use strict";e.s(["checkNumberType",0,e=>"number"!=typeof e&&"string"!=typeof e?0:Number(e)])},5131695,e=>{"use strict";e.s(["shallowEqual",0,function(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;let o=Object.prototype.hasOwnProperty;for(let n of i)if(!o.call(t,n)||e[n]!==t[n])return!1;return!0}])},6985202,e=>{"use strict";var t=e.i(5131695);e.s(["shallowCompare",0,function(e,i){return!(0,t.shallowEqual)(this.props,e)||!(0,t.shallowEqual)(this.state,i)}])},6637269,e=>{e.v({additionalStylesPostContentWrapper:"RichText-module__5kju5G__additionalStylesPostContentWrapper",additionalStylesQuickPostContentWrapper:"RichText-module__5kju5G__additionalStylesQuickPostContentWrapper",additionalStylesQuotedPostContentWrapper:"RichText-module__5kju5G__additionalStylesQuotedPostContentWrapper",additionalStylesRemirrorEditorWrapper:"RichText-module__5kju5G__additionalStylesRemirrorEditorWrapper",additionalStylesRewardsList:"RichText-module__5kju5G__additionalStylesRewardsList",additionalStylesTnsPostContent:"RichText-module__5kju5G__additionalStylesTnsPostContent",baseStylesCombined:"RichText-module__5kju5G__baseStylesCombined",baseStylesSimple:"RichText-module__5kju5G__baseStylesSimple",baseStylesStructured:"RichText-module__5kju5G__baseStylesStructured",root:"RichText-module__5kju5G__root"})},8411407,e=>{e.v({tokensContentCard:"TokenOverrides-module__yhJOLG__tokensContentCard",tokensPostEmail:"TokenOverrides-module__yhJOLG__tokensPostEmail",tokensPostPage:"TokenOverrides-module__yhJOLG__tokensPostPage",tokensQuotedPostCard:"TokenOverrides-module__yhJOLG__tokensQuotedPostCard"})},7896028,e=>{"use strict";var t=e.i(9391398),i=e.i(48787),n=e.i(6272043),o=e.i(6637269),r=e.i(8411407);function s(e){let{variant:i,children:o}=e,s=(0,n.default)({[r.default.tokensPostPage]:"post-page"===i,[r.default.tokensPostEmail]:"post-email"===i,[r.default.tokensContentCard]:"content-card"===i,[r.default.tokensQuotedPostCard]:"quoted-post-card"===i});return(0,t.jsx)("div",{className:s,children:o})}e.s(["StyleUserGeneratedContent",0,function(e){let{variant:r,baseStyles:a,additionalStyles:d,overrideTextColor:l,bodySizeOverride:c,onClick:u,"data-tag":p,...h}=e,x=(0,n.default)(o.default.root,{[o.default.baseStylesStructured]:"structured"===a,[o.default.baseStylesSimple]:"simple"===a,[o.default.baseStylesCombined]:"combined"===a,[o.default.additionalStylesPostContentWrapper]:"post-content-wrapper"===d,[o.default.additionalStylesRewardsList]:"rewards-list"===d,[o.default.additionalStylesTnsPostContent]:"tns-post-content"===d,[o.default.additionalStylesRemirrorEditorWrapper]:"remirror-editor-wrapper"===d,[o.default.additionalStylesQuickPostContentWrapper]:"quick-post-content-wrapper"===d,[o.default.additionalStylesQuotedPostContentWrapper]:"quoted-post-content-wrapper"===d});return(0,t.jsx)(s,{variant:r??"default",children:(0,t.jsx)("div",{className:x,onClick:u,style:{"--RichText-font-size-override":c?i.typeTokens.body.fontSizes[c]:void 0,"--RichText-text-color-override":l},"data-tag":p,...h})})},"TokensContainer",0,s])},2987059,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconDocument",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M13.5 6.374V4.5c0-.628.055-1.003.177-1.222.121-.218.309-.279.573-.279.745 0 2.058.827 3.184 1.896C18.56 5.966 19.5 7.278 19.5 8.25c0 .264-.061.452-.28.573-.217.122-.593.177-1.22.177h-1.874c-1.313 0-1.97 0-2.298-.328-.328-.329-.328-.985-.328-2.298M18 10.5h-1.875c-2.062 0-3.094 0-3.61-.516C12 9.47 12 8.438 12 6.375V4.503c0-.743-.006-1.12-.197-1.31-.192-.19-.569-.195-1.311-.19-2.996.018-4.494.152-5.243 1.152S4.5 7.02 4.5 10.5v3c0 3.75 0 5.625.938 6.563S8.25 21 12 21s5.625 0 6.563-.937.937-2.813.937-6.563V12c0-.74-.005-1.115-.195-1.305S18.74 10.5 18 10.5"})})});e.s(["IconDocument",0,i])},5865193,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconReplay",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M10.068 1.858C8.356 2.988 7.5 3.557 7.5 4.125s.856 1.136 2.568 2.267c1.354.894 2.174 1.434 2.67 1.479.497.045.67-.404.73-1.486.017-.315.125-.537.301-.652s.422-.121.715-.005a6.78 6.78 0 0 1 3.07 2.438A6.7 6.7 0 0 1 18.75 12a6.73 6.73 0 0 1-1.977 4.773A6.73 6.73 0 0 1 12 18.75a6.73 6.73 0 0 1-4.773-1.977A6.73 6.73 0 0 1 5.25 12a6.74 6.74 0 0 1 1.338-4.035c.244-.327.364-.552.35-.767-.013-.215-.16-.42-.449-.708-.345-.346-.619-.517-.88-.503-.26.014-.507.212-.802.603A8.98 8.98 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364A8.97 8.97 0 0 0 12 21a8.97 8.97 0 0 0 6.364-2.636A8.97 8.97 0 0 0 21 12c0-2.08-.706-3.996-1.892-5.52a9 9 0 0 0-4.77-3.17c-.304-.082-.513-.19-.648-.356s-.196-.39-.206-.705c-.04-1.292-.18-1.862-.666-1.872s-1.32.537-2.75 1.481"})})});e.s(["IconReplay",0,i])},128341,8497111,e=>{"use strict";var t=e.i(9391398),i=e.i(2669840);let n=(0,i.default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconSkipAhead15",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M21 12a8.97 8.97 0 0 1-2.636 6.364A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.364-2.636A8.97 8.97 0 0 1 3 12c0-2.08.706-3.996 1.892-5.52a9 9 0 0 1 4.77-3.17c.304-.082.513-.19.648-.356s.196-.39.206-.705c.04-1.292.18-1.862.666-1.872s1.32.537 2.75 1.481c1.712 1.13 2.568 1.699 2.568 2.267s-.856 1.136-2.568 2.267c-1.354.894-2.174 1.434-2.67 1.479-.497.045-.67-.404-.73-1.486-.017-.315-.125-.537-.301-.652-.177-.114-.422-.121-.715-.005a6.78 6.78 0 0 0-3.07 2.438A6.7 6.7 0 0 0 5.25 12c0 1.864.755 3.552 1.977 4.773A6.73 6.73 0 0 0 12 18.75a6.73 6.73 0 0 0 4.773-1.977A6.73 6.73 0 0 0 18.75 12a6.74 6.74 0 0 0-1.338-4.035c-.244-.327-.364-.551-.35-.766.013-.215.16-.421.448-.71.346-.345.62-.516.88-.502s.508.212.803.603A8.98 8.98 0 0 1 21 12m-7.154 2.476q-.313-.002-.563-.105a1.6 1.6 0 0 1-.455-.29c-.267-.237-.456-.35-.624-.363-.168-.012-.315.079-.497.25-.172.162-.267.312-.27.478-.002.167.09.351.29.58s.522.421.883.557c.36.135.761.214 1.12.214.726 0 1.371-.212 1.835-.608.465-.395.748-.975.748-1.71 0-.854-.222-1.412-.593-1.755-.37-.344-.892-.474-1.491-.474-.173 0-.352.021-.524.064a1.9 1.9 0 0 0-.485.192c-.077.045-.127.052-.155.03-.028-.023-.034-.075-.025-.147l.055-.43.056-.428c.013-.104.027-.163.064-.196s.098-.04.202-.04h1.874c.239 0 .4-.042.502-.144s.145-.264.145-.503c0-.24-.043-.401-.145-.503S15.53 9 15.291 9h-2.894c-.22 0-.367.033-.466.121s-.15.23-.176.45l-.118.97-.177 1.446c-.032.262-.019.447.06.594.08.147.225.255.458.365.235.111.422.16.598.137.175-.023.338-.119.523-.298q.158-.152.353-.233.194-.08.407-.081c.261 0 .485.104.643.277.158.172.25.412.25.685 0 .327-.103.588-.268.767a.86.86 0 0 1-.638.276M9.562 15.75c.282 0 .47-.047.586-.165.117-.118.164-.306.164-.587V9.705c0-.26-.046-.436-.158-.547s-.29-.157-.556-.158c-.175 0-.314.018-.43.074a.65.65 0 0 0-.291.306c-.08.15-.16.325-.32.485-.161.16-.402.307-.8.4-.173.041-.284.093-.352.179s-.093.206-.093.383c0 .213.038.358.129.449.091.09.235.129.449.129h.655c.114 0 .18.01.219.048.038.038.048.105.048.219v3.326c0 .281.047.47.164.587.117.118.305.165.586.165"})})});e.s(["IconSkipAhead15",0,n],128341);let o=(0,i.default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconSkipBack15",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M21 12a8.97 8.97 0 0 1-2.636 6.364A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.364-2.636A8.97 8.97 0 0 1 3 12a8.98 8.98 0 0 1 1.807-5.41c.295-.391.542-.59.803-.603.26-.014.533.156.88.502.288.289.434.494.448.71.014.214-.106.439-.35.766A6.73 6.73 0 0 0 5.25 12c0 1.864.755 3.552 1.977 4.773A6.73 6.73 0 0 0 12 18.75a6.73 6.73 0 0 0 4.773-1.977A6.73 6.73 0 0 0 18.75 12a6.7 6.7 0 0 0-1.196-3.834 6.78 6.78 0 0 0-3.07-2.438c-.293-.117-.539-.11-.715.005-.177.114-.284.337-.302.652-.06 1.082-.233 1.53-.729 1.485s-1.316-.584-2.67-1.478C8.356 5.262 7.5 4.693 7.5 4.125s.856-1.136 2.568-2.267C11.497.914 12.33.366 12.818.376c.486.011.626.58.666 1.872.01.315.07.54.206.705.135.167.343.274.648.356a9 9 0 0 1 4.77 3.17A8.96 8.96 0 0 1 21 12m-7.154 2.476q-.313-.002-.563-.105a1.6 1.6 0 0 1-.455-.29c-.267-.237-.456-.351-.624-.363s-.315.079-.497.25c-.172.162-.267.312-.27.478-.002.167.09.351.29.58s.522.421.883.557c.36.135.761.214 1.12.214.726 0 1.371-.212 1.835-.608.465-.395.748-.975.748-1.71 0-.854-.222-1.412-.593-1.755-.37-.344-.892-.474-1.491-.474-.173 0-.352.021-.524.064a1.9 1.9 0 0 0-.485.192c-.077.045-.127.051-.155.029q-.04-.036-.025-.146l.055-.43.056-.429c.013-.103.027-.162.064-.195s.098-.04.202-.04h1.874c.239 0 .4-.042.502-.145s.145-.264.145-.503-.043-.4-.145-.503S15.53 9 15.291 9h-2.894c-.22 0-.367.033-.466.121s-.15.23-.176.45l-.118.97-.177 1.445c-.032.263-.019.448.06.595.08.147.225.255.458.365.235.111.422.16.598.137.175-.023.338-.119.523-.298q.158-.152.353-.233.194-.08.407-.081c.261 0 .485.104.643.277.158.172.25.412.25.685 0 .327-.103.588-.268.767a.86.86 0 0 1-.638.276M9.562 15.75c.282 0 .47-.047.586-.165.117-.118.164-.306.164-.587V9.704c0-.26-.046-.435-.158-.546S9.864 9 9.598 9c-.175 0-.314.018-.43.074a.65.65 0 0 0-.291.306c-.08.15-.16.325-.32.485-.161.16-.402.306-.8.4-.173.041-.284.093-.352.179s-.093.206-.093.383c0 .213.038.358.129.449.091.09.235.129.449.129h.655c.114 0 .18.01.219.048.038.038.048.105.048.219v3.326c0 .281.047.47.164.587s.305.165.586.165"})})});e.s(["IconSkipBack15",0,o],8497111)},9611296,8512539,4283574,e=>{"use strict";var t=e.i(9391398),i=e.i(226931),n=e.i(6191788),o=e.i(9760814),r=e.i(2550472),s=e.i(3002033);let a={VARIANT_DEFAULT:"VARIANT_DEFAULT",VARIANT_STACKED:"VARIANT_STACKED",VARIANT_WIDE:"VARIANT_WIDE",VARIANT_WIDE_REDESIGN:"VARIANT_WIDE_REDESIGN"},d="500ms";e.s(["EVENT_LISTENER_REFS",0,{ended:"onEnded",playing:"onPlaying",timeupdate:"onTimeUpdate",pause:"onPause",seeked:"onSeeked",error:"onError",loadedmetadata:"onLoadedMetaData",stalled:"onStalled"},"PLAYER_STATES",0,{NOT_PLAYING:"notPlaying",PLAYING:"playing",INITIAL_LOADING:"initialLoading",LOADING:"loading",FAILED:"failed",ENDED:"ended"},"PLAYER_VARIANTS",0,a,"PREVIEW_CTA_TRANSITION_DURATION",0,d,"SKIP_SECONDS_INCREMENT",0,15],8512539);let{VARIANT_STACKED:l,VARIANT_WIDE:c,VARIANT_WIDE_REDESIGN:u}=a,p=()=>`
    appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
`,h=(0,o.styled)(r.ButtonShim).withConfig({componentId:"sc-f4eb1d52-0"})`
  &&& {
    min-width: 120px;
  }
`,x=o.styled.div.withConfig({componentId:"sc-f4eb1d52-1"})`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: ${i.tokens.layer.z2}
  visibility: ${e=>e.showPreviewCta?"visible":"hidden"};
  opacity: ${e=>e.showPreviewCta?"1":"0"};
  transition: visibility 0s, opacity ${d};
`,m=o.styled.div.withConfig({componentId:"sc-f4eb1d52-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  position: absolute;
  inset: 0;
  width: 100%;
`,f=o.styled.div.attrs({role:"region"}).withConfig({componentId:"sc-f4eb1d52-3"})`
  display: flex;
  position: relative;
  align-items: stretch;
  user-select: none;
  border: 1px solid ${i.tokens.border.muted.default};
  border-radius: 12px;
  height: ${e=>e.variant===l&&"300px"};
  flex-direction: ${e=>e.variant===l&&"column"};
  overflow: hidden;
  padding: ${e=>e.addPadding?"40px":"0px"};
`,g=o.styled.div.withConfig({componentId:"sc-f4eb1d52-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`,y=o.styled.button.withConfig({componentId:"sc-f4eb1d52-5"})`
  ${p()}
  ${e=>`
        height: ${i.tokens.space.x48};
        width: ${i.tokens.space.x48};
        ${e.isMobile?`
                height: ${i.tokens.space.x40};
                width: ${i.tokens.space.x40};`:""}
    `}
`,v=o.styled.button.withConfig({componentId:"sc-f4eb1d52-6"})`
  ${p()}
  ${e=>`
        flex-shrink: 0;
        height: ${i.tokens.space.x48};
        width: ${i.tokens.space.x48};
        ${e.variant===c?`
            margin-top: 4%;
           `:""}
    `};
`,b=o.styled.button.withConfig({componentId:"sc-f4eb1d52-7"})`
  display: inherit;
  ${p()};
`,k=o.styled.div.withConfig({componentId:"sc-f4eb1d52-8"})`
  z-index: ${i.tokens.layer.z1};
  width: 100%;
  cursor: pointer;
`,w=o.styled.div.withConfig({componentId:"sc-f4eb1d52-9"})`
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${i.tokens.bg.baseAlt.default};
`,T=o.styled.div.withConfig({componentId:"sc-f4eb1d52-10"})`
  display: flex;
  height: 0.5rem;
  background-color: ${i.tokens.bg.baseAlt.hover};
  border-radius: 1rem;
  transition: width 200ms ease-in-out;
`,I=o.styled.div.withConfig({componentId:"sc-f4eb1d52-11"})`
  float: right;
  white-space: nowrap;
`,C=o.styled.div.withConfig({componentId:"sc-f4eb1d52-12"})`
  ${e=>`
        border-radius: ${i.tokens.radius.sm};
        border: 1px solid ${i.tokens.border.muted.default};
        min-height: ${e.isMobile?"80px":"128px"};
        min-width: ${e.isMobile?"80px":"128px"};
        max-height: ${e.isMobile?"80px":"128px"};
        max-width: ${e.isMobile?"80px":"128px"};
        width: 28%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: ${i.tokens.space.x8};
        transition-property: filter;
        transition-duration: ${d};
        ${e.blur&&"filter: blur(8px)"};
        
        ${e.variant===u&&`
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            align-items: center;
            background-color: ${i.tokens.content.regular.default};
            margin:  ${e.isMobile?i.tokens.space.x8:i.tokens.space.x16};
        
            &: hover > #uploadThumbailButton {
                display: block;
            }
        
            ${!e.disableUpload&&`&: hover > #wideBackgroundImage {
                opacity: 0.4;
            }`}
        `}
`};
`,j=o.styled.div.withConfig({componentId:"sc-f4eb1d52-13"})`
  background-position: center;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;

  transition-property: filter;
  transition-duration: ${d};
  ${e=>e.blur&&"filter: blur(8px)"};
`,S=o.styled.div.withConfig({componentId:"sc-f4eb1d52-14"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  flex-grow: 1;
  flex: ${e=>e.variant===l&&"1 0 auto"};
`,_=o.styled.div.withConfig({componentId:"sc-f4eb1d52-15"})`
  width: 100%;
  height: ${e=>e.showPreviewCta?"100%":"50%"};
  overflow: hidden;
  position: relative;
  flex: 1 0 auto;
  transition: height ${d};
`,A=o.styled.div.withConfig({componentId:"sc-f4eb1d52-16"})`
  background-position: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(${e=>e.thumbnail});
  background-size: cover;
  filter: blur(16px) brightness(0.7);
`,P=o.styled.div.withConfig({componentId:"sc-f4eb1d52-17"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  visibility: ${e=>e.showPreviewCta?"hidden":"visible"};
  opacity: ${e=>e.showPreviewCta?"0":"1"};
  transition: visibility ${d}, opacity ${d};
`,E=o.styled.img.withConfig({componentId:"sc-f4eb1d52-18"})`
  display: block;
  margin: 0 auto;
  height: 160px;
  width: 160px;
  object-fit: cover;
  position: relative;
`,R=o.styled.span.attrs({role:"status","aria-live":"polite"}).withConfig({componentId:"sc-f4eb1d52-19"})`
  /* This snippet totally hides the element from visibility, but allows screen
     * readers to read it normally.
     * https://webaim.org/techniques/css/invisiblecontent/
     */
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`,N=o.styled.div.withConfig({componentId:"sc-f4eb1d52-20"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-grow: 1;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  position: relative;
  top: ${e=>e.shown?"0":"-100%"};
  transition-duration: ${d};
  transition-property: top;
`,M=o.styled.div.withConfig({componentId:"sc-f4eb1d52-21"})`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  align-items: center;

  position: absolute;
  bottom: ${e=>e.shown?"0":"-100%"};
  transition-duration: ${d};
  transition-property: bottom;
  padding: 0 20px;
  gap: 20px;
`,L=o.styled.div.withConfig({componentId:"sc-f4eb1d52-22"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 10px;
`,$=o.styled.div.withConfig({componentId:"sc-f4eb1d52-23"})`
  position: absolute;
  display: ${e=>e.shown?"inline":"none"};
  z-index: 10;
  transition-duration: ${d};
  transition-property: display;
`;e.s(["AudioPlayerContainer",0,f,"AudioPlayerPreviewCtaButtons",0,L,"AudioPlayerPreviewCtaContainer",0,M,"AudioPlayerTimelineControlsContainer",0,N,"AudioPreviewThumbnailLock",0,$,"FloatRight",0,I,"MainActionButton",0,v,"MainActionWideRedesignButton",0,y,"PlayerControlButtons",0,g,"PlayerScreenReaderStatus",0,R,"PreviewMainActionButton",0,h,"SkipSecondsButton",0,b,"StackedImageBackground",0,A,"StackedThumbnailContainer",0,_,"StackedThumbnailImage",0,P,"StackedThumbnailImageElement",0,E,"StackedUnlockPrompt",0,x,"StackedUnlockPromptContent",0,m,"TimelineBackground",0,w,"TimelineBar",0,k,"TimelineForeground",0,T,"TooltipOrFragment",0,e=>{let{children:i,textContent:o}=e;return o?(0,t.jsx)(s.TooltipShim,{loggerId:"ContentModerationAudioPlayer-Tooltip",textContent:o,children:i}):(0,t.jsx)(n.default.Fragment,{children:i})},"VerticalPlayerControls",0,S,"WideImageBackground",0,j,"WideThumbnailContainer",0,C],9611296);let O=[[-.4,.4,-.4,.4,-.7,.8,-.9,.8,-.8,.9,-.8,.8,-.6,.5,-.7,.7,-.7,.6,-.4,.5,-.4,.4,-.3,.4,-.4,.3,-.3,.2,-.2,.2,-.8,.7,-.8,.9,-.8,.8,-.6,.7,-.6,.7,-.6,.8,-.6,.6,-.4,.3,-.4,.5,-.6,.5,-.4,.3,-.3,.4,-.3,.2,-.4,.3,-.3,.5,-.5,.4,-.6,.5,-.5,.4,-.3,.5,-.5,.4,-.6,.4,-.3,.5,-.5,.3,-.3,.5,-.5,.3,-.7,.8,-.9,.7,-.8,.9,-.6,.4,-.6,.4,-.6,.7,-.6,.5,-.4,.3,-.2,.3,-.3,.3,-.3,.3,-.2,.2,-.6,.8,-.9,.8,-.7,.9,-.7,.7,-.6,.4,-.6,.6,-.5,.4,-.4,.4,-.4,.3,-.4,.4,-.2,.2,-.2,.2,-.2,.2],[.4,-.5,.9,-.7,.5,-.6,.7,-.7,.4,-.3,.8,-.7,.5,-.6,.4,-.3,.8,-.7,.3,-.4,.6,-.6,.8,-.4,.7,-.7,.5,-.5,.5,-.4,.8,-.7,.4,-.5,.8,-.7,.9,-.5,.6,-.6,.3,-.4,.2,-.3,.8,-.4,.4,-.8,.4,-.8,.9,-.9,.5,-.5,.8,-.8,.8,-.9,.8,-.8,.5,-.5,.6,-.3,.7,-.9,.5,-.7,.7,-.7,.4,-.4,.6,-.9,.9,-.9,.8,-.6,.9,-.8,.5,-.9,.7,-.7,.8,-.7,.8,-.6,.5,-.7,.7,-.9,.6,-.8,.5,-.7,.5,-.5,.7,-.5,.6,-.7,.4,-.5,.5,-.5,.5,-.6,.4,-.7,.3,-.4,.5,-.5,.3,-.6,.3,-.3,.5,-.3,.4,-.3,.2,-.8,.8,-.6,.8,-.8,.8,-.9],[-.7,1,-.7,1,-.7,1,-.7,.9,-.7,1,-.7,1,-.7,.9,-.6,1,-.8,1,-.7,1,-.5,.8,-.4,.4,-.3,.2,.9,-.8,.5,-.9,.7,-.7,.5,-.7,.3,-.6,.5,-.7,.7,.9,-.9,.6,-.8,.9,-.8,.9,-1,1,-.9,1,-.9,.9,-1,1,-1,1,-1,1,-.6,.7,-.5,.5,-.6,.6,-.5,.7,-.7,.8,-.7,.7,-.8,.9,-.5,.8,-.7,.8,-.7,.6,-.6,.7,-.6,.2,-.3,.8,-.4,.4,-.8,.4,-.8,.9,-.9,.5,-.5,.8,-.9,.8,-.9,.8,-.8,.5,-.5,.6,-.3,.7,-.4,.4,-.4,.4,-.7,.8,-.9,.8,-.8,.9,-.8,.8,-.6,.5,-.7,.7,-.7,.6,-.4,.5,-.4,.4,-.3,.4,-.4,.3],[-.8,.9,-.9,1,-.6,.6,-.4,.3,-.4,.5,-.6,.5,-.4,.3,-.3,.4,-.3,.2,-.4,.3,-.3,.5,-.5,.4,-.6,.5,-.5,.4,-.3,.5,-.5,.4,-.6,.4,-.3,.5,-.5,.3,-.3,.5,-.5,.3,-.7,.8,-.9,.7,-.8,.9,-.6,.4,-.6,.4,-.6,.7,-.6,.5,-.4,.3,-.2,.3,-.3,.3,-.3,.3,-.2,.2,-.6,.6,-.5,.4,-.1,.7,-.5,.4,-.6,.2,-.2,.8,-.6,.3,-.8,1,-.9,.3,-.3,.3,-.2,.6,-.2,.2,-.1,.1,-.5,.1,-.1,.2,.5,-.6,.4,-.7,.6,-.4,.5,-.4,.4,-.3,.4,-.4,.3,-.4,.4,-.4,.4,-.7,.8,-.9,.8,-.8,.9,-.8,.8,-.6,.5,-.7,.9,-.9,.6,-.8,.9],[-.8,.9,-.9,1,-1,1,-.9,1,-.9,.9,-.9,.8,-1,-.4,.4,-.4,.4,-.7,.8,-.9,.8,-.8,.9,-.8,.8,-.6,.4,-.4,.4,-.4,.3,-.4,.4,-.2,.2,-.2,.2,-.2,.2,-.8,.7,-.8,.7,-.8,.8,-.8,.6,-.6,-.4,.5,-.2,.2,-.1,.1,-.2,.2,-.7,.6,-.8,.7,-.4,.6,-.4,.3,-.9,.9,-.8,.9,-.6,.7,-.6,.7,-.6,.7,-.8,1,-.9,1,-.9,1,-1,1,-.9,1,-1,1,-1,-.4,.5,-.2,.2,-.1,.1,-.2,.2,-.7,.6,-.8,.7,-.4,.6,-.4,.3,-.9,.9,-.8,.9,-.6,.7,-.6,.7,-.6,.7,-1,.9,-1,.4,-1,.9,-1,.9,-.7,.6,-.4,.4,-.3,.3,-.3,.3,-.2],[-.4,.4,-.4,.4,-.7,.8,-.9,.8,-.8,.9,-.8,.8,-.6,.5,-.7,.7,-.7,.6,-.4,.5,-.4,.4,-.3,.4,-.4,.3,.4,-.4,.4,-.4,.3,-.4,.4,-.2,.2,-.2,.2,-.2,.2,-.8,.7,-.8,.7,-.8,.8,-.8,.6,-.6,-1,1,-1,.9,-1,1,-.6,.6,-.4,.3,-.2,.4,-.2,.2,-.1,.2,-.8,.9,-.9,1,-1,1,-.9,-.8,.9,-.5,-.5,.4,-.3,-.8,.9,-.9,1,-1,.3,-.5,.5,-.5,.5,-.4,.4,-.8,.8,-.9,1,-.8,1,-.4,.5,-.2,.2,-.1,.1,-.2,.2,-.7,.6,-.8,.7,-.4,.6,-.4,.3,-.9,.9,-.8,.9,-.6,.7,-.6,.7,-.6,.7,-.8,.9,-.6,.7,-.6,.7]];e.s(["getMockWaveFormPeaks",0,function(){return O[Math.floor(5*Math.random())]}],4283574)},1053015,e=>{"use strict";var t=e.i(9391398),i=e.i(6191788),n=e.i(8675517);let o=(0,i.forwardRef)((i,o)=>(0,t.jsx)(n.DynamicImport,{importer:()=>e.A(3069535),ref:o,...i}));e.s(["LazyVideoPlayer",0,o])}]);

//# debugId=441e2d71-713c-3659-e2d0-159d9bb7f0c6
//# sourceMappingURL=168raks9fkljq.js.map
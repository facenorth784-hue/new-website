;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="9defe408-d9fe-b3ed-cdfc-a994f52f12d5")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6111286,e=>{"use strict";var t,i=e.i(2925392),n=e.i(8981215),o=e.i(226931),r=e.i(9760814);let a=r.styled.span.withConfig({componentId:"sc-f28c3b36-0"})`
  font-variant-numeric: tabular-nums;
`,s=r.styled.div.withConfig({componentId:"sc-f28c3b36-1"})`
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  justify-content: space-between;
  align-items: center;
`;var l=((t={})[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.CENTER=2]="CENTER",t[t.NONE=3]="NONE",t);let c="88px",d=r.styled.div.withConfig({componentId:"sc-f28c3b36-2"})`
  ${e=>{let{hidden:t}=e;return t?`
    opacity: 0;
    pointer-events: none;
    `:void 0}}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 2%;
  height: fit-content;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: ${e=>{let{$isClipActive:t}=e;return t?160:80}}px;
    width: 100%;
    background: linear-gradient(0, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
  }
`,u=r.styled.div.withConfig({componentId:"sc-f28c3b36-3"})`
  width: ${e=>{let{width:t}=e;return t}};
  border-radius: ${o.tokens.borderWidth.thick}; // 2px
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${e=>{let{color:t}=e;return t}};
`,h=r.styled.div.withConfig({componentId:"sc-f28c3b36-4"})`
  width: 100%;
  margin: auto;
  height: ${o.tokens.space.x4}; // 4px
  border-radius: ${o.tokens.borderWidth.thick}; // 2px
  position: relative;
  background: ${o.tokens.constant.whiteSubtle.default};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 10px;
  }
  &:hover {
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: ${o.tokens.radius.circle};
      top: -3px;
      transform: translateX(-50%);
      z-index: 5;
      left: ${e=>{let{leftOffsetPlayed:t}=e;return t}}%;
      background: ${e=>{let{color:t}=e;return t}};
    }
  }
`,p=r.styled.button.withConfig({componentId:"sc-f28c3b36-5"})`
  /* Button Reset */
  appearance: none;
  background: transparent;
  border-radius: 0;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;

  /* Icon Button Styles */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease;
  border-radius: ${o.tokens.radius.circle};
  background-color: transparent;
  ${e=>{let{tooltip:t}=e;return t?`
  &:hover {
    &::after {
      content: "${t.content}";
      ${t.top?`top: ${t.top};`:""}
      ${t.bottom?`bottom: ${t.bottom};`:""}
      ${t.right?`right: ${t.right};`:""}
      ${t.left?`left: ${t.left};`:""}
      padding: 5px 10px;
      border-radius: 4px;
      position: absolute;
      color: ${o.tokens.constant.white.hover};
      background-color: ${o.tokens.constant.blackMuted.default};
      ${(0,i.cssForBodyText)({size:"sm"})};
    }
  }
  `:""}}

  /* HACK: Studio Icon components render as <span> elements and apply their
   * size via a CSS class (e.g. .size-16) that sets --Icon-size. We override
   * that variable here using > span to target the icon directly. If Studio
   * ever changes how icons are rendered (e.g. switches to <svg> or stops
   * using --Icon-size), these rules will silently stop working. */
  & > span {
    --Icon-size: 24px;
  }

  @media ${(0,n.mediaForBreakpoint)("sm")} {
    & > span {
      --Icon-size: 16px;
    }
  }

  :fullscreen & > span {
    --Icon-size: 24px;
  }

  :-webkit-full-screen & > span {
    --Icon-size: 24px;
  }
`,m=(0,r.styled)(p).withConfig({componentId:"sc-f28c3b36-6"})`
  &&& {
    padding: 6px;
    margin-left: -6px;
    &:hover {
      background-color: ${o.tokens.constant.blackSubtle.hover};
    }
  }
`,g=(0,r.styled)(p).attrs(e=>({className:e.dangerousClassName})).withConfig({componentId:"sc-f28c3b36-7"})`
  ${e=>{let{hidden:t}=e;return t?`
  opacity: 0;
  pointer-events: none;
  `:void 0}}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${o.tokens.space.x8};
  width: ${c};
  height: ${c};
  transition: none;
  /* &&& increases specificity to override Studio's default --Icon-size on
   * IconButton's inner span, which would otherwise win due to component
   * library selector weight. */
  &&& > span {
    --Icon-size: ${c};
  }
`,f=r.styled.div.withConfig({componentId:"sc-f28c3b36-8"})`
  position: absolute;
  inset: 0;
  z-index: 20;
`,v=(0,r.styled)(p).withConfig({componentId:"sc-f28c3b36-9"})`
  &&& {
    padding: 10px;
    margin-left: -10px;
  }
`,b=r.styled.div.withConfig({componentId:"sc-f28c3b36-10"})`
  position: absolute;
  bottom: ${68}px;
  ${e=>{let{maxHeight:t}=e;return null!=t?`max-height: ${t-68}px;`:""}}
  box-sizing: border-box;
  overflow-y: auto;
  right: ${e=>{let{isFullscreen:t}=e;return t?"30px":"10px"}};
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: ${o.tokens.radius.md};
  background: ${o.tokens.constant.blackMuted.default};
  backdrop-filter: blur(7.5px);
  padding: 12px;
  color: ${o.tokens.constant.white.default};
  ${e=>{let{isFullscreen:t}=e;return(0,i.cssForBodyText)({size:t?"md":"sm"})}};
`,x=r.styled.span.withConfig({componentId:"sc-f28c3b36-11"})`
  color: ${o.tokens.constant.whiteSubtle.pressed};
  ${e=>{let{isFullscreen:t}=e;return(0,i.cssForHeadingText)({size:t?"sm":"xs"})}};
`,y=r.styled.span.withConfig({componentId:"sc-f28c3b36-12"})`
  color: ${o.tokens.content.muted.default};
  padding-bottom: 8px;
  ${(0,i.cssForBodyText)({size:"sm"})};
`,k=r.styled.div.withConfig({componentId:"sc-f28c3b36-13"})`
  display: flex;
  flex-direction: column;
`,w=r.styled.div.withConfig({componentId:"sc-f28c3b36-14"})`
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  justify-content: start;
  ${e=>{let{paddingTop:t}=e;return t&&`padding-top: ${t}`}}
  ${e=>{let{paddingBottom:t}=e;return t&&`padding-bottom: ${t}`}}
`;e.s(["ButtonsContainer",0,s,"ControlsContainer",0,d,"DurationText",0,a,"FlashIconPositionType",()=>l,"MobilePopupOptionContainer",0,k,"MobilePopupTitle",0,y,"PlayButtonDesktop",0,m,"PlayButtonMobile",0,g,"ScrubberBar",0,u,"ScrubberContainer",0,h,"SettingsButton",0,v,"SettingsMobileListItem",0,w,"VideoOverlayContainer",0,f,"VideoPopup",0,b,"VideoPopupTitle",0,x])},5964465,e=>{e.v({content:"MeshGradient-module__YNV8Hq__content",customThumbnail:"MeshGradient-module__YNV8Hq__customThumbnail",customThumbnailContainer:"MeshGradient-module__YNV8Hq__customThumbnailContainer","gradient-animation":"MeshGradient-module__YNV8Hq__gradient-animation",gradientContainer:"MeshGradient-module__YNV8Hq__gradientContainer"})},646597,e=>{"use strict";var t=e.i(9391398),i=e.i(9956793),n=e.i(2441454),o=e.i(5964465);e.s(["MeshGradient",0,e=>{let{primaryThemeColor:r,children:a,customThumbnailUrl:s}=e,l=function(e){let{inputColor:t}=e,i=(0,n.useGenerateColorPalette)({inputColor:t,fallbackVariant:"primary"});return{color1:i.dark.surfaceRichVivid[5],color2:i.dark.surfaceRichVivid[10],color3:i.dark.surfaceRichVivid[2],color4:i.dark.surfaceRichVivid[9],color5:i.dark.surfaceRichVivid[3],color6:i.dark.surfaceRichVivid[8],color7:i.dark.surfaceRichVivid[7],color8:i.dark.surfaceRichVivid[1],color9:i.dark.surfaceRichVivid[6]}}({inputColor:r}),c={"--color-1":l.color1,"--color-2":l.color2,"--color-3":l.color3,"--color-4":l.color4,"--color-5":l.color5,"--color-6":l.color6,"--color-7":l.color7,"--color-8":l.color8,"--color-9":l.color9,backgroundColor:"var(--color-1)",backgroundImage:`
      radial-gradient(at 80% 50%, var(--color-2) 0px, transparent 50%),
      radial-gradient(at 0% 100%, var(--color-3) 0px, transparent 50%),
      radial-gradient(at 80% 100%, var(--color-4) 0px, transparent 50%),
      radial-gradient(at 0% 0%, var(--color-5) 0px, transparent 50%),
      radial-gradient(at 40% 70%, var(--color-6) 0px, transparent 50%),
      radial-gradient(at 60% 30%, var(--color-7) 0px, transparent 50%),
      radial-gradient(at 20% 50%, var(--color-8) 0px, transparent 50%),
      radial-gradient(at 100% 70%, var(--color-9) 0px, transparent 50%)
    `};return(0,t.jsxs)(t.Fragment,{children:[s?(0,t.jsx)("div",{className:o.default.customThumbnailContainer,children:(0,t.jsx)(i.Image,{className:o.default.customThumbnail,src:s,alt:"",height:"100%"})}):(0,t.jsx)("div",{"aria-hidden":"true",className:o.default.gradientContainer,style:c}),(0,t.jsx)("div",{className:o.default.content,children:a})]})}])},441775,e=>{"use strict";var t="u">typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function i(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){i(window.event)})}function n(e,t){for(var i=t.slice(0,t.length-1),n=0;n<i.length;n++)i[n]=e[i[n].toLowerCase()];return i}function o(e){e||(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),i=t.lastIndexOf("");i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}for(var r={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":t?173:189,"=":t?61:187,";":t?59:186,"'":222,"[":219,"]":221,"\\":220},a={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":t?224:91,cmd:t?224:91,command:t?224:91},s={16:"shiftKey",18:"altKey",17:"ctrlKey"},l={16:!1,18:!1,17:!1},c={},d=1;d<20;d++)r["f".concat(d)]=111+d;s[t?224:91]="metaKey",l[t?224:91]=!1;var u=[],h="all",p=[],m=function(e){return r[e.toLowerCase()]||a[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function g(e){h=e||"all"}function f(){return h||"all"}function v(e,t,i){var n;if(t.scope===i||"all"===t.scope){for(var o in n=t.mods.length>0,l)Object.prototype.hasOwnProperty.call(l,o)&&(!l[o]&&t.mods.indexOf(+o)>-1||l[o]&&-1===t.mods.indexOf(+o))&&(n=!1);(0!==t.mods.length||l[16]||l[18]||l[17]||l[91])&&!n&&"*"!==t.shortcut||!1!==t.method(e,t)||(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function b(e){var t=c["*"],i=e.keyCode||e.which||e.charCode;if(x.filter.call(this,e)){if(-1===u.indexOf(i)&&229!==i&&u.push(i),(93===i||224===i)&&(i=91),i in l){for(var n in l[i]=!0,a)a[n]===i&&(x[n]=!0);if(!t)return}for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(l[o]=e[s[o]]);var r=f();if(t)for(var d=0;d<t.length;d++)t[d].scope===r&&("keydown"===e.type&&t[d].keydown||"keyup"===e.type&&t[d].keyup)&&v(e,t[d],r);if(i in c){for(var h=0;h<c[i].length;h++)if(("keydown"===e.type&&c[i][h].keydown||"keyup"===e.type&&c[i][h].keyup)&&c[i][h].key){for(var p=c[i][h].key.split("+"),g=[],b=0;b<p.length;b++)g.push(m(p[b]));(g=g.sort()).join("")===u.sort().join("")&&v(e,c[i][h],r)}}}}function x(e,t,r){var s,d=o(e),h=[],g="all",f=document,v=0,y=!1,k=!0;for(void 0===r&&"function"==typeof t&&(r=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(g=t.scope),t.element&&(f=t.element),t.keyup&&(y=t.keyup),t.keydown&&(k=t.keydown)),"string"==typeof t&&(g=t);v<d.length;v++)e=d[v].split("+"),h=[],e.length>1&&(h=n(a,e)),(e="*"===(e=e[e.length-1])?"*":m(e))in c||(c[e]=[]),c[e].push({keyup:y,keydown:k,scope:g,mods:h,shortcut:d[v],method:r,key:d[v]});void 0!==f&&(s=f,!(p.indexOf(s)>-1))&&window&&(p.push(f),i(f,"keydown",function(e){b(e)}),i(window,"focus",function(){u=[]}),i(f,"keyup",function(e){b(e);var t=e.keyCode||e.which||e.charCode,i=u.indexOf(t);if(i>=0&&u.splice(i,1),e.key&&"meta"===e.key.toLowerCase()&&u.splice(0,u.length),(93===t||224===t)&&(t=91),t in l)for(var n in l[t]=!1,a)a[n]===t&&(x[n]=!1)}))}var y={setScope:g,getScope:f,deleteScope:function(e,t){var i,n;for(var o in e||(e=f()),c)if(Object.prototype.hasOwnProperty.call(c,o))for(n=0,i=c[o];n<i.length;)i[n].scope===e?i.splice(n,1):n++;f()===e&&g(t||"all")},getPressedKeyCodes:function(){return u.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=m(e)),-1!==u.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,i=t.tagName,n=!0;return(t.isContentEditable||"TEXTAREA"===i||("INPUT"===i||"TEXTAREA"===i)&&!t.readOnly)&&(n=!1),n},unbind:function(e,t,i){var r,s,l=o(e),d=[];"function"==typeof t&&(i=t,t="all");for(var u=0;u<l.length;u++){if(d=(r=l[u].split("+")).length>1?n(a,r):[],e="*"===(e=r[r.length-1])?"*":m(e),t||(t=f()),!c[e])return;for(var h=0;h<c[e].length;h++)s=c[e][h],(!i||s.method===i)&&s.scope===t&&function(e,t){for(var i=e.length>=t.length?e:t,n=e.length>=t.length?t:e,o=!0,r=0;r<i.length;r++)-1===n.indexOf(i[r])&&(o=!1);return o}(s.mods,d)&&(c[e][h]={})}}};for(var k in y)Object.prototype.hasOwnProperty.call(y,k)&&(x[k]=y[k]);if("u">typeof window){var w=window.hotkeys;x.noConflict=function(e){return e&&window.hotkeys===x&&(window.hotkeys=w),x},window.hotkeys=x}let C=x;var I=e.i(6191788);e.s(["useHotkeys",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=(0,I.useCallback)(t,i);(0,I.useEffect)(()=>(C(e,n),()=>C.unbind(e)),[n])}],441775)},3626811,e=>{"use strict";var t=e.i(6191788),i=e.i(3730943);e.s(["ClientOnlyPortal",0,function(e){let{isOpen:n,children:o}=e,[r,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{a(!0)},[]),r&&n?(0,i.createPortal)(o,document.body):null}])},3416127,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(6191788).createContext)(!1);e.s(["VideoControlsContext",0,i,"VideoControlsContextProvider",0,e=>{let{children:n}=e;return(0,t.jsx)(i.Provider,{value:!0,children:n})}])},7190670,4529148,650723,e=>{"use strict";let t=e=>"webkitIsFullScreen"in e;e.s(["isWebKitDocument",0,t],4529148),e.s(["exitFullscreen",0,e=>{if(t(e))try{return e.webkitCancelFullScreen(),Promise.resolve()}catch(e){return Promise.reject(e)}return e.exitFullscreen()},"getFullscreenElement",0,e=>t(e)?e.webkitCurrentFullScreenElement:"webkitFullscreenElement"in e?e.webkitFullscreenElement:e.fullscreenElement],7190670);var i=e.i(1821384),n=e.i(3040276),o=e.i(3145608),r=e.i(7341706);let a=i.z.object({intervalId:i.z.string(),intervalType:i.z.string(),title:i.z.string(),description:i.z.string().nullish(),startTimestamp:i.z.number(),endTimestamp:i.z.number(),tags:i.z.array(i.z.string()).nullish()}),s=i.z.object({intervalId:i.z.string(),sentiment:i.z.string(),comment:i.z.string().nullish()}),l=i.z.object({id:i.z.string(),type:i.z.literal("media"),chapters:i.z.array(a).nullish(),clippableMoments:i.z.array(a).nullish(),autoClipFeedback:i.z.array(s).nullish(),display:i.z.object({storyboard:i.z.object({jsonUrl:i.z.string().nullish(),vttUrl:i.z.string().nullish()}).nullish(),transcriptUrl:i.z.string().nullish(),fullContentDuration:i.z.number().nullish()}).nullish()}),c=(0,r.createUsePatreonRequest)({pathname:e=>{let{mediaId:t}=e;return`/media/${t}`},schema:l});e.s(["useMedia",0,function(e){let[t,i]=c({mediaId:e});return e?[(0,o.mapValue)(e=>e.data)(t),i]:[n.loading,i]}],650723)},236842,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),n=e.i(1789610),o=e.i(3829582),r=e.i(7293477),a=e.i(9956793),s=e.i(226931),l=e.i(5979021),c=e.i(6191788),d=e.i(9760814),u=e.i(8683249);function h(e){u.patreonTrackerClient.logTypedEvent("Post : Scrolled Gallery Thumbnails",e)}var p=e.i(8475434),m=e.i(7101811),g=e.i(8748300),f=e.i(2550472),v=e.i(3412036),b=e.i(4023959);class x extends c.Component{static contextType=i.LinguiContext;context;state={isLightboxOpen:!1,scrollPosition:0,selectedImageIndex:void 0};thumbnailGalleryRef=c.default.createRef();onGalleryScroll=()=>{this.thumbnailGalleryRef?.current!=null&&this.setState({scrollPosition:this.thumbnailGalleryRef?.current?.scrollLeft})};debouncedOnGalleryScroll=(0,l.default)(this.onGalleryScroll,500,{leading:!1,trailing:!0});get rightScrollLimit(){return this.thumbnailGalleryRef.current&&this.thumbnailGalleryRef.current.scrollWidth-this.thumbnailGalleryRef.current.clientWidth}get selectedImage(){let{state:{selectedImageIndex:e},props:{images:t}}=this;return void 0!==e?t[e]:null}componentDidMount(){this.thumbnailGalleryRef?.current?.addEventListener("scroll",this.debouncedOnGalleryScroll)}componentWillUnmount(){this.thumbnailGalleryRef?.current?.removeEventListener("scroll",this.debouncedOnGalleryScroll)}getClickEventData=()=>{let{campaignId:e,postId:t,isOwner:i,currentUserPledgeCents:n}=this.props;return{campaign_id:e,post_id:t,is_owner:i,current_user_pledge_cents:n}};onOpenLightbox=e=>{this.setState({isLightboxOpen:!0,selectedImageIndex:this.props.images.findIndex(t=>t.id===e.id)})};onCloseLightbox=()=>{this.setState({isLightboxOpen:!1,selectedImageIndex:void 0})};onNextImage=()=>{let e=this.state.selectedImageIndex,t=this.props.images.length;this.setState({selectedImageIndex:e+1===t?0:e+1})};onPrevImage=()=>{let e=this.state.selectedImageIndex,t=this.props.images.length;this.setState({selectedImageIndex:0===e?t-1:e-1})};scrollRight=()=>{let e=Math.min(this.state.scrollPosition+500,this.rightScrollLimit);this.setState({scrollPosition:e}),this.thumbnailGalleryRef.current.scrollTo({top:0,left:e,behavior:"smooth"}),h(this.getClickEventData())};scrollLeft=()=>{let e=Math.max(this.state.scrollPosition-500,0);this.setState({scrollPosition:e}),this.thumbnailGalleryRef.current.scrollTo({top:0,left:e,behavior:"smooth"}),h(this.getClickEventData())};renderTopImage=()=>{let{images:e,isPublicContent:i=!1}=this.props,n=e[0];return n&&(0,t.jsx)(w,{"data-pin-nopin":!i||void 0,width:"100%",onClick:()=>this.onOpenLightbox(n),src:n.imageUrls.default,loading:"lazy"})};renderThumbnails=()=>{let{images:e,isPublicContent:i=!1,currentUserCanView:a}=this.props,s=a?e.slice(1):e.slice(1,8);if(0===s.length)return null;let l=this.state.scrollPosition>0,c=!this.rightScrollLimit||this.rightScrollLimit-this.state.scrollPosition>0;return(0,t.jsxs)(_,{children:[l&&a&&(0,t.jsx)(n.Box,{display:{xs:"none",md:"block"},position:"absolute",css:{top:"50%",left:"15px",transform:"translateY(-50%)"},children:(0,t.jsx)(f.ButtonShim,{loggerId:"lightbox-previous-thumbnails","aria-label":(0,p.previousString)(this.context.i18n),corners:"pill","data-tag":"lightbox-previous-thumbnails",icon:o.IconArrowLeft,size:"sm",variant:"insetWhite",onClick:this.scrollLeft})}),(0,t.jsx)(I,{ref:this.thumbnailGalleryRef,children:s.map(e=>{let n=a?()=>this.onOpenLightbox(e):void 0;return e&&(0,t.jsx)(C,{"data-pin-nopin":!i||void 0,height:"120px",onClick:n,src:e.imageUrls.thumbnail,loading:"lazy"},e.id)})}),c&&a&&(0,t.jsx)(n.Box,{display:{xs:"none",md:"block"},position:"absolute",css:{top:"50%",right:"15px",transform:"translateY(-50%)"},children:(0,t.jsx)(f.ButtonShim,{loggerId:"lightbox-next-thumbnails","aria-label":(0,p.nextString)(this.context.i18n),corners:"pill","data-tag":"lightbox-next-thumbnails",icon:r.IconArrowRight,size:"sm",variant:"insetWhite",onClick:this.scrollRight})})]})};render(){let{images:e,imgAlt:i="",currentUserCanView:o,handleClick:r,height:s,darken:l,isPatreonServedContent:c,isPublicContent:d=!1,isPostPreview:u}=this.props,{selectedImageIndex:h}=this.state,p=e.length>1;if(!o){let d=e[0].imageUrls.default;return(0,t.jsxs)(y,{children:[!o&&(0,t.jsx)(j,{height:s}),(0,t.jsx)(v.UnstyledButton,{onClick:()=>{r&&r()},children:(0,t.jsx)(k,{darken:l,blur:!o&&!c||!o&&(0,g.isViewingAs)("public")||u,children:(0,t.jsx)(a.Image,{"data-tag":"image",alt:i,ratio:3,src:d,height:s})})}),p&&(0,t.jsx)(n.Box,{mt:.4,children:this.renderThumbnails()})]})}return(0,t.jsxs)("div",{children:[this.renderTopImage(),this.renderThumbnails(),o&&(0,t.jsx)(b.Lightbox,{originalImageSrc:(0,m.get)(()=>this.selectedImage.imageUrls.original),imageCaption:(0,m.get)(()=>this.selectedImage.metadata.caption),imageAlt:(0,m.get)(()=>this.selectedImage.metadata.altText),imagePosition:p?`${h+1} / ${e.length}`:null,onNextImage:p?this.onNextImage:null,onPrevImage:p?this.onPrevImage:null,onClose:this.onCloseLightbox,isOpen:this.state.isLightboxOpen,isPublicContent:d})]})}}let y=d.styled.div.withConfig({componentId:"sc-8f2b2cd0-0"})`
  width: 100%;
`,k=d.styled.div.withConfig({componentId:"sc-8f2b2cd0-1"})`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 0;

  ${e=>{let{blur:t}=e;return t&&d.css`
      filter: blur(${s.tokens.effects.md});
    `}})}

  ${e=>{let{darken:t}=e;return t&&d.css`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${s.tokens.constant.blackMuted.default};
        z-index: 1;
      }
    `}}
`,w=d.styled.img.withConfig({componentId:"sc-8f2b2cd0-2"})`
  cursor: zoom-in;
`,C=d.styled.img.withConfig({componentId:"sc-8f2b2cd0-3"})`
  cursor: zoom-in;
  border-right: 4px solid white;
`,I=d.styled.div.withConfig({componentId:"sc-8f2b2cd0-4"})`
  max-height: 120px;
  max-width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`,_=d.styled.div.withConfig({componentId:"sc-8f2b2cd0-5"})`
  position: relative;
  max-height: 120px;
`,j=d.styled.div.withConfig({componentId:"sc-8f2b2cd0-6"})`
  position: absolute;
  top: 0;
  left: 0;
  height: ${e=>e.height};
  width: 100%;

  background: rgba(0, 0, 0, 0.3);
`;e.s(["LightboxImageWrapper",0,x],236842)},2390284,e=>{e.v({avatarContainer:"PulsingAvatar-module__kIWmYa__avatarContainer","big-pulse":"PulsingAvatar-module__kIWmYa__big-pulse",pulse:"PulsingAvatar-module__kIWmYa__pulse",pulsingCircle:"PulsingAvatar-module__kIWmYa__pulsingCircle",secondaryPulsingCircle:"PulsingAvatar-module__kIWmYa__secondaryPulsingCircle"})},8334781,e=>{e.v({liveChipContainer:"NativeLiveThumbnail-module__4g0uIa__liveChipContainer",playButtonContainer:"NativeLiveThumbnail-module__4g0uIa__playButtonContainer",playButtonContainerSmall:"NativeLiveThumbnail-module__4g0uIa__playButtonContainerSmall",thumbnailContainer:"NativeLiveThumbnail-module__4g0uIa__thumbnailContainer"})},4369912,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),n=e.i(5733273),o=e.i(1108816),r=e.i(2550472),a=e.i(829490),s=e.i(921426),l=e.i(3641631),c=e.i(646597),d=e.i(8534334),u=e.i(2390284);let h=e=>{let{i18n:n}=(0,i.useLingui)();if(!e.campaign.avatarPhotoImageUrls)return null;let o="small"===e.size?e.campaign.avatarPhotoImageUrls.thumbnailSmall:e.campaign.avatarPhotoImageUrls.thumbnail,r="120px";"small"===e.size?r="80px":"medium"===e.size&&(r="100px");let a=e.campaign.name,s=n._({id:"TiLxOt",message:"Avatar picture for {campaignName}",values:{campaignName:a}});return(0,t.jsxs)("div",{className:u.default.avatarContainer,style:{width:r,height:r},children:[e.showPulseAnimation&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:u.default.pulsingCircle}),(0,t.jsx)("div",{className:u.default.secondaryPulsingCircle})]}),(0,t.jsx)(d.Avatar,{src:o,size:"fluid",alt:s})]})};var p=e.i(8334781);e.s(["NativeLiveThumbnail",0,e=>{let{i18n:d}=(0,i.useLingui)(),u=e.state===s.LivestreamState.Live;return(0,t.jsx)(o.Stack,{width:"fluid",height:"fluid",justifyContent:"center",alignItems:"center",className:p.default.thumbnailContainer,children:(0,t.jsx)(c.MeshGradient,{primaryThemeColor:e.primaryThemeColor,customThumbnailUrl:e.imageUrl,children:(0,t.jsx)(a.UnstyledLink,{href:e.href,children:(0,t.jsxs)(o.Stack,{width:"fluid",height:"fluid",justifyContent:"center",alignItems:"center",children:[u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:p.default.liveChipContainer,children:(0,t.jsx)(l.LiveChip,{showMockLiveWave:!0,size:"sm"})}),(0,t.jsx)("div",{className:"small"===e.imageSize?p.default.playButtonContainerSmall:p.default.playButtonContainer,children:(0,t.jsx)(r.ButtonShim,{loggerId:"live-thumbnail-play-button",variant:"insetWhite",href:e.href,icon:n.IconPlaybackPlay,corners:"pill",size:"small"===e.imageSize?"md":"lg","aria-label":d._({id:"OSuCHL",message:"Join live"})})})]}),!e.imageUrl&&(0,t.jsx)("div",{style:{marginBottom:e.avatarBottomMargin},children:(0,t.jsx)(h,{showPulseAnimation:u,campaign:e.campaign,size:e.imageSize})})]})})})})}],4369912)},921426,e=>{"use strict";var t,i=((t={}).PreLive="pre_live",t.Live="live",t.LiveEnded="live_ended",t);e.s(["LivestreamState",()=>i])},7515774,e=>{"use strict";e.s(["averageViewTime",0,{id:"DaHDSd",message:"Average view time"},"averageViewTimeDescription",0,{id:"QqDST4",message:"The average amount of time each viewer spent watching the live."},"averageViewTimeValue",0,e=>{let t=Math.floor(e/60);return t>0?{id:"75zEv6",message:"{durationMinutes} min",values:{durationMinutes:t}}:{id:"/EWcav",message:"{durationSeconds} sec",values:{durationSeconds:e}}},"liveString",0,{id:"sLABkt",message:"Live"},"peakConcurrentViewers",0,{id:"lcnnbE",message:"Peak concurrent viewers"},"peakConcurrentViewersDescription",0,{id:"AD7H5M",message:"The maximum number of viewers who joined your live at the same time."},"totalJoins",0,{id:"7l3/kp",message:"Total joins"},"totalJoinsDescription",0,{id:"lKljsJ",message:"The total number of times people joined your live."}])},3641631,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),n=e.i(6112151),o=e.i(497365),r=e.i(226931),a=e.i(9760814),s=e.i(7515774);let l=a.styled.div.withConfig({componentId:"sc-f0f54993-0"})`
  display: flex;
  height: 20px;
  padding: 0px ${r.tokens.space.x4};
  justify-content: center;
  align-items: center;
  gap: 2px;
  min-width: 32px;
  width: min-content;
  border-radius: 6px;
  border: 2px solid ${r.tokens.critical.surface.pressed};
  background: ${r.tokens.critical.surface.default};
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
`,c=a.keyframes`
  0%, 100% { height: 2px; transform: translateY(0); }
  50% { height: 5px; transform: translateY(-1.5px); }
`,d=a.keyframes`
  0%, 100% { height: 2px; transform: translateY(0); }
  50% { height: 3px; transform: translateY(-0.5px); }
`,u=a.keyframes`
  0%, 100% { height: 2px; transform: translateY(0); }
  50% { height: 5px; transform: translateY(-1.5px); }
`,h=a.styled.rect.withConfig({componentId:"sc-f0f54993-1"})`
  animation: ${c} 0.8s infinite;
`,p=a.styled.rect.withConfig({componentId:"sc-f0f54993-2"})`
  animation: ${d} 0.4s infinite;
`,m=a.styled.rect.withConfig({componentId:"sc-f0f54993-3"})`
  animation: ${u} 0.6s infinite;
`,g=(0,a.styled)(o.IconVideo).withConfig({componentId:"sc-f0f54993-4"})`
  &&& {
    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;e.s(["LiveChip",0,e=>{let{showMockLiveWave:o=!0,showMockLiveVideo:a=!1,size:l}=e,{i18n:c}=(0,i.useLingui)();return(0,t.jsxs)(t.Fragment,{children:[a?(0,t.jsx)(g,{color:r.tokens.constant.white.default}):o?(0,t.jsxs)("svg",{style:{transform:"rotate(180deg)",overflow:"visible"},width:"8",height:"9",viewBox:"0 0 8 9",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)(h,{x:"6",y:"3",width:"2",rx:"0.5",ry:"0.5",fill:"#FFFFFF"}),(0,t.jsx)(p,{x:"3.5",y:"3",width:"2",rx:"0.5",ry:"0.5",fill:"#FFFFFF"}),(0,t.jsx)(m,{x:"1",y:"3",width:"2",rx:"0.5",ry:"0.5",fill:"#FFFFFF"})]}):null,(0,t.jsx)(n.BodyText,{color:r.tokens.constant.white.default,size:l,children:c._(s.liveString)})]})},"LiveChipContainer",0,l])},9132464,e=>{e.v({backdrop:"CommonStyles-module__QBaOoq__backdrop",blurredImage:"CommonStyles-module__QBaOoq__blurredImage",blurredImageWrapper:"CommonStyles-module__QBaOoq__blurredImageWrapper",contentOverlay:"CommonStyles-module__QBaOoq__contentOverlay",contentOverlayCenter:"CommonStyles-module__QBaOoq__contentOverlayCenter"})},8648269,e=>{"use strict";var t=e.i(9391398),i=e.i(6272043),n=e.i(7251356),o=e.i(9132464);e.s(["Background",0,e=>{let{children:r,backgroundComponent:a,shouldCenter:s}=e,{containerRef:l}=(0,n.useDimensions)();return(0,t.jsxs)("div",{className:o.default.backdrop,ref:l,children:[a,(0,t.jsx)("div",{className:(0,i.default)(o.default.contentOverlay,{[o.default.contentOverlayCenter]:s}),children:r})]})}])},1901018,e=>{"use strict";var t=e.i(9391398),i=e.i(6607314),n=e.i(366182),o=e.i(6191788),r=e.i(9760814),a=e.i(5338216),s=e.i(8648269);let l=r.styled.div.withConfig({componentId:"sc-18b59b68-0"})`
  position: absolute;
  height: 100%;
  width: 100%;

  background: radial-gradient(
    at 0% 100%,
    var(--GradientBackground-color20) 0%,
    var(--GradientBackground-color40) 50%,
    var(--GradientBackground-color20) 100%
  );
`,c=r.styled.div.withConfig({componentId:"sc-18b59b68-1"})`
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    at 0% 100%,
    var(--GradientBackground-color10) 0%,
    var(--GradientBackground-color20) 50%,
    var(--GradientBackground-color10) 100%
  );
`;e.s(["GradientBackground",0,e=>{let{children:r,primaryThemeColor:d,randomMediaColor:u,shouldCenter:h=!1,shouldAdjustSaturation:p=!0}=e,m=function(e,t,r){let s=t?.randomMediaColor??!1,{isCreatorViewingAsFan:l}=(0,a.useIsCreatorViewingAsFan)(),c=e?(0,n.hex2hcta)(e).hue:295,d=e?(0,n.hex2hcta)(e).chroma:50,u=(0,o.useRef)(s&&!l?(c+(Math.floor(7*Math.random())-3.5)*10)%360:c),h=(0,n.hcta2hex)({hue:u.current,chroma:d<30&&r?50:d,tone:32});return{color10:(0,i.colorMod)(h,e=>e.alpha(.1)),color20:(0,i.colorMod)(h,e=>e.alpha(.2)),color40:(0,i.colorMod)(h,e=>e.alpha(.4))}}(d,{randomMediaColor:u},p),g=(0,t.jsxs)("div",{style:{"--GradientBackground-color10":m.color10,"--GradientBackground-color20":m.color20,"--GradientBackground-color40":m.color40},children:[(0,t.jsx)(l,{}),(0,t.jsx)(c,{})]});return(0,t.jsx)(s.Background,{shouldCenter:h,backgroundComponent:g,children:r})}])}]);

//# debugId=9defe408-d9fe-b3ed-cdfc-a994f52f12d5
//# sourceMappingURL=0mxznmlh~24v_.js.map
;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e8ff006d-5dec-61c4-71b5-5726453c18b8")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3868242,e=>{"use strict";var t=e.i(9391398),o=e.i(5458272),i=e.i(6918119),a=e.i(7934135),n=e.i(8630900),r=e.i(3561118),s=e.i(534802);function l(e){let{tokenColorMode:s,children:l}=e,{context:d,isMounted:c,isTopOverlay:u,isDismissable:p,isKeyboardDismissable:f,positioningStrategy:g,ariaLabel:h,lockScroll:v}=(0,a.useOverlayConfig)(),{floatingStyles:m,refs:{setFloating:x}}=d,y=(0,o.useRole)(d,{role:"dialog"}),k=(0,o.useClick)(d),_=(0,o.useDismiss)(d,{outsidePressEvent:"mousedown",outsidePress:r.shouldDismissOnOutsidePress,enabled:v?u&&p:p,escapeKey:v?u&&f:f}),{getFloatingProps:w}=(0,o.useInteractions)([y,k,_]);return(0,t.jsx)(t.Fragment,{children:c&&(0,t.jsx)(i.FloatingContent,{tokenColorMode:s,children:(0,t.jsx)("div",{ref:x,...w(),style:"target"===g?{outline:"none",...m,...n.layerStyles}:{position:"relative",...n.layerStyles},"aria-label":h,children:l})})})}e.s(["OverlayTriggerControlled",0,function(e){let{tokenColorMode:o,children:i,...a}=e;return(0,t.jsx)(s.OverlayTriggerCore,{...a,children:(0,t.jsx)(l,{tokenColorMode:o,children:i})})}])},4620717,e=>{e.v({shared:"HeadingTextBundle-module__f3oaWa__shared",sizeLg:"HeadingTextBundle-module__f3oaWa__sizeLg",sizeLgBreakpointLg:"HeadingTextBundle-module__f3oaWa__sizeLgBreakpointLg",sizeLgBreakpointMd:"HeadingTextBundle-module__f3oaWa__sizeLgBreakpointMd",sizeLgBreakpointSm:"HeadingTextBundle-module__f3oaWa__sizeLgBreakpointSm",sizeLgBreakpointXl:"HeadingTextBundle-module__f3oaWa__sizeLgBreakpointXl",sizeLgBreakpointXxl:"HeadingTextBundle-module__f3oaWa__sizeLgBreakpointXxl",sizeMd:"HeadingTextBundle-module__f3oaWa__sizeMd",sizeMdBreakpointLg:"HeadingTextBundle-module__f3oaWa__sizeMdBreakpointLg",sizeMdBreakpointMd:"HeadingTextBundle-module__f3oaWa__sizeMdBreakpointMd",sizeMdBreakpointSm:"HeadingTextBundle-module__f3oaWa__sizeMdBreakpointSm",sizeMdBreakpointXl:"HeadingTextBundle-module__f3oaWa__sizeMdBreakpointXl",sizeMdBreakpointXxl:"HeadingTextBundle-module__f3oaWa__sizeMdBreakpointXxl",sizeSm:"HeadingTextBundle-module__f3oaWa__sizeSm",sizeSmBreakpointLg:"HeadingTextBundle-module__f3oaWa__sizeSmBreakpointLg",sizeSmBreakpointMd:"HeadingTextBundle-module__f3oaWa__sizeSmBreakpointMd",sizeSmBreakpointSm:"HeadingTextBundle-module__f3oaWa__sizeSmBreakpointSm",sizeSmBreakpointXl:"HeadingTextBundle-module__f3oaWa__sizeSmBreakpointXl",sizeSmBreakpointXxl:"HeadingTextBundle-module__f3oaWa__sizeSmBreakpointXxl",sizeXl:"HeadingTextBundle-module__f3oaWa__sizeXl",sizeXlBreakpointLg:"HeadingTextBundle-module__f3oaWa__sizeXlBreakpointLg",sizeXlBreakpointMd:"HeadingTextBundle-module__f3oaWa__sizeXlBreakpointMd",sizeXlBreakpointSm:"HeadingTextBundle-module__f3oaWa__sizeXlBreakpointSm",sizeXlBreakpointXl:"HeadingTextBundle-module__f3oaWa__sizeXlBreakpointXl",sizeXlBreakpointXxl:"HeadingTextBundle-module__f3oaWa__sizeXlBreakpointXxl",sizeXs:"HeadingTextBundle-module__f3oaWa__sizeXs",sizeXsBreakpointLg:"HeadingTextBundle-module__f3oaWa__sizeXsBreakpointLg",sizeXsBreakpointMd:"HeadingTextBundle-module__f3oaWa__sizeXsBreakpointMd",sizeXsBreakpointSm:"HeadingTextBundle-module__f3oaWa__sizeXsBreakpointSm",sizeXsBreakpointXl:"HeadingTextBundle-module__f3oaWa__sizeXsBreakpointXl",sizeXsBreakpointXxl:"HeadingTextBundle-module__f3oaWa__sizeXsBreakpointXxl",weightLight:"HeadingTextBundle-module__f3oaWa__weightLight",weightMedium:"HeadingTextBundle-module__f3oaWa__weightMedium",weightNormal:"HeadingTextBundle-module__f3oaWa__weightNormal"})},6482476,e=>{"use strict";var t=e.i(6272043),o=e.i(3381066),i=e.i(9105748),a=e.i(4620717);let n=(0,i.createResponsiveClassNameLookup)(a.default,{xs:"sizeXs",sm:"sizeSm",md:"sizeMd",lg:"sizeLg",xl:"sizeXl"});e.s(["classNameForHeadingText",0,function(e){let r=(0,o.wrapResponsive)(e?.size??"lg"),s=e?.weight??"medium";return(0,t.default)(a.default.shared,{[a.default.weightLight]:"light"===s,[a.default.weightNormal]:"normal"===s,[a.default.weightMedium]:"medium"===s},(0,i.classNameForResponsiveValue)(r,n))}])},4434319,e=>{e.v({root:"HeadingText-module__djfC6W__root"})},5363035,e=>{"use strict";var t=e.i(9391398),o=e.i(6272043),i=e.i(6482476),a=e.i(6428959),n=e.i(937536),r=e.i(226931),s=e.i(4434319);e.s(["HeadingText",0,e=>{let{as:l="span",size:d="lg",weight:c="medium",color:u=r.tokens.content.regular.default,align:p,ellipsis:f,className:g,style:h,children:v,id:m,"data-tag":x,...y}=e,k=(0,o.default)(s.default.root,(0,i.classNameForHeadingText)({size:d,weight:c}),(0,a.classNameForTextColor)({color:u}),(0,n.classNameForTextLayout)({align:p,ellipsis:f}),g);return(0,t.jsx)(l,{className:k,style:h,id:m,"data-tag":x,...y,children:v})}])},1245099,e=>{"use strict";var t=e.i(9391398),o=e.i(6900019);e.s(["PortalPassthrough",0,function(e){let{children:i}=e;return(0,t.jsx)(o.ColorSystemContainerPassthrough,{children:i})}])},6305112,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconChevronLeft",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M15.866 18.244c.422.423.634.742.634 1.06 0 .32-.212.639-.634 1.062s-.742.634-1.061.634c-.32 0-.638-.211-1.06-.634l-3.653-3.653-3.653-3.652c-.423-.423-.634-.742-.634-1.06 0-.32.211-.639.634-1.062l3.653-3.652 3.652-3.652c.423-.423.742-.635 1.06-.635.32 0 .638.212 1.061.635s.635.741.635 1.06-.212.638-.635 1.06l-2.857 2.858-2.856 2.857c-.191.19-.287.36-.287.53s.096.34.287.53l2.856 2.857z"})})});e.s(["IconChevronLeft",0,o])},3049961,e=>{"use strict";var t=e.i(6191788),o=e.i(425595);let i=o.breakpointNames.slice().reverse();e.s(["isBreakpointAvailable",0,function(e){return"available"===e.state},"useCurrentBreakpoint",0,function(){let[e,a]=(0,t.useState)({state:"pending"});return(0,t.useEffect)(()=>{let e=()=>{a({state:"available",value:function(e){for(let t of i)if(e>=o.breakpointsInPixels[t])return t;return"xs"}(window.innerWidth)})};if(!("u">typeof ResizeObserver))return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e);{let t=new ResizeObserver(e);return t.observe(document.body),()=>t.disconnect()}},[]),e}],3049961)},8866826,e=>{"use strict";var t=e.i(9391398),o=e.i(6272043),i=e.i(4489061),a=e.i(5135913);function n(e){let{children:n}=e,{currentColorMode:r,currentScreenMode:s}=(0,i.useTokenModes)();return(0,t.jsx)("div",{"data-token-color-mode":r,className:(0,o.default)((0,a.tokenColorModeClassName)(r),(0,a.tokenScreenModeClassName)(s)),children:n})}e.s(["TokenModeContainer",0,function(e){let{colorMode:o,screenMode:a,children:r}=e,{rootColorMode:s,rootScreenMode:l}=(0,i.useTokenModes)();return(0,t.jsx)(i.TokenModeProvider,{currentColorMode:"root"===o?s:o,currentScreenMode:"root"===a?l:a,children:(0,t.jsx)(n,{children:r})})}])},4396221,e=>{"use strict";var t=e.i(6191788);let o=(0,t.createContext)(null);e.s(["OverlayCloseContext",0,o,"useOverlayClose",0,function(){let e=(0,t.useContext)(o);if(!e)throw Error("useOverlayClose must be used within an Overlay trigger component");return e}])},7934135,e=>{"use strict";var t=e.i(6191788);let o=(0,t.createContext)(null);e.s(["OverlayConfigContext",0,o,"useOverlayConfig",0,function(){let e=(0,t.useContext)(o);if(!e)throw Error("useOverlayConfig must be used within an Overlay trigger component");return e}])},8630900,e=>{"use strict";let t={isolation:"isolate",zIndex:e.i(226931).tokens.layer.z12};e.s(["layerStyles",0,t])},7619769,e=>{"use strict";e.s(["transformOriginPerSide",0,e=>{switch(e){case"left":return"right center";case"right":return"left center";default:return}},"transformPerSide",0,(e,t)=>{switch(e){case"left":return`translateX(-${t}px)`;case"right":return`translateX(${t}px)`;case"bottom":return`translateY(${t}px)`;default:return`translateY(${-t}px)`}}])},534802,e=>{"use strict";var t=e.i(9391398),o=e.i(2195600),i=e.i(3095963),a=e.i(5458272),n=e.i(6191788),r=e.i(9584833),s=e.i(3049961),l=e.i(5030264),d=e.i(4396221),c=e.i(7934135),u=e.i(226931),p=e.i(7619769);let f={animationDuration:350,backdropStyles:{backgroundColor:u.tokens.constant.blackMuted.default}},g={positioningStrategy:"target",animationDuration:275,containerOffset:6,containerTransformStyles:e=>({opacity:0,transform:(0,p.transformPerSide)(e,6)})},h={...f,containerTransformStyles:{transform:"translateY(100%)"}},v=z({...f,containerTransformStyles:{opacity:0,transform:`translateY(${u.tokens.space.x24})`}},h),m=z({...f,containerTransformStyles:{transform:"translateX(100%)"}}),x=z({...f,animationDuration:400,containerTransformStyles:{opacity:0,transform:"translateY(4px)"}}),y=z(g,h),k=z({...g,lockScroll:!1}),_=z({...g,backdropStyles:{backgroundColor:u.tokens.constant.blackMuted.default},backdropSpotlight:!0}),w=z({...g,animationDuration:200,lockScroll:!1}),B=z({...g,lockScroll:!1,preferredPlacement:"bottom"},h),$=z({...g,lockScroll:!1,preferredPlacement:"bottom-start"},h),b=z({});function z(e,t){return{default:e,mobile:t??e}}let C=()=>void 0,S="function"==typeof ResizeObserver;e.s(["OverlayTriggerCore",0,function(e){let{id:u,"aria-label":p,defaultOpen:f,isOpen:g,onOpenChange:h,onMountComplete:z,onUnmountComplete:T,isDismissable:M=!0,isKeyboardDismissable:H=!0,initialFocus:O,loggerId:X,loggerProps:W,preset:j,positioningStrategy:P,floatingStrategy:L,animationDuration:F,containerTransformStyles:N,backdropStyles:E,backdropSpotlight:I,containerOffset:R,containerShift:A,preferredPlacement:D,autoPositioning:K,centeredOnReference:V,lockScroll:Y,displayInFullscreen:G=!1,externalElements:U,children:Z}=e;if(void 0!==g&&void 0!==f)throw Error("You cannot provide both `isOpen` and `defaultOpen` to control the overlay state");let[q,J]=(0,n.useState)(!1),Q=function(e){switch(e){case"dialog":default:return v;case"drawer":return m;case"takeover":return x;case"popover":return y;case"contextual-popover":return k;case"spotlight-popover":return _;case"autocomplete":case"menu":return B;case"dropdown":return $;case"tooltip":return w;case"custom":return b}}(j),ee=(0,s.useCurrentBreakpoint)(),et=((0,s.isBreakpointAvailable)(ee)&&"xs"===ee.value?Q?.mobile??Q?.default:Q?.default)??{},eo=P??et.positioningStrategy??"fullscreen",ei=L??et.floatingStrategy??"absolute",ea=F??et.animationDuration??0,en=N??et.containerTransformStyles,er=E??et.backdropStyles,es=I??et.backdropSpotlight,el=R??et.containerOffset??0,ed=A??et.containerShift??0,ec=D??et.preferredPlacement??"top",eu=K??et.autoPositioning??!0,ep=V??et.centeredOnReference??!1,ef=Y??et.lockScroll??!0,eg=ec.split("-")[0],eh="left"===eg||"right"===eg,ev=(0,l.useLogger)(),em=(0,n.useCallback)(()=>{ev("overlayOpen",X,W),z?.()},[ev,X,W,z]),ex=(0,n.useCallback)(()=>{ev("overlayClose",X,W),T?.(),ew(!1)},[ev,X,W,T]),ey=(0,n.useId)(),ek=u??ey,[e_,ew]=(0,n.useState)(!1),[eB,e$]=(0,n.useState)(f??!1),eb=void 0!==g?g:eB,[ez,eC]=(0,n.useState)(eb),[eS,eT]=(0,n.useState)(!1),{isTopOverlay:eM}=(0,r.useOverlayStack)(ey,e_);(0,n.useEffect)(()=>{J(!0),!ez&&eb&&eC(!0),eb&&ew(!0)},[ez,eb]);let eH=(e,t,o)=>{(eM||void 0!==o)&&(h?.(e,"trigger"),e$?.(e))},eO=(0,n.useCallback)(e=>{eM&&(e$?.(!1),h?.(!1,e))},[eM,h]),eX=(0,n.useRef)(null),{context:eW}=(0,a.useFloating)({open:eb,onOpenChange:eH,placement:ec,transform:!0,strategy:ei,elements:U,middleware:[(0,o.offset)(ep?e=>{let{rects:t}=e;return-t.reference.height/2-t.floating.height/2}:el),eu?(0,o.flip)({padding:2*el}):null,(0,o.size)({apply(e){let{availableHeight:t,availableWidth:o,elements:{floating:i,reference:a}}=e;i.style.setProperty("--overlay-window-height",`${window.innerHeight-2*el}px`),i.style.setProperty("--overlay-window-width",`${window.innerWidth-2*el}px`);let n=a.getBoundingClientRect();if(0===n.width&&0===n.height)i.style.setProperty("--overlay-display","none"),eH(!1,void 0,"safe-polygon");else{i.style.setProperty("--overlay-display","initial"),i.style.setProperty("--overlay-reference-height",`${n.height}px`),i.style.setProperty("--overlay-reference-width",`${n.width}px`),eh?(i.style.setProperty("--overlay-available-height",`${Math.max(window.innerHeight,t)-2*el-ed}px`),i.style.setProperty("--overlay-available-width",`${Math.max(window.innerWidth,o)-2*el-ed}px`)):(i.style.setProperty("--overlay-available-height",`${t-el-ed}px`),i.style.setProperty("--overlay-available-width",`${o-el-ed}px`));let e=i.getBoundingClientRect();i.style.setProperty("--overlay-content-height",`${e.height}px`),i.style.setProperty("--overlay-content-width",`${e.width}px`)}}}),(0,o.shift)({padding:el}),(0,o.arrow)({element:eX.current,padding:12})].filter(Boolean),whileElementsMounted:S?i.autoUpdate:void 0}),ej=eW.placement.split("-")[0],eP="function"==typeof en?en(ej):en,eL=(0,a.useTransitionStyles)(eW,{duration:ea,close:eP,initial:eP}),{status:eF}=(0,a.useTransitionStatus)(eW,{duration:ea});(0,n.useEffect)(()=>{eW.open&&es&&eW.refs.reference.current&&"scrollIntoView"in eW.refs.reference.current&&eW.refs.reference.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},[es,eW.open,eW.refs.reference]),(0,n.useEffect)(()=>{let e;return ez&&(void 0!==em||void 0!==ex)?(eb&&"open"===eF&&(e=setTimeout(()=>{em?.(),eT(!0)},ea)),eb||(eT(!1),"unmounted"===eF&&ex?.()),()=>{clearTimeout(e)}):C},[ea,ez,em,ex,eb,eF]);let eN=(0,n.useMemo)(()=>({close:eO,isDismissable:M}),[eO,M]),eE=(0,n.useMemo)(()=>({id:ek,context:eW,arrowRef:eX,transitionStyles:eL.styles,side:eW.placement.split("-")[0],isFocusable:eS,isMounted:q&&eL.isMounted,isTopOverlay:eM,isDismissable:M,isKeyboardDismissable:H,ariaLabel:p,backdropStyles:er,backdropSpotlight:es,initialFocus:O,animationDuration:ea,positioningStrategy:eo,containerOffset:el,lockScroll:ef,displayInFullscreen:G}),[ek,eW,eL.styles,eL.isMounted,eS,q,eM,M,H,p,er,es,O,ea,eo,el,ef,G]);return(0,t.jsx)(c.OverlayConfigContext.Provider,{value:eE,children:(0,t.jsx)(d.OverlayCloseContext.Provider,{value:eN,children:Z})})}],534802)},3561118,e=>{"use strict";e.s(["shouldDismissOnOutsidePress",0,e=>!(e.target&&(e.target instanceof HTMLElement||e.target instanceof SVGElement))||!e.target.closest('[data-overlay-dismiss="false"]')])},6918119,e=>{"use strict";var t=e.i(9391398),o=e.i(5458272),i=e.i(6191788),a=e.i(1245099),n=e.i(8866826),r=e.i(226931),s=e.i(7934135);e.s(["FloatingContent",0,function(e){let{tokenColorMode:l,children:d}=e,{context:c,isTopOverlay:u,backdropStyles:p,backdropSpotlight:f,animationDuration:g,lockScroll:h,isFocusable:v,initialFocus:m,displayInFullscreen:x}=(0,s.useOverlayConfig)(),y=(0,i.useRef)(null),[k,_]=(0,i.useState)(void 0);(0,i.useEffect)(()=>{if(!f)return;y.current||(y.current=function(e){let t=e;for(;t;){let e=getComputedStyle(t);if(/(auto|scroll)/.test(e.overflowY))return t;t=t.parentElement}return window}(c.elements.reference));let e=y.current,{padding:t=0,radius:o=8,xOffset:i=0,yOffset:a=0}="boolean"==typeof f?{}:f,n=()=>{let e=c.elements.reference?.getBoundingClientRect();if(e){let n=function(e){let{rect:t,padding:o,radius:i,xOffset:a,yOffset:n}=e,r=t.left-o+a,s=t.top-o+n,l=t.width+2*o,d=t.height+2*o,c=Math.min(i,l/2),u=Math.min(i,d/2),p=.552284749831*c,f=.552284749831*u,g=r+l,h=s+d;return`M${r+c},${s}H${g-c}C${g-p},${s} ${g},${s+f} ${g},${s+u}V${h-u}C${g},${h-f} ${g-p},${h} ${g-c},${h}H${r+c}C${r+p},${h} ${r},${h-f} ${r},${h-u}V${s+u}C${r},${s+f} ${r+p},${s} ${r+c},${s}Z`}({rect:e,padding:t,radius:o,xOffset:i,yOffset:a});_(`path(evenodd, "M-2 -2 H10000 V10000 H-2 Z ${n}")`)}};return n(),window.addEventListener("resize",n),e.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("resize",n),e.removeEventListener("scroll",n)}},[f,c.elements.reference]);let w=(0,o.useTransitionStyles)(c,{duration:g,close:{opacity:0},initial:{opacity:0}}),B=null;return B=x&&document.fullscreenElement?document.fullscreenElement:document.body,(0,t.jsx)(o.FloatingPortal,{root:B,children:(0,t.jsx)(a.PortalPassthrough,{children:(0,t.jsx)(n.TokenModeContainer,{colorMode:l,children:h?(0,t.jsxs)(t.Fragment,{children:[k?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.FloatingOverlay,{lockScroll:u,style:{zIndex:r.tokens.layer.z12,...w.styles}}),(0,t.jsx)(o.FloatingOverlay,{style:{zIndex:r.tokens.layer.z12,...p,...w.styles,clipPath:k}})]}):(0,t.jsx)(o.FloatingOverlay,{lockScroll:u,style:{zIndex:r.tokens.layer.z12,...p,...w.styles}}),(0,t.jsx)(o.FloatingFocusManager,{context:c,initialFocus:v?m:-1,closeOnFocusOut:!1,children:d})]}):(0,t.jsx)(o.FloatingFocusManager,{context:c,initialFocus:v?m:-1,closeOnFocusOut:!1,modal:!1,children:d})})})})}])},8658442,e=>{e.v({backContainer:"ModalNavigation-module__cPKwxG__backContainer",closeContainer:"ModalNavigation-module__cPKwxG__closeContainer",positionAbsolute:"ModalNavigation-module__cPKwxG__positionAbsolute",positionFixed:"ModalNavigation-module__cPKwxG__positionFixed"})},6543249,6811268,e=>{"use strict";var t=e.i(9391398),o=e.i(9760814),i=e.i(226931),a=e.i(8981215),n=e.i(6272043),r=e.i(2864767),s=e.i(6305112),l=e.i(1968870),d=e.i(4926052),c=e.i(4396221),u=e.i(8658442);let p={fixed:u.default.positionFixed,absolute:u.default.positionAbsolute};function f(e){let{onBackClick:o,onCloseClick:i,position:a="absolute",buttonProps:f,showCloseButton:g=!0}=e,{close:h,isDismissable:v}=(0,c.useOverlayClose)(),m=(0,d.useTranslation)("dialog.closeButton"),x=(0,d.useTranslation)("dialog.backButton");return(0,t.jsxs)(t.Fragment,{children:[v&&g&&(0,t.jsx)("div",{className:(0,n.default)(u.default.closeContainer,p[a]),children:(0,t.jsx)(r.Button,{variant:"tertiary",corners:"pill",unfilled:!0,icon:l.IconClose,onClick:()=>{h("close"),i?.()},"data-tag":"dialog-close-icon","aria-label":m,...f})}),o&&(0,t.jsx)("div",{className:(0,n.default)(u.default.backContainer,p[a]),children:(0,t.jsx)(r.Button,{variant:"tertiary",corners:"pill",unfilled:!0,icon:s.IconChevronLeft,onClick:o,"data-tag":"dialog-back-icon","aria-label":x,...f})})]})}e.s(["ModalNavigation",0,f],6811268);let g=o.styled.div.withConfig({componentId:"sc-62c0aeab-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  --control-offset: ${i.tokens.space.x8};

  @media ${(0,a.mediaForBreakpoint)("sm")} {
    --control-offset: ${i.tokens.space.x8};
  }
`,h=o.styled.div.withConfig({componentId:"sc-62c0aeab-1"})`
  flex-grow: 1;
`;e.s(["ModalLayout",0,function(e){let{header:o,showCloseButton:i,footer:a,content:n}=e;return(0,t.jsxs)(g,{children:[void 0!==o?o:(0,t.jsx)(f,{position:"absolute",showCloseButton:i}),n&&(0,t.jsx)(h,{children:n}),a]})}],6543249)},1604993,562863,e=>{"use strict";var t=e.i(9391398),o=e.i(6191788),i=e.i(9760814),a=e.i(6112151),n=e.i(226931),r=e.i(8981215),s=e.i(6543249),l=e.i(4396221),d=e.i(7934135);let c={display:"var(--overlay-display, block)",availableWidth:"var(--overlay-available-width, 100vw)",availableHeight:"var(--overlay-available-height, 100dvh)",referenceWidth:"var(--overlay-reference-width)",referenceHeight:"var(--overlay-reference-height)",overflowHeight:"var(--overlay-overflow-height)",overflowWidth:"var(--overlay-overflow-width)",contentHeight:"var(--overlay-content-height)",contentWidth:"var(--overlay-content-width)",windowWidth:"var(--overlay-window-width, 100vw)",windowHeight:"var(--overlay-window-height, 100dvh)"};function u(e){let{size:i="md",padding:n="default",header:r,footer:c,"data-tag":p,showCloseButton:h=!0,children:v}=e,m=(0,o.useRef)(null),{close:x,isDismissable:y}=(0,l.useOverlayClose)(),{id:k,isFocusable:_,transitionStyles:w}=(0,d.useOverlayConfig)(),B=!!v,$="string"==typeof v?(0,t.jsx)(a.BodyText,{size:"lg",children:v}):v;return(0,t.jsx)(f,{id:k,"data-tag":p??"dialog-container",$isFocusable:_,onClick:e=>{y&&e.target instanceof Node&&!m.current?.contains(e.target)&&x("backdrop")},children:(0,t.jsx)(g,{size:i,ref:m,style:w,children:(0,t.jsx)(s.ModalLayout,{header:r,showCloseButton:h,content:B&&(0,t.jsx)(u.Content,{padding:n,children:$}),footer:c})})})}e.s(["overlayTokens",0,c],562863);let p={"fit-content":"fit-content",sm:"440px",md:"600px",lg:"800px"},f=i.styled.div.withConfig({componentId:"sc-568cd672-0"})`
  position: fixed;
  inset: auto 0 0 0;
  display: grid;
  height: var(--overlay-height);
  width: 100vw;
  place-items: end;
  box-sizing: border-box;
  overflow: hidden;

  ${e=>{let{$isFocusable:t}=e;return t&&i.css`
      overflow: auto;
    `}}

  --overlay-overflow-width: 100vw;
  --overlay-overflow-height: calc(100vh - ${n.tokens.space.x24});
  --overlay-height: calc(100vh - env(safe-area-inset-top));
  --popover-radius: ${n.tokens.radius.md} ${n.tokens.radius.md} 0 0;

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    place-items: center;

    --overlay-overflow-width: calc(100vw - 2 * ${n.tokens.space.x32});
    --overlay-overflow-height: calc(100vh - 3 * ${n.tokens.space.x32});
    --popover-radius: ${n.tokens.radius.md};
  }

  // the use of dvh is a workaround for iOS Safari bug where 100vh doesn't
  // account for the bottom toolbar dynamically appearing and disappearing
  @supports (height: 100dvh) {
    --overlay-overflow-width: 100dvw;
    --overlay-overflow-height: calc(100dvh - ${n.tokens.space.x24});
    --overlay-height: calc(100dvh - env(safe-area-inset-top));

    @media ${(0,r.mediaForBreakpoint)("sm")} {
      --overlay-overflow-width: calc(100dvw - 2 * ${n.tokens.space.x32});
      --overlay-overflow-height: calc(100dvh - 3 * ${n.tokens.space.x32});
    }
  }
`,g=i.styled.div.withConfig({componentId:"sc-568cd672-1"})`
  width: 100vw;
  background-color: ${n.tokens.bg.elevated.default};
  border-radius: ${n.tokens.radius.lg} ${n.tokens.radius.lg} 0 0;
  box-shadow: ${n.tokens.boxShadow.high};
  padding-bottom: env(safe-area-inset-bottom);

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    margin: ${n.tokens.space.x24} auto;
    border-radius: ${n.tokens.radius.lg};

    ${e=>{let{size:t}=e;return"fit-content"===t&&i.css`
        max-width: fit-content;
      `}}

    ${e=>{let{size:t}=e;return"fit-content"!==t&&i.css`
        max-width: min(${p[t??"md"]}, ${c.overflowWidth});
      `}}
  }
`;u.Content=i.styled.div.withConfig({componentId:"sc-568cd672-2"})`
  ${e=>{let{padding:t}=e;return("default"===t||"tight"===t)&&i.css`
      padding: ${n.tokens.space.x16};

      @media ${(0,r.mediaForBreakpoint)("sm")} {
        padding: ${n.tokens.space.x24};
      }
    `}}
`,e.s(["OverlayDialog",0,u],1604993)},3732940,e=>{"use strict";var t=e.i(9391398),o=e.i(5363035),i=e.i(6811268),a=e.i(4396221),n=e.i(9760814),r=e.i(226931),s=e.i(8981215);let l=n.styled.div.withConfig({componentId:"sc-d0c298b-0"})`
  --space-horizontal: ${r.tokens.space.x16};
  --space-vertical: ${r.tokens.space.x16};

  position: relative;
  background-color: ${r.tokens.bg.elevated.default};
  padding: var(--space-vertical) var(--space-horizontal)
    ${e=>{let{layout:t}=e;return"inline"===t?0:"var(--space-vertical)"}} var(--space-horizontal);
  border-radius: calc(var(--rounded-corners, 1) * ${r.tokens.radius.lg})
    calc(var(--rounded-corners, 1) * ${r.tokens.radius.lg}) 0 0;

  ${e=>{let{padding:t}=e;return"title-only"===t&&n.css`
      --space-horizontal: ${r.tokens.space.x0};
      --space-vertical: ${r.tokens.space.x0};
    `}}

  ${e=>{let{layout:t,padding:o}=e;return"inline"===t&&"default"===o&&n.css`
      --control-offset: ${r.tokens.space.x8};

      @media ${(0,s.mediaForBreakpoint)("sm")} {
        --control-offset: 18px;
        --space-horizontal: ${r.tokens.space.x24};
        --space-vertical: ${r.tokens.space.x24};
      }
    `}}

  ${e=>{let{layout:t}=e;return"sticky"===t&&n.css`
      --control-offset: 10.5px;

      position: sticky;
      top: 0;
      z-index: ${r.tokens.layer.z1};
      border-bottom: 1px solid ${r.tokens.border.muted.default};

      @media ${(0,s.mediaForBreakpoint)("sm")} {
        --space-horizontal: ${r.tokens.space.x24};
      }
    `}}
`;function d(e,t){let{layout:o,padding:i,hasButton:a,hasAnyButton:l,hasMedia:d,titleAlign:c}=t,u="center"===c&&l||"center"!==c&&a&&!d,p=(e=>{let{padding:t,hasPadding:o}=e;return"title-only"===t?r.tokens.space.x16:o?"38px":"0px"})({padding:i,hasPadding:u}),f=(e=>{let{padding:t,layout:o,hasPadding:i}=e;return"title-only"===t?r.tokens.space.x24:i?"sticky"===o?"28px":"40px":"0px"})({padding:i,layout:o,hasPadding:u});return n.css`
    ${e}: ${p};

    @media ${(0,s.mediaForBreakpoint)("sm")} {
      ${e}: ${f};
    }
  `}let c=n.styled.div.withConfig({componentId:"sc-d0c298b-1"})`
  ${e=>{let{hasBackButton:t,hasCloseButton:o,layout:i,hasMedia:a,titleAlign:n,padding:r}=e;return d("--back-offset",{hasButton:t,hasAnyButton:t||o,layout:i,hasMedia:a,titleAlign:n,padding:r})}}

  ${e=>{let{hasBackButton:t,hasCloseButton:o,layout:i,hasMedia:a,titleAlign:n,padding:r}=e;return d("--close-offset",{hasButton:o,hasAnyButton:t||o,layout:i,hasMedia:a,titleAlign:n,padding:r})}}
    
  flex-grow: 1;
  text-align: ${e=>{let{titleAlign:t}=e;return t}};
  padding-left: var(--back-offset);
  padding-right: var(--close-offset);

  ${e=>{let{padding:t}=e;return"title-only"===t?n.css`
          padding-top: ${r.tokens.space.x16};

          @media ${(0,s.mediaForBreakpoint)("sm")} {
            padding-top: ${r.tokens.space.x24};
          }
        `:""}};
`;e.s(["OverlayHeader",0,function(e){let{title:n,titleAlign:r="left",titleId:s,media:d,onBackClick:u,showCloseButton:p=!0,layout:f="inline",padding:g="default"}=e,{isDismissable:h}=(0,a.useOverlayClose)(),v="string"==typeof n?(0,t.jsx)(o.HeadingText,{as:"h2",size:"lg",children:n}):n,m=!!d,x=p&&h;return(0,t.jsxs)(l,{layout:f,padding:g,"data-tag":"dialog-header",children:[(0,t.jsx)(i.ModalNavigation,{showCloseButton:p,onBackClick:u,buttonProps:{variant:m?"floating":"tertiary",unfilled:!m}}),d,v&&(0,t.jsx)(c,{id:s,hasBackButton:!!u,hasCloseButton:x,hasMedia:m,titleAlign:r,layout:f,padding:g,children:v})]})}],3732940)}]);

//# debugId=e8ff006d-5dec-61c4-71b5-5726453c18b8
//# sourceMappingURL=0pmw8bz42wk85.js.map
;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="3a540718-e0f5-deb9-0a35-e128e59cc423")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3145032,e=>{e.v({inheritMaxHeight:"VideoPlayer-module__a2ZpKa__inheritMaxHeight",player:"VideoPlayer-module__a2ZpKa__player"})},2383398,e=>{"use strict";var t=e.i(9391398),n=e.i(2358280),i=e.i(7342776),o=e.i(3049961),r=e.i(6272043),a=e.i(6191788),s=e.i(5069969),l=e.i(6421754),c=e.i(4971186),d=e.i(8819467),u=e.i(1163396),p=e.i(1785954),h=e.i(2541176),m=e.i(6202039),g=e.i(6374153),x=e.i(368885),f=e.i(1280554),v=e.i(6069986),y=e.i(216090),k=e.i(7697535);e.i(9137169);var b=e.i(625078),j=e.i(7260857),C=e.i(7308002),P=e.i(9598373);let w=(0,C.atom)([]),I=(0,C.atom)(new Set);var S=e.i(3145032);let T=(0,a.memo)((0,a.forwardRef)((e,C)=>{let{variant:T,videoUrl:$,playbackData:B,thumbnailUrl:E,onError:A,onEnterFullscreen:R,onLeaveFullscreen:V,onBeforePlay:z,onPlay:M,onCompleted:F,onPaused:L,onSeek:_,onLoaded:D,onEnterPIP:U,controls:O,disableClickToPlay:W,videoId:H,videoCampaign:N,videoWidth:X,videoHeight:Z,videoTitle:K,maxHeight:Q,time:q,duration:G,fullDuration:J,autoPlay:Y,preload:ee,campaignId:et,postId:en,userId:ei,isPostPage:eo,isOnPlatform:er,isPreview:ea,pledgeUrl:es,isPostEditorView:el,videoProgress:ec,creatorName:ed,isPostPreview:eu,hasStackedEndState:ep=!1,logEnterVideoPip:eh,logExitVideoPip:em,showClosedCaptions:eg,isReloading:ex,dropWithState:ef,onLockedPostClick:ev,isMonetizedPost:ey,postType:ek,parentHighlightPost:eb,currentUserCanView:ej,showPaidAccessChip:eC=!1,paywallDisplay:eP,shouldApplyPostRatioBasedLayout:ew,additionalControls:eI,chapters:eS,storyboard:eT,clippableMoments:e$,sourceMediaId:eB}=e,{i18n:eE}=(0,n.useLingui)(),eA=(0,a.useRef)(null),{onQueueAutoPlay:eR,onDequeueAutoPlay:eV,onUserInteraction:ez,onVideoStartForAutoPlay:eM,onVideoStopForAutoPlay:eF,shouldAutoPlay:eL,userHasInteracted:e_}=function(e){let[t,n]=(0,P.useAtom)(w),[i,o]=(0,a.useState)(!1),[r,s]=(0,P.useAtom)(I),l=(0,a.useCallback)(()=>t.findIndex(t=>t===e),[t,e]),c=(0,a.useCallback)(()=>{l()>=0||i||n([...t,e])},[l,i,n,t,e]),d=(0,a.useCallback)(()=>{let e=l();if(e>=0){let i=[...t];i.splice(e,1),n(i)}},[l,t,n]),u=(0,a.useCallback)(()=>{o(!0),n([])},[o,n]),p=(0,a.useCallback)(()=>{if(!r.has(e)){let t=new Set(r);t.add(e),s(t)}},[r,e,s]),h=(0,a.useCallback)(()=>{if(d(),r.has(e)){let t=new Set(r);t.delete(e),s(t)}},[d,r,e,s]);return{onQueueAutoPlay:c,onDequeueAutoPlay:d,onUserInteraction:u,onVideoStartForAutoPlay:p,onVideoStopForAutoPlay:h,shouldAutoPlay:(r.has(e)||0===r.size)&&t[0]===e,userHasInteracted:i}}(`${en}-${$}`),eD=(0,o.useCurrentBreakpoint)(),eU=(0,o.isBreakpointAvailable)(eD)&&"xs"===eD.value,{enableSingleColumnLayout:eO}=(0,s.useSingleColumnLayout)({isPostPage:!!eo,isPreview:!!eu,paywallDisplay:eP,currentUserCanView:!!ej}),eW=eO&&eo&&(ek===p.ApiPostType.VIDEO_EXTERNAL_FILE||!ej)&&!eU;(0,a.useImperativeHandle)(C,()=>({seekTo(e){let t=eA.current;if(null!=e&&null!=t){let n=t.duration||0;t.currentTime=(0,m.getMaxSeekTime)(ef?.drop??null,e,n)}},getCurrentTime:()=>eA.current?.currentTime,pause(){eA.current?.pause()},getVideoId:()=>H,getVideoElement:()=>eA.current}));let[eH,eN]=(0,a.useState)(ee),[eX,eZ]=(0,a.useState)(!1),eK=(0,b.useAspectRatio)({maxHeight:Q,videoHeight:Z,videoWidth:X}),eQ=(0,m.isLive)(ef?.dropState??null,ef?.drop??null)&&ef?.drop?(0,m.getElapsedTimeSinceDropSeconds)(ef?.drop):null,eq=el||!ec?.positionSecs?0:ec.positionSecs,eG=eQ??eq,[eJ,eY]=(0,a.useState)(!1);(0,a.useEffect)(()=>{eY(!1)},[$,eH]);let e0=(0,a.useRef)(null),[e1,e3]=(0,a.useState)(!1),[e6]=(0,j.useMuxMonitoring)({videoId:H,videoCampaign:N,videoTitle:K,debug:!d.IS_PROD,playerInitTime:Date.now(),playerName:"PatreonVideoPlayer",playerVersion:"1.0.4",experimentName:`autoplay:${Y}`,videoStreamType:"on-demand",hlsVersion:"1.4.12",campaignId:et,postId:en,userId:ei,isOnPlatform:er,isPreview:ea}),e8=(0,a.useContext)(l.VideoContext),e2=(0,a.useCallback)(()=>{if(L){let e=eA?.current;L(e?.seeking||!1)}eF()},[eA,L,eF]),e9=(0,a.useCallback)(e=>{A?.(e),eF()},[A,eF]),e5=(0,a.useCallback)(e=>{(0,u.datadogIncrement)("on_play_error",{error:e.toString()})},[]),e4=(0,a.useCallback)(()=>{F&&F({currentTime:eA.current?.currentTime,duration:eA.current?.duration}),eF()},[F,eF]),e7=(0,a.useCallback)(()=>{let e=eA?.current;null!=e&&e.duration&&(q&&!eJ?e.currentTime=q:eG&&!eJ&&e.duration-eG>1&&(e.currentTime=eG),eJ||eY(!0))},[eG,eJ,q]),te=(0,a.useCallback)(()=>{let e=eA?.current;e&&(M&&(e.duration?M({currentTime:e.currentTime,duration:e.duration}):e.addEventListener("playing",()=>M({currentTime:e.currentTime,duration:e.duration}),{once:!0})),eM())},[M,eM]),tt=(0,a.useCallback)(e=>{eJ?null!==e0.current&&(_&&_({originalTime:e0.current,seekTime:e}),e0.current=eA.current?.currentTime||null):eY(!0)},[eJ,_]);(0,a.useEffect)(()=>{D?.()},[D]);let tn=()=>{let e=eA.current;if(!eH&&e){e1||(e6(e),e3(!0)),eN(!0);let t=(0,c.getIsIOS)();e.addEventListener(t?"loadedmetadata":"canplay",()=>{e.paused&&(z?.(),e.play())},{once:!0})}},ti=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=eA.current;if(e)if(eL&&!ti.current){if(!e.paused)return;e.muted=!eb,tn(),z?.(),ti.current=!0,e.play().catch(e=>{e5(e)})}else eL||!ti.current||e_||(e.muted=!1,e.pause(),ti.current=!1,e2())},[eL,e_]);let{targetRef:to,isOnScreen:tr}=(0,g.useOnScreen)({threshold:.75});(0,a.useEffect)(()=>{let e=eA.current,t=e&&"load"===Y&&ee,n=e&&"view"===Y&&tr;(t||n)&&eR(),"view"!==Y||tr||eV()},[Y,eA,ee,tr,e_]),(0,a.useEffect)(()=>{let e=eA.current,t=()=>{let t=e?.currentTime||0;(null===e0.current||.5>Math.abs(t-e0.current))&&(e0.current=t)};return e?.hasAttribute("timeupdate")||e?.addEventListener("timeupdate",t),()=>{e?.removeEventListener("timeupdate",t)}},[eA,eA.current?.currentSrc]),(0,a.useEffect)(()=>{let e=eA.current,t="IntersectionObserver"in window&&new IntersectionObserver(t=>{if(!t.length||!e||(0,h.isFirefox)()&&!(0,f.getIsPIPSupported)())return;let n=t[0];if((0,l.isActive)(e8.current)&&!eo&&((0,f.isInPIP)(e8.current.videoPlayer)||(0,f.isVideoInAirPlay)(e8.current.videoPlayer))){n.isIntersecting&&eX&&eZ(!1);return}if(n.isIntersecting&&eX)eZ(!1),eo&&(0,l.isActive)(e8.current)&&(0,f.isInPIP)(e8.current.videoPlayer)?(0,f.requestExitPIP)(e8.current.videoPlayer):(z?.(),e.play());else if(!n.isIntersecting&&!eX&&!e.paused)if(eZ(!0),eo&&(0,l.isActive)(e8.current)&&!(0,f.isInPIP)(e8.current.videoPlayer)){let e=!ef?.drop;(0,f.requestEnterPIP)(e8.current.videoPlayer,!0,e)}else e.pause()},{threshold:.2})||void 0;return e&&t?.observe(e),()=>{t?.disconnect()}},[ef?.drop,eo,eX,z,e8,eA]);let ta=eE._({id:"g7ADQA",message:"{creatorName} removed this video.",values:{creatorName:ed}}),ts=eE._({id:"XxSWM/",message:"This video has been removed by the creator"});return((0,a.useEffect)(()=>{$||eu||ex||(0,u.datadogIncrement)("patreon.native_video_player.missing_video_url")},[$,eu,ex]),$)?(0,t.jsx)(k.AspectRatioContainer,{...eK,ref:to,onMouseEnter:"hover"===Y?eR:void 0,onMouseLeave:"hover"===Y?eV:void 0,onFocus:()=>setTimeout(ez,250),shouldCapHeight:eW,children:(0,t.jsx)(x.PatreonVideoPlayer,{preload:eH?"auto":"none",onBeforePlay:z,onPlay:te,onEnded:e4,onPause:e2,onError:e9,onSeek:tt,onDurationChange:e7,onEnterPictureInPicture:()=>{U?.(),eh?.()},onLeavePictureInPicture:()=>{em?.()},onEnterFullscreen:R,onLeaveFullscreen:V,videoElementRef:eA,videoUrl:$,playbackData:B,fullVideoDuration:void 0,isPreview:ea,playsinline:!0,controls:O,disableClickToPlay:W,showClosedCaptions:eg,className:(0,r.default)(S.default.player,{[S.default.inheritMaxHeight]:ew}),startingScreen:E?(0,t.jsx)(y.StartingScreen,{variant:T,thumbnailUrl:E,onBeforePlay:z,duration:G,fullDuration:J,isPreview:ea,isPostPreview:eu,videoInitialPlayState:eG,videoPlayerRef:eA,loadMediaIfNeeded:tn,loadMedia:eH,onPlayError:e5,postType:ek,showPaidAccessChip:eC,disableClickToPlay:W}):null,endScreen:ea?(0,t.jsx)(v.EndPauseScreen,{fullDuration:J,hasStackedEndState:ep,isEnded:!0,onClick:()=>{let e=eA.current;null!=e&&(e.currentTime=0,z?.(),e.play())},onUnlock:ev,pledgeUrl:es,thumbnailUrl:E,variant:T,isMonetizedPost:ey}):null,pauseScreen:ea&&e_?(0,t.jsx)(v.EndPauseScreen,{fullDuration:J,hasStackedEndState:ep,onClick:()=>{let e=eA.current;null!=e&&(z?.(),e.play())},onUnlock:ev,pledgeUrl:es,thumbnailUrl:E,variant:T,isMonetizedPost:ey}):null,videoId:H,dropWithState:ef,additionalControls:eI,chapters:eS,storyboard:eT,clippableMoments:e$,sourceMediaId:eB})}):eu?(0,t.jsx)(k.AspectRatioContainer,{...eK,isEmptyContainer:!0,children:(0,t.jsx)("p",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"space-around"},children:eE._({id:"ULZC3Q",message:"Once you upload your media, it'll appear here"})})}):(0,t.jsx)(k.AspectRatioContainer,{...eK,isEmptyContainer:!0,shouldCapHeight:eW,children:(0,t.jsx)("p",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"space-around"},children:ex?(0,t.jsx)(i.LoadingSpinner,{}):ed?ta:ts})})}));e.s(["default",0,T],2383398)},6069986,5975076,7697535,216090,e=>{"use strict";var t=e.i(9391398),n=e.i(2358280),i=e.i(6112151),o=e.i(1789610),r=e.i(5363035),a=e.i(2129357),s=e.i(2859206),l=e.i(226931),c=e.i(9760814),d=e.i(6803810),u=e.i(2550472);let p=c.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,h=e=>{let{duration:n=300,delay:i=0,children:o,...r}=e;return(0,t.jsx)(m,{...r,style:{...r.style||{},animationDuration:n+"ms",animationDelay:i+"ms"},children:o})},m=c.styled.div.withConfig({componentId:"sc-db32143c-0"})`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${p};
    animation-fill-mode: backwards;
  }
`;e.s(["FadeIn",0,h],5975076);var g=e.i(5303631),x=e.i(6200856);let f=c.styled.div.withConfig({componentId:"sc-6c9c7b81-0"})`
  display: flex;
  flex-direction: column;
`,v=c.styled.div.withConfig({componentId:"sc-6c9c7b81-1"})`
  background-color: ${e=>e?.isEmptyContainer?l.tokens.primary.surfaceMuted.default:l.tokens.constant.black.default};
  position: relative;
  overflow: hidden;
  height: 0;
  max-height: inherit;

  /* For smaller screen sizes, ensure the video doesn't continue to shrink */
  @media (max-height: 600px) {
    ${e=>{let{containerMaxHeight:t}=e;return(0,g.legacyResponsiveProp)("padding-top",(0,x.default)(t,e=>`min(${e}, 520px)`))}};
  }

  /* For most common screen sizes, ensure the video fits in the screen */
  ${e=>{let{aspectRatioPadding:t,containerMaxHeight:n,shouldCapHeight:i}=e;return(0,g.legacyResponsiveProp)("padding-top",(0,x.default)(n,e=>i?"500px":`min(${t}%, min(calc(100vh - 80px), ${e}))`))}}
`,y=c.styled.div.withConfig({componentId:"sc-6c9c7b81-2"})`
  background-color: ${l.tokens.constant.black.default};
  background-image: ${e=>{let{thumbnailUrl:t}=e;return`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${t})`}};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`,k=c.styled.div.withConfig({componentId:"sc-6c9c7b81-3"})`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  backdrop-filter: blur(30px) brightness(40%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;e.s(["AspectRatioContainer",0,v,"EndScreenButtonWrapper",0,f,"PreviewEnd",0,k,"PreviewImageEnd",0,y],7697535),e.i(9137169);var b=e.i(2848708);let j=(0,c.styled)(u.ButtonShim).withConfig({componentId:"sc-54fdcf42-0"})`
  &&& {
    width: max-content;
    border-color: ${l.tokens.constant.white.default};
    color: ${l.tokens.constant.white.default};

    svg {
      fill: ${l.tokens.constant.white.default};
    }

    &:hover {
      border-color: ${l.tokens.constant.white.default};
    }
  }
`;e.s(["EndPauseScreen",0,e=>{let{fullDuration:c,hasStackedEndState:p=!1,isEnded:m,onClick:g,pledgeUrl:x,onUnlock:v,thumbnailUrl:C,variant:P,isMonetizedPost:w,shouldFadeIn:I=!0}=e,S=(0,b.usePrompt)({duration:c||0,showFirstComponentOnly:p||"contentCard"===P}),T=(0,d.useIsMobile)()&&w,$=e=>I?(0,t.jsx)(h,{duration:400,children:(0,t.jsx)(y,{thumbnailUrl:C??"",children:(0,t.jsx)(k,{children:e})})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(y,{thumbnailUrl:C??"",children:(0,t.jsx)(k,{children:e})})}),B=e=>{T&&v?.(e,"cta_button")},E=T?(0,t.jsx)(n.Trans,{id:"wxIlWB",message:"Unlock now",context:"Button telling the user to join membership or buy post to get access to exclusive content"}):(0,t.jsx)(n.Trans,{id:"X9ooBi",message:"Join to unlock",context:"Button to join membership to access a post"}),A=(0,t.jsx)(j,{size:"sm",icon:a.IconLock,onClick:B,href:x,variant:"tertiary",loggerId:"VideoPlayer-join-now",children:E}),R=(0,t.jsxs)(t.Fragment,{children:[!p&&(0,t.jsx)(a.IconLock,{color:l.tokens.inverted.regular.default,size:"32px"}),(0,t.jsx)(o.Box,{mt:1,mb:2,ph:1,textAlign:"center",children:(0,t.jsx)(r.HeadingText,{as:"div",color:l.tokens.constant.white.default,align:"center",children:S})}),(0,t.jsxs)(f,{children:[A,(0,t.jsx)(s.Spacer,{mt:l.tokens.space.x8}),(0,t.jsx)(u.ButtonShim,{onClick:g,size:"sm",loggerId:"VideoPlayer-watch-again",unfilled:!0,variant:"insetWhite",children:(0,t.jsx)(n.Trans,{id:"ZtWao1",message:"Replay preview",context:"Button to watch the video over again from the beginning"})})]})]}),V=(0,t.jsxs)(t.Fragment,{children:[!p&&(0,t.jsx)(a.IconLock,{color:l.tokens.inverted.regular.default,size:"32px"}),(0,t.jsx)(o.Box,{mt:1,mb:2,ph:1,textAlign:"center",children:(0,t.jsx)(r.HeadingText,{as:"div",color:l.tokens.constant.white.default,align:"center",children:S})}),(0,t.jsxs)(o.Box,{display:"flex",flexDirection:"row",children:[(0,t.jsx)(s.Spacer,{mr:l.tokens.space.x16,children:(0,t.jsx)(u.ButtonShim,{loggerId:"VideoPlayer-join-now",variant:"insetBlack",onClick:B,href:x,corners:"pill",children:E})}),(0,t.jsx)(u.ButtonShim,{loggerId:"VideoPlayer-watch-again",variant:"insetBlack",onClick:g,corners:"pill",children:(0,t.jsx)(n.Trans,{id:"m84Ox6",message:"Watch again",context:"Button to watch the video over again from the beginning"})})]})]}),z=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.BodyText,{size:"lg",color:l.tokens.constant.white.default,children:(0,t.jsx)("strong",{children:S})}),(0,t.jsx)(s.Spacer,{mt:l.tokens.space.x16}),(0,t.jsxs)(f,{children:[(0,t.jsx)(u.ButtonShim,{icon:a.IconLock,href:x,onClick:B,variant:"insetWhite",loggerId:"VideoPlayer-join-now",children:E}),(0,t.jsx)(s.Spacer,{mt:l.tokens.space.x8}),(0,t.jsx)(u.ButtonShim,{loggerId:m?"VideoPlayer-watch-again":"VideoPlayer-resume-playing",onClick:g,unfilled:!0,variant:"insetWhite",children:m?(0,t.jsx)(n.Trans,{id:"ZtWao1",message:"Replay preview",context:"Button to watch the video over again from the beginning"}):(0,t.jsx)(n.Trans,{id:"xQydF1",message:"Resume video",context:"Button to continue watching the video"})})]})]}),M=(0,t.jsxs)(t.Fragment,{children:[!p&&(0,t.jsx)(a.IconLock,{color:l.tokens.inverted.regular.default,size:"32px"}),(0,t.jsx)(o.Box,{mt:1,mb:2,ph:1,textAlign:"center",children:(0,t.jsx)(r.HeadingText,{as:"div",color:l.tokens.constant.white.default,align:"center",children:S})}),(0,t.jsxs)(f,{children:[A,(0,t.jsx)(s.Spacer,{mt:l.tokens.space.x8}),(0,t.jsx)(u.ButtonShim,{onClick:g,size:"sm",loggerId:"VideoPlayer-resume-playing",unfilled:!0,variant:"insetWhite",children:(0,t.jsx)(n.Trans,{id:"a9JvQw",message:"Resume playing",context:"Button to continue watching the video"})})]})]});return $("contentCard"===P?z:m?p?R:V:M)}],6069986);var C=e.i(712139),P=e.i(5733273),w=e.i(3876923),I=e.i(8934581),S=e.i(1108816),T=e.i(8981215),$=e.i(6191788),B=e.i(8475434),E=e.i(1785954),A=e.i(9614022),R=e.i(9838222);let V=c.styled.div.withConfig({componentId:"sc-36ff304e-0"})`
  background-color: ${l.tokens.constant.black.default};
  position: absolute;
  inset: 0;
  margin: auto;
  cursor: ${e=>{let{isPostPreview:t}=e;return t?"initial":"pointer"}};
`,z=c.styled.img.withConfig({componentId:"sc-36ff304e-1"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
`,M=c.styled.div.withConfig({componentId:"sc-36ff304e-2"})`
  background-color: ${l.tokens.constant.black.default};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  inset: 0;
  margin: auto;
`,F=c.styled.video.withConfig({componentId:"sc-36ff304e-3"})`
  max-height: 40vh;
  width: 100%;
  object-fit: contain;
`,L=c.styled.div.withConfig({componentId:"sc-36ff304e-4"})`
  position: absolute;
  bottom: 20px;
  right: 16px;
  background-color: ${l.tokens.constant.blackMuted.default};
  backdrop-filter: blur(20px);
  border-radius: 4px;
  padding: 4px 6px;
`,_=c.styled.div.withConfig({componentId:"sc-36ff304e-5"})`
  position: absolute;
  bottom: ${l.tokens.space.x16};
  left: ${l.tokens.space.x16};

  @media ${(0,T.mediaForBreakpoint)("sm")} {
    bottom: ${l.tokens.space.x24};
    left: ${l.tokens.space.x24};
  }
`,D=c.styled.div.withConfig({componentId:"sc-36ff304e-6"})`
  position: absolute;

  bottom: 20px;
  left: 16px;
`,U=c.styled.div.withConfig({componentId:"sc-36ff304e-7"})`
  position: absolute;

  bottom: ${l.tokens.space.x16};
  right: ${l.tokens.space.x16};

  @media ${(0,T.mediaForBreakpoint)("sm")} {
    bottom: ${l.tokens.space.x24};
    right: ${l.tokens.space.x24};
  }
`,O=c.styled.div.withConfig({componentId:"sc-36ff304e-8"})`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;e.s(["StartingScreen",0,function(e){let{variant:o,thumbnailUrl:a,onBeforePlay:s,duration:c,fullDuration:p,isPreview:h,isPostPreview:m,videoInitialPlayState:g,videoPlayerRef:x,loadMedia:f,loadMediaIfNeeded:v,onPlayError:y,postType:k,showLocalVideoFile:j=!1,showPaidAccessChip:T=!1,disableClickToPlay:W=!1}=e,{i18n:H}=(0,n.useLingui)(),N=!(0,d.useBreakpoint)("md"),X=c||x?.current?.duration||0,Z=g&&p&&g>0&&g<p,K=p&&g&&p-g>1,Q=(0,b.getReadableTime)({duration:"contentCard"===o&&p?Z?p-g:p:X,showFirstComponentOnly:!1}),q=(0,$.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=x.current;null==t||m&&h||(!W||e)&&(v(),f&&(s?.(),t.play()?.catch(e=>{y(e)})))},[m,h,f,s,y,v,x,W]),G=(0,$.useCallback)(()=>{q(!0)},[q]),J=(0,$.useCallback)(()=>{q(!1)},[q]);if(!a)return null;let Y=g&&X?(0,t.jsx)(O,{children:(0,t.jsx)(R.ProgressMeter,{percentage:g/X,noRadius:!0,size:N?"sm":"md"})}):null,ee=(0,t.jsxs)(V,{isPostPreview:m,onClick:J,children:[(0,t.jsx)(z,{src:a,loading:"lazy",alt:""}),(0,t.jsx)(D,{children:(0,t.jsx)(u.ButtonShim,{loggerId:"VideoPlayer-initial-play",variant:"insetBlack",onClick:G,icon:P.IconPlaybackPlay,corners:"pill",disabled:!!m&&!!h,children:!!h&&(0,t.jsx)(n.Trans,{id:"Gxk8iX",message:"Preview",context:"Text describing that the video is a preview"})})}),(0,t.jsx)(L,{children:(0,t.jsx)(i.BodyText,{color:l.tokens.constant.white.default,size:"sm",children:Q})})]}),et=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{children:(0,t.jsx)(u.ButtonShim,{loggerId:"VideoPlayer-initial-play",variant:"insetWhite",onClick:G,icon:P.IconPlaybackPlay,corners:"pill",disabled:!!m&&!!h,size:h?"md":"lg","aria-label":h?(0,B.previewString)(H):(0,B.playString)(H),children:!!h&&(0,t.jsx)(n.Trans,{id:"Gxk8iX",message:"Preview",context:"Text describing that the video is a preview"})})}),(0,t.jsx)(_,{children:T?(0,t.jsx)(A.PaidAccessChip,{isMediaOverlay:!0,readableDurationTime:Q}):(0,t.jsx)(C.Chip,{variant:"insetBlack",children:(0,t.jsxs)(S.Stack,{flexDirection:"row",gap:l.tokens.space.x4,alignItems:"center",children:[k===E.ApiPostType.PODCAST?(0,t.jsx)(w.IconPodcastAlt,{size:"16px",color:l.tokens.constant.white.default}):(0,t.jsx)(I.IconVideoCamera,{size:"16px",color:l.tokens.constant.white.default}),(0,t.jsxs)(r.HeadingText,{color:l.tokens.constant.white.default,size:"sm",children:[Q," ",K?"left":""]})]})})})]}),en=j?(0,t.jsxs)(M,{children:[(0,t.jsx)(F,{src:a}),et]}):(0,t.jsxs)(V,{isPostPreview:m,onClick:J,children:[(0,t.jsx)(z,{src:a,loading:"lazy",alt:""}),et]});return"contentCard"===o?(0,t.jsxs)(t.Fragment,{children:[en,Y]}):(0,t.jsxs)(t.Fragment,{children:[ee,Y]})}],216090)},9838222,e=>{"use strict";var t=e.i(9391398),n=e.i(6112151),i=e.i(226931),o=e.i(9760814),r=e.i(6578438),a=e.i(9916330);let s=o.styled.div.withConfig({componentId:"sc-bfe0cf0d-0"})`
  ${e=>e.width&&`width: ${e.width}px`}
`,l=o.styled.div.withConfig({componentId:"sc-bfe0cf0d-1"})`
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  /* We need to override the default font styling cominng from rich post content for inline media */
  ${e=>e.textColor&&`color: ${e.textColor} !important`}
`,c=o.styled.div.withConfig({componentId:"sc-bfe0cf0d-2"})`
  height: ${e=>(e=>{let{size:t}=e;switch(t){case"sm":return"4px";case"md":return"6px";default:return"8px"}})(e)};
  background-color: ${e=>e.trackColor??i.tokens.border.action.default};
  border-radius: ${e=>!e.noRadius&&i.tokens.radius.sm};
  overflow: hidden;
`,d=o.styled.div.withConfig({componentId:"sc-bfe0cf0d-3"})`
  background-color: ${e=>e.fillColor??i.tokens.content.primary.default};
  width: ${e=>e.formattedPercentage??"100%"};
  height: 100%;
  transition: ${i.tokens.transition.regular.easing} ${i.tokens.transition.regular.duration};
`;e.s(["ProgressMeter",0,function(e){let{percentage:i=0,showPercentage:o=!1,percentageLabel:u="",showLabelAfter:p=!1,width:h,size:m="lg",noRadius:g=!1,trackColor:x,fillColor:f,textColor:v}=e,y=(0,r.useLocale)(),k=(0,a.percentString)({value:i,locale:y}),b=(0,t.jsx)(c,{size:m,noRadius:g,trackColor:x,children:(0,t.jsx)(d,{formattedPercentage:k,fillColor:f})});if(!o)return b;let j=(0,t.jsx)(n.BodyText,{children:(0,t.jsxs)(l,{textColor:v,children:[(0,t.jsx)("span",{children:u}),(0,t.jsx)("span",{children:k})]})});return(0,t.jsxs)(s,{width:h,children:[!p&&j,b,p&&j]})}])},368885,e=>{"use strict";var t=e.i(9391398),n=e.i(8675517);e.s(["PatreonVideoPlayer",0,i=>(0,t.jsx)(n.DynamicImport,{importer:()=>e.A(638651).then(e=>({default:e.PatreonVideoPlayerContents})),...i})])}]);

//# debugId=3a540718-e0f5-deb9-0a35-e128e59cc423
//# sourceMappingURL=15.p2erbpss01.js.map
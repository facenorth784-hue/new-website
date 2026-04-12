;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b4e1dea6-2162-52ff-4467-2806a1930504")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9128405,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconGift",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M18.75 6h-.758c-.54 0-.91-.1-1.147-.335-.238-.236-.343-.606-.353-1.145-.027-1.504-.147-2.196-.682-2.264-.535-.069-1.485.487-3.171 1.477l-.33.194-.309.182-.639-.376c-1.686-.99-2.636-1.546-3.171-1.477s-.655.76-.682 2.264c-.01.54-.115.91-.353 1.145C6.918 5.9 6.547 6 6.008 6H5.25C3.75 6 3 6 2.625 6.375S2.25 7.5 2.25 9c0 .892 0 1.52.08 1.96s.24.693.557.84c.334.153.55.286.682.472.133.186.181.425.181.793v.435c0 3.75 0 5.625.938 6.562S7.5 21 11.25 21h1.5c3.75 0 5.625 0 6.563-.938s.937-2.812.937-6.562v-.435c0-.368.048-.607.18-.793.133-.186.35-.319.683-.473.317-.146.476-.4.556-.84s.081-1.067.081-1.96c0-1.5 0-2.25-.375-2.624S20.25 6 18.75 6m-5.625 11.625c0 .45-.056.73-.225.9-.169.169-.45.225-.9.225s-.73-.056-.9-.225c-.169-.169-.225-.45-.225-.9v-8.25c0-.45.056-.73.225-.9.169-.169.45-.225.9-.225s.731.056.9.225.225.45.225.9z"})})});e.s(["IconGift",0,o])},4174054,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconToteBag",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"m20.948 18.598-.604-4.831-.603-4.831c-.102-.818-.297-1.364-.656-1.706-.36-.343-.884-.48-1.646-.48h-.198c-.277 0-.462-.047-.578-.163s-.163-.302-.164-.58c-.007-1.878-.073-2.818-.666-3.287-.593-.47-1.714-.47-3.833-.47s-3.24 0-3.834.47-.658 1.41-.665 3.288c-.001.278-.048.463-.164.58-.116.115-.301.162-.578.162H6.56c-.766.001-1.291.14-1.65.484-.358.343-.55.889-.652 1.702l-.604 4.83-.604 4.832c-.118.941-.04 1.542.303 1.907S4.307 21 5.255 21h13.487c.949 0 1.56-.13 1.902-.495.344-.365.421-.966.303-1.907M14.25 6.009c0 .278-.047.463-.163.579s-.302.162-.58.162h-3.014c-.277 0-.463-.046-.58-.162-.115-.116-.162-.301-.162-.579V6c0-.75 0-1.124.187-1.312.188-.187.563-.187 1.313-.187h1.5c.75 0 1.125 0 1.312.187.188.188.188.563.188 1.313z"})})});e.s(["IconToteBag",0,o])},2416142,e=>{"use strict";var t=e.i(9391398),o=e.i(2358280),i=e.i(6112151),n=e.i(5483377),s=e.i(5363035),r=e.i(4540648),a=e.i(2859206),l=e.i(1108816),c=e.i(226931),d=e.i(9760814),u=e.i(4588351);let p=e=>{let{qrCodeUrl:n,subtitle:d}=e;return(0,t.jsxs)(l.Stack,{justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(r.IconPatreon,{color:c.tokens.content.regular.default,size:"48px"}),(0,t.jsx)(a.Spacer,{mb:c.tokens.space.x12}),(0,t.jsx)(s.HeadingText,{as:"h1",size:"lg",children:(0,t.jsx)(o.Trans,{id:"U0HL2f",message:"Get the Patreon app",context:"Text shown above a QR code telling users they can scan it to open the app on their phone"})}),(0,t.jsx)(a.Spacer,{mb:c.tokens.space.x4}),(0,t.jsx)(i.BodyText,{as:"h2",size:"lg",color:c.tokens.content.muted.default,children:d||(0,t.jsx)(o.Trans,{id:"vsBaba",message:"Get the app for a better experience.",context:"Text shown above a QR code encouraging users to download the app since it is a better experience"})}),(0,t.jsx)(a.Spacer,{mb:c.tokens.space.x24}),(0,t.jsx)(m,{children:(0,t.jsx)(u.QrCode,{url:n})})]})},m=d.styled.div.withConfig({componentId:"sc-d211f9df-0"})`
  background: ${c.tokens.primary.surfaceMuted.default};
  padding: ${c.tokens.space.x32};
  border-radius: ${c.tokens.radius.xl};
  border: 2px solid ${c.tokens.border.muted.default};
  box-shadow: ${c.tokens.boxShadow.high};
  
  canvas {
    max-width: 240px;
    max-height: 240px;
    width: auto;
    height: auto;
  }
`;e.s(["AppQrCodeDialog",0,e=>{let{isOpen:o,onCloseRequest:i,qrCodeUrl:s,subtitle:r}=e;return(0,t.jsx)(n.Dialog,{loggerId:"app-qr-code-dialog",id:"app-qr-code-dialog",isOpen:o,onCloseRequest:i,size:"sm",children:(0,t.jsx)(p,{qrCodeUrl:s,subtitle:r})})},"AppQrCodeDialogContent",0,p])},865106,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconUserFriends",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M14.25 18.39c0 .514-.266.79-1.243.94s-2.664.17-5.507.17-4.53-.02-5.507-.17S.75 18.904.75 18.39c0-.385.11-1.645.8-2.902.689-1.256 1.958-2.509 4.278-2.88.34-.055.53-.244.557-.452.025-.208-.115-.437-.438-.57a2.65 2.65 0 0 1-1.358-1.222c-.306-.569-.464-1.297-.464-2.182 0-1.214.296-2.134.865-2.751.57-.617 1.414-.931 2.51-.931s1.94.314 2.51.93c.57.618.865 1.538.865 2.752 0 .885-.158 1.613-.464 2.182a2.65 2.65 0 0 1-1.358 1.222c-.323.133-.463.361-.438.57s.217.397.557.452c2.32.371 3.59 1.624 4.279 2.88.69 1.257.799 2.517.799 2.903m3.922-5.782c-.34-.055-.531-.244-.557-.452-.025-.209.115-.437.438-.57a2.65 2.65 0 0 0 1.358-1.222c.306-.569.464-1.297.464-2.182 0-1.214-.296-2.134-.865-2.751-.57-.617-1.414-.931-2.51-.931s-1.94.314-2.51.93c-.57.618-.865 1.538-.865 2.752 0 .885.158 1.613.464 2.182q.462.853 1.358 1.222c.323.133.463.357.436.563-.026.207-.217.395-.555.459-.459.086-.761.215-.879.415s-.05.471.233.842a7.5 7.5 0 0 1 1.223 2.45 8.7 8.7 0 0 1 .345 2.435q-.001.365.184.557t.566.193c2.843 0 4.53-.02 5.507-.17.977-.149 1.243-.426 1.243-.94 0-.385-.11-1.645-.8-2.901-.689-1.257-1.958-2.51-4.278-2.881"})})});e.s(["IconUserFriends",0,o])},682667,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconIncome",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M23.25 16.5c0 1.035-.42 1.973-1.098 2.652A3.74 3.74 0 0 1 19.5 20.25a3.74 3.74 0 0 1-2.652-1.098A3.74 3.74 0 0 1 15.75 16.5c0-1.036.42-1.973 1.098-2.652A3.74 3.74 0 0 1 19.5 12.75c1.035 0 1.973.42 2.652 1.098A3.74 3.74 0 0 1 23.25 16.5m-9.512-.756H8.176c-.365 0-.614-.047-.788-.184s-.274-.364-.34-.723q-.151-.817-.586-1.318a2.16 2.16 0 0 0-1.141-.676c-.328-.081-.533-.182-.656-.347s-.163-.395-.163-.733v-1.026c0-.338.04-.568.163-.733s.328-.266.656-.347a2.16 2.16 0 0 0 1.14-.676q.436-.5.587-1.318c.066-.359.166-.586.34-.723s.423-.184.788-.184h7.648c.365 0 .614.047.788.184s.274.364.34.723q.151.818.587 1.318t1.14.676c.328.082.533.182.656.347s.163.395.163.733c0 .19.034.317.115.398s.21.115.399.115h1.226c.189 0 .317-.034.398-.115.08-.081.114-.21.114-.398-.002-3.119-.046-4.678-.911-5.457-.865-.78-2.552-.78-5.839-.78H9c-3.375 0-5.062 0-5.906.844-.844.843-.844 2.53-.844 5.906s0 5.062.844 5.906S5.625 18 9 18h4.738c.189 0 .317-.034.398-.114.08-.081.114-.21.114-.398v-1.232c0-.188-.034-.316-.114-.397s-.21-.115-.398-.115M12 7.874c-.974 0-1.724.288-2.23.854-.507.566-.77 1.41-.77 2.522 0 1.113.263 1.956.77 2.522.506.566 1.256.853 2.23.853s1.724-.287 2.23-.853c.507-.566.77-1.41.77-2.522 0-1.113-.263-1.957-.77-2.522-.506-.566-1.256-.853-2.23-.853"})})});e.s(["IconIncome",0,o])},7071747,e=>{"use strict";var t=e.i(2859206),o=e.i(8981215),i=e.i(226931),n=e.i(9760814),s=e.i(2550472);let r="80px",a="130px",l="16/9",c="60px",d="18px",u=n.styled.div.withConfig({componentId:"sc-d51d0591-0"})`
  height: ${e=>`${"xl"===e.size?a:"sm"===e.size?c:r}`};
  min-width: ${e=>"xl"===e.size?"unset":"sm"===e.size?c:r};
  width: ${e=>"xl"===e.size?a:"unset"};
  background-color: ${i.tokens.constant.white.default};
  background-image: ${e=>"string"==typeof e.imgUrl?`url(${e.imgUrl})`:"none"};
  background-size: cover;
  background-position: center center;
  border-radius: ${i.tokens.radius.md};
  box-shadow: inset 0 0 0 ${i.tokens.borderWidth.thin} ${i.tokens.border.muted.default};
  background-repeat: no-repeat;
  ${e=>e.blur&&"filter: blur(5px)"};
  ${e=>{let{size:t}=e;return`
    ${"xl"===t&&`aspect-ratio: ${l};`}`}}
  ${e=>{let{noFlexShrink:t}=e;return t&&"flex-shrink: 0;"}};
`,p=n.styled.div.withConfig({componentId:"sc-d51d0591-1"})`
  border-radius: ${i.tokens.radius.md};
  overflow: hidden;
`,m=n.styled.div.withConfig({componentId:"sc-d51d0591-2"})`
  background: ${i.tokens.content.primary.default};
  height: ${e=>`${"xl"===e.size?a:"sm"===e.size?c:r}`};
  min-width: ${e=>"xl"===e.size?"unset":"sm"===e.size?c:r};
  width: ${e=>"xl"===e.size?a:"unset"};
  border-radius: ${i.tokens.radius.md};
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 ${i.tokens.borderWidth.thin} ${i.tokens.border.muted.default};
  ${e=>{let{size:t}=e;return`
    ${"xl"===t&&`aspect-ratio: ${l};`}`}}
`,h=n.styled.div.withConfig({componentId:"sc-d51d0591-3"})`
  opacity: 0.2;
  filter: blur(5px);
  height: ${e=>`${"xl"===e.size?a:"sm"===e.size?c:r}`};
  min-width: ${e=>"xl"===e.size?"unset":"sm"===e.size?c:r};
  width: ${e=>"xl"===e.size?a:"unset"};
  border-radius: ${i.tokens.radius.md};
  background-color: ${i.tokens.constant.white.default};
  background-image: ${e=>e.avatarPhotoUrl?`url(${e.avatarPhotoUrl})`:"unset"};
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 ${i.tokens.borderWidth.thin} ${i.tokens.border.muted.default};
`,g=(0,n.styled)(s.ButtonShim).withConfig({componentId:"sc-d51d0591-4"})`
  &&& {
    padding-right: 8px;
    padding-left: 8px;
    width: 100%;
    justify-content: flex-start;
    &:hover {
      background-color: ${i.tokens.bg.baseAlt.hover};
      box-shadow: none;
    }
  }
`,x=(0,n.styled)(t.Spacer).withConfig({componentId:"sc-d51d0591-5"})`
  &&& {
    width: ${d};
    height: ${d};
    background: ${i.tokens.constant.blackMuted.default};
    backdrop-filter: blur(2px);
    border-radius: ${i.tokens.radius.sm};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`,w=(0,n.styled)(t.Spacer).withConfig({componentId:"sc-d51d0591-6"})`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,v=(0,n.styled)(t.Spacer).withConfig({componentId:"sc-d51d0591-7"})`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 56px;
  }
`,b=n.styled.div.withConfig({componentId:"sc-d51d0591-8"})`
  display: flex;
  align-items: flex-start;
`,f=n.styled.div.withConfig({componentId:"sc-d51d0591-9"})`
  display: flex;
  justify-content: ${e=>e.hasRightAction?"space-between":"flex-end"};

  // For the xs breakpoint, overlay the actions bar on top of the preview media
  position: absolute;
  top: ${i.tokens.space.x24};
  width: calc(100% - ${i.tokens.space.x24} * 2);
  z-index: ${i.tokens.layer.z3};

  // For the sm and above breakpoints, display the actions bar normally above the preview media
  @media ${(0,o.mediaForBreakpoint)("sm")} {
    position: static;
    width: 100%;
    padding-bottom: ${i.tokens.space.x24};
    z-index: unset;
  }
`,C=(0,n.styled)(s.ButtonShim).withConfig({componentId:"sc-d51d0591-10"})`
  &&& {
    width: 100%;
  }
`,y=n.styled.div.withConfig({componentId:"sc-d51d0591-11"})`
  height: 200px;
  width: 200px;
  border-radius: ${i.tokens.radius.md};
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 ${i.tokens.borderWidth.thin} ${i.tokens.border.muted.default};
  background-repeat: no-repeat;
  background-image: ${e=>{let{src:t}=e;return"string"==typeof t?`url(${t})`:"none"}};

  @media ${(0,o.mediaForBreakpoint)("sm")} {
    height: 346px;
    min-width: 346px;
  }
`,P=n.styled.div.withConfig({componentId:"sc-d51d0591-12"})`
  height: 100px;
  width: 100px;
  border-radius: ${i.tokens.radius.md};
  background-color: ${i.tokens.bg.page.default};
  background-image: ${e=>{let{src:t}=e;return"string"==typeof t?`url(${t})`:"none"}};
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 ${i.tokens.borderWidth.thin} ${i.tokens.border.muted.default};
  background-repeat: no-repeat;

  @media ${(0,o.mediaForBreakpoint)("sm")} {
    height: ${e=>{let{largeThumbnail:t}=e;return t?"180px":"150px"}};
    min-width: ${e=>{let{largeThumbnail:t}=e;return t?"180px":"150px"}};
  }
`,k=n.styled.div.withConfig({componentId:"sc-d51d0591-13"})`
  padding-bottom: ${i.tokens.space.x24};

  @media ${(0,o.mediaForBreakpoint)("sm")} {
    padding-top: ${i.tokens.space.x24};
  }
`,_=n.styled.div.withConfig({componentId:"sc-d51d0591-14"})`
  display: flex;
  flex-direction: column;
  gap: ${i.tokens.space.x32};

  @media ${(0,o.mediaForBreakpoint)("lg")} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`,E=n.styled.div.withConfig({componentId:"sc-d51d0591-15"})`
  display: flex;
  gap: ${i.tokens.space.x24};

    flex-direction: column;
    justify-content: start;
`,T=n.styled.div.withConfig({componentId:"sc-d51d0591-16"})`
  aspect-ratio: 16 / 9;
  margin: ${e=>{let{isCollectionEditorPreview:t}=e;return t?"0 -16px":"0 -32px"}};

  @media ${(0,o.mediaForBreakpoint)("sm")} {
    margin: 0;
    border-radius: ${e=>{let{isEmailHeader:t}=e;return t?"0":i.tokens.radius.md}};
    overflow: hidden;
  }

  @media ${(0,o.mediaForBreakpoint)("lg")} {
    width: ${e=>{let{isCreatorWorldHome:t}=e;return t?"unset":"615px"}};
    min-width: ${e=>{let{isCreatorWorldHome:t}=e;return t?"unset":"350px"}}; // min width for audio player to render correctly
    max-width: ${e=>{let{isCollectionEditorPreview:t}=e;return t?"350px":"unset"}};
  }
`,A=n.styled.div.withConfig({componentId:"sc-d51d0591-17"})`
  overflow: hidden; // stop very long titles from preventing this half to flex shrink
`;e.s(["ActionButtonWrapper",0,b,"ActionsBarOnPreviewMedia",0,f,"CollectionCoverThumbnailPlaceHolder",0,P,"CollectionCoverThumbnailXL",0,y,"CollectionThumbnail",0,u,"EmptyCreateCollectionContainer",0,v,"GenericThumbnail",0,h,"GenericThumbnailBackGround",0,m,"IconPlayContainer",0,w,"IconPlayPlaceHolder",0,x,"PremiumCollectionsCoverContainer",0,k,"PremiumCollectionsCoverCtaStack",0,E,"PremiumCollectionsCoverMediaWrapper",0,T,"PremiumCollectionsCoverPreviewMediaStack",0,_,"PremiumCollectionsTitleWrapper",0,A,"StyledBuyNowMobileButton",0,C,"StyledNoHoverButton",0,g,"ThumbnailContainer",0,p])},6277365,e=>{"use strict";var t=e.i(9391398),o=e.i(2336705),i=e.i(5265535),n=e.i(5137682),s=e.i(5345957),r=e.i(3876923),a=e.i(6712976),l=e.i(508032),c=e.i(8934581),d=e.i(226931),u=e.i(1785954);let p=e=>{let{postType:p,iconSize:m,iconColor:h,verticalAlign:g}=e,x=m||"48px",w=h||d.tokens.inverted.regular.default;switch(p){case u.ApiPostType.TEXT_ONLY:return(0,t.jsx)(l.IconPosts,{size:x,color:w,verticalAlign:g});case u.ApiPostType.POLL:return(0,t.jsx)(a.IconPoll,{size:x,color:w,verticalAlign:g});case u.ApiPostType.PODCAST:return(0,t.jsx)(r.IconPodcastAlt,{size:x,color:w,verticalAlign:g});case u.ApiPostType.LivestreamNative:case u.ApiPostType.LIVESTREAM:case u.ApiPostType.LIVESTREAM_YOUTUBE:case u.ApiPostType.LIVESTREAM_CROWDCAST:case u.ApiPostType.LIVESTREAM_VIMEO:return(0,t.jsx)(i.IconLivestream,{size:x,color:w,verticalAlign:g});case u.ApiPostType.VIDEO_EMBED:case u.ApiPostType.VIDEO_EXTERNAL_FILE:return(0,t.jsx)(c.IconVideoCamera,{size:x,color:w,verticalAlign:g});case u.ApiPostType.AUDIO_EMBED:case u.ApiPostType.AUDIO_FILE:return(0,t.jsx)(n.IconMicrophone,{size:x,color:w,verticalAlign:g});case u.ApiPostType.LINK:return(0,t.jsx)(o.IconEditorLink,{size:x,color:w,verticalAlign:g});case u.ApiPostType.IMAGE_EMBED:case u.ApiPostType.IMAGE_FILE:return(0,t.jsx)(s.IconPhoto,{size:x,color:w,verticalAlign:g});default:return(0,t.jsx)(l.IconPosts,{size:x,color:w,verticalAlign:g})}};e.s(["ThumbnailIconForPostType",0,e=>{let{postType:t,iconSize:o,iconColor:i}=e;return p({postType:t,iconSize:o,iconColor:i})},"getThumbnailIconForPostType",0,p])},4904225,e=>{e.v({flexContainer:"CondensedPostImage-module__89UrVW__flexContainer",playButtonContainer:"CondensedPostImage-module__89UrVW__playButtonContainer",relativeContainer:"CondensedPostImage-module__89UrVW__relativeContainer",thumbnailIconContainer:"CondensedPostImage-module__89UrVW__thumbnailIconContainer"})},33234,e=>{"use strict";var t=e.i(9391398),o=e.i(3106453),i=e.i(6558821),n=e.i(2859206),s=e.i(226931),r=e.i(7071747),a=e.i(1785954),l=e.i(6277365),c=e.i(4904225);let d=e=>{let{size:o,avatarPhotoUrl:i,postType:s}=e;return(0,t.jsxs)(n.Spacer,{className:c.default.flexContainer,children:[(0,t.jsx)(r.GenericThumbnailBackGround,{size:o,children:(0,t.jsx)(r.GenericThumbnail,{avatarPhotoUrl:i,size:o})}),(0,t.jsx)(n.Spacer,{className:c.default.thumbnailIconContainer,children:(0,l.getThumbnailIconForPostType)({postType:s,iconSize:"32px"})})]})};e.s(["CondensedPostImage",0,function(e){let{imageUrl:l,avatarPhotoUrl:u,postType:p,freeMemberLayout:m=!1,mediaOverride:h}=e;return(0,t.jsxs)(n.Spacer,{className:c.default.relativeContainer,children:[h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ResponsiveCssVisibility,{matchMin:"md",children:h}),(0,t.jsx)(i.ResponsiveCssVisibility,{matchMax:"sm",children:l?(0,t.jsx)(r.CollectionThumbnail,{imgUrl:l,size:"xl"}):(0,t.jsx)(d,{avatarPhotoUrl:u,postType:p,size:"xl"})})]}):l?m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ResponsiveCssVisibility,{matchMin:"md",children:(0,t.jsx)(r.CollectionThumbnail,{imgUrl:l,size:"xl"})}),(0,t.jsx)(i.ResponsiveCssVisibility,{matchMax:"sm",children:(0,t.jsx)(r.CollectionThumbnail,{imgUrl:l,size:"md"})})]}):(0,t.jsx)(r.CollectionThumbnail,{imgUrl:l,size:"md"}):m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ResponsiveCssVisibility,{matchMin:"md",children:(0,t.jsx)(d,{avatarPhotoUrl:u,postType:p,size:"xl"})}),(0,t.jsx)(i.ResponsiveCssVisibility,{matchMax:"sm",children:(0,t.jsx)(d,{avatarPhotoUrl:u,postType:p,size:"md"})})]}):(0,t.jsx)(d,{avatarPhotoUrl:u,postType:p,size:"md"}),!h&&l&&(p===a.ApiPostType.VIDEO_EMBED||p===a.ApiPostType.VIDEO_EXTERNAL_FILE)?(0,t.jsx)(n.Spacer,{className:c.default.playButtonContainer,children:(0,t.jsx)(o.IconPlaybackPlayButton,{size:"48px",color:s.tokens.constant.blackMuted.default})}):null]})}],33234)},5349612,e=>{"use strict";var t=e.i(7308002);e.i(708488);let o=()=>"u">typeof window&&window.location?{pathname:window.location.pathname,searchParams:new URLSearchParams(window.location.search)}:{},i=(e,t)=>{let o=new URL(window.location.href);e.pathname&&(o.pathname=e.pathname),e.searchParams&&(o.search=e.searchParams.toString()),null!=t&&t.replace?window.history.replaceState(null,"",o):window.history.pushState(null,"",o)},n=e=>(window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e));e.s(["atomWithLocation",0,function(e){var s;let r=(null==e?void 0:e.getLocation)||o,a=(null==e?void 0:e.applyLocation)||i,l=(null==e?void 0:e.subscribe)||n,c=(0,t.atom)(null!=(s=null==e?void 0:e.preloaded)?s:r());return c.onMount=e=>{let t=()=>e(r()),o=l(t);return t(),o},(0,t.atom)(e=>e(c),(t,o,i)=>{o(c,i),a(t(c),e)})}])},1719202,e=>{"use strict";e.s(["MWEB_LOADING_PARAMETER_KEY",0,"isLoading","POST_EDITOR_DUPLICATE_POST_QUERY_PARAM",0,"duplicate_post","POST_EDITOR_IS_FOR_PRELOADING_QUERY_PARAM",0,"isForPreloading","POST_EDITOR_PURCHASE_ONLY_QUERY_PARAM",0,"purchase_only","POST_EDITOR_SELL_POST_QUERY_PARAM",0,"sell_post","TRUE_QUERY_PARAM_VALUE",0,"true"])},7447196,e=>{"use strict";var t,o=e.i(1821384),i=((t={}).ALL="all",t.ALL_MEMBERS="all_members",t.PAID_MEMBERS="paid_members",t.NONE="none",t);let n=o.z.object({type:o.z.literal("post"),id:o.z.string()});e.s(["DefaultPostSchema",0,n,"PostLevelCommentingAccess",()=>i])},9879142,e=>{"use strict";var t=e.i(6191788),o=e.i(3885723),i=e.i(7447196),n=e.i(4071301),s=e.i(1147204);let r=(0,n.createClientSidePatreonRequest)({method:"POST",pathname:()=>"/posts/new",schema:i.DefaultPostSchema,content:e=>{let{postType:t,postVisibility:o,purchaseOnly:i}=e,n={data:{type:"post",attributes:{}}};return t&&(n.data.attributes.post_type=t),o&&(n.data.attributes.post_visibility=o),i&&(n.data.attributes.purchase_only=i),JSON.stringify(n)}});e.s(["useNewPostCreation",0,function(){let e=(0,o.useFeatureFlag)("creation_new_post_revamp"),[i,n]=(0,t.useState)(!1),{push:a}=(0,s.useNavigation)();return{isLoading:i,handleCreatePost:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(e){n(!0);let e=await r(t);if("errors"in e&&n(!1),"data"in e){let o=e.data.id,i=`/posts/${o}/edit${t.purchaseOnly?"?purchase_only=true":""}`;t.openInANewTab?window.open(i,"_blank"):a(i)}}else o?.()}}}])},3235681,e=>{"use strict";var t=e.i(1719202);let o=`/posts/new?postType=text_only&${t.POST_EDITOR_PURCHASE_ONLY_QUERY_PARAM}=true`;e.s(["COLLECTIONS_ROUTE",0,"/collections","DRAFT_POSTS_ROUTE",0,"/posts/drafts","DROPS_ROUTE",0,"/posts/drops","HIDDEN_POSTS_ROUTE",0,"/posts/hidden","LIBRARY_ROUTE",0,"/library","NEW_POST_EDITOR_ROUTE",0,"/posts/new?postType=text_only","NEW_PURCHASE_ONLY_POST_ROUTE",0,o,"POST_PREVIEW_DRAFT_REGEX",0,/\/posts\/preview\/draft/,"POST_PREVIEW_WINDOW_REGEX",0,/\/posts\/[\w-]*\/preview/,"PUBLISHED_POSTS_ROUTE",0,"/posts/published","QUIPS_ROUTE",0,"/library/quips"])},240284,8322116,6098255,e=>{"use strict";var t,o=e.i(9391398),i=e.i(6191788),n=((t={}).Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Control="Control",t.Alt="Alt",t.CapsLock="CapsLock",t.Escape="Escape",t.Esc="Esc",t.Space=" ",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Left="Left",t.Up="Up",t.Right="Right",t.Down="Down",t.Insert="Insert",t.Delete="Delete",t.Zero="0",t.ClosedParen=")",t.One="1",t.ExclamationMark="!",t.Two="2",t.AtSign="@",t.Three="3",t.PoundSign="£",t.Hash="#",t.Four="4",t.DollarSign="$",t.Five="5",t.PercentSign="%",t.Six="6",t.Caret="^",t.Hat="^",t.Seven="7",t.Ampersand="&",t.Eight="8",t.Star="*",t.Asterisk="*",t.Nine="9",t.OpenParen="(",t.a="a",t.b="b",t.c="c",t.d="d",t.e="e",t.f="f",t.g="g",t.h="h",t.i="i",t.j="j",t.k="k",t.l="l",t.m="m",t.n="n",t.o="o",t.p="p",t.q="q",t.r="r",t.s="s",t.t="t",t.u="u",t.v="v",t.w="w",t.x="x",t.y="y",t.z="z",t.A="A",t.B="B",t.C="C",t.D="D",t.E="E",t.F="F",t.G="G",t.H="H",t.I="I",t.J="J",t.K="K",t.L="L",t.M="M",t.N="N",t.O="O",t.P="P",t.Q="Q",t.R="R",t.S="S",t.T="T",t.U="U",t.V="V",t.W="W",t.X="X",t.Y="Y",t.Z="Z",t.Meta="Meta",t.LeftWindowKey="Meta",t.RightWindowKey="Meta",t.Numpad0="0",t.Numpad1="1",t.Numpad2="2",t.Numpad3="3",t.Numpad4="4",t.Numpad5="5",t.Numpad6="6",t.Numpad7="7",t.Numpad8="8",t.Numpad9="9",t.Multiply="*",t.Add="+",t.Subtract="-",t.DecimalPoint=".",t.MSDecimalPoint="Decimal",t.Divide="/",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.SemiColon=";",t.Equals="=",t.Comma=",",t.Dash="-",t.Period=".",t.UnderScore="_",t.PlusSign="+",t.ForwardSlash="/",t.Tilde="~",t.GraveAccent="`",t.OpenBracket="[",t.ClosedBracket="]",t.Quote="'",t);function s(e,t){(0,i.useEffect)(()=>{let o=o=>{e===o.key&&t(o)};return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[t,e])}function r(){}function a(){return(0,i.useLayoutEffect)(()=>{let e=document.body,t=window.scrollY;return e.style.overflow="hidden",e.style.position="fixed",e.style.top=`-${t}px`,e.style.width="100%",()=>{e.style.overflow="",e.style.position="",e.style.top="",e.style.width="",t>0&&window.scrollTo(0,t)}},[]),null}e.s(["Key",()=>n],8322116),e.s(["useKeyListener",0,s],6098255);let l=(0,i.createContext)({closeMobileNav:r,disableEscapeKey:r,enableEscapeKey:r,isForceSlimEnabled:!1,isMobileNavOpen:!1,isTransparent:!1,openMobileNav:r,setIsForceSlimEnabled:r});e.s(["NavigationContextProvider",0,function(e){let{children:t,isForceSlim:r,isTransparent:c=!1}=e,[d,u]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!0),[h,g]=(0,i.useState)(r||!1);s(n.Escape,(0,i.useCallback)(()=>{d&&p&&u(!1)},[d,p]));let x=(0,i.useMemo)(()=>({isForceSlimEnabled:h,isMobileNavOpen:d,closeMobileNav:()=>u(!1),disableEscapeKey:()=>m(!1),enableEscapeKey:()=>m(!0),openMobileNav:()=>u(!0),setIsForceSlimEnabled:g,isTransparent:c}),[h,d,c]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Provider,{value:x,children:t}),d?(0,o.jsx)(a,{}):null]})},"useNavigation",0,()=>(0,i.useContext)(l)],240284)},4231964,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconMembershipCollection",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M20.25 13.5c0 3.75 0 5.625-.937 6.563S16.5 21 12.75 21h-1.5c-3.75 0-5.625 0-6.562-.937S3.75 17.25 3.75 13.5s0-5.625.938-6.562S7.5 6 11.25 6h1.5c3.75 0 5.625 0 6.563.938s.937 2.812.937 6.562m-5.84-2.247c-.36-.003-.525.008-.627-.066s-.143-.234-.257-.576C12.92 8.787 12.46 7.875 12 7.875s-.92.912-1.526 2.736c-.114.342-.155.502-.257.576s-.267.063-.628.066c-1.924.012-2.934.167-3.077.604s.585 1.156 2.134 2.295c.29.214.43.302.469.422.04.12-.022.273-.131.617-.583 1.831-.748 2.84-.376 3.11.373.27 1.281-.198 2.845-1.318.294-.21.42-.315.547-.315s.253.105.547.315c1.563 1.12 2.472 1.587 2.844 1.317s.208-1.277-.375-3.11c-.11-.343-.17-.496-.131-.616s.178-.208.469-.422c1.55-1.14 2.275-1.858 2.133-2.295s-1.152-.592-3.076-.604M6.06 4.06c-.14.04-.27-.04-.27-.04h.01a.32.32 0 0 1-.03-.29c.1-.29.23-.52.4-.69.78-.79 2.36-.79 5.52-.79h1.15c3.15 0 4.73 0 5.52.79.17.17.3.41.4.71.05.13-.05.24-.05.24s-.1.1-.24.07c-1.29-.31-3.03-.31-5.53-.31h-1.36c-2.5 0-4.23.01-5.52.31"})})});e.s(["IconMembershipCollection",0,o])},4603186,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconPhone",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M12 2.25c-3.375 0-5.062 0-5.906.844S5.25 5.625 5.25 9v6c0 3.375 0 5.063.844 5.906.844.844 2.531.844 5.906.844s5.063 0 5.906-.844c.844-.844.844-2.531.844-5.906V9c0-3.375 0-5.062-.844-5.906S15.375 2.25 12 2.25m2.625 17.25h-5.25c-.449 0-.73-.057-.9-.226-.168-.169-.225-.45-.225-.899s.057-.73.226-.9c.169-.168.45-.225.899-.225h5.25c.449 0 .73.057.9.226.168.169.225.45.225.899 0 .45-.057.73-.226.9-.169.168-.45.225-.899.225"})})});e.s(["IconPhone",0,o])},9174314,426082,e=>{"use strict";var t=e.i(9391398),o=e.i(6900019),i=e.i(366182),n=e.i(226931),s=e.i(6191788),r=e.i(4489061),a=e.i(2743272),l=e.i(2802728),c=e.i(8366755);function d(e){let{currentColorMode:t}=(0,r.useTokenModes)(),i=(0,a.useTokenValueCache)(),n=i.default,{inputColor:d,tokenMaps:u}=(0,o.useColorSystemContainerState)(),p="default"!==d?(0,l.getCacheKey)({inputColor:d,key:u.key}):void 0,{light:m,dark:h}=(0,s.useMemo)(()=>{let t=(Array.isArray(e)?e:[e]).map(e=>{let t=(0,c.getTokenName)(e);return{tokenName:t,light:p?i[p].light?.[t]??n.light[t]:n.light[t],dark:p?i[p].dark?.[t]??n.dark[t]:n.dark[t]}});return{light:t.filter(e=>{let{light:t}=e;return!!t}).map(e=>{let{tokenName:t,light:o}=e;return`${t}: ${o};`}).join(" "),dark:t.filter(e=>{let{dark:t}=e;return!!t}).map(e=>{let{tokenName:t,dark:o}=e;return`${t}: ${o};`}).join(" ")}},[p,n.light,n.dark,i,e]);return(0,s.useMemo)(()=>"light"===t||0===h.length?m:"dark"===t?h:`
      ${m}
  
      @media (prefers-color-scheme: dark) {
        ${h}
      }
    `,[t,h,m])}e.s(["useExtractedTokenCss",0,d],426082);var u=e.i(7308002),p=e.i(9598373),m=e.i(9760814);let h=(0,u.atom)(void 0);function g(){return(0,p.useAtom)(h)}function x(){let e=d([n.tokens.bg.page.default,n.tokens.bg.pageAlt.default]);return(0,t.jsx)(w,{tokenDefinitions:e})}let w=m.createGlobalStyle`
  :root {
    ${e=>{let{tokenDefinitions:t}=e;return t}}
  }
`;e.s(["GlobalCreatorColorContainer",0,function(e){let{pageThemeColor:n,children:r}=e,[a]=g(),l=a??n??void 0,c=l&&(0,i.isValidHex)(l),[d,u]=(0,s.useState)(l);return(0,s.useEffect)(()=>{(c||void 0===l)&&u(l)},[l,c]),(0,t.jsxs)(o.ColorSystemContainer,{color:d,children:[(0,t.jsx)(x,{}),r]})},"useLiveGlobalCreatorColor",0,g],9174314)},4437265,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconPage",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M8.25 12.75v6.64c0 .81-.013 1.224-.227 1.415-.215.191-.63.159-1.437.076-1.79-.184-2.687-.655-3.136-1.861S3 15.873 3 12.75v-.016c0-.742 0-1.113.186-1.298s.557-.186 1.299-.186H6.75c.752 0 1.127-.001 1.314.186s.186.562.186 1.314m-3.656-3h14.812c.797 0 1.188-.012 1.369-.224.18-.211.15-.622.108-1.419-.118-2.206-.49-3.295-1.664-3.833s-3.15-.524-6.474-.524h-1.49c-3.324 0-5.273-.012-6.434.526-1.16.539-1.533 1.628-1.704 3.831-.061.796-.091 1.207.094 1.418.185.212.586.225 1.383.225M12.75 21c4.125 0 6.188 0 7.219-1.031S21 16.875 21 12.75v-.016c0-.742 0-1.113-.186-1.299-.185-.185-.557-.185-1.299-.185H11.25c-.752 0-1.127-.001-1.314.186s-.186.562-.186 1.314v6.765c0 .745-.001 1.116.184 1.301s.556.184 1.3.184z"})})});e.s(["IconPage",0,o])},9696782,e=>{"use strict";var t=e.i(9391398),o=e.i(8205331),i=e.i(130074),n=e.i(6191788),s=e.i(7680435),r=e.i(6018844);function a(){return 0}function l(e,t){return e[t]?.badgeValue??0}let c=(0,n.createContext)({getCreatorBadgeCount:a,getCreatorNotificationsBadgeCount:a,showNewPromotionsBadge:!1,showNewLibraryBadge:!1,showNewRefundsBadge:!1,getPatronBadgeCount:a,getPatronMembershipBadgeCount:a,getMemberNotificationsBadgeCount:a});e.s(["BadgeContextProvider",0,function(e){let{children:a}=e,d=(0,s.useCurrentUser)(),[u,,p]=(0,o.useNion)({dataKey:"badges",endpoint:(0,r.buildUrl)("badges"),fetchOnMount:!0},[]),m=(0,n.useMemo)(()=>(0,i.default)(u,"id"),[u]),h=d?.id,g=d?.campaign?.id,x=`campaign:${g}:notif-feed`,w=!!(p?.isLoaded&&!l(m,`badges_show_new_promotions_ga:${h}`)),v=!!(p?.isLoaded&&!l(m,`badges_show_new_library:${h}`)),b=!!(p?.isLoaded&&!l(m,`badges_show_new_refunds:${h}`)),f=(0,n.useMemo)(()=>({getCreatorBadgeCount:()=>l(m,`campaign:${g}:total`),getCreatorNotificationsBadgeCount:()=>l(m,x),getPatronBadgeCount:()=>l(m,`member:${h}:total`),getPatronMembershipBadgeCount:e=>l(m,`member:${h}:membership:${e}:total`),getMemberNotificationsBadgeCount:()=>l(m,`member:${h}:notif-feed`),showNewPromotionsBadge:w,showNewLibraryBadge:v,showNewRefundsBadge:b}),[m,g,h,x,w,v,b]);return(0,t.jsx)(c.Provider,{value:f,children:a})},"useBadges",0,()=>(0,n.useContext)(c)])},3081661,e=>{"use strict";var t=e.i(2358280),o=e.i(4231964),i=e.i(4437265),n=e.i(4152146),s=e.i(8475434),r=e.i(3885723),a=e.i(7680435),l=e.i(9696782),c=e.i(3029412);e.s(["useProfiles",0,function(){let[e]=(0,c.useCurrentProfileKey)(),{i18n:d}=(0,t.useLingui)(),u=(0,a.useCurrentUser)(),{getCreatorBadgeCount:p,getPatronBadgeCount:m}=(0,l.useBadges)(),h=(0,n.useSessionValue)("show_identity_merged_nav"),g=(0,r.useFeatureFlag)("enable_id_merged_creator_onboarding_fe");if(!u)return{patronProfile:null,creatorProfile:null,currentProfile:null,otherProfilesBadgeCount:0};let x={profileKey:"member",name:u?.fullName??"",imageUrl:u?.imageUrl??"",icon:o.IconMembershipCollection,badgeCount:m(),context:"patron",translatedContext:h?(0,s.yourMembershipsString)(d):(0,s.memberString)(d),homeHref:"/home"},w=!!u?.campaign,v=Number(u?.campaign?.ownerId)===Number(u?.id),b=h?g?(0,s.yourPageString)(d):(0,s.yourPatreonString)(d):v?(0,s.creatorString)(d):d._({id:"VNE+vW",message:"Teammate"}),f=w?{profileKey:"creator",name:u?.campaign?.name??"",imageUrl:u?.campaign?.avatarPhotoImageUrls?.thumbnail??"",icon:i.IconPage,badgeCount:p(),context:v?"creator":"teammate",translatedContext:b,homeHref:"/user"}:null,C="creator"===e&&w,y=C?f:x,P=(C?x.badgeCount:f?.badgeCount)??0;return{patronProfile:x,creatorProfile:f,currentProfile:y,otherProfilesBadgeCount:P}}])},1676715,e=>{"use strict";var t=e.i(8683249);e.s(["logAppUpsellDismissed",0,function(e){t.patreonTrackerClient.logTypedEvent("App Upsell : Dismissed",e)}])},5149742,1290270,e=>{"use strict";var t=e.i(8683249);e.s(["logAppUpsellDisplayedEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("App Upsell : Displayed",e)}],5149742),e.s(["logAppUpsellOpenAppClicked",0,function(e){t.patreonTrackerClient.logTypedEvent("App Upsell : Open App Button Clicked",e)}],1290270)},8691552,e=>{"use strict";var t=e.i(9598373),o=e.i(5349612);let i="display_app_qr",n=(0,o.atomWithLocation)();e.s(["useQrCodeDialogState",0,()=>{let[e,o]=(0,t.useAtom)(n),s=e.searchParams?.get(i)==="1";return{isOpen:s,toggleIsOpen:()=>{s?o(e=>{let t=e.searchParams??new URLSearchParams;return t.delete(i),{...e,searchParams:t}}):o(e=>{let t=e.searchParams??new URLSearchParams;return t.set(i,"1"),{...e,searchParams:t}})}}}])},9652594,e=>{"use strict";var t=e.i(9391398),o=e.i(2358280),i=e.i(4603186),n=e.i(5149742),s=e.i(1290270),r=e.i(2550472),a=e.i(4527703),l=e.i(5338216),c=e.i(5496168),d=e.i(8691552),u=e.i(2416142);e.s(["DesktopGetAppButton",0,e=>{let{hideIcon:p=!1}=e,{isOpen:m,toggleIsOpen:h}=(0,d.useQrCodeDialogState)(),{isCreatorViewingAsFan:g}=(0,l.useIsCreatorViewingAsFan)(),x=(0,c.buildDeepLinkUrl)({page:c.HOME_PAGE}),w="persistent",v="desktop";return(0,a.useRunOnce)(()=>{g||(0,n.logAppUpsellDisplayedEvent)({page_name:c.HOME_PAGE,app_upsell_source:w,app_upsell_platform:v})}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.ButtonShim,{icon:p?void 0:i.IconPhone,loggerId:"get-app-button",variant:"tertiary",fluid:!0,onClick:()=>{h(),(0,s.logAppUpsellOpenAppClicked)({page_name:c.HOME_PAGE,app_upsell_source:w,app_upsell_platform:v})},children:(0,t.jsx)(o.Trans,{id:"FLwmlg",message:"Get app",context:"CTA prompting user to get patreon app"})}),(0,t.jsx)(u.AppQrCodeDialog,{isOpen:m,onCloseRequest:h,qrCodeUrl:x})]})}])},6168472,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconMenu",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M3 7.125c0-.45.056-.731.225-.9s.45-.225.9-.225h15.75c.45 0 .73.056.9.225.169.169.225.45.225.9s-.056.73-.225.9c-.169.169-.45.225-.9.225H4.125c-.45 0-.73-.056-.9-.225-.169-.169-.225-.45-.225-.9m16.875 4.125H4.125c-.45 0-.73.056-.9.225-.169.169-.225.45-.225.9s.056.73.225.9c.169.169.45.225.9.225h15.75c.45 0 .73-.056.9-.225.169-.169.225-.45.225-.9s-.056-.731-.225-.9-.45-.225-.9-.225m0 5.25H4.125c-.45 0-.73.056-.9.225-.169.169-.225.45-.225.9s.056.73.225.9c.169.169.45.225.9.225h15.75c.45 0 .73-.056.9-.225.169-.169.225-.45.225-.9s-.056-.731-.225-.9-.45-.225-.9-.225"})})});e.s(["IconMenu",0,o])}]);

//# debugId=b4e1dea6-2162-52ff-4467-2806a1930504
//# sourceMappingURL=0y~cyle0j2p.i.js.map
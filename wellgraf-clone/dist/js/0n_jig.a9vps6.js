;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b42ff42c-f5ef-ba5f-84ba-c3efd8baa722")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8456926,e=>{"use strict";var t=e.i(3350461),i=e.i(9391398),o=e.i(6191788);let r=Symbol("CampaignHasVisibleShop.missing"),s=(0,o.createContext)(r);e.s(["CampaignHasVisibleShopProvider",0,e=>{let{value:t,children:o}=e;return(0,i.jsx)(s.Provider,{value:t,children:o})},"useCampaignHasVisibleShop",0,()=>{let e=(0,o.useContext)(s);if(e===r){if(void 0!==t.default.env.DEVELOPMENT_DEBUG)throw Error("Unsafe use of `useCampaignHasVisibleShop` - this hook was used without the required provider.");return!1}return e}])},3982945,e=>{"use strict";var t=e.i(3350461),i=e.i(9391398),o=e.i(6191788);let r=Symbol("CampaignHasAnyProductVariant.missing"),s=(0,o.createContext)(r);e.s(["CampaignHasAnyProductVariantProvider",0,e=>{let{value:t,children:o}=e;return(0,i.jsx)(s.Provider,{value:t,children:o})},"useCampaignHasAnyProductVariant",0,()=>{let e=(0,o.useContext)(s);if(e===r){if(void 0!==t.default.env.DEVELOPMENT_DEBUG)throw Error("Unsafe use of `useCampaignHasAnyProductVariant` - this hook was used without the required provider.");return!1}return e}])},703522,e=>{"use strict";var t=e.i(3350461),i=e.i(9391398),o=e.i(6191788);let r=Symbol("CampaignNumVisibleProducts.missing"),s=(0,o.createContext)(r);e.s(["CampaignNumVisibleProductsProvider",0,e=>{let{value:t,children:o}=e;return(0,i.jsx)(s.Provider,{value:t,children:o})},"useCampaignNumVisibleProducts",0,()=>{let e=(0,o.useContext)(s);if(e===r){if(void 0!==t.default.env.DEVELOPMENT_DEBUG)throw Error("Unsafe use of `useCampaignNumVisibleProducts` - this hook was used without the required provider.");return 0}return e}])},7572717,e=>{"use strict";var t=e.i(8205331),i=e.i(7308002),o=e.i(9598373),r=e.i(3558227),s=e.i(6191788),a=e.i(7680435),n=e.i(3982945),l=e.i(8456926),c=e.i(703522),d=e.i(3343608);let h=(0,i.atom)(!1),x=(0,i.atom)(0),p=(0,i.atom)(!1);function u(){let e=(0,a.useCurrentUser)(),i=e?.campaign?.id,u=(0,c.useCampaignNumVisibleProducts)(),g=(0,l.useCampaignHasVisibleShop)(),f=(0,n.useCampaignHasAnyProductVariant)();(0,r.useHydrateAtoms)([[h,f],[x,u],[p,g]]);let[y,m]=(0,o.useAtom)(h),[w,j]=(0,o.useAtom)(x),[C,E]=(0,o.useAtom)(p),[,v]=(0,t.useNion)((0,d.getCampaignHasVisibleShopNionDeclaration)(i??""));return{refreshCampaignHasVisibleShop:(0,s.useCallback)(e=>{i&&t();async function t(){E(!!(await v.get()).hasVisibleShop),void 0!==e&&j(t=>e?t+1:t-1)}},[i,v,E,j]),setHasAnyProducts:m,hasAnyProducts:y,numVisibleProducts:w,hasVisibleProducts:w>0,hasVisibleShop:C}}e.s(["useDigitalCommerceServerState",0,u,"withDigitalCommerceServerState",0,function(e){return function(t){let i=u();return s.default.createElement(e,{...t,...i})}}])},6058434,e=>{"use strict";var t=e.i(9391398),i=e.i(8205331),o=e.i(9760814),r=e.i(1313607),s=e.i(7251356),a=e.i(6018844),n=e.i(1209879),l=e.i(9969623),c=e.i(9950142),d=e.i(1906693),h=e.i(6133242),x=e.i(8067759),p=e.i(226931),u=e.i(6191788),g=e.i(1785954),f=e.i(9467836);let y=e=>{let{isText:i,isAudio:o,isVideo:r,isPublic:s,backgroundImage:a,primaryThemeColor:n}=e;return i||o||r&&!a?(0,t.jsx)(d.LightOverlay,{}):r||s?(0,t.jsx)(d.DimOverlay,{}):a?(0,t.jsx)(w,{color:n??void 0}):(0,t.jsx)(d.LightOverlay,{})},m=o.styled.div.withConfig({componentId:"sc-f3213dff-0"})`
  position: absolute;
  inset: 0;
  background-image: url(${e=>{let{image:t}=e;return t}});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`,w=o.styled.div.withConfig({componentId:"sc-f3213dff-1"})`
  ${d.AbsoluteFill}
  opacity: 30%;
  background-color: ${e=>{let{color:t}=e;return t||"transparent"}};
`;e.s(["PostTeaserImage",0,function(e){let{fullWidth:o,blurNonPublicImage:w,shouldHideMediaDuration:j,mediaDurationOverride:C,variant:E,postId:v}=e,T="portrait"===E,[I,k,{isLoading:b}]=(0,i.useNion)({dataKey:"post",endpoint:(0,a.buildUrl)(`/posts/${v}`,{fields:{post:["media_file_duration_seconds"],campaign:["name","vanity"]},include:["campaign"]})});(0,r.useCallbackOnce)(()=>{v&&!b&&k.get()})();let{mediaFileDurationSeconds:_,campaign:P}=I??{},{primaryThemeColor:S}=P??{},{isVideo:$,isAudio:M,isMedia:O,isText:D,isPublic:A,textColor:L,showPreviewText:H,iconColor:B,previewText:V,backgroundImage:R,thumbnailImage:U}=(e=>{let{title:t,cleanedTeaserText:i,image:o,images:r,postType:s,accessRules:a,campaign:n}=e??{},l=s&&[g.ApiPostType.LIVESTREAM,g.ApiPostType.LIVESTREAM_CROWDCAST,g.ApiPostType.LIVESTREAM_VIMEO,g.ApiPostType.LIVESTREAM_YOUTUBE,g.ApiPostType.VIDEO_EMBED,g.ApiPostType.VIDEO_EXTERNAL_FILE].includes(s),c=!!s&&[g.ApiPostType.AUDIO_EMBED,g.ApiPostType.AUDIO_FILE].includes(s),d=l||c,h=s===g.ApiPostType.TEXT_ONLY,x=(0,f.isPublicPost)(a),{avatarPhotoImageUrls:y,primaryThemeColor:m}=n??{},{imageUrls:w}=r?.[0]??{},j=w?.url||o?.url,C=w?.thumbnail||y?.thumbnail,E=(0,u.useMemo)(()=>{let e=m??p.tokens.content.primary.default;return!c&&j&&(e=void 0),e},[c,j,m]),v=(0,u.useMemo)(()=>{let e=!0;return!c&&j&&(e=!(l||x)),e},[c,j,l,x]),T=(0,u.useMemo)(()=>{let e=t||i||"";return(!j||h)&&(e=i||e||""),e},[t,i,j,h]),I=(0,u.useMemo)(()=>h||c||l&&!j?m??p.tokens.content.primary.default:l||x||j?void 0:m??p.tokens.content.primary.default,[h,c,m,j,x,l]);return{isVideo:!!l,isAudio:c,isMedia:d,isText:h,isPublic:x,textColor:E,showPreviewText:v,iconColor:I,previewText:T,backgroundImage:j,thumbnailImage:C}})(I),{containerRef:W,dimensions:N}=(0,s.useDimensions)(),{imageSrc:F}=(0,x.useFetchImage)(R);return b?null:(0,t.jsxs)(d.Background,{id:"post-teaser",ref:W,image:M?void 0:F,color:S??void 0,fullWidth:o,portrait:T,children:[T&&(0,t.jsx)(m,{image:M?void 0:R}),w&&!A&&!M&&(0,t.jsx)(d.BlurredBackgroundImage,{}),(0,t.jsx)(y,{isText:D,isAudio:M,isVideo:$,isPublic:A,backgroundImage:R,primaryThemeColor:S??void 0}),M&&(0,t.jsx)(d.AbsoluteCenter,{children:(0,t.jsx)(c.SoundWave,{color:S??void 0,width:T?N.height:N.width,height:N.height})}),(0,t.jsxs)(d.ContentOverlay,{children:[(0,t.jsxs)(d.ContentHeader,{children:[(0,t.jsx)(l.ScalingLogo,{cardWidth:T?N.height:N.width,color:B}),O&&!j&&(0,t.jsx)(n.MediaBadge,{durationInSeconds:C??_??0,cardWidth:T?N.height:N.width,color:B})]}),M&&(0,t.jsx)(d.AbsoluteCenter,{children:(0,t.jsx)(d.ImageThumbnail,{src:U,cardWidth:T?N.height:N.width,width:T?"50%":void 0,dropShadow:!0})}),H&&(0,t.jsx)(h.TeaserText,{text:V,isAudio:M,cardWidth:T?N.height:N.width,color:L})]})]})}],6058434)},9969623,e=>{"use strict";var t=e.i(9391398),i=e.i(9451102),o=e.i(6774867),r=e.i(226931);e.s(["ScalingLogo",0,function(e){let{cardWidth:s=0,cardRatio:a=.08,color:n=r.tokens.constant.white.default}=e;return(0,t.jsx)(i.PatreonMark,{height:(0,o.convertLegacyUnitValue)(s*a/8),width:(0,o.convertLegacyUnitValue)(s*a/8),color:n})}])},1906693,e=>{"use strict";var t=e.i(226931),i=e.i(9760814);let o=1200/630,r=9/16,s="600px",a=i.css`
  object-position: center center;
  object-fit: cover;
  background-color: ${t.tokens.constant.white.default};
`,n=i.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,l=i.styled.div.withConfig({componentId:"sc-5a3a5a57-0"})`
  width: ${e=>{let{fullWidth:t}=e;return t?"100%":s}};
  aspect-ratio: ${e=>{let{portrait:t}=e;return t?r:o}};

  background-color: ${e=>{let{color:i}=e;return i||t.tokens.content.primary.default}};
  position: relative;
  background-image: ${e=>{let{image:t}=e;return"string"==typeof t?`url(${t})`:"none"}};
  background-position: ${e=>{let{rightAlignImage:t}=e;return t?"right center":"center center"}};
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
`,c=i.styled.div.withConfig({componentId:"sc-5a3a5a57-1"})`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
`,d=i.styled.div.withConfig({componentId:"sc-5a3a5a57-2"})`
  ${n}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,h=i.styled.div.withConfig({componentId:"sc-5a3a5a57-3"})`
  ${n}
  opacity: ${e=>{let{strong:t}=e;return`${t?70:20}%`}};
  background-color: ${t.tokens.constant.black.default};
`,x=i.styled.div.withConfig({componentId:"sc-5a3a5a57-4"})`
  ${n}
  opacity: 90%;
  background-color: white;
`,p=i.styled.div.withConfig({componentId:"sc-5a3a5a57-5"})`
  ${n}
  padding: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,u=i.styled.div.withConfig({componentId:"sc-5a3a5a57-6"})`
  display: flex;
  justify-content: space-between;
`,g=i.styled.img.withConfig({componentId:"sc-5a3a5a57-7"})`
  width: ${e=>{let{width:t}=e;return t||"19%"}};
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10%;
  background-color: ${t.tokens.constant.white.default};
  object-position: center center;
  
  ${e=>{let{dropShadow:o}=e;return o&&i.css`box-shadow: 0px 8px 25px 0px ${t.tokens.constant.blackSubtle.pressed};`}}
  ${e=>{let{cardWidth:o}=e;return o&&i.css`
      outline: ${8333333333333334e-19} * cardWidth}px solid ${t.tokens.constant.blackSubtle.pressed};
      outline-offset: -${8333333333333334e-19} * cardWidth}px;
    `}}
`;e.s(["AbsoluteCenter",0,d,"AbsoluteFill",0,n,"Background",0,l,"BlurredBackgroundImage",0,c,"CARD_BASE_HEIGHT",0,630,"CARD_BASE_WIDTH",0,1200,"CenterCoverImage",0,a,"ContentHeader",0,u,"ContentOverlay",0,p,"DimOverlay",0,h,"ImageThumbnail",0,g,"LightOverlay",0,x])},8067759,e=>{"use strict";var t=e.i(6191788),i=e.i(1163396);let o={maxRequestTime:4e3};e.s(["useFetchImage",0,function(e){let{maxRequestTime:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,[s,a]=(0,t.useState)(),n=(0,t.useRef)();return(0,t.useEffect)(()=>{let t=new Image;return e&&(n.current=setTimeout(()=>{t.src="",(0,i.datadogIncrement)("patreon.share_card.image.fetch_timeout")},r),t.onload=()=>{clearTimeout(n.current),a(e)},t.src=e),()=>{t.onload=null,clearTimeout(n.current)}},[e,r]),{imageSrc:s}}])},6149222,e=>{"use strict";var t=e.i(9391398),i=e.i(8022561),o=e.i(7251356),r=e.i(9969623),s=e.i(1906693),a=e.i(8067759);e.s(["CreatorTeaserImage",0,function(e){let{fullWidth:n}=e,l=(0,i.useCampaign)(),{avatarPhotoImageUrls:c,coverPhotoUrlSizes:d,primaryThemeColor:h,creatorWorldHeaderStyle:x}=l??{},{containerRef:p,dimensions:u}=(0,o.useDimensions)(),{imageSrc:g}=(0,a.useFetchImage)(d?.medium),f="profile_photo"===x?void 0:g,y=!!(g&&l?.creatorWorldEnabled&&l?.creatorWorldHeaderStyle==="cover_photo");return(0,t.jsxs)(s.Background,{id:"creator-teaser",ref:p,image:f,color:h??void 0,fullWidth:n,rightAlignImage:y,children:[(0,t.jsx)(s.DimOverlay,{}),(0,t.jsxs)(s.ContentOverlay,{children:[(0,t.jsx)(r.ScalingLogo,{cardWidth:u.width}),(0,t.jsx)(s.ImageThumbnail,{src:c?.thumbnail||c?.default,width:"20%"})]})]})}])},1212705,e=>{e.v({forceTextColor:"ShareCards-module__blTuua__forceTextColor"})},1209879,e=>{"use strict";var t=e.i(9391398),i=e.i(5363035),o=e.i(2925392),r=e.i(226931),s=e.i(9760814),a=e.i(1906693),n=e.i(1212705);let l=48/a.CARD_BASE_WIDTH,c=s.styled.div.withConfig({componentId:"sc-e69c0c82-0"})`
  display: flex;
  align-items: center;
  gap: ${e=>{let{cardWidth:t}=e;return 8/a.CARD_BASE_WIDTH*t}}px;
`,d=s.styled.div.withConfig({componentId:"sc-e69c0c82-1"})`
  /* TODO(studio): support relative font sizes */
  ${(0,o.cssForBodyText)()};
  font-size: ${e=>{let{fontSize:t}=e;return t}}px;
`,h=s.styled.div.withConfig({componentId:"sc-e69c0c82-2"})`
  padding-top: 4px;
  width: ${e=>{let{cardWidth:t}=e;return 52/a.CARD_BASE_WIDTH*t}}px;
`,x=e=>{let{color:i="white"}=e;return(0,t.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:i,children:(0,t.jsx)("path",{d:"M13.075 17.435c-4.284 2.197-6.428 3.295-7.5 2.615C4.5 19.37 4.5 16.913 4.5 12s.002-7.37 1.074-8.05c1.073-.68 3.216.418 7.501 2.615C18.358 9.274 21 10.637 21 12c0 1.363-2.642 2.726-7.925 5.435z"})})};e.s(["MediaBadge",0,function(e){var o;let s,{durationInSeconds:a,cardWidth:p,color:u=r.tokens.constant.white.default}=e,g=(s=11,(o=a)<36e3&&(s=12),o<3600&&(s=14),o<600&&(s=15),new Date(1e3*o).toISOString().substring(s,19)),f=p*l;return(0,t.jsxs)(c,{cardWidth:p,children:[(0,t.jsx)(h,{cardWidth:p,children:(0,t.jsx)(x,{color:u})}),a>0&&(0,t.jsx)(i.HeadingText,{className:n.default.forceTextColor,style:{"--ShareCards-text-color":u},as:"div",children:(0,t.jsx)(d,{fontSize:f,children:g})})]})}])},9950142,e=>{"use strict";var t=e.i(9391398),i=e.i(226931);e.s(["SoundWave",0,function(e){let{width:o,height:r,color:s=i.tokens.content.primary.default}=e;return(0,t.jsxs)("svg",{width:o,height:r,viewBox:"0 0 506 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{opacity:"0.33",x:"-1.11719",y:"40",width:"2.31373",height:"40",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"5.19629",y:"36",width:"2.31373",height:"48",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"11.5098",y:"36",width:"2.31373",height:"48",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"17.8232",y:"46",width:"2.31373",height:"28",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"24.1377",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"30.4512",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"36.7646",y:"30",width:"2.31373",height:"60",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"43.0781",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"49.3926",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"55.7061",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"62.0195",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"68.333",y:"19",width:"2.31373",height:"82",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"74.6475",y:"10",width:"2.31373",height:"100",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"80.9609",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"87.2744",y:"19",width:"2.31373",height:"82",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"93.5879",y:"19",width:"2.31373",height:"82",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"99.9023",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"106.216",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"112.529",y:"38",width:"2.31373",height:"44",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"118.843",y:"35",width:"2.31373",height:"50",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"125.157",y:"35",width:"2.31373",height:"50",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"131.471",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"137.784",y:"32",width:"2.31373",height:"56",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"144.098",y:"29",width:"2.31373",height:"62",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"150.412",y:"29",width:"2.31373",height:"62",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"156.726",y:"40",width:"2.31373",height:"40",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"163.039",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"169.353",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"175.667",y:"38",width:"2.31373",height:"44",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"181.98",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"188.294",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"194.607",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"200.922",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"207.235",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"213.549",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"219.862",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"226.177",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"232.49",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"238.804",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"245.117",y:"49",width:"2.31373",height:"22",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"251.432",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"257.745",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"264.059",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"270.372",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"276.687",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"283",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"289.313",y:"19",width:"2.31373",height:"82",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"295.627",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"301.941",y:"10",width:"2.31373",height:"100",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"308.255",y:"19",width:"2.31373",height:"82",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"314.568",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"320.882",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"327.196",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"333.51",y:"40",width:"2.31373",height:"40",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"339.823",y:"35",width:"2.31373",height:"50",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"346.137",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"352.451",y:"21",width:"2.31373",height:"78",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"358.765",y:"21",width:"2.31373",height:"78",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"365.078",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"371.392",y:"32",width:"2.31373",height:"56",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"377.706",y:"25",width:"2.31373",height:"70",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"384.02",y:"21",width:"2.31373",height:"78",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"390.333",y:"21",width:"2.31373",height:"78",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"396.646",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"402.961",y:"27",width:"2.31373",height:"66",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"409.274",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"415.588",y:"45",width:"2.31373",height:"30",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"421.901",y:"36",width:"2.31373",height:"48",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"428.216",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"434.529",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"440.843",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"447.156",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"453.471",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"459.784",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"466.098",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"472.411",y:"36",width:"2.31373",height:"48",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"478.726",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"485.039",y:"34",width:"2.31373",height:"52",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"491.353",y:"47",width:"2.31373",height:"26",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"497.666",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s}),(0,t.jsx)("rect",{opacity:"0.33",x:"503.98",y:"41",width:"2.31373",height:"38",rx:"1.15686",fill:s})]})}])},6133242,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(5363035),r=e.i(2925392),s=e.i(6191788),a=e.i(9760814),n=e.i(1286178),l=e.i(1906693),c=e.i(1212705);let d=52/l.CARD_BASE_WIDTH,h=64/l.CARD_BASE_WIDTH,x=a.styled.div.withConfig({componentId:"sc-e61a51b0-0"})`
  /* TODO(studio): support relative font sizes */
  ${(0,r.cssForBodyText)()};
  font-size: ${e=>{let{fontSize:t}=e;return t}}px;

  ${e=>{let{isAudio:t,fontSize:i}=e;return t?`
        max-height: ${1.3*i*2}px;
        text-align: center;
        overflow: hidden;
        text-wrap: balance;
      `:""}}
`;e.s(["TeaserText",0,function(e){let{text:r,isAudio:a,cardWidth:l,color:p="white"}=e,{i18n:u}=(0,i.useLingui)(),g=(0,s.useRef)(null),f=r;if(a&&f&&f?.length>=80){let e=f?.substring(0,80);f=u._({id:"9dQ0H+",message:"{text}...",values:{text:e}})}else if(!a&&f&&f.length>=140){let e=f?.substring(0,140);f=u._({id:"9dQ0H+",message:"{text}...",values:{text:e}})}return f?(0,t.jsx)(o.HeadingText,{size:"xl",as:"div",className:c.default.forceTextColor,style:{"--ShareCards-text-color":p},children:(0,t.jsx)(x,{ref:g,isAudio:a,"data-testid":"teaser-text",fontSize:a?l*d:l*h,children:(0,t.jsx)(n.Sanitizer,{dirtyHtml:f,type:"preconfigured",config:{allowStyles:!0,allowIframe:!0}})})}):null}])},5442628,e=>{"use strict";var t,i=((t={}).VIDEO_PREVIEW="Video preview",t.CLIP="Clip",t.PROMOTIONAL_IMAGE="Promotional image",t.VIDEO_THUMBNAIL="Video thumbnail",t);e.s(["MediaOptions",()=>i])},8139623,e=>{"use strict";e.s(["BASIC_DETAILS_ITEM_COMPLETED",0,"BASIC_DETAILS_ITEM_COMPLETED","CREATE_POST_ITEM_COMPLETED",0,"CREATE_POST_ITEM_COMPLETED","CREATE_PRODUCT_ITEM_COMPLETED",0,"CREATE_PRODUCT_ITEM_COMPLETED","DESIGN_PAGE_ITEM_COMPLETED",0,"DESIGN_PAGE_ITEM_COMPLETED","ENABLE_PODCAST_SETTING_PAGE_ITEM_COMPLETED",0,"ENABLE_PODCAST_SETTING_PAGE_ITEM_COMPLETED","LAUNCH_CHECKLIST_COMPLETED",0,"LAUNCH_CHECKLIST_COMPLETED","LAUNCH_CHECKLIST_DISMISSED",0,"LAUNCH_CHECKLIST_DISMISSED","PODCAST_ITEM_COMPLETED",0,"PODCAST_ITEM_COMPLETED","PROMOTE_PAGE_ITEM_COMPLETED",0,"PROMOTE_PAGE_ITEM_COMPLETED","PUBLISH_PAGE_ITEM_COMPLETED",0,"PUBLISH_PAGE_ITEM_COMPLETED","SET_MEMBERSHIP_ITEM_COMPLETED",0,"SET_MEMBERSHIP_ITEM_COMPLETED","SYNC_TO_SPOTIFY_PAGE_ITEM_COMPLETED",0,"SYNC_TO_SPOTIFY_PAGE_ITEM_COMPLETED"])},9489031,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(6112151),r=e.i(8139671),s=e.i(5363035),a=e.i(1968870),n=e.i(7868787),l=e.i(7342776),c=e.i(2859206),d=e.i(1108816),h=e.i(8326269),x=e.i(8981215),p=e.i(226931),u=e.i(9088338),g=e.i(3851369),f=e.i(7541374),y=e.i(9760814),m=e.i(8139623),w=e.i(6149222),j=e.i(1313607),C=e.i(2550472),E=e.i(4152146),v=e.i(6058434),T=e.i(2383398);e.i(9137169);var I=e.i(625078),k=e.i(8799586),b=e.i(1702275),_=e.i(5442628);let P=e=>{let{imgPreviewUrl:i,mediaOption:o,shouldHideMediaDuration:r}=e,s=(0,E.useIsAuthenticated)(),{id:a,campaign:n,thumbnail:c}=(0,k.useContentCardData)(),{status:d,shareVideo:h,duration:x}=(0,b.useShareVideo)({fetch:!0}),p=h?.display,u=o===_.MediaOptions.CLIP&&d!==b.ShareVideoStatus.Received,g=o===_.MediaOptions.CLIP&&d===b.ShareVideoStatus.Received,f=(0,I.useAspectRatio)({maxHeight:202,videoWidth:p?.width||0,videoHeight:p?.height||0});return(0,t.jsxs)(t.Fragment,{children:[o===_.MediaOptions.VIDEO_PREVIEW&&!p&&s&&(0,t.jsxs)(D,{...f,children:[(0,t.jsx)(A,{children:(0,t.jsx)(l.LoadingSpinner,{color:"dark"})}),(0,t.jsx)("video",{width:"100%",height:"100%","object-fit":"cover",controls:!0})]}),p&&o===_.MediaOptions.VIDEO_PREVIEW&&s&&(0,t.jsx)(M,{children:(0,t.jsx)(T.default,{campaignId:n?.id,postId:a.toString(),videoId:p.mediaId?.toString()||"",controls:!0,videoUrl:p.url||"",thumbnailUrl:c?.url,videoWidth:p.width||0,videoHeight:p.height||0,maxHeight:202,duration:p.duration,fullDuration:p.fullContentDuration,videoProgress:p.progress,showClosedCaptions:p.closedCaptionsEnabled})}),g&&(0,t.jsx)(M,{children:(0,t.jsx)(O,{autoPlay:!0,controls:!0,src:h?.downloadUrl})}),i&&(o===_.MediaOptions.PROMOTIONAL_IMAGE||o===_.MediaOptions.VIDEO_THUMBNAIL||u)&&(0,t.jsxs)($,{"data-tag":"promotion-modal-preview-image",children:[d===b.ShareVideoStatus.Waiting&&(0,t.jsx)(l.LoadingSpinner,{color:"dark"}),d!==b.ShareVideoStatus.Waiting&&(0,t.jsx)(S,{children:(0,t.jsx)(v.PostTeaserImage,{fullWidth:!0,blurNonPublicImage:!0,shouldHideMediaDuration:r,mediaDurationOverride:o===_.MediaOptions.CLIP?x:void 0,postId:a})})]})]})},S=y.styled.div.withConfig({componentId:"sc-7fcf3e76-0"})`
  position: absolute;
  inset: 0;
  width: ${e=>`${e.width}`||void 0};
`,$=y.styled.div.withConfig({componentId:"sc-7fcf3e76-1"})`
  position: relative;

  background-size: cover;
  background-position: center;

  width: 100%;

  aspect-ratio: 40 / 21;
  border-radius: ${p.tokens.radius.md};

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(0,x.mediaForBreakpoint)("sm")} {
    width: 100%;
  }
`,M=y.styled.div.withConfig({componentId:"sc-7fcf3e76-2"})`
  position: relative;
  overflow: hidden;

  border-radius: ${p.tokens.radius.md};

  @media ${(0,x.mediaForBreakpoint)("sm")} {
    width: '100%';
  }
`,O=y.styled.video.withConfig({componentId:"sc-7fcf3e76-3"})`
  width: 100%;
  display: block;

  @media ${(0,x.mediaForBreakpoint)("sm")} {
    margin: 0 auto;
    padding-top: 0;
  }
`,D=y.styled.div.withConfig({componentId:"sc-7fcf3e76-4"})`
  position: relative;
  overflow: hidden;
  width: 100%;
  /* For smaller screen sizes, ensure the video doesn't continue to shrink */
  @media (max-height: 600px) {
    padding-top: 520px;
  }
  border-radius: 6px;
`,A=y.styled.div.withConfig({componentId:"sc-7fcf3e76-5"})`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var L=e.i(6631653);let H=y.styled.div.withConfig({componentId:"sc-c7593e82-0"})`
  position: relative;
  ${e=>e.imageUrl&&`background: url(${e.imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: ${Math.round(52.5)}%;
  border-radius: ${p.tokens.radius.md};
`,B=e=>{let{imageUrl:i}=e;return(0,t.jsx)(H,{"data-tag":"share-dialog-image-preview",imageUrl:i})};function V(e){let{shareUrl:o,copyLink:r}=e,{i18n:s}=(0,i.useLingui)(),a=(0,u.useToaster)(),l=()=>{r&&(r(),a.success(s._({id:"PV1qfl",message:"Link copied"}),{key:o}))},c=(0,j.useCallbackOnce)(l);return(0,t.jsx)(R,{children:(0,t.jsx)(h.TextInput,{value:o.split("?")[0],label:o,hideLabel:!0,onFocus:c,onChange:()=>void 0,variant:"solid",type:"url",inputMode:"url",prefix:n.IconCopy,prefixOnClick:l,prefixLabel:s._({id:"8Y/Ct1",message:"Copy link to clipboard"})})})}let R=y.styled.div.withConfig({componentId:"sc-fea0a911-0"})`
  width: 100%;
  padding: ${p.tokens.space.x4} ${p.tokens.space.x8};
  box-sizing: border-box;

  @media ${(0,x.mediaForBreakpoint)("sm")} {
    padding: 0 ${p.tokens.space.x12};
  }
`,U=p.tokens.space.x24,W=y.styled.div.withConfig({componentId:"sc-fea0a911-1"})`
  position: relative;
  padding: ${U};
`,N=y.styled.div.withConfig({componentId:"sc-fea0a911-2"})`
  background-color: ${p.tokens.bg.baseAlt.default};
  padding: ${p.tokens.space.x8};
  text-align: center;
`,F=y.styled.div.withConfig({componentId:"sc-fea0a911-3"})`
  position: absolute;
  top: ${p.tokens.space.x8};
  right: ${p.tokens.space.x8};
`,z=y.styled.div.withConfig({componentId:"sc-fea0a911-4"})`
  margin: ${p.tokens.space.x12} calc(${p.tokens.space.x16} * -1) 0 calc(${p.tokens.space.x16} * -1);

  @media ${(0,x.mediaForBreakpoint)("sm")} {
    margin: ${p.tokens.space.x12} calc(${p.tokens.space.x24} * -1) 0 calc(${p.tokens.space.x24} * -1);
  }
`,G=(0,y.styled)(C.ButtonShim).withConfig({componentId:"sc-fea0a911-5"})`
  &&& {
    border-radius: 0;
    justify-content: flex-start;
    padding: ${p.tokens.space.x8} ${p.tokens.space.x16};

    @media ${(0,x.mediaForBreakpoint)("sm")} {
      padding: 0 ${p.tokens.space.x24};
    }
  }
`,Y=y.styled.div.withConfig({componentId:"sc-fea0a911-6"})`
  position: relative;
  background-color: ${p.tokens.content.decorative.default};
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 40 / 21;
  border-radius: ${p.tokens.radius.md};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`,K=y.styled.div.withConfig({componentId:"sc-fea0a911-7"})`
  position: absolute;
  inset: 0;
`,q=y.styled.div.withConfig({componentId:"sc-fea0a911-8"})`
  position: absolute;
`;e.s(["ShareDialog",0,e=>{let{buttons:n,imgPreviewUrl:h,isNewPost:x,isOpen:y,logger:j,impressionLogger:E=()=>void 0,mediaOption:v,onCloseRequest:T,subtitle:I,title:k,variant:b,campaignId:_,currentUserIsOwner:S,bannerText:$,footerText:M,shouldHideMediaDuration:O,shareUrl:D,copyLink:A,children:H}=e,{i18n:R}=(0,i.useLingui)(),U=(0,f.default)(y);y&&!U&&E();let X=(0,u.useToaster)(),Q=R._({id:"m3J4WP",message:"Your post is live!"}),J=$||(x?Q:null),Z=(0,t.jsxs)(t.Fragment,{children:["post"===b&&(0,t.jsx)(P,{imgPreviewUrl:h,mediaOption:v,shouldHideMediaDuration:O}),"page"===b&&(0,t.jsxs)(Y,{"data-tag":"promotion-modal-preview-image",children:[(0,t.jsx)(l.LoadingSpinner,{}),"page"===b&&(0,t.jsx)(K,{children:(0,t.jsx)(w.CreatorTeaserImage,{fullWidth:!0})})]}),("product"===b||"memberpost"===b)&&(0,t.jsxs)(d.Stack,{justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(q,{children:(0,t.jsx)(l.LoadingSpinner,{})}),(0,t.jsx)(B,{imageUrl:h})]})]}),ee=(0,t.jsx)(s.HeadingText,{color:p.tokens.content.muted.default,size:"sm",as:"h1",children:I});return(0,t.jsx)(L.DialogShim,{"aria-label":R._({id:"D/dZ1D",message:"Share modal"}),loggerId:"postPromotionModal",id:"postPromotionModal",size:"sm",isOpen:y,onCloseRequest:T,padding:"none",showCloseButton:!1,isDismissable:!0,children:(0,t.jsxs)(t.Fragment,{children:[J?(0,t.jsx)(N,{children:(0,t.jsx)(o.BodyText,{as:"h5",children:(0,t.jsx)("strong",{children:J})})}):null,(0,t.jsxs)(W,{children:[(0,t.jsx)(s.HeadingText,{size:"xl",as:"p",children:k}),(0,t.jsx)(F,{children:(0,t.jsx)(C.ButtonShim,{variant:"tertiary",unfilled:!0,loggerId:"ShareDialog-close","aria-label":R._({id:"BWT+Xj",message:"Close the share dialog"}),icon:a.IconClose,onClick:T,corners:"pill"})}),(0,t.jsx)(c.Spacer,{mt:p.tokens.space.x16}),(0,t.jsxs)(t.Fragment,{children:[Z,(0,t.jsx)(c.Spacer,{mt:p.tokens.space.x24}),I&&ee,(0,t.jsx)(c.Spacer,{mb:p.tokens.space.x8}),(0,t.jsxs)(z,{children:[D&&(0,t.jsx)(V,{shareUrl:D,copyLink:A}),Object.entries(n).map(e=>{let[,i]=e;return(0,t.jsx)(G,{padding:"none",fluid:!0,unfilled:!0,icon:i.icon,loggerId:`ShareDialog-share-${i.key}`,onClick:()=>{j(i),"onClick"in i&&i.onClick&&i.onClick().then(()=>{"onClickMessage"in i&&i.onClickMessage&&X.success(i.onClickMessage,{key:i.key})}),"onClick"in i&&"page"===b&&_&&S&&!g.default.get(`${m.PROMOTE_PAGE_ITEM_COMPLETED}-${_}`)&&g.default.set(`${m.PROMOTE_PAGE_ITEM_COMPLETED}-${_}`,!0)},href:"href"in i?i.href:void 0,target:"href"in i?"_blank":void 0,children:i.actionLabel},i.key)})]})]}),H]}),M&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Divider,{}),(0,t.jsx)(N,{children:(0,t.jsx)(o.BodyText,{color:p.tokens.content.muted.default,children:M})})]})]})})}],9489031)},7863252,e=>{"use strict";var t=e.i(2925392),i=e.i(8981215),o=e.i(226931),r=e.i(9760814),s=e.i(2550472),a=e.i(829490);let n=r.styled.div.withConfig({componentId:"sc-495ef7d5-0"})`
  display: block;
  color: ${o.tokens.content.regular.default};
  text-transform: uppercase;
  ${(0,t.cssForHeadingText)({size:"xs"})};
  padding: ${o.tokens.space.x16} ${o.tokens.space.x16} ${o.tokens.space.x8};
  margin: ${o.tokens.space.x8} calc(-1 * ${o.tokens.space.x16}) 0;
  border-top: 1px solid ${o.tokens.border.muted.default};
`,l=(0,r.styled)(a.UnstyledLink).withConfig({componentId:"sc-495ef7d5-1"})`
  &&& {
    display: block;
    min-width: 185px;
    text-decoration: none;
    ${(0,t.cssForHeadingText)({size:"sm"})};
    color: ${o.tokens.content.regular.default};
    padding: ${o.tokens.space.x8} ${o.tokens.space.x16};
    margin: 0 calc(-1 * ${o.tokens.space.x16});

    &:hover {
      color: ${o.tokens.content.regular.hover};
      background-color: ${o.tokens.bg.base.hover};
    }

    &:active {
      color: ${o.tokens.content.regular.pressed};
      background-color: ${o.tokens.bg.base.pressed};
    }

    ${e=>e.isCritical&&r.css`
        color: ${o.tokens.content.critical.default};

        &:hover {
          color: ${o.tokens.content.critical.hover};
          background-color: ${o.tokens.critical.surfaceMuted.hover};
        }

        &:active {
          color: ${o.tokens.content.critical.pressed};
          background-color: ${o.tokens.critical.surfaceMuted.pressed};
        }
      `}
  }
`,c=(0,r.styled)(s.ButtonShim).withConfig({componentId:"sc-495ef7d5-2"})`
  &&& {
    justify-content: flex-start;
    border-radius: 0;
    padding: ${o.tokens.space.x8} ${o.tokens.space.x16};

    ${e=>!e.isPreview&&r.css`
        &:hover {
          color: ${o.tokens.content.regular.hover};
          background-color: ${o.tokens.bg.base.hover};
        }

        &:active {
          color: ${o.tokens.content.regular.pressed};
          background-color: ${o.tokens.bg.base.pressed};
        }
      `}

    ${e=>e.isPreview&&r.css`
        color: ${o.tokens.content.muted.default};
      `}

  @media ${(0,i.mediaForBreakpoint)("sm")} {
      padding: 0 ${o.tokens.space.x16};
    }
  }
`,d=r.styled.div.withConfig({componentId:"sc-495ef7d5-3"})`
  float: right;
`;e.s(["FloatRight",0,d,"PageControlButton",0,c,"PageControlHeading",0,n,"PageControlLink",0,l])}]);

//# debugId=b42ff42c-f5ef-ba5f-84ba-c3efd8baa722
//# sourceMappingURL=14w27y5kk7wxm.js.map
;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="67e16e8c-cf25-9042-71fd-ef83f91ca9db")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8192558,e=>{e.v({colorGrid:"BrandColorPickerContent-module__t3SMTW__colorGrid"})},2506685,3650858,2191518,e=>{"use strict";var t=e.i(9391398),o=e.i(2358280),i=e.i(5345957),r=e.i(8981215),a=e.i(226931),n=e.i(9088338),s=e.i(6191788),l=e.i(9760814),c=e.i(6407725),d=e.i(4199263),u=e.i(8475434),h=e.i(6569004),p=e.i(7680435),m=e.i(9956453),g=e.i(3002033),f=e.i(366182),b=e.i(8683249);function v(e){b.patreonTrackerClient.logTypedEvent("Creator Page : Inline Customization : Input Changed",e)}var k=e.i(2398060),x=e.i(9174314);function C(){}let y=(0,s.createContext)({isEditable:!1,isEditing:!1,isLoading:!1,hasUnsavedChanges:!1,hasErrors:!1,form:{primaryThemeColor:"#000000",coverPhotoUrl:"",coverPhotoFile:void 0,avatarPhotoUrl:"",avatarPhotoFile:void 0,name:"",tagline:""},errors:{},touched:{},actions:{saveChanges:C,discardChanges:C,enableEditMode:C,disableEditMode:C,setAvatarPhotoUrl:C,setAvatarPhotoFile:C,setCoverPhotoUrl:C,setCoverPhotoFile:C,setName:C,setPrimaryThemeColor:C,setLastValidColor:C,setTagline:C,reset:C},lastValidColor:void 0});function w(){return(0,s.useContext)(y)}function _(e){let{liveColor:t,campaign:o,isRandomCoverPhotoEnabled:i}=e;return{primaryThemeColor:t??o.primaryThemeColor??"#131313",coverPhotoUrl:(0,k.getCampaignCoverPhotoUrl)(o,i),avatarPhotoUrl:o.avatarPhotoUrl??"",avatarPhotoFile:void 0,coverPhotoFile:void 0,name:o.name??"",tagline:o.creationName??""}}function P(e){let{form:t,i18n:o}=e,i={};return""===t.name.trim()&&(i.name=o._({id:"JjkU2g",message:"Creator name is required"})),t.primaryThemeColor&&!(0,f.isValidHex)(t.primaryThemeColor)&&(i.primaryThemeColor=o._({id:"cXs8da",message:"Invalid color"})),i}function S(e){let{children:i,campaign:r}=e,{i18n:a}=(0,o.useLingui)(),[n,l]=(0,s.useState)(!1),c=(0,h.usePreset)("randomCoverPhotoEnabled"),[d,u]=(0,x.useLiveGlobalCreatorColor)(),[p,m]=(0,s.useState)(()=>_({liveColor:d,campaign:r,isRandomCoverPhotoEnabled:c})),[g,f]=(0,s.useState)({}),[b,k]=(0,s.useState)({}),[w,S]=(0,s.useState)(void 0);(0,s.useEffect)(()=>{let e=Object.values(g).some(e=>!0===e);n||e||m(_({liveColor:d,campaign:r,isRandomCoverPhotoEnabled:c}))},[r,d,c,n,g]);let j=(0,s.useMemo)(()=>({isEditable:!0,isEditing:n,lastValidColor:w,form:p,touched:g,errors:P({form:p,i18n:a}),hasErrors:Object.keys(P({form:p,i18n:a})).length>0,hasUnsavedChanges:Object.values(g).filter(e=>!0===e).length>0,actions:{discardChanges(){m(_({campaign:r,isRandomCoverPhotoEnabled:c})),f({}),k({}),l(!1),u(void 0)},saveChanges(){f({}),k({})},reset(){f({}),k({}),u(void 0)},enableEditMode(){l(!0)},disableEditMode(){l(!1)},setAvatarPhotoUrl(e){!b.avatarPhotoUrl&&(k(e=>({...e,avatarPhotoUrl:!0})),r.id&&v({campaign_id:r.id,updated_input_field:"avatar_photo_url"})),m(t=>({...t,avatarPhotoUrl:e})),f(t=>({...t,avatarPhotoUrl:r.avatarPhotoUrl!==e}))},setAvatarPhotoFile(e){m(t=>({...t,avatarPhotoFile:e}))},setCoverPhotoFile(e){m(t=>({...t,coverPhotoFile:e}))},setCoverPhotoUrl(e){!b.coverPhotoUrl&&(k(e=>({...e,coverPhotoUrl:!0})),r.id&&v({campaign_id:r.id,updated_input_field:"cover_photo_url"})),m(t=>({...t,coverPhotoUrl:e})),f(t=>({...t,coverPhotoUrl:r.coverPhotoUrl!==e}))},setName(e){!b.name&&(k(e=>({...e,name:!0})),r.id&&v({campaign_id:r.id,updated_input_field:"page_name"})),m(t=>({...t,name:e})),f(t=>({...t,name:r.name!==e}))},setPrimaryThemeColor(e){!b.primaryThemeColor&&(k(e=>({...e,primaryThemeColor:!0})),r.id&&v({campaign_id:r.id,updated_input_field:"primary_theme_color"})),m(t=>({...t,primaryThemeColor:e})),f(t=>({...t,primaryThemeColor:r.primaryThemeColor!==e})),u(e)},setLastValidColor(e){S(e)},setTagline(e){!b.tagline&&(k(e=>({...e,tagline:!0})),r.id&&v({campaign_id:r.id,updated_input_field:"tagline"})),m(t=>({...t,tagline:e})),f(t=>({...t,tagline:r.creationName!==e}))}}}),[p,g,n,r,a,c,b,u,w]),$=(0,s.useCallback)(e=>(e.preventDefault(),u(void 0),e.returnValue=""),[u]);return(0,s.useEffect)(()=>j.hasUnsavedChanges?(window.addEventListener("beforeunload",$),()=>{window.removeEventListener("beforeunload",$)}):C,[$,j.hasUnsavedChanges]),(0,t.jsx)(y.Provider,{value:j,children:i})}e.s(["CreatorPageHeaderEditorContext",0,function(e){let{children:o,isEditable:i,campaign:r}=e;return i?(0,t.jsx)(S,{campaign:r,children:o}):(0,t.jsx)(t.Fragment,{children:o})},"useCreatorPageHeaderEditor",0,w],3650858);var j=e.i(6132443),$=e.i(1321882),T=e.i(1108816),B=e.i(8326269),U=e.i(186845),I=e.i(3926511),M=e.i(2550472);let L=l.styled.input.withConfig({componentId:"sc-f2fa74fb-0"})`
  appearance: none;
  display: block;
  vertical-align: top;
  cursor: pointer;
  background: var(--input-color);
  aspect-ratio: 1;
  width: 100%;
  border: 2px solid var(--input-color);
  outline: none;

  &:hover {
    border-color: ${e=>{let{isColorDark:t}=e;return t?a.tokens.constant.whiteMuted.default:a.tokens.constant.blackSubtle.default}};
  }

  &:focus,
  &:active {
    border-color: ${e=>{let{isColorDark:t}=e;return t?a.tokens.constant.whiteMuted.hover:a.tokens.constant.blackSubtle.hover}};
  }
`;function R(e){let{checked:o,onChange:i,group:r,name:a,value:n,isColorDark:s}=e;return(0,t.jsx)(L,{"data-tag":`radio-${n}`,name:r,type:"radio",value:n,onChange:()=>i(n),checked:o,isColorDark:s,"aria-label":a,style:{"--input-color":n}})}var N=e.i(284322),A=e.i(8192558);let E=l.styled.div.withConfig({componentId:"sc-3e642e73-0"})`
  position: absolute;
  left: ${e=>(e.isCoverPhotoLocation,"16px")};
  top: ${e=>e.isCoverPhotoLocation?"16px":"78px"};
  display: ${e=>e.isCoverPhotoLocation?"block":"none"};

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    display: ${e=>e.isCoverPhotoLocation?"none":"block"};
  }
`,D=l.styled.div.withConfig({componentId:"sc-3e642e73-1"})`
  svg {
    fill: ${e=>e.color};
  }
  margin-top: ${a.tokens.space.x4};
`;function F(e){let{activeColor:o}=e;return(0,t.jsx)(D,{color:(0,f.isValidHex)(o)?o:"transparent",children:(0,t.jsx)($.IconDot,{})})}function O(){let{i18n:e}=(0,o.useLingui)(),{form:i,actions:r,errors:n}=w(),{primaryThemeColor:l}=i,{setPrimaryThemeColor:c}=r,d=(0,I.removeHashForDisplayPurposes)(l).toUpperCase(),u=(0,s.useMemo)(()=>{let e=Array.from({length:13}).map((e,t,o)=>360/o.length*t),t=Array.from({length:10}).map((e,t,o)=>t*(96/(o.length+1))+6);return[{hue:0,values:t.map(e=>(0,f.hcta2hex)({hue:0,chroma:0,tone:e}))},...e.map(e=>({hue:e,values:t.map(t=>(0,f.hcta2hex)({hue:e,chroma:100,tone:t}))}))]},[]);return(0,t.jsxs)(T.Stack,{gap:a.tokens.space.x12,flexWrap:"nowrap",children:[(0,t.jsx)("div",{className:A.default.colorGrid,children:u.map((e,o)=>(0,t.jsx)(T.Stack,{flexWrap:"nowrap",flexDirection:"row",children:e.values.map((i,r,a)=>(0,t.jsx)("div",{className:U.studioOverrideStyles.flexGrow,children:(0,t.jsx)(R,{group:"color",name:`Hue: ${e.hue}deg, Hex: ${i}`,value:i,checked:l===i,onChange:c,isColorDark:o<a.length/2})},`${e.hue}-${i}`))},`hue-row-${e.hue}-${o}`))}),(0,t.jsx)(B.TextInput,{error:n.primaryThemeColor,hideLabel:!0,label:e._({id:"V/qoaf",message:"Custom brand color hex code"}),prefix:"#",suffix:(0,t.jsx)(F,{activeColor:l}),onChange:e=>{let t="#"+e.target.value;(0,f.isValidHex)(t)&&c(t)},maxLength:6,size:"sm",value:d,textAlign:"center","data-tag":"primary-theme-color-input"})]})}function V(e){let{isCoverPhotoLocation:i}=e,{i18n:r}=(0,o.useLingui)(),{form:a,actions:n,errors:l,lastValidColor:c}=w(),{primaryThemeColor:d}=a,{setLastValidColor:u,setPrimaryThemeColor:h}=n,[p,m]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{void 0===l.primaryThemeColor&&d&&u(d)},[d,l.primaryThemeColor,u]),(0,t.jsx)(N.PopoverShim,{"aria-label":r._({id:"OqRISm",message:"Change creator brand color"}),loggerId:"creator-page-brand-color-picker",hideArrow:!0,renderMode:"portal",isOpen:p,onCloseRequest:()=>void(m(!1),c&&void 0!==l.primaryThemeColor?h(c):d&&4===d.length&&h((0,I.expandThreeDigitNotation)(d))),preferredPlacement:i?"bottom-start":"right-start",content:(0,t.jsx)(O,{}),maxWidth:26,minWidth:1,children:(0,t.jsx)(E,{"data-tag":"brand-color-popover-button-style",isCoverPhotoLocation:i,children:(0,t.jsx)(M.ButtonShim,{loggerId:"brand-color-popover-button",size:"md",variant:i?"insetBlack":"primary",corners:i?"pill":"rounded","aria-label":r._({id:"QdZpfr",message:"Open brand color picker popver."}),onClick:()=>{m(!0)},"data-tag":"brand-color-popover-button",icon:j.IconColorPalette})})})}function z(e,t){if(t){let t=Number(e.id)%8;return`https://c5.patreon.com/external/creator_page/cover-image-0${t}.png`}return"https://c5.patreon.com/external/creator_page/cover-photo-placeholder.jpeg"}e.s(["BrandColorPicker",0,V],2191518);let H=l.styled.div.withConfig({componentId:"sc-15a5f9c9-0"})`
  padding-top: 10%;
  transition: opacity 300ms ease-in-out;
  opacity: ${e=>+!!e.isCoverPhotoHovered};
  display: none;
  @media ${(0,r.mediaForBreakpoint)("sm")} {
    display: block;
  }
`,W=l.styled.div.withConfig({componentId:"sc-15a5f9c9-1"})`
  position: absolute;
  right: 16px;
  top: 16px;
  opacity: 1;
  display: block;
  @media ${(0,r.mediaForBreakpoint)("sm")} {
    display: none;
  }
`,G=l.styled.div.withConfig({componentId:"sc-15a5f9c9-2"})`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${a.tokens.bg.page.default};
  &:hover ${H} {
    transition: opacity 300ms ease-in-out;
    opacity: 1;
  }
`,q=l.styled.div.withConfig({componentId:"sc-15a5f9c9-3"})`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, var(--header-cover-overlay-opacity)) 100%);

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    opacity: 0;
    visibility: hidden;
  }
`,Y=l.styled.div.withConfig({componentId:"sc-15a5f9c9-4"})`
  display: flex;
  justify-content: center;
`,J=l.styled.picture.withConfig({componentId:"sc-15a5f9c9-5"})`
  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(var(--header-cover-blur));
    transform: scale(var(--header-cover-scale));
  }

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    source,
    img {
      filter: none;
      transform: none;
    }
  }
`;function K(e){let{campaign:o,hasRandomCoverPhotoCampaignFeature:i,overrideUrl:r,contentLoadedTag:a}=e;if(void 0!==r)return(0,t.jsx)(J,{children:(0,t.jsx)("img",{src:r,alt:""})});if(!o.coverPhotoUrl)return(0,t.jsx)(J,{children:(0,t.jsx)("img",{src:z(o,i),alt:""})});let{xsmall:n,small:s,medium:l,large:d,xlarge:u}=o.coverPhotoUrlSizes||{};return(0,t.jsxs)(J,{children:[(0,t.jsx)("source",{media:"(max-width: 620px)",srcSet:n}),(0,t.jsx)("source",{media:"(max-width: 1100px)",srcSet:s}),(0,t.jsx)("source",{media:"(max-width: 1400px)",srcSet:l}),(0,t.jsx)("source",{media:"(max-width: 1700px)",srcSet:d}),(0,t.jsx)("source",{media:"(min-width: 1700px)",srcSet:u}),(0,t.jsx)("img",{src:o.coverPhotoUrl,alt:"",...(0,c.keyElementProps)(a)})]})}e.s(["CoverPhotoContainer",0,function(e){let{campaign:r,contentLoadedTag:a}=e,{i18n:l}=(0,o.useLingui)(),[c,f]=(0,s.useState)(!1),b=(0,p.useCurrentUser)(),{isEditable:v,isEditing:k,actions:x,form:C,hasUnsavedChanges:y}=w(),{setCoverPhotoUrl:_,setCoverPhotoFile:P}=x,S=(0,n.useToaster)();function j(e){if(e){let t=new FileReader;t.onload=()=>{_(t?.result)},t.readAsDataURL(e)}}let $=l._({id:"zT59AD",message:"Upload new cover photo."}),T=(0,h.usePreset)("randomCoverPhotoEnabled");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(G,{onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)},children:[(0,t.jsx)(K,{campaign:r,hasRandomCoverPhotoCampaignFeature:T,overrideUrl:v&&y?C.coverPhotoUrl:void 0,contentLoadedTag:a}),v&&k&&(0,t.jsxs)(t.Fragment,{children:[b?.planName!=="lite"&&(0,t.jsx)(V,{isCoverPhotoLocation:!0}),(0,t.jsx)(W,{"data-tag":"set-cover-photo-buton-mobile",children:(0,t.jsx)(m.LazyFileInputButton,{size:"md",variant:"insetBlack",icon:i.IconPhoto,corners:"pill",onSubmitted:e=>{j(e),P(e)},"aria-label":$,acceptedFileTypes:d.IMAGE_ACCEPT_ARRAY,maxFileSize:d.MAX_PROFILE_COVER_PHOTO_SIZE_MB})})]}),!k&&(0,t.jsx)(q,{})]}),v&&(0,t.jsx)(g.TooltipShim,{loggerId:"CoverPhotoPicker",textContent:(0,u.recommendedPhotoSizeString)(l,d.RECOMMENDED_WIDTH_COVER_PHOTO_PX,d.RECOMMENDED_HEIGHT_COVER_PHOTO_PX),preferredPlacement:"bottom",children:(0,t.jsx)(H,{isCoverPhotoHovered:c,onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)},children:(0,t.jsx)(Y,{"data-tag":"cover-photo-file-button",children:(0,t.jsx)(m.LazyFileInputButton,{variant:"insetBlack",corners:"pill",icon:i.IconPhoto,onSubmitted:e=>{j(e),P(e)},onError:e=>{S.error(e)},"aria-label":$,"data-tag":"set-cover-photo-buton",acceptedFileTypes:d.IMAGE_ACCEPT_ARRAY,maxFileSize:d.MAX_PROFILE_COVER_PHOTO_SIZE_MB,children:(0,t.jsx)(o.Trans,{id:"C9i1Ml",message:"Set cover",context:"Set cover photo image."})})})})})]})},"getFallbackCoverPhotoUrl",0,z],2506685)},2665536,e=>{"use strict";var t=e.i(9391398),o=e.i(226931),i=e.i(6191788),r=e.i(9760814);let a=r.styled.button.withConfig({componentId:"sc-76292ff6-0"})`
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  color: ${o.tokens.constant.white.default};
  border-radius: 8px;
  background-color: transparent;
`,n=i.default.forwardRef(function(e,i){let{"aria-label":r,icon:n,onClick:s,size:l,overlayActionAttributes:c,...d}=e,{onClick:u,...h}=c??{};return(0,t.jsx)("div",{ref:i,children:(0,t.jsx)(a,{...d,"aria-label":r,onClick:u??s,...h,children:(0,t.jsx)(n,{size:"24px",color:o.tokens.constant.white.default})})})});e.s(["FloatingCircleIconButton",0,n])},8990971,e=>{"use strict";var t=e.i(4057543),o=e.i(4580629),i=e.i(1302370),r=e.i(4813620),a=e.i(9612495),n=e.i(1768313),s=e.i(9391398),l=e.i(6191788);let c=()=>{let e=(0,l.useMemo)(()=>`triangleMask-${Math.random().toString(36).substring(2,9)}`,[]);return(0,s.jsxs)("svg",{width:"29",height:"21",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29 21",fill:"currentColor",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("mask",{id:e,children:[(0,s.jsx)("rect",{width:"29",height:"21",fill:"white"}),(0,s.jsx)("path",{d:"M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z",fill:"black"})]})}),(0,s.jsx)("g",{fillRule:"evenodd",children:(0,s.jsx)("path",{d:"M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z",mask:`url(#${e})`})})]})},d=new Map([["discord","Discord"],["facebook","Facebook"],["google","Google"],["instagram","Instagram"],["reddit","Reddit"],["spotify","Spotify"],["twitch","Twitch"],["twitter","Twitter"],["vimeo","Vimeo"],["youtube","YouTube"],["tiktok","TikTok"]]);e.s(["getSocialConstants",0,function(e,s){switch(s){case"facebook":return{displayName:e._({id:"CD71bO",message:"Facebook"}),socialColorName:"facebookBlue",socialDarkColorName:"dark",socialIcon:t.IconBrandFacebook};case"instagram":return{displayName:e._({id:"J3jwGQ",message:"Instagram"}),socialColorName:"dark",socialDarkColorName:"dark",socialIcon:o.IconBrandInstagram};case"twitter":return{displayName:e._({id:"U8Xq9h",message:"Twitter"}),socialColorName:"twitterBlue",socialDarkColorName:"dark",socialIcon:n.IconBrandTwitter};case"spotify":return{displayName:e._({id:"GN6AJf",message:"Spotify"}),socialColorName:"spotifyGreen",socialDarkColorName:"dark",socialIcon:i.IconBrandSpotify};case"youtube":return{displayName:e._({id:"CaqYvT",message:"YouTube"}),socialColorName:"youtubeRed",socialDarkColorName:"dark",socialIcon:c};case"twitch":return{displayName:e._({id:"MXwkvF",message:"Twitch"}),socialColorName:"twitchPurple",socialDarkColorName:"dark",socialIcon:a.IconBrandTwitch};case"tiktok":return{displayName:e._({id:"PWtx1+",message:"TikTok"}),socialColorName:"tiktokBlue",socialDarkColorName:"dark",socialIcon:r.IconBrandTiktok};default:return null}},"serviceToSocialsName",0,d],8990971)},3926511,e=>{"use strict";e.s(["expandThreeDigitNotation",0,function(e){if(/^#[0-9a-f]{3}$/i.test(e)){let t=e[1],o=e[2],i=e[3];return`#${t}${t}${o}${o}${i}${i}`}return e},"removeHashForDisplayPurposes",0,function(e){return"#"===e.charAt(0)?e.substring(1):e}])},8923641,e=>{"use strict";var t=e.i(8205331),o=e.i(6191788);e.i(2420945);var i=e.i(7033823),r=e.i(7949488);e.i(8085515);var a=e.i(7284871),n=e.i(1460897),s=e.i(6826702);let l=["two_way","current_user_is_blocker","current_user_is_blockee"],c=e=>l.includes(e);e.s(["getBlockExists",0,c,"useCurrentUserBlockStatus",0,function(e){let[l,d]=(0,o.useState)(e?.currentUserBlockStatus??"none"),u=c(l),h=["two_way","current_user_is_blocker"].includes(l),p=e?.id,m=(0,o.useMemo)(()=>(0,a.getIsUserBlocked)(p),[p]),g=(0,r.useSelector)(m),f=(0,i.useDispatch)(),b=g?()=>f((0,n.openModal)()):null,[v]=(0,t.useNion)(p?(0,s.userBlockStatusDeclaration)(p):"");return(0,o.useEffect)(()=>{v?.currentUserBlockStatus&&d(v?.currentUserBlockStatus)},[v?.currentUserBlockStatus]),[u,h,b]}])},345678,e=>{"use strict";var t=e.i(9391398),o=e.i(2358280),i=e.i(6112151),r=e.i(8981215),a=e.i(226931),n=e.i(9760814);e.i(7025552);var s=e.i(6298717),l=e.i(8748300),c=e.i(9086540);let d=n.styled.div.withConfig({componentId:"sc-83b0c48d-0"})`
  text-align: center;

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    float: right;
    text-align: left;
  }
`,u=n.styled.div.withConfig({componentId:"sc-83b0c48d-1"})`
  text-align: center;

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    text-align: left;
  }
`,h=n.styled.div.withConfig({componentId:"sc-83b0c48d-2"})`
  position: fixed;
  box-sizing: border-box;
  left: 0px;
  right: 0px;
  bottom: 0;

  @media ${(0,r.mediaForBreakpoint)("xs")} {
    height: ${e=>e.isViewingAsWaitlist?"5.5rem":"4.5rem"};
  }

  @media ${(0,r.mediaForBreakpoint)("sm")} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 4.5rem;
  }

  @media ${(0,r.mediaForBreakpoint)("lg")} {
    height: 4rem;
    padding: 1rem;
  }

  border-top: ${a.tokens.borderWidth.thin} solid ${a.tokens.border.muted.default};
  background-color: ${a.tokens.bg.page.default};
  z-index: calc(${a.tokens.layer.z11} + 1);
  ${(0,s.navWidthsCSS)("left")}
`;e.s(["CreatorPageFooter",0,function(e){let{i18n:r}=(0,o.useLingui)(),a=e.viewingAs??(0,l.getViewingAs)(),n=(0,t.jsx)(t.Fragment,{children:"·"}),s=r._({id:"l4xI/J",message:"Viewing as: Member"}),p=r._({id:"Apn4PM",message:"Viewing as: Public"}),m=r._({id:"ChABkb",message:"Viewing as: Public (your waitlist)"}),g=r._({id:"AgGTzo",message:"Back to Creator View"});return(0,t.jsxs)(h,{isViewingAsWaitlist:"waitlist"===a,children:[(0,t.jsx)(d,{children:(0,t.jsx)(c.TextLinkShim,{href:e.campaign.url,variant:"primary",loggerId:"app-components-CreatorPageHeader-components-CreatorPageFooter-TextLink0",children:g})}),(0,t.jsx)(u,{children:"waitlist"===a?(0,t.jsxs)(i.BodyText,{children:[m,"  ",n,"  ",(0,t.jsx)(c.TextLinkShim,{loggerId:"CreatorPageHeader-CreatorPageFooter-edit-settings",variant:"primary",href:"/settings-creator/account#management",children:(0,t.jsx)(o.Trans,{id:"OokakM",message:"Edit settings",context:"Link to edit settings page"})})]}):"public"===a?p:s})]})}])},6057184,e=>{"use strict";var t=e.i(2358280),o=e.i(4121657);e.s(["useCreatorPageMeta",0,e=>{let i,r,{i18n:a}=(0,t.useLingui)(),n=a._({id:"E7u1xZ",message:"Patreon"}),{creatorTeaserImageUrl:s}=(0,o.useCreatorShareCards)();if(e){let t=e.creationName,o=e.name;n=a._({id:"C0Y+6/",message:"{campaignName}",values:{campaignName:o}}),t&&(n=a._({id:"ORRUJR",message:"{campaignName} | {creation}",values:{campaignName:o,creation:t}})),r=e?.creationName??"",i={title:a._({id:"ITFOQ0",message:"Get more from {campaignName} on Patreon",values:{campaignName:o}})}}let l={title:n,desc:r,openGraph:i};return s&&(l.imageUrl=s),l}])},7607213,e=>{"use strict";var t=e.i(9391398),o=e.i(2925392),i=e.i(226931),r=e.i(6191788),a=e.i(9760814),n=e.i(829490);let s=a.styled.div.withConfig({componentId:"sc-d8c0715e-0"})`
  display: flex;
  justify-content: center;
  position: relative;

  /* mobile-web border bottom (since we overflow here
     * and want the child items to be able to put a border on
     * top of this one, we need to create a border on the
     * inside of the element) */
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 0;
    width: 100%;
    border-bottom: ${i.tokens.borderWidth.thin} solid ${i.tokens.border.muted.default};
  }
`,l=a.styled.nav.withConfig({componentId:"sc-d8c0715e-1"})`
  background-color: var(--background-color-fill);

  /* hide scrollbars */
  overflow: auto hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* feathered edges to help signal that this list is scrollable on mobile web */
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${i.tokens.space.x32};
    z-index: 2;
    pointer-events: none;
    transition: opacity 350ms ease;
  }

  &::before {
    left: 0;
    background-image: linear-gradient(to left, var(--background-color-transparent), var(--background-color-fill));
    opacity: ${e=>+!!e.isLeftOverflowing};
  }

  &::after {
    right: 0;
    background-image: linear-gradient(to right, var(--background-color-transparent), var(--background-color-fill));
    opacity: ${e=>+!!e.isRightOverflowing};
  }
`,c=a.styled.ul.withConfig({componentId:"sc-d8c0715e-2"})`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: ${e=>e.removeMargin?0:"auto !important;"};
  width: fit-content;
`,d=a.styled.li.withConfig({componentId:"sc-d8c0715e-3"})`
  display: block;

  :first-child {
    margin-left: auto;
  }

  :last-child {
    margin-right: auto;
  }
`,u=(0,a.styled)(n.UnstyledLink).withConfig({componentId:"sc-d8c0715e-4"})`
  &&& {
    position: relative;
    display: flex;
    align-items: center;
    height: ${i.tokens.space.x40};
    margin: 0 ${i.tokens.space.x16};
    color: ${i.tokens.content.regular.default};
    ${(0,o.cssForHeadingText)({size:"sm"})};

    &[aria-current='page'] {
      color: ${i.tokens.content.primary.default};
    }

    &[aria-current='page']::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 20%;
      width: 60%;
      height: 1px;
      background-color: ${i.tokens.content.primary.default};
      z-index: 1;
    }
  }
`;e.s(["PageNavigation",0,function(e){let{"aria-labelledby":o,links:i,onLinkClick:a,removeMargin:n=!1}=e,[h,p]=(0,r.useState)(0),[m,g]=(0,r.useState)(0),[f,b]=(0,r.useState)(0),v=(0,r.useRef)(null),k=(0,r.useRef)(null),x=(0,r.useCallback)(e=>{e.preventDefault(),a(new URL(e?.currentTarget?.href))},[a]),C=(0,r.useCallback)(()=>{p(v.current?.scrollLeft??0)},[]);(0,r.useEffect)(()=>{if("function"==typeof ResizeObserver){let e=new ResizeObserver(()=>{let e=v.current,t=k.current,o=e.getBoundingClientRect(),i=t.getBoundingClientRect();g(o.width),b(i.width)}),t=v.current;return e.observe(t),()=>e.unobserve(t)}},[]);let y=(0,r.useMemo)(()=>h>0,[h]),w=(0,r.useMemo)(()=>{let e=Math.floor(f-m);return e>0&&h<e},[h,m,f]);return(0,t.jsx)(s,{children:(0,t.jsx)(l,{ref:v,"aria-labelledby":o,onScroll:C,isLeftOverflowing:y,isRightOverflowing:w,children:(0,t.jsx)(c,{ref:k,removeMargin:n,children:i.map(e=>(0,t.jsx)(d,{children:(0,t.jsx)(u,{href:e.href,onClick:x,"aria-current":e.isActive?"page":void 0,"data-tag":`page-navigation-${e.label}`,children:e.label})},e.href))})})})}])},3042646,e=>{"use strict";var t=e.i(9391398),o=e.i(240284),i=e.i(6774867),r=e.i(5303631),a=e.i(8981215),n=e.i(226931),s=e.i(9760814),l=e.i(457009);let c=`${n.tokens.borderWidth.thin} solid ${n.tokens.border.muted.default}`,d=s.css`
  border-top: 0;
  border-bottom: ${c};
`,u=s.css`
  top: 0;
  transform: translateY(${e=>e.$isVisible?"0":"-100%"});

  ${e=>"header-footer"===e.$variant&&d}
`,h=s.css`
  bottom: 0;
  bottom: ${e=>"string"==typeof e.$bottomOffset&&e.$bottomOffset};
  ${e=>"object"==typeof e.$bottomOffset&&(0,r.legacyResponsiveProp)("bottom",e.$bottomOffset)};
  transform: translateY(${e=>e.$isVisible?"0":"100%"});

  border-bottom: 0;
  border-top: ${c};
  ${e=>(0,r.legacyResponsiveProp)("border-top",{sm:"header-footer"===e.$variant?c:"0"})}
`,p=s.css`
  ${h}

  @media ${(0,a.mediaForBreakpoint)("sm")} {
    bottom: unset;
    ${u}
  }
`,m=s.css`
  background-color: ${n.tokens.bg.base.default};
  left: 0;
  @media ${(0,a.mediaForBreakpoint)("sm")} {
    left: ${e=>{let{$showNav:t}=e;return t?(0,i.convertLegacyUnitValue)(l.SLIM_NAV_WIDTH):0}};
  }

  @media ${(0,a.mediaForBreakpoint)("lg")} {
    left: ${e=>{let{$isForceSlimEnabled:t}=e;return(0,i.convertLegacyUnitValue)(t?l.SLIM_NAV_WIDTH:l.BASE_NAV_WIDTH)}};
  }
`,g=s.css`
  left: 0;

  @media ${(0,a.mediaForBreakpoint)("sm")} {
    left: unset;
  }
`,f=s.css`
  background-color: ${n.tokens.bg.pageAlt.default};
  box-shadow: ${n.tokens.boxShadow.high};
  left: 0;
  right: 0;
  width: 100%;
`,b=s.styled.div.withConfig({componentId:"sc-e269e6f9-0"})`
  z-index: ${n.tokens.layer.z11};
  position: ${e=>e.$position&&e.$isVisible?e.$position:"fixed"};
  right: 0;
  transition: ${n.tokens.transition.slow.easing} ${n.tokens.transition.slow.duration};
  width: ${e=>e.$width};
  box-sizing: ${e=>e.$boxSizing};

  padding: ${e=>e.$noPadding?0:n.tokens.space.x16};

  ${e=>"top"===e.$anchorPoint&&u}
  ${e=>"bottom"===e.$anchorPoint&&h}
  ${e=>"auto"===e.$anchorPoint&&p}

  ${e=>"header-footer"===e.$variant&&m}
  ${e=>"floating-card"===e.$variant&&g}
  ${e=>"footer-primary"===e.$variant&&f}
`;e.s(["StickyHeaderFooter",0,function(e){let{anchorPoint:i,isVisible:r,noPadding:a,bottomOffset:n,variant:s="header-footer",position:l,width:c,boxSizing:d,showNav:u=!0,children:h}=e,{isForceSlimEnabled:p}=(0,o.useNavigation)();return(0,t.jsx)(b,{$showNav:u,$anchorPoint:i,$isVisible:r,$noPadding:a,$bottomOffset:n,$variant:s,$position:l,$width:c,$boxSizing:d,$isForceSlimEnabled:p,children:h})}],3042646)},1302370,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconBrandSpotify",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.423a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.624.624 0 0 1-.277-1.216c3.809-.87 7.076-.495 9.712 1.116.294.18.387.563.207.857M17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.653-6.786-2.131-9.965-1.166A.78.78 0 0 1 6.32 11.3c3.631-1.102 8.146-.568 11.233 1.329a.78.78 0 0 1 .257 1.072m.105-2.836c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.116 1.338a.934.934 0 1 1-.955 1.608"})})});e.s(["IconBrandSpotify",0,o])},9612495,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconBrandTwitch",viewBox:"0 0 24 24",...e,children:[(0,t.jsx)("path",{d:"M15.083 12h1.667V7h-1.667zm-2.916 0H10.5V7h1.667z"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M3 5.478 4.25 2h17.083v12.175l-5 5.215h-3.75l-2.5 2.61h-2.5v-2.61H3zm16.667 7.826V3.738H5.916v12.61h3.752v2.606l2.499-2.606h4.582z",clipRule:"evenodd"})]})});e.s(["IconBrandTwitch",0,o])},2398060,e=>{"use strict";e.s(["getCampaignCoverPhotoUrl",0,function(e,t){if(t){let t=Number(e.id)%8;return e?.coverPhotoUrl||"https://c5.patreon.com/external/creator_page/cover-image-0"+t+".png"}return e?.coverPhotoUrl||"https://c5.patreon.com/external/creator_page/cover-photo-placeholder.jpeg"}])},4121657,e=>{"use strict";var t=e.i(6569004);e.s(["useCreatorShareCards",0,function(){return{imageWidthPx:392,imageHeightPx:205.8,creatorTeaserImageUrl:(0,t.usePreset)("campaignCreatorTeaserUrl")}}])},7210657,e=>{"use strict";var t=e.i(8683249);e.s(["logCreatorPromotionModalClickedShareButtonEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Creator Promotion Modal : Clicked Share Button",e)}])},3413409,e=>{"use strict";var t=e.i(8475434),o=e.i(8022561),i=e.i(7492626),r=e.i(8177155);e.s(["hasAboutMe",0,e=>e.summary&&0!==e.summary.length||!!e.mainVideoEmbed,"landingPageLandedEventProperties",0,e=>{let{campaign:t,canSeeNsfw:o,currentUserId:a,isPageGated:n,isAnniversaryBilling:s}=e;return{...(e=>{let{campaign:t,canSeeNsfw:o,currentUserId:a,isPageGated:n,isAnniversaryBilling:s}=e,l=t.creator?.id,c=t.currentUserPledge?.amountCents,d=!!t?.currentUserIsFreeMember,u=!!t.primaryThemeColor,h=(t.rewards??[]).filter(e=>e.published),p=h.some(e=>e.imageUrl),m=h.length,g=h.length?Math.min(...h.map(e=>e.amountCents)):void 0,f=t.rewards?.filter(r.isRealPublishedTier),b=f?.length,v=b&&b>0?f?.[0].patronCurrency:t.currency||"",k=f?.filter(e=>(0,r.tierHasPromoCode)(e)),x=k&&k.length>0,C=!!b&&b>0&&f?.[0].showPlusTaxLabel,y=!!(0,i.getMerchRewards)(h).length,w=!!(t&&t.mainVideoEmbed),_=t.rewards?.some(e=>e.freeTrialConfiguration?.status==="enabled");return{any_reward_has_image:p,campaign_currency:t.currency,campaign_id:t.id,creator_has_promo_code:!!x,creator_id:String(l),creator_tier_count:m,current_user_pledge_cents:c??0,custom_color_contrast:"0",custom_color_enabled:u,custom_color_hue:0,custom_color_saturation:0,has_active_trial:!!_,has_merch:y,has_promo_code:!!x,has_tiers_with_sales_tax:C,has_video:w,is_nsfw:!!t.isNsfw,is_owner:l===a,is_target:!1,lowest_tier_price_cents:g,membership_type:(c??0)>0?"active_patron":d?"free_member":void 0,patron_count:t.patronCount??0,patron_currency:v,rewards_count:b??0,...void 0!==o&&{can_see_nsfw:!!o},...void 0!==n&&{is_page_gated:n},...void 0!==s&&{anniversary_billing:s}}})({campaign:t,canSeeNsfw:o,currentUserId:a,isPageGated:n,isAnniversaryBilling:s}),can_see_nsfw:!!o,is_page_gated:n,anniversary_billing:s}},"useCollectionsTabLabel",0,function(){let e=(0,o.useCampaign)(),i=!!e?.numShows,r=!!e?.numCollections;return i&&!r?t.podcastsString:t.collectionsString},"useShouldShowChatsTab",0,function(){let e=(0,o.useCampaign)();return e?.shouldDisplayChatTab},"useShouldShowCollectionsTab",0,function(){let e=(0,o.useCampaign)(),t=!!e?.numShows;return!!e?.numCollections||t}])},6132443,e=>{"use strict";var t=e.i(9391398);let o=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconColorPalette",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M12 3.75c-3.513 0-5.763.934-7.135 2.034S3 8.15 3 8.812c0 .306.102.54.317.698s.544.24.995.24h1.313c.434 0 .715.101.888.245a.64.64 0 0 1 .237.505c0 .571-.937.95-1.875 1.543C3.938 12.635 3 13.44 3 14.862c0 1.008.55 2.356 1.95 3.45S8.6 20.25 12 20.25c3.214 0 5.652-.723 7.286-2.115S21.75 14.679 21.75 12c0-2.68-.83-4.742-2.464-6.135S15.214 3.75 12 3.75M11.25 18q-.928-.002-1.401-.385c-.314-.253-.474-.628-.474-1.115s.16-.862.474-1.115c.314-.254.783-.385 1.401-.385s1.087.131 1.401.385c.314.253.474.628.474 1.115s-.16.862-.474 1.115q-.473.383-1.401.385m4.5-8.25c-.618 0-1.087-.131-1.401-.385-.314-.253-.474-.628-.474-1.115s.16-.862.474-1.115c.314-.254.783-.385 1.401-.385s1.087.131 1.401.385c.314.253.474.628.474 1.115s-.16.862-.474 1.115c-.314.254-.783.385-1.401.385m1.5 5.25c-.618 0-1.087-.131-1.401-.385-.314-.253-.474-.628-.474-1.115s.16-.862.474-1.115c.314-.254.783-.385 1.401-.385s1.087.131 1.401.385c.314.253.474.628.474 1.115s-.16.862-.474 1.115c-.314.254-.783.385-1.401.385"})})});e.s(["IconColorPalette",0,o])},7762691,e=>{"use strict";var t=e.i(9391398),o=e.i(766274),i=e.i(6191788);e.i(2420945);var r=e.i(4927129),a=e.i(8113426),n=e.i(8519609),s=e.i(7226241),l=e.i(6055974),c=e.i(2892958),d=e.i(8346660),u=e.i(1147204),h=e.i(3902644);let p=(0,l.compose)(n.withRenderAsClient,s.withCurrentUser,(0,r.connect)(e=>({campaign:{sourceId:(0,o.selectData)("campaign.id")(e)},creator:{sourceId:(0,o.selectData)("creator.id")(e)},post:{sourceId:(0,o.selectData)("post.id")(e)},pageSource:e.pageSource})),a.withAgeGating)(e=>{let{isPageAgeGated:o,handleAgeConfirm:r,handleNoNsfwCreatorVisibility:a,isYesButtonLoading:n,isNoButtonLoading:s,campaign:l,creator:p,post:m,pageSource:g,renderAsClient:f}=e,{push:b}=(0,u.useNavigation)(),{pathname:v}=(0,d.useCurrentRoute)(),[k,x]=(0,i.useState)(!1),C="checkout"===v.split("/")[0];if(!o||C||!f||k)return null;let y=m.sourceId||p.sourceId||l.sourceId,w=async()=>{x(!0),await r({source:g,source_id:y})},_=async()=>{await a();let e=document.referrer?new URL(document.referrer):void 0;e&&(0,c.isPatreonDomain)(e)?window.history.back():b("/home")};return(0,t.jsx)(h.ViewNsfwConsentModal,{onClickYes:w,onClickNo:_,isYesButtonLoading:n,isNoButtonLoading:s,isOpen:!0})});e.s(["AgeVerificationModal",0,p])},7226241,e=>{"use strict";let t=(0,e.i(9376468).default)("currentUser");e.s(["withCurrentUser",0,t])},8113426,3902644,e=>{"use strict";var t=e.i(9391398),o=e.i(8205331),i=e.i(6191788),r=e.i(8683249),a=e.i(6569004),n=e.i(7680435),s=e.i(6018844),l=e.i(8619454);e.s(["withAgeGating",0,function(e){return function(c){let d=(0,n.useCurrentUser)(),u=(0,a.usePreset)("canSeeNsfw"),[h,p]=(0,i.useState)(!1),[m,g]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1),[,v]=(0,o.useNion)({dataKey:"currentUser",endpoint:(0,s.buildUrl)("/current_user",{})}),[k,x]=(0,o.useNion)({dataKey:"setCanSeeNsfw",endpoint:(0,s.buildUrl)("confirm-can-see-nsfw"),apiType:"genericPatreonApi"}),[,C]=(0,o.useNion)({dataKey:"denySeeNSFW",endpoint:(0,s.buildUrl)("deny-see-nsfw"),apiType:"genericPatreonApi"}),y=(0,i.useCallback)(async e=>{if(g(!0),p(!0),d){let e=new l.JsonApiPayload("user",{can_see_nsfw:!0});await v.patch(e.toRequest())}else await x.post();g(!1),r.patreonTrackerClient.logTypedEvent("Patron Age Verification : Clicked Confirm",e)},[v,d,x]),w=(0,i.useCallback)(async()=>{if(b(!0),p(!1),d){let e=new l.JsonApiPayload("user",{can_see_nsfw:!1});await v.patch(e.toRequest())}else await C.post();b(!1)},[v,d,C]),_=(0,i.useCallback)(()=>!!(h||!d&&(u||k?.canSeeNsfw)||d?.canSeeNsfw),[d,h,u,k?.canSeeNsfw]);return(0,t.jsx)(e,{...c,canSeeNsfw:_(),handleAgeConfirm:y,handleNoNsfwCreatorVisibility:w,isYesButtonLoading:m,isNoButtonLoading:f})}}],8113426);var c=e.i(2358280),d=e.i(8534334),u=e.i(6112151),h=e.i(5483377),p=e.i(5363035),m=e.i(1108816),g=e.i(226931),f=e.i(4444797);e.s(["ViewNsfwConsentModal",0,e=>{let{onClickYes:o,onClickNo:i,isOpen:r,isYesButtonLoading:a,isNoButtonLoading:n}=e,{i18n:s}=(0,c.useLingui)(),l=s._({id:"T/nMzO",message:"Are you 18 years or older?"}),b=s._({id:"oGUhfA",message:"By continuing you may see adult images, videos, writing, and other media."}),v=s._({id:"OSnU9D",message:"I am 18+ and want to continue"}),k=s._({id:"G3k3bL",message:"Don’t show me adult creators"}),x=s._({id:"j8v5Ms",message:"You can change your 18+ preferences in Settings."});return(0,t.jsxs)(h.Dialog,{"data-tag":"features-tns-AgeGatingModal",loggerId:"features-tns-AgeGatingModal",id:"features-tns-AgeGatingModal",isOpen:r,size:"sm",primaryAction:{loggerId:"age-verification-button-yes","data-tag":"age-verification-button-yes",onClick:()=>o(),isLoading:a,label:v},secondaryAction:{loggerId:"no-nsfw-visibility-button","data-tag":"no-nsfw-visibility-button",onClick:()=>i(),isLoading:n,label:k,variant:"primary"},showCloseButton:!1,actionLayout:"vertical-full",children:[(0,t.jsx)(m.Stack,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"center",children:(0,t.jsx)(d.Avatar,{size:"80px",src:(0,f.buildStaticUrl)("external/nsfw/nsfw-modal-image.png"),"data-tag":"age-gating-modal-image"})}),(0,t.jsxs)(m.Stack,{gap:g.tokens.space.x12,children:[(0,t.jsx)(p.HeadingText,{as:"h1",align:"center",size:"xl",children:l}),(0,t.jsx)(u.BodyText,{as:"p",size:"lg","data-tag":"age-gating-modal-text-body",children:b}),(0,t.jsx)(u.BodyText,{color:g.tokens.content.muted.default,as:"p","data-tag":"age-gating-modal-text-body",children:x})]})]})}],3902644)},6237702,e=>{"use strict";var t=e.i(8683249);e.s(["logCreatorPageClickedBlockButtonEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Creator Page : Clicked Block Button",e)}])},8085515,6826702,1460897,e=>{"use strict";var t=e.i(9391398),o=e.i(9544629),i=e.i(3029412),r=e.i(2358280),a=e.i(9376468),n=e.i(4298600),s=e.i(766274),l=e.i(9336468),c=e.i(6112151),d=e.i(1789610),u=e.i(7342776),h=e.i(2170773),p=e.i(2859206),m=e.i(226931),g=e.i(6191788);e.i(2420945);var f=e.i(4927129),b=e.i(3451400),v=e.i(6018844);let k=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{dataKey:`user:${e}`,endpoint:(0,v.buildUrl)(`user/${e}`,{fields:{user:["current_user_block_status"]}}),fetchOnMount:t}};e.s(["userBlockStatusDeclaration",0,k],6826702);var x=e.i(2550472),C=e.i(6631653),y=e.i(9086540),w=e.i(8475434),_=e.i(5851122),P=e.i(6055974),S=e.i(7101811),j=e.i(3888663),$=e.i(8619454),T=e.i(5340362);let B=e=>`modules/blockUser/${e}`,U=B("OPEN_MODAL"),I=B("CLOSE_MODAL"),M={isModalOpen:!1},L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{...e,isModalOpen:!0};case I:return{...e,isModalOpen:!1};default:return e}},R=()=>({type:I}),N=e=>!!e.modules?.blockUser?.modal?.isModalOpen;e.s(["closeModal",0,R,"getIsModalOpen",0,N,"modal",0,L,"openModal",0,()=>({type:U})],1460897);let A=(0,T.combineReducers)({modal:L}),E=["blocked.null","block_action.blocked","block_action.chosen_reason"],D={user:["full_name"]};class F extends g.Component{static contextType=r.LinguiContext;context;state={selectedReason:null,isWorking:!1,error:null};componentDidUpdate(e){this.props.userIdToBlock!==e.userIdToBlock&&this.props.nion.block.actions.get()}canUnblock=()=>{let{block:e}=this.props.nion,t=e.data;return(0,n.exists)(t)&&(0,S.get)(()=>t.blockAction.id)};block=e=>{let{block:t}=this.props.nion,{currentUser:o,userIdToBlock:i}=this.props,r=new $.JsonApiPayload("block_action",{});r.addRelationship("blocker",{type:"user",id:o.id}),r.addRelationship("blocked",{type:"user",id:i}),e&&r.addRelationship("chosen_reason",{type:"block_reason",id:e});let a=(0,v.buildUrl)("/block",{include:E,fields:D});return this.setState({isWorking:!0}),t.actions.post(r.toRequest(),{endpoint:a}).then(()=>{this.setState({isWorking:!1}),this.props.closeModal(),this.props.nion.currentUserBlockStatus.actions.get()}).catch(e=>{this.setState({isWorking:!1}),this.setState({error:e})})};getBlockActionId=()=>{let{block:e}=this.props.nion,t=e.data;return(0,S.get)(()=>t.blockAction.id)};unblock=()=>{let{block:e}=this.props.nion,t=this.getBlockActionId(),o=(0,v.buildUrl)(`/block_action/${t}`);return this.setState({isWorking:!0}),e.actions.delete({endpoint:o}).then(()=>{this.setState({isWorking:!1}),this.props.closeModal(),this.props.nion.currentUserBlockStatus.actions.get()}).catch(e=>{this.setState({isWorking:!1}),this.setState({error:e})})};renderReasons=()=>{if(!this.canUnblock()&&this.props.inCreatorView){let e;return(0,t.jsx)("form",{children:[{id:1,code:"pirating",displayDescription:(e=this.context.i18n)._({id:"p15MR2",message:"This person took content but didn't follow through on their pledge."})},{id:2,code:"harassment",displayDescription:e._({id:"weSSLD",message:"This person harassed me or one of my patrons."})},{id:3,code:"fake",displayDescription:e._({id:"Px9YCB",message:"This account is fake or is posting spam."})},{id:5,code:"friendly_fraud",displayDescription:e._({id:"+8nlYm",message:"This person filed a chargeback with the intent to receive benefits for free."})},{id:6,code:"underage",displayDescription:e._({id:"jLeJ65",message:"This person is underage and is trying to access adult content."})},{id:7,code:"unsafe",displayDescription:e._({id:"G1iRXM",message:"This person is engaging in inappropriate behaviours towards underage users."})},{id:4,code:"other",displayDescription:e._({id:"1ueaBD",message:"Something else not listed here."})}].map(this.renderReason)})}};renderReason=e=>(0,t.jsx)(d.Box,{mb:2,children:(0,t.jsx)(d.Box,{alignContent:"flex-start",alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",onClick:t=>{t.stopPropagation(),this.setState({selectedReason:e.id})},children:(0,t.jsx)(h.RadioButton,{id:e.id,name:"reason",value:e.id,checked:e.id===this.state.selectedReason,children:e.displayDescription})})},e.id);headerText=()=>{let{nameToBlock:e}=this.props;return this.canUnblock()?(0,t.jsx)(C.DialogShim.Title,{children:(0,t.jsx)(r.Trans,{id:"WPQm/L",values:{nameToBlock:e},message:"Unblock {nameToBlock}?",context:"Title of pop-up after user clicks on 'Unblock' for a user."})}):(0,t.jsx)(C.DialogShim.Title,{children:(0,t.jsx)(r.Trans,{id:"rPP9k1",values:{nameToBlock:e},message:"Block {nameToBlock}?",context:"Title of pop-up after user clicks on 'Block user'"})})};renderFooter=()=>{let{block:e}=this.props.nion,{isWorking:o}=this.state,i=this.canUnblock(),a=(0,t.jsx)(d.Box,{mr:2,display:"inline-block",children:(0,t.jsx)(x.ButtonShim,{loggerId:"modules-BlockUserModal-containers-BlockUserModal-close-modal",variant:"tertiary",onClick:this.props.closeModal,children:(0,t.jsx)(w.CancelText,{})})}),n=this.state.selectedReason,s=e=>{e.stopPropagation(),i?this.unblock().then(()=>this.props.onBlockOrUnblock&&this.props.onBlockOrUnblock("unblock")):this.block(n).then(()=>this.props.onBlockOrUnblock&&this.props.onBlockOrUnblock("block"))},{isLoading:c}=e.request,u=(0,t.jsx)(x.ButtonShim,{loggerId:"modules-BlockUserModal-containers-BlockUserModal-block",variant:"primary",isLoading:c||o,onClick:s,children:i?(0,w.UnblockString)(this.context.i18n):(0,w.blockString)(this.context.i18n)}),{error:h}=this.state;return(0,t.jsxs)(t.Fragment,{children:[h?(0,t.jsx)(p.Spacer,{mt:m.tokens.space.x8,children:(0,t.jsx)(l.Banner,{placement:"inline-small",variant:"critical",children:(0,t.jsx)(r.Trans,{id:"YR8Qm1",message:"There was an error. Try again.",context:"Message when something went wrong."})})}):null,(0,t.jsxs)(d.Box,{mt:2,display:"flex",flexDirection:"row",children:[a,u]})]})};unblockMessage=()=>(0,t.jsx)(c.BodyText,{as:"span",children:(0,t.jsx)(r.Trans,{id:"j+Eu7k",message:"They'll be able to see your comments and messages in communities you share. If you're a creator, they can become a member, interact with you and your community, and see your posts.",context:"Info text in the unblock modal"})});blockMessage=()=>{let e,o=!!this.props.inCreatorView,i=this.props.isBlockingCreator;return e=o?"creator_to_fan":i?"fan_to_creator":"fan_to_fan",(0,t.jsx)(_.BlockReasonText,{blockType:e})};renderContent=()=>{let e=this.canUnblock(),o=this.unblockMessage(),i=this.blockMessage();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Spacer,{mb:m.tokens.space.x16,children:e?o:i}),(0,t.jsxs)(y.TextLinkShim,{href:(0,j.getZendeskUrl)("/articles/207982093",this.context.i18n.locale),loggerId:"app-modules-BlockUserModal-containers-BlockUserModal-index-TextLink0",children:[" ",(0,t.jsx)(r.Trans,{id:"e/9WFR",message:"Learn more about blocking",context:"Link on modal that allows creator to take block/unblock actions."})]})]})};onRequestClose=()=>{this.setState({error:null}),this.props.onRequestClose()};render=()=>{let{isModalOpen:e,nion:{block:o}}=this.props;return(0,t.jsx)(C.DialogShim,{loggerId:"modules-BlockUserModal-containers-BlockUserModal",isOpen:e,onCloseRequest:this.onRequestClose,onCloseAnimationComplete:this.props.onCloseAnimationComplete,title:this.headerText(),children:o.request.isLoading||!o.request.isLoaded?(0,t.jsx)(u.LoadingSpinner,{}):(0,t.jsxs)(t.Fragment,{children:[this.renderReasons(),this.renderContent(),this.renderFooter()]})})}}let O=(0,P.compose)((0,f.connect)((0,b.createStructuredSelector)({currentUser:(0,s.selectData)("currentUser"),isModalOpen:N}),{closeModal:R}),(0,a.default)(e=>{let{currentUser:t,userIdToBlock:o}=e;return{block:{dataKey:`modules:blockUser:${o}`,endpoint:(0,v.buildUrl)(`/block/${o}`,{include:E,fields:D}),fetchOnInit:!!t},currentUserBlockStatus:k(o)}}))(F),V=(0,o.attachModule)("blockUser",A)(O);e.s(["BlockUserModal",0,function(e){let[o]=(0,i.useCurrentProfileKey)();return(0,t.jsx)(V,{...e,inCreatorView:"creator"===o})}],8085515)},7284871,e=>{"use strict";var t=e.i(766274),o=e.i(3451400);e.s(["getIsUserBlocked",0,e=>(0,o.createSelector)((0,t.selectData)(`modules:blockUser:${e}`),e=>!!e?.blockAction?.id)])},9956453,e=>{"use strict";var t=e.i(9391398),o=e.i(8675517);e.s(["LazyFileInputButton",0,i=>(0,t.jsx)(o.DynamicImport,{importer:()=>e.A(682449).then(e=>({default:e.FileInputButton})),...i})])}]);

//# debugId=67e16e8c-cf25-9042-71fd-ef83f91ca9db
//# sourceMappingURL=0bb5ui3q~34h4.js.map
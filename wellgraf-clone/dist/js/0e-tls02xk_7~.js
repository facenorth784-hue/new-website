;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="bb12fd3e-4592-7d20-3cd4-8a1af9bcb7c0")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2625239,e=>{e.v({scrollCarouselButtonContainer:"CarouselButtons-module__b0I9Nq__scrollCarouselButtonContainer",scrollCarouselLeftButtonContainer:"CarouselButtons-module__b0I9Nq__scrollCarouselLeftButtonContainer",scrollCarouselRightButtonContainer:"CarouselButtons-module__b0I9Nq__scrollCarouselRightButtonContainer"})},976751,e=>{e.v({impressionsWrapper:"TierCard-module__L_vBlq__impressionsWrapper"})},7030703,9625019,e=>{"use strict";var i=e.i(9391398),t=e.i(2358280),n=e.i(8534334),r=e.i(6112151),s=e.i(712139),a=e.i(1015942),o=e.i(5363035),l=e.i(6527764),d=e.i(2859206),c=e.i(1108816),u=e.i(226931),m=e.i(6191788),h=e.i(9760814),g=e.i(4645997),p=e.i(4656010),x=e.i(8475434),f=e.i(2875559),y=e.i(6072401);let j=()=>({regularTextColor:u.tokens.content.regular.default,mutedTextColor:u.tokens.content.muted.default});var b=e.i(4412387),w=e.i(9991677),C=e.i(8177155),v=e.i(8486509),T=e.i(9916330),k=e.i(6631653),I=e.i(3316101),D=e.i(829490),$=e.i(4514915),S=e.i(8683249);function A(e){let{campaign:n,isAnnualCadence:s,setIsAnnualCadence:a,discountDecimal:o,liveSaleDiscountDecimal:l}=e,{mutedTextColor:d,regularTextColor:c}=j(),u=l&&0!==l,m=o&&0!==o,h=u||m?(0,i.jsx)(r.BodyText,{size:"lg",as:"span",color:s?c:d,children:u?(0,i.jsx)(t.Trans,{id:"AjROZV",components:{0:(0,i.jsx)(T.Percent,{value:l||o})},message:"Pay annually (Save up to <0/>)",context:"Indicates that you can save up to some percent of money by paying yearly"}):(0,i.jsx)(t.Trans,{id:"fNkgmj",components:{0:(0,i.jsx)(T.Percent,{value:o})},message:"Pay annually (Save <0/>)",context:"Indicates that you can save money by paying yearly"})}):(0,i.jsx)(r.BodyText,{size:"lg",as:"span",color:s?c:d,children:(0,i.jsx)(t.Trans,{id:"LP3Eg1",message:"Pay annually",context:"Indicates that the prices are for paying yearly"})});return(0,i.jsxs)(P,{children:[(0,i.jsx)($.Toggle,{isOn:s,id:"annual-cadence-toggle",onClick:()=>{var e;let i=!s;a(i),e={campaign_id:n?.id??"",renewal_period:i?"annual":"monthly"},S.patreonTrackerClient.logTypedEvent("Creator Public Page : Tiers : Clicked Annual Toggle",e)}}),h]})}let P=h.styled.div.withConfig({componentId:"sc-f9179001-0"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${u.tokens.space.x12};
`;var B=e.i(3114493),L=e.i(2998487),_=e.i(8981215),z=e.i(1413829),F=e.i(6803810),O=e.i(2550472),E=e.i(6305112),M=e.i(263246),R=e.i(6558821),H=e.i(6272043),V=e.i(2625239);function N(e){let{scrollCarouselBy:n,disabled:r}=e,{i18n:s}=(0,t.useLingui)(),a=(0,H.default)(V.default.scrollCarouselButtonContainer,V.default.scrollCarouselLeftButtonContainer);return(0,i.jsx)(R.ResponsiveCssVisibility,{matchMin:"sm",className:a,children:(0,i.jsx)(O.ButtonShim,{loggerId:"carousel-left","data-tag":"carousel-left",icon:E.IconChevronLeft,onClick:()=>n(-1),variant:"secondary",corners:"pill",size:"md",disabled:r,"aria-label":s._({id:"G5iZj3",message:"scroll left"})})})}function W(e){let{scrollCarouselBy:n,disabled:r}=e,{i18n:s}=(0,t.useLingui)(),a=(0,H.default)(V.default.scrollCarouselButtonContainer,V.default.scrollCarouselRightButtonContainer);return(0,i.jsx)(R.ResponsiveCssVisibility,{matchMin:"sm",className:a,children:(0,i.jsx)(O.ButtonShim,{loggerId:"carousel-right","data-tag":"carousel-right",icon:M.IconChevronRight,onClick:()=>n(1),variant:"secondary",corners:"pill",size:"md",disabled:r,"aria-label":s._({id:"9zdECA",message:"scroll right"})})})}var U=e.i(5110178);let K=L.WideContent;function q(e){let n,{children:r,showAllTiersByDefault:s,maxTiersForCarousel:a,seeAllButtonVariant:o,noHorizontalMobilePadding:l,maxCarouselItems:d=3,displayCarouselDots:c=!0,mobileTiersVariant:u=!1,initialCenterIndex:h}=e,{i18n:g}=(0,t.useLingui)();n=function(){let[e,i]=(0,m.useState)(0);return()=>i(e+1)}(),(0,m.useEffect)(()=>{let e=()=>{let e=()=>{n(),window.removeEventListener("resize",e)};window.addEventListener("resize",e)};return screen?.orientation?(screen.orientation.addEventListener("change",e),()=>screen.orientation.removeEventListener("change",e)):(window.addEventListener("orientationchange",e),window.removeEventListener("orientationchange",e))},[n]);let[p,x]=(0,m.useState)(!0),[f,y]=(0,m.useState)(!1),j=(0,m.useRef)(0),b=(0,m.useRef)(null),w=(0,m.useRef)([]),C=(0,F.useIsMobile)({defaultValue:!1}),v=(0,F.useIsTablet)({defaultValue:!1}),k=Math.min(d,C&&u?1:v?2:3),I=r.length+1-k,D=r.length>(a??10),$=I>1&&!D,S=r.length>3,A=r.length>1,[P,L]=(0,m.useState)(0),[_,E]=(0,m.useState)(s??!1),[M,R]=(0,m.useState)(!1);(0,m.useEffect)(()=>{let e=b?.current;if(e){let i=()=>{L(b?.current&&b?.current.scrollWidth>0?Math.round(r.length*b.current.scrollLeft/b.current.scrollWidth):0)};return e.addEventListener("scroll",i),()=>{e.removeEventListener("scroll",i)}}},[b,r.length]);let H=(0,m.useCallback)(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=b?.current,n=w?.current?.length>0&&w.current[0];if(t&&n){let r=n.clientWidth,s=(0,z.default)(j.current+(r+16)*e,0,t.scrollWidth-t.clientWidth);((e,i)=>{let t=b.current;if(!t)return;let n=t.scrollLeft,r=performance.now(),s=a=>{let o=Math.min((a-r)/i,1);t.scrollLeft=n+(e-n)*(o<.5?2*Math.pow(o,2):1-Math.pow(-2*o+2,2)/2),o<1?requestAnimationFrame(s):t.scrollLeft=e};requestAnimationFrame(s)})(s,i),j.current=s,x(s<=0),y(s>=t.scrollWidth-t.clientWidth)}},[]);(0,m.useEffect)(()=>{H(0,0)},[H,b.current?.scrollWidth,b.current?.clientWidth]);let V=(0,m.useCallback)(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;H(e-P,i)},[P,H]);return(0,m.useEffect)(()=>{void 0!==h&&!M&&b.current&&w.current.length>h&&(V((0,z.default)(h-1,0,w.current.length),0),R(!0))},[V,h,M]),(0,i.jsxs)(G,{children:[(0,i.jsxs)(J,{noHorizontalMargin:!A,children:[$&&(0,i.jsx)(N,{scrollCarouselBy:H,disabled:p}),(0,i.jsx)(Z,{ref:b,$numItems:r.length,$canShowAsCarousel:!D,$maxCarouselItemsInView:k,$noHorizontalMobilePadding:l||u&&A||!A,$mobileTiersVariant:u,children:m.default.Children.map(r,(e,t)=>(0,i.jsx)(Q,{id:e.props.id,ref:e=>{e&&(w.current[t]=e)},index:t,canShowAsCarousel:!D,isShowAllTiers:_,maxCarouselItemsInView:k,mobileTiersVariant:u,children:e},e.props.id))}),$&&(0,i.jsx)(W,{scrollCarouselBy:H,disabled:f})]}),$&&c&&(0,i.jsx)(U.CarouselDots,{numDots:I,currentDot:P,onInactiveDotClick:e=>V(e),mobileTiersVariant:u}),!s&&S&&(0,i.jsx)(X,{canShowAsCarousel:!D,isShowAllTiers:_,children:(0,i.jsxs)(O.ButtonShim,{loggerId:"show-all-tiers","data-tag":"show-all-tiers","aria-label":g._({id:"bdegyJ",message:"see all tiers"}),icon:B.IconChevronDown,onClick:()=>E(!0),variant:o??"tertiary",corners:"rounded",fluid:!0,children:[(0,i.jsx)(t.Trans,{id:"8sy9rc",message:"See all",context:"Text to see all"})," ",(0,i.jsx)(T.Decimal,{value:r.length})," ",(0,i.jsx)(t.Trans,{id:"94FIsR",message:"tiers",context:"Tiers"})]})})]})}let G=h.styled.div.withConfig({componentId:"sc-bb55a4f-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,J=h.styled.div.withConfig({componentId:"sc-bb55a4f-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  // Allow box-shadows to show
  overflow: visible;

  width: 100%;
  max-width: 100vw;

  @media ${(0,_.mediaForBreakpoint)("sm")} {
    // Add margins so carousel buttons aren't too close to edges
    ${e=>{let{noHorizontalMargin:i}=e;return!i&&`
      margin-left: ${u.tokens.space.x12};
      margin-right: ${u.tokens.space.x12};
    `}}
  }
`,Y=h.css`
  padding-left: 0;
  padding-right: 0;
`,Z=(0,h.styled)(K).withConfig({componentId:"sc-bb55a4f-2"})`
  &&& {
    display: flex;
    ${e=>{let{$mobileTiersVariant:i}=e;return!i&&"flex-direction: column;"}}
    // remove all scroll for mobile tiers variant
  ${e=>{let{$mobileTiersVariant:i}=e;return`${i&&`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      `}
  `}}

  overflow-x: scroll;

    grid-gap: ${"16px"};

    flex: 1 1 auto;
    margin-left: 0;
    margin-right: 0;

    // Add padding to allow box shadows to show
    padding-top: ${u.tokens.space.x16};
    padding-bottom: ${u.tokens.space.x24};
    ${e=>{let{$noHorizontalMobilePadding:i}=e;return i&&Y}}

    @media ${(0,_.mediaForBreakpoint)("sm")} {
      flex-direction: row;
      flex-wrap: ${e=>e.$canShowAsCarousel?"nowrap":"wrap"};

      align-items: stretch;
      justify-content: ${e=>e.$numItems>e.$maxCarouselItemsInView?"flex-start":"center"};

      overflow-x: hidden;
      scroll-behavior: auto;

      // Hide scrollbar in IE.
      -ms-overflow-style: none;
      // Hide scrollbar in WebKit and Blink powered browsers.
      &::-webkit-scrollbar {
        display: none;
      }
      // Hide scrollbar in Firefox.
      scrollbar-width: none;

      // If there is a carousel, override WideContent's padding on desktop so there
      // isn't too much padding between the tiers and the carousel navigation buttons
      --carousel-items-horizontal-padding: ${u.tokens.space.x12};
      ${e=>{let{$numItems:i}=e;return i>1&&h.css`
          padding-left: var(--carousel-items-horizontal-padding);
          padding-right: var(--carousel-items-horizontal-padding);
        `}}

      // Add a transparent fade to the sides of the carousel to prevent box-shadows
    // from clipping too sharply. Only add if there is a carousel
    ${e=>{let{$numItems:i}=e;return i>1&&h.css`
          mask: linear-gradient(
            to right,
            ${u.tokens.constant.blackSubtle.default} 0,
            ${u.tokens.constant.black.default} var(--carousel-items-horizontal-padding),
            ${u.tokens.constant.black.default} calc(100% - var(--carousel-items-horizontal-padding)),
            ${u.tokens.constant.blackSubtle.default} 100%
          );
        `}}
    }
  }
`,Q=h.styled.div.withConfig({componentId:"sc-bb55a4f-3"})`
  display: ${e=>e.mobileTiersVariant?"grid":e.index<3||e.isShowAllTiers?"block":"none"};

  // Allow box-shadows to show
  overflow: visible;

  // is mobile tier variant needed props
  ${e=>{let{mobileTiersVariant:i}=e;return i&&"flex: 1 0 auto;"}}
  ${e=>{let{mobileTiersVariant:i}=e;return i&&"width: 300px;"}}


  @media ${(0,_.mediaForBreakpoint)("sm")} {
    display: ${e=>e.canShowAsCarousel||e.index<e.maxCarouselItemsInView||e.isShowAllTiers?"flex":"none"};

    flex: 1 0 auto;

    ${e=>{let{maxCarouselItemsInView:i,canShowAsCarousel:t}=e,n="calc("+100/i+"% - "+16*(i-1)/i+"px)";return`
      width: ${n};
      max-width: ${t?"380px":n};
    `}}
  }
`,X=h.styled.div.withConfig({componentId:"sc-bb55a4f-4"})`
  margin-top: ${u.tokens.space.x8};
  margin-bottom: ${u.tokens.space.x8};
  max-width: 94%;

  display: ${e=>e.isShowAllTiers?"none":"block"};
  @media ${(0,_.mediaForBreakpoint)("sm")} {
    display: ${e=>e.canShowAsCarousel||e.isShowAllTiers?"none":"block"};
  }
`;e.s(["Carousel",0,q,"MAX_TIER_CARD_WIDTH_PX",0,380,"TIER_ITEMS_CONTAINER",0,K],9625019);var ee=e.i(8139671),ei=e.i(5028501);function et(e){S.patreonTrackerClient.logTypedEvent("Creator Public Page : Tiers : Selected Reward",e)}function en(e){S.patreonTrackerClient.logTypedEvent("Creator Public Page : Tiers : Viewed Tier Card Body",e)}function er(e){S.patreonTrackerClient.logTypedEvent("Creator Public Page : Tiers : Viewed Tier Card",e)}var es=e.i(5338216),ea=e.i(3246928),eo=e.i(7492626),el=e.i(7123506),ed=e.i(8936330),ec=e.i(6569004),eu=e.i(3892530),em=e.i(3408661);function eh(e){let n,{tier:s,isAnnualCadence:a,logTierSelected:o,customCtaText:l,onTierSelect:d,autopilotDiscount:c,urlParams:u={},campaign:m,displayCta:h=!0}=e,{i18n:g}=(0,t.useLingui)(),f=(0,ec.usePreset)("showAcastButtonPostPledge"),{showMemberCount:y,showEarnings:j}=(0,em.campaignStatsVisiblitySettings)(m),b=!!(0,C.getDiscountedPrice)(s,a?eu.RewardCadence.Annual:eu.RewardCadence.Monthly)||!!c,v=(0,w.useExperiment)(p.AUTOPILOT_HOLD_OUT_2025).getVariantNameOrNull({disableAutoLogExposure:!0})===p.TREATMENT;if("true"===u.hide_tier_card_cta||!h)return null;let T=d?void 0:(0,C.getCtaButtonUrl)({tier:s,campaignPledgeUrl:m.pledgeUrl,isAnnualCadence:a,showAcastButtonPostPledge:f,autoDiscountCode:c?.discountCode??void 0,urlParams:u}),k=s.userLimit&&y&&j,I=null!==s.remaining&&void 0!==s.remaining&&s.remaining>=0,D=s.remaining,$=s.userLimit,S=k?(0,i.jsx)(r.BodyText,{size:"md",children:(0,i.jsx)(t.Trans,{id:"xs4b7n",values:{remaining:D,userLimit:$},components:{0:(0,i.jsx)("strong",{})},message:"<0>Limited</0> ({remaining} of {userLimit} remaining)",context:"Shows the number of spots remaining out of total available"})}):(0,i.jsx)(r.BodyText,{size:"md",children:(0,i.jsx)(t.Trans,{id:"QHBhoI",values:{remaining:D},components:{0:(0,i.jsx)("strong",{})},message:"<0>Limited</0> ({remaining} remaining)",context:"Shows the number of spots remaining"})}),A=I&&0===s.remaining,P=(0,i.jsx)(r.BodyText,{size:"md",children:(0,i.jsx)(t.Trans,{id:"b4U7HH",components:{0:(0,i.jsx)("strong",{})},message:"<0>Limited spaces - SOLD OUT</0>",context:"Indicates that this tier is sold out"})});if(l)n=l;else if(A)n=g._({id:"C/jZJ9",message:"Sold Out"});else if(!(0,ea.rewardHasFreeTrial)(s)||a||b)n=m.currentUserIsFreeMember&&!a&&c&&v?(0,x.upgradeWithDiscountText)(c.discountPercentage,g):m.currentUserIsFreeMember?(0,x.upgradeString)(g):g._({id:"qQB6Ys",message:"Join"});else{let e=(0,ea.rewardFreeTrialDurationDays)(s);n=g._({id:"lcwDJa",message:"Start {freeTrialDurationDays}-day free trial",values:{freeTrialDurationDays:e}})}let B=(0,i.jsx)(O.ButtonShim,{loggerId:"patron-checkout-continue-button",size:"md",disabled:A,variant:"primary",onClick:()=>{o(),d?.(s)},href:T,"data-tag":"patron-checkout-continue-button",fluid:!0,children:n});return(0,i.jsxs)(eg,{children:[B,I&&(0,i.jsx)(ep,{children:A?P:S})]})}let eg=h.styled.div.withConfig({componentId:"sc-b26313e8-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ep=h.styled.div.withConfig({componentId:"sc-b26313e8-1"})`
  padding-top: ${u.tokens.space.x8};
`;var ex=e.i(2925392),ef=e.i(6064449),ey=e.i(1286178),ej=e.i(350260),eb=e.i(5712149),ew=e.i(6791716),eC=e.i(1987618),ev=e.i(184171),eT=e.i(8278771),ek=e.i(9086540);function eI(e){let{campaign:n,tier:s,hasDescription:a,openSpecialOfferDialog:o}=e,{regularTextColor:l}=j(),{i18n:c}=(0,t.useLingui)(),m=(0,eo.getMerchRewardItemsForRewards)([s],eo.isUnendedMerchItem),h=(0,ew.getLoyaltyProgram)(m),g=[];if(n.activeOffer&&n.activeOffer?.rewards?.find(e=>e.id===s.id)){let e={id:n.activeOffer.id,description:(0,i.jsx)(eD,{offer:n.activeOffer,openSpecialOfferDialog:o})};g.push(e)}if(m.length>0){let e=c._({id:"0EK9IS",message:"Exclusive merch"});if(h){let t={id:m[0].id,description:(0,i.jsx)(e$,{description:(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:l,children:(0,i.jsx)("strong",{children:h.description??e})}),detail:(0,i.jsx)(ev.LoyaltyProgramDetail,{description:h.description,items:(0,ew.getLoyaltyProgramItems)(m),reward:s})})};g.push(t)}else{let t=m.map(t=>{let{id:n,title:a}=t,o=(0,i.jsx)(eT.MerchTierDetail,{items:m,reward:s});return{id:n,description:(0,i.jsx)(e$,{description:(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:l,children:(0,i.jsx)("strong",{children:a??e})}),detail:o})}});g.push(...t)}}if((0,eC.campaignPublishedAfterStructuredBenefitsRelease)(n)){let e=s.items?s.items.filter(e=>e.itemType!==eb.ITEM_TYPES.MERCH&&e.ruleType!==eb.ONE_TIME_SPECIAL_OFFER):null;if(e){let t=e.map(e=>({id:e.id,description:(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:l,children:e.title})}));g.push(...t)}}return s.discordRoleIds?.length&&g.push({id:s.discordRoleIds[0],description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:l,children:(0,i.jsx)(t.Trans,{id:"YAVK3G",message:"Discord access",context:"Indicates that a given tier includes Discord benefits among its rewards. Discord is a proper noun and is communication and chat software."})})," ",(0,i.jsx)(ej.IconBrandDiscord,{size:"24px",verticalAlign:"middle",color:l})]})}),g.length>0?(0,i.jsxs)(i.Fragment,{children:[!a&&(0,i.jsx)(d.Spacer,{mv:u.tokens.space.x8,children:(0,i.jsx)(r.BodyText,{size:"md",as:"div",color:l,children:(0,i.jsx)(t.Trans,{id:"WECDAp",components:{0:(0,i.jsx)("strong",{})},message:"<0>What's included</0>",context:"A label indicating the benefits that you'll get for being part of this subscription tier"})})}),(0,i.jsx)(eA,{children:g.map(e=>(0,i.jsx)(eP,{color:l,children:e.description},e.id))})]}):null}function eD(e){let{offer:n,openSpecialOfferDialog:s}=e,{regularTextColor:a}=j(),o=(0,i.jsx)(eS,{children:(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:a,children:(0,i.jsx)(t.Trans,{id:"LleNrJ",components:{0:(0,i.jsx)("strong",{})},message:"<0>Special offer:</0>",context:"Indicates that this reward tier has a special offer"})})}),l=(0,i.jsxs)(i.Fragment,{children:[o,(0,i.jsx)(r.BodyText,{size:"md",as:"span",color:a,children:(0,i.jsxs)("strong",{children:[" ",n.title]})})]});return(0,i.jsxs)(i.Fragment,{children:[l,s&&(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)(ek.TextLinkShim,{loggerId:"pages-creator-public-page-TierDisplay-TierBenefitsList-view-details",size:"md",onClick:s,children:(0,i.jsx)(t.Trans,{id:"rMYVSK",message:"View details",context:"Text indicating that the user can see more details about this benefit if they click on it"})})]})]})}function e$(e){let{description:n,detail:r}=e,{i18n:s}=(0,t.useLingui)(),[a,o]=(0,m.useState)(!1),l=s._({id:"lzzUuL",message:"Close"}),d=()=>o(!1);return(0,i.jsxs)(i.Fragment,{children:[n," ",(0,i.jsx)(ek.TextLinkShim,{loggerId:"pages-creator-public-page-TierDisplay-TierBenefitsList-view-details",size:"md",onClick:()=>o(!0),children:(0,i.jsx)(t.Trans,{id:"rMYVSK",message:"View details",context:"Text indicating that the user can see more details about this benefit if they click on it"})}),(0,i.jsx)(k.DialogShim,{loggerId:"benefitDescriptionDetails","aria-label":s._({id:"NG9O+3",message:"Benefit description details"}),id:"benefitDescriptionDetails",size:"sm",isOpen:a,showCloseButton:!1,onCloseRequest:d,primaryAction:{label:l,onClick:d},children:r})]})}let eS=h.styled.span.withConfig({componentId:"sc-c9d03d81-0"})`
  text-transform: uppercase;
`,eA=h.styled.ul.withConfig({componentId:"sc-c9d03d81-1"})`
  // We currently don't have a 20px token
  padding-inline-start: calc(${u.tokens.space.x16} + ${u.tokens.space.x4});
`,eP=h.styled.li.withConfig({componentId:"sc-c9d03d81-2"})`
  color: ${e=>e.color};
`;var eB=e.i(8949282);function eL(e){let{tier:t,openSpecialOfferDialog:n,logTierCardBodyViewed:s,innerScroll:a=!1,campaign:o}=e,l=(0,F.useIsMobile)({defaultValue:!1}),{regularTextColor:d}=j();if(!o)return null;let c=t?.description?.length>0,u=(0,eB.getTierDetailEstimatedHeightPx)(t),m=l?a?250:100:400;return l&&a?(0,i.jsxs)(e_,{maxHeight:m,children:[c&&(0,i.jsx)(ez,{children:(0,i.jsx)(r.BodyText,{size:"md",as:"div",color:d,children:(0,i.jsx)(ey.Sanitizer,{dirtyHtml:t.description,type:"preconfigured",config:{allowStyles:!0,allowIframe:!0,allowTarget:!0}})})}),(0,i.jsx)(eI,{campaign:o,tier:t,hasDescription:c,openSpecialOfferDialog:n})]}):(0,i.jsxs)(ef.Collapsible,{minHeight:m,showMoreOnClick:s,estimatedHeightPx:u,"data-tag":"tier-card-detail",children:[c&&(0,i.jsx)(ez,{children:(0,i.jsx)(r.BodyText,{size:"md",as:"div",color:d,children:(0,i.jsx)(ey.Sanitizer,{dirtyHtml:t.description,type:"preconfigured",config:{allowStyles:!0,allowIframe:!0,allowTarget:!0}})})}),(0,i.jsx)(eI,{campaign:o,tier:t,hasDescription:c,openSpecialOfferDialog:n})]})}let e_=h.styled.div.withConfig({componentId:"sc-e200325f-0"})`
  max-height: ${e=>`${e.maxHeight}px`};
  overflow-y: scroll;
`,ez=h.styled.div.withConfig({componentId:"sc-e200325f-1"})`
  img {
    max-width: 100%;
  }
  a {
    color: ${u.tokens.content.primary.default};
    text-decoration: none;
    ${(0,ex.cssForBodyText)({size:"md",weight:"bold"})};

    &:hover {
      color: ${u.tokens.content.primary.hover};
    }

    &:active {
      color: ${u.tokens.content.primary.pressed};
    }
  }
  p:empty {
    overflow: auto; /* prevents margin collapsing */
    margin-bottom: 1em !important;
  }

  ul,
  ol {
    margin-block-start: 0;
    margin-block-end: 0;
    // We currently don't have a 20px token
    padding-inline-start: calc(${u.tokens.space.x16} + ${u.tokens.space.x4});
  }

  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;var eF=e.i(5032907),eO=e.i(1967147),eE=e.i(3978713),eM=e.i(8401280),eR=e.i(7473270),eH=e.i(7036438),eV=e.i(8085048),eN=e.i(5278625),eW=e.i(5739761);function eU(e){let{campaign:n,tier:s,isAnnualCadence:a,autopilotDiscount:l}=e,{i18n:d}=(0,t.useLingui)(),{defaultPledgeAmountCents:c}=(0,eH.useCurrencyConstants)(),{regularTextColor:m,mutedTextColor:h}=j(),{salesTaxLabel:g,patronCurrency:p,showPlusTaxLabel:x}=s,f=(0,eB.rewardMonthlyAmount)(s,c),y=(0,eN.getPayPerName)({payPerName:n?.payPerName,isMonthly:n?.isMonthly,i18n:d}),b=(0,C.getAnnualTierPriceMonthly)(s)??0,w=eK({isAnnualCadence:a,monthlyPrice:f,annualPricePerMonth:b,payPerName:y,patronCurrency:p}),v=(0,C.getDiscountedPrice)(s,a?eu.RewardCadence.Annual:eu.RewardCadence.Monthly),T=a?12:1,k=!!n?.defaultAnnualToggleToOn;if(!n)return null;let I=(0,i.jsx)(r.BodyText,{as:"span",color:h,children:(0,i.jsx)(t.Trans,{id:"VteItb",values:{salesTaxLabel:g},message:"(plus {salesTaxLabel})",context:"Subtitle on reward card to indicate that there will be additional tax applied."})}),D=v?.belowPriceFloor?(0,i.jsx)(eM.PartialDiscountText,{priceFloor:v.discountedPriceCents,currency:p,noDiscountApplied:v.basePriceCents===v.discountedPriceCents}):void 0;if(k){let e=(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:m,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:b,currency:s.patronCurrency})}),n=(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:m,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:f,currency:p})}),l=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eJ,{color:h,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:f,currency:s.patronCurrency})}),(0,i.jsx)(r.BodyText,{as:"span",size:"md",children:" "}),e]}),d=(0,C.getTierPrice)(s,eu.RewardCadence.Annual)??0,c=0!==b&&f!==b,g=n;return a&&(g=c?l:e),(0,i.jsxs)(eY,{children:[(0,i.jsx)(o.HeadingText,{as:"div",size:"lg",color:m,children:s.title}),(0,i.jsx)(eZ,{"aria-label":w,children:(0,i.jsxs)("div",{children:[g,(0,i.jsxs)(r.BodyText,{as:"span",size:"md",color:m,children:[(0,i.jsxs)(eR.NoTranslate,{reason:"not-translatable",context:"",children:[" /"," "]}),y]}),x&&(0,i.jsxs)(i.Fragment,{children:[" ",I]})]})}),k&&a&&(0,i.jsx)(r.BodyText,{as:"span",size:"md",color:u.tokens.content.muted.default,children:(0,i.jsx)(t.Trans,{id:"MfIsOH",components:{0:(0,i.jsx)(eW.DollarAwareCurrency,{value:d,currency:s.patronCurrency})},message:"Billed annually at <0/>",context:"Subtitle on reward card to indicate that the tier is billed annually"})})]})}return(0,i.jsxs)(eY,{children:[(0,i.jsx)(o.HeadingText,{as:"div",size:"lg",color:m,children:s.title}),(0,i.jsx)(eZ,{"aria-label":w,children:(0,i.jsx)(eQ,{autopilotDiscount:l,discountedPrice:v,isAnnualCadence:a,monthlyPrice:f,patronCurrency:p,payPerName:y,showPlusTaxLabel:x,taxLabel:I,tier:s,monthsInDiscountedPriceCadence:T,priceFloorDisclosure:D,hasLiveAnnualSale:!!n.liveSale})})]})}let eK=e=>{let{isAnnualCadence:i,monthlyPrice:n,annualPricePerMonth:r,payPerName:s,patronCurrency:a}=e,{i18n:o}=(0,t.useLingui)(),l=o.locale,d=(0,eV.formatCurrency)(n/100,a,{locale:l,truncateDecimal:!0}),c=(0,eV.formatCurrency)(r/100,a,{locale:l,truncateDecimal:!0});return i?o._({id:"9L7NF0",message:"Originally {formattedCurrency} now {discountedFormattedCurrency} per {payPerName}",values:{formattedCurrency:d,discountedFormattedCurrency:c,payPerName:s}}):o._({id:"WlwSzR",message:"{formattedCurrency} per {payPerName}",values:{formattedCurrency:d,payPerName:s}})},eq=e=>{let{tier:t,monthlyPrice:n,hasLiveAnnualSale:s}=e,{regularTextColor:a,mutedTextColor:l}=j(),d=(0,C.getAnnualTierPriceMonthly)(t)??0,c=0!==d&&n!==d,u=(0,i.jsx)(eW.DollarAwareCurrency,{value:d,currency:t.patronCurrency}),m=(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:a,children:u}),h=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eJ,{color:l,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:n,currency:t.patronCurrency})}),(0,i.jsx)(r.BodyText,{as:"span",size:"md",children:" "}),(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:a,children:u})]});return c&&!s?h:m},eG=e=>{let{strikethroughPrice:n,realPrice:s,currency:a,disclosure:l,children:d}=e,{i18n:c}=(0,t.useLingui)(),{regularTextColor:u,mutedTextColor:m}=j();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eJ,{color:m,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:n,currency:a})}),(0,i.jsx)(r.BodyText,{as:"span",size:"md",children:" "}),(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:u,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:s,currency:a})}),d," ",l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(eE.OverlayTriggerHover,{"aria-label":c._({id:"OQG8Mj",message:"A popover explaining why a full discount was not applied"}),preferredPlacement:"top",loggerId:"Discount-PriceFloor-Overlay-Popover",preset:"popover",children:[(0,i.jsx)(eF.IconInfo,{}),(0,i.jsx)(eO.OverlayPopover,{children:(0,i.jsx)(r.BodyText,{color:u,children:l})})]})})]})},eJ=h.styled.span.withConfig({componentId:"sc-75682237-0"})`
  ${(0,ex.cssForHeadingText)({size:"xl"})}
  color: ${e=>e.color};

  > div {
    text-decoration: line-through;
  }
`,eY=h.styled.div.withConfig({componentId:"sc-75682237-1"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`,eZ=h.styled.div.withConfig({componentId:"sc-75682237-2"})`
  display: flex;
  align-items: baseline;
  margin-top: 2px;
`;function eQ(e){let{autopilotDiscount:n,discountedPrice:s,isAnnualCadence:a,monthlyPrice:l,patronCurrency:d,payPerName:c,showPlusTaxLabel:u,taxLabel:m,tier:h,monthsInDiscountedPriceCadence:g,priceFloorDisclosure:p,hasLiveAnnualSale:x}=e,{regularTextColor:f}=j(),{i18n:y}=(0,t.useLingui)();if(n&&!a){let e=l*(1-n.discountPercentage/100);return(0,i.jsxs)(eG,{strikethroughPrice:l,realPrice:e,currency:d,children:[(0,i.jsxs)(r.BodyText,{as:"span",size:"md",color:f,children:["  ",y._((0,eM.getDiscountCodeCadenceText)(a,c))]}),u&&(0,i.jsxs)(i.Fragment,{children:[" ",m]})]})}return s?(0,i.jsxs)(eG,{strikethroughPrice:s.basePriceCents/g,realPrice:s.discountedPriceCents/g,currency:d,disclosure:p,children:[(0,i.jsxs)(r.BodyText,{as:"span",size:"md",color:f,children:["  ",y._((0,eM.getDiscountCodeCadenceText)(a,c))]}),u&&(0,i.jsxs)(i.Fragment,{children:[" ",m]})]}):(0,i.jsxs)("div",{children:[a?(0,i.jsx)(eq,{tier:h,monthlyPrice:l,hasLiveAnnualSale:x}):(0,i.jsx)(o.HeadingText,{as:"span",size:"xl",color:f,children:(0,i.jsx)(eW.DollarAwareCurrency,{value:l,currency:d})}),(0,i.jsxs)(r.BodyText,{as:"span",size:"md",color:f,children:[(0,i.jsxs)(eR.NoTranslate,{reason:"not-translatable",context:"",children:[" /"," "]}),c]}),u&&(0,i.jsxs)(i.Fragment,{children:[" ",m]})]})}var eX=e.i(976751);function e0(e){let{id:n,tier:r,annualToggleOn:s=!1,index:a,openSpecialOfferDialog:o,shouldShowTierImageContainer:l=!1,displayCta:d,customCtaText:c,onTierSelect:u,mobileTiersVariant:h=!1,annualCadenceToggle:g,isCreatorWorldHome:p=!1,autopilotDiscount:x,urlParams:f,campaign:y}=e,{i18n:j}=(0,t.useLingui)(),b=(0,ed.useRegisterableVisibilityRef)("tier-"+r.id),w=(0,el.tierIsRecommended)(r),v=(0,el.getRecommendationLabel)(r,j),{isCreatorViewingAsFan:T}=(0,es.useIsCreatorViewingAsFan)(),k=(0,F.useIsMobile)({defaultValue:!1}),I=!!(s&&(0,C.hasCadenceOptions)(r)),D=(0,m.useCallback)(()=>{let e=r.items?.filter(e=>(0,eo.isUnendedMerchItem)(e));return{amount_cents:r.amountCents,campaign_id:y?.id??"",currency:r.currency,has_active_trial:(0,ea.rewardHasFreeTrial)(r),is_limited_reward:!!r.userLimit&&r.userLimit>0,is_recommended:(0,el.tierIsRecommended)(r),merch_conversion_tier_has_merch:e?.length>0,renewal_period:I?"annual":"monthly",reward_id:r.id,reward_index:a,reward_recommendation_id:(0,el.getRecommendation)(r)?.id,trial_duration:(0,ea.rewardFreeTrialDurationDays)(r)}},[y?.id,a,r,I]),$=(0,m.useCallback)(e=>{T||e(D())},[D,T]),S=(0,m.useCallback)(()=>{$(er)},[$]),A=(0,m.useCallback)(()=>{$(en)},[$]),P=(0,m.useCallback)(()=>{$(et)},[$]),B=(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(e3,{"data-tag":"tier-img-container",hiddenMobile:!r.imageUrl,children:(0,i.jsx)(e5,{src:r.imageUrl})}),(0,i.jsxs)(e6,{children:[(0,i.jsx)(e7,{children:(0,i.jsx)(eU,{campaign:y,tier:r,isAnnualCadence:I,autopilotDiscount:x})}),g,(0,i.jsxs)(e9,{children:[(0,i.jsx)(eh,{campaign:y,tier:r,isAnnualCadence:I,logTierSelected:P,customCtaText:x?void 0:c,onTierSelect:u,autopilotDiscount:x,urlParams:f,displayCta:d}),(0,i.jsx)("div",{ref:b})]}),(0,i.jsx)(e8,{children:(0,i.jsx)(eL,{campaign:y,tier:r,openSpecialOfferDialog:o,logTierCardBodyViewed:A})})]})]}),L=(0,i.jsx)(i.Fragment,{children:k?(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(e3,{"data-tag":"tier-img-container",hiddenMobile:!r.imageUrl,children:(0,i.jsx)(e5,{src:r.imageUrl})}),(0,i.jsxs)(e6,{children:[(0,i.jsx)(e7,{children:(0,i.jsx)(eU,{campaign:y,tier:r,isAnnualCadence:I,autopilotDiscount:x})}),(0,i.jsx)(ee.Divider,{}),(0,i.jsx)(e8,{children:(0,i.jsx)(eL,{campaign:y,tier:r,openSpecialOfferDialog:o,logTierCardBodyViewed:A,innerScroll:!0})}),(0,i.jsxs)(e9,{children:[(0,i.jsx)(eh,{campaign:y,tier:r,isAnnualCadence:I,logTierSelected:P,customCtaText:c,onTierSelect:u,urlParams:f,displayCta:d}),(0,i.jsx)("div",{ref:b})]})]})]}):(0,i.jsx)(i.Fragment,{children:B})});return(0,i.jsx)(ei.ImpressionsLogger,{className:eX.default.impressionsWrapper,log:S,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e2,{isRecommended:w,mobileTiersVariant:h,"data-tag":"tier-card-badge",children:v}),(0,i.jsx)(e1,{id:n,"data-tag":"tier-card",isRecommended:w,isCreatorWorldHome:p,children:h?L:B})]})})}let e1=h.styled.div.withConfig({componentId:"sc-dfd5ac07-0"})`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 0;

  // Prevent tier images from overflowing the rounded corners
  overflow: hidden;

  border-radius: ${e=>{let{isRecommended:i}=e;return i?`0 0 ${u.tokens.radius.lg} ${u.tokens.radius.lg}`:`${u.tokens.radius.lg}`}};
  background-color: ${u.tokens.bg.base.default};

  // Tier recommendation styles
  border-color: ${e=>{let{isRecommended:i}=e;return i?`${u.tokens.primary.surface.default}`:`${u.tokens.border.muted.default}`}};
  border-width: ${e=>{let{isRecommended:i}=e;return i?`${u.tokens.borderWidth.thick}`:`${u.tokens.borderWidth.thin}`}};

  // Margin is added to non-recommended cards to match recommended cards that have a border
  margin: ${e=>{let{isRecommended:i}=e;return i?0:`0 ${u.tokens.borderWidth.thick} ${u.tokens.borderWidth.thick}`}};
  border-style: solid;
  ${e=>{let{isRecommended:i}=e;return i&&"border-top: none;"}}
`,e2=h.styled.div.withConfig({componentId:"sc-dfd5ac07-1"})`
  display: ${e=>{let{isRecommended:i}=e;return i?"block":"none"}};
  width: 100%;
  background-color: ${u.tokens.primary.surface.default};
  color: ${u.tokens.primary.onSurface.default};
  border-radius: ${u.tokens.radius.lg} ${u.tokens.radius.lg} 0 0;
  text-align: center;

  @media ${(0,_.mediaForBreakpoint)("sm")} {
    display: block;
    visibility: ${e=>{let{isRecommended:i}=e;return i?"visible":"hidden"}};
  }
`,e3=h.styled.div.withConfig({componentId:"sc-dfd5ac07-2"})`
  position: relative;
  display: ${e=>{let{hiddenMobile:i}=e;return i?"none":"inline"}};
  width: 100%;

  // This keeps an aspect ratio of 10/23, which matches the recommended image
  // size of 200x460 pixels in the tier editor
  padding-top: 43%;

  @media ${(0,_.mediaForBreakpoint)("sm")} {
    display: inline;
  }
`,e5=h.styled.img.withConfig({componentId:"sc-dfd5ac07-3"})`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  // Fill the container with the image, and center it roughly in the middle horizontally
  // and in the top-half vertically (since many images' focal points are near the top,
  // for example those with faces). Fill any transparent space with the theme color.
  object-fit: cover;
  object-position: 50% 25%;
  background-color: ${u.tokens.primary.surfaceMuted.default};
`,e6=h.styled.div.withConfig({componentId:"sc-dfd5ac07-4"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;

  gap: ${u.tokens.space.x8};

  padding: ${u.tokens.space.x16};

  @media ${(0,_.mediaForBreakpoint)("sm")} {
    gap: ${u.tokens.space.x12};

    padding-top: ${u.tokens.space.x24};
    padding-bottom: ${u.tokens.space.x24};
  }
`,e7=h.styled.div.withConfig({componentId:"sc-dfd5ac07-5"})`
  flex: 0 1 auto;
`,e8=h.styled.div.withConfig({componentId:"sc-dfd5ac07-6"})`
  flex: 1 1 auto;
`,e9=h.styled.div.withConfig({componentId:"sc-dfd5ac07-7"})`
  flex: 0 1 auto;
`;var e4=e.i(8022561);let ie=h.styled.div.withConfig({componentId:"sc-f764c713-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.isMembershipTab?u.tokens.space.x0:u.tokens.space.x16};
  // for carousel treatment (and more than 1 tier), add padding to edges of carousel.
  width: ${e=>e.mobileTiersVariant&&e.multipleTiers?`calc(100% - calc(${u.tokens.space.x16} * 2))`:"100%"};

  overflow-x: hidden;
`,ii=h.styled.div.withConfig({componentId:"sc-f764c713-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u.tokens.space.x12};
  text-align: center;
`,it=h.styled.div.withConfig({componentId:"sc-f764c713-2"})`
  width: 100%;
`,ir=(0,h.styled)(D.UnstyledLink).withConfig({componentId:"sc-f764c713-3"})`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u.tokens.space.x12};
    text-align: center;
  }
`;e.s(["TierDisplay",0,function(e){var h;let{showAllTiersByDefault:D,header:$,subheader:S,displayLargerHeader:P=!1,displayAvatar:B=!1,displayClickableHeader:L=!1,displayTierImages:_=!0,displayCarouselDots:z=!0,displayCta:F=!0,customCtaText:O,onTierSelect:E,disableCadenceToggle:M=!1,displayCadenceToggleOnTiers:R=!1,customTierFilterPredicate:H,displayedTiers:V,maxTiersForCarousel:N,maxCarouselItems:W,seeAllButtonVariant:U,noHorizontalMobilePadding:K,mobileTiersVariant:G=!1,seeMoreCard:J=!1,tierLoadedTag:Y,isCreatorWorldHome:Z=!1,autopilotDiscount:Q,urlParams:X,defaultAnnualCadence:ee=!1,isMembershipTab:ei=!1}=e,{i18n:et}=(0,t.useLingui)(),en=(0,e4.useCampaign)(),{regularTextColor:er}=j(),es=(0,w.useExperiment)(p.AUTOPILOT_HOLD_OUT_2025).getVariantNameOrNull({disableAutoLogExposure:!0})===p.TREATMENT,[ea,eo]=(0,m.useState)(!1),el=et._({id:"wpC8/S",message:"Available on selected tiers."}),ed=(0,C.getAnnualLiveSaleDiscountDecimal)(en?.liveSale),ec=!!en?.defaultAnnualToggleToOn,[eu,em]=(0,m.useState)(ec||ee),eh=Q&&!eu,eg=(h=Q?.discountPercentage??0,(0,i.jsx)(t.Trans,{id:"aGISOm",values:{discountPercentage:h},message:"Limited-time offer: {discountPercentage}% off your first month",context:"Header text to let members know that the offer is a limited time offer"})),ep=(0,i.jsx)(t.Trans,{id:"5iDuT5",components:{0:(0,i.jsx)(f.AutopilotTermsApply,{variant:"muted",size:"lg"})},message:"Unlock posts and benefits when you join. Offer applies to some monthly memberships only. <0/>",context:"Subheader text to let members know that the offer applies to some monthly memberships only"}),ex=(0,i.jsx)(t.Trans,{id:"n9Xt9a",message:"Unlock posts and benefits when you join.",context:"Subheader text to let members know that they can unlock posts and benefits when they upgrade to paid membership"}),ef=es&&Q&&eh?eg:$,ey=es&&Q?eh?ep:ex:S;if(!en)return null;let ej=V??(0,C.getTiers)(en,H);if(!ej)return null;let eb=ej.find(e=>!!(0,C.getAnnualDiscountDecimal)(e)),ew=eb?(0,C.getAnnualDiscountDecimal)(eb)??0:0,eC=!M&&ej.some(e=>(0,C.hasCadenceOptions)(e)),ev=_&&ej.some(e=>!!e.imageUrl),eT=ej.findIndex(e=>!!e?.rewardRecommendations?.length),ek=()=>eo(!0),eI=ej&&ej.length>1,eD=Q?.discountPercentage,e$=(0,x.paymentSavingsPercentageString)(100*ew),eS=(0,i.jsxs)(i.Fragment,{children:[B?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Avatar,{size:"80px",src:en.avatarPhotoImageUrls?.thumbnail,shape:"circle","data-tag":"tier-display-avatar"}),(0,i.jsx)(d.Spacer,{pb:u.tokens.space.x8})]}):null,es&&Q?(0,i.jsx)(i.Fragment,{children:eu?(0,i.jsx)(s.Chip,{variant:"success",children:e$}):(0,i.jsx)(y.TimeLeftChip,{expiryDate:(0,b.createUTCDate)(Q.expiresAt)})}):null,(0,i.jsxs)("div",{children:[ef&&(P?(0,i.jsx)(a.DisplayText,{size:"md",as:"h2",color:er,children:(0,i.jsx)(g.KeyTextElement,{contentLoadedTag:Y,children:ef})}):(0,i.jsx)(o.HeadingText,{size:"xl",as:"h2",color:er,children:(0,i.jsx)(g.KeyTextElement,{contentLoadedTag:Y,children:ef})})),ey&&(0,i.jsx)(d.Spacer,{pv:u.tokens.space.x8,children:(0,i.jsx)(r.BodyText,{size:"lg",as:"span",color:u.tokens.content.muted.default,children:ey})})]}),!es&&eD?(0,i.jsx)(s.Chip,{variant:"success",children:(0,i.jsxs)(c.Stack,{flexDirection:"row",gap:u.tokens.space.x4,justifyContent:"flex-start",alignItems:"center",children:[(0,i.jsx)(l.IconTag,{}),(0,i.jsx)(r.BodyText,{size:"sm",as:"span",children:(0,i.jsx)(t.Trans,{id:"F8wNO0",components:{0:(0,i.jsx)(T.Percent,{value:eD/100})},message:"<0/> off discount applied",context:"a discount applied to the first month of a membership"})})]})}):null]}),eA=(0,i.jsx)(ir,{href:en.url,"data-tag":"link-to-creator-page",children:eS}),eP=eC&&(0,i.jsx)(A,{campaign:en,isAnnualCadence:eu,setIsAnnualCadence:em,discountDecimal:ew,liveSaleDiscountDecimal:ed});return(0,i.jsxs)(ie,{mobileTiersVariant:G,multipleTiers:eI,isMembershipTab:ei,children:[(0,i.jsxs)(ii,{children:[L?eA:eS,!R&&eP]}),(0,i.jsx)(it,{children:(0,i.jsx)(q,{showAllTiersByDefault:D,maxTiersForCarousel:N,maxCarouselItems:W,seeAllButtonVariant:U,noHorizontalMobilePadding:K,mobileTiersVariant:G,displayCarouselDots:z,initialCenterIndex:eT,children:ej?.map((e,t)=>(0,i.jsx)(e0,{campaign:en,isCreatorWorldHome:Z,id:e.id,tier:e,annualToggleOn:eu,index:t,shouldShowTierImageContainer:ev,openSpecialOfferDialog:ek,customCtaText:O,onTierSelect:E,mobileTiersVariant:G&&!J,annualCadenceToggle:R&&eP,autopilotDiscount:Q&&Q.tierIds.includes(e.id)?Q:void 0,displayCta:F,urlParams:X},e.id))})}),en.activeOffer&&(0,i.jsx)(k.DialogShim,{loggerId:"benefitDescriptionDetails",id:"benefitDescriptionDetails","aria-label":et._({id:"pbZgza",message:"Benefit description details"}),size:"sm",isOpen:ea,showCloseButton:!1,primaryAction:{label:(0,x.closeString)(et),onClick:()=>eo(!1)},children:(0,i.jsx)(I.TierDetail,{title:en.activeOffer.title,subtitle:(0,v.timeLeft)(en.activeOffer.endsAt),description:en?.activeOffer.description,hint:el})})]})}],7030703)}]);

//# debugId=bb12fd3e-4592-7d20-3cd4-8a1af9bcb7c0
//# sourceMappingURL=14znq~.1dfszr.js.map
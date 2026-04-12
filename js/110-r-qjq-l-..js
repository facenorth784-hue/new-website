;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="364a5f00-4d89-e321-a97f-490983d096c2")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5042048,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconDiscoball",viewBox:"0 0 25 24",...e,children:[(0,t.jsx)("path",{d:"M3.98 5.13c.42-.05.54-.19.54-.61v-.05c0-.42-.12-.55-.54-.61-.76-.1-.98-.32-1.05-1.09l-.06-.72c-.04-.43-.18-.56-.61-.56s-.57.13-.61.56l-.06.72c-.06.77-.28.99-1.05 1.09-.42.05-.54.19-.54.61v.05c0 .42.12.55.54.61.76.1.98.32 1.05 1.09l.06.72c.04.43.18.56.61.56s.57-.13.61-.56l.06-.72c.06-.77.28-.99 1.05-1.09m19.5 13.74c-.76-.1-.98-.32-1.05-1.09l-.06-.72c-.04-.43-.18-.56-.61-.56s-.57.13-.61.56l-.06.72c-.06.77-.28.99-1.05 1.09-.42.05-.54.19-.54.61v.05c0 .42.12.55.54.61.76.1.98.32 1.05 1.09l.06.72c.04.43.18.56.61.56s.57-.13.61-.56l.06-.72c.06-.77.28-.99 1.05-1.09.42-.05.54-.19.54-.61v-.05c0-.42-.12-.55-.54-.61"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M13.9 2.45c0 .55.17.77.69.92 3.72 1.11 6.43 4.55 6.43 8.63a9 9 0 0 1-18 0c0-4.08 2.71-7.53 6.43-8.63.52-.16.69-.38.69-.92 0-.68.29-.96.96-.96h1.84c.68 0 .96.29.96.96M5.26 12c0 .55.07 1.09.2 1.61v.02c.04.14.17.24.32.24h2.4c.18 0 .32-.15.31-.34a19 19 0 0 1 0-3.05.307.307 0 0 0-.31-.34h-2.4c-.15 0-.28.1-.32.24-.13.52-.2 1.07-.2 1.62m1.21 3.84c.61.89 1.43 1.61 2.39 2.12h.01c.26.13.55-.12.45-.4-.23-.59-.41-1.24-.55-1.95a.32.32 0 0 0-.31-.26H6.74c-.25 0-.41.28-.27.49m5.545-10.59c-.53.007-1.236 1.126-1.675 2.99-.05.2.1.4.31.4h2.73c.2 0 .36-.2.31-.4-.439-1.874-1.146-2.983-1.675-2.99m1.685 8.61c.17 0 .31-.12.32-.29.05-.5.07-1.01.07-1.57s-.03-1.08-.07-1.58a.31.31 0 0 0-.32-.29h-3.38a.31.31 0 0 0-.32.29c-.04.5-.07 1.03-.07 1.58s.03 1.07.07 1.57c.01.17.15.29.32.29zm3.82-5.74a6.7 6.7 0 0 0-2.37-2.08c-.26-.13-.56.12-.45.4.22.58.4 1.24.54 1.94.03.15.16.26.31.26h1.71c.26 0 .41-.3.26-.52m-2.37 9.85c.95-.51 1.77-1.24 2.39-2.12h.01c.14-.21-.02-.49-.27-.49h-1.72a.32.32 0 0 0-.31.26c-.14.7-.33 1.36-.55 1.95-.11.28.19.54.45.4",clipRule:"evenodd"})]})});e.s(["IconDiscoball",0,i])},2208344,e=>{"use strict";var t=e.i(2358280),i=e.i(5712149),o=e.i(9645911),n=e.i(7973243);let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"post_otp"===e.contentUnlockType&&!!e.productVariant&&(!!t||!e.productVariant.isHidden)},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.filter(e=>r(e,t)).map(e=>e.productVariant);return i.length>0?i[0]??null:null},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!e&&(t||!e.isHidden)},l=e=>e.map(e=>{try{return(e=>{let{id:t,contentUnlockType:i}=e;if(!i)throw Error("contentUnlockType must be defined in ContentUnlockOption");switch(i){case"post_otp":case"collection_otp":{if(!e.productVariant)return null;if(!t)throw Error("id must be defined for post_otp and collection_otp content unlock option");let{productVariant:o}=e;return{id:t,contentUnlockType:i,productVariant:o}}case"tier":case"patrons":case"min_cents_pledged":if(!e.reward||!e.rewardBenefitCategories)return null;if(!t)throw Error("id must be defined for tier content unlock option");return{id:t,contentUnlockType:i,reward:e.reward,rewardBenefitCategories:e.rewardBenefitCategories};default:return null}})(e)}catch(e){(0,n.logException)({exception:e,surface:"content"})}return null}).filter(e=>null!==e),d=e=>{let t;if(!e)return{isCollectionOtpMonetized:!1,monetizedCollectionOtpProductVariant:null};let i=(t=l(e).filter(e=>"collection_otp"===e.contentUnlockType&&a(e.productVariant)).map(e=>e.productVariant).filter(Boolean)).length>0?t[0]:null;return{isCollectionOtpMonetized:null!=i,monetizedCollectionOtpProductVariant:i}},c=e=>{if(!e)return{isMonetizedPost:!1,isMonetizedPostPurchased:!1,monetizedPostProductVariant:null};let t=s(l(e)),i=!!t,n=i&&t?(0,o.getMostRecentAccessContext)(t):null;return{isMonetizedPost:i,isMonetizedPostPurchased:n?.reason==="purchase",monetizedPostProductVariant:t}};e.s(["getCollectionMonetizationInfo",0,d,"getMonetizationInfo",0,(e,t)=>{if("post"===t){let{isMonetizedPost:t,monetizedPostProductVariant:i}=c(e);return{isMonetized:t,priceCents:i?.priceCents,currencyCode:i?.currencyCode,isScheduled:i?.publishedAtDatetime===null}}{let{isCollectionOtpMonetized:t,monetizedCollectionOtpProductVariant:i}=d(e);return{isMonetized:t,priceCents:i?.priceCents,currencyCode:i?.currencyCode}}},"getMonetizedPostProductVariant",0,s,"getPostMonetizationInfo",0,c,"getPostMonetizationInsights",0,e=>{if(!e)return;let t=s(l(e),!0);if(!t?.isHidden||t?.insights?.sales!==0)return t?.insights},"getRewardMonetizationInfo",0,e=>{let{i18n:o}=(0,t.useLingui)();if(!e)return{isAccessibleThroughTier:!1,postReward:null,rewardBenefitCategories:[]};let{reward:n,rewardBenefitCategories:r}=((e,t)=>{let o=e.filter(e=>"tier"===e.contentUnlockType||"patrons"===e.contentUnlockType||"min_cents_pledged"===e.contentUnlockType).map(e=>({reward:e.reward,rewardBenefitCategories:e.rewardBenefitCategories}));if(o.length>0){let e=[...o].sort((e,t)=>e.reward.patronAmountCents-t.reward.patronAmountCents),n=(0,i.CategoryTypeOptions)(t).filter(e=>o[0].rewardBenefitCategories.includes(e.value));return{reward:e[0].reward,rewardBenefitCategories:n??[]}}return{reward:null,rewardBenefitCategories:[]}})(l(e),o);return{isAccessibleThroughTier:!!n,postReward:n,rewardBenefitCategories:r}},"hasMonetizedPostProductVariant",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.some(e=>r(e,t))}])},4262862,5845433,e=>{"use strict";var t=e.i(9391398),i=e.i(226931),o=e.i(9760814),n=e.i(2358280),r=e.i(4971520),s=e.i(6191788),a=e.i(2550472),l=e.i(3002033);let d=e=>{let{onRemove:i,loggerId:o,disabled:d,disabledStateText:c}=e,{i18n:u}=(0,n.useLingui)(),p=(0,t.jsx)(a.ButtonShim,{"aria-label":u._({id:"Wp27/y",message:"button to dismiss media"}),corners:"pill",disabled:d,icon:r.IconDelete,id:"dismissable-media-wrapper-button",loggerId:o,onClick:i,variant:"insetBlack"});return d&&c?(0,t.jsx)(l.TooltipShim,{loggerId:"DismissMediaButton-Tooltip",textContent:c??"",children:p}):(0,t.jsx)(s.Fragment,{children:p})};e.s(["DismissMediaButton",0,d],5845433);let c=o.styled.div.withConfig({componentId:"sc-3d0ebb-0"})`
  position: absolute;
  right: ${i.tokens.space.x16};
  padding-top: ${e=>e.isThumbnail?i.tokens.space.x12:i.tokens.space.x16};
  padding-right: ${e=>e.isThumbnail&&i.tokens.space.x12};
  z-index: ${i.tokens.layer.z1};
`,u=o.styled.div.withConfig({componentId:"sc-3d0ebb-1"})`
  position: relative;
  min-height: 56px;
  height: 100%;
`;e.s(["DismissibleMediaWrapper",0,e=>{let{children:i,onRemove:o,isThumbnail:n,shouldHide:r,shouldDisable:s,disabledStateText:a,className:l}=e;return(0,t.jsxs)(u,{className:l,children:[!r&&(0,t.jsx)(c,{isThumbnail:n,children:(0,t.jsx)(d,{onRemove:o,loggerId:"DismissibleMediaWrapper-remove",disabled:s,disabledStateText:a})}),i]})}],4262862)},1212137,e=>{"use strict";var t=e.i(6191788);e.i(4971186);var i=e.i(8819467),o=e.i(1163396),n=function(e,t){return e<t?-1:+(e>t)},r=function(e){return e.reduce(function(e,t){return e+t},0)},s=function(){function e(e){this.colors=e}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(e){return e},e}(),a=function(){function e(e,t,i){return(e<<10)+(t<<5)+i}function t(e){var t=[],i=!1;function o(){t.sort(e),i=!0}return{push:function(e){t.push(e),i=!1},peek:function(e){return i||o(),void 0===e&&(e=t.length-1),t[e]},pop:function(){return i||o(),t.pop()},size:function(){return t.length},map:function(e){return t.map(e)},debug:function(){return i||o(),t}}}function i(e,t,i,o,n,r,s){this.r1=e,this.r2=t,this.g1=i,this.g2=o,this.b1=n,this.b2=r,this.histo=s}function o(){this.vboxes=new t(function(e,t){return n(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume())})}return i.prototype={volume:function(e){return(!this._volume||e)&&(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var i=this.histo;if(!this._count_set||t){var o,n,r,s=0;for(o=this.r1;o<=this.r2;o++)for(n=this.g1;n<=this.g2;n++)for(r=this.b1;r<=this.b2;r++)s+=i[e(o,n,r)]||0;this._count=s,this._count_set=!0}return this._count},copy:function(){return new i(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(t){var i=this.histo;if(!this._avg||t){var o,n,r,s,a=0,l=0,d=0,c=0;if(this.r1===this.r2&&this.g1===this.g2&&this.b1===this.b2)this._avg=[this.r1<<3,this.g1<<3,this.b1<<3];else{for(n=this.r1;n<=this.r2;n++)for(r=this.g1;r<=this.g2;r++)for(s=this.b1;s<=this.b2;s++)a+=o=i[e(n,r,s)]||0,l+=o*(n+.5)*8,d+=o*(r+.5)*8,c+=o*(s+.5)*8;a?this._avg=[~~(l/a),~~(d/a),~~(c/a)]:this._avg=[~~(8*(this.r1+this.r2+1)/2),~~(8*(this.g1+this.g2+1)/2),~~(8*(this.b1+this.b2+1)/2)]}}return this._avg},contains:function(e){var t=e[0]>>3;return gval=e[1]>>3,bval=e[2]>>3,t>=this.r1&&t<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},o.prototype={push:function(e){this.vboxes.push({vbox:e,color:e.avg()})},palette:function(){return this.vboxes.map(function(e){return e.color})},size:function(){return this.vboxes.size()},map:function(e){for(var t=this.vboxes,i=0;i<t.size();i++)if(t.peek(i).vbox.contains(e))return t.peek(i).color;return this.nearest(e)},nearest:function(e){for(var t,i,o,n=this.vboxes,r=0;r<n.size();r++)((i=Math.sqrt(Math.pow(e[0]-n.peek(r).color[0],2)+Math.pow(e[1]-n.peek(r).color[1],2)+Math.pow(e[2]-n.peek(r).color[2],2)))<t||void 0===t)&&(t=i,o=n.peek(r).color);return o},forcebw:function(){var e=this.vboxes;e.sort(function(e,t){return n(r(e.color),r(t.color))});var t=e[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(e[0].color=[0,0,0]);var i=e.length-1,o=e[i].color;o[0]>251&&o[1]>251&&o[2]>251&&(e[i].color=[255,255,255])}},{quantize:function(r,a){if(!Number.isInteger(a)||a<1||a>256)throw Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!r.length||a<2||a>256||!r.length||a<2||a>256)return!1;for(var l,d,c,u,p,h,m,g,f,x,v,y,b=[],C=new Set,w=0;w<r.length;w++){var _=r[w],P=_.join(",");C.has(P)||(C.add(P),b.push(_))}if(b.length<=a)return new s(b);var I=(c=Array(32768),r.forEach(function(t){d=t[0]>>3,c[l=e(d,t[1]>>3,t[2]>>3)]=(c[l]||0)+1}),c);I.forEach(function(){});var T=(m=1e6,g=0,f=1e6,x=0,v=1e6,y=0,r.forEach(function(e){u=e[0]>>3,p=e[1]>>3,h=e[2]>>3,u<m?m=u:u>g&&(g=u),p<f?f=p:p>x&&(x=p),h<v?v=h:h>y&&(y=h)}),new i(m,g,f,x,v,y,I)),j=new t(function(e,t){return n(e.count(),t.count())});function k(t,i){for(var o,n=t.size(),r=0;r<1e3;){if(n>=i||r++>1e3)return;if(!(o=t.pop()).count()){t.push(o),r++;continue}var s=function(t,i){if(i.count()){var o=i.r2-i.r1+1,n=i.g2-i.g1+1,r=(s=[o,n,i.b2-i.b1+1],Math.max.apply(null,s));if(1==i.count())return[i.copy()];var s,a,l,d,c,u=0,p=[],h=[];if(r==o)for(a=i.r1;a<=i.r2;a++){for(c=0,l=i.g1;l<=i.g2;l++)for(d=i.b1;d<=i.b2;d++)c+=t[e(a,l,d)]||0;u+=c,p[a]=u}else if(r==n)for(a=i.g1;a<=i.g2;a++){for(c=0,l=i.r1;l<=i.r2;l++)for(d=i.b1;d<=i.b2;d++)c+=t[e(l,a,d)]||0;u+=c,p[a]=u}else for(a=i.b1;a<=i.b2;a++){for(c=0,l=i.r1;l<=i.r2;l++)for(d=i.g1;d<=i.g2;d++)c+=t[e(l,d,a)]||0;u+=c,p[a]=u}return p.forEach(function(e,t){h[t]=u-e}),function(e){var t,o,n,r,s,l=e+"1",d=e+"2",c=0;for(a=i[l];a<=i[d];a++)if(p[a]>u/2){for(n=i.copy(),r=i.copy(),s=(t=a-i[l])<=(o=i[d]-a)?Math.min(i[d]-1,~~(a+o/2)):Math.max(i[l],~~(a-1-t/2));!p[s];)s++;for(c=h[s];!c&&p[s-1];)c=h[--s];return n[d]=s,r[l]=n[d]+1,[n,r]}}(r==o?"r":r==n?"g":"b")}}(I,o),a=s[0],l=s[1];if(!a)return;t.push(a),l&&(t.push(l),n++)}}j.push(T),k(j,.75*a);for(var E=new t(function(e,t){return n(e.count()*e.volume(),t.count()*t.volume())});j.size();)E.push(j.pop());k(E,a);for(var D=new o;E.size();)D.push(E.pop());return D}}}().quantize;function l(e){let{r:t,g:i,b:o}=e;return`#${t.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`}function d(e){let t=0,i=0,o=0,n=0;for(let r=0;r<e.length;r+=4)++n,t+=e[r],i+=e[r+1],o+=e[r+2];let r=Math.floor(t/n);return l({r,g:Math.floor(i/n),b:Math.floor(o/n)})}function c(e,t){return"top-left"===t?e.getImageData(0,0,4,4).data:"top-right"===t?e.getImageData(96,0,4,4).data:"bottom-left"===t?e.getImageData(0,96,4,4).data:e.getImageData(96,96,4,4).data}let u=!i.IS_DEV&&!i.IS_TEST||i.IS_HAPPO,p="#555A62",h="#8ea2a0",m="#3c4f27",g={dominantColor:p,averageColorsOfCorners:{topLeft:h,topRight:h,bottomLeft:m,bottomRight:m},palette:[p,p,p,p]};async function f(e){let{key:t,url:i,computeCorners:n,computePalette:r,numberOfColors:s}=e;(0,o.datadogIncrement)("patreon.client_extract_image_colors.fetch_image_colors",{key:t});try{let e,u,p=await new Promise((e,t)=>{let o=new Image;o.onload=()=>e(o),o.onerror=()=>t,o.crossOrigin="Anonymous",o.src=i});if(!p)return(0,o.datadogIncrement)("patreon.client_extract_image_colors.no_image",{key:t}),null;let h=(u=(e=document.createElement("canvas")).getContext("2d"))?(e.width=100,e.height=100,u.drawImage(p,0,0,e.width,e.height),u):null;if(!h)return(0,o.datadogIncrement)("patreon.client_extract_image_colors.no_canvas_context",{key:t}),null;let m=n?{topLeft:d(c(h,"top-left")),topRight:d(c(h,"top-right")),bottomLeft:d(c(h,"bottom-left")),bottomRight:d(c(h,"bottom-right"))}:void 0,g=r?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return a(function(e){let t=[],i=Math.floor(e.length/4);for(let o=0;o<i;o+=4){let i=4*o,n=e[i+0],r=e[i+1],s=e[i+2],a=e[i+3];(void 0===a||a>=125)&&!(n>250&&r>250&&s>250)&&t.push([n,r,s])}return t}(e.getImageData(0,0,100,100).data),t).palette().map(e=>{let[t,i,o]=e;return l({r:t,g:i,b:o})})}(h,s):void 0,f=g?g[0]:void 0;return{averageColorsOfCorners:m,palette:g,dominantColor:f}}catch(e){return(0,o.datadogIncrement)("patreon.client_extract_image_colors.load_error",{key:t}),null}}e.s(["useClientExtractImageColors",0,function(e){let{key:i,url:o,computeCorners:n=!0,computePalette:r=!0,numberOfColors:s=4,isEnabled:a=!0}=e,[l,d]=(0,t.useState)(g);return(0,t.useEffect)(()=>{a&&u&&f({key:i,url:o,computeCorners:n,computePalette:r,numberOfColors:s}).then(e=>{d(t=>({averageColorsOfCorners:e?.averageColorsOfCorners??t.averageColorsOfCorners,palette:e?.palette??t.palette,dominantColor:e?.dominantColor??t.dominantColor}))})},[n,r,a,i,s,o]),l}],1212137)},1502179,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconBubbleChatOff",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M13.55 6.948c.472-.088.75-.225.848-.442.097-.216.012-.512-.245-.918-.529-.837-1.3-1.484-2.29-1.922C10.872 3.23 9.66 3 8.25 3q-1.27.001-2.318.242a.52.52 0 0 1-.484-.135l-.38-.38c-.318-.318-.557-.477-.795-.477-.24 0-.478.159-.796.477S3 3.284 3 3.523c0 .153.066.307.197.481l5.44 5.461a.26.26 0 0 0 .382-.023c1.129-1.371 2.8-2.172 4.532-2.494M15.75 8.25c2.148 0 3.835.529 4.986 1.52 1.15.99 1.764 2.443 1.764 4.293 0 .99-.177 1.867-.518 2.62a4.8 4.8 0 0 1-1.059 1.496.26.26 0 0 0-.009.373l.574.572c.175.21.262.387.262.564 0 .238-.159.477-.477.795s-.557.477-.796.477c-.238 0-.477-.159-.795-.477l-9.483-9.458a.466.466 0 0 1-.048-.621q.275-.344.613-.635c1.15-.99 2.838-1.519 4.986-1.519M7.5 14.063v.006c0 .2-.037.36-.118.492A1 1 0 0 1 7 14.9c-.47.26-.7.66-.987.996s-.632.605-1.329.605a.563.563 0 0 1-.559-.562v-1.475c0-.23-.058-.45-.163-.646a1.55 1.55 0 0 0-.438-.508 4.8 4.8 0 0 1-1.505-1.876c-.342-.753-.519-1.63-.519-2.62 0-1.13.229-2.111.669-2.93a.238.238 0 0 1 .38-.05l5.2 5.201a.52.52 0 0 1 .122.532 8.1 8.1 0 0 0-.37 2.496m1.993-1.273c-.138-.142-.376-.075-.407.12A7.4 7.4 0 0 0 9 14.063c0 1.85.614 3.303 1.764 4.294 1.386 1.193 3.194 1.47 4.961 1.512a.245.245 0 0 0 .18-.416z"})})});e.s(["IconBubbleChatOff",0,i])},3829582,e=>{"use strict";var t=e.i(9391398);let i=(0,e.i(2669840).default)(function(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","data-tag":"IconArrowLeft",viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"m12.49 5.756-1.803 1.803-1.803 1.803c-.292.293-.381.577-.294.788s.352.35.766.35H19.5c.6 0 .974.075 1.2.3s.3.6.3 1.2-.075.975-.3 1.2c-.226.225-.6.3-1.2.3H9.356c-.414 0-.678.138-.766.35-.087.21.002.495.294.788l1.803 1.803 1.804 1.803c.423.423.634.742.634 1.06 0 .32-.211.639-.634 1.062S11.749 21 11.43 21c-.32 0-.638-.211-1.06-.634l-3.653-3.653-3.653-3.652c-.423-.423-.634-.742-.634-1.06 0-.32.211-.639.634-1.062l3.653-3.652 3.652-3.652c.423-.423.742-.635 1.06-.635.32 0 .639.212 1.061.635.423.423.635.741.635 1.06s-.211.638-.634 1.06"})})});e.s(["IconArrowLeft",0,i])},6607314,e=>{"use strict";var t=e.i(366182);class i{alphaValue;hueValue;chromaValue;toneValue;constructor(e){const{hue:i,chroma:o,tone:n,alpha:r}=(0,t.hex2hcta)(e);this.hueValue=i,this.chromaValue=o,this.toneValue=n,this.alphaValue=r}hue(e){return"function"==typeof e?this.hueValue=e(this.hueValue):this.hueValue=e,this}chroma(e){return"function"==typeof e?this.chromaValue=e(this.chromaValue):this.chromaValue=e,this}tone(e){return"function"==typeof e?this.toneValue=e(this.toneValue):this.toneValue=e,this}alpha(e){return"function"==typeof e?this.alphaValue=e(this.alphaValue):this.alphaValue=e,this}value(){return void 0===this.alphaValue?(0,t.hcta2hex)({hue:this.hueValue,chroma:this.chromaValue,tone:this.toneValue}):(0,t.hcta2hex)({hue:this.hueValue,chroma:this.chromaValue,tone:this.toneValue,alpha:this.alphaValue})}}e.s(["colorMod",0,function(e,t){return t(new i(e)).value()}])},3610816,e=>{e.v({root:"EditorMediaPreviewActions-module__ur3I6W__root"})},2023762,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(6112151),n=e.i(3492246),r=e.i(1967147),s=e.i(7172197),a=e.i(2859206),l=e.i(226931),d=e.i(6191788),c=e.i(9760814),u=e.i(2550472),p=e.i(3610816);let h=(0,d.forwardRef)((e,r)=>{let{actions:d,loggerId:c,onClickMenuButton:h}=e,{i18n:f}=(0,i.useLingui)(),x=f._({id:"FFnDZ+",message:"Menu for additional actions on the uploaded media"});return(0,t.jsx)("div",{ref:r,className:p.default.root,children:(0,t.jsxs)(s.OverlayTriggerToggle,{"aria-label":x,loggerId:c+"-toggle",preset:"menu",children:[(0,t.jsx)(u.ButtonShim,{variant:"insetBlack",icon:n.IconMore,iconProps:{size:"24px"},"aria-label":x,loggerId:c+"-button",corners:"pill",size:"md",onClick:h}),(0,t.jsx)(m,{padding:"none",children:(0,t.jsx)(a.Spacer,{pv:l.tokens.space.x8,children:d.map(e=>{let{icon:i,label:n,onClick:r,color:s}=e;return(0,t.jsx)(g,{onClick:r,icon:i,loggerId:`${c}-button-${n.replace(" ","")}`,iconProps:{color:s},children:(0,t.jsx)(o.BodyText,{size:"md",color:s,children:n})},n)})})})]})})}),m=(0,c.styled)(r.OverlayPopover).withConfig({componentId:"sc-a3bb1c97-0"})`
  &&& {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
`,g=(0,c.styled)(u.ButtonShim).withConfig({componentId:"sc-a3bb1c97-1"})`
  &&& {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 0;
    background-color: transparent;
    padding: 0 ${l.tokens.space.x16};
  }
`;e.s(["EditorMediaPreviewActions",0,h])},8815328,e=>{e.v({bulletIcon:"ProductNotificationDialog-module__2JLEna__bulletIcon",postValuePropDescription:"ProductNotificationDialog-module__2JLEna__postValuePropDescription",textLink:"ProductNotificationDialog-module__2JLEna__textLink",underlineTextLink:"ProductNotificationDialog-module__2JLEna__underlineTextLink"})},8690673,e=>{"use strict";var t=e.i(9391398),i=e.i(6112151),o=e.i(712139),n=e.i(6900019),r=e.i(5483377),s=e.i(9956793),a=e.i(226931),l=e.i(6272043),d=e.i(2550472),c=e.i(5363035),u=e.i(9760814);let p=u.styled.div.withConfig({componentId:"sc-25229d2c-0"})`
  margin-bottom: ${a.tokens.space.x8};
`,h=(0,u.styled)(c.HeadingText).withConfig({componentId:"sc-25229d2c-1"})`
  &&& {
  }
`,m=(0,u.styled)(i.BodyText).withConfig({componentId:"sc-25229d2c-2"})`
  &&& {
    padding-top: ${a.tokens.space.x8};
  }
`,g=u.styled.div.withConfig({componentId:"sc-25229d2c-3"})``,f=u.styled.li.withConfig({componentId:"sc-25229d2c-4"})`
  display: flex;
  gap: ${a.tokens.space.x12};
  align-items: center;

  ${e=>{let{displayBullet:t}=e;return t?"display: list-item;":""}}
`,x=u.styled.ul.withConfig({componentId:"sc-25229d2c-5"})`
  display: flex;
  flex-direction: column;
  gap: ${a.tokens.space.x12};
  margin: 0;
  margin-top: ${a.tokens.space.x16};
  padding: 0;
  list-style-type: none;

  ${e=>{let{showBullets:t}=e;return t?`
        padding-left: ${a.tokens.space.x16};
        list-style-type: disc;
      `:""}}
`,v=u.styled.div.withConfig({componentId:"sc-25229d2c-6"})`
  ${e=>{let{tight:t}=e;return t?`margin-top: ${a.tokens.space.x8};`:`margin-top: ${a.tokens.space.x16};`}}
`,y=u.styled.div.withConfig({componentId:"sc-25229d2c-7"})`
  ${h} + ${m} {
    margin-top: ${a.tokens.space.x4};
  }

  ${m} + ${x} {
    margin-top: ${a.tokens.space.x24};
  }

  ${x} + ${v} {
    margin-top: ${a.tokens.space.x24};
  }
`;var b=e.i(8815328);e.s(["ProductNotificationDialog",0,e=>{let{isOpen:c,onCloseRequest:u,showCloseButton:C,id:w,banner:_,title:P,description:I,valueProps:T,primaryCTA:j,secondaryCTA:k,chip:E,postValuePropDescription:D,align:A="left",size:S="sm",ctaSpacing:V="loose"}=e;return(0,t.jsx)(n.ColorSystemContainer,{color:"reset",children:(0,t.jsx)(r.Dialog,{loggerId:`pcomms-dialog-${w}`,id:w,isOpen:c,onCloseRequest:u,showCloseButton:C,size:S,media:_?(0,t.jsx)(s.Image,{height:"240px",sizing:"cover",src:_.src,alt:_.alt,placeholder:_?.placeholder}):void 0,children:(0,t.jsxs)(y,{children:[E?(0,t.jsx)(p,{children:(0,t.jsx)(o.Chip,{size:E.size,children:E.text??""})}):null,(0,t.jsx)(h,{forwardedAs:"p",size:"lg",align:A,children:P}),I&&(0,t.jsx)(m,{size:"lg",align:A,children:I}),(()=>{if(!T||0===T.length)return null;let e=T.some(e=>e?.icon),o=T.map(e=>{let o=e?.icon;return(0,t.jsxs)(f,{displayBullet:!o,children:[o?(0,t.jsxs)(g,{children:[(0,t.jsx)(o,{size:e.iconSize??"32px",color:a.tokens.content.regular.default})," "]}):null,"string"==typeof e.description?(0,t.jsx)(i.BodyText,{children:e.description}):e.description]},e.id)});return(0,t.jsx)(x,{showBullets:!e,children:o})})(),D&&(0,t.jsx)("div",{className:(0,l.default)(b.default.postValuePropDescription),children:(0,t.jsx)(i.BodyText,{size:"lg",children:D})}),j&&(0,t.jsx)(v,{tight:"tight"===V,children:(0,t.jsx)(d.ButtonShim,{loggerId:`pcomms-dialog-primary-cta-${w}`,variant:"primary",fluid:!0,onClick:j.onClick,href:j?.href,corners:j.corners,target:j?.href?"_blank":void 0,children:j.text})}),k&&(0,t.jsx)(v,{tight:"tight"===V,children:(0,t.jsx)(d.ButtonShim,{loggerId:`pcomms-dialog-secondary-cta-${w}`,variant:"secondary",unfilled:void 0===k.unfilled||k.unfilled,fluid:!0,onClick:k.onClick,href:k?.href,target:k?.href?"_blank":void 0,children:k.text})})]})})})}],8690673)},9435654,e=>{"use strict";var t=e.i(6202039),i=e.i(8799586),o=e.i(8516319);e.s(["useDropFromContext",0,()=>{let{media:e,...n}=(0,i.useContentCardData)(),{currentUserCanView:r,feedName:s}=(0,o.useContentCardViewerInfo)();return n.drop?(0,t.fromContentCardContext)(n,r,s):null}])},9214238,e=>{"use strict";var t=e.i(9391398),i=e.i(6191788),o=e.i(3827998);e.s(["StateProvider",0,function(e){let{contentCardData:n,currentUserPledge:r,currentUserCanView:s,feedName:a,isPreview:l,isPinned:d,isRelated:c,postIdPosition:u,referrerPostId:p,isFreeMember:h,isPatron:m,requestJoinKey:g,titleContentLoadedTag:f,enablePostRatioBasedLayout:x,children:v}=e,y=(0,i.useMemo)(()=>({contentCardData:{...n,isPinned:d,contentJsonString:n.contentJsonString},currentUserPledge:r,currentUserCanView:s,feedName:a,isPreview:l,isRelated:c,postIdPosition:u,referrerPostId:p,isFreeMember:h,isPatron:m,requestJoinKey:g,titleContentLoadedTag:f,enablePostRatioBasedLayout:x}),[n,r,s,a,l,d,c,u,p,h,m,g,f,x]);return(0,t.jsx)(o.ContentCardsContext.Provider,{value:y,children:v})}])},7190086,e=>{"use strict";var t=e.i(1785954),i=e.i(4853452);function o(e,i){return{...e,campaign:i,changeVisibilityAt:e.changeVisibilityAt??"",commentCount:e.commentCount??0,commenterCount:e.commenterCount??0,createdAt:e.createdAt??new Date().toISOString(),currentUserCanComment:e.currentUserCanComment??!1,currentUserCanDelete:e.currentUserCanDelete??!1,currentUserCanEdit:e.currentUserCanEdit??null,currentUserCanReport:e.currentUserCanReport??!1,currentUserHasLiked:e.currentUserHasLiked??!1,hasTiViolation:e.hasTiViolation??!1,likeCount:e.likeCount??0,isMonthly:!!i?.isMonthly,isPinned:!1,minCentsPledgedToView:e.minCentsPledgedToView??null,postType:e.postType||t.ApiPostType.GENERIC,publishedAt:e.publishedAt??"",viewCount:e.viewCount??0,wasPostedByCampaignOwner:!!e.wasPostedByCampaignOwner}}function n(e,n){let r=[t.ApiPostType.LIVESTREAM_CROWDCAST,t.ApiPostType.LIVESTREAM_VIMEO,t.ApiPostType.LIVESTREAM_YOUTUBE,t.ApiPostType.VIDEO_EXTERNAL_FILE,t.ApiPostType.LIVESTREAM,t.ApiPostType.VIDEO_EMBED,t.ApiPostType.AUDIO_FILE,t.ApiPostType.AUDIO_EMBED,t.ApiPostType.PODCAST];return e.audioPreview||e.videoPreview||e.postType&&r.includes(e.postType)||!!(0,i.getLegacyMediaEmbedType)(o(e,n))}e.s(["canUsePlayableContentBanner",0,function(e){if(!e.postType)return!1;let i=e.postType===t.ApiPostType.AUDIO_FILE,o=[t.ApiPostType.LIVESTREAM,t.ApiPostType.LIVESTREAM_CROWDCAST,t.ApiPostType.LIVESTREAM_VIMEO,t.ApiPostType.LIVESTREAM_YOUTUBE,t.ApiPostType.VIDEO_EXTERNAL_FILE,t.ApiPostType.VIDEO_EMBED,t.ApiPostType.AUDIO_EMBED,t.ApiPostType.PODCAST].includes(e.postType);return i||o},"convertToContentCardData",0,o,"hasInlinePlayableContent",0,function(e,t){return n(e,t)&&(e.currentUserCanView||e.audioPreview||e.videoPreview)&&!e.video?.display?.viewerPlaybackData?.drmToken},"isPlayableLinkEmbed",0,function(e){return!!e.embed&&e.postType===t.ApiPostType.LINK&&("YouTube"===e.embed.provider||"Vimeo"===e.embed.provider)},"isPlayablePostType",0,n])},6085143,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(6112151),n=e.i(9760814);function r(e){let{fontStack:t,fontSize:i,fontWeight:o,letterSpacing:r,lineHeight:s,fontWidth:a}=e;return n.css`
    font-family: ${t};
    font-size: ${i};
    font-weight: ${o};
    letter-spacing: ${r};
    line-height: ${s};

    ${a&&n.css`
      font-variation-settings: ${a};
      font-variant-numeric: lining-nums tabular-nums;
    `}
  `}var s=e.i(2925392),a=e.i(8981215),l=e.i(226931),d=e.i(48787),c=e.i(6191788);e.i(4971186);var u=e.i(8819467),p=e.i(4412387),h=e.i(1771403);function m(e){let{current:i,previous:n,label:r,size:s}=e,a=(0,c.useRef)(null),d=(0,c.useRef)(null);return(0,c.useEffect)(()=>n!==i?function(e,t){if(u.IS_HAPPO||!e||!t)return;let i=_(e,"-100%","0%"),o=_(t,"0%","100%");return function(){i?.cancel(),o?.cancel()}}(a.current,d.current):()=>void 0,[n,i]),(0,t.jsxs)(g,{"data-zero":0===i,children:[(0,t.jsxs)(C,{size:s,children:[(0,t.jsx)(w,{ref:a,animateIn:n!==i,suppressHydrationWarning:!0,children:i.toString().padStart(2,"0")}),n!==i&&(0,t.jsx)(w,{suppressHydrationWarning:!0,ref:d,children:n.toString().padStart(2,"0")})]}),(0,t.jsx)(o.BodyText,{size:"x-small"===s?"xs":"md",color:l.tokens.constant.whiteMuted.default,children:r})]})}let g=n.styled.div.withConfig({componentId:"sc-47cc3720-0"})`
  display: flex;
  flex-direction: column;
  gap: ${l.tokens.space.x4};
  align-items: center;
  color: ${l.tokens.constant.white.default};

  /* Only use the white muted color if the digit is zero AND the larger units are also zero */
  /* i.e. if hours are zero but days are not, still render the regular white, but if both are zero, both should be muted white */
  /* (also nth-child() is 1-indexed instead of 0-indexed 🤦‍♂️) */
  &:nth-child(1)[data-zero=true],
  &:nth-child(1)[data-zero=true] + &:nth-child(2)[data-zero=true],
  &:nth-child(1)[data-zero=true] + &:nth-child(2)[data-zero=true] + &:nth-child(3)[data-zero=true] {
    color: ${l.tokens.constant.whiteMuted.default};
  }
`,f=n.styled.div.withConfig({componentId:"sc-47cc3720-1"})`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  background-color: ${l.tokens.constant.blackSubtle.default};
  border-radius: ${l.tokens.radius.lg};
  overflow: hidden;
  width: fit-content;
`,x=n.styled.div.withConfig({componentId:"sc-47cc3720-2"})`
  background-color: ${l.tokens.primary.surfaceMuted.default};
  padding: ${l.tokens.space.x4} 0;
  text-align: center;
  ${(0,s.cssForHeadingText)({size:"xs"})}

  @media ${(0,a.mediaForBreakpoint)("sm")} {
    ${e=>{let{size:t}=e;return(0,s.cssForHeadingText)({size:"small"===t?"xs":"sm"})}}
  }
`,v={"x-small":n.css`
    --padding-bottom: 6px;
    --padding-top: ${e=>{let{isSeason:t}=e;return t?"2px":"var(--padding-bottom)"}};
    --padding-horizontal: ${l.tokens.space.x12};
    --gap: ${l.tokens.space.x24};
  `,small:n.css`
    --padding-bottom: ${l.tokens.space.x12};
    --padding-top: ${e=>{let{isSeason:t}=e;return t?l.tokens.space.x4:"var(--padding-bottom)"}};
    --padding-horizontal: ${l.tokens.space.x24};
    --gap: ${l.tokens.space.x24};
  `,default:n.css`
    --padding-bottom: ${l.tokens.space.x12};
    --padding-top: ${e=>{let{isSeason:t}=e;return t?l.tokens.space.x8:"var(--padding-bottom)"}};
    --padding-horizontal: ${l.tokens.space.x48};
    --gap: ${l.tokens.space.x32};
  `},y=n.styled.div.withConfig({componentId:"sc-47cc3720-3"})`
  /* On narrow viewports, the default is 'small', but if the supplied size is 'x-small' use that. */
  ${e=>{let{size:t}=e;return"x-small"===t?v["x-small"]:v.small}}

  @media ${(0,a.mediaForBreakpoint)("sm")} {
    ${e=>{let{size:t}=e;return v[t]}}
  }

  display: flex;
  align-items: center;
  padding: var(--padding-top) var(--padding-horizontal) var(--padding-bottom);
  gap: var(--gap);
`,b={"x-small":n.css`
    height: 18px;
    width: 20px;

    ${r({fontStack:d.typeTokens.dataDisplay.fontStack,fontSize:"18px",fontWeight:d.typeTokens.dataDisplay.fontWeights.medium,lineHeight:d.typeTokens.dataDisplay.lineHeight,letterSpacing:d.typeTokens.dataDisplay.letterSpacing,fontWidth:d.typeTokens.dataDisplay.fontWidth})}
  `,small:n.css`
    height: 36px;
    width: 35px;

    ${r({fontStack:d.typeTokens.dataDisplay.fontStack,fontSize:d.typeTokens.dataDisplay.fontSizes.md,fontWeight:d.typeTokens.dataDisplay.fontWeights.medium,lineHeight:d.typeTokens.dataDisplay.lineHeight,letterSpacing:d.typeTokens.dataDisplay.letterSpacing,fontWidth:d.typeTokens.dataDisplay.fontWidth})}
  `,default:n.css`
    height: 51px;
    width: 52px;

    ${r({fontStack:d.typeTokens.dataDisplay.fontStack,fontSize:"42px",fontWeight:"700",lineHeight:d.typeTokens.dataDisplay.lineHeight,letterSpacing:d.typeTokens.dataDisplay.letterSpacing,fontWidth:d.typeTokens.dataDisplay.fontWidth})}
  `},C=n.styled.div.withConfig({componentId:"sc-47cc3720-4"})`
  overflow-y: clip;
  position: relative;
  white-space: nowrap;
  
  /* On narrow viewports, the default is 'small', but if the supplied size is 'x-small' use that. */
  ${e=>{let{size:t}=e;return"x-small"===t?b["x-small"]:b.small}}
  
  @media ${(0,a.mediaForBreakpoint)("sm")} {
    ${e=>{let{size:t}=e;return b[t]}} 
  }
`,w=n.styled.div.withConfig({componentId:"sc-47cc3720-5"})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: ${e=>{let{animateIn:t}=e;return t&&"translateY(-100%)"}};
`;function _(e,t,i){return e.animate?.([{transform:`translateY(${t})`},{transform:`translateY(${i})`}],{duration:500,easing:"ease-out",fill:"forwards"})}e.s(["Countdown",0,function(e){let{scheduledAt:o,size:n="default",isSeason:r=!1,hideSeconds:s=!1}=e,[a,l]=(0,c.useState)(new Date),d=new Date(a.getTime()-1e3),{i18n:u}=(0,i.useLingui)();(0,c.useEffect)(()=>(0,p.intervalOnWholeSecond)(()=>l(new Date)),[]);let g=(0,h.remainingTime)(d,o),v=(0,h.remainingTime)(a,o);return(0,t.jsxs)(f,{children:[r&&(0,t.jsx)(x,{size:n,children:(0,t.jsx)(i.Trans,{id:"f2q84s",message:"Next episode",context:"Label text for a countdown to the premiere of the next episode in a season"})}),(0,t.jsxs)(y,{size:n,isSeason:r,children:[(0,t.jsx)(m,{size:n,current:v.days,previous:g.days,label:u._({id:"Mfc2gu",message:"Days"})}),(0,t.jsx)(m,{size:n,current:v.hours,previous:g.hours,label:u._({id:"cegF84",message:"Hours"})}),(0,t.jsx)(m,{size:n,current:v.minutes,previous:g.minutes,label:u._({id:"8amDrg",message:"Mins"})}),!s&&(0,t.jsx)(m,{size:n,current:v.seconds,previous:g.seconds,label:u._({id:"7c7ewL",message:"Secs"})})]})]})}],6085143)},2983336,e=>{"use strict";var t=e.i(7680435);e.s(["usePostRatioLayout",0,e=>{let{isPostPage:i,enablePostRatioBasedLayout:o,isQuickPost:n}=e,r=(0,t.useCurrentUser)();return{shouldApplyPostRatioBasedLayout:i&&(o||!r?.id)&&n}}])},9682514,e=>{"use strict";e.s(["isDropNotPreLive",0,e=>"first_showing"===e||"dropped"===e||"decayed"===e])},5586941,4236341,3661730,2538774,9277289,45917,5252259,3255209,e=>{"use strict";var t=e.i(9391398),i=e.i(6191788),o=e.i(9760814),n=e.i(3641631),r=e.i(2358280),s=e.i(7710869),a=e.i(5042048),l=e.i(5265535),d=e.i(5020415),c=e.i(8690673);let u=(0,d.makeDialogAutoshowable)({id:"drops_member_introduction",expiresAt:"evergreen"},e=>{let{isOpen:i=!1,onCloseRequest:o}=e,{i18n:n}=(0,r.useLingui)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.ProductNotificationDialog,{id:"Drops_MemberIntroductionDialog",isOpen:i,onCloseRequest:o,banner:{src:"https://c5.patreon.com/external/drops/20240215-introduction-dialog/banner.jpg",alt:n._({id:"IwJSw4",message:"Some examples of the Drops experience, including live commenting during a drop and the pre-drop countdown."})},title:n._({id:"z8vIzX",message:"Check out your creator's Drops"}),description:n._({id:"bAGpJ0",message:"Stay up to date with your creator's latest work, and experience it live with other fans when it's released."}),primaryCTA:{text:n._({id:"vY7YpF",message:"OK"}),onClick:()=>o?.()},valueProps:[{id:"countdown",icon:s.IconBell,description:n._({id:"yw6pDc",message:'Upcoming drops have a release countdown and you can tap "I\'m interested" to show your interest and get notified right before it goes live.'})},{id:"viewing-experience",icon:a.IconDiscoball,description:n._({id:"b+yIYn",message:"You'll see when other members join the drop and they'll see you, so you can experience it together."})},{id:"creator-presence",icon:l.IconLivestream,description:n._({id:"SoGKNE",message:"The creator may also join to chat with you and others while it's live."})}]})})}),p=e=>{let{state:i}=e;return"first_showing"===i?(0,t.jsx)(n.LiveChipContainer,{children:(0,t.jsx)(n.LiveChip,{},"live-chip")}):(0,t.jsx)(t.Fragment,{})},h=o.styled.button.withConfig({componentId:"sc-816d8a78-0"})`
  display: unset;
  padding: unset;
  border: unset;
  margin: unset;
  background: unset;
  appearance: unset;
  text-transform: unset;
  overflow: unset;
  color: unset;
  font: unset;
`,m=(0,i.memo)(function(e){let{state:o,className:n,viewerIsCampaignOwner:r}=e,[s,a]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{className:n,onClick:()=>a(!0),children:(0,t.jsx)(p,{state:o})}),r?null:(0,t.jsx)(u,{isOpen:s,onCloseRequest:()=>a(!1)})]})});e.s(["StateChip",0,m],5586941);var g=e.i(4292062),f=e.i(2490126),x=e.i(8799586),v=e.i(8516319),y=e.i(4853452),b=e.i(1785954);let C=()=>{let{currentUserCanView:e}=(0,v.useContentCardViewerInfo)(),{displayType:t,video:i,audio:o,videoPreview:n,audioPreview:r}=(0,x.useContentCardData)();if(t===b.PostDisplayType.VIDEO_EXTERNAL_FILE||t===b.PostDisplayType.AUDIO||t===b.PostDisplayType.AUDIO_WITH_IMAGE)return e&&i?i.display?.progress:e&&o?o?.display?.progress:n?.progress||r?.display?.progress};e.s(["useContentCardMediaProgress",0,C],4236341);var w=e.i(7308002),_=e.i(9598373);let P=(0,e.i(708488).atomFamily)(e=>(0,w.atom)(e.initValue),function(e,t){return e.dataKey===t.dataKey}),I=(e,t)=>{let{currentUserCanView:i}=(0,v.useContentCardViewerInfo)(),o={dataKey:`media:${e}`,initValue:!!(t&&i&&t?.watchState==="is_watched")},[n,r]=(0,_.useAtom)(P(o));return{hasMediaBeenPlayed:n,onFinishedPlaying:()=>r(!0)}};e.s(["useMediaPlayState",0,I],3661730);var T=e.i(9435654);e.s(["AudioBanner",0,e=>{let{isFromCreatorWorldHome:i=!1}=e,o=(0,x.useContentCardData)(),{accessRules:n,audio:r,audioPreview:s,thumbnail:a,images:l,postType:d,patreonUrl:c,campaign:u,url:p,id:h,postMetadata:m,parentHighlightPost:b,primaryImage:w}=o,_=(0,v.useContentCardViewerInfo)(),{currentUserCanView:P,currentUserIsFreeMemberAndCanUpgrade:j,currentUserPledge:k,isFreeMember:E,isPatron:D,isPostOwner:A,feedName:S,isPreview:V,shouldScaleMediaAsPostPage:L}=_,$=(0,T.useDropFromContext)(),M=(0,y.getPostSource)({feedName:S}),{onFinishedPlaying:B}=I(h,C()),z=(0,g.getPostThumbnailUrl)({postType:d,thumbnail:a,images:l,primaryImage:w,size:"medium"})||u?.avatarPhotoImageUrls?.thumbnail;return(0,t.jsx)(f.AudioPlayerMediaCard,{accessRules:n,audio:r,audioPreview:s,thumbnail:z,patreonUrl:c,campaign:u,url:p,id:h,postMetadata:m,parentHighlightPost:b,currentUserCanView:P,currentUserIsFreeMemberAndCanUpgrade:j,currentUserPledge:k,isFreeMember:E,isPatron:D,isPostOwner:A,postSource:M,isPostPreview:V,isPostPage:L,drop:$,hasPostViewerData:!!o&&!!_,onFinishedPlaying:B,isCreatorWorldHome:i,hideSnipButton:i,title:o.title,overrideWhiteAudiogram:!0})}],2538774);var j=e.i(6058159),k=e.i(5642023),E=e.i(8683249);function D(e){E.patreonTrackerClient.logTypedEvent("Media : Toggled Playback",e)}e.s(["logMediaToggledPlaybackEvent",0,D],9277289);var A=e.i(47401),S=e.i(8675517),V=e.i(7701191),L=e.i(7561384),$=e.i(9067590);e.s(["EmbedBanner",0,i=>{let{mediaType:o}=i,{campaign:n,id:r,media:s,embed:a,thumbnail:l,postType:d,primaryImage:c,isPreviewBlurred:u}=(0,x.useContentCardData)(),{feedName:p,currentUserCanView:h}=(0,v.useContentCardViewerInfo)(),m=s?.src??s?.imageSrc,f=(0,g.getPostThumbnailUrl)({postType:d,thumbnail:l,primaryImage:c,size:"medium",hideFallbackThumbnail:!0})??m;return h||"video"!==o?h||"audio"!==o?(0,t.jsx)(V.LinkPreviewWrapper,{isPreviewIframe:!!s?.embedHtml,children:(0,t.jsx)(S.DynamicImport,{importer:()=>e.A(2946601),variant:o,iframe:s?.embedHtml,thumbnailUrl:f||s?.thumbnailUrl||l?.url,logTogglePlay:()=>{D({campaign_id:n?.id??"",is_locked_for_viewer:!h,is_preview:!1,media_type:o,post_source:(0,y.getPostSource)({feedName:p}),post_id:r,download_type:"manual"})},logMediaEnded:()=>{(0,j.logMediaEndedPlaybackEvent)({campaign_id:n?.id??"",media_type:o,is_preview:!1,post_id:r})},logStartedPlayback:e=>{let{duration:t}=e;(0,k.logMediaStartedPlaybackEvent)({campaign_id:n?.id??"",is_preview:!1,media_type:o,source:(0,y.getPostSource)({feedName:p}),post_id:r,media_source:"embed",media_source_domain:a?.provider,total_duration_in_seconds:t})},logUnplayableMedia:()=>{var e;e={campaign_id:n?.id??"",is_preview:!1,media_type:o,source:(0,y.getPostSource)({feedName:p}),post_id:r,media_source:"embed",media_source_domain:a?.provider},E.patreonTrackerClient.logTypedEvent("Media : Unplayable",e)},url:s?.url,subject:a?.subject,provider:a?.provider,shouldAutoLoad:p===A.SINGLE_POST})}):(0,t.jsx)($.LockedSkeleton,{imageSrc:f,isPreviewBlurred:u}):(0,t.jsx)(L.LockedVideoBanner,{thumbnailUrl:f})}],45917);var M=e.i(465375);e.s(["EmptyImageBanner",0,()=>(0,t.jsx)(M.UnavailableBanner,{children:(0,t.jsx)(r.Trans,{id:"jzPAUG",message:"This image is no longer available",context:"Text indicating a shared image is no longer available"})})],5252259),e.s(["logInteractionClickedImage",0,function(e){E.patreonTrackerClient.logTypedEvent("Interaction : Clicked Image",e)}],3255209)},2914192,e=>{"use strict";var t=e.i(3885723),i=e.i(1163396),o=e.i(7973243),n=e.i(8022561),r=e.i(1785954),s=e.i(4444797);e.s(["useGetPostImage",0,e=>{let{imageSize:a="default",postId:l,primaryImage:d,thumbnail:c,postType:u,images:p,hasCustomThumbnail:h}=e,m=(0,t.useFeatureFlag)("remove_primary_image_fallback"),g=(0,n.useCampaign)(),{primaryImageUrl:f,thumbnailUrl:x}=function(e){switch(e){case"small":return{primaryImageUrl:d?.imageSmall,thumbnailUrl:c?.defaultSmall};case"medium":case"default":default:return{primaryImageUrl:d?.imageMedium,thumbnailUrl:c?.default};case"large":return{primaryImageUrl:d?.imageLarge,thumbnailUrl:c?.defaultLarge}}}(a);return(u&&l||(0,o.logException)({exception:"useGetPostImage called without postType or postId",surface:"content",context:{postType:u,postId:l}}),!f&&m&&(0,i.datadogIncrement)("patreon.post.no_primary_image",{size:a,post_type:u??"",post_id:l??""}),f||m)?{imageUrl:f||"",isFallback:d?.isFallback??!1,preferAlternateDisplay:d?.preferAlternateDisplay??!1,shouldLogException:!1}:x?{imageUrl:x,isFallback:!1,preferAlternateDisplay:(u===r.ApiPostType.IMAGE_FILE||u===r.ApiPostType.IMAGE_EMBED)&&(p?.length??0)>1&&!h,shouldLogException:!1}:g?.avatarPhotoImageUrls?.default?{imageUrl:g?.avatarPhotoImageUrls?.default,isFallback:!0,preferAlternateDisplay:!0,shouldLogException:!1}:{imageUrl:(0,s.buildStaticUrl)("internal/posts/image/default.png"),isFallback:!0,preferAlternateDisplay:!0,shouldLogException:!0}}])},830557,e=>{e.v({bannerContainer:"NativeLivestreamBanner-module__FhsbtG__bannerContainer",countdownContainer:"NativeLivestreamBanner-module__FhsbtG__countdownContainer"})},2603366,8914707,5274854,8475200,6105945,4504392,1509387,6382929,6103592,e=>{"use strict";var t=e.i(9391398),i=e.i(9467836),o=e.i(8799586),n=e.i(8516319),r=e.i(5252259),s=e.i(226931),a=e.i(6191788),l=e.i(9760814),d=e.i(4152146),c=e.i(5028501),u=e.i(3255209),p=e.i(4199263),h=e.i(2983336),m=e.i(5069969),g=e.i(3885723),f=e.i(7251356),x=e.i(2914192),v=e.i(4656010),y=e.i(9991677),b=e.i(8490838),C=e.i(4023959),w=e.i(4853452),_=e.i(9652978),P=e.i(712139),I=e.i(2129357),T=e.i(5345957),j=e.i(8981215),k=e.i(8475434);let E=l.styled.div.withConfig({componentId:"sc-f5296b1d-0"})`
  position: absolute;
  bottom: ${s.tokens.space.x16};
  left: ${s.tokens.space.x16};

  @media ${(0,j.mediaForBreakpoint)("sm")} {
    bottom: ${s.tokens.space.x24};
    left: ${s.tokens.space.x24};
  }
`,D=e=>{let{chipVariant:i}=e,{currentUserCanView:r}=(0,n.useContentCardViewerInfo)(),{images:s}=(0,o.useContentCardData)(),a=s?s.length:0,l=a>1;return(0,t.jsxs)(t.Fragment,{children:[r&&l?(0,t.jsx)(E,{children:(0,t.jsx)(P.Chip,{icon:T.IconPhoto,variant:i,children:a})}):null,r?null:(0,t.jsx)(E,{children:(0,t.jsx)(P.Chip,{icon:I.IconLock,variant:i,children:(0,t.jsx)(k.LockedText,{})})})]})},A=l.styled.img.withConfig({componentId:"sc-1a803cb2-0"})`
  display: 'initial';
  position: absolute;
  top: 0;
  object-fit: ${e=>{let{objectFit:t}=e;return t??"contain"}};
  width: 100%;
  height: 100%;
  ${e=>{let{applyClientSideBlur:t}=e;return t&&l.css`
    filter: blur(5px) brightness(0.8);
  `}}
`,S=l.styled.div.withConfig({componentId:"sc-1a803cb2-1"})`
  position: relative;
  overflow: hidden;
  
  // Use aspect-ratio instead of dynamic height calculation to prevent CLS
  aspect-ratio: 16 / 9;
  width: 100%;
  
  // Fallback for browsers that don't support aspect-ratio
  @supports not (aspect-ratio: 16 / 9) {
    height: ${e=>{let{containerWidth:t}=e;return`${9*t/16}px`}};
  }
`,V=l.styled.div.withConfig({componentId:"sc-1a803cb2-2"})`
  position: relative;
`,L=l.styled.div.withConfig({componentId:"sc-1a803cb2-3"})`
  transition: opacity 0.2s ease-in-out;
  opacity: ${e=>{let{isHidden:t}=e;return+!t}};
  
  // Prevent layout shifts by using transform instead of opacity for visibility
  // and ensuring the element maintains its space in the layout
  pointer-events: ${e=>{let{isHidden:t}=e;return t?"none":"auto"}};
  
  // Use will-change to optimize transitions and prevent reflows
  will-change: opacity;
`,$=e=>{let{currentUserCanView:i,isPreview:r,images:l,isPublicContent:P,maxHeight:I}=e,{campaign:T,id:j,thumbnail:k,customThumbnailMedia:E,image:$,paywallDisplay:F,isPreviewBlurred:U}=(0,o.useContentCardData)(),N=(0,g.useFeatureFlag)("default_banner"),{feedName:H,shouldScaleMediaAsPostPage:W,enablePostRatioBasedLayout:G,isQuickPost:Y}=(0,n.useContentCardViewerInfo)(),q=(0,d.useIsAuthenticated)(),{containerRef:K,dimensions:X}=(0,f.useDimensions)(),{enableSingleColumnLayout:J}=(0,m.useSingleColumnLayout)({isPostPage:W,isPreview:r,paywallDisplay:F,currentUserCanView:i}),{shouldApplyPostRatioBasedLayout:Q}=(0,h.usePostRatioLayout)({isPostPage:W,enablePostRatioBasedLayout:G,isQuickPost:Y}),Z=function(e){let{currentUserCanView:t,isPreview:i,defaultBannerEnabled:o,isPreviewBlurred:n}=e;return!!i&&!t&&(!o||(n??!0))}({currentUserCanView:i,isPreview:!!r,defaultBannerEnabled:N,isPreviewBlurred:U}),{shouldConstrainHeight:ee,showLockedCustomThumbnail:et,galleryImages:ei,isGallery:eo,primaryImageUrl:en,logExposureOnView:er}=(e=>{let{currentUserCanView:t,isPostPage:i,isPreview:n,paywallDisplay:r,images:s,shouldApplyPostRatioBasedLayout:l,isQuickPost:d}=e,{enableSingleColumnLayout:c}=(0,m.useSingleColumnLayout)({isPostPage:i,isPreview:n,paywallDisplay:r,currentUserCanView:t}),{thumbnail:u,image:h,customThumbnailMedia:g,hasCustomThumbnail:f,id:b,primaryImage:C,postType:w,images:_}=(0,o.useContentCardData)(),P=g?.imageUrls.default??u?.large??h?.url,{imageUrl:I}=(0,x.useGetPostImage)({postId:b,primaryImage:C,thumbnail:u,postType:w,images:_,hasCustomThumbnail:f}),{showLockedCustomThumbnail:T,logExposureOnView:j}=(e=>{let{currentUserCanView:t,preferAlternateDisplay:i,imagesCount:o,isPreview:n,isQuickPost:r}=e,s=(0,y.useExperiment)(v.USE_CUSTOM_THUMBNAIL_FOR_LOCKED_GALLERY),l=s.getVariantNameOrNull({disableAutoLogExposure:!0}),d=!t&&!i&&o>0&&!n&&!r;return{logExposureOnView:(0,a.useCallback)(()=>{d&&s.manuallyLogExposure()},[s,d]),showLockedCustomThumbnail:d&&l===v.VARIANT}})({currentUserCanView:t,preferAlternateDisplay:C?.preferAlternateDisplay,imagesCount:s.length,isPreview:n,isQuickPost:d}),k=(0,a.useMemo)(()=>!t&&!s.length&&(g||f&&P)&&!i,[t,s.length,g,f,P,i]),E=1===s.length,D=(0,a.useCallback)(e=>{let t=window.innerHeight*p.POST_VIEWPORT_PERCENTAGE;return(e.display?.height||0)>t},[]),A=(0,a.useMemo)(()=>l?E&&D(s[0]):c&&E&&(s[0].display?.height||0)>p.MAX_HEIGHT_FOR_SINGLE_IMAGE_POST,[c,l,E,s,D]);return{showLockedCustomThumbnail:k||T,primaryImageUrl:T?I:void 0,logExposureOnView:j,galleryImages:s.slice(0,p.DEFAULT_IMAGES_IN_GRID),isGallery:s.length>1,shouldConstrainHeight:A}})({currentUserCanView:i,isPostPage:W,isPreview:r,paywallDisplay:F,images:l,shouldApplyPostRatioBasedLayout:Q,isQuickPost:Y}),es=(0,w.getPostSource)({feedName:H}),[ea,el]=(0,a.useState)(null),[ed,ec]=(0,a.useState)(!1),eu=i&&l?.length>1,ep=(0,a.useCallback)(()=>{el(null)},[el]),eh=(0,a.useCallback)(e=>{el(e)},[el]),em=(0,a.useCallback)(e=>null===e||e+1===l.length?0:e+1,[l.length]),eg=(0,a.useCallback)(e=>null===e?0:e-1==-1?l.length-1:e-1,[l.length]),ef=l.slice(1),ex=()=>{ec(!0)},ev=()=>{ec(!1)},ey=e=>{eh(e),(0,u.logInteractionClickedImage)({campaign_id:T?.id??"",post_id:j,media_id:l[e].id,is_locked_for_viewer:!i,is_gallery:eo,post_source:es,is_nsfw:!!T?.isNsfw,is_public:!q})},eb=E?.imageUrls.default??k?.large??$?.url;if(et)return(0,t.jsx)(c.ImpressionsLogger,{log:er,children:(0,t.jsxs)(V,{ref:K,children:[(0,t.jsx)(S,{containerWidth:X.width,children:(0,t.jsx)(A,{"data-tag":"locked-image-thumbnail",src:en??eb,objectFit:en?"cover":"contain",applyClientSideBlur:Z})}),(0,t.jsx)(D,{chipVariant:"insetBlack"})]})});let eC=null!==ea;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(M,{ref:K,shouldRoundCorners:Y,maxHeight:I,children:[l.length>p.DEFAULT_IMAGES_IN_GRID?(0,t.jsxs)(B,{shouldApplyPostRatioBasedLayout:Q,maxHeight:I,children:[(0,t.jsx)(z,{children:(0,t.jsx)(_.Image,{className:"image-grid",currentUserCanView:i,image:l[0],isGallery:!0,applyClientSideBlur:Z,onClick:()=>ey(0),shouldShowGradient:eu,onMouseEnter:ex,onMouseLeave:ev,showCaptionOnHover:!0,canOpenLightbox:!eC,isNsfw:!!T?.isNsfw},l[0].id)}),(0,t.jsx)(O,{children:ef.map((e,o)=>(0,t.jsx)(_.Image,{className:"image-carousel",currentUserCanView:i,image:e,isGallery:!0,applyClientSideBlur:Z,onClick:()=>ey(o+1),shouldShowGradient:eu,showCaptionOnHover:!0,onMouseEnter:ex,onMouseLeave:ev,canOpenLightbox:!eC,isNsfw:!!T?.isNsfw,isCarousel:!0},e.id))})]}):(0,t.jsx)(R,{gallerySize:ei.length,containerWidth:X.width,enableSingleColumnLayout:J,constrainAspectRatio:ee||!i&&!r,currentUserCanView:i,shouldApplyPostRatioBasedLayout:Q,children:ei.map((e,o)=>(0,t.jsxs)("div",{className:"gallery-grid-item",children:[(0,t.jsx)(_.Image,{className:"image-grid",currentUserCanView:i,image:e,isGallery:Q||!!ee||eo,applyClientSideBlur:Z,onClick:()=>ey(o),shouldShowGradient:eu,constrainAspectRatio:ee||!i&&!r,shouldApplyPostRatioBasedLayout:Q,onMouseEnter:ex,onMouseLeave:ev,showCaptionOnHover:l.length>1,canOpenLightbox:!eC,isNsfw:!!T?.isNsfw}),0===o&&1===l.length&&(0,t.jsx)(b.HeroImageCaption,{caption:e.metadata?.caption})]},e.id))}),(0,t.jsx)(L,{isHidden:ed,children:(0,t.jsx)(D,{chipVariant:"insetBlack"})})]}),i&&eC?(0,t.jsx)(C.Lightbox,{imageAlt:l[ea].metadata?.altText,imageCaption:l[ea].metadata?.caption,imagePosition:eo?`${ea+1} / ${l.length}`:null,isOpen:eC,isPublicContent:P,onClose:ep,onNextImage:eo?()=>el(em):null,onPrevImage:eo?()=>el(eg):null,originalImageSrc:l[ea].imageUrls?.original,overlayBackgroundColor:s.tokens.constant.black.default}):null]})},M=l.styled.div.withConfig({componentId:"sc-1a803cb2-4"})`
  position: relative;
  overflow: hidden;
  width: 100%;

  // Use contain layout to prevent reflows from affecting other elements
  contain: layout style;

  ${e=>{let{maxHeight:t}=e;return t&&l.css`
      max-height: ${t}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}}

  ${e=>{let{shouldRoundCorners:t}=e;return t&&l.css`
      border: 1px solid ${s.tokens.border.muted.default};
      border-radius: ${s.tokens.radius.lg};
      box-sizing: border-box;
    `}}
`,B=l.styled.div.withConfig({componentId:"sc-1a803cb2-5"})`
  display: flex;
  flex-direction: column;
  height: ${e=>{let{maxHeight:t}=e;return t?`min(500px, ${t}px)`:"500px"}};

  ${e=>{let{shouldApplyPostRatioBasedLayout:t}=e;return t&&l.css`
      max-height: 60vh;
    `}}
`,z=l.styled.div.withConfig({componentId:"sc-1a803cb2-6"})`
  height: 75%;
  margin-bottom: ${s.tokens.borderWidth.thick};
`,O=l.styled.div.withConfig({componentId:"sc-1a803cb2-7"})`
  height: 25%;
  overflow: auto;
  display: flex;
  gap: ${s.tokens.borderWidth.thick};

  .image-carousel {
    flex-shrink: 0;
    width: 135px;
  }
`,R=l.styled.div.withConfig({componentId:"sc-1a803cb2-8"})`
  ${e=>{let{gallerySize:t,constrainAspectRatio:i,shouldApplyPostRatioBasedLayout:o,currentUserCanView:n}=e;return i&&l.css`
      ${1===t&&o&&n?"max-height: 60vh;":"aspect-ratio: 16 / 9;"}
    `}}

    ${e=>{let{gallerySize:t,enableSingleColumnLayout:i,containerWidth:o}=e;return 1===t&&!0===i&&l.css`
      width: ${o}px;
    `}}

  ${e=>{let{gallerySize:t,constrainAspectRatio:i,shouldApplyPostRatioBasedLayout:o}=e;return t>1&&l.css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${s.tokens.borderWidth.thick};
      height: ${i?"auto":"500px"};
      ${o&&"max-height: 60vh;"} // 
    `}}

  ${e=>{let{gallerySize:t}=e;return 2===t&&l.css`
      grid-template-areas: 'a b';
    `}}

  ${e=>{let{gallerySize:t}=e;return 3===t&&l.css`
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'a b' 'a c';
    `}}

    ${e=>{let{gallerySize:t}=e;return 4===t&&l.css`
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'a b' 'c d';
    `}}

    ${e=>{let{gallerySize:t}=e;return 5===t&&l.css`
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas: 'a a a b b b' 'c c d d e e';
    `}}

    > .gallery-grid-item {
      display: contents;
      
      // Ensure consistent sizing to prevent layout shifts
      min-height: 0;
      min-width: 0;
    }
    > .gallery-grid-item:nth-child(1) > * { grid-area: a; }
    > .gallery-grid-item:nth-child(2) > * { grid-area: b; }
    > .gallery-grid-item:nth-child(3) > * { grid-area: c; }
    > .gallery-grid-item:nth-child(4) > * { grid-area: d; }
    > .gallery-grid-item:nth-child(5) > * { grid-area: e; }
`;e.s(["ImageBannerWithGradient",0,e=>{let{maxHeight:s}=e,{currentUserCanView:a,isPreview:l}=(0,n.useContentCardViewerInfo)(),{accessRules:d,images:c,postMetadata:u,customThumbnailMedia:p,thumbnail:h}=(0,o.useContentCardData)();if(!a&&(p||h)){let e=c&&c.length>0?c:[];return(0,t.jsx)($,{isPublicContent:!1,currentUserCanView:a,isPreview:!!l,images:e,maxHeight:s})}if(!c||0===c.length)return(0,t.jsx)(r.EmptyImageBanner,{});let m=(0,i.isPublicPost)(d),g=[];return u?.imageOrder?u?.imageOrder.forEach(e=>{let t=c.find(t=>t.id===e);t&&g.push(t)}):g=c,(0,t.jsx)($,{isPublicContent:m,currentUserCanView:a,isPreview:!!l,images:g,maxHeight:s})}],2603366);var F=e.i(2358280),U=e.i(6112151),N=e.i(5265535),H=e.i(5733273),W=e.i(6558821),G=e.i(2550472);let Y=l.styled.div.withConfig({componentId:"sc-a6a9d4db-0"})`
  display: grid;
  grid-gap: ${s.tokens.space.x16};
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: ${s.tokens.space.x16};
  border: ${s.tokens.borderWidth.thin} solid ${s.tokens.border.muted.default};
  border-radius: ${s.tokens.radius.md};
  box-sizing: border-box;
`;e.s(["LivestreamBanner",0,e=>{let{provider:i}=e,{i18n:r}=(0,F.useLingui)(),{media:a}=(0,o.useContentCardData)(),{currentUserCanView:l}=(0,n.useContentCardViewerInfo)(),d=r._({id:"sOUxa4",message:"Powered by Crowdcast"}),c=r._({id:"eQCwXH",message:"Powered by Vimeo"});return(0,t.jsxs)(Y,{children:[(0,t.jsx)(N.IconLivestream,{size:"32px"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(U.BodyText,{size:"lg",children:(0,t.jsx)(F.Trans,{id:"VFPgRY",components:{0:(0,t.jsx)("strong",{})},message:"<0>Livestream</0>",context:"Denotes a Crowdcast livestream"})}),(0,t.jsx)(U.BodyText,{size:"sm",color:s.tokens.content.muted.default,children:"vimeo"===i?c:d})]}),l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.ResponsiveCssVisibility,{matchOnly:"xs","data-tag":"livestream-banner-mobile",children:(0,t.jsx)(G.ButtonShim,{"aria-label":(0,k.playString)(r),size:"sm",corners:"pill",icon:H.IconPlaybackPlay,loggerId:"media-banner-crowdcast-watch-livestream",href:a?.url})}),(0,t.jsx)(W.ResponsiveCssVisibility,{matchMin:"sm","data-tag":"livestream-banner-desktop",children:(0,t.jsx)(G.ButtonShim,{size:"sm",corners:"pill",icon:H.IconPlaybackPlay,loggerId:"media-banner-crowdcast-watch-livestream",href:a?.url,children:(0,t.jsx)(F.Trans,{id:"PYcKoW",message:"Watch livestream",context:"Button that redirects user to a Crowdcast livestream"})})})]}):null]})}],8914707);var q=e.i(2859206),K=e.i(1108816),X=e.i(623886),J=e.i(699213),Q=e.i(4369912),Z=e.i(4412387),ee=e.i(921426),et=e.i(9435654),ei=e.i(830557);let eo=(0,a.lazy)(()=>e.A(3085140).then(e=>({default:e.Countdown})));e.s(["NativeLivestreamBanner",0,()=>{let e=(0,g.useFeatureFlag)("enable_livestream_post_thumbnails"),{campaign:i,media:n,id:r,customThumbnailMedia:l}=(0,o.useContentCardData)(),d=(0,et.useDropFromContext)(),c=i?.primaryThemeColor??void 0;return i?(0,t.jsxs)("div",{className:ei.default.bannerContainer,children:[n?.state===ee.LivestreamState.Live||!d||function(e){return(0,J.default)(1,arguments),(0,X.default)(e).getTime()<Date.now()}(d.scheduledFor)?null:(0,t.jsx)(K.Stack,{className:ei.default.countdownContainer,children:(0,t.jsx)(q.Spacer,{m:s.tokens.space.x16,children:(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:(0,t.jsx)(eo,{scheduledAt:d.scheduledFor,size:"small"})})})}),(0,t.jsx)(Q.NativeLiveThumbnail,{imageUrl:e?l?.imageUrls.default:void 0,primaryThemeColor:c,campaign:i,state:n?.state,imageSize:"default",href:(0,Z.getLivestreamUrl)(i,r)})]}):null}],5274854);var en=e.i(9799523),er=e.i(8683249),es=e.i(4441225),ea=e.i(2880842),el=e.i(4527703),ed=e.i(2170773);let ec=()=>{let{i18n:e}=(0,F.useLingui)();return(0,t.jsx)(eu,{"data-tag":"locked-poll",children:(0,t.jsxs)(eh,{children:[(0,t.jsx)(ep,{children:(0,t.jsx)(ed.RadioButton,{value:void 0,checked:!1,disabled:!0,"aria-label":e._({id:"5wlMWD",message:"Button for a poll option for a locked post"})})}),(0,t.jsx)(em,{})]})})},eu=l.styled.div.withConfig({componentId:"sc-8cbcd58b-0"})`
  display: flex;
  flex-direction: row;
  gap: ${s.tokens.space.x8};
  align-items: center;
  justify-content: space-between;

  background-color: ${s.tokens.primary.surfaceSubtle.default};
  border-radius: ${s.tokens.radius.lg};

  padding: ${s.tokens.space.x12} ${s.tokens.space.x16};
`,ep=l.styled.div.withConfig({componentId:"sc-8cbcd58b-1"})`
  position: relative;
`,eh=l.styled.div.withConfig({componentId:"sc-8cbcd58b-2"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${s.tokens.space.x8};
  width: 100%;
`,em=l.styled.div.withConfig({componentId:"sc-8cbcd58b-3"})`
  background-color: ${s.tokens.primary.surfaceMuted.default};
  width: min(210px, 100%);
  height: 8px;
  border-radius: ${s.tokens.radius.sm};
`;var eg=e.i(7137616),ef=e.i(2154176),ex=e.i(9916330);let ev=(e,t)=>"6030293"===e&&"7781425"!==t,ey=e=>{let i,{multipleChoice:r,choice:s,pollHasClosed:a,showResults:l,totalVotes:c}=e,{i18n:u}=(0,F.useLingui)(),{isPreview:p}=(0,n.useContentCardViewerInfo)(),{campaign:h}=(0,o.useContentCardData)(),m=(0,d.useSessionValue)("user_id"),g=s?.votes&&s.votes/c||0,f="",x=(0,ef.formatPercentRound)(g,u.locale);l&&(f=r?(0,t.jsx)(ex.Decimal,{value:s.votes??0}):(0,t.jsx)("span",{children:(0,t.jsx)(ex.Percent,{value:g})}));let v=s.text??u._({id:"3GlSTS",message:"Select poll choice"});return i=r?(0,t.jsx)(eg.Checkbox,{checked:s.selected,onChange:()=>s.onChange(!s.selected),disabled:a||p,hideLabel:!0,label:v}):(0,t.jsx)(eP,{"aria-checked":s.selected,"aria-label":v,onClick:e=>{e.stopPropagation(),s.onChange(!!s?.selected)},role:"radio",tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&s.onChange(!!s?.selected)},children:(0,t.jsx)(ed.RadioButton,{value:void 0,checked:s.selected,disabled:a||p,onChange:()=>{}})}),(0,t.jsxs)(eb,{disabled:a||p,onClick:()=>s.onChange(!s.selected),children:[(0,t.jsx)(eC,{showResults:l,percentageVotes:x}),(0,t.jsxs)(ew,{children:[i,(0,t.jsx)(U.BodyText,{size:"md",children:s.text})]}),!ev(h?.id,m)&&(0,t.jsx)(e_,{children:(0,t.jsx)(U.BodyText,{size:"md",children:f})})]})},eb=l.styled.div.withConfig({componentId:"sc-b26d4872-0"})`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  outline: ${s.tokens.borderWidth.thin} solid transparent;
  transition: outline 200ms ease-in-out;

  display: flex;
  flex-direction: row;
  gap: ${s.tokens.space.x8};
  align-items: center;
  justify-content: space-between;

  background-color: ${s.tokens.primary.surfaceSubtle.default};
  border-radius: ${s.tokens.radius.lg};

  padding: ${s.tokens.space.x12} ${s.tokens.space.x16};
  pointer-events: ${e=>e.disabled?"none":"auto"};

  &:hover {
    outline-color: ${s.tokens.rich.surfaceAlt.default};
  }
`,eC=l.styled.div.withConfig({componentId:"sc-b26d4872-1"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.showResults?e.percentageVotes:"0%"};
  background-color: ${s.tokens.primary.surfaceSubtle.default};
  transition: width 0.2s ease-in-out;
`,ew=l.styled.div.withConfig({componentId:"sc-b26d4872-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${s.tokens.space.x8};
`,e_=l.styled.div.withConfig({componentId:"sc-b26d4872-3"})`
  justify-self: flex-end;
  min-width: 42px;
  display: flex;
  justify-content: flex-end;
`,eP=l.styled.div.withConfig({componentId:"sc-b26d4872-4"})`
  input[type='radio'] {
    cursor: pointer;
  }
`;var eI=e.i(9086540);let eT=e=>{let{pollId:i}=e,{isPreview:r,isPostOwner:s,currentUserIsCampaignOwner:a}=(0,n.useContentCardViewerInfo)(),{campaign:l}=(0,o.useContentCardData)(),c=(0,d.useSessionValue)("user_id");return!s&&!a||ev(l?.id,c)?null:(0,t.jsx)(eI.TextLinkShim,{routeType:"external",loggerId:"features-posts-Post-PostPollInfo-download-results",disabled:r,size:"md",href:`/polls/${i}/responses.csv`,children:(0,t.jsx)(F.Trans,{id:"CppBHw",message:"Download results",context:"CTA to download poll results"})})};var ej=e.i(8486509),ek=e.i(2162406);let eE=e=>{let{pollHasClosed:i,pollEndDateString:n,totalVotes:r}=e,{campaign:a}=(0,o.useContentCardData)(),l=(0,d.useSessionValue)("user_id"),c=ev(a?.id,l)?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(F.Trans,{id:"I+Ee66",values:{totalVotes:r},message:"{totalVotes, plural, one {# vote} other {# votes}} total",context:"Total count of poll votes"});if(i){let e=(0,en.default)(n);return(0,t.jsx)(eD,{children:(0,t.jsxs)(U.BodyText,{size:"md",color:s.tokens.content.muted.default,children:[(0,t.jsx)(F.Trans,{id:"9PtFAD",components:{0:(0,t.jsx)(ek.DateTime,{format:"dateMedium",value:e})},message:"Poll ended <0/>",context:"Poll end date"})," · ",c]})})}return n?(0,t.jsx)(eD,{children:(0,t.jsxs)(U.BodyText,{size:"md",color:s.tokens.content.muted.default,children:[c," · ",(0,ej.timeLeft)(n)]})}):(0,t.jsx)(U.BodyText,{size:"md",color:s.tokens.content.muted.default,children:c})},eD=l.styled.div.withConfig({componentId:"sc-1e36061d-0"})`
  display: flex;
  flex-direction: row;
`;function eA(){return(0,t.jsx)(eV,{children:(0,t.jsxs)(e$,{children:[(0,t.jsx)(ec,{}),(0,t.jsx)(ec,{}),(0,t.jsx)(ec,{})]})})}function eS(e){let{pollResponsesLoading:i,postPollResponse:r}=e,{currentUserCanView:s,currentUserIsCampaignOwner:l,feedName:c,isPostPage:u,isPostOwner:p,isPreview:h}=(0,n.useContentCardViewerInfo)(),m=(0,d.useIsAuthenticated)(),{campaign:g,poll:f,id:x,postType:v}=(0,o.useContentCardData)(),y=f?.questionType!=="single_choice",b=f?.closesAt&&(0,en.default)(f?.closesAt).isBefore((0,en.default)()),[C,_]=(0,a.useState)(void 0),[P,I]=(0,a.useState)(void 0);if((0,el.useRunOnce)(()=>{u&&(0,es.logPollLandedEvent)({post_id:x,poll_id:f?.id,source:c})}),(0,a.useEffect)(()=>{_(f?.choices)},[f?.choices]),(0,a.useEffect)(()=>{f?.currentUserResponses&&I(f?.currentUserResponses.map(e=>e.choice?.id))},[f?.currentUserResponses]),!f||!r)return null;let T=function(e,t){var o;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3?arguments[3]:void 0;if(i)return;let l=!1;if(y){let i,o;a?(l=!0,i=[...n,e],o=C?.map(t=>t.id===e?{...t,numResponses:t.numResponses?t.numResponses+1:1}:{...t})):(i=n.filter(t=>t!==e),o=C?.map(t=>t.id===e?{...t,numResponses:t.numResponses?t.numResponses-1:0}:{...t})),_(o),I(i),r(t,i=[...new Set(i)])}else if(P&&P.length>0&&e===P[0])_(C?.map(t=>t.id===e?{...t,numResponses:t.numResponses?t.numResponses-1:0}:{...t})),I([]),r(t,[]);else{let i;l=!0,P&&P.length>0&&(i=P[0]),_(C?.map(t=>t.id===e?{...t,numResponses:t.numResponses?t.numResponses+1:1}:t.id===i?{...t,numResponses:t.numResponses?t.numResponses-1:0}:{...t})),I([e]),r(t,[e])}let d=(0,ea.getCollectionIdFromLocation)();o={campaign_id:g?.id??"",poll_id:f.id?String(f.id):"",content_type:"post",is_owner:p,post_source:(0,w.getPostSource)({feedName:c,collectionId:d}),post_id:x,post_type:v,is_locked_for_viewer:!s,is_preview:h,collection_id:d,voted:l},er.patreonTrackerClient.logTypedEvent("Interaction : Voted in Poll",o)},j=(C||[]).map(e=>{var t;return{choiceId:e.id,text:e.textContent,selected:P&&(t=e.id,!!m&&P&&P.indexOf(t)>-1),votes:e.numResponses,onChange:t=>T(e.id,f.id,P,t),position:e.position}}),k=!!(j?.some(e=>e.selected)||p||l||b),E=j?.reduce((e,t)=>e+(t?.votes?t?.votes:0),0)??0;return(0,t.jsxs)(eV,{children:[(0,t.jsx)(e$,{children:j?.map(e=>(0,t.jsx)(ey,{multipleChoice:y,choice:e,pollHasClosed:b,showResults:k,totalVotes:E},e.choiceId))}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eE,{pollEndDateString:f?.closesAt,pollHasClosed:b,totalVotes:E}),(0,t.jsx)(eT,{pollId:f?.id})]})]})}let eV=l.styled.div.withConfig({componentId:"sc-cbc46593-0"})`
  display: flex;
  flex-direction: column;
  gap: ${s.tokens.space.x8};
  width: 100%;
`,eL=l.styled.div.withConfig({componentId:"sc-cbc46593-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${s.tokens.space.x12};
  height: ${s.tokens.space.x40};

  @media ${(0,j.mediaForBreakpoint)("sm")} {
    height: ${s.tokens.space.x32};
  }
`,e$=l.styled.div.withConfig({componentId:"sc-cbc46593-2"})`
  display: flex;
  flex-direction: column;
  gap: ${s.tokens.space.x8};
`;e.s(["Poll",0,function(e){let{currentUserCanView:i}=(0,n.useContentCardViewerInfo)();return i?(0,t.jsx)(eS,{...e}):(0,t.jsx)(eA,{})}],8475200);var eM=e.i(1789610),eB=e.i(4838334),ez=e.i(6058159),eO=e.i(883333),eR=e.i(9277289);function eF(e){er.patreonTrackerClient.logTypedEvent("Media : Video Entered Picture-in-picture",e)}function eU(e){er.patreonTrackerClient.logTypedEvent("Media : Video Exited Picture-in-picture",e)}e.s(["logMediaVideoEnteredPip",0,eF],6105945),e.s(["logMediaVideoExitedPip",0,eU],4504392);var eN=e.i(7342776),eH=e.i(3988175),eW=e.i(8017306),eG=e.i(8675517),eY=e.i(391216),eq=e.i(236842),eK=e.i(3416127);let eX=i=>(0,t.jsx)(eG.DynamicImport,{importer:()=>e.A(3834509),...i});e.s(["LazyVideoPlayer",0,eX],1509387);var eJ=e.i(9137169),eQ=e.i(625078),eZ=e.i(9521876),e0=e.i(1785954),e1=e.i(8745369),e2=e.i(8707142);let e3=l.styled.div.withConfig({componentId:"sc-68f3e227-0"})`
    background-color: ${s.tokens.constant.black.default};

    
    /* For most common screen sizes, ensure the video fits in the screen */
    padding-top: min(${e=>{let{aspectRatioPadding:t,containerMaxHeight:i}=e;return`${t}%, min(calc(100vh - 80px), ${i}px))`}};
    position: relative;
    overflow: hidden;

    /* For smaller screen sizes, ensure the video doesn't continue to shrink */
    @media (max-height: 600px) {
        padding-top: 520px;
    }
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`,e5=l.styled.div.withConfig({componentId:"sc-68f3e227-1"})`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var e6=e.i(7190670),e4=e.i(1280554),e8=e.i(6421754);let e9=(e,t)=>{(0,eJ.isVideoPlaying)(e)&&e.pause(),(0,e4.isInPIP)(e)&&(0,e4.requestExitPIP)(e),t&&((0,e4.isVideoInWebkitFullscreen)(e)?(0,e4.exitFullscreenVideo)(e):(0,e4.hasFullscreenElement)()&&(0,e6.exitFullscreen)(document))},e7=()=>{let e=(0,a.useContext)(e8.VideoContext);return[t=>{let i=e.current;(0,e8.isActive)(i)&&i.videoId!==t&&(0,eJ.isVideoPlaying)(i.videoPlayer)&&i.videoPlayer.pause()},(t,i)=>{let o=e.current;(0,e8.isIdle)(o)?e.current={tag:"Active",videoPlayer:t,videoId:i}:(0,e8.isActive)(o)&&o.videoId!==i&&(e9(o.videoPlayer,(0,e4.isVideoInAirPlay)(t)),e.current={tag:"Active",videoPlayer:t,videoId:i})},(t,i)=>{let o=e.current;(0,e8.isIdle)(o)?e.current={tag:"Active",videoPlayer:t,videoId:i}:(0,e8.isActive)(o)&&o.videoId!==i&&(e9(o.videoPlayer,!0),e.current={tag:"Active",videoPlayer:t,videoId:i})},t=>{let i=e.current;!(0,e8.isActive)(i)||i.videoId!==t||(0,e4.isInPIP)(i.videoPlayer)||(0,e4.isVideoInAirPlay)(i.videoPlayer)||(0,e4.isVideoInWebkitFullscreen)(i.videoPlayer)||(0,e4.hasFullscreenElement)()||(e.current=e8.idle)},(t,i)=>{let o=e.current;(0,e8.isActive)(o)&&((0,e4.isInPIP)(o.videoPlayer)&&(0,e4.requestExitPIP)(o.videoPlayer),o.videoId!==i&&(e9(o.videoPlayer,!1),e.current={tag:"Active",videoPlayer:t,videoId:i}))}]};e.s(["useActiveVideo",0,e7],6382929);let te=l.styled.div.withConfig({componentId:"sc-735b4500-0"})`
  padding: 0px;
  padding-left: 16px;
  padding-right: 16px;

  @media ${(0,j.mediaForBreakpoint)("sm")} {
    padding: 16px;
  }
`,tt=i=>{let{authorImagerUrl:o,handleClick:n,images:r,imageOrder:l,isPublicContent:c=!1,media:u,postDisplayType:h,logTogglePlay:m,logMediaEnded:g,logMediaPaused:f,logEnterVideoPip:x,logExitVideoPip:v,postId:y,postTitle:b,creatorVanity:C,video:w,thumbnail:_,isPostPage:P,overflow:I,campaignId:T,isPreview:j,videoPreview:k,postSource:E,pledgeUrl:D,isOwner:A,currentUserPledgeCents:S,creatorName:V,isFromPostCreation:L,isPostPreview:$}=i,M=(0,eZ.useIsClient)(),B=(0,d.useSessionValue)("user_id"),z=w?w.display:k,[O,R]=(0,a.useState)(!1),F=(0,a.useRef)(null),U=(0,eQ.useAspectRatio)({maxHeight:p.NATIVE_VIDEO_PLAYER_MAX_HEIGHT,videoHeight:z?.height,videoWidth:z?.width}),N=(0,a.useRef)(null),[H,W,G,Y,K]=e7();if(h===e0.PostDisplayType.IMAGE){let e=[];return l?l.forEach(t=>e.push(r.find(e=>e.id===t))):e=r,!k&&r&&r.length>0?(0,t.jsx)("div",{style:{textAlign:"center",overflow:"hidden",position:"relative"},children:(0,t.jsx)(eq.LightboxImageWrapper,{currentUserCanView:!0,handleClick:n,images:e,isPublicContent:c,overflow:I,postId:y,campaignId:T,isOwner:A,currentUserPledgeCents:S})}):null}if(h===e0.PostDisplayType.VIDEO_EXTERNAL_FILE){let e=eH.default.parse((0,e1.getWindow)()?.location?.search?.split("?")[1]),i=e?.t?parseInt(e.t,10):0,o=r[0]?.imageUrls?.thumbnail||_?.url;return(0,t.jsxs)(eM.Box,{position:"relative",overflow:"hidden",ref:F,children:[!O&&(0,t.jsx)(e3,{...U,children:(0,t.jsx)(e5,{children:(0,t.jsx)(eN.LoadingSpinner,{color:"light"})})}),(0,t.jsx)(eK.VideoControlsContextProvider,{children:(0,t.jsx)(eX,{videoPlayerRef:N,campaignId:T,postId:y,userId:B,videoId:u.video?.id?.toString(),videoTitle:b,videoCampaign:C,isOnPlatform:!0,controls:!0,onBeforePlay:()=>{let e=N.current?.getVideoId()||null;e&&H(e)},onPlay:()=>{let e=N.current?.getVideoElement()||null,t=N.current?.getVideoId()||null;e&&t&&W(e,t),m()},onCompleted:g,onPaused:()=>{let e=N.current?.getVideoId()||null;e&&Y(e),f()},onEnterPIP:()=>{let e=N.current?.getVideoElement()||null,t=N.current?.getVideoId()||null;e&&t&&G(e,t)},videoUrl:z?.url,thumbnailUrl:o,videoWidth:z?.width,videoHeight:z?.height,maxHeight:p.NATIVE_VIDEO_PLAYER_MAX_HEIGHT,time:i,preload:P,autoPlay:P&&!j&&!L,isPostPage:P,isPreview:j,duration:z?.duration,fullDuration:k?.fullDuration,postSource:E,pledgeUrl:D,onLoaded:()=>R(!0),videoProgress:z?.progress,creatorName:V,isPostPreview:$,onFullscreenChange:e=>{let t=N.current?.getVideoElement()||null,i=N.current?.getVideoId()||null;e&&t&&i&&K(t,i)},logEnterVideoPip:x,logExitVideoPip:v,showClosedCaptions:z?.closedCaptionsEnabled})})]})}if(h===e0.PostDisplayType.VIDEO_EMBED||h===e0.PostDisplayType.AUDIO_EMBED){let i=h===e0.PostDisplayType.VIDEO_EMBED?"video":"audio";return M&&u?(0,t.jsx)(eG.DynamicImport,{importer:()=>e.A(4295704),variant:i,iframe:u.embedHtml,thumbnailUrl:u.thumbnailUrl,logTogglePlay:m,logMediaEnded:g,url:u.url}):null}return h===e0.PostDisplayType.LINK?u?.productVariantId?(0,t.jsx)(q.Spacer,{pt:{xs:s.tokens.space.x16,md:s.tokens.space.x24},pl:{xs:s.tokens.space.x16,md:s.tokens.space.x24},pr:{xs:s.tokens.space.x16,md:s.tokens.space.x24},children:(0,t.jsx)(e2.ProductVariantEmbed,{productVariantId:u.productVariantId})}):(0,t.jsx)(te,{children:(0,t.jsx)(eY.GenericEmbed,{...u})}):h===e0.PostDisplayType.LIVESTREAM_CROWDCAST?(0,t.jsx)(eW.CrowdcastLivestreamPreview,{src:u.src||o,url:u.url}):null};var ti=e.i(6202039);e.s(["PostMediaHeader",0,e=>{let{storage:r,showNewPostPromotionModal:s}=e,a=(0,d.useSessionValue)("user_id"),{feedName:l,currentUserCanView:c,isPostOwner:u,shouldScaleMediaAsPostPage:p,isPreview:h}=(0,n.useContentCardViewerInfo)(),{accessRules:m,user:g,campaign:f,id:x,image:v,images:y,media:b={},parentHighlightPost:C,video:_,postMetadata:P,postType:I,publishedAt:T,thumbnail:j,title:k,videoPreview:E,displayType:D,url:A}=(0,o.useContentCardData)(),S=(0,w.getPostSource)({feedName:l}),V=!!E?.url,L=(0,et.useDropFromContext)(),{i18n:$}=(0,F.useLingui)(),M=Date.now()-new Date(T).getTime(),B=a===g?.id,z=I===e0.ApiPostType.LIVESTREAM_YOUTUBE&&M<36e5&&B&&!r?.isSet,O=(0,i.isPublicPost)(m),R=f?.currentUserPledge?.amountCents||0,U=g?.vanity,N="string"==typeof I&&[e0.ApiPostType.AUDIO_EMBED,e0.ApiPostType.AUDIO_FILE].includes(I)?"audio":"video",H=(0,t.jsx)(tt,{authorImagerUrl:f?.avatarPhotoUrl,images:y,imageOrder:P?.imageOrder,isPublicContent:O,isPostPreview:h,isPreview:!c&&V,media:b,video:c?_:void 0,postDisplayType:D,logTogglePlay:()=>{(0,eR.logMediaToggledPlaybackEvent)({campaign_id:f?.id??"",is_locked_for_viewer:!c,is_preview:V,media_type:N,post_source:S,post_id:x,drop_id:L?.id,drop_status:L?(0,ti.stateAt)(new Date,L):void 0,highlight_parent_id:C?.id,download_type:"manual"})},logMediaEnded:()=>{(0,ez.logMediaEndedPlaybackEvent)({campaign_id:f?.id??"",media_type:N,is_preview:V,post_id:x,drop_id:L?.id,drop_status:L?(0,ti.stateAt)(new Date,L):void 0,highlight_parent_id:C?.id})},logMediaPaused:()=>{(0,eO.logMediaPausedPlaybackEvent)({campaign_id:f?.id??"",is_preview:V,media_type:N,post_id:x,drop_id:L?.id,drop_status:L?(0,ti.stateAt)(new Date,L):void 0,highlight_parent_id:C?.id})},logEnterVideoPip:()=>{eF({campaign_id:f?.id??"",post_id:x,drop_id:L?.id,drop_status:L?(0,ti.stateAt)(new Date,L):void 0,highlight_parent_id:C?.id})},logExitVideoPip:()=>{eU({campaign_id:f?.id??"",post_id:x,drop_id:L?.id,drop_status:L?(0,ti.stateAt)(new Date,L):void 0,highlight_parent_id:C?.id})},postId:x,postTitle:k,thumbnail:j||v,isPostPage:p,campaignId:f?.id,videoPreview:E,postSource:S,pledgeUrl:A,isOwner:u,currentUserPledgeCents:R,creatorName:U,isFromPostCreation:s});return z?(0,t.jsx)(eB.Popover,{hideArrow:!0,renderMode:"portal",id:`popover-broadcast-${x}`,content:$._({id:"oYhk9m",message:"Don't see your broadcast? Click 'Start broadcast' in Youtube's stream window."}),minWidth:22,isOpen:z,onCloseRequest:()=>r?.set(),preferredPlacement:"bottom",children:e=>{let{ref:i,ariaProps:o}=e;return(0,t.jsx)(eM.Box,{ref:i,...o,children:H})}}):H}],6103592)},2705266,e=>{"use strict";var t=e.i(9391398),i=e.i(6191788);let o=(0,i.createContext)(null);e.s(["VideoContext",0,o,"VideoProvider",0,e=>{let{children:n}=e,[r,s]=(0,i.useState)(null);return(0,t.jsx)(o.Provider,{value:{element:r,setElement:s},children:n})},"useVideo",0,()=>(0,i.useContext)(o)])},1095666,e=>{e.v({chatReplayContainer:"PatreonChatToggle-module__Py6qVW__chatReplayContainer",chatToggleButton:"PatreonChatToggle-module__Py6qVW__chatToggleButton",hidden:"PatreonChatToggle-module__Py6qVW__hidden"})},8828873,e=>{e.v({audioBannerWrapper:"MediaBanner-module__hJpyhG__audioBannerWrapper",postPageBanner:"MediaBanner-module__hJpyhG__postPageBanner",roundedCorners:"MediaBanner-module__hJpyhG__roundedCorners",roundedCornersBottom:"MediaBanner-module__hJpyhG__roundedCornersBottom"})},9365615,7270054,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(8981215),n=e.i(226931),r=e.i(9760814),s=e.i(47401),a=e.i(2983336),l=e.i(1785954),d=e.i(1901018),c=e.i(1105603),u=e.i(9682514),p=e.i(4721996),h=e.i(8799586),m=e.i(8516319),g=e.i(6201887),f=e.i(5586941),x=e.i(9435654),v=e.i(3099786),y=e.i(2538774),b=e.i(45917),C=e.i(2603366),w=e.i(1130754),_=e.i(8914707),P=e.i(5274854),I=e.i(8372459),T=e.i(976600),j=e.i(465375),k=e.i(8475200),E=e.i(6103592),D=e.i(1789610),A=e.i(7342776),S=e.i(3988175),V=e.i(6191788),L=e.i(4152146),$=e.i(6058159),M=e.i(883333),B=e.i(9277289),z=e.i(6105945),O=e.i(4504392),R=e.i(4199263),F=e.i(5069969),U=e.i(6382929),N=e.i(2705266),H=e.i(3885723),W=e.i(6202039),G=e.i(8745369),Y=e.i(650723),q=e.i(7950323),K=e.i(1821384),X=e.i(8271155),J=e.i(1163396),Q=e.i(7973243),Z=e.i(3040276);let ee=K.z.object({duration:K.z.number(),tile_height:K.z.number(),tile_width:K.z.number(),tiles:K.z.array(K.z.object({start:K.z.number(),x:K.z.number(),y:K.z.number()})).default([]),url:K.z.string().default("")}).transform(e=>({duration:e.duration,tileHeight:e.tile_height,tileWidth:e.tile_width,tiles:e.tiles,url:e.url}));class et extends Error{constructor(e){super(e),this.name="StoryboardFetchError"}}class ei extends Error{constructor(e){super(e),this.name="StoryboardParseError"}}async function eo(e){let t;try{t=await (0,X.fetch)(e)}catch{throw(0,J.datadogIncrement)("patreon.use_storyboard.fetch_storyboard.error"),new et("Storyboard request failed")}if(!t.ok)throw new et(`Storyboard request failed with status ${t.status}`);let i=ee.safeParse(await t.json());if(!i.success)throw(0,Q.logWarning)({exception:"patreon.use_storyboard.parse_storyboard.error",surface:"media-players",context:{url:e,issues:i.error.issues}}),new ei("Storyboard data could not be parsed");return i.data}function en(e){let t=e.display?.storyboard?.jsonUrl??null,{data:i,isLoading:o,error:n}=(0,q.default)(t,eo,{revalidateOnFocus:!1});return null==t||o?Z.loading:n?(0,Z.failed)(n):void 0===i?Z.loading:(0,Z.completed)(i)}e.s(["useStoryboard",0,en],7270054);var er=e.i(3416127),es=e.i(1509387);e.i(9137169);var ea=e.i(625078),el=e.i(4853452),ed=e.i(4236341),ec=e.i(3661730),eu=e.i(7279295),ep=e.i(1502179),eh=e.i(6272043),em=e.i(1168489),eg=e.i(3730943),ef=e.i(6111286),ex=e.i(1095666);let ev=(0,em.default)(()=>e.A(5018682).then(e=>e.LiveChatReplay),{loadableGenerated:{modules:[5160928]},ssr:!1}),ey=e=>{let{videoContainerRef:o,postId:r,mediaElement:s}=e,{i18n:a}=(0,i.useLingui)(),[l,d]=(0,V.useState)(!s.paused),c=(0,V.useRef)(!s.paused);(0,V.useEffect)(()=>{let e=()=>{if(!c.current){c.current=!0,d(!0);return}};return s.addEventListener("play",e),()=>{s.removeEventListener("play",e)}},[s]);let u=l?eu.IconBubbleChat:ep.IconBubbleChatOff,p=l?a._({id:"Qe4Z03",message:"Hide chat replay"}):a._({id:"12wdMN",message:"Show chat replay"});return(0,t.jsxs)(t.Fragment,{children:[o.current&&(0,t.jsx)(eb,{postId:r,isOpen:l,onClose:()=>d(!1),container:o.current,mediaElement:s}),(0,t.jsx)("div",{className:ex.default.chatToggleButton,children:(0,t.jsx)(ef.SettingsButton,{onClick:e=>{e.nativeEvent.stopImmediatePropagation(),d(!l)},tooltip:{content:p,top:"-10px",right:"4%"},children:(0,t.jsx)(u,{color:n.tokens.constant.white.default})})})]})},eb=e=>(0,eg.createPortal)((0,t.jsx)("div",{className:(0,eh.default)(ex.default.chatReplayContainer,{[ex.default.hidden]:!e.isOpen}),children:(0,t.jsx)(ev,{postId:e.postId,onClose:e.onClose,mediaElement:e.mediaElement})}),e.container,"chat-replay-portal"),eC=e=>{let{id:i}=(0,h.useContentCardData)();return(0,t.jsx)(ey,{postId:i,...e})};var ew=e.i(7561384);let e_=e=>{let{isFromPostCreation:i,onLockedPostClick:o,isMonetizedPost:s,postType:a,maxHeight:l,forcedWidth:d,forcedHeight:c}=e,u=(0,H.useFeatureFlag)("web_enable_live_chat_replay_consumption"),p=(0,H.useFeatureFlag)("enable_auto_post_clipping_ui"),g=(0,H.useFeatureFlag)("enable_non_owner_post_clip_viewing"),f=(0,L.useSessionValue)("user_id"),{feedName:y,currentUserCanView:b,isPostOwner:C,currentUserIsCampaignOwner:w,isPostPage:_,shouldScaleMediaAsPostPage:P,isPreview:I,isQuickPost:T,enablePostRatioBasedLayout:j}=(0,m.useContentCardViewerInfo)(),{user:k,campaign:E,id:q,images:K,media:X={video:{id:""}},parentHighlightPost:J,video:Q,thumbnail:Z,primaryImage:ee,title:et,videoPreview:ei,url:eo,paywallDisplay:eu,liveChatReplayStatus:ep}=(0,h.useContentCardData)(),{enableSingleColumnLayout:eh}=(0,F.useSingleColumnLayout)({isPostPage:P,isPreview:!!I,paywallDisplay:eu,currentUserCanView:b}),em=(0,x.useDropFromContext)(),eg=(0,v.useDropState)(em),ef=(0,el.getPostSource)({feedName:y}),ex=b?Q?.display:ei,ev=!b&&!!ei?.url,ey=(0,V.useRef)(null),[eb,e_,eT,ej,ek]=(0,U.useActiveVideo)(),eE=(0,N.useVideo)(),[eD,eA]=(0,V.useState)(!1),eS=(0,ed.useContentCardMediaProgress)(),{onFinishedPlaying:eV}=(0,ec.useMediaPlayState)(q,eS),eL=_&&p&&(C||w||g)?String(Q?.display?.mediaId??""):"",[e$]=(0,Y.useMedia)(eL),eM=en("Completed"===e$.tag?e$.value:{id:"",type:"media"}),eB=("Completed"===e$.tag?e$.value.chapters??[]:[]).map(e=>({id:e.intervalId,startTime:e.startTimestamp,title:e.title,description:e.description??void 0})),ez="Completed"===e$.tag?e$.value.clippableMoments??[]:[],eO="Completed"===eM.tag?eM.value:void 0,eR=k?.vanity,eF=(0,ea.useAspectRatio)({maxHeight:l??R.NATIVE_VIDEO_PLAYER_MAX_HEIGHT,videoHeight:ex?.height??0,videoWidth:ex?.width??0}),eU=S.default.parse((0,G.getWindow)()?.location?.search?.split("?")[1]??""),eN=eU?.t?parseInt(eU.t,10):0,eH=K?.[0]?.imageUrls?.thumbnail||Z?.url,eW=ee?.imageMedium||eH;if(!b&&!ei?.url)return(0,t.jsx)(ew.LockedVideoBanner,{thumbnailUrl:eW??(X&&"src"in X?X.src:void 0)??(X&&"imageSrc"in X?X.imageSrc:void 0),isPreview:I});let eG=!_||ev||i?void 0:"load";return(0,t.jsxs)(D.Box,{position:"relative",overflow:"hidden",css:r.css`
        z-index: 0;
        max-height: inherit;
        border-radius: ${T?n.tokens.radius.md:0};
      `,children:[!eD&&(0,t.jsx)(eP,{...eF,children:(0,t.jsx)(eI,{children:(0,t.jsx)(A.LoadingSpinner,{color:"light"})})}),(0,t.jsx)(er.VideoControlsContextProvider,{children:(0,t.jsx)(es.LazyVideoPlayer,{variant:"contentCard",videoPlayerRef:ey,campaignId:E?.id,postId:q,userId:f,videoId:X.video?.id?.toString()??"",videoTitle:et,isOnPlatform:!0,controls:!0,onBeforePlay:()=>{let e=ey.current?.getVideoId()||null;e&&eb(e)},onPlay:()=>{let e,t=ey.current?.getVideoElement()||null,i=ey.current?.getVideoId()||null;t&&i&&(e_(t,i),eE?.setElement(t)),e=!b,(0,B.logMediaToggledPlaybackEvent)({campaign_id:E?.id??"",is_locked_for_viewer:e,is_preview:ev,media_type:"video",post_source:ef,post_id:q,drop_id:em?.id,drop_status:em?(0,W.stateAt)(new Date,em):void 0,highlight_parent_id:J?.id,download_type:"manual"})},onCompleted:()=>{(0,$.logMediaEndedPlaybackEvent)({campaign_id:E?.id??"",media_type:"video",is_preview:ev,post_id:q,drop_id:em?.id,drop_status:em?(0,W.stateAt)(new Date,em):void 0,highlight_parent_id:J?.id}),ev||eV()},onPaused:()=>{let e=ey.current?.getVideoId()||null;e&&ej(e),(0,M.logMediaPausedPlaybackEvent)({campaign_id:E?.id??"",is_preview:ev,media_type:"video",post_id:q,drop_id:em?.id,drop_status:em?(0,W.stateAt)(new Date,em):void 0,highlight_parent_id:J?.id})},onEnterPIP:()=>{let e=ey.current?.getVideoElement()||null,t=ey.current?.getVideoId()||null;e&&t&&eT(e,t)},videoUrl:ex?.url,thumbnailUrl:eW,videoWidth:d??ex?.width??0,videoHeight:c??ex?.height??0,showClosedCaptions:ex?.closedCaptionsEnabled,maxHeight:l??R.NATIVE_VIDEO_PLAYER_MAX_HEIGHT,time:eN,preload:_,autoPlay:eG,isPostPage:_,isPreview:ev,duration:ex?.duration,fullDuration:ei?.fullDuration??ei?.duration??ex?.duration,postSource:ef,pledgeUrl:eo,onLoaded:()=>{eA(!0);let e=ey.current?.getVideoElement()??null;e&&eE?.setElement(e)},videoProgress:ex?.progress,creatorName:eR,isPostPreview:I,onEnterFullscreen:()=>{let e=ey.current?.getVideoElement()||null,t=ey.current?.getVideoId()||null;e&&t&&ek(e,t)},logEnterVideoPip:()=>{(0,z.logMediaVideoEnteredPip)({campaign_id:E?.id??"",post_id:q,drop_id:em?.id,drop_status:em?(0,W.stateAt)(new Date,em):void 0,highlight_parent_id:J?.id})},logExitVideoPip:()=>{(0,O.logMediaVideoExitedPip)({campaign_id:E?.id??"",post_id:q,drop_id:em?.id,drop_status:em?(0,W.stateAt)(new Date,em):void 0,highlight_parent_id:J?.id})},dropWithState:{drop:em,dropState:eg},onLockedPostClick:o,isMonetizedPost:s,postType:a,parentHighlightPost:J,currentUserCanView:b,playbackData:ex?.viewerPlaybackData,paywallDisplay:eu,isQuickPost:T,shouldApplyPostRatioBasedLayout:j,chapters:eB,storyboard:eO,clippableMoments:ez,sourceMediaId:Q?.display?.mediaId,additionalControls:[{id:"live-chat-toggle",component:eC,platform:"desktop_only",hidden:!("enabled"===ep&&eh&&u)}]})})]})},eP=r.styled.div.withConfig({componentId:"sc-ba1f2f50-0"})`
  background-color: ${n.tokens.constant.black.default};

  /* For most common screen sizes, ensure the video fits in the screen */
  padding-top: min(
    ${e=>{let{aspectRatioPadding:t,containerMaxHeight:i}=e;return`${t}%, min(calc(100vh - 80px), ${i}px))`}}
  );
  position: relative;
  overflow: hidden;

  /* For smaller screen sizes, ensure the video doesn't continue to shrink */
  @media (max-height: 600px) {
    padding-top: 520px;
  }
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`,eI=r.styled.div.withConfig({componentId:"sc-ba1f2f50-1"})`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var eT=e.i(8828873);let ej=r.styled.div.withConfig({componentId:"sc-ec73cb88-0"})`
  padding: ${n.tokens.space.x16} ${n.tokens.space.x16} 0 ${n.tokens.space.x16};

  @media ${(0,o.mediaForBreakpoint)("sm")} {
    padding: ${n.tokens.space.x24} ${n.tokens.space.x24} 0 ${n.tokens.space.x24};
  }
`,ek=(0,r.styled)(f.StateChip).withConfig({componentId:"sc-ec73cb88-1"})`
  &&& {
    padding-bottom: ${n.tokens.space.x16};
    position: ${e=>e.isVideo?"absolute":void 0};
    z-index: ${e=>e.isVideo?"1":void 0};
    @media ${(0,o.mediaForBreakpoint)("sm")} {
      position: absolute;
      z-index: 1;
    }
  }
`,eE=r.styled.div.withConfig({componentId:"sc-ec73cb88-2"})`
  position: relative;
  ${e=>{let{maxHeight:t}=e;return t&&r.css`
      max-height: ${t}px;
    `}}
  ${e=>e.shouldApplyPostRatioBasedLayout&&r.css`
      max-height: 60vh;
    `}

  ${e=>{let{isQuickPost:t}=e;return t&&r.css`
      border-radius: ${n.tokens.radius.md};
    `}}

  ${ek} {
    top: ${n.tokens.space.x16};
    left: ${n.tokens.space.x16};
  }
`,eD=r.styled.div.withConfig({componentId:"sc-ec73cb88-3"})`
  align-content: center;
  height: 100%;
`,eA=r.styled.div.withConfig({componentId:"sc-ec73cb88-4"})`
  img,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    aspect-ratio: 16 / 9;
  }
`;e.s(["ContentPadding",0,ej,"MediaBanner",0,function(e){let{storage:o,isFromPostCreation:n,postPollResponse:r,pollResponsesLoading:f,onLockedPostClick:D,isMonetizedPost:A,isFromCreatorWorldHome:S=!1,primaryThemeColor:V,randomMediaColor:L=!1,maxHeight:$,showThirdPartyCookieDisclaimer:M=!0}=e,B=(0,h.useContentCardData)(),{videoPreview:z,displayType:O,audioPreview:R,audio:F,postType:U,campaign:N,thumbnail:H,embed:W,primaryImage:G}=B,{currentUserCanView:Y,currentUserIsCampaignOwner:q,feedName:K,enablePostRatioBasedLayout:X,isQuickPost:J,shouldScaleMediaAsPostPage:Q}=(0,m.useContentCardViewerInfo)(),{shouldApplyPostRatioBasedLayout:Z}=(0,a.usePostRatioLayout)({enablePostRatioBasedLayout:X,isQuickPost:!!J,isPostPage:!!Q}),ee=(0,x.useDropFromContext)(),et=(0,v.useDropState)(ee),ei=(0,u.isDropNotPreLive)(et)?ee?.content.image?.url:ee?.coverImage?.thumbnail||ee?.content.image?.url;if(O===l.PostDisplayType.LivestreamNative)return(0,t.jsx)(P.NativeLivestreamBanner,{});if(ee&&et&&!(0,u.isDropNotPreLive)(et))return(0,t.jsx)(g.Countdown,{showTimer:!0,postType:ee.content.postType,coverImage:ei,primaryThemeColor:ee.content.campaign?.primaryThemeColor??void 0,scheduledFor:ee.scheduledFor,isDroppable:ee.isDroppable});switch(O){case l.PostDisplayType.LINK:if(K!==s.SINGLE_POST&&!Y&&(B.customThumbnailMedia||B.thumbnail&&B?.hasCustomThumbnail))return(0,t.jsx)(C.ImageBannerWithGradient,{maxHeight:$});return(0,t.jsx)(ej,{children:(0,t.jsx)(w.LinkBanner,{})});case l.PostDisplayType.IMAGE:return(0,t.jsx)(C.ImageBannerWithGradient,{maxHeight:$});case l.PostDisplayType.RICH_TEXT_ONLY:if(K!==s.SINGLE_POST&&!Y&&(B.customThumbnailMedia||B.thumbnail&&B?.hasCustomThumbnail))return(0,t.jsx)(C.ImageBannerWithGradient,{});return null;case l.PostDisplayType.LIVESTREAM_CROWDCAST:return(0,t.jsx)(ej,{children:(0,t.jsx)(_.LivestreamBanner,{provider:"crowdcast"})});case l.PostDisplayType.LIVESTREAM_VIMEO:return(0,t.jsx)(ej,{children:(0,t.jsx)(_.LivestreamBanner,{provider:"vimeo"})});case l.PostDisplayType.PRODUCT_VARIANT:return(0,t.jsx)(ej,{children:(0,t.jsx)(T.ProductVariantBanner,{})});case l.PostDisplayType.POLL:return(0,t.jsx)(k.Poll,{pollResponsesLoading:f,postPollResponse:r});case l.PostDisplayType.AUDIO:case l.PostDisplayType.AUDIO_WITH_IMAGE:{let e=H?.square??N?.avatarPhotoImageUrls?.default,i=ee&&F&&("dropped"===et||"first_showing"===et)?(0,t.jsx)(ek,{state:et,viewerIsCampaignOwner:q}):null,o=(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsx)("div",{className:eT.default.audioBannerWrapper,children:(0,t.jsx)(y.AudioBanner,{isFromCreatorWorldHome:S})})]}),n=G&&G.imageColors?G.imageColors.dominantColor:V||N?.primaryThemeColor||void 0;if(S&&e)return(0,t.jsx)(c.ImageBackground,{imageSrc:e,children:(0,t.jsx)(eD,{children:o})});return(0,t.jsx)(d.GradientBackground,{primaryThemeColor:n,randomMediaColor:L,shouldAdjustSaturation:!1,children:o})}case l.PostDisplayType.VIDEO_EXTERNAL_FILE:{let e=S?{forcedWidth:16,forcedHeight:9}:{};return(0,t.jsxs)(eE,{shouldApplyPostRatioBasedLayout:Z,isQuickPost:J,maxHeight:$,children:[ee&&("dropped"===et||"first_showing"===et)?(0,t.jsx)(ek,{isVideo:!0,state:et,viewerIsCampaignOwner:q}):null,ee&&N?.isNewFandom?(0,t.jsx)(g.Countdown,{showTimer:!1,postType:ee.content.postType,coverImage:ei,primaryThemeColor:ee.content.campaign?.primaryThemeColor??void 0,scheduledFor:ee.scheduledFor,isDroppable:ee.isDroppable}):(0,t.jsx)(e_,{isFromPostCreation:n,onLockedPostClick:D,isMonetizedPost:A,postType:U,maxHeight:$,...e})]})}case l.PostDisplayType.VIDEO_EMBED:return(0,t.jsxs)(t.Fragment,{children:[S?(0,t.jsx)(eA,{children:(0,t.jsx)(b.EmbedBanner,{mediaType:"video"})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b.EmbedBanner,{mediaType:"video"})}),W?.url&&M&&(0,t.jsx)(p.ThirdPartyCookieDisclaimer,{mh:Q?"none":void 0,embedSrc:W.url})]});case l.PostDisplayType.AUDIO_EMBED:return(0,t.jsx)(ej,{children:(0,t.jsx)(b.EmbedBanner,{mediaType:"audio"})});case l.PostDisplayType.POST:return W?.linkedObjectId?(0,t.jsx)(ej,{children:(0,t.jsx)(I.PostBanner,{embeddedPostId:W?.linkedObjectId,currentUserCanViewParentContext:Y})}):null;case l.PostDisplayType.NO_MEDIA:return(0,t.jsx)(ej,{children:(0,t.jsx)(j.UnavailableBanner,{children:(0,t.jsx)(i.Trans,{id:"NraR+3",message:"This media is no longer available",context:"Text indicating a shared media is no longer available"})})})}let eo=!!z?.url||!!R?.downloadUrl;return Y||eo?(0,t.jsx)(E.PostMediaHeader,{storage:o,showNewPostPromotionModal:n}):null}],9365615)},8436551,e=>{"use strict";var t=e.i(9391398),i=e.i(2358280),o=e.i(6112151),n=e.i(712139),r=e.i(1110060),s=e.i(5265535),a=e.i(2129357),l=e.i(5137682),d=e.i(5345957),c=e.i(3876923),u=e.i(8934581),p=e.i(226931),h=e.i(9760814),m=e.i(8475434),g=e.i(3641631),f=e.i(1785954),x=e.i(6202039),v=e.i(3099786),y=e.i(2848708),b=e.i(7190086);let C=h.styled.div.withConfig({componentId:"sc-3c2df866-0"})`
  position: absolute;
  bottom: ${p.tokens.space.x12};
  left: ${p.tokens.space.x12};
  z-index: 2;
`,w=h.styled.div.withConfig({componentId:"sc-3c2df866-1"})`
  position: absolute;
  top: 28px;
  left: ${p.tokens.space.x12};
  z-index: 2;
`;function _(e,t){var i,o;if(!t||!t.postFile)return 0;let n=e?t.postFile:t.videoPreview;return(i=n)&&"object"==typeof i&&"duration"in i||(o=n)&&"object"==typeof o&&"duration"in o?n.duration??0:0}e.s(["MediaBannerChip",0,e=>{let{i18n:h}=(0,i.useLingui)(),{chipVariant:P,currentUserCanView:I,imageLength:T,post:j,hideMediaChip:k}=e,E=j?.drop?(0,x.fromApiDrop)(j.drop,j,j.currentUserCanView??!1):null,D=(0,v.useDropState)(E),A=j?.postType===f.ApiPostType.LivestreamNative?j?.livestream?.state:D,S="insetWhite"===P?p.tokens.constant.black.default:p.tokens.constant.white.default,V=T>1;if(k)return null;if(A)switch(A){case"countdown":case"coming_soon":case"takeover":case"waiting_room":case"pre_live":if(j?.postType===f.ApiPostType.LivestreamNative&&"dropped"===D)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:s.IconLivestream,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,m.livestreamText)(h)})})});return null;case"first_showing":case"live":if(j?.postType!==f.ApiPostType.LivestreamNative)return(0,t.jsx)(w,{children:(0,t.jsx)(g.LiveChipContainer,{children:(0,t.jsx)(g.LiveChip,{},"live-chip")})});return null;case"live_ended":case"dropped":case"decayed":if(j?.mediaFileDurationSeconds&&j?.mediaFileDurationSeconds>0)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:u.IconVideoCamera,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,y.getReadableTime)({duration:j.mediaFileDurationSeconds??0,showFirstComponentOnly:!1})})})});if(j&&_(I,j)>0)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:u.IconVideoCamera,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,y.getReadableTime)({duration:_(I,j),showFirstComponentOnly:!1})})})});if(j?.postType===f.ApiPostType.LivestreamNative)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:s.IconLivestream,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,m.livestreamText)(h)})})});return null}if(j&&I)switch(j.postType){case f.ApiPostType.LivestreamNative:case f.ApiPostType.LIVESTREAM_CROWDCAST:case f.ApiPostType.LIVESTREAM_VIMEO:case f.ApiPostType.LIVESTREAM_YOUTUBE:return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:s.IconLivestream,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,t.jsx)(t.Fragment,{children:(0,m.livestreamText)(h)})})})});case f.ApiPostType.PODCAST:{let e=null;if(j.mediaFileDurationSeconds&&j.mediaFileDurationSeconds>0&&(e=(0,y.getReadableTime)({duration:j.mediaFileDurationSeconds??0,showFirstComponentOnly:!1})),j.audio&&j.audio.metadata&&j.audio.metadata.durationS&&j.audio.metadata.durationS>0&&(e=(0,y.getReadableTime)({duration:j.audio.metadata.durationS,showFirstComponentOnly:!1})),e)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:c.IconPodcastAlt,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:e})})});break}case f.ApiPostType.VIDEO_EXTERNAL_FILE:if(j.mediaFileDurationSeconds&&j.mediaFileDurationSeconds>0)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:u.IconVideoCamera,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,y.getReadableTime)({duration:j.mediaFileDurationSeconds??0,showFirstComponentOnly:!1})})})});if(_(I,j)>0)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:u.IconVideoCamera,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,y.getReadableTime)({duration:_(I,j),showFirstComponentOnly:!1})})})});break;case f.ApiPostType.AUDIO_FILE:if(j.audio&&j.audio.metadata&&j.audio.metadata.durationS&&j.audio.metadata.durationS>0)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:l.IconMicrophone,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:(0,y.getReadableTime)({duration:j.audio.metadata.durationS,showFirstComponentOnly:!1})})})});break;case f.ApiPostType.VIDEO_EMBED:if(j.embed&&j.embed.provider)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:u.IconVideoCamera,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:j.embed.provider})})});break;case f.ApiPostType.LINK:if(j.embed&&j.embed.provider)return(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:(0,b.isPlayableLinkEmbed)(j)?u.IconVideoCamera:r.IconLink,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:j.embed.provider})})})}return(0,t.jsxs)(t.Fragment,{children:[I&&V?(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:d.IconPhoto,variant:P,children:T})}):null,I?null:(0,t.jsx)(C,{children:(0,t.jsx)(n.Chip,{size:"sm",icon:j?.postType===f.ApiPostType.LivestreamNative?s.IconLivestream:a.IconLock,variant:P,children:(0,t.jsx)(o.BodyText,{color:S,size:"sm",children:j?.postType===f.ApiPostType.LivestreamNative?(0,m.livestreamText)(h):(0,t.jsx)(m.LockedText,{})})})})]})},"formatDropDate",0,(e,t)=>{let i=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"}),o=new Intl.DateTimeFormat(t,{hour:"numeric",minute:"2-digit",hour12:!0}),n=i.format(e),r=o.format(e);return`${n} at ${r}`},"getVideoFileDuration",0,_])}]);

//# debugId=364a5f00-4d89-e321-a97f-490983d096c2
//# sourceMappingURL=13p~gey4z-59r.js.map
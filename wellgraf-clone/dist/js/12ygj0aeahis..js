;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="9f8fe821-cdaf-0fbd-e309-c0693515c339")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8155918,e=>{"use strict";e.i(3350461);var t=e.i(7460997),o=e.i(6075907),n=e.i(6191788),r=e.i(5081205),a=e.i(5708411),i=(0,n.forwardRef)(function(e,t){return n.default.createElement(r.default,(0,o.default)({sideCar:a.default,ref:t},e))}),l=r.default.propTypes||{};l.sideCar,(0,t.default)(l,["sideCar"]),i.propTypes={},e.s(["default",0,i],8155918)},5454416,(e,t,o)=>{!function(){"use strict";var o=!!("u">typeof window&&window.document&&window.document.createElement),n={canUseDOM:o,canUseWorkers:"u">typeof Worker,canUseEventListeners:o&&!!(window.addEventListener||window.attachEvent),canUseViewport:o&&!!window.screen};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)e.r,void 0!==n&&e.v(n);else t.exports?t.exports=n:window.ExecutionEnvironment=n}()},2171742,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.pipe=o.listenerOptions=void 0,o.preventTouchMove=function(e){return e.preventDefault(),!1},o.allowTouchMove=function(e){var t=e.currentTarget;return t.scrollHeight>t.clientHeight?(e.stopPropagation(),!0):(e.preventDefault(),!1)},o.preventInertiaScroll=function(){var e=this.scrollTop,t=this.scrollHeight,o=e+this.offsetHeight;0===e?this.scrollTop=1:o===t&&(this.scrollTop=e-1)},o.isTouchDevice=function(){return!!n.canUseDOM&&("ontouchstart"in window||navigator.maxTouchPoints)},o.camelToKebab=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},o.parse=function(e){return isNaN(e)?e:e+"px"},o.getPadding=function(){return n.canUseDOM?parseInt(window.getComputedStyle(document.body).paddingRight,10)+(window.innerWidth-document.documentElement.clientWidth):0},o.getWindowHeight=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(n.canUseDOM)return window.innerHeight*e},o.getDocumentHeight=function(){if(n.canUseDOM)return document.body.clientHeight},o.makeStyleTag=function(){if(n.canUseDOM){var e=document.createElement("style");return e.type="text/css",e.setAttribute("data-react-scrolllock",""),e}},o.injectStyles=function(e,t){n.canUseDOM&&(e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)))},o.insertStyleTag=function(e){n.canUseDOM&&(document.head||document.getElementsByTagName("head")[0]).appendChild(e)};var n=e.r(5454416);o.listenerOptions={capture:!1,passive:!1};var r=function(e,t){return function(){return t(e.apply(void 0,arguments))}};o.pipe=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(r)}},740906,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.TouchScrollable=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=e.r(6191788),i=e.r(5454416),l=e.r(2171742);function s(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}o.TouchScrollable=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);function t(){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");for(var e,o,n,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.getScrollableArea=function(e){n.scrollableArea=e},s(n,o)}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(t,[{key:"componentDidMount",value:function(){i.canUseEventListeners&&(this.scrollableArea.addEventListener("touchstart",l.preventInertiaScroll,l.listenerOptions),this.scrollableArea.addEventListener("touchmove",l.allowTouchMove,l.listenerOptions))}},{key:"componentWillUnmount",value:function(){i.canUseEventListeners&&(this.scrollableArea.removeEventListener("touchstart",l.preventInertiaScroll,l.listenerOptions),this.scrollableArea.removeEventListener("touchmove",l.allowTouchMove,l.listenerOptions))}},{key:"render",value:function(){var e=this.props,t=e.children,o=function(e,t){var o={};for(var n in e)!(t.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["children"]);return"function"==typeof t?t(this.getScrollableArea):(0,a.cloneElement)(t,n({ref:this.getScrollableArea},o))}}]),t}(a.PureComponent)},251239,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o.default=function(e){var t=a.PureComponent;if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);function o(){if(!(this instanceof o))throw TypeError("Cannot call a class as a function");for(var e,t,n,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=n=s(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.addSheet=function(){var e=n.getStyles(),t=(0,l.makeStyleTag)();t&&((0,l.injectStyles)(t,e),(0,l.insertStyleTag)(t),n.sheet=t)},n.getStyles=function(){var e=n.props.accountForScrollbars,t=(0,l.getDocumentHeight)(),o=e?(0,l.getPadding)():null;return"body {\n        box-sizing: border-box !important;\n        overflow: hidden !important;\n        position: relative !important;\n        "+(t?"height: "+t+"px !important;":"")+"\n        "+(o?"padding-right: "+o+"px !important;":"")+"\n      }"},s(n,t)}return o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t),r(o,[{key:"componentDidMount",value:function(){this.addSheet()}},{key:"removeSheet",value:function(){this.sheet&&(this.sheet.parentNode.removeChild(this.sheet),this.sheet=null)}},{key:"componentWillUnmount",value:function(){this.removeSheet()}},{key:"render",value:function(){return i.default.createElement(e,this.props)}}]),o};var a=e.r(6191788),i=(n=a)&&n.__esModule?n:{default:n},l=e.r(2171742);function s(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}},4328185,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o.default=function(e){var t=a.PureComponent;if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);function o(){if(!(this instanceof o))throw TypeError("Cannot call a class as a function");var e=(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments);if(!this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:this}return o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t),r(o,[{key:"componentDidMount",value:function(){l.canUseDOM&&(0,s.isTouchDevice)()&&document.addEventListener("touchmove",s.preventTouchMove,s.listenerOptions)}},{key:"componentWillUnmount",value:function(){l.canUseDOM&&(0,s.isTouchDevice)()&&document.removeEventListener("touchmove",s.preventTouchMove,s.listenerOptions)}},{key:"render",value:function(){return i.default.createElement(e,this.props)}}]),o};var a=e.r(6191788),i=(n=a)&&n.__esModule?n:{default:n},l=e.r(5454416),s=e.r(2171742)},1451882,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=e.r(6191788),a=d(r),i=e.r(5454416),l=e.r(740906),s=d(e.r(251239)),c=d(e.r(4328185)),u=e.r(2171742);function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);function t(){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");var e=(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments);if(!this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:this}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),n(t,[{key:"componentDidMount",value:function(){i.canUseDOM&&(this.initialHeight=window.innerHeight)}},{key:"componentWillUnmount",value:function(){var e=window.innerHeight-this.initialHeight;e&&window.scrollTo(0,window.pageYOffset+e),this.initialHeight=window.innerHeight}},{key:"render",value:function(){var e=this.props.children;return e?a.default.createElement(l.TouchScrollable,null,e):null}}]),t}(r.PureComponent),f=(0,u.pipe)(c.default,s.default)(p),h=function(e){return e.isActive?a.default.createElement(f,e):e.children};h.defaultProps={accountForScrollbars:!0,children:null,isActive:!0},o.default=h},5695693,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e.r(1451882);Object.defineProperty(o,"default",{enumerable:!0,get:function(){var e;return((e=n)&&e.__esModule?e:{default:e}).default}});var r=e.r(740906);Object.defineProperty(o,"TouchScrollable",{enumerable:!0,get:function(){return r.TouchScrollable}})},6107961,3381750,e=>{"use strict";var t=e.i(9760814),o=e.i(6191788);function n(e){let{isActive:o,transitionPhase:n,transition:r,mounted:a,unmounted:i}=e;if(o)if("setup"===n)return t.css`
        ${i}
      `;else return t.css`
        ${r}
        ${a}
      `;return"setup"===n?t.css`
        ${a}
      `:t.css`
        ${r}
        ${i}
      `}e.s(["cssForMountTransition",0,n,"useMountTransition",0,function(e){let{isActive:t,animationDuration:n,onAnimationComplete:r}=e,[a,i]=(0,o.useState)("complete"),[l,s]=(0,o.useState)(t),c=(0,o.useRef)(),u=(0,o.useRef)(()=>{i("started")}),d=(0,o.useRef)(),p=(0,o.useRef)(e=>{let{isActive:t,onAnimationComplete:o}=e;i("complete"),t||s(!1),o()});return(0,o.useEffect)(()=>{t&&(i("setup"),s(!0)),l&&!t&&i("setup")},[l,t]),(0,o.useEffect)(()=>{if("setup"===a)return c.current=window.setTimeout(()=>u.current()),()=>window.clearTimeout(c.current)},[a]),(0,o.useEffect)(()=>{if("started"===a)return d.current=window.setTimeout(()=>p.current({isActive:t,onAnimationComplete:r}),n),()=>window.clearTimeout(d.current)},[t,a,r,n]),{isMounted:l,transitionPhase:a}}],3381750);var r=e.i(226931),a=e.i(7249673);let i=t.styled.div.withConfig({componentId:"sc-67abbb5e-0"})`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${r.tokens.constant.blackMuted.default};

  ${e=>{let{$flow:o}=e;return"inline"===o&&t.css`
      position: absolute;
    `}}

  ${e=>{let{$flow:o,$isOpen:r,$transitionPhase:i}=e;return"fullscreen"===o&&!a.IS_HAPPO&&t.css`
      position: fixed;
      will-change: opacity;
      ${n({isActive:r,transitionPhase:i,transition:t.css`
          transition: opacity 300ms ease;
        `,unmounted:t.css`
          opacity: 0;
        `,mounted:t.css`
          opacity: 1;
        `})};
    `}}

  ${e=>{let{$isOpen:o}=e;return o&&a.IS_HAPPO&&t.css`
      position: fixed;
      opacity: 1;
    `}}
`;e.s(["Backdrop",0,i],6107961)},5885741,e=>{e.v({back:"DialogNavigation-module__3yWZmW__back",base:"DialogNavigation-module__3yWZmW__base",close:"DialogNavigation-module__3yWZmW__close",headerScrollableAll:"DialogNavigation-module__3yWZmW__headerScrollableAll",locationTakeover:"DialogNavigation-module__3yWZmW__locationTakeover"})},5483377,e=>{"use strict";var t,o,n=e.i(9391398),r=e.i(5695693),a=e.i(5363035),i=e.i(5030264),l=e.i(6107961),s=e.i(6191788),c=e.i(8155918);(t=o||(o={})).Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Control="Control",t.Alt="Alt",t.CapsLock="CapsLock",t.Escape="Escape",t.Esc="Esc",t.Space=" ",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Left="Left",t.Up="Up",t.Right="Right",t.Down="Down",t.Insert="Insert",t.Delete="Delete",t.Zero="0",t.ClosedParen=")",t.One="1",t.ExclamationMark="!",t.Two="2",t.AtSign="@",t.Three="3",t.PoundSign="£",t.Hash="#",t.Four="4",t.DollarSign="$",t.Five="5",t.PercentSign="%",t.Six="6",t.Caret="^",t.Hat="^",t.Seven="7",t.Ampersand="&",t.Eight="8",t.Star="*",t.Asterisk="*",t.Nine="9",t.OpenParen="(",t.a="a",t.b="b",t.c="c",t.d="d",t.e="e",t.f="f",t.g="g",t.h="h",t.i="i",t.j="j",t.k="k",t.l="l",t.m="m",t.n="n",t.o="o",t.p="p",t.q="q",t.r="r",t.s="s",t.t="t",t.u="u",t.v="v",t.w="w",t.x="x",t.y="y",t.z="z",t.A="A",t.B="B",t.C="C",t.D="D",t.E="E",t.F="F",t.G="G",t.H="H",t.I="I",t.J="J",t.K="K",t.L="L",t.M="M",t.N="N",t.O="O",t.P="P",t.Q="Q",t.R="R",t.S="S",t.T="T",t.U="U",t.V="V",t.W="W",t.X="X",t.Y="Y",t.Z="Z",t.Meta="Meta",t.LeftWindowKey="Meta",t.RightWindowKey="Meta",t.Numpad0="0",t.Numpad1="1",t.Numpad2="2",t.Numpad3="3",t.Numpad4="4",t.Numpad5="5",t.Numpad6="6",t.Numpad7="7",t.Numpad8="8",t.Numpad9="9",t.Multiply="*",t.Add="+",t.Subtract="-",t.DecimalPoint=".",t.MSDecimalPoint="Decimal",t.Divide="/",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.SemiColon=";",t.Equals="=",t.Comma=",",t.Dash="-",t.Period=".",t.UnderScore="_",t.PlusSign="+",t.ForwardSlash="/",t.Tilde="~",t.GraveAccent="`",t.OpenBracket="[",t.ClosedBracket="]",t.Quote="'";var u=e.i(9584833),d=e.i(1245099),p=e.i(4926052),f=e.i(3381750),h=e.i(7249673),g=e.i(3730943);function v(e){let{children:t}=e,[o,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{n(!0)},[]),o?(0,g.createPortal)(t,document.body):null}function m(e){var t,a;let{id:i,isOpen:l,title:g,ariaLabel:m,children:b,flow:y,onCloseRequest:w,onOpenAnimationComplete:$,onCloseAnimationComplete:x}=e,k=e=>t=>{l&&w&&w(t,e)},O=(0,s.useMemo)(()=>i??`modal-${(1e16*Math.random()+1e16).toString(16)}`,[i]);t=o.Escape,a=e=>k("escapeKey")(e),(0,s.useEffect)(()=>{let e=e=>{t===e.key&&a(e)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[a,t]);let{isMounted:_,transitionPhase:j}=(0,f.useMountTransition)({isActive:l,animationDuration:350*!h.IS_HAPPO,onAnimationComplete:()=>l&&$?$():!l&&x?x():void 0});(0,u.useOverlayStack)(O,l);let P=function(){let[e,t]=(0,s.useState)(0),[o,n]=(0,s.useState)(0),r=()=>{t(window.innerWidth),n(window.innerHeight)};return(0,s.useEffect)(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),{width:e,height:o}}(),S=(0,p.useTranslation)("dialog.defaultAriaLabel");if(!_)return null;let T=g?`${O}-title`:void 0,C=`${O}-content`,E={id:O,ariaProps:{role:"dialog","aria-describedby":C,"aria-modal":!0,...g&&!m?{"aria-labelledby":T}:{"aria-label":m??S}},titleId:T,contentId:C,handleClose:k,transitionPhase:j,viewport:P};return"inline"===y?(0,n.jsx)(n.Fragment,{children:b(E)}):(0,n.jsx)(v,{children:(0,n.jsx)(d.PortalPassthrough,{children:(0,n.jsx)(c.default,{returnFocus:!0,children:(0,n.jsx)(r.default,{children:b(E)})})})})}var b=e.i(6112151),y=e.i(2864767),w=e.i(226931),$=e.i(812747),x=e.i(9760814),k=e.i(8981215);let O=x.css`
  --space-vertical: ${w.tokens.space.x16};
  --space-horizontal: ${w.tokens.space.x16};

  @media ${(0,k.mediaForBreakpoint)("sm")} {
    --space-horizontal: ${w.tokens.space.x24};

    ${e=>{let{$scrollable:t}=e;return"all"===t&&x.css`
        --space-vertical: ${w.tokens.space.x24};
      `}}
  }
`,_=x.styled.div.withConfig({componentId:"sc-6d7d080c-0"})`
  ${O};

  min-height: 2rem;
  flex-shrink: 0;

  ${e=>"inner"===e.$scrollable&&x.css`
      min-height: 3.5rem;
      border-bottom: 1px solid ${w.tokens.border.muted.default};
    `}
`;function j(e,t){let{showButton:o,hasAnyButton:n,$scrollable:r,$showMedia:a,$titleAlign:i}=t,l="center"===i&&n||"center"!==i&&o&&!a;return x.css`
    ${e}: ${l?"38px":"0px"};
    @media ${(0,k.mediaForBreakpoint)("sm")} {
      ${e}: ${l?"all"===r?"36px":"28px":"0px"};
    }
  `}let P=x.styled.div.withConfig({componentId:"sc-6d7d080c-1"})`
  ${e=>{let{$showBackButton:t,$showCloseButton:o,$scrollable:n,$showMedia:r,$titleAlign:a}=e;return j("--back-offset",{showButton:t,hasAnyButton:t||o,$scrollable:n,$showMedia:r,$titleAlign:a})}}

  ${e=>{let{$showBackButton:t,$showCloseButton:o,$scrollable:n,$showMedia:r,$titleAlign:a}=e;return j("--close-offset",{showButton:o,hasAnyButton:t||o,$scrollable:n,$showMedia:r,$titleAlign:a})}}

  flex-grow: 1;
  text-align: ${e=>{let{$titleAlign:t}=e;return t}};
  padding: var(--space-vertical) calc(var(--space-horizontal) + var(--close-offset)) var(--space-vertical)
    calc(var(--space-horizontal) + var(--back-offset));

  ${e=>{let{$scrollable:t,$useFullWrapper:o}=e;return!o&&"all"===t&&x.css`
      padding-bottom: 0;
    `}}
`,S=x.css`
  --space-default: ${w.tokens.space.x16};
  --space-responsive: ${w.tokens.space.x16};

  @media ${(0,k.mediaForBreakpoint)("sm")} {
    --space-responsive: ${w.tokens.space.x24};
  }
`,T=x.styled.div.withConfig({componentId:"sc-fd2e66b4-0"})`
  ${S}

  padding: var(--space-default) var(--space-responsive);

  ${e=>"all"===e.$scrollable&&x.css`
      padding: 0 var(--space-responsive) var(--space-responsive) var(--space-responsive);
    `}

  ${e=>"inner"===e.$scrollable&&x.css`
      border-top: 1px solid ${w.tokens.border.muted.default};
      position: relative;
      z-index: 1;
    `}

    ${e=>e.$useFullWrapper&&"all"===e.$scrollable&&x.css`
      padding-top: var(--space-responsive);

      ${_} + & {
        padding-top: 0;
      }
    `}
`,C=x.styled.div.withConfig({componentId:"sc-fd2e66b4-1"})`
  width: 100%;
  order: 0;
  margin-bottom: ${w.tokens.space.x8};

  @media ${(0,k.mediaForBreakpoint)("sm")} {
    order: 4;
    margin-bottom: 0;
  }
`,E=x.styled.div.withConfig({componentId:"sc-fd2e66b4-2"})`
  & > * {
    width: 100%;
  }
`,A=x.styled.div.withConfig({componentId:"sc-fd2e66b4-3"})`
  display: flex;
  flex-flow: column;
  gap: ${w.tokens.space.x8};

  @media ${(0,k.mediaForBreakpoint)("sm")} {
    ${e=>"horizontal"===e.$actionLayout&&x.css`
        flex-flow: row-reverse;
        align-items: center;
        max-width: unset;

        & > ${E} {
          margin-right: auto;
        }
      `}

    ${e=>"vertical"===e.$actionLayout&&x.css`
        width: max-content;
        min-width: 220px;
        margin: auto;
      `}

    ${e=>"vertical-full"===e.$actionLayout&&x.css`
        width: 100%;
      `}
  }
`;function M(e){let{actionLayout:t="horizontal",primaryAction:o,secondaryAction:r,tertiaryAction:a,metaData:i,scrollable:l="all",useFullWrapper:s}=e,c="vertical"===t,u=c&&!!a;return i&&c&&(0,$.default)("metaData is not supported with vertical action layout and will be ignored"),i&&a&&(0,$.default)("metaData is not supported with a tertiaryAction and will be ignored"),(0,n.jsx)(T,{$scrollable:l,$useFullWrapper:s,"data-tag":"dialog-footer",children:(0,n.jsxs)(A,{$actionLayout:t,"data-tag":"dialog-footer-content",children:[i&&!u&&(0,n.jsx)(C,{"data-tag":"dialog-action-meta-data",children:(0,n.jsx)(b.BodyText,{size:"sm",color:w.tokens.content.muted.default,children:i})}),o&&(0,n.jsx)(y.Button,{variant:"primary",fluid:c,"data-tag":"dialog-action-primary",...o,children:o.label}),r&&(0,n.jsx)(y.Button,{variant:"secondary",fluid:c,"data-tag":"dialog-action-secondary",...r,children:r.label}),a&&(0,n.jsx)(E,{children:(0,n.jsx)(y.Button,{variant:"tertiary",fluid:c,"data-tag":"dialog-action-tertiary",...a,children:a.label})})]})})}var D=e.i(6272043),F=e.i(6305112),B=e.i(1968870),L=e.i(5885741);function H(e){let{onBackRequest:t,handleClose:o,showCloseButton:r=!0,scrollable:a="all",location:i="default",buttonProps:l}=e,c=(0,p.useTranslation)("dialog.closeButton"),u=(0,p.useTranslation)("dialog.backButton"),d=(0,s.useRef)(0),f=(0,D.default)(L.default.base,"takeover"===i&&L.default.locationTakeover,"header"===i&&"all"===a&&L.default.headerScrollableAll);return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("div",{className:(0,D.default)(f,L.default.close),children:(0,n.jsx)(y.Button,{variant:"tertiary",corners:"pill",unfilled:!0,icon:B.IconClose,onClick:o("closeButton"),"data-tag":"dialog-close-icon","aria-label":c,...l},d.current)}),!!t&&(0,n.jsx)("div",{className:(0,D.default)(f,L.default.back),children:(0,n.jsx)(y.Button,{variant:"tertiary",corners:"pill",unfilled:!0,icon:F.IconChevronLeft,onClick:e=>{d.current++,t&&t(e)},"data-tag":"dialog-back-icon","aria-label":u,...l})})]})}function U(e){let{title:t,titleAlign:o="left",titleId:r,media:i,onBackRequest:l,handleClose:s,showCloseButton:c=!0,scrollable:u="all",useFullWrapper:d}=e,p="string"==typeof t?(0,n.jsx)(a.HeadingText,{as:"h2",children:t}):t,f=!!i;return(0,n.jsxs)(_,{$scrollable:u,"data-tag":"dialog-header",children:[(0,n.jsx)(H,{onBackRequest:l,handleClose:s,showCloseButton:c,scrollable:u,location:"header",buttonProps:{variant:f?"floating":"tertiary",unfilled:!f}}),i,p&&(0,n.jsx)(P,{id:r,$scrollable:u,$useFullWrapper:d,$showBackButton:!!l,$showCloseButton:!!s&&c,$showMedia:f,$titleAlign:o,children:p})]})}let I=()=>(0,k.mediaForBreakpoint)("sm"),W=x.css`
  --dialog-transition: 350ms ease;
  --dialog-margin: ${w.tokens.space.x24};
  --dialog-maxHeight: calc(var(--viewport-height, 100vh) - ${w.tokens.space.x24});
  --dialog-width-sm: 440px;
  --dialog-width-lg: 600px;
  --dialog-width-xl: 800px;
  --dialog-gap: ${w.tokens.space.x8};
  --dialog-space-sm: ${w.tokens.space.x16};
  --dialog-space-lg: ${w.tokens.space.x24};
  --dialog-space-responsive: ${w.tokens.space.x16};
  --dialog-action-offset-responsive: ${w.tokens.space.x8};
  --dialog-action-offset-default: ${w.tokens.space.x8};
  --dialog-container-radius: ${w.tokens.radius.lg} ${w.tokens.radius.lg} 0 0;
  --dialog-container: ${w.tokens.bg.elevated.default};
  --dialog-cover: ${w.tokens.constant.blackMuted.default};
  --dialog-divider: ${w.tokens.border.muted.default};
  --dialog-shadow: ${w.tokens.boxShadow.high};

  @media ${I} {
    --dialog-maxHeight: calc(var(--viewport-height, 100vh) - ${w.tokens.space.x48});
    --dialog-space-responsive: ${w.tokens.space.x24};
    --dialog-action-offset-responsive: ${w.tokens.space.x16};
    --dialog-container-radius: ${w.tokens.radius.lg};
  }
`,N=x.styled.div.withConfig({componentId:"sc-a4c4d862-0"})`
  ${W}

  --viewport-height: ${e=>e.$viewportHeight}px;

  ${e=>"fullscreen"===e.$flow&&x.css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      isolation: isolate;
      z-index: ${w.tokens.layer.z12};
    `}

  ${e=>"all"===e.$scrollable&&e.$isOpen&&"complete"===e.$transitionPhase&&x.css`
      overflow: auto;
      overscroll-behavior: none;
      -webkit-overflow-scrolling: touch;
    `}
`,R=x.styled.div.withConfig({componentId:"sc-a4c4d862-1"})`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  padding: var(--dialog-margin) 0 0 0;

  @media ${I} {
    align-items: center;
    padding: var(--dialog-margin);
  }

  ${e=>"fullscreen"===e.$flow&&x.css`
      min-height: var(--dialog-maxHeight);
    `}

  ${e=>"inner"===e.$scrollable&&x.css`
      z-index: 2;
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      -webkit-overflow-scrolling: touch;

      @media ${I} {
        top: 0;
      }
    `}
`,z=x.styled.div.withConfig({componentId:"sc-a4c4d862-2"})`
  position: relative;
  z-index: 2;
  background-color: var(--dialog-container);
  border-radius: var(--dialog-container-radius);
  box-shadow: var(--dialog-shadow);
  overflow: hidden;
  width: 100%;
  pointer-events: auto;
  will-change: transform, opacity;

  ${e=>"fullscreen"===e.$flow&&!h.IS_HAPPO&&(0,f.cssForMountTransition)({isActive:e.$isOpen,transitionPhase:e.$transitionPhase,transition:x.css`
        transition: var(--dialog-transition);
        transition-property: opacity, transform;
      `,unmounted:x.css`
        transform: translateY(100%);

        @media ${I} {
          transform: translateY(2rem);
          opacity: 0;
        }
      `,mounted:x.css`
        transform: translateY(0rem);

        @media ${I} {
          opacity: 1;
        }
      `})}

  ${e=>"inner"===e.$scrollable&&x.css`
      display: flex;
      flex-flow: column;
      max-height: var(--dialog-maxHeight);
    `}

  ${e=>e.$size?x.css`
          @media ${I} {
            max-width: ${`var(--dialog-width-${e.$size})`};
          }
        `:null}
`,Z=x.styled.div.withConfig({componentId:"sc-a4c4d862-3"})`
  position: relative;
  flex: 1 1 auto;

  ${e=>"inner"===e.$scrollable&&x.css`
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    `}
`,K=x.styled.div.withConfig({componentId:"sc-a4c4d862-4"})`
  ${e=>"default"===e.$padding&&x.css`
      padding: var(--dialog-space-lg) var(--dialog-space-responsive);
    `}
`,q=x.styled.div.withConfig({componentId:"sc-a4c4d862-5"})`
  padding: var(--dialog-space-lg) var(--dialog-space-responsive);
`;function Y(e){let{children:t,id:o,isOpen:a,onCloseRequest:s,onBackRequest:c,onOpenAnimationComplete:u,onCloseAnimationComplete:d,size:p="lg",padding:f="default",scrollable:h="all",media:g,title:v,titleAlign:b="left",ariaLabel:y,showCloseButton:w,primaryAction:$,secondaryAction:x,tertiaryAction:k,actionLayout:O="horizontal",metaData:_,loggerId:j,loggerProps:P,"data-tag":S,flow:T="fullscreen"}=e,C=(0,i.useLogger)(),E=g||v,A=$||x||k,D="all"===h&&!t;return(0,n.jsx)(m,{id:o,isOpen:a,title:v,ariaLabel:y,flow:T,onCloseRequest:s,onOpenAnimationComplete:()=>{C("dialogOpen",j,P),u?.()},onCloseAnimationComplete:()=>{C("dialogClose",j,P),d?.()},children:e=>{let{id:o,ariaProps:i,titleId:s,contentId:u,handleClose:d,transitionPhase:m,viewport:y}=e,j=(0,n.jsxs)(Z,{id:u,$scrollable:h,children:[!E&&(0,n.jsx)(H,{onBackRequest:c,handleClose:d,showCloseButton:w,scrollable:h}),(0,n.jsx)(K,{$padding:f,"data-tag":"dialog-body-area",children:t})]});return(0,n.jsxs)(N,{id:o,tabIndex:0,"data-tag":S,$isOpen:a,$transitionPhase:m,$viewportHeight:y.height,$scrollable:h,$flow:T,...i,children:[(0,n.jsx)(l.Backdrop,{$isOpen:a,$transitionPhase:m,$flow:T,onClick:d("backdrop"),"data-tag":"dialog-cover"}),(0,n.jsx)(R,{$scrollable:h,$flow:T,children:(0,n.jsxs)(z,{$isOpen:a,$size:p,$scrollable:h,$transitionPhase:m,$flow:T,"data-tag":"dialog-container",children:[E&&(0,n.jsx)(U,{title:v,titleAlign:b,titleId:s,media:g,onBackRequest:c,handleClose:d,showCloseButton:w,scrollable:h,useFullWrapper:D}),!!t&&("all"===h?j:(0,n.jsx)(r.TouchScrollable,{"data-tag":"dialog-touch-container",children:j})),A&&(0,n.jsx)(M,{metaData:_,actionLayout:O,primaryAction:$,secondaryAction:x,tertiaryAction:k,scrollable:h,useFullWrapper:D})]})})]})}})}Y.Title=a.HeadingText,Y.Content=q,e.s(["Dialog",0,Y],5483377)}]);

//# debugId=9f8fe821-cdaf-0fbd-e309-c0693515c339
//# sourceMappingURL=16fzvn_2nw6w9.js.map
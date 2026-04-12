;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b62fdd2b-6eb3-d87f-659d-e800b123ffd1")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,602493,e=>{"use strict";var t,n,i=((t={}).EVERYONE="everyone",t.ALL="all",t.PAID_MEMBERS="paid_members",t.NONE="none",t),o=((n={}).COMMENTS_DISABLED="comments_disabled",n.ENTITLEMENT_REQUIRED="entitlement_required",n.PAID_ENTITLEMENT_REQUIRED="paid_entitlement_required",n.NEEDS_EMAIL_VERIFICATION="needs_email_verification",n.RATE_LIMITED="rate_limited",n.HIGH_RISK_SCORE="high_risk_account",n.OTHER="other",n);e.s(["CampaignLevelCommentingAccess",()=>i,"PostCommentDisallowedReason",()=>o])},3828081,(e,t,n)=>{t.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},9943906,(e,t,n)=>{var i=e.r(1849057);t.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,r=e==e,s=i(e),a=void 0!==t,d=null===t,l=t==t,m=i(t);if(!d&&!m&&!s&&e>t||s&&a&&l&&!d&&!m||o&&a&&l||!n&&l||!r)return 1;if(!o&&!s&&!m&&e<t||m&&n&&r&&!o&&!s||d&&n&&r||!a&&r||!l)return -1}return 0}},5519004,(e,t,n)=>{var i=e.r(9943906);t.exports=function(e,t,n){for(var o=-1,r=e.criteria,s=t.criteria,a=r.length,d=n.length;++o<a;){var l=i(r[o],s[o]);if(l){if(o>=d)return l;return l*("desc"==n[o]?-1:1)}}return e.index-t.index}},2931952,(e,t,n)=>{var i=e.r(8648346),o=e.r(4928267),r=e.r(9305792),s=e.r(3171239),a=e.r(3828081),d=e.r(6963115),l=e.r(5519004),m=e.r(4625975),c=e.r(2448684);t.exports=function(e,t,n){t=t.length?i(t,function(e){return c(e)?function(t){return o(t,1===e.length?e[0]:e)}:e}):[m];var p=-1;return t=i(t,d(r)),a(s(e,function(e,n,o){return{criteria:i(t,function(t){return t(e)}),index:++p,value:e}}),function(e,t){return l(e,t,n)})}},2993993,(e,t,n)=>{var i=e.r(2931952),o=e.r(2448684);t.exports=function(e,t,n,r){return null==e?[]:(o(t)||(t=null==t?[]:[t]),o(n=r?void 0:n)||(n=null==n?[]:[n]),i(e,t,n))}},2437994,(e,t,n)=>{var i=e.r(9305792),o=e.r(3681708);t.exports=function(e,t){return e&&e.length?o(e,i(t,2)):[]}},1412635,(e,t,n)=>{var i=e.r(4885049);t.exports=function(e,t){var n=[];return i(e,function(e,i,o){t(e,i,o)&&n.push(e)}),n}},7511649,(e,t,n)=>{var i=e.r(1856408),o=e.r(1412635),r=e.r(9305792),s=e.r(2448684);t.exports=function(e,t){return(s(e)?i:o)(e,r(t,3))}},3624039,(e,t,n)=>{var i=e.r(4367509),o=e.r(9510228),r=e.r(7021838),s=e.r(6444351),a=e.r(2448684),d=e.r(4376109);t.exports=function(e){return o(function(t){var n=t.length,o=n,l=i.prototype.thru;for(e&&t.reverse();o--;){var m=t[o];if("function"!=typeof m)throw TypeError("Expected a function");if(l&&!c&&"wrapper"==s(m))var c=new i([],!0)}for(o=c?o:n;++o<n;){var p=s(m=t[o]),u="wrapper"==p?r(m):void 0;c=u&&d(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[s(u[0])].apply(c,u[3]):1==m.length&&d(m)?c[p]():c.thru(m)}return function(){var e=arguments,i=e[0];if(c&&1==e.length&&a(i))return c.plant(i).value();for(var o=0,r=n?t[o].apply(this,e):i;++o<n;)r=t[o].call(this,r);return r}})}},2407571,(e,t,n)=>{t.exports=e.r(3624039)()},8967275,6881187,7633535,721628,1653661,e=>{"use strict";var t=e.i(8683249);e.s(["logCommentAddEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Add",e)}],8967275),e.s(["logCommentDeleteEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Delete",e)}],6881187),e.s(["logCommentEditEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Edit",e)}],7633535),e.s(["logCommentVoteEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Vote",e)}],721628),e.s(["isOptimisticId",0,e=>!!e&&e.startsWith("opt_"),"optimisticId",0,function(){return"opt_"+Math.random().toString(16).slice(2)}],1653661)},3074782,e=>{"use strict";var t=e.i(7511649),n=e.i(528333),i=e.i(6191788),o=e.i(6018844);let r=e=>(0,o.buildUrl)(`/comments/${e}/replies2`,{include:["commenter.campaign","commenter_identity","commenter_identity.avatar","commenter_identity.community_profile","commenter_identity.identity_badges","parent","post","on_behalf_of_campaign"],fields:{campaign:[""],comment:["body","created","deleted_at","is_by_patron","is_by_creator","is_liked_by_creator","vote_sum","current_user_vote","visibility_state","moderation_status"],"display-identity":["name","link_url"],"primary-image":["image_icon"],"identity-badge":["badge_type"],post:["comment_count"],user:["image_url","full_name","url"]}});e.s(["getCommentRepliesUrl",0,r,"useCommentReplies",0,e=>{let[o,s]=(0,i.useState)({}),a=async i=>{s({...o,[i]:!0}),await e.get({endpoint:r(i)},{append:!0});let a=(0,t.default)(Object.entries(o),e=>{let[t]=e;return t!==i});s((0,n.default)(a))};return{repliesLoading:o,onLoadReplies:a}}])},4492704,e=>{"use strict";var t=e.i(8205331),n=e.i(2407571),i=e.i(2993993),o=e.i(2437994),r=e.i(6191788),s=e.i(8967275),a=e.i(6881187),d=e.i(7633535),l=e.i(721628);e.i(4014511);var m=e.i(1217396),c=e.i(7680435),p=e.i(6060507),u=e.i(1653661),h=e.i(6018844),g=e.i(8619454),f=e.i(3074782);let x=["parent","post","on_behalf_of_campaign.null","commenter_identity","commenter_identity.avatar","commenter_identity.community_profile","commenter_identity.identity_badges","commenter.campaign.null","first_reply.commenter.campaign.null","first_reply.commenter_identity","first_reply.commenter_identity.avatar","first_reply.commenter_identity.community_profile","first_reply.commenter_identity.identity_badges","first_reply.parent","first_reply.post","first_reply.on_behalf_of_campaign.null"],C={campaign:[],comment:["body","created","deleted_at","is_by_patron","is_by_creator","is_liked_by_creator","vote_sum","current_user_vote","reply_count","visibility_state","moderation_status"],"display-identity":["name","link_url"],"primary-image":["image_icon"],"identity-badge":["badge_type"],post:["comment_count","current_user_can_comment","url"],post_tag:["tag_type","value"],user:["image_url","full_name","url"]},y=[...C.comment,"is_replied_to_by_creator"],v=[...C.post,"title"],w={...C,comment:y,post:v},_=[...x,"post.campaign","post.user"],k="DELETE_COMMENT_SUCCESS",b=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i={count:n};return t&&(i.cursor=t),(0,h.buildUrl)(e,{include:x,fields:C,page:i,sort:"-created"})};e.s(["DELETE_COMMENT_SUCCESS_CODE_NAME",0,k,"NOTIF_COMMENT_MODAL_FIELDS",0,w,"NOTIF_COMMENT_MODAL_INCLUDES",0,_,"usePostComments",0,(e,y,v,w,_)=>{let{recordCsatEvent:j}=(0,m.useCustomerSatisfactionTracker)(),I=(0,c.useCurrentUser)(),{id:S,campaign:T,currentUserCanView:E,commentCount:L=0,parentHighlightPost:$,wasPostedByCampaignOwner:D}=y,R=`/posts/${S}/comments2`,P=(0,r.useMemo)(()=>v,[v]),B=!!(E&&L&&!P?.length),N=_&&B,M=!_&&B,O=(0,r.useMemo)(()=>({dataKey:`post-${S}-comments`,endpoint:b(R,null,2),fetchOnMount:M}),[M,R,S]),A=(0,r.useMemo)(()=>({dataKey:`post-${S}-comments-load-more`,endpoint:b(R,null),fetchOnMount:N}),[N,R,S]),[U,,,z]=(0,t.useNion)(O),[F,H,,V]=(0,t.useNion)(A),[W,K]=(0,t.useNion)(`post-${S}-replies`),q=(U||[]).concat(F??[]),G=(0,r.useMemo)(()=>[...q||[],...W||[]],[q,W]),Q=(0,r.useMemo)(()=>`post-${S}-comment-actions`,[S]),[,Y,J]=(0,t.useNion)(Q),[X,Z]=(0,r.useState)([]),[ee,et]=(0,r.useState)(!1),[en,ei]=(0,r.useState)(void 0),{repliesLoading:eo,onLoadReplies:er}=(0,f.useCommentReplies)(K),es=e?.id===I?.campaign?.id,ea=V?.meta?.pagination?.cursors?!!V.meta.pagination.cursors.next:z?.meta?.pagination?.cursors?!!z.meta.pagination.cursors.next:void 0;(0,r.useEffect)(()=>{if(J.isLoading)return;let e=J?.errors?.[0]?.name;ei(J?.isError&&!e?"JsonApiError":e)},[J,ei]);let ed=(0,r.useMemo)(()=>{var e;let t=[...P];return e=t=G&&t?t.concat([...G]):t,(0,n.default)([(e,t)=>[...e,...t],e=>(0,i.default)(e,["created"],["desc"]),e=>(0,o.default)(e,"id")])(e,X)},[P,G,X]),el=async(t,n)=>{let i=new g.JsonApiPayload("comment",{body:t});(0,d.logCommentEditEvent)({campaign_id:e?.id,content_type:"post",is_owner:es,post_id:S,post_source:w,comment_id:n,post_origin:D?"creator":"community",highlight_parent_id:$?.id}),await Y.updateEntity({type:"comment",id:n},{body:t});let o=X.find(e=>e.id===n),r=[...X];o&&Z(X.map(e=>e.id===n?{...o,body:t}:e));try{ei(void 0),await Y.patch(i.toRequest(),{endpoint:(0,h.buildUrl)(`/comments/${n}`,{include:x,fields:C})})}catch{o&&Z(r);let e=ed.find(e=>e.id===n);e&&await Y.updateEntity({type:"comment",id:n},{body:e.body})}};return{commentThread:ed,threadLoading:ee,onLoadMoreComments:async()=>{let e=V?.meta?.pagination?.cursors?.next;et(!0),await H.get({endpoint:b(R,e)},{append:!0}),et(!1)},onLikeCommentClick:async(t,n)=>{let i=n?"0":"1",o=new g.JsonApiPayload("comment-vote",{vote:i});o.addRelationship("comment",t),(0,l.logCommentVoteEvent)({campaign_id:e?.id,content_type:"post",is_owner:es,post_id:S,post_source:w,comment_id:t,current_user_pledge_cents:T?.currentUserPledge?.amountCents??0,vote:i,highlight_parent_id:$?.id}),await Y.post(o.toRequest(),{endpoint:(0,h.buildUrl)(`/comments/${t}/votes`,{include:x,fields:C})})},onDeleteComment:async t=>{if(window.confirm("Are you sure you want to delete this comment?")){(0,a.logCommentDeleteEvent)({campaign_id:e?.id,content_type:"post",is_owner:es,post_id:S,post_source:w,comment_id:t,post_origin:D?"creator":"community",highlight_parent_id:$?.id}),ei(void 0),await Y.updateEntity({type:"post",id:S},{commentCount:L-1});let n=X.find(e=>e.id===t),i=[...X];n?Z(X.map(e=>e.id===t?{...n,deletedAt:new Date().toISOString()}:e)):await Y.updateEntity({type:"comment",id:t},{deletedAt:new Date().toISOString()});try{await Y.delete({endpoint:(0,h.buildUrl)(`/comments/${t}`)}),ei(k)}catch{await Y.updateEntity({type:"post",id:S},{commentCount:L+1}),n?Z(i):await Y.updateEntity({type:"comment",id:t},{deletedAt:void 0})}}},onEditComment:el,onPostComment:async(t,n)=>{let i=new g.JsonApiPayload("comment",{body:t});i.addRelationship("post",S),i.addRelationship("commenter",{type:"user",id:I?.id});let o={fullName:I?.fullName,id:I?.id||"",imageUrl:I?.imageUrl},r=new Date().toISOString(),a={body:t,id:(0,u.optimisticId)(),created:r,commenter:o,parent:n?{id:n}:void 0,replies:[]};I?.campaign?.id===e?.id&&a.commenter&&(a.commenter.campaign=e??void 0,a.onBehalfOfCampaign=e??void 0),n&&i.addRelationship("parent",{type:"comment",id:n}),Z([...X,a]),ei(void 0);try{let t=await Y.post(i.toRequest(),{endpoint:(0,h.buildUrl)("/comments",{include:x,fields:C})}),o={...a,id:t.id,commenterIdentity:t.commenterIdentity};return Z([...X,o]),(0,s.logCommentAddEvent)({campaign_id:e?.id,content_type:"post",is_owner:es,post_id:S,post_source:w,comment_id:t.id,current_user_pledge_cents:T?.currentUserPledge?.amountCents??0,post_origin:D?"creator":"community",is_reply:!!n,parent_id:n,thread_id:n,highlight_parent_id:$?.id}),j("post_comment_sent"),o}catch{Z(e=>e.filter(e=>e.id!==a.id))}return null},onLoadReplies:er,repliesLoading:eo,canLoadMoreComments:ea,commentResponseCodeName:en,isOwner:es,onCreatorHideComment:async e=>{await Y.patch({},{endpoint:(0,h.buildUrl)(`/comment/${e}/hide`,{})});let t=X.find(t=>t.id===e);t?Z(X.map(n=>n.id===e?{...t,moderationStatus:p.CommentModerationStatus.HiddenByCreator}:n)):await Y.updateEntity({type:"comment",id:e},{moderationStatus:p.CommentModerationStatus.HiddenByCreator,visibilityState:p.CommentVisibilityState.HIDDEN})}}}])},3413343,7743326,9849944,1283582,2917781,e=>{"use strict";var t=e.i(8683249);e.s(["logCommentRedirect",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Redirect To ID",e)}],3413343),e.s(["logCommentScroll",0,function(e){t.patreonTrackerClient.logTypedEvent("Comment : Scroll To ID",e)}],7743326),e.s(["logInteractionViewedCommentsEvent",0,function(e){t.patreonTrackerClient.logTypedEvent("Interaction : Viewed Comments",e)}],9849944);var n=e.i(9391398),i=e.i(226931),o=e.i(6191788),r=e.i(9760814);let s=r.styled.div.withConfig({componentId:"sc-7ca0af08-0"})`
  position: fixed;
  left: 0;
  bottom: 0;
  border-bottom: 0;

  padding: ${i.tokens.space.x16};
  background-color: ${i.tokens.bg.base.default};
  border-top: ${i.tokens.borderWidth.thin} solid ${i.tokens.border.muted.default};
`;e.s(["FixedResizingBottomBar",0,function(e){let{children:t,isCreatorWorldHome:i=!1}=e,[r,a]=(0,o.useState)({width:0,left:0}),d=(0,o.useRef)(null),[l,m]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=()=>{if(!d.current||!d.current.parentElement)return;let e=d.current.parentElement.getBoundingClientRect(),t=e.left;a({width:e.width,left:t}),m(window.innerWidth<587)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let c={width:l?r.width:r.width+16,left:i?0:r.left-(l?16:24)};return(0,n.jsx)(s,{style:c,ref:d,children:t})}],1283582),e.s(["fillRange",0,function(e){return[...Array(Math.abs(e)).keys()]}],2917781)},509267,e=>{e.v({avatarContainer:"CommentAvatar-module__CuvUTG__avatarContainer"})},5606963,e=>{e.v({impressionsWrapper:"CommentThread-module__Vso_bG__impressionsWrapper"})},870747,3633429,e=>{"use strict";var t,n=e.i(9391398),i=e.i(2358280),o=e.i(8205331),r=e.i(6112151),s=e.i(5363035),a=e.i(4228312),d=e.i(7342776),l=e.i(1108816),m=e.i(8981215),c=e.i(226931),p=e.i(9088338),u=e.i(6191788),h=e.i(9760814),g=e.i(5028501),f=e.i(3413343),x=e.i(7743326),C=e.i(9849944),y=e.i(2550472),v=e.i(4853452),w=e.i(1283582),_=e.i(9086540),k=e.i(602493),b=e.i(47401),j=e.i(4066068),I=e.i(1163396),S=e.i(7447196),T=e.i(2880842),E=e.i(2917781),L=e.i(3074782),$=e.i(8502814),D=e.i(7864397),R=e.i(1147204),P=e.i(4492704),B=e.i(6018844),N=e.i(7055533),M=e.i(2859206),O=e.i(6060507),A=e.i(1653661),U=e.i(9123949),z=e.i(3492246),F=e.i(2925392);let H=h.styled.div.withConfig({componentId:"sc-64f80d01-0"})`
  ${e=>e.$isOptimistic?"opacity: 0.5;":""}
  width: 100%;

  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
`,V=h.styled.div.withConfig({componentId:"sc-64f80d01-1"})`
  width: fit-content;
  min-width: 0;
`,W=h.styled.div.withConfig({componentId:"sc-64f80d01-2"})`
  background-color: ${c.tokens.bg.page.default};
  border-radius: 20px;
  padding: ${c.tokens.space.x12} ${c.tokens.space.x16} ${c.tokens.space.x12} ${c.tokens.space.x16};
  margin-bottom: ${c.tokens.space.x8};
  transition: background-color 0.5s ease-in-out;

  &.highlighted {
    background-color: ${c.tokens.bg.base.hover};
  }
`,K=h.styled.div.withConfig({componentId:"sc-64f80d01-3"})`
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 6px;
`,q=h.styled.div.withConfig({componentId:"sc-64f80d01-4"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;

  & button {
    text-align: start;
  }
`,G=h.css`
  background-color: ${c.tokens.bg.baseAlt.default};
`,Q=h.styled.div.withConfig({componentId:"sc-64f80d01-5"})`
  ${G}
  border-radius: ${c.tokens.radius.circle};
  height: 40px;
  width: 40px;
  min-width: 40px;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 ${c.tokens.borderWidth.thin} ${c.tokens.border.muted.default};
  margin-right: ${c.tokens.space.x8};
`,Y=h.styled.div.withConfig({componentId:"sc-64f80d01-6"})`
  ${G}
  width: 30%;
  height: 1em;
  margin-bottom: 1em;
`,J=h.styled.div.withConfig({componentId:"sc-64f80d01-7"})`
  color: ${e=>e.deleted?c.tokens.content.muted.default:c.tokens.content.regular.default};
  padding-top: 2px;
  white-space: pre-wrap;
  word-break: break-word;

  a {
    color: ${c.tokens.content.primary.default};
    ${(0,F.cssForBodyText)({size:"md",weight:"bold"})};
  }
`,X=h.styled.div.withConfig({componentId:"sc-64f80d01-8"})`
  &:not(:last-child) {
    margin-right: ${c.tokens.space.x16};
  }
`,Z=h.styled.div.withConfig({componentId:"sc-64f80d01-9"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
  height: 20px;
  padding-left: ${c.tokens.space.x12};
  padding-right: ${c.tokens.space.x12};
`,ee=h.styled.div.withConfig({componentId:"sc-64f80d01-10"})`
  flex-basis: auto;
  flex-grow: 0;
  white-space: nowrap;
`,et=h.styled.div.withConfig({componentId:"sc-64f80d01-11"})`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: ${c.tokens.space.x8};
  ${e=>e.$bodyVisible?`margin-top: ${c.tokens.space.x4};`:""}
  gap: ${c.tokens.space.x8};
  align-self: stretch;
  justify-content: space-between;
  border-radius: ${c.tokens.radius.md};
  background: ${c.tokens.primary.surfaceSubtle.default};

  @media ${(0,m.mediaForBreakpoint)("sm")} {
    flex-direction: row;
    align-items: center;
  }
`,en=h.styled.div.withConfig({componentId:"sc-64f80d01-12"})`
  display: inline-flex;
  width: 100%;
  align-items: start;
  gap: ${c.tokens.space.x8};

  > p {
    flex-grow: 1;
    order: -1;
  }

  @media ${(0,m.mediaForBreakpoint)("sm")} {
    width: auto;
    align-items: center;

    > p {
      order: 1;
    }
  }
`,ei=h.styled.div.withConfig({componentId:"sc-64f80d01-13"})`
  display: flex;
  gap: ${c.tokens.space.x8};
  width: 100%;
  align-self: center;
  text-wrap: nowrap;
  order: 3;

  @media ${(0,m.mediaForBreakpoint)("sm")} {
    width: auto;
  }
`,eo=(0,h.styled)(z.IconMore).withConfig({componentId:"sc-64f80d01-14"})`
  &&& {
    color: ${c.tokens.content.muted.default};
  }
`;var er=e.i(7976293),es=e.i(8534334),ea=e.i(9449231),ed=e.i(6803810),el=e.i(3002033);let em=e=>{let{campaignName:t,campaignAvatarPhotoUrl:o}=e,{i18n:r}=(0,i.useLingui)(),s=(0,ed.useIsMobile)(),[a,d]=(0,u.useState)(!1);return(0,n.jsx)(el.TooltipShim,{loggerId:"CommentCreatorEndorsement-Tooltip",textContent:r._({id:"Rin5cn",message:"Liked by {campaignName}",values:{campaignName:t}}),preferredPlacement:s?"bottom":"right",children:(0,n.jsxs)(ep,{"data-tag":"endorsement-wrapper",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,n.jsx)(ec,{"data-tag":"endorsement-avatar-shadow",showAvatarShadow:a}),(0,n.jsx)(es.Avatar,{size:"18px",src:o}),(0,n.jsx)(eu,{children:(0,n.jsx)(ea.IconHeart,{size:"10px",color:c.tokens.content.primary.default})})]})})},ec=h.styled.div.withConfig({componentId:"sc-1ba5beca-0"})`
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: ${c.tokens.primary.surfaceMuted.hover};
  opacity: ${e=>+!!e.showAvatarShadow};
  transition: opacity 100ms cubic-bezier(0.17, 0.17, 0, 1);
`,ep=h.styled.div.withConfig({componentId:"sc-1ba5beca-1"})`
  position: relative;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`,eu=h.styled.div.withConfig({componentId:"sc-1ba5beca-2"})`
  position: absolute;
  border-radius: 50%;
  background-color: ${c.tokens.bg.elevated.default};
  bottom: -2px;
  right: -2px;
  height: 14px;
  width: 14px;
  box-shadow: ${c.tokens.boxShadow.low};
  display: flex;
  justify-content: center;
  align-items: center;
`;var eh=e.i(1436248),eg=e.i(9916330);function ef(e){let{comment:t,campaign:o,currentUserIsCampaignOwner:r,isSuspendedPostLockedForEditing:s,shouldShowCreatorTombstone:a,shouldShowAsDeleted:d,showSeeReplies:m,onReplyClick:c,onLikeClick:p,variant:h}=e,{i18n:g}=(0,i.useLingui)(),[f,x]=(0,u.useState)(t?.isLikedByCreator);if(s||!t||a||d)return null;let C=!!t?.replyCount&&t.replyCount>0;return(0,n.jsx)(Z,{"data-tag":"comment-actions",children:(0,n.jsxs)(l.Stack,{flexWrap:"nowrap",flexDirection:"row",alignItems:"center",children:[(0,n.jsx)(eC,{comment:t,currentUserIsCampaignOwner:r,onLikeClick:p,likeCount:t.voteSum,currentUserHasLiked:!!t.currentUserVote,optimisticIsLikedByCreator:f,setOptimisticIsLikedByCreator:x}),(0,n.jsx)(ex,{comment:t,label:g._({id:"f48ze/",message:"Reply to comment"}),onReplyClick:c}),"minimal"===h&&(C||m)&&(0,n.jsx)(ey,{comment:t}),f&&o?(0,n.jsx)("div",{"data-tag":"creator-endorsement-component",children:(0,n.jsx)(em,{campaignName:o.name,campaignAvatarPhotoUrl:o.avatarPhotoImageUrls?.thumbnail})}):null]})})}function ex(e){let{comment:t,label:i,onReplyClick:o}=e,r=t?.replyCount;return(0,n.jsx)(X,{children:(0,n.jsxs)(_.TextLinkShim,{loggerId:"comment-action-button",variant:"muted",weight:"normal",decoration:"none","aria-label":i,onClick:()=>{if(!t)throw Error("CommentComponent: Reply clicked on empty or placeholder comment");o(t.id)},children:[(0,n.jsx)(er.IconReply,{size:"20px",title:i}),r&&0!==r?(0,n.jsx)("span",{children:(0,n.jsx)(eg.Decimal,{value:r})}):null]})})}function eC(e){let{comment:t,currentUserIsCampaignOwner:o,onLikeClick:r,likeCount:s,currentUserHasLiked:a,optimisticIsLikedByCreator:d,setOptimisticIsLikedByCreator:l}=e,{i18n:m}=(0,i.useLingui)();return(0,u.useEffect)(()=>{t?.isLikedByCreator!==d&&l(t?.isLikedByCreator)},[t?.isLikedByCreator]),(0,n.jsx)(X,{children:(0,n.jsx)(eh.LikesCounter,{isCommentLikeIcon:!0,likeCount:s||0,currentUserHasLiked:a,loading:!1,onLikeClick:e=>{if(!t)throw Error("CommentComponent: Like clicked on empty or placeholder comment");r(t.id,e),o&&(null===d?l(!t.currentUserVote):l(!d))},likedName:m._({id:"0O2Wd1",message:"comment"})})})}function ey(e){let{comment:t}=e,{i18n:o}=(0,i.useLingui)(),r=`${t?.post?.url}?scrollTo=comment`;return(0,n.jsx)(X,{children:(0,n.jsx)(_.TextLinkShim,{href:r,target:"_blank",loggerId:"comment-action-button",variant:"muted",decoration:"none","aria-label":o._({id:"pF6yIs",message:"See replies to comment"}),children:(0,n.jsx)(i.Trans,{id:"pBO54u",message:"See replies",context:"Text for CTA button to see replies for comment"})})})}var ev=e.i(3512905),ew=e.i(829490);function e_(e){let{comment:t,isOptimistic:n,postNewCommentIdentity:i}=e,o=n?i:t?.commenterIdentity,r=o?.communityProfile!==null;return{name:o?.name,avatarUrl:o?.avatar?.imageIcon,url:o?.linkUrl,identityBadges:o?.identityBadges??[],communityProfileId:o?.communityProfile?.id,canViewPopover:r}}var ek=e.i(1967147),eb=e.i(7172197),ej=e.i(909648),eI=e.i(1504666);function eS(e){let{communityProfileId:t,sourceType:i,sourceId:o,children:r}=e;return t?(0,n.jsx)(eT,{communityProfileId:t,sourceType:i,sourceId:o,children:r}):(0,n.jsx)(n.Fragment,{children:r})}function eT(e){let{communityProfileId:t,sourceType:o,sourceId:r,children:s}=e,{i18n:a}=(0,i.useLingui)(),[d,l]=(0,u.useState)(),{reloadProfile:m}=(0,eI.useCommunityProfile)({communityProfileId:t,setCommunityProfile:l});return(0,n.jsxs)(eb.OverlayTriggerToggle,{preferredPlacement:"top-start",preset:"popover","aria-label":a._({id:"P1YADf",message:"community profile popup"}),loggerId:"community-profile-popup","data-tag":"community-profile-popup",children:[u.default.isValidElement(s)?(0,n.jsx)("div",{children:s}):s,(0,n.jsx)(ek.OverlayPopover,{padding:"none",width:"min-content",children:(0,n.jsx)(ej.CommunityProfileWrapper,{communityProfile:d,reloadProfile:m,sourceType:o,sourceId:r})})]})}function eE(e){let{commentId:t,communityProfileId:i,canViewPopover:o,children:r}=e;return o?(0,n.jsx)(eS,{communityProfileId:i,sourceType:"comment",sourceId:t,children:r}):null}var eL=e.i(509267);function e$(e){let{comment:t,isDeleted:i,isOptimistic:o,handleClickUser:r,postNewCommentIdentity:s}=e,[a,d]=(0,u.useState)(!1),{push:l}=(0,R.useNavigation)(),{avatarUrl:m,url:p,canViewPopover:h,communityProfileId:g}=e_({comment:t,isOptimistic:o,postNewCommentIdentity:s});return i?(0,n.jsx)(M.Spacer,{mr:c.tokens.space.x16,children:(0,n.jsx)(es.Avatar,{size:"40px"})}):(0,n.jsx)(eE,{commentId:t?.id,communityProfileId:g,canViewPopover:h,children:(0,n.jsx)(M.Spacer,{mr:c.tokens.space.x8,children:(0,n.jsx)(ew.UnstyledLink,{"data-tag":"comment-avatar-wrapper",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>{r(),p&&!h&&l(p)},children:(0,n.jsx)(ev.Badge,{style:"dot",badgeContent:+!!t?.isUnread,children:(0,n.jsxs)("div",{className:eL.default.avatarContainer,children:[(0,n.jsx)(ec,{"data-tag":"comment-avatar-shadow",showAvatarShadow:a}),(0,n.jsx)(es.Avatar,{src:m,size:"40px"})]})})})})})}var eD=e.i(3137045),eR=e.i(8475434),eP=e.i(4126666),eB=((t={}).Hidden="hidden",t.CreatorReported="creator_reported",t);function eN(e){let{comment:t,permissions:o,showCommentBody:s,setShowCommentBody:a,commentTombstoneState:d,isDeleted:l,handleDeleteClick:m,handleHideClick:p}=e,u=(0,D.useIsPostPage)()?"lg":"md",h=t?.visibilityState===O.CommentVisibilityState.PENDING;if(!s)if(d)return(0,n.jsx)(eA,{permissions:o,showCommentBody:s,setShowCommentBody:a,commentTombstoneState:d,handleDeleteClick:m,moderationStatus:t?.moderationStatus,handleHideClick:p});else return null;let{fragments:g}=(0,eP.parseTextContent)(t?.body),f=l?(0,n.jsx)(r.BodyText,{size:u,color:c.tokens.content.muted.default,children:(0,n.jsx)(i.Trans,{id:"xU9cci",message:"This comment has been removed.",context:"Comment body if the comment has been deleted"})}):h?(0,n.jsx)(r.BodyText,{size:u,color:c.tokens.content.muted.default,children:(0,n.jsx)(i.Trans,{id:"F+DcO6",components:{0:(0,n.jsx)("em",{})},message:"<0>Editing...</0>",context:"Comment body if a comment is being edited"})}):(0,n.jsx)(r.BodyText,{size:u,color:c.tokens.content.regular.default,children:(0,n.jsx)("span",{children:g.map((e,t)=>{let i=`${e.type}-${t}-${e.content.slice(0,20)}`;return"link"===e.type?(0,n.jsx)(_.TextLinkShim,{href:e.href,target:"_blank",loggerId:"comment-body-link",children:e.content},i):(0,n.jsx)("span",{children:e.content},i)})})});return(0,n.jsxs)(J,{"data-tag":"comment-body",deleted:l,children:[f,(0,n.jsx)(eA,{permissions:o,showCommentBody:s,setShowCommentBody:a,commentTombstoneState:d,handleDeleteClick:m,moderationStatus:t?.moderationStatus,handleHideClick:p})]})}function eM(e){let{permissions:t,showCommentBody:o,setShowCommentBody:r,handleDeleteClick:s,commentTextSize:a,commentTombstoneState:d,handleHideClick:l,isHiddenByCreator:m}=e,c=(0,n.jsx)(_.TextLinkShim,{variant:"primary",size:a,loggerId:"filtered-comment-unmask",onClick:()=>r(!0),"data-tag":"masked-comment-view-button",children:(0,n.jsx)(i.Trans,{id:"bIo3zx",message:"View comment",context:"View a comment"})}),p=t.canDelete&&(0,n.jsx)(_.TextLinkShim,{variant:"critical",size:a,loggerId:"filtered-comment-delete",onClick:s,children:(0,n.jsx)(eR.DeleteText,{})}),u=(0,n.jsx)(_.TextLinkShim,{variant:"muted",size:a,loggerId:"filtered-comment-view-settings",href:"/edit/settings",children:(0,n.jsx)(i.Trans,{id:"5+Yi8+",message:"View settings",context:"View user settings"})}),h=t.canHide&&(0,n.jsx)(_.TextLinkShim,{variant:"primary",size:a,loggerId:"filtered-comment-hide",onClick:l,children:(0,n.jsx)(i.Trans,{id:"mnqGfb",message:"Hide comment",context:"Hide comment"})});return d===eB.CreatorReported?(0,n.jsx)(ei,{children:h}):(0,n.jsx)(ei,{children:o?(0,n.jsx)(n.Fragment,{children:!m&&(0,n.jsxs)(n.Fragment,{children:[u,p]})}):c})}function eO(e){let{commentTombstoneState:t,permissions:o,isHiddenByCreator:s,commentTextSize:a}=e,d=s?(0,n.jsx)(i.Trans,{id:"YkCv8p",message:"You've hidden this comment from everyone.",context:"This comment was hidden by the creator and is no longer visible to anyone."}):(0,n.jsx)(i.Trans,{id:"PnL8bQ",message:"This comment is hidden based on your comment filtering settings.",context:"This comment is hidden based on user set filters"}),l=t===eB.CreatorReported&&o.canHide;return(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,size:a,children:l?(0,n.jsx)(i.Trans,{id:"NSCDfV",message:"Comment reported. Hide this comment for everyone?",context:"Call to action asking if the creator wants to hide the comment after reporting it"}):d})}function eA(e){let{permissions:t,showCommentBody:i,setShowCommentBody:o,commentTombstoneState:r,handleDeleteClick:s,moderationStatus:a,handleHideClick:d}=e,l=(0,D.useIsPostPage)(),m=l?"md":"sm";if(!r)return null;let p=a===O.CommentModerationStatus.HiddenByCreator;return(0,n.jsxs)(et,{$bodyVisible:i,"data-tag":"comment-hidden-notification",children:[(0,n.jsxs)(en,{children:[(0,n.jsx)(eD.IconViewOff,{size:l?"20px":"24px",color:c.tokens.content.muted.default}),(0,n.jsx)(eO,{commentTombstoneState:r,permissions:t,isHiddenByCreator:p,commentTextSize:m})]}),(0,n.jsx)(ei,{children:(0,n.jsx)(eM,{permissions:t,showCommentBody:i,setShowCommentBody:o,handleDeleteClick:s,commentTextSize:m,commentTombstoneState:r,handleHideClick:d,isHiddenByCreator:p})})]})}var eU=e.i(4971520),ez=e.i(1661651),eF=e.i(1001536),eH=e.i(284322),eV=e.i(483102),eW=e.i(1797011),eK=e.i(7912751);function eq(e){let{handleClickUser:t,comment:i,isOptimistic:o,postNewCommentIdentity:r}=e,{push:s}=(0,R.useNavigation)(),{name:a,url:d,identityBadges:l,canViewPopover:m,communityProfileId:c}=e_({comment:i,isOptimistic:o,postNewCommentIdentity:r});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eE,{commentId:i?.id,communityProfileId:c,canViewPopover:m,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(_.TextLinkShim,{onClick:()=>{t(),d&&!m&&s(d)},size:{xs:"md",md:"lg"},decoration:"none",variant:"neutral","data-tag":"commenter-name",loggerId:"comment-header-commenter-full-name","aria-label":a||"Commenter name",children:(0,n.jsx)(eK.LineClamp,{numLines:1,children:a})})})}),(0,n.jsx)(eW.IdentityBadges,{identityBadges:l})]})}function eG(e){let{comment:t,currentUserId:o,shouldShowAsDeleted:s,permissions:a,canEdit:m,canDelete:p,isSuspendedPostLockedForEditing:h,shouldShowCreatorTombstone:g,setIsReportModalOpen:f,handleEditClick:x,handleDeleteClick:C,handleClickUser:y,postNewCommentIdentity:v}=e,{i18n:w}=(0,i.useLingui)(),[k,b]=(0,u.useState)(!1),j=!!t&&(0,A.isOptimisticId)(t.id);if(s)return null;let I=t?.created?(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,size:"md",as:"div",children:(0,n.jsx)(eF.default,{date:t.created,formatter:(0,eV.formatTimeAgo)(w)})}):null,S=(0,n.jsx)(M.Spacer,{ml:c.tokens.space.x16,children:(0,n.jsx)(d.LoadingSpinner,{size:"md",color:"dark"})}),T=!(h||!t||g||s),E=a.canEdit&&(m??!0),L=a.canDelete&&(p??!0),$=t?.commenter?.id===o,D=[];$||D.push((0,n.jsx)(_.TextLinkShim,{icon:ez.IconPencil,loggerId:"comment-edit",variant:"muted",decoration:"none",onClick:()=>f(!0),children:(0,n.jsx)(i.Trans,{id:"h0+HdG",message:"Report",context:"Open a report menu for reporting a comment"})})),E&&D.push((0,n.jsx)(_.TextLinkShim,{icon:ez.IconPencil,loggerId:"comment-edit",variant:"muted",decoration:"none","aria-label":w._({id:"5HDP8Q",message:"Edit comment"}),onClick:x,children:(0,n.jsx)(eR.EditText,{})})),L&&D.push((0,n.jsx)(_.TextLinkShim,{icon:eU.IconDelete,loggerId:"comment-delete",variant:"muted",decoration:"none","aria-label":w._({id:"By5x8T",message:"Delete comment"}),onClick:C,children:(0,n.jsx)(eR.DeleteText,{})}));let R=(0,n.jsx)(l.Stack,{gap:c.tokens.space.x16,children:D});return(0,n.jsxs)(K,{children:[(0,n.jsxs)(q,{children:[(0,n.jsx)(eq,{handleClickUser:y,comment:t,isOptimistic:j,postNewCommentIdentity:v}),(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,children:"·"}),(0,n.jsx)(ee,{children:j?S:I})]}),T&&0!==D.length?(0,n.jsx)(eH.PopoverShim,{"aria-label":w._({id:"r1ODxx",message:"Comment actions"}),loggerId:"CommentThread-moreActionsButton",hideArrow:!0,renderMode:"portal",preferredPlacement:"bottom",content:R,isOpen:k,minWidth:22,width:"min-content",onCloseRequest:()=>b(!1),children:(0,n.jsx)(_.TextLinkShim,{"data-tag":"comment-more-actions","aria-label":(0,eR.moreActionsString)(w),variant:"muted",loggerId:"CommentThread-moreActionsButton",onClick:()=>b(!k),children:(0,n.jsx)(eo,{size:"24px"})})}):null]})}let eQ=()=>void 0;function eY(e){let{comment:t,campaign:i,currentUserId:o,currentUserCampaignId:r,canEdit:s,canDelete:a,currentUserIsCampaignOwner:d=!1,isSuspendedPostLockedForEditing:l,showSeeReplies:m,placeholder:c,onReplyClick:p=eQ,onLikeClick:h=eQ,onEditClick:g=eQ,onDeleteClick:f=eQ,onClickUser:x=eQ,onHideClick:C=eQ,variant:y="default",postNewCommentIdentity:v}=e,[w,_]=(0,u.useState)(!1),k=((e,t)=>{if(e){if(e?.visibilityState===O.CommentVisibilityState.HIDDEN&&e?.body)return eB.Hidden;else if(t)return eB.CreatorReported}return null})(t,w),b=!!k,[j,I]=(0,u.useState)(!k),[S,T]=(0,u.useState)(!1),E=t?.commenter;(0,u.useEffect)(()=>{I(k!==eB.Hidden)},[k]);let L=()=>{if(!t)throw Error("CommentComponent: Delete clicked on empty or placeholder comment");f(t.id)},$=()=>{E&&x(E.id)},D=()=>{let e={canEdit:!1,canDelete:!1,canHide:!1};if(!o||!t)return e;let n=!!t.deletedAt,i=!!(r&&t?.onBehalfOfCampaign?.id===r),s=E?.id===o,a=t.post?.user?.id===o;return e.canDelete=!n&&(i||s||a||d),e.canEdit=!n&&s||!n&&i,e.canHide=t.moderationStatus!==O.CommentModerationStatus.HiddenByCreator&&d&&!s,e},R=()=>!!t?.deletedAt||!(t?.visibilityState!==O.CommentVisibilityState.HIDDEN||t?.body),P=!!t&&(0,A.isOptimisticId)(t.id);return(0,n.jsxs)(H,{"data-tag":"comment-row",$isOptimistic:P,children:[c?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q,{}),(0,n.jsx)(V,{children:(0,n.jsx)(Y,{children:" "})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e$,{comment:t,isDeleted:R(),isOptimistic:P,handleClickUser:$,postNewCommentIdentity:v}),(0,n.jsxs)(V,{children:[(0,n.jsxs)(W,{id:`comment-${t?.id}`,children:[(0,n.jsx)(eG,{comment:t,currentUserId:o,shouldShowAsDeleted:R(),permissions:D(),canEdit:s,canDelete:a,isSuspendedPostLockedForEditing:l,shouldShowCreatorTombstone:b,setIsReportModalOpen:T,handleEditClick:()=>{if(!t)throw Error("CommentComponent: Edit clicked on empty or placeholder comment");g(t)},handleDeleteClick:L,handleClickUser:$,postNewCommentIdentity:v}),(0,n.jsx)(eN,{comment:t,permissions:D(),showCommentBody:j,setShowCommentBody:I,commentTombstoneState:k,isDeleted:R(),handleDeleteClick:L,handleHideClick:()=>{if(!t)throw Error("CommentComponent: Hide clicked on empty or placeholder comment");C(t.id)}})]}),!P&&(0,n.jsx)(ef,{comment:t,campaign:i,currentUserIsCampaignOwner:d,isSuspendedPostLockedForEditing:l,shouldShowCreatorTombstone:b,shouldShowAsDeleted:R(),showSeeReplies:m,onReplyClick:p,onLikeClick:h,variant:y})]})]}),S&&(0,n.jsx)(U.ContentReport,{useModal:!0,modalIsOpen:S,targetType:"comment",targetId:t?.id||"",onReportClose:e=>{let{wasSubmitted:t}=e;T(!1),t&&d&&_(!0)}})]})}var eJ=e.i(1789610),eX=e.i(8326269),eZ=e.i(6523643),e0=e.i(7680435);let e1=(0,e.i(5364248).withSendEmailVerification)(e=>{let{handleSendEmail:t}=e;return(0,n.jsx)(_.TextLinkShim,{loggerId:"fm-comment-verify-email",onClick:t,children:(0,n.jsx)(eR.VerifyEmailText,{})})}),e4=h.styled.div.withConfig({componentId:"sc-497948d-0"})`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  align-items: start;
`,e8=h.styled.div.withConfig({componentId:"sc-497948d-1"})`
  align-self: start;
  min-width: ${c.tokens.space.x32};
`,e6=h.styled.div.withConfig({componentId:"sc-497948d-2"})`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${c.tokens.space.x8};
`,e2=(0,h.styled)(ew.UnstyledLink).withConfig({componentId:"sc-497948d-3"})`
  &&& {
    width: 100%;
    text-decoration: none;
  }
`,e3=h.styled.div.withConfig({componentId:"sc-497948d-4"})`
  display: flex;
  flex-direction: column;
`,e9=()=>{};function e5(e){let{onPostComment:t=e9,onEditComment:o=e9,onCancelClick:s=e9,editingComment:a,canComment:d,parentCommentName:l,parentCommentId:m,noHandling:p,campaign:g,isPreview:f,isSuspendedPostLockedForEditing:x,shouldAutoFocus:C=!1,triggerScrollToInput:v=!1,postCommentCount:w,currentUserCommentDisallowedReason:b,postId:I,variant:S="default",content:T,setContent:E,postNewCommentIdentity:L,showLatestCommentsFirst:$}=e,{i18n:D}=(0,i.useLingui)(),R=(0,e0.useCurrentUser)(),P=(0,u.useRef)(null),B=e=>{switch(e.keyCode){case eZ.keyCodes.ENTER:e.shiftKey?e.shiftKey=!1:(e.preventDefault(),A());break;case eZ.keyCodes.ESC:O()&&(e.preventDefault(),U())}},O=()=>!!m||!!a,A=()=>{if(0===T.length)return;let e=T.replace("<3","&lt;3");E(""),a?o(e,a.id):t(e,m)},U=()=>{E(""),s()};(0,u.useEffect)(()=>{(m||a||C)&&P.current?.focus()},[]),(0,u.useEffect)(()=>{v&&P.current===document.activeElement&&P.current?.scrollIntoView({behavior:"smooth",block:"center"})},[v]);let{avatarUrl:z}=e_({comment:null,isOptimistic:!0,postNewCommentIdentity:L}),F=()=>{let e={becomePatron:D._({id:"k339ek",message:"Become a member to comment..."}),edit:D._({id:"UiLTyw",message:"Edit your comment..."}),reply:D._({id:"gTX1RS",message:"Replying to {parentCommentName}",values:{parentCommentName:l}}),joinConversation:D._({id:"IQrblZ",message:"Join the conversation..."}),startConversation:D._({id:"TuNPtl",message:"Start the conversation..."}),upgrade:D._({id:"CBxm/2",message:"Upgrade to add a comment."}),verifyEmail:D._({id:"x7S4h6",message:"You need to verify your email to add a comment."})};if(!R?.id||p||d)if(a)return e.edit;else if(m)return e.reply;else if(0===w)return e.startConversation;else return e.joinConversation;if(!g?.currentUserIsFreeMember)return e.becomePatron;switch(b){case k.PostCommentDisallowedReason.NEEDS_EMAIL_VERIFICATION:return e.verifyEmail;case k.PostCommentDisallowedReason.RATE_LIMITED:return 0===w?e.startConversation:e.joinConversation;default:return e.upgrade}},H=(0,n.jsx)(eX.TextInput,{size:"sm","data-tag":"comment-field",id:"comment-section-input",ref:P,multiline:!0,placeholder:F(),value:T,onChange:e=>E(e.target.value),onKeyDown:B,disabled:!d||f,hideLabel:!0,label:D._({id:"BkosUV",message:"Comment Field"})}),V=(0,n.jsx)(_.TextLinkShim,{variant:"primary",onClick:A,loggerId:"CommentSend-minimal-replybutton",children:(0,n.jsx)(eR.ReplyText,{})}),W=(0,n.jsx)(eX.TextInput,{size:"sm","data-tag":"comment-field",ref:P,multiline:!0,placeholder:F(),value:T,onChange:e=>E(e.target.value),onKeyDown:B,suffix:T.length>0?V:void 0,disabled:!d||f,hideLabel:!0,label:D._({id:"BkosUV",message:"Comment Field"})}),K=(0,n.jsx)(e2,{href:(0,N.addRedirectBackHere)("/login"),"data-tag":"login-field",children:H}),q=a?(0,n.jsx)(y.ButtonShim,{loggerId:"features-posts-CommentThread-CommentSend-post-comment",unfilled:!0,onClick:A,size:"sm",children:(0,n.jsx)(eR.SaveText,{})}):(0,n.jsx)(y.ButtonShim,{loggerId:"features-posts-CommentThread-CommentSend-post-comment",unfilled:!0,onClick:A,size:"sm",children:(0,n.jsx)(eR.ReplyText,{})});return x?null:(0,n.jsxs)(e3,{children:[(0,n.jsxs)(e4,{children:["default"===S&&(0,n.jsx)(eJ.Box,{flexShrink:0,mr:2,css:h.css`
              align-self: start;
            `,children:(0,n.jsx)(e8,{children:(0,n.jsx)("div",{children:(0,n.jsx)(es.Avatar,{"data-tag":"comment-send-avatar",src:z,size:"40px"})})})}),(0,n.jsx)(e6,{children:!R?.id||p?K:"minimal"===S?W:H}),!a&&!m&&T.length>0&&(0,n.jsx)(M.Spacer,{ml:c.tokens.space.x8,children:(0,n.jsx)(y.ButtonShim,{loggerId:"features-posts-CommentThread-CommentSend-post-comment",size:"md",variant:"primary",onClick:A,children:(0,n.jsx)(eR.PostText,{})})})]}),"default"===S&&!!R?.id&&O()&&(0,n.jsxs)(eJ.Box,{display:"flex",flexDirection:"row",justifyContent:"space-between",ml:7,children:[(0,n.jsx)("div",{children:(0,n.jsx)(y.ButtonShim,{loggerId:"features-posts-CommentThread-CommentSend-cancel",unfilled:!0,onClick:U,size:"sm",children:(0,n.jsx)(eR.CancelText,{})})}),(0,n.jsx)("div",{children:T.length>0&&q})]}),b===k.PostCommentDisallowedReason.NEEDS_EMAIL_VERIFICATION&&(0,n.jsx)(M.Spacer,{ml:c.tokens.space.x56,children:(0,n.jsx)(e1,{redirectToUrl:`post-${I}`})}),b===k.PostCommentDisallowedReason.RATE_LIMITED&&(0,n.jsx)(M.Spacer,{ml:c.tokens.space.x56,children:(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,size:"sm",children:(0,j.commentRateLimitErrorMessage)(D)})}),!a&&!m&&T.length>0&&!$&&(0,n.jsx)(M.Spacer,{ml:c.tokens.space.x56,children:(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,children:(0,n.jsx)(i.Trans,{id:"pjnuh/",components:{0:(0,n.jsx)("b",{})},message:"<0>Shift + Return/Enter</0> to add a new line",context:"Keyboard shortcut tip to add a new line"})})})]})}let e7=h.styled.div.withConfig({componentId:"sc-4c3b5dd-0"})`
  min-height: ${c.tokens.space.x8};
`,te=h.styled.div.withConfig({componentId:"sc-4c3b5dd-1"})`
  display: flex;
  flex-direction: column;
  row-gap: ${c.tokens.space.x16};

  ${e=>e.areReplyLinesVisible?h.css`
          ${H}, ${e3} {
            position: relative;
          }

          /* Draw the vertical line connecting the parent comment to the first reply*/
          ${H}, ${e3} {
            &:before {
              content: '';
              height: calc(100% - 32px);
              width: ${c.tokens.borderWidth.thin};
              background-color: ${c.tokens.bg.base.hover};
              position: absolute;
              top: 48px;
              left: 20px;
            }
          }

          /* Draw the vertical line connecting a reply to the next reply*/
          ${tt} ${H},
          ${tt} ${e3} {
            &:before {
              content: '';
              height: calc(100% + 10px);
              top: 6px;
              left: -36px;
            }

            /* The last reply and reply composer do not have vertical thread lines below it*/
            &:nth-last-child(-n + 2):before {
              display: none;
            }

            /* Draw the horizontal line connecting each reply to parent comment*/
            &:after {
              content: '';
              height: 20px;
              width: 28px;
              border-bottom: ${c.tokens.borderWidth.thin} solid ${c.tokens.bg.base.hover};
              border-left: ${c.tokens.borderWidth.thin} solid ${c.tokens.bg.base.hover};
              border-bottom-left-radius: ${c.tokens.space.x16};
              position: absolute;
              top: 0px;
              left: -36px;
            }
          }
        `:""}
`,tt=h.styled.div.withConfig({componentId:"sc-4c3b5dd-2"})`
  margin-left: ${c.tokens.space.x56};
  display: flex;
  flex-direction: column;
  row-gap: ${c.tokens.space.x16};
`;function tn(e){let{currentComment:t,currentUser:o,currentUserIsCampaignOwner:s,canComment:a,campaign:l,variant:m="default",repliesLoading:p,noHandling:h,onLoadReplies:g,handlePostComment:f,onEditComment:x,onDeleteComment:C,onCreatorHideComment:y,onClickUser:v,onLikeClick:w,onEnterReplyMode:k,patreonUrl:b,postId:j,repliedIds:I,isSuspendedPostLockedForEditing:S,isPreview:T,postCommentCount:E=0,editingComment:L,setEditingComment:$,postNewCommentIdentity:P,showLatestCommentsFirst:B}=e,[O,A]=(0,u.useState)(!1),[U,z]=(0,u.useState)(!1),[F,H]=(0,u.useState)(""),[V,W]=(0,u.useState)(""),K=(0,D.useIsPostPage)(),{push:q}=(0,R.useNavigation)(),G=t?.onBehalfOfCampaign?t.commenter?.campaign?.name:t?.commenter?.fullName,Q=()=>{z(!1),$(null)},Y=(e,t)=>{$(null),x&&x(e,t)},J=e=>{h||($(e),H(e.body||""))},X=()=>{z(!0),O&&Z(),!h&&k&&k()},Z=()=>{h?q((0,N.addRedirectUrl)("/login",b)):g&&g(t.id),A(!1)},ee=e=>e.commenter||e.replies?.length?L?.id===e.id?(0,n.jsx)(e5,{variant:m,noHandling:h,campaign:l,onEditComment:Y,onCancelClick:Q,editingComment:L,canComment:a,isPreview:T,postCommentCount:E,postId:j,content:F,setContent:H,postNewCommentIdentity:P,showLatestCommentsFirst:B}):(0,n.jsx)(eY,{campaign:l,currentUserId:o?.id,currentUserCampaignId:o?.campaign?.id,canEdit:"default"===m&&a,canDelete:"default"===m,currentUserIsCampaignOwner:s,comment:e,onReplyClick:X,onLikeClick:w,onEditClick:J,onDeleteClick:C,onClickUser:v,onHideClick:y,isSuspendedPostLockedForEditing:S,variant:m,showSeeReplies:et(),postNewCommentIdentity:P},e.id):null,et=()=>"minimal"===m&&I?.has(t.id),en=!O&&!!t.replies?.length,ei=(0,n.jsx)(r.BodyText,{color:c.tokens.content.muted.default,size:K?"lg":"md",children:(0,n.jsx)(i.Trans,{id:"Va/lo/",message:"Replied",context:"Text that shows after a comment is replied to"})}),eo=t.replies?.length,er=(t.replyCount||0)-(eo||0),es="default"===m&&er>0,ea=(0,n.jsx)(e7,{children:p?(0,n.jsx)(d.LoadingSpinner,{size:"md",color:"light"}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(_.TextLinkShim,{loggerId:"features-posts-CommentThread-load",onClick:()=>Z(),children:(0,n.jsx)(i.Trans,{id:"Z2eVFy",message:"Load replies",context:"CTA to load replies to a comment on a post."})})})}),ed=(0,n.jsx)(e7,{children:(0,n.jsx)(_.TextLinkShim,{loggerId:"features-posts-CommentThread-collapse",onClick:()=>void A(!0),children:(0,n.jsx)(i.Trans,{id:"b82/57",message:"Collapse replies",context:"CTA to collapse replies to a comment on a post."})})});return t.commenter||eo?(0,n.jsx)(M.Spacer,{pb:"minimal"===m?c.tokens.space.x16:void 0,children:(0,n.jsxs)(te,{areReplyLinesVisible:en||U,children:[ee(t),t.replies?.length||es||et()||U?(0,n.jsxs)(tt,{children:[en?t.replies?.map(ee):null,et()&&ei,U?(0,n.jsx)(e5,{variant:m,canComment:a,campaign:l,noHandling:h,onPostComment:(e,t)=>{z(!1),f(e,t)},onCancelClick:Q,parentCommentName:G,parentCommentId:t.id,isPreview:T,postCommentCount:E,postId:j,content:V,setContent:W,postNewCommentIdentity:P,showLatestCommentsFirst:B}):null,es||O?ea:null,!es&&en?ed:null]}):null]})}):null}var ti=e.i(8346660);let to="#comment-",tr="#comments",ts=()=>{let e=(0,ti.useCurrentRoute)().query.cid,t=window.location.hash,n=null;return t.startsWith(to)?n="target-comment":t===tr&&(n="comments"),{highlightedCommentId:"target-comment"===n?t.slice(to.length):"string"==typeof e?e:void 0,hashType:n}};e.s(["COMMENTS_SECTION_HASH",0,tr,"useHighlightedCommentTarget",0,ts],3633429);var ta=e.i(5606963);let td=h.styled.div.withConfig({componentId:"sc-8b4ce858-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: ${c.tokens.space.x16};
`,tl=h.styled.div.withConfig({componentId:"sc-8b4ce858-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,tm=h.styled.div.withConfig({componentId:"sc-8b4ce858-2"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: ${c.tokens.space.x8};
`,tc=h.styled.div.withConfig({componentId:"sc-8b4ce858-3"})`
  /* We add a scroll margin so that when we scroll to the top of the comment
  container after posting a comment, there is space between the newest
  comment and the top of the screen.  */
  scroll-margin: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: ${c.tokens.space.x16};
`,tp=(0,h.styled)(y.ButtonShim).withConfig({componentId:"sc-8b4ce858-4"})`
  &&& {
    /* Don't show on small screens, since it covers the sticky menu and Open App toggle*/
    display: none;

    @media ${(0,m.mediaForBreakpoint)("sm")} {
      display: flex;
      box-shadow: ${c.tokens.boxShadow.high};
      position: fixed;
      z-index: ${c.tokens.layer.z11};
      border-radius: ${c.tokens.radius.circle};
      top: ${e=>e.isPostPage?"68px":c.tokens.space.x12}; // top nav height + 12px for extra spacing
      left: ${e=>e.elevatorXPosition-30}px;
    }
  }
`;e.s(["CommentThread",0,function(e){let{currentUser:t,currentUserCanView:m,currentUserCommentDisallowedReason:h,campaign:y,postCommentCount:M=0,comments:O,repliedIds:A=new Set,setRepliedIds:U,noHandling:z,onLoadMoreComments:F,currentUserIsCampaignOwner:H,onLoadReplies:V,repliesLoading:W,onLikeClick:K,onPostComment:q,onEditComment:G,onDeleteComment:Q,onClickUser:Y,onEnterReplyMode:J,onCreatorHideComment:X,patreonUrl:Z,postLevelCommentingAccess:ee,loading:et,showCommentSend:en=!0,canComment:ei,isSuspendedPostLockedForEditing:eo,isPreview:er,focusCommentInput:es=!1,postId:ea,canLoadMoreComments:ed,commentResponseCodeName:el,variant:em="default",showElevatorButton:ec,isCreatorWorldHome:ep=!1,postNewCommentIdentity:eu,showLatestCommentsFirst:eh=!1,showCommentSectionHeader:eg=!0,feedName:ef,isPostOwner:ex,postType:eC,parentHighlightPost:ey}=e,{i18n:ev}=(0,i.useLingui)(),{push:ew}=(0,R.useNavigation)(),e_=(0,p.useToaster)(),ek=(0,u.useRef)(null),[eb,ej]=(0,u.useState)(0),eI=(0,$.useIsMounted)(),[eS,eT]=(0,u.useState)(!1),[eE,eL]=(0,u.useState)(null),[e$,eD]=(0,u.useState)(""),[,eR]=(0,o.useNion)("highlighted-comment"),[,eP]=(0,o.useNion)("highlighted-comment-replies"),[eB,eN]=(0,u.useState)([]),eM=0===O.length&&0!==M,eO=(0,u.useRef)(null),[eA,eU]=(0,u.useState)(!1),ez=(0,D.useIsPostPage)(),eF=(0,T.getCollectionIdFromLocation)(),{highlightedCommentId:eH,hashType:eV}=ts();(0,u.useEffect)(()=>{if(!eO.current)return;eO.current.scrollIntoView({behavior:"smooth",block:"center"}),(0,I.datadogIncrement)("patreon.comments.scroll_to_comment.scrolled"),eO.current.classList.add("highlighted");let e=setTimeout(()=>{eO.current?.classList.remove("highlighted"),e=null},2e3);return()=>{e&&clearTimeout(e)}},[eA]);let eW=(0,u.useCallback)(()=>{ek.current?.scrollIntoView({behavior:"smooth",block:"start"})},[]);(0,u.useEffect)(()=>{"comments"===eV&&eW()},[eV,eW]),(0,u.useEffect)(()=>{if(!eH||((0,f.logCommentRedirect)({campaign_id:y?.id??"",comment_id:eH,is_owner:!!H,post_id:ea}),eM))return;(0,I.datadogIncrement)("patreon.comments.scroll_to_comment.found");let e=null,t=-1!==O.findIndex(e=>e.id===eH||e.firstReply?.id===eH),n=-1!==O.findIndex(e=>e.firstReply?.id===eH);return t||n?e=setTimeout(()=>{let e=document.getElementById(`comment-${eH}`);e&&(eO.current=e,eU(!0),(0,x.logCommentScroll)({campaign_id:y?.id??"",is_owner:!!H,post_id:ea,comment_id:eH,is_reply:!!n}))},500):eR.get({endpoint:(0,B.buildUrl)(`/comments/${eH}`,{include:[...P.NOTIF_COMMENT_MODAL_INCLUDES,"parent.commenter","parent.commenter_identity","parent.commenter_identity.avatar","parent.commenter_identity.community_profile","parent.commenter_identity.identity_badges"],fields:P.NOTIF_COMMENT_MODAL_FIELDS})}).then(t=>{if(t.post?.id!==ea){"target-comment"===eV&&eW();return}t.parent?eN([{...t.parent,firstReply:t,replies:[t]}]):eN([t]),e=setTimeout(()=>{let e=document.getElementById(`comment-${eH}`);e&&(eO.current=e,eU(!0),(0,x.logCommentScroll)({campaign_id:y?.id??"",is_owner:!!H,post_id:ea,comment_id:eH,is_reply:!!t.parent}))},500)}).catch(()=>{"target-comment"===eV&&eW()}),()=>{e&&clearTimeout(e)}},[eM,eH]),(0,u.useEffect)(()=>{if(!el)return;let e=(0,j.genericPermanentErrorMessage)(ev),t=!0;switch(el){case"RequestThrottled":e=(0,j.commentRateLimitErrorMessage)(ev);break;case P.DELETE_COMMENT_SUCCESS_CODE_NAME:t=!1,e=ev._({id:"O+ehbG",message:"Comment deleted."})}t?e_.error(e):e_.success(e)},[el,ev,e_]),(0,u.useEffect)(()=>{let e=()=>{ek.current&&eT((ek?.current.getBoundingClientRect()).top<0)};return e(),window.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[O]);let eK=()=>{ek.current&&ej(ek.current.getBoundingClientRect().right)};(0,u.useLayoutEffect)(()=>(eK(),window.addEventListener("resize",eK),()=>{window.removeEventListener("resize",eK)}),[ek]);let eq=()=>{eI&&ek.current&&ek.current.scrollIntoView({behavior:"smooth",block:"start"})},eG=(0,u.useCallback)(()=>{z?ew((0,N.addRedirectUrl)("/login",Z)):F&&(eN([]),F())},[z,F,Z,ew]),eQ=(e,t)=>{t&&(eh||eq(),U?.(A?.add(t))),q&&q(e,t).then(e=>{if(eB.length&&t===eB[0]?.id&&e){let t={...eB[0]},n=t.replies||[];t.replies=[e,...n],eN([t])}})},eJ=O.reduce((e,t)=>[...e,...t.replies||[]],[...O]),eX=(0,u.useCallback)(()=>{if(void 0!==ed)return ed;let e=O.reduce((e,t)=>t.replyCount?e+Math.max(t.replyCount-(t?.replies?.length||0),0):e,0);return eJ.length+e<M},[O,eJ,M,ed]),eZ=e=>{eB.length&&e===eB[0]?.id&&eP.get({endpoint:(0,L.getCommentRepliesUrl)(e)},{append:!0}).then(e=>{let t={...eB[0]};t.replies=e,eN([t])}).catch(()=>void 0),V?.(e)},e0=(0,E.fillRange)(Math.min(2,M)).map(e=>(0,n.jsx)(u.Fragment,{children:(0,n.jsx)(eY,{placeholder:!0})},e)),e1=0===eJ.length&&M>0&&et,e4=[...O,...eB].map(e=>(0,n.jsx)(tn,{currentComment:e,currentUser:t,currentUserIsCampaignOwner:H,canComment:ei,campaign:y,variant:em,repliesLoading:!!W?.[e.id],noHandling:z,onLoadReplies:eZ,handlePostComment:eQ,onEditComment:G,onDeleteComment:Q,onCreatorHideComment:X,onClickUser:Y,onLikeClick:K,onEnterReplyMode:J,patreonUrl:Z,postId:ea,repliedIds:A,isSuspendedPostLockedForEditing:eo,isPreview:er,postCommentCount:M,editingComment:eE,setEditingComment:eL,postNewCommentIdentity:eu,showLatestCommentsFirst:eh},e.id)),e8=(0,n.jsx)(tm,{children:(0,n.jsxs)(l.Stack,{flexWrap:"nowrap",flexDirection:"row",gap:c.tokens.space.x16,children:[(0,n.jsx)(_.TextLinkShim,{loggerId:"loadMoreCommentsCta","data-tag":"loadMoreCommentsCta",onClick:eG,size:"md",disabled:et,children:(0,n.jsx)(i.Trans,{id:"q0FTZi",message:"Load more comments",context:"CTA to load more comments on a post."})}),et&&(0,n.jsx)(d.LoadingSpinner,{size:"xs"})]})}),e6=(0,n.jsx)(tl,{children:(0,n.jsx)(r.BodyText,{size:"sm",color:c.tokens.content.muted.default,children:(0,n.jsx)(i.Trans,{id:"KHBEiL",message:"Comments are disabled for this post.",context:"Letting a member know that they cannot comment because the creator has turned off comments for this post"})})}),e2=(0,n.jsx)(e5,{variant:em,campaign:y,noHandling:z,onPostComment:eQ,canComment:ei,isSuspendedPostLockedForEditing:eo,isPreview:er,shouldAutoFocus:es,triggerScrollToInput:!et&&es&&ei,postCommentCount:M,currentUserCommentDisallowedReason:h,postId:ea,content:e$,setContent:eD,postNewCommentIdentity:eu,showLatestCommentsFirst:eh}),e3=(0,n.jsx)(w.FixedResizingBottomBar,{isCreatorWorldHome:ep,children:e2}),e9=(0,n.jsx)(td,{children:(0,n.jsxs)(tc,{ref:ek,children:[eS&&ec?(0,n.jsx)(tp,{"aria-label":ev._({id:"7DfQMI",message:"Scroll to top of comments"}),variant:"insetWhite",elevatorXPosition:eb,icon:a.IconArrowUp,onClick:eq,isPostPage:ez}):null,ez&&!ep&&eg?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.HeadingText,{as:"h2",children:M>0?(0,n.jsx)(i.Trans,{id:"fA1mAA",values:{postCommentCount:M},message:"{postCommentCount, plural, one {# comment} other {# comments}}",context:"Number of comments on a post"}):(0,n.jsx)(i.Trans,{id:"6xxWjG",message:"Comments",context:"Comment section header"})}),en&&(0,n.jsx)("div",{children:e2}),(0,n.jsx)(g.ImpressionsLogger,{className:ta.default.impressionsWrapper,log:()=>{(ef===b.POSTS||ef===b.SINGLE_POST)&&y?.id&&ea&&(0,C.logInteractionViewedCommentsEvent)({campaign_id:y.id??"",content_type:"post",is_owner:ex??!1,post_source:(0,v.getPostSource)({feedName:ef,collectionId:eF}),post_id:ea,post_type:eC,is_locked_for_viewer:!m,is_preview:er,collection_id:eF,highlight_parent_id:ey?.id})},children:(0,n.jsxs)(n.Fragment,{children:[e1?e0:e4,eX()?e8:null]})})]}):(0,n.jsxs)(n.Fragment,{children:[e1?e0:e4,eX()?e8:null,ep&&en?(0,n.jsx)("div",{style:{height:"48px"},children:e3}):en?(0,n.jsx)("div",{children:e2}):null]})]})});return!H&&h===k.PostCommentDisallowedReason.COMMENTS_DISABLED||er&&ee===S.PostLevelCommentingAccess.NONE?e6:e9}],870747)}]);

//# debugId=b62fdd2b-6eb3-d87f-659d-e800b123ffd1
//# sourceMappingURL=0qcmoe.qlb2ch.js.map
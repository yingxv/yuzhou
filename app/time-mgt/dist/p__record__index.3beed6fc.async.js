"use strict";(self.webpackChunktime_mgt_=self.webpackChunktime_mgt_||[]).push([[751],{27520:function(ye,M,e){e.r(M),e.d(M,{default:function(){return se}});var Y=e(34412),h=e.n(Y),E=e(55354),y=e.n(E),G=e(69780),S=e.n(G),Q=e(50680),B=e.n(Q),H=e(93981),O=e(21839),V=e(85098),R=e(35572),g=e(64168),W=e(91975),P=e(95563),z=e(48994),J=e(80975),D=e(89966),K=e(2672),U=e(70834),X=e(54618),b=e.n(X),w=e(34167),f=e(44521),k=function(){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return f.iP.post.apply(f.iP,["time-mgt/v1/record/create"].concat(s))},Pe=function(r,s){return restful.delete("time-mgt/record/".concat(r),s)},q=function(){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return f.iP.put.apply(f.iP,["time-mgt/v1/record/update"].concat(s))},_=function(r){return f.iP.get("time-mgt/v1/record/list",y()({notify:"fail"},r))},ee=e(80211),te=e.n(ee);function ae(v){var r;return[void 0,null,""].includes(v)?!1:te()(v)==="object"?((r=Object.values(v))===null||r===void 0?void 0:r.length)>0:!0}var ne=e(30583),d=e.n(ne),u=e(84937),n=e(29541),re=R.Z.useToken,se=function(){var v=g.Z.useForm(),r=B()(v,1),s=r[0],i=(0,w.Z)(),F=i.data,ie=i.isFetching,N=F==null?void 0:F.data,le=(0,H.useState)(""),L=B()(le,2),x=L[0],Z=L[1],oe=ae(x),de=(0,O.NL)(),ue=re(),c=ue.hashId,p=(0,V.N)(["records"],function(l){var t=l.pageParam,o=t===void 0?0:t;return _({params:{skip:o*10,limit:10}})},{getNextPageParam:function(t,o){var a;return(t==null||(a=t.data)===null||a===void 0?void 0:a.length)===10?o==null?void 0:o.length:void 0},refetchOnWindowFocus:!1}),T=p.data,ve=p.fetchNextPage,ce=p.hasNextPage,I=p.isFetching,C=T==null?void 0:T.pages,j=C==null?void 0:C.reduce(function(l,t){return l.concat(t==null?void 0:t.data)},[]);function me(l){return A.apply(this,arguments)}function A(){return A=S()(h()().mark(function l(t){return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!oe){a.next=7;break}return a.next=4,q(y()(y()({},t),{},{id:x}));case 4:Z(""),a.next=9;break;case 7:return a.next=9,k(t);case 9:de.invalidateQueries(["records"]),s.resetFields(),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.error("create err: ",a.t0);case 16:case"end":return a.stop()}},l,null,[[0,13]])})),A.apply(this,arguments)}function fe(l){return $.apply(this,arguments)}function $(){return $=S()(h()().mark(function l(t){return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s.setFieldsValue(t),Z(t.id);case 2:case"end":return a.stop()}},l)})),$.apply(this,arguments)}function he(){s.resetFields(),Z("")}var ge=function(){return I?Promise.resolve():ve()},xe=function(t){var o;return(0,n.jsxs)("div",{onClick:function(){return fe(t)},className:d()(d()("".concat(u.e,"-record-item"),c),t.id===x&&d()("".concat(u.e,"-active"),c)),children:[(0,n.jsx)("h3",{style:{color:"#333"},children:b()(t.createAt).format("YYYY-MM-DD HH:mm:ss")}),(0,n.jsxs)("div",{className:d()("".concat(u.e,"-content"),c),children:[(0,n.jsx)("div",{className:d()("".concat(u.e,"-main"),c),children:t.event}),(0,n.jsx)("div",{className:d()("".concat(u.e,"-extra"),c),children:(0,U.Gy)(t.deration)})]}),(0,n.jsx)("div",{children:t==null||(o=t.tid)===null||o===void 0?void 0:o.map(function(a){var m=N==null?void 0:N.find(function(je){return je.id===a});return(0,n.jsx)(W.Z,{color:m==null?void 0:m.color,children:m==null?void 0:m.name},a)})})]},t.id)},pe=I?null:(0,n.jsx)("div",{style:{textAlign:"center",margin:"12px auto",height:32,lineHeight:"32px"},children:ce?(0,n.jsx)(P.ZP,{onClick:ge,children:"\u52A0\u8F7D\u66F4\u591A..."}):"\u6CA1\u6709\u66F4\u591A\u4E86"});return(0,n.jsxs)("div",{className:d()("".concat(u.e,"-bottom-fix-panel"),c),children:[(0,n.jsx)("div",{style:{flex:1,overflowY:"scroll"},children:j!=null&&j.length?(0,n.jsx)(z.ZP,{dataSource:j,itemLayout:"vertical",renderItem:xe,loading:I,loadMore:pe}):(0,n.jsx)(J.Z,{className:d()("".concat(u.e,"-empty"),c)})}),(0,n.jsx)(g.Z,{onFinish:me,form:s,children:(0,n.jsxs)("div",{className:d()("".concat(u.e,"-bottom-fix-panel"),c),style:{height:"25vh",borderTop:"1px solid rgba(233,233,233, 05)",boxShadow:"0px 0px 20px 0px rgba(0,0,0,0.1)"},children:[(0,n.jsx)("section",{className:d()("".concat(u.e,"-fill-scroll-part"),c),style:{padding:"0 0 6px 6px"},children:(0,n.jsx)(g.Z.Item,{style:{marginBottom:0},name:"tid",rules:[{required:!0,message:"\u8BF7\u9009\u4E00\u4E2A\u6807\u7B7E"},{type:"array",min:0,message:"\u8BF7\u9009\u4E00\u4E2A\u6807\u7B7E"}],children:(0,n.jsx)(K.Z,{})})}),(0,n.jsxs)(D.Z.Group,{compact:!0,style:{display:"flex"},children:[(0,n.jsx)(g.Z.Item,{style:{marginBottom:0,flex:1},name:"event",children:(0,n.jsx)(D.Z,{placeholder:"\u8BF7\u8BB0\u5F55\u505A\u4E86\u4EC0\u4E48",allowClear:!0,autoComplete:"off"})}),(0,n.jsx)(P.ZP,{onClick:he,children:"\u53D6\u6D88"}),(0,n.jsx)(P.ZP,{type:"primary",htmlType:"submit",loading:ie,children:x?"\u4FEE\u6539":"\u8BB0\u5F55"})]})]})})]})}}}]);
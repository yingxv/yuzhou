"use strict";(self.webpackChunkstock_=self.webpackChunkstock_||[]).push([[940],{72754:function(ue,H,e){var V=e(34412),I=e.n(V),N=e(55354),P=e.n(N),Y=e(69780),t=e.n(Y),U=e(55898),m=e(32426),d=e(56303),f=e(10130),G=e(25642),T=e(29541),oe=U.Z.Item;H.Z=function(Z){var J=Z.formProps,K=Z.modalProps,B=Z.setModalProps,j=Z.onSuccess,x=Z.form,b=(K==null?void 0:K.title)==="\u7F16\u8F91";function O(){return re.apply(this,arguments)}function re(){return re=t()(I()().mark(function M(){var W;return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,x==null?void 0:x.validateFields();case 2:if(W=g.sent,g.prev=3,B(function(ne){return P()(P()({},ne),{},{confirmLoading:!0})}),!b){g.next=8;break}return g.next=8,(0,G.Vx)(W.code,W);case 8:return g.next=10,j==null?void 0:j();case 10:B(function(ne){return P()(P()({},ne),{},{open:!1})}),x.resetFields();case 12:return g.prev=12,B(function(ne){return P()(P()({},ne),{},{confirmLoading:!1})}),g.finish(12);case 15:case"end":return g.stop()}},M,null,[[3,,12,15]])})),re.apply(this,arguments)}return(0,T.jsxs)(f.Z,{formProps:P()({onFinish:O},J),modalProps:P()({onOk:O},K),children:[(0,T.jsx)(oe,{name:"code",hidden:!0,children:(0,T.jsx)(m.Z,{disabled:!0})}),(0,T.jsx)(oe,{name:"stopProfit",label:"\u6B62\u76C8\u70B9",rules:[{required:!0}],children:(0,T.jsx)(d.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,T.jsx)(oe,{name:"stopLoss",label:"\u6B62\u635F\u70B9",rules:[{required:!0}],children:(0,T.jsx)(d.Z,{placeholder:"\u8BF7\u8F93\u5165"})})]})}},97209:function(ue,H,e){e.r(H),e.d(H,{default:function(){return tr}});var V=e(34412),I=e.n(V),N=e(69780),P=e.n(N),Y=e(55354),t=e.n(Y),U=e(50540),m=e.n(U),d=e(17567),f=e(68996),G=e(27139),T=e.n(G),oe=e(7529),Z=e.n(oe),J=e(80211),K=e.n(J),B=e(50680),j=e.n(B),x=e(941),b=e(23663),O=d.Z.antd,re=O.Input,M=O.DatePicker,W=O.TimePicker,ie=O.InputNumber,g=O.Checkbox,ne=O.Radio,fe={text:[re,{placeholder:"\u8BF7\u8F93\u5165"}],textarea:[re.TextArea,{placeholder:"\u8BF7\u8F93\u5165"}],date:[M,{placeholder:"\u8BF7\u8F93\u5165"}],dateTime:[M,{showTime:!0,placeholder:"\u8BF7\u8F93\u5165"}],time:[W,{placeholder:"\u8BF7\u8F93\u5165"}],dateTimeRange:[M.RangePicker,{showTime:!0,placeholder:["\u8BF7\u8F93\u5165","\u8BF7\u8F93\u5165"]}],dateRange:[M.RangePicker,{placeholder:["\u8BF7\u8F93\u5165","\u8BF7\u8F93\u5165"]}],money:[ie,{placeholder:"\u8BF7\u8F93\u5165"}],digit:[ie,{placeholder:"\u8BF7\u8F93\u5165"}],select:[b.Z,{placeholder:"\u8BF7\u9009\u62E9"}],radio:[ne,{}],radioButton:[ne.Group,{optionType:"button"}],checkbox:[g.Group,{}],null:[function(){return null},{_just_placeholder:!0}]},de=fe,n=e(29541),me=d.Z.react.createElement,X=d.Z.antd,Ee=X.Button,Ie=X.Col,he=X.Form,Te=X.Input,be=X.Row,Me=X.Space,De=he.Item,Le=function(r){var h=r.columns,p=r.formProps,F=r.colProps,R=r.btnExtra,A=he.useForm(p==null?void 0:p.form),E=j()(A,1),C=E[0],$=F||{xs:24,sm:24,md:12,lg:12,xl:8,xxl:6};return(0,n.jsx)(x.Z,{formProps:t()({labelAlign:"left"},p),children:(0,n.jsxs)(be,{style:{margin:0},gutter:16,children:[h==null?void 0:h.reduce(function(L,s,a){var o,i,l=s.isCollapsed,v=s.order,S=s.colSpan,c=s.colSize,Q=s.hideInSearch,y=s.dataIndex,k=l?{background:"#E8EAEC"}:{},_=S||c||1,z=t()({},$);if(_!==1){for(var se in z)if(typeof(z==null?void 0:z[se])=="number"){var w=(z==null?void 0:z[se])*_;z[se]=w>24?24:w}}var ce=t()({order:v||24,key:y?y.toString():a},z),_e=t()({style:k,hidden:Q},s==null?void 0:s.formItemProps);return Q?L:L.concat((o=s==null||(i=s.renderItem)===null||i===void 0?void 0:i.call(s,t()(t()({},s),{},{formItemProps:_e}),ce))!==null&&o!==void 0?o:(0,n.jsx)(Ie,t()(t()({},ce),{},{children:Ue(t()(t()({},s),{},{formItemProps:_e}),C)})))},[]),(0,n.jsx)(Ie,{order:24,flex:"auto",children:(0,n.jsx)(he.Item,{style:{float:"right"},children:(0,n.jsxs)(Me,{children:[(0,n.jsx)(Ee,{htmlType:"submit",type:"primary",ghost:!0,children:"\u67E5\u8BE2"}),(0,n.jsx)(Ee,{type:"link",htmlType:"reset",children:"\u91CD\u7F6E"}),R!=null?R:[]]})})})]})})};function Ue(r,h){var p,F,R=r.title,A=r.tooltip,E=r.formItemProps,C=r.renderFormItem,$=r.hideInSearch,L=r.dataIndex,s=Ae(r),a=s==null||(p=s.props)===null||p===void 0?void 0:p._just_placeholder;return(0,n.jsx)(De,t()(t()({hidden:$,label:(0,f.ud)(R),name:L,tooltip:A,noStyle:a},E),{},{children:(F=C==null?void 0:C(r,s,h))!==null&&F!==void 0?F:s}))}function Be(r){return r instanceof Map?r==null?void 0:r.entries():K()(r)==="object"?Object==null?void 0:Object.entries(r):(console.warn("invalid valueEnum ",r),[])}function Ae(r){var h=r.valueEnum,p=r.valueType,F=r.fieldProps,R,A,E=[];if(h!==void 0){var C=Z()(Be(h)),$;try{for(C.s();!($=C.n()).done;){var L=j()($.value,2),s=L[0],a=L[1];E=[].concat(T()(E),[{label:(a==null?void 0:a.text)||a,value:s}])}}catch(i){C.e(i)}finally{C.f()}}if(typeof p=="string"){var o=j()(de[p],2);R=o[0],A=o[1]}else p===void 0&&h!==void 0?(R=b.Z,A={placeholder:"\u8BF7\u9009\u62E9"}):(R=Te,A={placeholder:"\u8BF7\u8F93\u5165"});return me(R,t()(t()(t()({},A),{},{options:E},F),{},{allowClear:!0}))}var Ze=e(42092),Ke=d.Z.antd.Form,Se=d.Z.react,Ce=Se.useState,pe=Se.useRef,We=d.Z.reactQuery.useQuery,$e=0;function ze(r){var h,p=r.queryKey,F=r.queryOptions,R=r.request,A=r.manualRequest,E=r.pagination,C=pe($e++),$=Ce(!A),L=j()($,2),s=L[0],a=L[1],o=Ke.useForm(),i=j()(o,1),l=i[0],v=Ce(),S=j()(v,2),c=S[0],Q=S[1],y=(0,Ze.Z)({onURLSearchChange:Q,key:"tableState"}),k=y.setURLSearch,_=We(w(p),P()(I()().mark(function te(){var q,ae,ee,Pe=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:for(q=Pe.length,ae=new Array(q),ee=0;ee<q;ee++)ae[ee]=Pe[ee];if(R!=null){u.next=5;break}u.t0=void 0,u.next=14;break;case 5:return u.t1=R,u.next=8,l.validateFields();case 8:u.t2=u.sent,u.t3=ce(),u.t4=c==null?void 0:c[2],u.t5=c==null?void 0:c[1],u.t6=ae,u.t0=(0,u.t1)(u.t2,u.t3,u.t4,u.t5,u.t6);case 14:return u.abrupt("return",u.t0);case 15:case"end":return u.stop()}},te)})),s===!1?{enabled:s}:F),z=pe(l),se=pe({reload:_.refetch,reset:l.resetFields,reloadAndReset:_e});function w(te){var q=te!=null?te:C.current;return[].concat(q,c)}function ce(){var te,q,ae,ee;return E!==!1?t()(t()({},E),{},{total:_==null||(te=_.data)===null||te===void 0?void 0:te.total,current:_==null||(q=_.data)===null||q===void 0?void 0:q.page,pageSize:(ae=(ee=E==null?void 0:E.pageSize)!==null&&ee!==void 0?ee:E==null?void 0:E.defaultPageSize)!==null&&ae!==void 0?ae:20,showQuickJumper:!0,showTotal:function(Fe,u){return"\u5171 ".concat(Fe," \u6761\u8BB0\u5F55 \u7B2C ").concat(u==null?void 0:u[0],"/").concat(u==null?void 0:u[1]," \u6761")}},c==null?void 0:c[0]):void 0}function _e(){k(void 0),l.resetFields(),_.refetch()}function or(){l.resetFields(),_.refetch()}function ar(){a(!0),k(void 0),_.refetch()}var lr=function(q,ae,ee){return k([q,ae,ee])};return{formHandler:{onReset:or,onFinish:ar,form:l},tableHandler:{onChange:lr,pagination:ce(),dataSource:_==null||(h=_.data)===null||h===void 0?void 0:h.data,loading:_==null?void 0:_.isFetching},actionRef:se,formRef:z,current:C.current}}var le={flex:"flex___s8Gk1",column:"column___tfNvn","space-between":"space-between____HJgZ",pagination:"pagination___G2qpM"},ye=d.Z.react.useRef,He=function(r){var h=ye(r==null?void 0:r.actionRef),p=ye(r==null?void 0:r.formRef);return{actionRef:h,formRef:p}},Ne=["columns","formRef","actionRef","formProps","queryKey","queryOptions","request","manualRequest","pagination","headerTitle","toolBarRender","children","tableCardRef"],je=d.Z.antd.Card;function Ge(r){var h=r.columns,p=r.formRef,F=r.actionRef,R=r.formProps,A=r.queryKey,E=r.queryOptions,C=r.request,$=r.manualRequest,L=r.pagination,s=r.headerTitle,a=r.toolBarRender,o=r.children,i=r.tableCardRef,l=m()(r,Ne),v=ze({queryKey:A,queryOptions:E,request:C,manualRequest:$,pagination:L}),S=v.formHandler,c=v.tableHandler,Q=v.actionRef,y=v.formRef;return p&&(p.current=y.current),F&&(F.current=Q.current),(0,n.jsxs)("div",{className:"".concat(le.flex," ").concat(le.column),children:[(0,n.jsx)(je,{children:(0,n.jsx)(Le,{columns:h,formProps:t()(t()({},S),R)})}),o,(0,n.jsx)("div",{ref:i,children:(0,n.jsx)(je,{children:(0,n.jsxs)("div",{className:"".concat(le.flex," ").concat(le.column),children:[(0,n.jsxs)("div",{className:"".concat(le.flex," ").concat(le==null?void 0:le["space-between"]),children:[(0,n.jsx)("div",{children:s}),(0,n.jsx)("div",{children:a})]}),(0,n.jsx)(f.ZP,t()(t()({size:"small",sticky:!0,columnEmptyText:"-",bordered:!0,columns:h},c),l))]})})})]})}var Je=e(25642),Qe=e(72754),Ve=e(91993),xe=e(37083),Oe=e(32297),Ye=e(98786),Xe=e(56918),ge=e(81445),ke=e(44502),we=e(95563),qe=e(66283),er=e(88235),rr=e(37401),D=e(67381),Re=Oe.Z.Link,ve=Oe.Z.Text,nr=function(){var r=He(),h=r.actionRef,p=r.formRef,F=(0,xe.Z)(),R=(0,xe.Z)(),A=[{dataIndex:"stock",title:"\u80A1\u7968",hideInSearch:!0,width:180,render:function(o){return(0,n.jsx)(qe.Z,{stock:o})}},{dataIndex:["stock","classify"],title:"\u677F\u5757",hideInSearch:!0},{dataIndex:"omitempty",title:"\u7701\u7565\u7A7A\u4ED3",hideInTable:!0,formItemProps:{valuePropName:"checked"},renderFormItem:function(){return(0,n.jsx)(Ye.Z,{})}},{dataIndex:"totalYield",title:"\u603B\u6536\u76CA",hideInSearch:!0,render:function(o,i){var l,v=i!=null?i:{},S=v.stock,c=v.totalShare,Q=v.totalCapital,y=v.totalDividend,k=(0,D.EU)(S==null?void 0:S.currentPrice,c).toFixed(3),_=(0,D.oO)(k,-Q,y).toFixed(3);return(0,n.jsx)(ve,{type:(0,D.Iw)(_)>0?"success":"danger",children:(l="\xA5".concat(_))!==null&&l!==void 0?l:"-"})}},{dataIndex:"yieldRate",title:"\u6536\u76CA\u7387",hideInSearch:!0,render:function(o,i){var l,v=i!=null?i:{},S=v.stock,c=v.totalShare,Q=v.totalCapital,y=v.totalDividend,k=v.stopProfit,_=v.stopLoss,z=(0,D.EU)(S==null?void 0:S.currentPrice,c).toFixed(3),se=(0,D.oO)(z,-Q,y).toFixed(3),w=((0,D.tA)(se,Q)*100).toFixed(3);return((0,D.Iw)(w)>=(0,D.Iw)(k)||(0,D.Iw)(w)<=(0,D.Iw)(_))&&(n.Fragment,Xe.Z,"\u8D85\u8FC7".concat((0,D.Iw)(w)>=(0,D.Iw)(k)?"\u6B62\u76C8":"\u6B62\u635F","\u70B9\uFF0C\u8BF7\u53CA\u65F6").concat((0,D.Iw)(w)>=(0,D.Iw)(k)?"\u6B62\u76C8":"\u6B62\u635F"),er.Z),(0,n.jsx)(ve,{type:(0,D.Iw)(w)>0?"success":"danger",children:(l="".concat(w,"%"))!==null&&l!==void 0?l:"-"})}},{dataIndex:["stock","currentPrice"],title:"\u73B0\u4EF7",hideInSearch:!0,prefix:"\xA5"},{dataIndex:"totalCapital",title:"\u603B\u6295\u5165",hideInSearch:!0,prefix:"\xA5"},{dataIndex:"totalDividend",title:"\u603B\u6D3E\u606F",hideInSearch:!0,prefix:"\xA5"},{dataIndex:"stopProfit",title:"\u6B62\u76C8\u70B9",hideInSearch:!0,render:function(o){return o!==void 0?(0,n.jsxs)(ve,{type:"success",children:[o,"% "]}):"-"}},{dataIndex:"stopLoss",title:"\u6B62\u635F\u70B9",hideInSearch:!0,render:function(o){return o!==void 0?(0,n.jsxs)(ve,{type:"danger",children:[o,"% "]}):"-"}},{dataIndex:"code",title:"\u64CD\u4F5C",hideInSearch:!0,width:200,fixed:"right",render:function(o,i){return(0,n.jsxs)(ge.Z,{children:[(0,n.jsx)(Re,{onClick:L(o),children:"\u65B0\u589E\u4EA4\u6613"}),(0,n.jsx)(Re,{onClick:$(o),children:"\u4EA4\u6613\u5386\u53F2"}),(0,n.jsx)(Re,{onClick:E(i),children:"\u7F16\u8F91"})]})}}];function E(a){return function(){F.setModalProps(function(o){return t()(t()({},o),{},{open:!0,title:"\u7F16\u8F91"})}),F.form.setFieldsValue(a)}}function C(){var a,o;(a=h.current)===null||a===void 0||(o=a.reload)===null||o===void 0||o.call(a)}function $(a){return function(){window.open("/stock/exchange/".concat(a))}}function L(a){return function(){R.setModalProps(function(o){return t()(t()({},o),{},{open:!0,title:"\u65B0\u589E"})}),R.form.setFieldsValue({code:a}),R.setData({code:a})}}function s(a){var o,i;(o=h.current)===null||o===void 0||(i=o.reload)===null||i===void 0||i.call(o),ke.Z.confirm({title:"\u63D0\u793A",content:"\u662F\u5426\u8DF3\u8F6C\u8BE6\u60C5\u9875",onOk:$(a)})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Qe.Z,t()(t()({},F),{},{onSuccess:C})),(0,n.jsx)(Ve.Z,t()(t()({},R),{},{onSuccess:s})),(0,n.jsx)(Ge,{rowKey:"code",columns:A,actionRef:h,formRef:p,formProps:{initialValues:{omitempty:!0}},headerTitle:(0,n.jsx)(ge.Z,{children:(0,n.jsx)(we.ZP,{icon:(0,n.jsx)(rr.Z,{}),type:"primary",ghost:!0,onClick:L(),children:"\u65B0\u589E"})}),scroll:{x:"max-content",y:"100%"},queryOptions:{refetchOnWindowFocus:!1},request:function(){var a=P()(I()().mark(function o(i,l){var v,S,c;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,Je.pb)({params:t()(t()({},i),{},{skip:((v=l==null?void 0:l.current)!==null&&v!==void 0?v:0)*((S=l==null?void 0:l.pageSize)!==null&&S!==void 0?S:0),limit:l==null?void 0:l.pageSize})});case 2:return c=y.sent,y.abrupt("return",{data:(c==null?void 0:c.data)||[],page:(l==null?void 0:l.current)||1,success:!0,total:(c==null?void 0:c.total)||0});case 4:case"end":return y.stop()}},o)}));return function(o,i){return a.apply(this,arguments)}}()})]})},tr=nr},941:function(ue,H,e){var V=e(55354),I=e.n(V),N=e(50680),P=e.n(N),Y=e(50540),t=e.n(Y),U=e(17567),m=e(42092),d=e(29541),f=["onFinish","onReset","name","form"],G=U.Z.antd.Form;H.Z=function(T){var oe=T.formProps,Z=T.children,J=oe||{},K=J.onFinish,B=J.onReset,j=J.name,x=j===void 0?"search_form":j,b=J.form,O=t()(J,f),re=b?[b]:G.useForm(),M=P()(re,1),W=M[0],ie=(0,m.Z)({key:x,onURLSearchChange:ne}),g=ie.setURLSearch;function ne(de){de?(W.setFieldsValue(de),K==null||K(de)):(W.resetFields(),B==null||B(de))}var fe=function(){for(var n=arguments.length,me=new Array(n),X=0;X<n;X++)me[X]=arguments[X];B==null||B.apply(void 0,me),g(O.initialValues)};return(0,d.jsx)(G,I()(I()({form:W,name:x,labelCol:{offset:1,span:6},wrapperCol:{span:17},onFinish:g,onReset:fe},O),{},{children:Z}))}},23663:function(ue,H,e){var V=e(55354),I=e.n(V),N=e(17567),P=e(4167),Y=e(86493),t=e(29541),U=N.Z.antd.Select;H.Z=function(m){return(0,Y.qC)(P.Z)((0,t.jsx)(U,I()({placeholder:"\u8BF7\u9009\u62E9"},m)))}},4167:function(ue,H,e){e.d(H,{Z:function(){return Y}});var V=e(17567),I=function(m){var d,f,G;return(d=m==null||(f=m.toString)===null||f===void 0||(G=f.call(m))===null||G===void 0?void 0:G.toLocaleLowerCase())!==null&&d!==void 0?d:""},N=function(m,d){return I(m).includes(I(d))},P=V.Z.react.cloneElement,Y=function(U){return P(U,{showSearch:!0,filterOption:t})},t=function(m,d){return N(d==null?void 0:d.value,m)||N(d==null?void 0:d.label,m)}},42092:function(ue,H,e){var V=e(54618),I=e.n(V),N=e(17567),P=e(7616),Y=N.Z.react.useLayoutEffect,t=function(d,f){return/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/.test(f)?I()(f):f},U=function(d,f){return I().isDayjs(f)?f==null?void 0:f.toISOString():f};H.Z=function(m){var d=m.key,f=m.reviver,G=f===void 0?t:f,T=m.replacer,oe=T===void 0?U:T,Z=m.onURLSearchChange,J=(0,P.s0)(),K=(0,P.TH)(),B=K.search,j=K.pathname,x="_".concat(d),b=new URLSearchParams(B),O=b.get(x);Y(function(){var M;if(O)try{M=JSON.parse(O,G)}catch(W){console.error("search form json \u683C\u5F0F\u9519\u8BEF")}Z==null||Z(M)},[O,x]);function re(M){if(M){var W=JSON.stringify(M,oe);b.get(x)!==W&&(b.set(x,W),J({pathname:j,search:"?".concat(b)}))}!M&&b.get(x)&&(b.delete(x),J({pathname:j,search:"?".concat(b)}))}return{setURLSearch:re}}}}]);

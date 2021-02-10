(this["webpackJsonphl-todo-app"]=this["webpackJsonphl-todo-app"]||[]).push([[0],{389:function(t,n,e){"use strict";e.r(n),e.d(n,"Main",(function(){return Bt}));var o=e(27),r=e(6),i=(e(0),e(21)),a=e.n(i),d=e(37),c=e(28),s=e(431),u=e(232),l=e(234),x=!!navigator.userAgent.match(/iPhone|Android.+Mobile/),b="\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044",f="".concat(x?10:12,"\u6587\u5b57\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044"),p="\u30ab\u30fc\u30c9\u306f".concat(10,"\u679a\u4ee5\u4e0a\u306f\u3001\u4f5c\u308c\u307e\u305b\u3093"),j=function(t,n){return t.trim().length>n},O=e(439),g=e(433),h=e(122),v=e.n(h),m=v()(),T={openAlert:m("OPEN_ALERT"),closeAlert:m("CLOSE_ALERT")},C=function(){var t=Object(d.c)((function(t){return t.alert})),n=Object(d.b)();return Object(r.jsx)(O.a,{open:t.open,onClose:function(){n(T.closeAlert({}))},children:Object(r.jsx)(g.a,{elevation:6,variant:"filled",severity:t.severity,children:t.message})})},L=e(34),w=e(432),y=e(425),D=e(159),E=e.n(D),_=e(435),F=e(436),S="card",A=function(t){var n=t.id,e=t.moveCard,o=t.findCard,i=t.children,a=o(n).index,d=Object(_.a)({item:{type:S,id:n,originalIndex:a},collect:function(t){return{isDragging:t.isDragging()}},end:function(t,n){var o=n.getItem(),r=o.id,i=o.originalIndex;n.didDrop()||e(r,i)}}),c=Object(L.a)(d,2),s=c[0].isDragging,u=c[1],l=Object(F.a)({accept:S,canDrop:function(){return!1},hover:function(t){var r=t.id;if(r!==n){var i=o(n).index;e(r,i)}}}),x=Object(L.a)(l,2)[1],b=s?.1:1;return Object(r.jsx)("div",{ref:function(t){return u(x(t))},style:{cursor:"move",opacity:b},children:i})},I=v()(),k={setTodoCardTitle:I("SET_TODO_CARD_TITLE"),addTodoCardList:I("ADD_TODO_CARD_LIST"),setTodoText:I("SET_TODO_TEXT"),addTodo:I("ADD_TODOS"),setDoneFlg:I("SET_DONE_FLG"),sortTodoCardList:I("SORT_TODO_CARD_LIST"),deleteTodoCard:I("DELETE_TODO_CARD"),deleteTodo:I("DELETE_TODO")},z=function(t,n){var e=n.todoCardList.filter((function(n){return"".concat(n.id)===t}))[0];return{card:e,index:n.todoCardList.indexOf(e)}};function R(){var t=Object(o.a)(["\n  margin: 0;\n  width: 100%;\n"]);return R=function(){return t},t}function M(){var t=Object(o.a)(["\n  width: 100%;\n\n  @media (max-width: 850px) {\n    font-size: 10px;\n  }\n"]);return M=function(){return t},t}function K(){var t=Object(o.a)(["\n  position: absolute;\n  top: -1px;\n  right: 0px;\n  transition: 0.1s;\n\n  @media (max-width: 850px) {\n    top: 4px;\n    right: -3px;\n  }\n\n  :active {\n    transform: translate(1px, 1px);\n    box-shadow: none;\n  };\n"]);return K=function(){return t},t}function N(){var t=Object(o.a)(["\n  position: relative;\n  display: table-cell;\n  margin: 8px 0;\n  white-space: nowrap;\n\n  @media (max-width: 850px) {\n    margin: 0;\n  }\n"]);return N=function(){return t},t}function X(){var t=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 80%;\n  width: 100%;\n  border-top: 1.5px solid #33322E;\n  box-sizing: border-box;\n"]);return X=function(){return t},t}function B(){var t=Object(o.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 220px;\n  height: 300px;\n  margin-top: 15px;\n  border: 4px solid #33322E;\n  box-sizing: border-box;\n  box-shadow: 12px 12px 0px #33322E;\n  background: #F9F3E5;\n  border-radius: 24px;\n\n  @media (max-width: 850px) {\n    width: 130px;\n    height: 180px;\n    margin-top: 2px;\n  }\n"]);return B=function(){return t},t}function P(){var t=Object(o.a)(["\n  position: absolute;\n  top: -10px;\n  right: -5px;\n  transition: 0.1s;\n  background: #ebebeb;\n  border: 1px solid #33322E;\n  box-sizing: border-box;\n  font-size: 5px;\n  border-radius: 17px;\n  box-shadow: 1px 1px 0px;\n  outline: none;\n  overflow: visible;\n\n  @media (max-width: 850px) {\n    top: -13px;\n    right: -10px;\n  }\n  :active {\n    transform: translate(1px, 1px);\n    box-shadow: none;\n  };\n"]);return P=function(){return t},t}function G(){var t=Object(o.a)(["\n  position: absolute;\n  height: 20px;\n  width: 90%;\n  top: 1px;\n  font-size: 15px;\n  text-align: center;\n  white-space:\u3000nowrap;\n  overflow: scroll;\n\n  @media (max-width: 850px) {\n    font-size: 10px;\n  }\n"]);return G=function(){return t},t}function J(){var t=Object(o.a)(["\n  display: grid;\n  grid-template-rows: 300px 1fr;\n  grid-template-columns: 240px 240px 240px 240px 240px;\n  grid-gap: 16px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 70px;\n\n  @media (max-width: 850px) {\n    grid-template-rows: 180px 180px 180px 180px 180px;\n    grid-template-columns: 130px 130px;\n    grid-gap: 8px;\n    margin: 0 30px;\n  }\n  ::before {\n    transition: all 1.5s;\n    opacity: 1;\n  }\n"]);return J=function(){return t},t}var U=c.b.div(J()),V=c.b.div(G()),W=c.b.button(P()),$=c.b.div(B()),Z=c.b.div(X()),q=c.b.div(N()),H=Object(c.b)(E.a)(K()),Q=c.b.label(M()),Y=Object(c.b)(w.a)(R()),tt=x?10:12,nt=function(t){var n=t.addTodo,e=void 0===n?function(){}:n,o=t.setTodoText,i=void 0===o?function(){}:o,a=t.setDoneFlg,c=void 0===a?function(){}:a,s=t.openAlert,u=void 0===s?function(){}:s,l=t.deleteTodoCard,x=void 0===l?function(){}:l,b=t.deleteTodo,p=void 0===b?function(){}:b,O=Object(d.c)((function(t){return t.todoCard})),g=Object(d.b)(),h=function(t,n){g(function(t,n,e){var o=z(t,e),r=o.card,i=o.index;return k.sortTodoCardList({card:r,index:i,atIndex:n})}(t,n,O))},v=function(t){return{index:z(t,O).index}},m=Object(y.a)("(max-width: 850px)"),T=Object(F.a)({accept:S}),C=Object(L.a)(T,2)[1];return Object(r.jsx)(U,{ref:C,children:O.todoCardList.length>0&&O.todoCardList.map((function(t,n){return Object(r.jsx)(A,{id:"".concat(t.id),card:t,moveCard:h,findCard:v,children:Object(r.jsxs)($,{children:[Object(r.jsx)(V,{children:t.title}),Object(r.jsx)(W,{onClick:function(t){return x(n)},children:Object(r.jsx)(E.a,{style:m?{fontSize:14}:{fontSize:20}})}),Object(r.jsxs)(Z,{children:[t.todos.map((function(t,e){return Object(r.jsxs)(q,{children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(o){return c(!t.doneFlg,n,e)},checked:t.doneFlg}),Object(r.jsx)(Q,{children:t.doneFlg?Object(r.jsx)("del",{children:t.todoText}):t.todoText}),Object(r.jsx)(H,{style:m?{fontSize:17}:{fontSize:20},onClick:function(t){return p(n,e)}})]},e)})),t.todos.length<6&&Object(r.jsx)(q,{children:Object(r.jsx)(Y,{size:"medium",value:O.todoCardList[n].provTodoText,onChange:function(t){j(t.target.value,tt)?u("error",f):i(t.target.value,n)},onKeyPress:function(t){"Enter"===t.key&&O.todoCardList[n].provTodoText&&e(O.todoCardList[n].provTodoText,!1,n)},onBlur:function(t){O.todoCardList[n].provTodoText&&e(O.todoCardList[n].provTodoText,!1,n)}})})]})]})},n)}))})};function et(){var t=Object(o.a)(["\n  transition: 0.1s;\n  vertical-align: middle;\n  background: #D0F4F0;\n  border: 2px solid #33322E;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 4px;\n  box-shadow: 3px 3px 0px;\n  outline: none;\n\n  :active {\n    transform: translate(1px, 1px);\n    box-shadow: none;\n  };\n"]);return et=function(){return t},t}function ot(){var t=Object(o.a)(["\n  vertical-align: middle;\n  border: 2px solid #33322E;\n  border-radius: 4px;\n  width: 35%;\n  height: 26px;\n  outline: none;\n"]);return ot=function(){return t},t}function rt(){var t=Object(o.a)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30px;\n\n  @media (max-width: 850px) {\n    margin-top: 80px;\n  }\n"]);return rt=function(){return t},t}var it=c.b.div(rt()),at=c.b.input(ot()),dt=c.b.button(et()),ct=!1,st=x?10:12,ut=function(t){var n=t.setTodoCardTitle,e=void 0===n?function(){}:n,o=t.addTodoCardList,i=void 0===o?function(){}:o,a=t.openAlert,c=void 0===a?function(){}:a,s=Object(d.c)((function(t){return t.todoCard})),u=function(t,n){t.trim()?j(t,12)?c("error",b):function(t,n){return t.length>n}(n,10)?c("error",p):i(t):c("error",b)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(it,{children:[Object(r.jsx)(at,{value:s.provTitle,onCompositionStart:function(t){ct=!1},onCompositionEnd:function(t){ct=!0},onChange:function(t){return n=t.target.value,void(j(n,st)?c("error",f):e(n));var n},onKeyDown:function(t){return(ct||s.provTitle.match(/^[A-Za-z0-9]*$/))&&"Enter"===t.key&&u(s.provTitle,s.todoCardList)}}),Object(r.jsx)(dt,{onClick:function(t){return u(s.provTitle,s.todoCardList)},children:"Create Card"})]})})},lt=e(426),xt=e(430),bt=e(226),ft=e(227),pt=e(138),jt=e(105),Ot=e(235),gt=e(438),ht=e(228),vt=e(53),mt=["#00ffea","#b600fe","#00C49F","#FFBB28","#00a2ff","#ff0000","#27a700","#fffb00","#fe00dc","#000294"];function Tt(){var t=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 10px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 70px;\n  overflow: scroll;\n\n  @media (max-width: 850px) {\n    grid-template-columns: 1fr;\n    grid-gap: 3px;\n    margin: 0 30px;\n  }\n"]);return Tt=function(){return t},t}var Ct=c.b.div(Tt()),Lt=function(){var t=Object(d.c)((function(t){return t.todoCard})),n=Object(y.a)("(max-width: 850px)"),e=function(t){var n=t.todoCardList.map((function(t,n){return{name:t.title,completed:t.todos.length?Math.floor(t.todos.filter((function(t){return t.doneFlg})).length/6*100):0,uncompleted:t.todos.length?Math.floor(t.todos.filter((function(t){return!t.doneFlg})).length/6*100):0}})),e=10-n.length;return e?[].concat(Object(vt.a)(n),Object(vt.a)(Object(vt.a)(Array(e)).map((function(){return{name:"",uncompleted:0,completed:0}})))):n}(t),o=function(t){var n=t.todoCardList.map((function(t,n){return t.todos.filter((function(t,n){return t.doneFlg}))})).flat().length,e=t.todoCardList.map((function(t,n){return t.todos})).flat().length,o=Math.floor(n/e*100),r=t.todoCardList.map((function(t,n){var e=Math.floor(t.todos.filter((function(t,n){return t.doneFlg})).length/t.todos.length*100);return{name:t.title,uv:e||0,fill:"".concat(mt[n%mt.length])}}));return[{name:"",uv:100,fill:"#ffffff"},{name:"\u5168\u4f53\u5b8c\u4e86\u7387",uv:o||0,fill:"#00ff68"}].concat(Object(vt.a)(r))}(t);return Object(r.jsxs)(Ct,{children:[Object(r.jsxs)(lt.a,{width:n?400:500,height:300,data:e,margin:{top:20,right:30,left:20,bottom:5},children:[Object(r.jsx)(xt.a,{strokeDasharray:"3 3"}),Object(r.jsx)(bt.a,{dataKey:"name"}),Object(r.jsx)(ft.a,{type:"number",domain:[0,100]}),Object(r.jsx)(pt.a,{}),Object(r.jsx)(jt.a,{}),Object(r.jsx)(Ot.a,{dataKey:"completed",stackId:"a",fill:"#82ca9d"}),Object(r.jsx)(Ot.a,{dataKey:"uncompleted",stackId:"a",fill:"#8884d8"})]}),Object(r.jsxs)(gt.a,{width:n?400:500,height:n?200:300,cx:n?150:350,cy:n?100:150,innerRadius:n?15:30,outerRadius:n?100:150,barSize:n?8:14,data:o,children:[Object(r.jsx)(ht.a,{label:{position:"insideStart",fill:"#fff"},background:!0,dataKey:"uv"}),Object(r.jsx)(jt.a,{iconSize:n?0:10,width:n?120:200,height:n?100:140,layout:n?"vertical":"radial",verticalAlign:"top",align:n?"right":"center"})]})]})},wt=function(){var t=Object(d.b)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Lt,{}),Object(r.jsx)(ut,{setTodoCardTitle:function(n){t(k.setTodoCardTitle(n))},addTodoCardList:function(n){t(k.addTodoCardList(n))},openAlert:function(n,e){t(T.openAlert({severity:n,message:e}))}}),Object(r.jsx)(nt,{addTodo:function(n,e,o){t(k.addTodo({provTodoText:n,doneFlg:e,index:o}))},setTodoText:function(n,e){t(k.setTodoText({provTodoText:n,index:e}))},setDoneFlg:function(n,e,o){t(k.setDoneFlg({doneFlg:n,cardIndex:e,index:o}))},openAlert:function(n,e){t(T.openAlert({severity:n,message:e}))},deleteTodoCard:function(n){t(k.deleteTodoCard({cardIndex:n}))},deleteTodo:function(n,e){t(k.deleteTodo({cardIndex:n,todoIndex:e}))}})]})};function yt(){var t=Object(o.a)(["\n  margin-left: 16px;\n"]);return yt=function(){return t},t}function Dt(){var t=Object(o.a)(["\n  width: 100%;\n"]);return Dt=function(){return t},t}var Et=c.b.header(Dt()),_t=c.b.h1(yt()),Ft=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Et,{children:Object(r.jsx)(_t,{children:"Todo"})}),Object(r.jsx)(s.a,{backend:x?l.a:u.a,children:Object(r.jsx)(wt,{})}),Object(r.jsx)(C,{})]})},St=e(58),At=e(19),It=e(131),kt=Object(It.reducerWithInitialState)({open:!1,message:"",severity:"error"}).case(T.openAlert,(function(t,n){return Object(At.a)(Object(At.a)({},n),{},{open:!0})})).case(T.closeAlert,(function(t){return Object(At.a)(Object(At.a)({},t),{},{message:"",open:!1})})),zt=e(231),Rt=e.n(zt),Mt=Object(It.reducerWithInitialState)({provTitle:"",todoCardList:[]}).case(k.setTodoCardTitle,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{provTitle:n})})).case(k.addTodoCardList,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{provTitle:"",todoCardList:[].concat(Object(vt.a)(t.todoCardList),[{id:t.todoCardList.length+1,title:n,provTodoText:"",todos:[]}])})})).case(k.setTodoText,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:t.todoCardList.map((function(t,e){return e===n.index?Object(At.a)(Object(At.a)({},t),{},{provTodoText:n.provTodoText}):t}))})})).case(k.addTodo,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:t.todoCardList.map((function(t,e){return e===n.index?Object(At.a)(Object(At.a)({},t),{},{provTodoText:"",todos:[].concat(Object(vt.a)(t.todos),[{id:t.todos.length+1,todoText:n.provTodoText,doneFlg:n.doneFlg}])}):t}))})})).case(k.setDoneFlg,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:t.todoCardList.map((function(t,e){return e===n.cardIndex?Object(At.a)(Object(At.a)({},t),{},{todos:Object(vt.a)(t.todos.map((function(t,e){return e===n.index?Object(At.a)(Object(At.a)({},t),{},{doneFlg:n.doneFlg}):t})))}):t}))})})).case(k.sortTodoCardList,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:Rt()(t.todoCardList,{$splice:[[n.index,1],[n.atIndex,0,n.card]]})})})).case(k.deleteTodoCard,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:t.todoCardList.filter((function(t,e){return e!==n.cardIndex}))})})).case(k.deleteTodo,(function(t,n){return Object(At.a)(Object(At.a)({},t),{},{todoCardList:t.todoCardList.map((function(t,e){return e===n.cardIndex?Object(At.a)(Object(At.a)({},t),{},{todos:t.todos.filter((function(t,e){return e!==n.todoIndex}))}):t}))})})),Kt=Object(St.d)(Object(St.b)({todoCard:Mt,alert:kt}),Object(St.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));function Nt(){var t=Object(o.a)(['\n  body * {\n    box-sizing: border-box;\n    font-family: Osaka,"\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af","MS PGothic",Sans-Serif;\n  }\n']);return Nt=function(){return t},t}var Xt=Object(c.a)(Nt()),Bt=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Xt,{}),Object(r.jsx)(d.a,{store:Kt,children:Object(r.jsx)(Ft,{})})]})};a.a.render(Object(r.jsx)(Bt,{}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.f4f36ca4.chunk.js.map
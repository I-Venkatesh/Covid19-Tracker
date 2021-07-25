(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{134:function(e,t,c){},135:function(e,t,c){},137:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){},254:function(e,t,c){},274:function(e,t,c){},275:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(16),r=c.n(s),i=(c(134),c(135),c(9)),o=c(32),j=c(19),l=c.n(j),d=c(28),b=c(13),h=c(326),u=c(333),O=c(334),x=c(336),f=c(335),p=c(337),m=c(347),v=c(346),g=(c(137),c.p+"static/media/active.082647ff.jpg"),y=c.p+"static/media/deaths.1f98b0c4.jpg",C=c.p+"static/media/recovered.188dbdb5.jpg",N=c(338),w=c(15),k=function(e){return Object(w.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},S=c(2),B=Object(n.createContext)(),D=function(e){var t=Object(n.useState)(),c=Object(b.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),i=Object(b.a)(r,2),o=i[0],j=i[1],h=Object(n.useState)(),u=Object(b.a)(h,2),O=u[0],x=u[1];return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=k(c),j(n),x(n.slice(0,10));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(S.jsx)(B.Provider,{value:[a,s,o,j,O,x],children:e.children})},R=c(84),W=Object(h.a)((function(e){return{root:{width:350,alignItems:"center","@media (max-width: 1450px)":{width:300},"@media (max-width: 800px)":{width:350}},media:{height:200,maxWidth:350},formControl:{margin:e.spacing(0),minWidth:220},selectEmpty:{marginTop:e.spacing(0)}}}));function E(){var e,t,c,a=W(),s=Object(n.useState)(""),r=Object(b.a)(s,2),j=r[0],h=r[1],w=Object(n.useState)(""),k=Object(b.a)(w,2),D=k[0],E=k[1],T=Object(n.useState)([]),z=Object(b.a)(T,2),I=z[0],A=z[1],L=Object(n.useContext)(B),H=Object(b.a)(L,4),P=H[0];H[1],H[2],H[3];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries/".concat(j)).then((function(e){return e.json()})).then((function(e){return E(e)}))}),[j]);var M=[];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).length>0&&c.map((function(e){return M.push({title:e.country})})),M.push({title:"Worldwide"}),A(M);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("div",{className:"header-top",children:Object(S.jsx)("h1",{children:"Covid-19 Tracker"})}),Object(S.jsxs)("div",{className:"head",children:[Object(S.jsxs)("div",{className:"head-selected",children:[Object(S.jsx)("h2",{className:"selected-name",children:""===j?"Worldwide":j}),Object(S.jsx)("div",{className:"selector",children:Object(S.jsx)(v.a,{id:"combo-box-demo",options:I,getOptionLabel:function(e){return e.title},onChange:function(e,t){t&&("Worldwide"===t.title?h(""):h(t.title))},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},renderInput:function(e){return Object(S.jsx)(m.a,Object(o.a)(Object(o.a)({style:{backgroundColor:"#fffff9"}},e),{},{label:"Country",variant:"outlined"}))}})})]}),Object(S.jsxs)("div",{className:"header-content",children:[Object(S.jsx)("div",{className:"card",children:Object(S.jsx)(u.a,{className:a.root,children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(f.a,{className:a.media,image:g,title:"Contemplative Reptile"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{display:"flex",justifyContent:"center",fontWeight:600},children:"Coronavirus Cases"}),Object(S.jsx)(p.a,(e={variant:"body2"},Object(i.a)(e,"variant","h5"),Object(i.a)(e,"component","h2"),Object(i.a)(e,"style",{display:"flex",justifyContent:"center",color:"#5a5958"}),Object(i.a)(e,"children",""===j?P&&R(P.cases):R(D.cases)?R(D.cases):Object(S.jsx)(N.a,{})),e))]})]})})}),Object(S.jsx)("div",{className:"card",children:Object(S.jsx)(u.a,{className:a.root,children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(f.a,{className:a.media,image:y,title:"Contemplative Reptile"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{display:"flex",justifyContent:"center",fontWeight:600},children:"Deaths"}),Object(S.jsx)(p.a,(t={variant:"body2",color:"textSecondary"},Object(i.a)(t,"variant","h5"),Object(i.a)(t,"component","h2"),Object(i.a)(t,"style",{display:"flex",justifyContent:"center",color:"#5a5958"}),Object(i.a)(t,"children",""===j?P&&R(P.deaths):R(D.deaths)?R(D.deaths):Object(S.jsx)(N.a,{})),t))]})]})})}),Object(S.jsx)("div",{className:"card",children:Object(S.jsx)(u.a,{className:a.root,children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(f.a,{className:a.media,image:C,title:"Contemplative Reptile"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{display:"flex",justifyContent:"center",fontWeight:600},children:"Recovered"}),Object(S.jsx)(p.a,(c={variant:"body2",color:"textSecondary"},Object(i.a)(c,"variant","h5"),Object(i.a)(c,"component","h2"),Object(i.a)(c,"style",{display:"flex",justifyContent:"center",color:"#5a5958"}),Object(i.a)(c,"children",""===j?P&&R(P.recovered):R(D.recovered)?R(D.recovered):Object(S.jsx)(N.a,{})),c))]})]})})})]})]})]})}var T=c(5),z=c(342),I=c(344),A=c(339),L=c(341),H=c(343),P=c(340),M=c(276),J=c(119),F=c.n(J),Y=(c(147),c(349)),q=c(350),G=c(345),K=c(84),Q=Object(h.a)({table:{width:"100%"},img:{paddingRight:"20px",alignItem:"center",height:"16px",width:"25px"}}),U=Object(T.a)((function(e){return{head:{backgroundColor:"rgb(2, 1, 59)",color:e.palette.common.white,fontSize:19,fontWeight:400,height:50,"@media (max-width: 1450px)":{fontSize:15},"@media (max-width: 1110px)":{fontSize:12}},body:{fontSize:19,fontWeight:500,"@media (max-width: 1450px)":{fontSize:14},"@media (max-width: 1110px)":{fontSize:11}}}}))(A.a),V=Object(T.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(P.a);var X=function(){var e=Q(),t=function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.selected,O(c),y(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(n.useContext)(B),a=Object(b.a)(c,6),s=(a[0],a[1],a[2]),r=(a[3],a[4]),i=a[5],o=0,j=Object(n.useState)(0),h=Object(b.a)(j,2),u=h[0],O=h[1],x=Object(n.useState)(10),f=Object(b.a)(x,2),p=f[0],m=f[1],v=Object(n.useState)(0),g=Object(b.a)(v,2),y=(g[0],g[1]),C=Object(n.useState)(0),N=Object(b.a)(C,2),w=N[0],k=N[1],D=Object(n.useState)(1),R=Object(b.a)(D,2),W=R[0],E=R[1];Object(n.useEffect)((function(){i(s.slice(w,parseInt(w)+parseInt(p))),E(u*p),k(u*p),o=u*p}),[w,u,p]),console.log(r);for(var T=[],A=0;A<=20;)T.push(A+=5);return o=W+1,console.log(o),Object(S.jsxs)("div",{className:"table",children:[Object(S.jsxs)("div",{className:"table-top",children:[Object(S.jsx)("div",{className:"dropdown",children:Object(S.jsxs)(Y.a,{variant:"outlined",className:e.formControl,children:[Object(S.jsx)(q.a,{htmlFor:"outlined-age-native-simple",children:"Entries"}),Object(S.jsx)(G.a,{style:{width:"170%",height:"90%",backgroundColor:"#fcfcfc"},native:!0,value:p,onChange:function(e){return m(e.target.value)},label:"Entries",inputProps:{name:"Entries",id:"outlined-age-native-simple"},children:T.map((function(e){return Object(S.jsx)("option",{value:e,children:e})}))})]})}),Object(S.jsx)("div",{className:"pagination",children:Object(S.jsx)(F.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:Math.ceil(s.length/p),onPageChange:t,containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})})]}),Object(S.jsx)("div",{children:Object(S.jsx)(L.a,{component:M.a,children:Object(S.jsxs)(z.a,{className:e.table,"aria-label":"customized table",children:[Object(S.jsx)(H.a,{children:Object(S.jsxs)(P.a,{children:[Object(S.jsx)(U,{children:"#"}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Country"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Total Cases"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"New Cases"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Total Deaths"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"New Deaths"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Total Recovered"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"New Recovered"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Active Cases"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Serious, Critical"})}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"Population"})})]})}),Object(S.jsxs)(I.a,{children:[r&&r.map((function(t){return Object(S.jsxs)(V,{children:[Object(S.jsx)(U,{children:o++}),Object(S.jsxs)(U,{children:[Object(S.jsx)("img",{className:e.img,src:t.countryInfo.flag}),Object(S.jsx)("strong",{children:t.country})]}),Object(S.jsx)(U,{children:K(t.cases)}),Object(S.jsx)(U,{style:{backgroundColor:"#ffff99"},children:K(t.todayCases)}),Object(S.jsx)(U,{children:K(t.deaths)}),Object(S.jsx)(U,{style:{backgroundColor:"#ff0000"},children:K(t.todayDeaths)}),Object(S.jsx)(U,{children:K(t.recovered)}),Object(S.jsx)(U,{style:{backgroundColor:"#98e1bd"},children:K(t.todayRecovered)}),Object(S.jsx)(U,{children:K(t.active)}),Object(S.jsx)(U,{children:K(t.critical)}),Object(S.jsx)(U,{children:K(t.population)})]})})),!r&&Object(S.jsxs)(V,{children:[Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{children:Object(S.jsx)("strong",{children:"...loading"})}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{}),Object(S.jsx)(U,{})]})]})]})})})]})};c(148);var Z=function(){return Object(S.jsx)("footer",{className:"footer",children:Object(S.jsx)("h2",{className:"name",children:"Covid 19-Tracker"})})},$=c(122),_=c(79),ee=c.n(_),te=(c(254),{plugins:{legend:{display:!1}},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return ee()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return ee()(e).format("0a")}}}]}});var ce=function(e){var t=e.casesType,c=e.title,a=Object(n.useState)({}),s=Object(b.a)(a,2),r=s[0],i=s[1],o=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=o(e,t);i(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)("div",{className:"graph",children:[Object(S.jsx)("h2",{className:"title",children:c}),r.length>0&&Object(S.jsx)($.a,{options:te,data:{datasets:[{fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r}]}})]})};c(255),c(274);var ne=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(E,{}),Object(S.jsx)(X,{}),Object(S.jsxs)("div",{className:"graphs",children:[Object(S.jsx)(ce,{casesType:"cases",title:"Daily New Cases"}),Object(S.jsx)(ce,{casesType:"recovered",title:"Daily Recovered"}),Object(S.jsx)(ce,{casesType:"deaths",title:"Daily Deaths"})]}),Object(S.jsx)(Z,{})]})};var ae=function(){return Object(S.jsx)(D,{children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(ne,{})})})};r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(ae,{})}),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.97c11b21.chunk.js.map
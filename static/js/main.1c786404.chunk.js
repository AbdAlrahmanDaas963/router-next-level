(this.webpackJsonpfull=this.webpackJsonpfull||[]).push([[0],{90:function(e,t,i){},97:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(78),l=i.n(c),r=(i(90),i(101)),s=i(7),o=i(99),d=i(2);var j=function(e){var t=e.Name,i=e.Skilles;return Object(d.jsxs)(o.a.div,{children:[Object(d.jsx)(o.a.div,{variants:{initial:{scale:2},animate:{scale:1,x:"-80px",y:"-90px",transition:{delay:.5}}},initial:"initial",animate:"animate",children:t}),Object(d.jsx)(o.a.div,{variants:{initial:{scale:2,opacity:0},animate:{scale:1,opacity:1,x:"-80px",transition:{delay:1}}},initial:"initial",animate:"animate",children:i})]})},u=function(e){var t=e.exit,i=e.initial,n=e.animate;return Object(d.jsx)(o.a.div,{initial:{rotateX:i},animate:{rotateX:n},exit:{rotateX:t},className:"section first",children:Object(d.jsx)(j,{Name:"AbdAlrahman",Skilles:"Front-end developer"})})},b=function(e){var t=e.exit,i=e.initial,n=e.animate;return Object(d.jsx)(o.a.div,{initial:{rotateX:i},animate:{rotateX:n},exit:{rotateX:t},className:"section secound",children:Object(d.jsx)(j,{Name:"Eile",Skilles:"Full-stack developer"})})},x=function(e){var t=e.exit,i=e.initial,n=e.animate;return Object(d.jsx)(o.a.div,{initial:{rotateX:i},animate:{rotateX:n},exit:{rotateX:t},className:"section third",children:Object(d.jsx)(j,{Name:"Sipua",Skilles:"UX-UI designer"})})},m=function(){var e=Object(s.f)(),t="180deg",i="-180deg",n="0deg";return Object(d.jsx)("div",{className:"target",children:Object(d.jsx)("div",{className:"target-in",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(s.c,{location:e,children:[Object(d.jsx)(s.a,{hehe:"hee",path:"/",exact:!0,component:function(){return Object(d.jsx)(u,{exit:t,initial:i,animate:n})}}),Object(d.jsx)(s.a,{path:"/secound",component:function(){return Object(d.jsx)(b,{exit:t,initial:i,animate:n})}}),Object(d.jsx)(s.a,{path:"/third",component:function(){return Object(d.jsx)(x,{exit:t,initial:i,animate:n})}})]},e.key)})})})},h=i(81),O=i(82),v=i(84),p=i(83),f=i(55),g=i(100),k=function(e){Object(v.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(h.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={items:[{id:1,color:"rgb(19, 120, 160)",title:"AbdAlrahman",link:"/"},{id:2,color:"rgb(169, 172, 37)",title:"Eile",link:"/secound"},{id:3,color:"rgb(17, 17, 17)",title:"Sipua",link:"/third"}],selectedId:1},e.handleClick=function(t){e.setState({selectedId:t}),console.log("click")},e}return Object(O.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.items,n=t.selectedId;return Object(d.jsx)("ul",{className:"ul",children:Object(d.jsx)(g.a,{children:i.map((function(t){return Object(d.jsxs)("li",{animate:{color:t.color},children:[Object(d.jsx)(f.b,{to:t.link,onClick:function(){return e.handleClick(t.id)},animate:{color:t.color},children:t.title}),t.id===n&&Object(d.jsx)(o.a.div,{layoutId:"underline",className:"underline",animate:{backgroundColor:t.color}})]},t.id)}))})})}}]),i}(n.Component);var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(k,{})]})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,102)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;i(e),n(e),a(e),c(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(N,{})})}),document.getElementById("root")),y()}},[[97,1,2]]]);
//# sourceMappingURL=main.1c786404.chunk.js.map
(this.webpackJsonpAPISEARCH=this.webpackJsonpAPISEARCH||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),o=(c(9),c(2)),i=(c(10),c(11),c(0));var u=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),l=u[0],j=u[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Search a Rick and Morty character"}),Object(i.jsxs)("div",{className:"searchCont",children:[Object(i.jsxs)("form",{className:"cont",onSubmit:function(t){t.preventDefault(),e.escrito(l),a(!0)},children:[Object(i.jsx)("input",{type:"text",placeholder:"texto",className:"texto",onChange:function(e){j(e.target.value)}}),Object(i.jsx)("input",{type:"image",src:"lupa.png",alt:"lupa",className:"lupa"})]}),1==s&&Object(i.jsx)("button",{className:"nxt",onClick:function(){e.cambiar(1)},children:"NEXT"})]})]})};c(13);var l=function(e){return Object(i.jsx)("div",{className:"results",children:Object(i.jsxs)("div",{className:"results-cont",children:[Object(i.jsx)("img",{className:"results-foto",src:e.foto,alt:"foto"}),Object(i.jsx)("h1",{className:"results-nombre",children:e.nombre}),Object(i.jsxs)("p",{className:"results-info1",children:["Gender: ",e.genero]}),Object(i.jsxs)("p",{className:"results-info2",children:["Species: ",e.especie]})]})})};var j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),j=r[0],b=r[1],f=Object(n.useState)(1),h=Object(o.a)(f,2),d=h[0],p=h[1];return Object(n.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/?page=".concat(d)).then((function(e){return e.json()})).then((function(e){s(e.results),console.log(e.results),p(2)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("header",{children:Object(i.jsx)(u,{escrito:function(e){console.log("lo capturado en App es "+e),b(e)},cambiar:function(e){p((function(t){return t+e})),console.log("offset es "+d),fetch("https://rickandmortyapi.com/api/character/?page=".concat(d)).then((function(e){return e.json()})).then((function(e){s(e.results)}))}})}),c.filter((function(e){return""===j?Object(i.jsx)("p",{children:"No results"}):e.name.toLowerCase().includes(j.toLowerCase())?e:void 0})).map((function(e){return Object(i.jsx)(l,{nombre:e.name,foto:e.image,genero:e.gender,especie:e.species,id:e.id})}))]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.f96594e1.chunk.js.map